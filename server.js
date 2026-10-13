// Local development server for the Beyondmatrix website.
// Run with:  npm start   (or press F5 in VS Code)
// Serves the site from /public and runs the same /api/inquiry function that Vercel runs in production.
// No packages to install: uses only Node.js built-ins (Node 18 or newer).

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const PORT = Number(process.env.PORT) || 3000;

// Load .env (KEY=value lines) if present, without overriding real environment variables.
const envFile = path.join(ROOT, '.env');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !line.trim().startsWith('#') && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

const inquiry = require('./api/inquiry.js');
const vercelConfig = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
const securityHeaders = (vercelConfig.headers || []).find((h) => h.source === '/(.*)')?.headers || [];

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

// Gives the API function the same req/res helpers Vercel provides (res.status().json()).
function vercelStyle(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (obj) => { if (!res.getHeader('Content-Type')) res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); return res; };
  return res;
}

const server = http.createServer((req, res) => {
  for (const h of securityHeaders) if (h.key !== 'Strict-Transport-Security') res.setHeader(h.key, h.value);
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/api/inquiry') {
    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 20000) req.destroy(); });
    req.on('end', async () => {
      try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = raw; }
      try { await inquiry(req, vercelStyle(res)); }
      catch (e) { console.error(e); vercelStyle(res).status(500).json({ success: false, message: 'Server error.' }); }
    });
    return;
  }

  let file = path.normalize(path.join(PUBLIC, decodeURIComponent(url.pathname)));
  if (!file.startsWith(PUBLIC)) { res.statusCode = 403; return res.end('Forbidden'); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) {
    res.statusCode = 404;
    res.setHeader('Content-Type', TYPES['.html']);
    return res.end(fs.readFileSync(path.join(PUBLIC, '404.html')));
  }
  res.setHeader('Content-Type', TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, () => {
  const email = process.env.RESEND_API_KEY ? 'ON (inquiries are emailed)' : 'OFF (forms run in demo mode; add a .env file to enable)';
  console.log(`\n  Beyondmatrix website running at  http://localhost:${PORT}`);
  console.log(`  Form email delivery: ${email}`);
  console.log('  Press Ctrl+C to stop.\n');
});
