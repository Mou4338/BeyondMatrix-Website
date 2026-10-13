// Vercel Serverless Function: POST /api/inquiry
// Validates a consultation / contact inquiry and emails it to your team via Resend (https://resend.com).
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY   your Resend API key
//   NOTIFY_EMAIL     where new inquiries are sent, e.g. info@beyondmatrix.in
//   FROM_EMAIL       a sender on a domain verified in Resend, e.g. "Beyondmatrix Website <website@beyondmatrix.in>"
// Optional:
//   SEND_ACKNOWLEDGEMENT=true   also email the visitor a confirmation

const SERVICES = {
  'ipo-advisory': 'IPO Advisory',
  'fund-raising': 'Fund Raising',
  'debt-advisory': 'Debt Advisory',
  'virtual-cfo-services': 'Virtual CFO Services',
  'mergers-acquisitions': 'Mergers & Acquisitions',
  'corporate-finance-advisory': 'Corporate Finance Advisory',
  'contact': 'General contact',
};
const ALLOWED_FIELDS = {
  firstName: 'First name', lastName: 'Last name', fullName: 'Full name', email: 'Email', phone: 'Phone',
  company: 'Company', subject: 'Subject', message: 'Message', turnover: 'Turnover / annual revenue',
  stage: 'Business stage', amount: 'Funding requirement', applicant: 'Applicant category', loanType: 'Loan type',
  cibil: 'CIBIL score range', size: 'Team size', inquiryType: 'Inquiry type',
};
const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RX = /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;

// Best-effort, per-instance protection (serverless instances are short-lived).
const recent = new Map();      // ip -> [timestamps]
const seenKeys = new Map();    // idempotency key -> reference

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const refCode = () => {
  const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let r = '';
  for (let i = 0; i < 6; i++) r += a[Math.floor(Math.random() * a.length)];
  return `BM-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${r}`;
};

async function sendEmail({ to, subject, html, replyTo }) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.FROM_EMAIL, to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
  });
  if (!r.ok) throw new Error(`Email provider responded ${r.status}`);
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Use POST.' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  if (!body || typeof body !== 'object') return res.status(400).json({ success: false, message: 'Invalid request.' });
  if (JSON.stringify(body).length > 12000) return res.status(413).json({ success: false, message: 'Request too large.' });

  // Honeypot: bots fill the hidden field. Pretend success, do nothing.
  if (body.hp) return res.status(201).json({ success: true, delivered: true, ref: refCode() });

  const service = String(body.service || '');
  if (!SERVICES[service]) return res.status(400).json({ success: false, message: 'Unknown service.' });

  // Keep only approved fields, trimmed and length-limited.
  const f = {};
  const src = body.fields && typeof body.fields === 'object' ? body.fields : {};
  for (const k of Object.keys(ALLOWED_FIELDS)) {
    if (src[k] == null) continue;
    const v = String(src[k]).trim();
    if (v) f[k] = v;
  }
  const errors = {};
  const name = f.fullName || [f.firstName, f.lastName].filter(Boolean).join(' ');
  if (!name) errors[f.fullName !== undefined || service === 'contact' ? 'fullName' : 'firstName'] = 'Enter your name.';
  if (!f.email || !EMAIL_RX.test(f.email)) errors.email = 'Enter a valid email address.';
  if (f.phone && !PHONE_RX.test(f.phone.replace(/\s+/g, ' '))) errors.phone = 'Enter a 10-digit Indian mobile number.';
  for (const [k, v] of Object.entries(f)) if (v.length > (k === 'message' ? 1500 : 160)) errors[k] = 'This entry is too long.';
  if (!body.consent) errors.consent = 'Please confirm you have read the Privacy Policy.';
  if (Object.keys(errors).length) return res.status(422).json({ success: false, message: 'Please correct the highlighted fields.', errors });

  // Not configured yet: tell the browser so it can fall back to its demo mode.
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL || !process.env.FROM_EMAIL) {
    return res.status(503).json({ success: false, delivered: false, message: 'Inquiry delivery is not configured.' });
  }

  // Idempotency: a retried request with the same key returns the same reference.
  const key = String(req.headers['idempotency-key'] || '').slice(0, 120);
  if (key && seenKeys.has(key)) return res.status(200).json({ success: true, delivered: true, ref: seenKeys.get(key) });

  // Simple rate limit: 5 inquiries per 10 minutes per IP (per instance).
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < 10 * 60e3);
  if (hits.length >= 5) return res.status(429).json({ success: false, message: 'Too many inquiries in a short time. Please wait a few minutes or email us directly.' });
  hits.push(now); recent.set(ip, hits);

  const ref = refCode();
  const rows = Object.entries(f).map(([k, v]) => `<tr><td style="padding:6px 12px;color:#677089">${esc(ALLOWED_FIELDS[k])}</td><td style="padding:6px 12px">${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('');
  const html = `<div style="font-family:Arial,sans-serif;color:#0E1424">
    <h2 style="margin:0 0 4px">New ${esc(SERVICES[service])} inquiry</h2>
    <p style="margin:0 0 16px;color:#677089">Reference <b>${ref}</b> · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST · Page ${esc(String(body.source || '').slice(0, 80))}</p>
    <table style="border-collapse:collapse;border:1px solid #E3E7F0">${rows}</table>
    <p style="color:#677089;font-size:12px;margin-top:16px">Privacy notice acknowledged by the visitor. Reply directly to this email to respond.</p></div>`;

  try {
    await sendEmail({ to: process.env.NOTIFY_EMAIL, subject: `[${ref}] ${SERVICES[service]} inquiry from ${name}`, html, replyTo: f.email });
  } catch (e) {
    console.error('Inquiry email failed', ref, e.message);
    return res.status(502).json({ success: false, message: 'We could not send your inquiry right now. Please try again, or email us directly.' });
  }

  if (process.env.SEND_ACKNOWLEDGEMENT === 'true') {
    sendEmail({
      to: f.email,
      subject: `We received your inquiry (${ref})`,
      html: `<div style="font-family:Arial,sans-serif;color:#0E1424"><p>Dear ${esc(name)},</p><p>Thank you for contacting Beyondmatrix Capital about <b>${esc(SERVICES[service])}</b>. Your reference is <b>${ref}</b>. A senior adviser will reply within one business day.</p><p style="color:#677089;font-size:12px">Receiving your inquiry does not create an advisory engagement and does not mean any loan, investment or transaction is approved.</p></div>`,
    }).catch((e) => console.error('Acknowledgement email failed', ref, e.message));
  }

  if (key) seenKeys.set(key, ref);
  return res.status(201).json({ success: true, delivered: true, ref, message: 'Your inquiry has been submitted successfully.' });
};
