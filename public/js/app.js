/* Beyondmatrix Capital: site application (routing, pages, forms, calculators, staff console) */

/* ============ ICONS ============ */
const I = {
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  checkc:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin:'<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21h4"/>',
  rocket:'<path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2"/><path d="M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5z"/><circle cx="15" cy="9" r="1.5"/>',
  bank:'<path d="M3 10 12 4l9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>',
  gauge:'<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>',
  merge:'<circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  trend:'<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  handshake:'<path d="m11 17 2 2a1.5 1.5 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2-2L15 11l-3 1-2-2 4-3h3l4 4"/><path d="M3 7h4l5 5-2 2a1.5 1.5 0 0 1-2 0L3 9"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  doc:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  coin:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3 3 7 3s7-1.3 7-3v-6"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>',
  alert:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};
const ic=(n,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ============ SITE CONFIG (single source of truth) ============ */
const SITE={
  name:'Beyondmatrix Capital Private Limited', short:'Beyondmatrix',
  email:'info@beyondmatrix.in',
  address:'B Wing, 601 to 605, Raylon Arcade, Kondivita, J.B. Nagar, Andheri East, Mumbai, Maharashtra 400059',
  hours:'Mon – Sat, 10:00 – 19:00 IST',
  stats:[{v:'12',s:'+',l:'Years of advisory experience'},{v:'₹500',s:' Cr+',l:'Capital raised for clients'},{v:'100',s:'+',l:'Active client profiles'},{v:'6',s:'',l:'Integrated practice areas'}],
  policyDate:'1 August 2026'
};

/* ============ SVG ILLUSTRATIONS ============ */
const ART={
 ipo:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="gi" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#1E3FD8"/><stop offset="1" stop-color="#0F2486"/></linearGradient></defs><rect width="400" height="170" fill="url(#gi)"/><g stroke="rgba(255,255,255,.08)">${[...Array(9)].map((_,i)=>`<line x1="${i*50}" y1="0" x2="${i*50}" y2="170"/>`).join('')}</g>${[[40,110,30,40,1],[70,95,25,50,1],[100,105,30,25,0],[130,80,30,45,1],[160,70,22,40,1],[190,85,18,30,0],[220,55,30,50,1],[250,45,24,40,1],[280,30,30,48,1]].map(([x,y,h,w,u])=>`<line x1="${x+7}" y1="${y-10}" x2="${x+7}" y2="${y+h+10}" stroke="${u?'#F3D88E':'#9FB2FF'}" stroke-width="1.5"/><rect x="${x}" y="${y}" width="14" height="${h}" rx="2" fill="${u?'#F3D88E':'#9FB2FF'}"/>`).join('')}<path d="M30 140 C120 130 200 90 330 30" stroke="#fff" stroke-width="2" fill="none" stroke-dasharray="4 5"/><g transform="translate(318,90)"><rect width="66" height="54" rx="10" fill="#fff"/><text x="10" y="22" font-family="IBM Plex Mono" font-size="10" fill="#6B7594">LISTING</text><text x="10" y="42" font-family="Sora" font-weight="700" font-size="15" fill="#1530A8">BSE·NSE</text></g></svg>`,
 fund:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#0E1E66"/><circle cx="330" cy="30" r="90" fill="#1E3FD8" opacity=".55"/>${[0,1,2,3,4].map(i=>[...Array(i+2)].map((_,j)=>`<ellipse cx="${70+i*62}" cy="${140-j*12}" rx="24" ry="7" fill="${j%2?'#F3D88E':'#C9A24B'}" stroke="#7A5E1E" stroke-width="1"/>`).join('')).join('')}<path d="M60 70 L130 60 L190 50 L250 32 L320 18" stroke="#fff" stroke-width="2.5" fill="none"/><circle cx="320" cy="18" r="5" fill="#F3D88E"/><text x="22" y="30" font-family="IBM Plex Mono" font-size="10" fill="#9FB2FF" letter-spacing="1.5">SEED → SERIES → GROWTH</text></svg>`,
 debt:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#13297F"/><g fill="#E9EEFF"><path d="M120 62 200 22 280 62z"/><rect x="128" y="62" width="144" height="10"/>${[0,1,2,3,4].map(i=>`<rect x="${138+i*28}" y="78" width="12" height="54"/>`).join('')}<rect x="116" y="134" width="168" height="10"/><rect x="108" y="146" width="184" height="8"/></g><circle cx="200" cy="46" r="8" fill="#C9A24B"/><g font-family="IBM Plex Mono" font-size="10" fill="#9FB2FF"><text x="20" y="40">TERM LOAN</text><text x="20" y="62">CC / OD</text><text x="20" y="84">LC · BG</text><text x="310" y="40">LAP</text><text x="310" y="62">PROJECT</text><text x="310" y="84">REFI</text></g></svg>`,
 cfo:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#EEF2FF"/><rect x="30" y="20" width="340" height="140" rx="12" fill="#fff" stroke="#C3CCE6"/><rect x="30" y="20" width="340" height="26" rx="12" fill="#1E3FD8"/><circle cx="46" cy="33" r="4" fill="#fff" opacity=".6"/><circle cx="58" cy="33" r="4" fill="#fff" opacity=".6"/><text x="80" y="37" font-family="IBM Plex Mono" font-size="10" fill="#fff">MIS · Q2 FY27</text>${[0,1,2,3,4,5,6].map(i=>`<rect x="${50+i*22}" y="${140-[40,55,48,70,62,82,90][i]}" width="14" height="${[40,55,48,70,62,82,90][i]}" rx="3" fill="${i==6?'#1E3FD8':'#9FB2FF'}"/>`).join('')}<circle cx="290" cy="98" r="36" fill="none" stroke="#E9EEFF" stroke-width="12"/><circle cx="290" cy="98" r="36" fill="none" stroke="#1E3FD8" stroke-width="12" stroke-dasharray="160 230" transform="rotate(-90 290 98)"/><text x="290" y="103" text-anchor="middle" font-family="Sora" font-weight="700" font-size="16" fill="#0E1733">71%</text></svg>`,
 ma:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#0A1436"/><circle cx="165" cy="85" r="62" fill="#1E3FD8" opacity=".85"/><circle cx="235" cy="85" r="62" fill="#C9A24B" opacity=".75"/><path d="M200 34a62 62 0 0 1 0 102 62 62 0 0 1 0-102z" fill="#fff" opacity=".9"/><text x="120" y="90" font-family="Sora" font-weight="700" font-size="14" fill="#fff">BUY</text><text x="250" y="90" font-family="Sora" font-weight="700" font-size="14" fill="#0A1436">SELL</text><text x="20" y="160" font-family="IBM Plex Mono" font-size="10" fill="#9FB2FF">VALUATION · DD · SPA · CLOSE</text></svg>`,
 cf:`<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#1530A8"/><g transform="translate(110,85)"><circle r="58" fill="#0F2486"/><path d="M0 0 L0 -58 A58 58 0 0 1 55 -18 z" fill="#F3D88E"/><path d="M0 0 L55 -18 A58 58 0 0 1 20 54 z" fill="#9FB2FF"/><path d="M0 0 L20 54 A58 58 0 0 1 -58 0 z" fill="#E9EEFF"/><circle r="22" fill="#1530A8"/></g><g font-family="IBM Plex Mono" font-size="11" fill="#fff"><rect x="210" y="40" width="10" height="10" fill="#F3D88E"/><text x="228" y="49">EQUITY 30%</text><rect x="210" y="70" width="10" height="10" fill="#9FB2FF"/><text x="228" y="79">DEBT 35%</text><rect x="210" y="100" width="10" height="10" fill="#E9EEFF"/><text x="228" y="109">INTERNAL 35%</text></g><text x="210" y="140" font-family="IBM Plex Mono" font-size="9" fill="#9FB2FF">ILLUSTRATIVE CAPITAL MIX</text></svg>`,
 skyline:`<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A4BEA"/><stop offset="1" stop-color="#0F2486"/></linearGradient></defs><rect width="600" height="600" fill="url(#sk)"/><circle cx="430" cy="160" r="70" fill="#F3D88E" opacity=".9"/>${[[20,340,60],[90,280,50],[150,220,70],[230,300,44],[280,180,80],[370,260,56],[430,200,70],[510,310,70]].map(([x,y,w])=>`<rect x="${x}" y="${y}" width="${w}" height="${600-y}" fill="#0A1436" opacity=".85"/>${[...Array(Math.floor((600-y)/30))].map((_,r)=>[...Array(Math.floor(w/16))].map((_,c)=>Math.random()>.55?`<rect x="${x+6+c*16}" y="${y+12+r*30}" width="6" height="10" fill="#F3D88E" opacity=".7"/>`:'').join('')).join('')}`).join('')}</svg>`,
 meeting:`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="#E9EEFF"/><rect x="0" y="200" width="400" height="100" fill="#C3CCE6"/><rect x="60" y="170" width="280" height="18" rx="4" fill="#0A1436"/><rect x="40" y="40" width="150" height="100" rx="6" fill="#fff" stroke="#9FB2FF"/><path d="M55 120 85 95 110 108 140 70 175 82" stroke="#1E3FD8" stroke-width="3" fill="none"/><g><circle cx="110" cy="138" r="18" fill="#7A5E3A"/><rect x="88" y="156" width="44" height="40" rx="14" fill="#1E3FD8"/></g><g><circle cx="200" cy="128" r="18" fill="#3A2A1E"/><rect x="178" y="146" width="44" height="40" rx="14" fill="#0A1436"/></g><g><circle cx="290" cy="138" r="18" fill="#C68B5E"/><rect x="268" y="156" width="44" height="40" rx="14" fill="#C9A24B"/></g><rect x="250" y="40" width="110" height="70" rx="6" fill="#1E3FD8"/><text x="262" y="68" font-family="IBM Plex Mono" font-size="10" fill="#fff">TERM SHEET</text><rect x="262" y="78" width="70" height="4" fill="#9FB2FF"/><rect x="262" y="88" width="50" height="4" fill="#9FB2FF"/></svg>`,
 map:`<svg viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice"><rect width="600" height="240" fill="#E9EEFF"/><g stroke="#fff" stroke-width="14" fill="none"><path d="M0 80 H600"/><path d="M0 180 C200 160 400 200 600 170"/><path d="M180 0 V240"/><path d="M420 0 L380 240"/></g><g stroke="#C3CCE6" stroke-width="3" fill="none"><path d="M0 130 H600"/><path d="M290 0 V240"/><path d="M520 0 V240"/></g><rect x="200" y="96" width="70" height="60" rx="4" fill="#C3CCE6"/><rect x="440" y="20" width="60" height="50" rx="4" fill="#C3CCE6"/><g transform="translate(300,104)"><path d="M0 0c-14 0-24 10-24 23 0 17 24 37 24 37s24-20 24-37C24 10 14 0 0 0z" fill="#1E3FD8"/><circle cx="0" cy="23" r="8" fill="#fff"/></g><rect x="332" y="104" width="172" height="44" rx="8" fill="#fff" stroke="#C3CCE6"/><text x="344" y="122" font-family="Sora" font-weight="700" font-size="12" fill="#0E1733">Raylon Arcade</text><text x="344" y="138" font-family="Figtree" font-size="11" fill="#6B7594">J.B. Nagar, Andheri East</text></svg>`,
};

/* ============ SERVICES DATA ============ */
const CORE=[
 {n:'firstName',l:'First name',t:'text',req:1,half:1,ac:'given-name'},
 {n:'lastName',l:'Last name',t:'text',req:1,half:1,ac:'family-name'},
 {n:'email',l:'Work email',t:'email',req:1,ac:'email'},
 {n:'phone',l:'Mobile number',t:'tel',req:1,ac:'tel',ph:'+91 98XXX XXXXX'},
];
const SERVICES=[
 {slug:'ipo-advisory',title:'IPO Advisory',icon:'bell',art:'ipo',tag:'SME & Mainboard',
  short:'End-to-end preparation for SME and Mainboard listings, from readiness to listing day.',
  tagline:'From private company to listed enterprise, with every filing, restatement and governance step mapped.',
  overview:'Going public changes how a company is governed, reported and valued. We assess where you stand today, close the gaps that regulators and investors will look for, and coordinate the advisers, exchanges and filings through to listing.',
  features:[['IPO readiness assessment','Review of financial position, compliance history, corporate structure and promoter holding to establish a realistic listing timeline.','target'],['SME IPO advisory','Guidance for eligible companies planning a listing on BSE SME or NSE Emerge, including platform selection and issue sizing.','rocket'],['Mainboard IPO advisory','Coordination with merchant bankers, legal counsel and auditors for a Mainboard listing.','bell'],['Financial & compliance due diligence','Financial reviews, legal checks and disclosure preparation that hold up to scrutiny.','doc'],['Corporate governance','Board composition, committees and internal financial controls suitable for a listed entity.','shield'],['Restated financial statements','Support with preparing historical financials in the format listing documents require.','layers'],['Regulatory & exchange compliance','Coordination of filings and approvals with regulators, authorities and stock exchanges.','globe'],['Pre-IPO capital planning','Structuring pre-IPO placements and the capital table ahead of the public offer.','coin']],
  benefits:['Clear listing roadmap','Fewer surprises in due diligence','Governance investors trust','Coordinated adviser ecosystem'],
  fields:[...CORE,{n:'turnover',l:'Tentative turnover / annual revenue',t:'select',req:1,o:['Below ₹10 Cr','₹10 – 25 Cr','₹25 – 50 Cr','₹50 – 100 Cr','₹100 – 250 Cr','Above ₹250 Cr']}]},
 {slug:'fund-raising',title:'Fund Raising',icon:'trend',art:'fund',tag:'Equity · PE/VC · Hybrid',
  short:'Equity, PE/VC, angel and hybrid capital sourced and negotiated on terms that fit your growth plan.',
  tagline:'The right capital, from the right investor, on terms you can grow with.',
  overview:'Raising capital is as much about who you raise from as how much. We prepare your investment case, open conversations with relevant investors, and support you through valuation, term sheets and closing.',
  features:[['Equity fundraising','Raising growth capital by issuing equity, with a clear view of dilution and control.','users'],['Private equity & venture capital','Introductions to PE firms and VC funds whose thesis matches your stage and sector.','handshake'],['Angel investment','Early-stage rounds, pitch preparation and investor readiness.','spark'],['Growth capital','Financing for expansion, product development and entry into new markets.','trend'],['Strategic investments','Corporate investors and strategic partners who bring more than money.','target'],['Convertible instruments','Structures using CCDs and CCPS to bridge valuation gaps.','layers'],['Debt & hybrid funding','Combinations of debt and equity features that reduce dilution.','coin']],
  benefits:['Investor access','Valuation & term optimisation','Investor-grade documentation','Modelling and negotiation support'],
  fields:[...CORE,{n:'company',l:'Company name',t:'text'},{n:'stage',l:'Business stage',t:'select',o:['Pre-revenue','Early revenue','Growth','Mature / profitable']},{n:'amount',l:'Funding requirement',t:'select',o:['Up to ₹5 Cr','₹5 – 25 Cr','₹25 – 100 Cr','Above ₹100 Cr']},{n:'message',l:'What will the capital be used for?',t:'textarea',max:1000}]},
 {slug:'debt-advisory',title:'Debt Advisory',icon:'bank',art:'debt',tag:'Working capital · Term · Project',
  short:'Working capital, term loans, project finance and refinancing structured with banks and NBFCs.',
  tagline:'Debt that funds growth without straining cash flow.',
  overview:'The right facility at the right cost can unlock growth; the wrong one can choke cash flow. We map your requirement to suitable lenders and structures, prepare the credit proposal, and stay with you through sanction and disbursement.',
  features:[['Working capital finance','Facilities that fund day-to-day operations and seasonal cycles.','coin'],['Cash credit & overdraft','Short-term revolving borrowing sized to your operating cycle.','layers'],['Letters of credit','Trade finance support for domestic and import transactions.','doc'],['Bank guarantees','Performance and financial guarantees for contracts and tenders.','shield'],['Term loans','Longer-tenor financing for capex and expansion.','bank'],['Project finance','Funding structured around the cash flows of major projects.','target'],['Machinery & equipment loans','Asset-backed finance for plant and machinery.','gauge'],['Loan against property','Property-backed borrowing at competitive rates.','pin'],['Structured debt','Customised arrangements for complex requirements.','spark'],['Refinancing & restructuring','Replacing or reworking existing debt to lower cost or ease repayment.','trend']],
  benefits:['Wide lender network','Lower cost of borrowing','Faster sanction cycles','Repayment matched to cash flow'],
  fields:[...CORE,{n:'applicant',l:'Applicant category',t:'radio',req:1,o:['Business','Salaried / Job']},{n:'loanType',l:'Loan type',t:'radio',req:1,o:['Secured','Unsecured']},{n:'cibil',l:'CIBIL score (optional)',t:'select',o:['800 and above','750 – 799','700 – 749','650 – 699','Below 650','Not sure']},{n:'message',l:'Additional information',t:'textarea',max:1000,ph:'Loan amount, purpose, existing facilities…'}],
  note:'Your CIBIL range only helps us prepare for the first conversation. It is not a credit assessment and does not imply approval. We never ask for passwords, PINs or OTPs.'},
 {slug:'virtual-cfo-services',title:'Virtual CFO Services',icon:'gauge',art:'cfo',tag:'MIS · FP&A · Compliance',
  short:'Senior finance leadership on demand: MIS, budgeting, cash flow and investor reporting.',
  tagline:'CFO-level leadership, without the full-time CFO cost.',
  overview:'Growing businesses need finance leadership before they can justify a full-time CFO. Our Virtual CFO team runs reporting, planning and controls on a flexible engagement that scales with you.',
  features:[['MIS & business dashboards','Monthly management reporting and KPI tracking for decision-makers.','grid'],['Budgeting & forecasting','Annual budgets, revenue forecasts and variance analysis.','calc'],['Cash-flow management','Short and long-term projections, working capital and liquidity planning.','coin'],['Financial planning & analysis','Profitability, margins and unit economics, explained.','gauge'],['Investor & lender reporting','Board packs, investor updates and lender compliance reports.','doc'],['Internal controls','Procedures, approval matrices and audit trails.','shield'],['Compliance monitoring','Oversight of GST, Income Tax and TDS filings and governance requirements.','checkc'],['Strategic finance support','Financial input on expansion, major spend and cost reduction.','compass']],
  benefits:['Lower cost than a full-time CFO','Visibility into performance','Scales as you grow','Structured planning'],
  fields:[...CORE,{n:'company',l:'Company name',t:'text'},{n:'size',l:'Team size',t:'select',o:['1 – 20','21 – 100','101 – 500','500+']}]},
 {slug:'mergers-acquisitions',title:'Mergers & Acquisitions',icon:'merge',art:'ma',tag:'Buy-side · Sell-side · JV',
  short:'Buy-side, sell-side, valuation and deal execution handled with discretion from first call to close.',
  tagline:'Transactions handled with precision and discretion.',
  overview:'Whether you are acquiring, selling, merging or planning succession, every transaction turns on valuation, structure and confidentiality. We run the process so you can keep running the business.',
  features:[['Buy-side advisory','Target identification, screening and strategic fit assessment.','target'],['Sell-side advisory','Preparing the business for sale, approaching buyers and managing the process.','handshake'],['Business valuation','Independent valuation for transactions and negotiations.','calc'],['Financial due diligence','Quality of earnings, liabilities and red-flag review.','doc'],['Deal structuring & negotiation','Transaction terms, consideration structure and documentation support.','layers'],['Partnerships & joint ventures','Structuring and forming strategic alliances.','users'],['Succession planning','Ownership transitions and management buyouts.','compass'],['Transaction execution','Approvals, conditions precedent and closing coordination.','checkc']],
  benefits:['Strategic alignment','Risk assessment','Strict confidentiality','Negotiation support'],
  fields:[...CORE,{n:'company',l:'Company name',t:'text'},{n:'inquiryType',l:'I am looking at',t:'select',o:['Buy-side (acquire)','Sell-side (divest)','Merger','Joint venture','Succession / MBO','Other']},{n:'message',l:'Brief (kept strictly confidential)',t:'textarea',max:1000}]},
 {slug:'corporate-finance-advisory',title:'Corporate Finance Advisory',icon:'compass',art:'cf',tag:'Strategy · Valuation · Capital',
  short:'Financial strategy, modelling and capital structure advice that turns plans into decisions.',
  tagline:'Financial strategy that turns plans into measurable value.',
  overview:'Good decisions need good numbers. We build the models, test the scenarios and shape the capital structure behind your biggest calls, from expansion to turnaround.',
  features:[['Financial strategy & planning','Roadmaps aligned to business goals and capital needs.','compass'],['Business valuation','Valuation for strategic decisions, transactions and reporting.','calc'],['Modelling & forecasting','Integrated three-statement models and scenario analysis.','gauge'],['Capital structure optimisation','The right balance of debt and equity for cost and flexibility.','layers'],['Growth & expansion advisory','Financial analysis for new markets, products and capacity.','trend'],['Strategic business reviews','Margins, operating performance and working capital efficiency.','target'],['Restructuring & turnaround','Interventions for businesses under financial pressure.','shield']],
  benefits:['Better-informed decisions','Improved capital allocation','Stronger planning','Fundraise-ready financials'],
  fields:[...CORE]},
];
const SVC=Object.fromEntries(SERVICES.map(s=>[s.slug,s]));
const STATUSES=['NEW','CONTACTED','QUALIFIED','IN_PROGRESS','CONVERTED','CLOSED','ON_HOLD'];
const TRANSITIONS={NEW:['CONTACTED','ON_HOLD','CLOSED'],CONTACTED:['QUALIFIED','ON_HOLD','CLOSED'],QUALIFIED:['IN_PROGRESS','ON_HOLD','CLOSED'],IN_PROGRESS:['CONVERTED','ON_HOLD','CLOSED'],ON_HOLD:['CONTACTED','QUALIFIED','IN_PROGRESS','CLOSED'],CONVERTED:['CLOSED'],CLOSED:['NEW']};
const slabel=s=>s.replace('_',' ').toLowerCase().replace(/^\w/,c=>c.toUpperCase());

/* ============ STORAGE ("backend") ============ */
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
};
let memLeads=null;
function leads(){if(memLeads)return memLeads;memLeads=store.get('bm_leads',null);if(!memLeads){memLeads=seedDemo();store.set('bm_leads',memLeads)}return memLeads}
function saveLeads(){store.set('bm_leads',memLeads)}
function refCode(d=new Date()){const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let r='';for(let i=0;i<6;i++)r+=a[Math.floor(Math.random()*a.length)];return `BM-${d.toISOString().slice(0,10).replace(/-/g,'')}-${r}`}
function seedDemo(){
  const fn=['Aarav','Priya','Rohan','Neha','Vikram','Ananya','Karan','Isha','Arjun','Meera','Siddharth','Kavya','Rahul','Pooja','Aditya','Sneha','Nikhil','Riya','Manish','Tanvi','Deepak','Shreya','Varun','Nisha','Harsh','Divya'];
  const ln=['Mehta','Shah','Iyer','Kapoor','Reddy','Agarwal','Nair','Joshi','Desai','Bansal','Gupta','Pillai','Malhotra','Rao','Kulkarni'];
  const co=['Sahyadri Agro','Konkan Polymers','Indus Logistics','Vasant Pharma','Northwind Textiles','Aravali Foods','Bluepeak Tech','Trident Auto Parts','Ganga Ceramics','Meridian Solar'];
  const weights=['ipo-advisory','ipo-advisory','fund-raising','fund-raising','fund-raising','debt-advisory','debt-advisory','debt-advisory','debt-advisory','virtual-cfo-services','virtual-cfo-services','mergers-acquisitions','corporate-finance-advisory','contact'];
  const stw=['NEW','NEW','NEW','CONTACTED','CONTACTED','CONTACTED','QUALIFIED','QUALIFIED','IN_PROGRESS','IN_PROGRESS','CONVERTED','CONVERTED','CLOSED','ON_HOLD'];
  let seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;const pick=a=>a[Math.floor(rnd()*a.length)];
  const out=[];const now=Date.now();
  for(let i=0;i<38;i++){
    const d=new Date(now-Math.floor(rnd()*29*864e5)-Math.floor(rnd()*864e5));
    const f=pick(fn),l=pick(ln),s=pick(weights);
    const st=(now-d)<2*864e5?'NEW':pick(stw);
    const fd={};
    if(s==='ipo-advisory')fd.turnover=pick(SVC[s].fields[4].o);
    if(s==='debt-advisory'){fd.applicant=pick(['Business','Business','Salaried / Job']);fd.loanType=pick(['Secured','Unsecured']);fd.cibil=pick(['750 – 799','800 and above','700 – 749'])}
    if(s==='fund-raising'){fd.amount=pick(['Up to ₹5 Cr','₹5 – 25 Cr','₹25 – 100 Cr']);fd.stage=pick(['Early revenue','Growth'])}
    out.push({id:'d'+i,ref:refCode(d),service:s,firstName:f,lastName:l,email:`${f}.${l}@example.com`.toLowerCase(),phone:'+91 98'+String(Math.floor(rnd()*1e8)).padStart(8,'0'),company:pick(co),formData:fd,message:s==='contact'?'Would like to discuss options for our expansion plans.':'',status:st,assignedTo:st==='NEW'?'':pick(['R. Jaju','Advisory desk']),notes:[],activity:[{at:d.toISOString(),by:'system',a:'Inquiry received'}],source:s==='contact'?'#contact-us':'#'+s,createdAt:d.toISOString(),updatedAt:d.toISOString(),demo:true});
  }
  return out.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
}

/* validation shared by "client" and "server" layers */
const RX={email:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,phone:/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/,name:/^[A-Za-zÀ-ÿ.'\s-]{1,60}$/};
function validate(fields,data){
  const e={};
  for(const f of fields){
    const v=(data[f.n]??'').toString().trim();
    if(f.req&&!v){e[f.n]=f.t==='radio'||f.t==='select'?`Choose ${f.l.toLowerCase()}.`:`Enter your ${f.l.toLowerCase()}.`;continue}
    if(!v)continue;
    if(f.t==='email'&&!RX.email.test(v))e[f.n]='Enter a valid email address, like name@company.com.';
    if(f.t==='tel'&&!RX.phone.test(v.replace(/\s+/g,' ')))e[f.n]='Enter a 10-digit Indian mobile number.';
    if((f.n==='firstName'||f.n==='lastName'||f.n==='fullName')&&!RX.name.test(v))e[f.n]='Use letters only.';
    if((f.t==='select'||f.t==='radio')&&!f.o.includes(v))e[f.n]='Choose one of the listed options.';
    if(v.length>(f.max||(f.t==='textarea'?1000:120)))e[f.n]=`Keep this under ${f.max||120} characters.`;
  }
  return e;
}
const idem={};
function apiSubmit(serviceSlug,fields,raw,key){
  return new Promise((res,rej)=>setTimeout(()=>{
    if(idem[key])return res({status:200,ref:idem[key],dup:true});
    if(raw._hp)return res({status:201,ref:refCode()}); // honeypot: silently drop
    const clean={};for(const f of fields)clean[f.n]=(raw[f.n]??'').toString().trim(); // drop unknown fields
    const errs=validate(fields,clean);
    if(Object.keys(errs).length)return rej({status:422,errors:errs});
    const hist=store.get('bm_rate',[]).filter(t=>Date.now()-t<10*60e3);
    if(hist.length>=5)return rej({status:429,message:'You have sent several inquiries in the last few minutes. Wait a little, or email us directly.'});
    const now=new Date().toISOString();
    const core=['firstName','lastName','fullName','email','phone','company','message'];
    const fd={};for(const k in clean)if(!core.includes(k)&&!k.startsWith('consent')&&clean[k])fd[k]=clean[k];
    let fName=clean.firstName,lName=clean.lastName;
    if(clean.fullName){const p=clean.fullName.split(/\s+/);fName=p.shift();lName=p.join(' ')}
    const lead={id:'l'+Date.now(),ref:refCode(),service:serviceSlug,firstName:fName,lastName:lName||'',email:clean.email.toLowerCase(),phone:clean.phone,company:clean.company||'',formData:fd,message:clean.message||'',status:'NEW',assignedTo:'',notes:[],activity:[{at:now,by:'system',a:'Inquiry received'},{at:now,by:'system',a:'Internal notification queued to '+SITE.email}],consent:raw.consent?{at:now,text:'Privacy notice acknowledged'}:null,source:location.hash||'#home',createdAt:now,updatedAt:now};
    leads().unshift(lead);
    if(!store.set('bm_leads',memLeads)){/* storage blocked: keep in memory for session */}
    hist.push(Date.now());store.set('bm_rate',hist);
    idem[key]=lead.ref;
    res({status:201,ref:lead.ref});
  },650));
}

/* ============ LAYOUT ============ */
const NAV=[['home','Home'],['about-us','About Us'],['services','Services'],['toolkit','Toolkit'],['contact-us','Contact Us']];
function header(route){
  const svcActive=route==='services'||SVC[route];
  return `
  <div class="topbar"><div class="wrap"><span>${ic('mail')} <span>${SITE.email}</span></span><span class="hide-sm">${ic('pin')} Andheri East, Mumbai</span><span class="hide-sm">${ic('clock')} ${SITE.hours}</span></div></div>
  <header class="site"><div class="wrap">
    <a class="logo" href="#home" aria-label="Beyondmatrix home"><span class="logo-mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M4 18 10 6l4 8 2-4 4 8"/></svg></span><span>Beyondmatrix<small>CAPITAL</small></span></a>
    <nav class="main" aria-label="Main">
      <a href="#home" class="${route==='home'?'active':''}">Home</a>
      <a href="#about-us" class="${route==='about-us'?'active':''}">About Us</a>
      <div class="dd ${svcActive?'active':''}" id="dd"><button aria-expanded="false" aria-controls="ddm" id="ddb">Services ${ic('chev')}</button>
        <div class="dd-menu" id="ddm" hidden>${SERVICES.map(s=>`<a href="#${s.slug}"><span class="ico-box">${ic(s.icon)}</span><span><b>${s.title}</b><small>${s.tag}</small></span></a>`).join('')}<a href="#services" style="grid-column:1/-1;justify-content:center;font-weight:600;color:var(--cobalt)">View all services →</a></div></div>
      <a href="#toolkit" class="${route==='toolkit'?'active':''}">Toolkit</a>
      <a href="#contact-us" class="${route==='contact-us'?'active':''}">Contact Us</a>
    </nav>
    <div class="hdr-cta">
      <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">${ic('moon')}</button>
      <a class="btn btn-primary btn-sm" href="#contact-us" data-cta>Book a consultation</a>
      <button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">${ic('menu')}</button>
    </div>
  </div></header>
  <div class="mnav" id="mnav" hidden>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span class="logo"><span class="logo-mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M4 18 10 6l4 8 2-4 4 8"/></svg></span>Beyondmatrix</span><button class="icon-btn" id="mclose" aria-label="Close menu">${ic('x')}</button></div>
    <a href="#home">Home</a><a href="#about-us">About Us</a><a href="#services">Services</a>
    <div class="sub">${SERVICES.map(s=>`<a href="#${s.slug}">${s.title}</a>`).join('')}</div>
    <a href="#toolkit">Toolkit</a><a href="#contact-us">Contact Us</a><a href="#admin">Staff login</a>
    <a class="btn btn-primary" href="#contact-us" style="margin-top:20px;justify-content:center;color:#fff;border:0">Book a consultation</a>
  </div>`;
}
function footer(){
  return `<footer class="site"><div class="wrap">
  <div class="fgrid">
    <div style="display:grid;gap:14px;align-content:start"><a class="logo" href="#home"><span class="logo-mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M4 18 10 6l4 8 2-4 4 8"/></svg></span><span>Beyondmatrix<small style="color:#8C96B8">CAPITAL</small></span></a>
      <p>${SITE.name} is a corporate finance and investment banking advisory firm helping Indian businesses raise capital, list, borrow and transact with confidence.</p>
      <form class="news" id="newsForm" novalidate><label for="nEmail" class="hp">Email for insights</label><input id="nEmail" type="email" placeholder="Email for quarterly insights"><button class="btn btn-primary btn-sm">Subscribe</button></form><small id="newsMsg" aria-live="polite"></small></div>
    <div><h4>Company</h4><ul><li><a href="#home">Home</a></li><li><a href="#about-us">About Us</a></li><li><a href="#services">All services</a></li><li><a href="#toolkit">Finance toolkit</a></li><li><a href="#contact-us">Contact Us</a></li><li><a href="#admin">Staff login</a></li></ul></div>
    <div><h4>Services</h4><ul>${SERVICES.map(s=>`<li><a href="#${s.slug}">${s.title}</a></li>`).join('')}</ul></div>
    <div><h4>Reach us</h4><ul><li style="display:flex;gap:8px">${ic('mail','fi')}<span class="selectable">${SITE.email}</span></li><li style="display:flex;gap:8px">${ic('pin','fi')}<span>${SITE.address}</span></li><li style="display:flex;gap:8px">${ic('clock','fi')}<span>${SITE.hours}</span></li></ul></div>
  </div>
  <div class="fbottom"><span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span><span style="display:flex;gap:18px"><a href="#privacy-policy">Privacy Policy</a><a href="#terms-and-conditions">Terms &amp; Conditions</a></span></div>
  <p style="font-size:.76rem;margin-top:14px;color:#8C96B8;max-width:90ch">Information on this website is general in nature and is not financial, legal, investment or tax advice. Submitting an inquiry does not create an advisory engagement.</p>
  </div></footer><style>footer .fi{width:16px;height:16px;flex:none;margin-top:4px;color:var(--brass)}</style>`;
}
const _v1_pageHead=(crumb,eyebrow,title,lead,art)=>`<section class="phead"><div class="grid-bg"></div><div class="wrap ${art?'phead-grid':''}" style="position:relative"><div><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span>${crumb}</nav><span class="eyebrow">${eyebrow}</span><h1 style="margin-top:12px">${title}</h1>${lead?`<p class="lead">${lead}</p>`:''}</div>${art?`<div class="phead-art">${art}</div>`:''}</div></section>`;
const _v1_ctaBand=(h='Ready to discuss your next financial move?',p='Tell us where you are headed. A senior adviser will review your inquiry and reply within one business day.')=>`<section><div class="wrap"><div class="cta"><div class="rings"></div><div style="position:relative"><h2>${h}</h2><p>${p}</p></div><div class="hero-actions" style="position:relative"><a class="btn btn-light" href="#contact-us">Book a consultation <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost-inv" href="#toolkit">Try the toolkit</a></div></div></div></section>`;
const _v1_svcCard=s=>`<a class="card svc-card" href="#${s.slug}"><div class="svc-art">${ART[s.art]}<span class="svc-tag">${s.tag}</span></div><div class="svc-body"><h3>${s.title}</h3><p>${s.short}</p><span class="more">Learn more ${ic('arrow')}</span></div></a>`;

/* ============ PAGES ============ */
const P={};
P.home=()=>`
<section class="hero"><div class="wrap">
  <div class="hero-panel">
    <div class="hero-copy">
      <span class="eyebrow">Corporate finance & investment banking advisory</span>
      <h1>Capital, structured for <em>what comes next.</em></h1>
      <p>From SME IPOs and growth equity to working capital and acquisitions, Beyondmatrix gives Indian businesses senior advisory support at every stage of their financial journey.</p>
      <div class="hero-actions"><a class="btn btn-light" href="#services">Find the right service <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost-inv" href="#contact-us">Talk to an adviser</a></div>
      <div class="trust"><span><b>SME & Mainboard</b><br>IPO preparation</span><span><b>Banks · NBFCs · PE/VC</b><br>capital network</span></div>
    </div>
    <div class="hero-art" aria-hidden="true">${ART.skyline}
      <div class="float-card" style="top:16%;left:6%"><span class="ico-box">${ic('trend')}</span><span><b>Series B closed</b>Growth equity · illustrative</span></div>
      <div class="float-card" style="bottom:18%;right:6%;animation-delay:-3s"><span class="ico-box">${ic('bell')}</span><span><b>Listing day</b>SME platform</span></div>
    </div>
  </div>
</div>
<div class="statband-wrap"><div class="statband">${SITE.stats.map(s=>`<div class="stat"><b data-count="${s.v.replace(/[^\d]/g,'')}" data-pre="${s.v.replace(/\d/g,'')}" data-suf="${s.s}">${s.v}${s.s}</b><span>${s.l}</span></div>`).join('')}</div></div>
</section>

<section><div class="wrap">
  <div class="sec-head center"><span class="eyebrow">Why clients choose us</span><h2>Four commitments behind every mandate</h2></div>
  <div class="grid g4">
    ${[['shield','Trusted financial shield','Financial oversight, regulatory compliance and transaction integrity built into every engagement.'],['users','Extensive investor reach','Working relationships with investors, banks, NBFCs and strategic buyers across sectors.'],['trend','Maximise & retain value','Cash-flow optimisation, budgeting and a capital structure that protects owner value.'],['handshake','Partner with experts','One team from first fundraise through IPO execution, so nothing is lost between stages.']].map(([i,t,d])=>`<div class="card vp"><span class="ico-box">${ic(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="alt"><div class="wrap split">
  <div class="collage" aria-hidden="true">
    <div class="ph" style="left:0;top:0;width:72%;height:62%">${ART.meeting}</div>
    <div class="ph" style="right:0;bottom:0;width:58%;height:52%">${ART.cfo.replace('viewBox="0 0 400 170"','viewBox="20 10 360 160"')}</div>
    <div class="badge-yr"><b>12+</b><span>years advising Indian businesses</span></div>
  </div>
  <div style="display:grid;gap:20px">
    <span class="eyebrow">About Beyondmatrix</span>
    <h2>Strategic minds helping businesses grow smarter and stronger</h2>
    <p class="lead">Beyondmatrix Capital is a Mumbai-based corporate finance and investment banking advisory firm. We combine transaction experience with hands-on financial management so promoters get one partner for raising, structuring and governing capital.</p>
    <ul class="checks">${['Customised financial solutions, not templates','End-to-end ownership from mandate to close','Integrity, transparency and strict confidentiality'].map(t=>`<li>${ic('checkc')}<span>${t}</span></li>`).join('')}</ul>
    <div><a class="btn btn-primary" href="#about-us">More about us ${ic('arrow')}</a></div>
  </div>
</div></section>

<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">What we offer</span><h2>Six practices, one advisory team</h2><p class="lead">Choose a service to see what's included and request a consultation tailored to it.</p></div>
  <div class="grid g3">${SERVICES.map(svcCard).join('')}</div>
</div></section>

<section class="alt"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">How an engagement runs</span><h2>A clear path from first call to closing</h2></div>
  <div class="steps">${[['Discovery','A confidential first conversation about goals, timelines and constraints.'],['Diagnosis','Review of financials, structure and readiness against what investors or lenders expect.'],['Structuring','The right instrument, partner and terms, modelled and stress-tested.'],['Execution','Documentation, outreach, negotiation and regulatory coordination.'],['Close & beyond','Closing, post-deal compliance and ongoing CFO-level support.']].map(([t,d],i)=>`<div class="step"><span class="n">STEP ${String(i+1).padStart(2,'0')}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="band"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Why Beyondmatrix</span><h2>Built for promoters who want a partner, not a vendor</h2></div>
  <div class="why-grid">${[['target','Professional expertise','Investment banking, credit and CFO experience under one roof.'],['compass','Customised solutions','Every structure is built around your cash flows and goals.'],['bank','Investor & lender relationships','Direct access to banks, NBFCs, funds and strategic investors.'],['layers','End-to-end support','From readiness to post-deal compliance, without hand-offs.'],['lock','Integrity & confidentiality','Sensitive information is handled on a strict need-to-know basis.']].map(([i,t,d])=>`<div class="why"><span class="ico-box">${ic(i)}</span><h3 style="color:#fff">${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section><div class="wrap split">
  <div style="display:grid;gap:16px"><span class="eyebrow">New: finance toolkit</span><h2>Run the numbers before you call us</h2><p class="lead">Free tools to estimate a loan EMI, check your IPO readiness and find which service fits your situation. Indicative only, and a useful starting point for the first conversation.</p><div><a class="btn btn-primary" href="#toolkit">Open the toolkit ${ic('arrow')}</a></div></div>
  <div class="grid g3" style="gap:14px">${[['calc','EMI calculator'],['target','IPO readiness score'],['compass','Service finder']].map(([i,t])=>`<a class="card" href="#toolkit" style="color:var(--fg);text-decoration:none;justify-items:start"><span class="ico-box">${ic(i)}</span><b style="font-family:var(--f-display)">${t}</b></a>`).join('')}</div>
</div></section>
${ctaBand()}`;

P['about-us']=()=>`${pageHead('<span>About Us</span>','About Beyondmatrix','Your long-term partner in corporate finance','Beyondmatrix Capital Private Limited helps growing Indian businesses access the right capital and make better financial decisions, with integrity at the centre of every mandate.',ART.meeting)}
<section><div class="wrap split">
  <div style="display:grid;gap:18px"><span class="eyebrow">Who we are</span><h2>Investment banking depth with an operator's view of finance</h2>
  <p class="lead">We work with promoters, founders and finance teams on the decisions that shape a company: raising equity, borrowing well, preparing to list, buying or selling a business, and running finance with discipline.</p>
  <p class="muted">Our team brings together experience across capital markets, credit, valuation and CFO functions, so advice on one area is always informed by the others.</p></div>
  <div class="grid g2">${SITE.stats.map(s=>`<div class="card"><b style="font:700 2rem var(--f-display);color:var(--cobalt)">${s.v}${s.s}</b><span class="muted">${s.l}</span></div>`).join('')}</div>
</div></section>
<section class="alt"><div class="wrap grid g2">
  <div class="card" style="padding:34px"><span class="ico-box">${ic('target')}</span><span class="eyebrow">Mission</span><h3 style="font-size:1.4rem">Help businesses access suitable capital and customised strategic financial guidance.</h3><p class="muted">We match each company with the funding route, partner and structure that fits its stage, not the one that is easiest to sell.</p></div>
  <div class="card" style="padding:34px;background:var(--navy);border-color:var(--navy)"><span class="ico-box" style="background:rgba(91,123,255,.2);color:#AFC0FF">${ic('globe')}</span><span class="eyebrow" style="color:#9FB2FF">Vision</span><h3 style="font-size:1.4rem;color:#fff">To be the trusted financial partner for India's growing businesses.</h3><p style="color:#C2CBEA">Long-term value creation, earned through integrity and results.</p></div>
</div></section>
<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Core values</span><h2>What drives us forward</h2></div>
  <div class="grid g4">${[['shield','Integrity & transparency','Clear fees, honest assessments and no hidden agendas.'],['users','Client-first execution','Your timeline and objectives set the pace of every mandate.'],['bank','Deep market access','Relationships across banks, NBFCs, funds and exchanges.'],['checkc','End-to-end ownership','We stay accountable from first meeting to final filing.']].map(([i,t,d])=>`<div class="card vp"><span class="ico-box">${ic(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>
<section class="alt"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Explore</span><h2>Where we can help</h2></div>
  <div class="benefit-row">${SERVICES.map(s=>`<a class="pill" href="#${s.slug}" style="text-decoration:none">${ic(s.icon)} ${s.title}</a>`).join('')}</div>
</div></section>
${ctaBand('Let\'s talk about your growth plans')}`;

P.services=()=>`${pageHead('<span>Services</span>','Financial advisory services','Find the right financial solution for your business','Six integrated practices covering capital raising, listing, lending, transactions and finance leadership.')}
<div class="statband-wrap" style="margin-top:-1px"><div class="statband" style="grid-template-columns:repeat(3,1fr)">${SITE.stats.slice(0,3).map(s=>`<div class="stat"><b>${s.v}${s.s}</b><span>${s.l}</span></div>`).join('')}</div></div>
<section><div class="wrap"><div class="grid g3">${SERVICES.map(svcCard).join('')}</div></div></section>
<section class="alt"><div class="wrap" style="max-width:860px">
  <div class="sec-head center"><span class="eyebrow">Not sure where to start?</span><h2>Start from your business need</h2></div>
  ${[['Looking to secure growth capital or plan an IPO?','We help with fundraising strategy, IPO documentation, regulatory filings and investor introductions.',['fund-raising','ipo-advisory']],['Need financial leadership without a full-time CFO?','Our Virtual CFO team handles planning, cash flow, budgeting, MIS reports and compliance oversight.',['virtual-cfo-services']],['Looking for business loans or lower interest rates?','We arrange working capital, term loans and project funding, and refinance expensive debt.',['debt-advisory']],['Buying, selling or merging a business?','Valuation, due diligence, negotiation and transaction support from first approach to close.',['mergers-acquisitions','corporate-finance-advisory']]].map(([q,a,l],i)=>`<div class="acc"><button aria-expanded="false" aria-controls="acc${i}" id="accb${i}">${q}<span class="pm">+</span></button><div class="panel" id="acc${i}" role="region" aria-labelledby="accb${i}" hidden><p>${a}</p><div class="links">${l.map(s=>`<a class="btn btn-ghost btn-sm" href="#${s}">${SVC[s].title} ${ic('arrow')}</a>`).join('')}</div></div></div>`).join('')}
</div></section>
${ctaBand()}`;

function servicePage(s){
  return `${pageHead(`<a href="#services">Services</a><span>/</span><span>${s.title}</span>`,s.tag,s.title,s.tagline,ART[s.art])}
<section><div class="wrap svc-layout">
  <div style="display:grid;gap:36px;min-width:0">
    <div style="display:grid;gap:14px"><span class="eyebrow">Overview</span><h2>${s.title} at Beyondmatrix</h2><p class="lead">${s.overview}</p><div class="benefit-row">${s.benefits.map(b=>`<span class="pill">${ic('check')} ${b}</span>`).join('')}</div></div>
    <div style="display:grid;gap:14px"><span class="eyebrow">What's included</span><div class="grid g2" style="gap:14px">${s.features.map(([t,d,i])=>`<div class="feat"><span class="ico-box">${ic(i)}</span><div><h3 style="font-size:1.02rem">${t}</h3><p>${d}</p></div></div>`).join('')}</div></div>
    <div class="card" style="background:var(--bg-alt)"><span class="eyebrow">Explore related services</span><div class="benefit-row">${SERVICES.filter(x=>x.slug!==s.slug).map(x=>`<a class="pill" href="#${x.slug}" style="text-decoration:none">${ic(x.icon)} ${x.title}</a>`).join('')}</div></div>
  </div>
  <aside class="sticky-form" id="consult">${formHTML(s.slug,s.fields,`Request a ${s.title} consultation`,'A senior adviser replies within one business day.',s.note)}</aside>
</div></section>
${ctaBand(`Questions about ${s.title.toLowerCase()}?`,'Write to us or use the toolkit to run a few numbers first.')}`;
}

function fieldHTML(f,fid){
  const id=`${fid}-${f.n}`;const r=f.req?' <span class="req" aria-hidden="true">*</span>':'';
  const common=`id="${id}" name="${f.n}" ${f.req?'aria-required="true"':''} aria-describedby="${id}-e"`;
  let ctl;
  if(f.t==='select')ctl=`<select ${common}><option value="">Select…</option>${f.o.map(o=>`<option>${o}</option>`).join('')}</select>`;
  else if(f.t==='textarea')ctl=`<textarea ${common} maxlength="${f.max||1000}" placeholder="${f.ph||''}"></textarea>`;
  else if(f.t==='radio')return `<div class="field" role="radiogroup" aria-labelledby="${id}-l"><span class="lbl" id="${id}-l">${f.l}${r}</span><div class="seg">${f.o.map((o,i)=>`<label><input type="radio" name="${f.n}" id="${id}-${i}" value="${o}"> ${o}</label>`).join('')}</div><span class="ferr" id="${id}-e" aria-live="polite"></span></div>`;
  else ctl=`<input ${common} type="${f.t}" autocomplete="${f.ac||'off'}" placeholder="${f.ph||''}" maxlength="${f.max||120}" ${f.t==='tel'?'inputmode="tel"':''}>`;
  return `<div class="field"><label for="${id}">${f.l}${r}</label>${ctl}<span class="ferr" id="${id}-e" aria-live="polite"></span></div>`;
}
function formHTML(slug,fields,title,sub,note){
  const fid='f-'+slug;let html='',buf=[];
  fields.forEach(f=>{if(f.half){buf.push(fieldHTML(f,fid));if(buf.length===2){html+=`<div class="frow">${buf.join('')}</div>`;buf=[]}}else{if(buf.length){html+=buf.join('');buf=[]}html+=fieldHTML(f,fid)}});
  html+=buf.join('');
  return `<div class="form-card"><div class="form-head"><h3>${title}</h3><p>${sub}</p></div>
  <div data-form-wrap="${slug}"><form class="bm" data-slug="${slug}" novalidate>
    <div class="alert e" role="alert" hidden></div>
    ${html}
    <div class="hp" aria-hidden="true"><label for="${fid}-hp">Leave blank</label><input id="${fid}-hp" name="_hp" tabindex="-1" autocomplete="off"></div>
    <label class="consent"><input type="checkbox" name="consent" id="${fid}-consent"><span>I have read the <a href="#privacy-policy">Privacy Policy</a> and agree to be contacted about this inquiry. <span class="req">*</span></span></label>
    <span class="ferr" id="${fid}-consent-e" aria-live="polite"></span>
    ${note?`<p class="form-note" style="align-items:flex-start">${ic('lock')}<span>${note}</span></p>`:''}
    <button class="btn btn-primary" type="submit" style="justify-content:center">Submit inquiry ${ic('arrow')}</button>
    <p class="form-note">${ic('lock')} Shared only with our advisory team. No engagement is created until agreed in writing.</p>
  </form></div></div>`;
}
const CONTACT_FIELDS=[{n:'fullName',l:'Full name',t:'text',req:1,ac:'name'},{n:'email',l:'Email',t:'email',req:1,ac:'email'},{n:'phone',l:'Phone (optional)',t:'tel',ac:'tel'},{n:'company',l:'Company (optional)',t:'text'},{n:'subject',l:'Subject',t:'select',req:1,o:['General inquiry','IPO Advisory','Fund Raising','Debt Advisory','Virtual CFO Services','Mergers & Acquisitions','Corporate Finance Advisory','Media / partnerships']},{n:'message',l:'Message',t:'textarea',req:1,max:1500}];

P['contact-us']=()=>`${pageHead('<span>Contact Us</span>','Contact','Let\'s talk about your business','Write to us, visit our Mumbai office, or send an inquiry below. Every message is read by a senior adviser.')}
<section><div class="wrap svc-layout" style="grid-template-columns:minmax(0,1fr) 460px">
  <div style="display:grid;gap:22px;min-width:0">
    <div class="cinfo">
      <div class="item"><span class="ico-box">${ic('mail')}</span><div><b>Email</b><span id="cEmail">${SITE.email}</span><br><button class="copy" data-copy="${SITE.email}">Copy email</button></div></div>
      <div class="item"><span class="ico-box">${ic('pin')}</span><div><b>Office</b><span>${SITE.address}</span><br><button class="copy" data-copy="${SITE.address}">Copy address</button> <a class="copy" style="display:inline-block" href="https://www.google.com/maps/search/?api=1&query=Raylon+Arcade+Kondivita+Andheri+East+Mumbai" target="_blank" rel="noopener">Open in Maps</a></div></div>
      <div class="item"><span class="ico-box">${ic('clock')}</span><div><b>Business hours</b><span>${SITE.hours}. We reply to inquiries within one business day.</span></div></div>
    </div>
    <div class="mapart" aria-label="Illustrated map of the office location">${ART.map}</div>
  </div>
  <aside>${formHTML('contact',CONTACT_FIELDS,'Send us a message','We usually reply within one business day.')}</aside>
</div></section>`;

/* legal */
function legal(title,crumb,sections){
  return `<section class="phead"><div class="grid-bg"></div><div class="wrap" style="position:relative"><nav class="crumbs"><a href="#home">Home</a><span>/</span><span>${crumb}</span></nav><span class="eyebrow">Legal</span><h1 style="margin-top:12px">${title}</h1><span class="updated">Effective & last updated · ${SITE.policyDate}</span></div></section>
  <section><div class="wrap legal"><aside aria-label="On this page">${sections.map((s,i)=>`<a href="#lg${i}" data-jump="lg${i}">${s[0]}</a>`).join('')}</aside><article>${sections.map((s,i)=>`<h2 id="lg${i}">${i+1}. ${s[0]}</h2>${s[1]}`).join('')}</article></div></section>`;
}
P['privacy-policy']=()=>legal('Privacy Policy','Privacy Policy',[
 ['Overview & commitment',`<p>${SITE.name} ("Beyondmatrix", "we") respects your privacy. This policy explains what personal information we collect through this website, why, and the choices you have.</p>`],
 ['Information we collect',`<p>When you submit an inquiry we collect the details you provide, which may include:</p><ul><li>Name, email address and phone number</li><li>Company name, designation and industry</li><li>Indicative business turnover, funding or loan requirements</li><li>Anything you choose to write in a message</li></ul><p>We do not ask for bank passwords, PINs, OTPs or card details, and you should never send them to us.</p>`],
 ['Technical & usage information',`<p>Our servers may record standard technical data such as browser type, device, IP address, pages visited and referral source to keep the website secure and working.</p>`],
 ['How we use information',`<ul><li>To evaluate and respond to your advisory inquiry</li><li>To communicate with you about the services you asked about</li><li>To improve the website and protect it from abuse</li><li>To meet legal and regulatory obligations</li></ul>`],
 ['Cookies & analytics',`<p>This website uses only essential browser storage to remember your cookie choice and display preference. If optional analytics are introduced, they will load only after you consent, and this section will be updated to name them.</p>`],
 ['Data sharing',`<p>We do not sell personal information. We may share it with service providers who help us operate (for example email delivery), with your consent with potential investors or lenders for your mandate, or where required by law.</p>`],
 ['Retention & security',`<p>Inquiry records are kept only as long as needed to respond and for legitimate business or legal purposes, after which they are deleted or anonymised. Access is restricted to authorised staff and protected with technical and organisational safeguards.</p>`],
 ['Your rights & grievances',`<p>Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may request access to, correction or erasure of your personal information, withdraw consent, or raise a grievance by writing to <b>${SITE.email}</b>.</p>`],
 ['Third-party links',`<p>Links to other websites are provided for convenience. We are not responsible for their privacy practices.</p>`],
 ['Changes to this policy',`<p>We may update this policy from time to time. The date at the top shows when it last changed.</p>`],
 ['Contact',`<p>Privacy questions: <b>${SITE.email}</b><br>${SITE.address}</p>`]]);
P['terms-and-conditions']=()=>legal('Terms & Conditions','Terms & Conditions',[
 ['Acceptance of terms',`<p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>`],
 ['Website & services',`<p>The website describes the corporate finance advisory services of ${SITE.name}, including IPO advisory, fund raising, debt advisory, Virtual CFO services, mergers & acquisitions and corporate finance advisory.</p>`],
 ['Informational nature of content',`<p>Content on this site, including toolkit calculators, is general information. It is not financial, legal, investment or tax advice and should not be relied on as such. Calculator outputs are indicative estimates only.</p>`],
 ['No client relationship',`<p>Browsing the website or submitting an inquiry does not create an advisory relationship. An engagement begins only when both parties sign a written agreement.</p>`],
 ['Intellectual property',`<p>Text, graphics, logos and design on this website belong to Beyondmatrix or its licensors and may not be reproduced without permission.</p>`],
 ['Acceptable use',`<p>You must not use the website unlawfully, attempt unauthorised access, introduce malicious code, or scrape content through automated means.</p>`],
 ['Third-party links',`<p>We are not responsible for the content or availability of external websites linked from this site.</p>`],
 ['Limitation of liability',`<p>To the extent permitted by law, Beyondmatrix is not liable for losses arising from use of, or reliance on, information on this website or from its unavailability.</p>`],
 ['Changes to terms',`<p>We may revise these terms at any time. Continued use after changes means you accept the revised terms.</p>`],
 ['Governing law',`<p>These terms are governed by the laws of India. Courts in Mumbai, Maharashtra have exclusive jurisdiction.</p>`],
 ['Contact',`<p>Questions about these terms: <b>${SITE.email}</b></p>`]]);

/* toolkit */
P.toolkit=()=>`${pageHead('<span>Toolkit</span>','Finance toolkit','Run the numbers before your first call','Three free tools to frame your requirement. Results are indicative and stay in your browser.')}
<section><div class="wrap grid g2" style="align-items:start">
  <div class="tool" id="emi">
    <div class="tool-head"><span class="ico-box">${ic('calc')}</span><div><h3>Business loan EMI calculator</h3><span class="muted" style="font-size:.88rem">Reducing-balance monthly instalment</span></div></div>
    <div class="range"><div class="top"><label for="eP">Loan amount</label><b id="ePv"></b></div><input type="range" id="eP" min="1000000" max="500000000" step="500000" value="50000000"></div>
    <div class="range"><div class="top"><label for="eR">Interest rate (p.a.)</label><b id="eRv"></b></div><input type="range" id="eR" min="7" max="20" step="0.25" value="10.5"></div>
    <div class="range"><div class="top"><label for="eN">Tenure</label><b id="eNv"></b></div><input type="range" id="eN" min="12" max="180" step="6" value="60"></div>
    <div class="out"><div><span>Monthly EMI</span><b id="eEmi"></b></div><div><span>Total interest</span><b id="eInt"></b></div><div><span>Total payable</span><b id="eTot"></b></div></div>
    <div><div class="meter" aria-hidden="true"><i id="eBar"></i></div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-top:6px" class="muted"><span>■ Principal</span><span id="eShare"></span></div></div>
    <p class="disclaim">Indicative calculation. Actual rates, fees and eligibility depend on the lender's assessment. <a href="#debt-advisory">Talk to our debt team →</a></p>
  </div>
  <div class="tool" id="ipoq">
    <div class="tool-head"><span class="ico-box">${ic('target')}</span><div><h3>IPO readiness self-check</h3><span class="muted" style="font-size:.88rem">Six questions, about one minute</span></div></div>
    <div id="ipoQs" style="display:grid;gap:14px"></div>
    <div><div style="display:flex;justify-content:space-between;font-size:.88rem"><b>Readiness score</b><b id="ipoScore" class="num">0 / 100</b></div><div class="meter" style="margin-top:6px"><i id="ipoBar" style="width:0"></i></div></div>
    <div class="finder-res" id="ipoRes" aria-live="polite"></div>
    <p class="disclaim">A qualitative self-check, not a regulatory eligibility test. Exchange and SEBI criteria are assessed in detail during engagement.</p>
  </div>
  <div class="tool" id="finder" style="grid-column:1/-1">
    <div class="tool-head"><span class="ico-box">${ic('compass')}</span><div><h3>Service finder</h3><span class="muted" style="font-size:.88rem">Tell us your goal and we'll point you to the right team</span></div></div>
    <div class="seg" id="goalSeg">${[['grow','Raise growth capital'],['list','List on an exchange'],['borrow','Borrow / refinance'],['cfo','Get finance leadership'],['deal','Buy, sell or merge'],['plan','Plan strategy & valuation']].map(([v,l])=>`<label><input type="radio" name="goal" value="${v}"> ${l}</label>`).join('')}</div>
    <div class="finder-res" id="finderRes" aria-live="polite"><span class="muted">Pick a goal to see the recommended service.</span></div>
  </div>
</div></section>${ctaBand()}`;

P.notfound=()=>`<section class="nf"><div class="wrap" style="display:grid;gap:18px;justify-items:center"><span class="big">404</span><h2>This page isn't on our balance sheet</h2><p class="lead">The link may be outdated or mistyped. Try one of these instead.</p><div class="hero-actions" style="justify-content:center"><a class="btn btn-primary" href="#home">Go to home</a><a class="btn btn-ghost" href="#services">Browse services</a></div></div></section>`;

/* ============ PHOTO-STYLE SCENES (replace with real photos via PHOTOS map) ============ */
// Drop real images in here as data URIs or uploaded asset URLs; any key set here replaces the drawn scene.
const PHOTOS={};
let _gid=0;
const SKIN=['#F1C7A5','#D9A47E','#B97E58','#8A5A3C','#E8B48F'];
const HAIR=['#1E1A17','#3A2A1E','#5B4330','#8C8C8C','#2B211B'];
function person(o){
  const {x=0,y=0,s=1,skin=SKIN[0],hair=HAIR[0],style='short',suit='#1F2A44',shirt='#FFFFFF',tie='#2340C9',glasses=false,legs=false}=o;
  const dark=`color-mix(in srgb, ${suit} 75%, #000)`;
  let h='';
  if(style==='long')h+=`<path d="M-24 2 Q-28 -32 0 -30 Q28 -32 24 2 L28 46 Q14 52 14 22 Q12 -10 0 -10 Q-12 -10 -14 22 Q-14 52 -28 46Z" fill="${hair}"/>`;
  let body=`<path d="M-54 190 L-52 72 Q-50 42 0 38 Q50 42 52 72 L54 190Z" fill="${suit}"/>`;
  if(tie){body+=`<path d="M-15 38 L0 78 L15 38Z" fill="${shirt}"/><path d="M-4 44 L4 44 L6 74 L0 86 L-6 74Z" fill="${tie}"/>`}
  else body+=`<path d="M-15 38 L0 70 L15 38Z" fill="${shirt}"/>`;
  body+=`<path d="M-15 38 L-4 92 L-26 56Z" fill="${dark}" opacity=".55"/><path d="M15 38 L4 92 L26 56Z" fill="${dark}" opacity=".55"/>`;
  if(legs)body+=`<path d="M-40 188 L-36 330 L-12 330 L-4 196 L4 196 L12 330 L36 330 L40 188Z" fill="${dark}"/><rect x="-40" y="326" width="30" height="10" rx="4" fill="#111"/><rect x="10" y="326" width="30" height="10" rx="4" fill="#111"/>`;
  let head=`<rect x="-8" y="14" width="16" height="26" rx="6" fill="${skin}" style="filter:brightness(.9)"/><ellipse cx="-20" cy="3" rx="4" ry="6" fill="${skin}"/><ellipse cx="20" cy="3" rx="4" ry="6" fill="${skin}"/><ellipse cx="0" cy="0" rx="20" ry="24" fill="${skin}"/>`;
  if(style==='short')head+=`<path d="M-21 -2 Q-25 -32 0 -29 Q25 -32 21 -2 Q19 -17 2 -18 Q-14 -19 -21 -2Z" fill="${hair}"/>`;
  if(style==='long')head+=`<path d="M-21 -2 Q-22 -30 2 -28 Q22 -27 21 -4 Q8 -20 -21 -2Z" fill="${hair}"/>`;
  if(style==='bun')head+=`<circle cx="0" cy="-30" r="10" fill="${hair}"/><path d="M-21 0 Q-23 -30 0 -28 Q23 -30 21 0 Q18 -18 0 -19 Q-18 -18 -21 0Z" fill="${hair}"/>`;
  if(style==='bald')head+=`<path d="M-21 2 Q-22 -10 -18 -12 L-17 6Z M21 2 Q22 -10 18 -12 L17 6Z" fill="${hair}"/>`;
  if(glasses)head+=`<g fill="none" stroke="#2A2A2A" stroke-width="1"><rect x="-13" y="-2" width="10" height="7" rx="2.5"/><rect x="3" y="-2" width="10" height="7" rx="2.5"/><path d="M-3 1h6"/></g>`;
  head+=`<path d="M-6 12 Q0 15 6 12" stroke="#7a4a35" stroke-width="1.4" fill="none" opacity=".55"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${body}${head}</g>`;
}
function backHead(x,y,s,hair,suit){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-56 120 L-54 60 Q-50 34 0 30 Q50 34 54 60 L56 120Z" fill="${suit}"/><ellipse cx="0" cy="0" rx="22" ry="26" fill="${hair}"/></g>`}
function plant(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-18 0 L18 0 L14 40 L-14 40Z" fill="#E7E2DA"/>${[[-20,-30,-30],[18,-34,28],[0,-50,0],[-8,-20,-50],[12,-18,48],[-26,-10,-70],[26,-12,70]].map(([dx,dy,r])=>`<ellipse cx="${dx}" cy="${dy}" rx="8" ry="22" fill="#4E7D5B" transform="rotate(${r} ${dx} ${dy})"/>`).join('')}</g>`}
function windowBg(id,w=600,h=400,top=20,bot=270){
  return `<defs><linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4F7FC"/><stop offset="1" stop-color="#D8E2F1"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="#E4E9F1"/><rect x="0" y="${top}" width="${w}" height="${bot-top}" fill="url(#sky${id})"/>
  <g fill="#C7D2E4">${[[10,170,60],[80,130,50],[140,190,70],[220,110,46],[275,160,80],[360,140,60],[430,180,70],[505,120,60],[565,170,50]].map(([x,yy,ww])=>`<rect x="${x}" y="${yy}" width="${ww}" height="${bot-yy}"/>`).join('')}</g>
  <g stroke="#8E9AB1" stroke-width="7">${[...Array(7)].map((_,i)=>`<line x1="${i*w/6}" y1="${top}" x2="${i*w/6}" y2="${bot}"/>`).join('')}<line x1="0" y1="${top+((bot-top)*.45)}" x2="${w}" y2="${top+((bot-top)*.45)}"/></g>
  <rect x="0" y="${top-6}" width="${w}" height="8" fill="#9AA5BA"/>`;
}
const vignette=id=>`<defs><radialGradient id="vg${id}" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0A1436" stop-opacity=".28"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#vg${id})"/>`;
const SC={
 meeting(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Advisers in a client meeting">${windowBg(id)}
  ${plant(560,250,1.3)}
  ${person({x:140,y:160,s:1.15,skin:SKIN[1],hair:HAIR[1],suit:'#2C3A5C',shirt:'#F3F4F8',tie:'#8C1D2C',glasses:true})}
  ${person({x:300,y:150,s:1.2,skin:SKIN[0],hair:HAIR[2],style:'long',suit:'#E9E4DC',shirt:'#1F2A44',tie:false})}
  ${person({x:460,y:160,s:1.15,skin:SKIN[4],hair:HAIR[3],style:'bun',suit:'#3E4A5E',shirt:'#FFFFFF',tie:false})}
  <rect x="0" y="292" width="600" height="20" fill="#4A3A30"/><rect x="0" y="312" width="600" height="88" fill="#2F2521"/>
  ${[140,300,460].map(x=>`<path d="M${x-52} 292 L${x-44} 236 Q${x-43} 230 ${x-36} 230 L${x+36} 230 Q${x+43} 230 ${x+44} 236 L${x+52} 292Z" fill="#C9CFD9"/><circle cx="${x}" cy="260" r="5" fill="#E8ECF2"/>`).join('')}
  <rect x="218" y="276" width="18" height="16" rx="3" fill="#fff"/><path d="M236 280 q8 2 0 8" stroke="#fff" stroke-width="3" fill="none"/>
  <rect x="370" y="284" width="46" height="8" rx="1" fill="#fff" transform="rotate(-6 393 288)"/>${vignette(id)}</svg>`},
 collab(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Team reviewing financial documents together"><rect width="600" height="400" fill="#E9EDF4"/>
  <rect x="30" y="30" width="250" height="170" rx="4" fill="#fff" stroke="#C9D1DF"/>${[[50,50,'#F3D88E'],[90,50,'#B9C8FF'],[130,50,'#F3D88E'],[50,90,'#C8E6D0'],[90,90,'#F3D88E'],[170,60,'#B9C8FF']].map(([x,y,c])=>`<rect x="${x}" y="${y}" width="32" height="32" fill="${c}" transform="rotate(${(x%3)-1} ${x} ${y})"/>`).join('')}<path d="M60 180 L110 150 L150 160 L200 120 L250 130" stroke="#2340C9" stroke-width="3" fill="none"/>
  <rect x="330" y="20" width="240" height="190" fill="#DCE3EE"/><g stroke="#AEB8CA" stroke-width="5"><line x1="410" y1="20" x2="410" y2="210"/><line x1="490" y1="20" x2="490" y2="210"/></g>
  ${person({x:150,y:150,s:1.1,skin:SKIN[2],hair:HAIR[0],suit:'#FFFFFF',shirt:'#DCE3EE',tie:false})}
  ${person({x:300,y:130,s:1.2,skin:SKIN[0],hair:HAIR[1],style:'long',suit:'#1F2A44',shirt:'#FFFFFF',tie:false})}
  ${person({x:455,y:145,s:1.15,skin:SKIN[1],hair:HAIR[0],suit:'#2D3C62',shirt:'#EAF0FF',tie:'#2340C9',glasses:true})}
  <path d="M488 230 Q440 260 380 300" stroke="#2D3C62" stroke-width="26" stroke-linecap="round" fill="none"/><ellipse cx="378" cy="302" rx="12" ry="9" fill="${SKIN[1]}"/>
  <rect x="0" y="300" width="600" height="100" fill="#F7F8FB"/><rect x="0" y="296" width="600" height="8" fill="#D5DBE6"/>
  <g transform="rotate(-8 250 340)"><rect x="200" y="315" width="110" height="70" fill="#fff" stroke="#D5DBE6"/>${[0,1,2,3,4].map(i=>`<rect x="${214+i*18}" y="${370-[18,26,22,34,40][i]}" width="11" height="${[18,26,22,34,40][i]}" fill="${i==4?'#2340C9':'#9FB2FF'}"/>`).join('')}</g>
  <g transform="rotate(6 400 340)"><rect x="350" y="318" width="100" height="66" fill="#fff" stroke="#D5DBE6"/><path d="M362 336h70M362 348h56M362 360h64M362 372h40" stroke="#C3CCE6" stroke-width="4"/></g>
  <rect x="110" y="330" width="60" height="7" rx="3" fill="#1B1B1B" transform="rotate(-20 140 333)"/>${vignette(id)}</svg>`},
 present(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Adviser presenting a growth plan"><rect width="600" height="400" fill="#E3E8F0"/><rect x="0" y="330" width="600" height="70" fill="#B7C0D0"/>
  <rect x="60" y="50" width="320" height="200" rx="6" fill="#0E1A44"/><rect x="74" y="64" width="292" height="172" rx="3" fill="#13235C"/>
  ${[0,1,2,3,4,5].map(i=>`<rect x="${96+i*44}" y="${210-[40,58,52,80,96,124][i]}" width="26" height="${[40,58,52,80,96,124][i]}" rx="3" fill="${i==5?'#F3D88E':'#5B7BFF'}"/>`).join('')}<path d="M100 150 L150 132 L190 138 L240 108 L290 96 L340 74" stroke="#fff" stroke-width="2.5" fill="none" stroke-dasharray="5 5"/><text x="90" y="88" font-family="Outfit,sans-serif" font-size="14" fill="#fff" font-weight="600">Revenue growth plan</text>
  <rect x="210" y="250" width="20" height="80" fill="#5B6478"/>
  ${person({x:470,y:110,s:.95,skin:SKIN[3],hair:HAIR[0],suit:'#2340C9',shirt:'#FFFFFF',tie:'#0E1A44',legs:true})}
  <path d="M430 175 Q400 150 372 140" stroke="#2340C9" stroke-width="20" stroke-linecap="round" fill="none"/><circle cx="368" cy="138" r="8" fill="${SKIN[3]}"/>
  ${backHead(110,330,1.2,HAIR[1],'#3E4A5E')}${backHead(250,340,1.15,HAIR[3],'#1F2A44')}${backHead(560,345,1.1,HAIR[0],'#6B5B4E')}${vignette(id)}</svg>`},
 analyst(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Finance analyst reviewing dashboards">${windowBg(id,600,400,10,240)}
  ${person({x:420,y:150,s:1.2,skin:SKIN[1],hair:HAIR[0],style:'long',suit:'#FFFFFF',shirt:'#DCE3EE',tie:false})}
  <rect x="60" y="120" width="240" height="150" rx="8" fill="#141B2E"/><rect x="70" y="130" width="220" height="130" rx="4" fill="#F7F9FD"/>
  <text x="82" y="150" font-family="Outfit,sans-serif" font-size="11" font-weight="600" fill="#0E1733">Cash flow · FY27</text>
  <path d="M82 230 L120 210 L150 218 L185 190 L220 196 L255 168 L280 172 L280 250 L82 250Z" fill="#2340C9" opacity=".15"/><path d="M82 230 L120 210 L150 218 L185 190 L220 196 L255 168 L280 172" stroke="#2340C9" stroke-width="2.5" fill="none"/>
  <rect x="170" y="270" width="20" height="26" fill="#141B2E"/><rect x="140" y="292" width="80" height="8" rx="3" fill="#141B2E"/>
  <rect x="0" y="300" width="600" height="100" fill="#EDEFF3"/><rect x="0" y="296" width="600" height="8" fill="#CBD2DE"/>
  <path d="M350 300 L362 252 Q363 246 370 246 L470 246 Q477 246 478 252 L490 300Z" fill="#C9CFD9"/><circle cx="420" cy="272" r="5" fill="#E8ECF2"/>
  <rect x="520" y="276" width="20" height="22" rx="3" fill="#2340C9"/>${plant(40,256,1)}${vignette(id)}</svg>`},
 phone(){const id=++_gid;return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Client on a call with an adviser"><defs><linearGradient id="pb${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DCE5F7"/><stop offset="1" stop-color="#AFC0E8"/></linearGradient></defs><rect width="400" height="400" fill="url(#pb${id})"/>
  ${[[60,80,40],[320,60,55],[340,250,30],[80,300,46]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".35"/>`).join('')}
  ${person({x:200,y:150,s:1.5,skin:SKIN[0],hair:HAIR[1],style:'long',suit:'#1F2A44',shirt:'#F4E9DD',tie:false})}
  <path d="M270 330 Q262 250 236 180" stroke="#1F2A44" stroke-width="34" stroke-linecap="round" fill="none"/><rect x="216" y="140" width="22" height="44" rx="5" fill="#111" transform="rotate(12 227 162)"/><ellipse cx="238" cy="180" rx="13" ry="11" fill="${SKIN[0]}"/>${vignette(id)}</svg>`},
 tower(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Corporate office towers"><defs><linearGradient id="ts${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9DB4F2"/><stop offset="1" stop-color="#EAF0FC"/></linearGradient><linearGradient id="tg${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3355D6"/><stop offset="1" stop-color="#0E1A44"/></linearGradient></defs><rect width="600" height="400" fill="url(#ts${id})"/>
  <path d="M40 400 L120 40 L300 0 L300 400Z" fill="url(#tg${id})"/><g stroke="#9FB2FF" stroke-opacity=".35" stroke-width="1.5">${[...Array(18)].map((_,i)=>`<line x1="${120-i*4.4}" y1="${40+i*20}" x2="300" y2="${i*21}"/>`).join('')}${[...Array(8)].map((_,i)=>`<line x1="${130+i*22}" y1="${38-i*4.5}" x2="${130+i*22}" y2="400"/>`).join('')}</g>
  <path d="M300 0 L520 60 L580 400 L300 400Z" fill="#203A9E"/><g stroke="#C9D5FF" stroke-opacity=".25">${[...Array(18)].map((_,i)=>`<line x1="300" y1="${i*21}" x2="${520+i*3.3}" y2="${60+i*19}"/>`).join('')}</g>
  <path d="M0 0 L520 60" stroke="#fff" stroke-opacity=".0"/><path d="M300 0 L300 400" stroke="#F3D88E" stroke-width="2" stroke-opacity=".7"/>${vignette(id)}</svg>`},
 strategy(){const id=++_gid;return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Advisers discussing capital structure at a glass board">${windowBg(id,600,400,0,300)}
  <rect x="150" y="40" width="300" height="200" rx="6" fill="#fff" fill-opacity=".92" stroke="#C9D1DF"/>
  <g transform="translate(240 140)"><circle r="62" fill="#E3E8FB"/><path d="M0 0 L0 -62 A62 62 0 0 1 59 -19Z" fill="#2340C9"/><path d="M0 0 L59 -19 A62 62 0 0 1 22 58Z" fill="#C9A24B"/><path d="M0 0 L22 58 A62 62 0 0 1 -62 0Z" fill="#9FB2FF"/><circle r="26" fill="#fff"/></g>
  <g font-family="Outfit,sans-serif" font-size="12" fill="#0E1733"><text x="172" y="66" font-weight="600">Capital structure</text><rect x="330" y="96" width="10" height="10" fill="#2340C9"/><text x="346" y="105">Equity</text><rect x="330" y="122" width="10" height="10" fill="#C9A24B"/><text x="346" y="131">Term debt</text><rect x="330" y="148" width="10" height="10" fill="#9FB2FF"/><text x="346" y="157">Working capital</text></g>
  ${person({x:90,y:150,s:1.05,skin:SKIN[2],hair:HAIR[0],suit:'#1F2A44',shirt:'#FFFFFF',tie:'#C9A24B',legs:true})}
  <path d="M120 215 Q150 190 176 168" stroke="#1F2A44" stroke-width="22" stroke-linecap="round" fill="none"/><circle cx="180" cy="165" r="9" fill="${SKIN[2]}"/>
  ${person({x:520,y:150,s:1.05,skin:SKIN[0],hair:HAIR[1],style:'bun',suit:'#2340C9',shirt:'#FFFFFF',tie:false,legs:true})}
  <rect x="470" y="230" width="60" height="78" rx="4" fill="#0E1A44" transform="rotate(-8 500 270)"/>
  <rect x="0" y="300" width="600" height="100" fill="#C3CBD8"/>${vignette(id)}</svg>`},
 hero(){return `<svg viewBox="0 0 520 560" role="img" aria-label="Senior financial adviser holding a tablet">
  <g fill="none" stroke="#fff" stroke-opacity=".16"><circle cx="270" cy="300" r="250"/><circle cx="270" cy="300" r="190"/><circle cx="270" cy="300" r="130"/></g>
  ${person({x:270,y:180,s:2.5,skin:SKIN[0],hair:HAIR[3],suit:'#16203F',shirt:'#FFFFFF',tie:'#2D4BD8',glasses:true})}
  <path d="M150 360 Q150 450 230 470" stroke="#16203F" stroke-width="64" stroke-linecap="round" fill="none"/><path d="M395 360 Q400 440 320 470" stroke="#16203F" stroke-width="64" stroke-linecap="round" fill="none"/>
  <g transform="rotate(-12 280 450)"><rect x="200" y="390" width="160" height="112" rx="12" fill="#0B0F1E"/><rect x="210" y="400" width="140" height="92" rx="6" fill="#2D4BD8"/><path d="M222 470 L250 452 L272 460 L300 432 L336 420" stroke="#fff" stroke-width="3" fill="none"/></g>
  <ellipse cx="230" cy="474" rx="22" ry="16" fill="${SKIN[0]}"/><ellipse cx="322" cy="472" rx="22" ry="16" fill="${SKIN[0]}"/></svg>`},
};
const PX=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
// Real photography (Pexels, free licence). Each frame keeps its drawn scene underneath as a fallback.
const PHOTO_SRC={
  hero:[7567595,'Adviser in a dark suit reviewing market data on a tablet'],
  meeting:[1367276,'Advisory team in a client meeting'],
  collab:[8133855,'Three advisers reviewing a plan on a laptop'],
  present:[7876968,'Adviser presenting a growth plan to colleagues'],
  fund:[7255389,'Investors and founders meeting in a conference room'],
  tower:[323705,'Corporate office tower'],
  analyst:[5831260,'Finance analyst reviewing dashboards across several screens'],
  deal:[8428059,'Two businessmen shaking hands on a deal'],
  strategy:[7877029,'Adviser explaining charts on a whiteboard'],
  phone:[7877115,'Adviser speaking with a client by phone'],
  results:[7876658,'Advisers reviewing performance graphs on a whiteboard'],
  skyline:[443383,'City high-rise buildings'],
};
const FALLBACK={fund:'meeting',deal:'collab',results:'strategy',skyline:'tower'};
const photo=(k,cls='')=>{const src=PHOTO_SRC[k];const sc=SC[k]||SC[FALLBACK[k]]||SC.meeting;
  return `<div class="photo ${cls}">${sc()}${src?`<img src="${PX(src[0])}" alt="${src[1]}" loading="lazy" onerror="this.remove()">`:''}</div>`};

/* ============ V2 LAYOUT (reference-matched) ============ */
const LOGO_SRC={full:'images/logo-full.png',navy:'images/logo.png',white:'images/logo-white.png',footer:'images/logo-full-white.png'};
const SVC_PHOTO={'ipo-advisory':'present','fund-raising':'fund','debt-advisory':'tower','virtual-cfo-services':'analyst','mergers-acquisitions':'deal','corporate-finance-advisory':'strategy'};
const LOGO=`<span class="logo-mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M4 18 10 6l4 8 2-4 4 8"/></svg></span>`;
function header(route){
  const svcActive=route==='services'||SVC[route];
  return `
  <div class="topbar"><div class="wrap"><div class="tb-l"><span>${ic('mail')} ${SITE.email}</span><span class="tb-sep hide-sm"></span><span class="hide-sm">${ic('pin')} Andheri East, Mumbai 400059</span></div><span class="hide-sm">${ic('clock')} ${SITE.hours}</span></div></div>
  <header class="site"><div class="wrap">
    <a class="logo" href="#home" aria-label="Beyond Matrix Capital home"><img class="logo-img logo-full" src="${LOGO_SRC.full}" alt="Beyond Matrix Capital: Your Partner in Growth & Wealth Creation" width="1392" height="332"></a>
    <nav class="main" aria-label="Main">
      <a href="#home" class="${route==='home'?'active':''}">Home</a>
      <a href="#about-us" class="${route==='about-us'?'active':''}">About</a>
      <div class="dd ${svcActive?'active':''}" id="dd"><button aria-expanded="false" aria-controls="ddm" id="ddb">Services ${ic('chev')}</button>
        <div class="dd-menu" id="ddm" hidden>${SERVICES.map(s=>`<a href="#${s.slug}"><span class="ico-box">${ic(s.icon)}</span><span><b>${s.title}</b><small>${s.tag}</small></span></a>`).join('')}<a href="#services" class="dd-all">View all services →</a></div></div>
      <a href="#toolkit" class="${route==='toolkit'?'active':''}">Toolkit</a>
      <a href="#contact-us" class="${route==='contact-us'?'active':''}">Contact</a>
    </nav>
    <div class="hdr-cta">
      <a class="btn btn-primary btn-sm" href="#contact-us" data-cta>Book Consultation</a>
      <button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">${ic('menu')}</button>
    </div>
  </div></header>
  <div class="mnav" id="mnav" hidden>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span class="logo"><img class="logo-img logo-full" src="${LOGO_SRC.full}" alt="Beyond Matrix Capital: Your Partner in Growth & Wealth Creation" width="1392" height="332"></span><button class="icon-btn" id="mclose" aria-label="Close menu">${ic('x')}</button></div>
    <a href="#home">Home</a><a href="#about-us">About</a><a href="#services">Services</a>
    <div class="sub">${SERVICES.map(s=>`<a href="#${s.slug}">${s.title}</a>`).join('')}</div>
    <a href="#toolkit">Toolkit</a><a href="#contact-us">Contact</a><a href="#admin">Staff login</a>
    <a class="btn btn-primary" href="#contact-us" style="margin-top:20px;justify-content:center;color:#fff;border:0">Book Consultation</a>
  </div>
  <button id="themeBtn" hidden></button>`;
}
function footer(){
  return `<footer class="site"><div class="wrap">
  <div class="f-cta"><h2>Have a financing or transaction question?</h2><a class="btn btn-light" href="#contact-us">Book Consultation <span class="arrow-dot">${ic('arrow')}</span></a></div>
  <div class="fgrid">
    <div style="display:grid;gap:14px;align-content:start"><a class="logo" href="#home" aria-label="Beyond Matrix Capital home"><img class="logo-img-foot" src="${LOGO_SRC.footer}" alt="Beyond Matrix Capital: Your Partner in Growth & Wealth Creation" width="1392" height="332"></a>
      <p>${SITE.name} is a corporate finance and investment banking advisory firm helping Indian businesses raise capital, list, borrow and transact with confidence.</p>
      <form class="news" id="newsForm" novalidate><label for="nEmail" class="hp">Email for insights</label><input id="nEmail" type="email" placeholder="Email for quarterly insights"><button class="btn btn-primary btn-sm">Subscribe</button></form><small id="newsMsg" aria-live="polite"></small></div>
    <div><h4>Company</h4><ul><li><a href="#home">Home</a></li><li><a href="#about-us">About Us</a></li><li><a href="#services">All services</a></li><li><a href="#toolkit">Finance toolkit</a></li><li><a href="#contact-us">Contact Us</a></li><li><a href="#admin">Staff login</a></li></ul></div>
    <div><h4>Services</h4><ul>${SERVICES.map(s=>`<li><a href="#${s.slug}">${s.title}</a></li>`).join('')}</ul></div>
    <div><h4>Reach us</h4><ul><li class="fli">${ic('mail')}<span>${SITE.email}</span></li><li class="fli">${ic('pin')}<span>${SITE.address}</span></li><li class="fli">${ic('clock')}<span>${SITE.hours}</span></li></ul></div>
  </div>
  <div class="fbottom"><span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span><span style="display:flex;gap:18px"><a href="#privacy-policy">Privacy Policy</a><a href="#terms-and-conditions">Terms &amp; Conditions</a></span></div>
  <p class="fdisc">Photography courtesy of Pexels and Pixabay contributors. Information on this website is general in nature and is not financial, legal, investment or tax advice. Submitting an inquiry does not create an advisory engagement.</p>
  </div></footer>`;
}
const pageHead=(crumb,eyebrow,title,lead,art)=>`<section class="phead"><div class="wrap"><div class="phead-panel ${art?'has-art':''}"><div class="phead-copy"><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span>${crumb}</nav><span class="eyebrow inv">${eyebrow}</span><h1>${title}</h1>${lead?`<p class="lead">${lead}</p>`:''}</div>${art?`<div class="phead-art">${art}</div>`:''}</div></div></section>`;
const ctaBand=(h='One call can change your financial trajectory',p='Tell us where you are headed. A senior adviser reviews every inquiry and replies within one business day.')=>`<section class="pt0"><div class="wrap"><div class="cta2"><div class="cta2-ph">${photo('phone')}</div><div class="cta2-copy"><span class="eyebrow inv">Talk to an adviser</span><h2>${h}</h2><p>${p}</p><div class="hero-actions"><a class="btn btn-light" href="#contact-us">Schedule a consultation <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost-inv" href="#toolkit">Try the toolkit</a></div></div></div></div></section>`;
const scard=(s,i)=>`<a class="scard" href="#${s.slug}"><span class="no">${String(i+1).padStart(2,'0')}</span><div class="scard-top"><h3 class="vt">${s.title.replace('Corporate Finance Advisory','Corporate Finance')}</h3>${photo(SVC_PHOTO[s.slug],'scard-ph')}</div><p>${s.short}</p><span class="more">Read More ${ic('arrow')}</span></a>`;
const svcHead=(eyebrow,title,lead)=>`<div class="split-head"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div><p class="muted">${lead}</p></div>`;
const statStrip=()=>`<div class="statstrip">${SITE.stats.map(s=>`<div><span>${s.l}</span><b data-count="${s.v.replace(/[^\d]/g,'')}" data-pre="${s.v.replace(/\d/g,'')}" data-suf="${s.s}">${s.v}${s.s}</b></div>`).join('')}</div>`;

P.home=()=>`
<section class="hero2"><div class="wrap"><div class="hero2-panel">
  <div class="hero2-copy">
    <span class="eyebrow inv">Corporate finance & investment banking advisory</span>
    <h1>Capital Solutions for Ambitious Businesses</h1>
    <p>IPO preparation, growth capital, debt structuring and M&A advisory for Indian companies, delivered by one senior team from first conversation to closing.</p>
    <div class="hero-actions"><a class="btn btn-light" href="#contact-us">Schedule Appointment <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost-inv" href="#services">Explore services</a></div>
    <div class="proof"><div class="avs">${[SKIN[0],SKIN[2],SKIN[1],SKIN[3]].map((c,i)=>`<span style="background:${['#2D4BD8','#C9A24B','#0E1A44','#5B7BFF'][i]}"><svg viewBox="-30 -34 60 70"><ellipse cx="0" cy="0" rx="18" ry="22" fill="${c}"/><path d="M-30 40 Q-28 22 0 20 Q28 22 30 40Z" fill="#fff" opacity=".9"/></svg></span>`).join('')}</div><div><b>100+</b> active client profiles<br><small>Across manufacturing, pharma, infra, tech & more</small></div></div>
  </div>
  <div class="hero2-art">
    <svg class="rings" viewBox="0 0 600 600" aria-hidden="true"><g fill="none" stroke="#fff"><circle cx="300" cy="300" r="290" stroke-opacity=".10"/><circle cx="300" cy="300" r="220" stroke-opacity=".14"/><circle cx="300" cy="300" r="150" stroke-opacity=".18"/></g><circle cx="300" cy="300" r="150" fill="#fff" fill-opacity=".05"/></svg>
    <div class="hero-frame" hidden>${photo('hero','hero-photo')}</div>
    <img class="cutout" src="images/hero-advisers.webp" width="1110" height="1038" fetchpriority="high" alt="Two Beyondmatrix advisers reviewing a plan on a tablet" onerror="this.remove();this.parentNode&&0;document.querySelectorAll('.hero-frame').forEach(f=>f.hidden=false)">
    <span class="bubble b1" data-depth="-24">${ic('doc')}</span><span class="bubble b2" data-depth="-18"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="13" fill="none" stroke="#E3E8FF" stroke-width="6"/><circle cx="18" cy="18" r="13" fill="none" stroke="#2D4BD8" stroke-width="6" stroke-dasharray="58 82" transform="rotate(-90 18 18)"/></svg></span><span class="bubble b3" data-depth="-28">${ic('gauge')}</span>
    <div class="glass g1" data-depth="-16"><span class="g-ico">${ic('trend')}</span><div><small>Capital raised for clients</small><b>₹500 Cr+</b></div><svg class="spark" viewBox="0 0 80 28" aria-hidden="true"><path d="M2 24 L14 20 L26 22 L38 14 L50 16 L62 8 L78 4" fill="none" stroke="#7CE3A6" stroke-width="2.4" stroke-linecap="round"/></svg></div>
    <div class="glass g2" data-depth="-22"><span class="g-ico">${ic('shield')}</span><div><small>Practice areas</small><b>6 integrated</b></div></div>
  </div>
</div></div></section>
${homeBelowHero()}`;

P['about-us']=()=>`${pageHead('<span>About Us</span>','About Beyondmatrix','Your long-term partner in corporate finance','Beyondmatrix Capital Private Limited helps growing Indian businesses access the right capital and make better financial decisions, with integrity at the centre of every mandate.',photo('meeting'))}
<section><div class="wrap two-col">
  <div class="stat-block">${photo('analyst','stat-photo')}${statStrip()}</div>
  <div style="display:grid;gap:18px;align-content:center"><span class="eyebrow">Who we are</span><h2>Investment banking depth with an operator's view of finance</h2>
  <p class="muted">We work with promoters, founders and finance teams on the decisions that shape a company: raising equity, borrowing well, preparing to list, buying or selling a business, and running finance with discipline.</p>
  <p class="muted">Our team brings together experience across capital markets, credit, valuation and CFO functions, so advice in one area is always informed by the others.</p></div>
</div></section>
<section class="alt"><div class="wrap grid g2">
  <div class="mv"><span class="ico-ring">${ic('target')}</span><span class="eyebrow">Mission</span><h3>Help businesses access suitable capital and customised strategic financial guidance.</h3><p class="muted">We match each company with the funding route, partner and structure that fits its stage, not the one that is easiest to sell.</p></div>
  <div class="mv blue"><span class="ico-ring">${ic('globe')}</span><span class="eyebrow inv">Vision</span><h3>To be the trusted financial partner for India's growing businesses.</h3><p>Long-term value creation, earned through integrity and results.</p></div>
</div></section>
<section><div class="wrap">
  ${svcHead('Core values','What drives us forward','Four principles that shape how we take on, run and close every mandate.')}
  <div class="grid g4">${[['shield','Integrity & transparency','Clear fees, honest assessments and no hidden agendas.'],['users','Client-first execution','Your timeline and objectives set the pace of every mandate.'],['bank','Deep market access','Relationships across banks, NBFCs, funds and exchanges.'],['checkc','End-to-end ownership','We stay accountable from first meeting to final filing.']].map(([i,t,d],n)=>`<div class="value"><span class="no">${String(n+1).padStart(2,'0')}</span><span class="ico-ring">${ic(i)}</span><b>${t}</b><p>${d}</p></div>`).join('')}</div>
</div></section>
<section class="pt0"><div class="wrap"><div class="photo-wide short">${photo('present')}</div></div></section>
<section class="pt0"><div class="wrap">${svcHead('Explore','Where we can help','Choose a practice to see what is included.')}<div class="sgrid">${SERVICES.map(scard).join('')}</div></div></section>
${ctaBand('Let\'s talk about your growth plans')}`;

P.services=()=>`${pageHead('<span>Services</span>','Financial advisory services','Find the right financial solution for your business','Six integrated practices covering capital raising, listing, lending, transactions and finance leadership.',photo('skyline'))}
<section><div class="wrap"><div class="statstrip solo">${SITE.stats.map(s=>`<div><span>${s.l}</span><b>${s.v}${s.s}</b></div>`).join('')}</div></div></section>
<section class="pt0"><div class="wrap">${svcHead('Our practices','What we are offering to our potential clients','Each practice is led by specialists and connected to the others, so a fundraise, a loan and a listing can be planned together.')}<div class="sgrid">${SERVICES.map(scard).join('')}</div></div></section>
<section class="alt"><div class="wrap" style="max-width:880px">
  <div class="sec-head center"><span class="eyebrow">Not sure where to start?</span><h2>Start from your business need</h2></div>
  ${[['Looking to secure growth capital or plan an IPO?','We help with fundraising strategy, IPO documentation, regulatory filings and investor introductions.',['fund-raising','ipo-advisory']],['Need financial leadership without a full-time CFO?','Our Virtual CFO team handles planning, cash flow, budgeting, MIS reports and compliance oversight.',['virtual-cfo-services']],['Looking for business loans or lower interest rates?','We arrange working capital, term loans and project funding, and refinance expensive debt.',['debt-advisory']],['Buying, selling or merging a business?','Valuation, due diligence, negotiation and transaction support from first approach to close.',['mergers-acquisitions','corporate-finance-advisory']]].map(([q,a,l],i)=>`<div class="acc"><button aria-expanded="false" aria-controls="acc${i}" id="accb${i}">${q}<span class="pm">+</span></button><div class="panel" id="acc${i}" role="region" aria-labelledby="accb${i}" hidden><p>${a}</p><div class="links">${l.map(s=>`<a class="btn btn-ghost btn-sm" href="#${s}">${SVC[s].title} ${ic('arrow')}</a>`).join('')}</div></div></div>`).join('')}
</div></section>
${ctaBand()}`;

function servicePage(s){
  const idx=SERVICES.indexOf(s);
  return `${pageHead(`<a href="#services">Services</a><span>/</span><span>${s.title}</span>`,s.tag,s.title,s.tagline,photo(SVC_PHOTO[s.slug]))}
<section><div class="wrap svc-layout">
  <div style="display:grid;gap:44px;min-width:0">
    <div style="display:grid;gap:16px"><span class="eyebrow">Overview</span><h2>${s.title} at Beyondmatrix</h2><p class="lead">${s.overview}</p><div class="benefit-row">${s.benefits.map(b=>`<span class="pill">${ic('check')} ${b}</span>`).join('')}</div></div>
    <div style="display:grid;gap:18px"><span class="eyebrow">What's included</span><div class="feat-grid">${s.features.map(([t,d,i],n)=>`<div class="feat"><span class="no">${String(n+1).padStart(2,'0')}</span><span class="ico-ring">${ic(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div>
    <div class="photo-wide short">${photo(SVC_PHOTO[s.slug]==='collab'?'meeting':'collab')}</div>
    <div style="display:grid;gap:14px"><span class="eyebrow">Explore related services</span><div class="benefit-row">${SERVICES.filter(x=>x.slug!==s.slug).map(x=>`<a class="pill link" href="#${x.slug}">${ic(x.icon)} ${x.title}</a>`).join('')}</div></div>
  </div>
  <aside class="sticky-form" id="consult">${formHTML(s.slug,s.fields,`Request ${/^[AEIOU]/.test(s.title)?'an':'a'} ${s.title} consultation`,'A senior adviser replies within one business day.',s.note)}</aside>
</div></section>
${ctaBand(`Questions about ${s.title.toLowerCase()}?`,'Write to us, or use the toolkit to run a few numbers first.')}`;
}

function legal(title,crumb,sections){
  return `<section class="phead"><div class="wrap"><div class="phead-panel"><div class="phead-copy"><nav class="crumbs"><a href="#home">Home</a><span>/</span><span>${crumb}</span></nav><span class="eyebrow inv">Legal</span><h1>${title}</h1><span class="updated">Effective & last updated · ${SITE.policyDate}</span></div></div></div></section>
  <section><div class="wrap legal"><aside aria-label="On this page">${sections.map((s,i)=>`<a href="#lg${i}" data-jump="lg${i}">${s[0]}</a>`).join('')}</aside><article>${sections.map((s,i)=>`<h2 id="lg${i}">${i+1}. ${s[0]}</h2>${s[1]}`).join('')}</article></div></section>`;
}

/* ============ ADMIN ============ */
const ADMIN={user:'admin@beyondmatrix.in',pass:'Matrix@2026'};
let adm={view:'dashboard',q:'',svc:'',st:'',range:'30',page:1,open:null};
function authed(){try{return sessionStorage.getItem('bm_admin')==='1'}catch(e){return window._bmAuth===true}}
function setAuth(v){try{v?sessionStorage.setItem('bm_admin','1'):sessionStorage.removeItem('bm_admin')}catch(e){}window._bmAuth=v}
P.admin=()=>authed()?adminShell():`<div class="login"><div class="form-card"><div class="form-head"><h3>Staff sign in</h3><p>Beyondmatrix lead console</p></div>
<form class="bm" id="loginForm" novalidate><div class="alert e" role="alert" hidden></div>
<div class="field"><label for="lu">Email</label><input id="lu" type="email" autocomplete="username" value="${ADMIN.user}"></div>
<div class="field"><label for="lp">Password</label><input id="lp" type="password" autocomplete="current-password"></div>
<button class="btn btn-primary" style="justify-content:center">Sign in</button>
<p class="form-note">${ic('alert')} Prototype credentials: ${ADMIN.user} / ${ADMIN.pass}. Production uses hashed passwords and server sessions.</p></form></div></div>`;
const svcName=s=>s==='contact'?'General contact':SVC[s]?.title||s;
function filtered(){
  const L=leads();const q=adm.q.toLowerCase();const cut=adm.range==='all'?0:Date.now()-(+adm.range)*864e5;
  return L.filter(l=>(!adm.svc||l.service===adm.svc)&&(!adm.st||l.status===adm.st)&&new Date(l.createdAt)>=cut&&(!q||`${l.firstName} ${l.lastName} ${l.email} ${l.ref} ${l.company}`.toLowerCase().includes(q)));
}
function adminShell(){
  const L=leads();const hasDemo=L.some(l=>l.demo);
  return `<div class="adm"><aside class="adm-side"><span class="logo adm-logo"><img class="logo-img" src="${LOGO_SRC.white}" alt="Beyond Matrix Capital" width="886" height="332"><small>Staff console</small></span>
  <button data-av="dashboard" class="${adm.view==='dashboard'?'on':''}">${ic('grid')} Dashboard</button>
  <button data-av="leads" class="${adm.view==='leads'?'on':''}">${ic('inbox')} Leads <span style="margin-left:auto;font-size:.75rem;background:rgba(255,255,255,.12);padding:1px 8px;border-radius:999px">${L.filter(l=>l.status==='NEW').length}</span></button>
  <button data-av="content" class="${adm.view==='content'?'on':''}">${ic('edit')} Site content</button>
  <button id="logout">${ic('logout')} Sign out</button></aside>
  <div class="adm-main">${hasDemo?`<div class="alert" style="background:var(--warn-bg);color:var(--warn)">${ic('alert')}<span>The console is pre-loaded with <b>demo inquiries</b> (marked DEMO) so you can see the analytics working. Real submissions from this browser appear alongside them. <button class="copy" id="clearDemo" style="color:inherit;border-color:currentColor">Remove demo data</button></span></div>`:''}
  ${adm.view==='dashboard'?dashView():adm.view==='leads'?leadsView():contentView()}</div></div>
  ${adm.open?drawer(L.find(l=>l.id===adm.open)):''}`;
}
function dashView(){
  const L=leads();const now=Date.now();
  const in30=L.filter(l=>now-new Date(l.createdAt)<30*864e5);const prev=L.filter(l=>{const a=now-new Date(l.createdAt);return a>=30*864e5&&a<60*864e5});
  const cnt=s=>L.filter(l=>l.status===s).length;
  const conv=L.length?Math.round(cnt('CONVERTED')/L.length*100):0;
  const contacted=L.filter(l=>l.status!=='NEW').length;
  // daily series 14d
  const days=[...Array(14)].map((_,i)=>{const d=new Date(now-(13-i)*864e5);const k=d.toISOString().slice(0,10);return{k,lab:d.toLocaleDateString('en-IN',{day:'numeric',month:'short'}),v:L.filter(l=>l.createdAt.slice(0,10)===k).length}});
  const max=Math.max(4,...days.map(d=>d.v));const W=600,H=220,pl=28,pb=26,pt=10,bw=(W-pl)/14;
  const ticks=[0,Math.ceil(max/2),max];
  const y=v=>pt+(H-pt-pb)*(1-v/max);
  const svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Daily inquiries, last 14 days">${ticks.map(t=>`<line class="gl" x1="${pl}" x2="${W}" y1="${y(t)}" y2="${y(t)}"/><text x="${pl-8}" y="${y(t)+4}" text-anchor="end">${t}</text>`).join('')}${days.map((d,i)=>{const x=pl+i*bw+bw*.2,w=bw*.6,h=H-pb-y(d.v);return `<rect class="hit" x="${pl+i*bw}" y="${pt}" width="${bw}" height="${H-pt-pb}" fill="transparent" data-tip="${d.lab}: ${d.v} inquir${d.v===1?'y':'ies'}"/>${d.v?`<path class="bar" d="M${x} ${H-pb}V${y(d.v)+4}q0-4 4-4h${w-8}q4 0 4 4V${H-pb}z" pointer-events="none"/>`:''}${i%2===0||i===13?`<text x="${pl+i*bw+bw/2}" y="${H-8}" text-anchor="middle">${d.lab}</text>`:''}`}).join('')}<line x1="${pl}" x2="${W}" y1="${H-pb}" y2="${H-pb}" stroke="var(--line-strong)"/></svg>`;
  const bySvc=[...SERVICES.map(s=>s.slug),'contact'].map(s=>({s,v:L.filter(l=>l.service===s).length})).sort((a,b)=>b.v-a.v);const mx=Math.max(1,...bySvc.map(b=>b.v));
  const funnel=[['Received',L.length],['Contacted',L.filter(l=>['CONTACTED','QUALIFIED','IN_PROGRESS','CONVERTED'].includes(l.status)).length],['Qualified',L.filter(l=>['QUALIFIED','IN_PROGRESS','CONVERTED'].includes(l.status)).length],['In progress',L.filter(l=>['IN_PROGRESS','CONVERTED'].includes(l.status)).length],['Converted',cnt('CONVERTED')]];
  const delta=prev.length?Math.round((in30.length-prev.length)/prev.length*100):null;
  return `<div class="adm-top"><div><h2>Dashboard</h2><span class="muted" style="font-size:.88rem">Computed live from ${L.length} stored inquiries</span></div><button class="btn btn-primary btn-sm" data-av="leads">View all leads ${ic('arrow')}</button></div>
  <div class="kpis">
    <div class="kpi"><span>Total inquiries</span><b>${L.length}</b><small>${in30.length} in last 30 days${delta!==null?` · ${delta>=0?'+':''}${delta}% vs prior`:''}</small></div>
    <div class="kpi"><span>New, awaiting contact</span><b style="color:var(--cobalt)">${cnt('NEW')}</b><small>Target: first reply within 1 business day</small></div>
    <div class="kpi"><span>Contacted or beyond</span><b>${contacted}</b><small>${L.length?Math.round(contacted/L.length*100):0}% of all inquiries</small></div>
    <div class="kpi"><span>Qualified pipeline</span><b>${cnt('QUALIFIED')+cnt('IN_PROGRESS')}</b><small>${cnt('IN_PROGRESS')} in progress</small></div>
    <div class="kpi"><span>Converted</span><b style="color:var(--good)">${cnt('CONVERTED')}</b><small>${conv}% conversion rate</small></div>
  </div>
  <div class="chart-grid">
    <div class="panel-c"><div><h3>Inquiries per day</h3><span class="sub">Last 14 days · hover a bar for the count</span></div><div class="chart" id="dayChart">${svg}<div class="tip" hidden></div></div></div>
    <div class="panel-c"><div><h3>Pipeline funnel</h3><span class="sub">All inquiries by furthest stage reached</span></div><div class="funnel">${funnel.map(([l,v],i)=>`<div class="f"><span>${l}</span><div class="t"><i style="width:${L.length?v/L.length*100:0}%;--o:${100-i*14}%"></i></div><b>${v} <span class="muted" style="font-weight:400">${L.length?Math.round(v/L.length*100):0}%</span></b></div>`).join('')}</div></div>
  </div>
  <div class="chart-grid" style="grid-template-columns:1fr 1.2fr">
    <div class="panel-c"><div><h3>Inquiries by service</h3><span class="sub">All time</span></div><div class="hbars">${bySvc.map(b=>`<div class="hbar"><span>${svcName(b.s)}</span><div class="t"><i style="width:${b.v/mx*100}%"></i></div><b>${b.v}</b></div>`).join('')}</div></div>
    <div class="panel-c"><div><h3>Recent submissions</h3><span class="sub">Latest 6</span></div><div class="tbl-wrap" style="border:0"><table class="leads" style="min-width:480px"><tbody>${L.slice(0,6).map(l=>`<tr data-open="${l.id}"><td><b>${esc(l.firstName)} ${esc(l.lastName)}</b>${l.demo?'<span class="demo-tag">DEMO</span>':''}<br><span class="muted" style="font-size:.8rem">${svcName(l.service)}</span></td><td><span class="st st-${l.status}">${slabel(l.status)}</span></td><td class="muted" style="font-size:.8rem">${ago(l.createdAt)}</td></tr>`).join('')}</tbody></table></div></div>
  </div>`;
}
function ago(iso){const m=Math.round((Date.now()-new Date(iso))/6e4);if(m<60)return m<=1?'just now':m+' min ago';const h=Math.round(m/60);if(h<24)return h+' h ago';return Math.round(h/24)+' d ago'}
function leadsView(){
  const F=filtered();const per=10;const pages=Math.max(1,Math.ceil(F.length/per));adm.page=Math.min(adm.page,pages);const rows=F.slice((adm.page-1)*per,adm.page*per);
  return `<div class="adm-top"><div><h2>Leads</h2><span class="muted" style="font-size:.88rem">${F.length} matching inquiries</span></div><button class="btn btn-ghost btn-sm" id="copyCsv">${ic('doc')} Copy as CSV</button></div>
  <div class="filters"><label class="hp" for="aq">Search</label><input type="search" id="aq" placeholder="Search name, email, company or reference" value="${esc(adm.q)}">
  <label class="hp" for="asvc">Service</label><select id="asvc"><option value="">All services</option>${[...SERVICES.map(s=>s.slug),'contact'].map(s=>`<option value="${s}" ${adm.svc===s?'selected':''}>${svcName(s)}</option>`).join('')}</select>
  <label class="hp" for="ast">Status</label><select id="ast"><option value="">All statuses</option>${STATUSES.map(s=>`<option value="${s}" ${adm.st===s?'selected':''}>${slabel(s)}</option>`).join('')}</select>
  <label class="hp" for="arange">Date range</label><select id="arange">${[['7','Last 7 days'],['30','Last 30 days'],['90','Last 90 days'],['all','All time']].map(([v,l])=>`<option value="${v}" ${adm.range===v?'selected':''}>${l}</option>`).join('')}</select></div>
  <div class="tbl-wrap"><table class="leads"><thead><tr><th>Reference</th><th>Contact</th><th>Service</th><th>Status</th><th>Assigned</th><th>Received</th></tr></thead><tbody>
  ${rows.length?rows.map(l=>`<tr data-open="${l.id}" tabindex="0"><td class="mono">${l.ref}${l.demo?'<span class="demo-tag">DEMO</span>':''}</td><td><b>${esc(l.firstName)} ${esc(l.lastName)}</b><br><span class="muted" style="font-size:.8rem">${esc(l.email)}</span></td><td>${svcName(l.service)}</td><td><span class="st st-${l.status}">${slabel(l.status)}</span></td><td>${esc(l.assignedTo)||'<span class="muted">Unassigned</span>'}</td><td class="num">${new Date(l.createdAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td></tr>`).join(''):`<tr><td colspan="6"><div class="empty">No inquiries match these filters. Clear the search or widen the date range.</div></td></tr>`}
  </tbody></table></div>
  <div class="pager"><span>Page ${adm.page} of ${pages}</span><span style="display:flex;gap:8px"><button class="btn btn-ghost btn-sm" id="pPrev" ${adm.page<=1?'disabled':''}>Previous</button><button class="btn btn-ghost btn-sm" id="pNext" ${adm.page>=pages?'disabled':''}>Next</button></span></div>`;
}
function drawer(l){
  if(!l)return'';
  const fd=Object.entries(l.formData||{});
  return `<div class="drawer-bg" id="dbg"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="Lead details">
  <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start"><div><span class="mono muted">${l.ref}</span><h2 style="font-size:1.4rem;margin-top:4px">${esc(l.firstName)} ${esc(l.lastName)}</h2><span class="muted">${svcName(l.service)}</span></div><button class="icon-btn" id="dclose" aria-label="Close">${ic('x')}</button></div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><span class="st st-${l.status}">${slabel(l.status)}</span>${l.demo?'<span class="demo-tag">DEMO RECORD</span>':''}</div>
  <dl class="kv"><dt>Email</dt><dd>${esc(l.email)}</dd><dt>Phone</dt><dd>${esc(l.phone)||'—'}</dd><dt>Company</dt><dd>${esc(l.company)||'—'}</dd>${fd.map(([k,v])=>`<dt>${esc(k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase()))}</dt><dd>${esc(v)}</dd>`).join('')}<dt>Message</dt><dd>${esc(l.message)||'—'}</dd><dt>Source page</dt><dd class="mono">${esc(l.source)}</dd><dt>Received</dt><dd>${new Date(l.createdAt).toLocaleString('en-IN')}</dd><dt>Consent</dt><dd>${l.consent?'Acknowledged '+new Date(l.consent.at).toLocaleString('en-IN'):(l.demo?'Demo':'—')}</dd></dl>
  <div class="panel-c"><h3>Update</h3>
    <div class="field"><label for="dst">Move to status</label><select id="dst"><option value="">Choose next stage…</option>${(TRANSITIONS[l.status]||[]).map(s=>`<option value="${s}">${slabel(s)}</option>`).join('')}</select><span class="sub">Only valid next stages from ${slabel(l.status)} are listed.</span></div>
    <div class="field"><label for="das">Assigned to</label><select id="das">${['','R. Jaju','Advisory desk','Debt team','IPO team'].map(a=>`<option value="${a}" ${l.assignedTo===a?'selected':''}>${a||'Unassigned'}</option>`).join('')}</select></div>
    <div class="field"><label for="dnote">Internal note</label><textarea id="dnote" maxlength="600" placeholder="Visible to staff only"></textarea></div>
    <button class="btn btn-primary btn-sm" id="dsave" style="justify-self:start">Save changes</button></div>
  ${l.notes?.length?`<div><h3 style="font-size:1rem;margin-bottom:8px">Internal notes</h3><ul class="timeline">${l.notes.map(n=>`<li><time>${new Date(n.at).toLocaleString('en-IN')} · ${esc(n.by)}</time>${esc(n.t)}</li>`).join('')}</ul></div>`:''}
  <div><h3 style="font-size:1rem;margin-bottom:8px">Activity</h3><ul class="timeline">${[...l.activity].reverse().map(a=>`<li><time>${new Date(a.at).toLocaleString('en-IN')} · ${esc(a.by)}</time>${esc(a.a)}</li>`).join('')}</ul></div></aside>`;
}
function contentView(){
  return `<div class="adm-top"><div><h2>Site content</h2><span class="muted" style="font-size:.88rem">Edit the approved figures and contact details shown across the site</span></div></div>
  <div class="panel-c"><h3>Headline statistics</h3><span class="sub">Shown on Home, About and Services. Publish only figures the business has approved and documented.</span>
  <div class="grid g2" style="gap:12px">${SITE.stats.map((s,i)=>`<div class="frow" style="grid-template-columns:110px 1fr"><div class="field"><label for="sv${i}">Value</label><input id="sv${i}" value="${esc(s.v+s.s)}"></div><div class="field"><label for="sl${i}">Label</label><input id="sl${i}" value="${esc(s.l)}"></div></div>`).join('')}</div></div>
  <div class="panel-c"><h3>Contact details</h3><div class="field"><label for="ce">Email</label><input id="ce" value="${esc(SITE.email)}"></div><div class="field"><label for="ca">Office address</label><textarea id="ca">${esc(SITE.address)}</textarea></div><div class="field"><label for="ch">Business hours</label><input id="ch" value="${esc(SITE.hours)}"></div>
  <button class="btn btn-primary btn-sm" id="saveContent" style="justify-self:start">Publish changes</button></div>`;
}

/* ============ ROUTER ============ */
const app=document.getElementById('app');
const ROUTES=['home','about-us','services','contact-us','privacy-policy','terms-and-conditions','toolkit','admin',...SERVICES.map(s=>s.slug)];
const TITLES={home:'Corporate Finance & Investment Banking Advisory','about-us':'About Us',services:'Services','contact-us':'Contact Us','privacy-policy':'Privacy Policy','terms-and-conditions':'Terms & Conditions',toolkit:'Finance Toolkit',admin:'Staff Console'};
function route(){return (location.hash||'#home').slice(1).split('/')[0]||'home'}
function render(keepScroll){
  const r=route();const known=ROUTES.includes(r);
  let body;try{body=!known?P.notfound():SVC[r]?servicePage(SVC[r]):P[r]()}catch(e){console.error(e);body=`<section class="nf"><div class="wrap" style="display:grid;gap:16px;justify-items:center"><span class="big" style="font-size:4rem">Oops</span><h2>Something went wrong loading this page</h2><p class="lead">Reload the page, or go back home. If it keeps happening, email ${SITE.email}.</p><a class="btn btn-primary" href="#home">Go to home</a></div></section>`}
  app.innerHTML=r==='admin'?header(r)+body:header(r)+'<main id="main">'+body+'</main>'+footer();
  document.title=`${known?(SVC[r]?.title||TITLES[r]):'Page not found'} | Beyondmatrix Capital`;
  if(!keepScroll)window.scrollTo(0,0);
  bind(r);
}
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h.startsWith('lg'))return;render()});

/* ============ BEHAVIOUR ============ */
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;t.setAttribute('role','status');document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function copyText(txt,btn){const done=()=>{toast('Copied to clipboard')};try{navigator.clipboard.writeText(txt).then(done,()=>fallback())}catch(e){fallback()}function fallback(){const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){toast('Select the text to copy it')}ta.remove()}}
function applyTheme(){const t=store.get('bm_theme',null);if(t)document.documentElement.setAttribute('data-theme',t)}
try{localStorage.removeItem('bm_theme')}catch(e){}

function bind(r){
  // header
  const dd=document.getElementById('dd'),ddb=document.getElementById('ddb'),ddm=document.getElementById('ddm');
  if(ddb){const open=v=>{ddm.hidden=!v;dd.classList.toggle('open',v);ddb.setAttribute('aria-expanded',v)};
    ddb.onclick=e=>{e.stopPropagation();open(ddm.hidden)};
    dd.onmouseenter=()=>matchMedia('(hover:hover)').matches&&open(true);dd.onmouseleave=()=>matchMedia('(hover:hover)').matches&&open(false);
    document.addEventListener('click',()=>open(false),{once:true});
    dd.addEventListener('keydown',e=>{if(e.key==='Escape'){open(false);ddb.focus()}});}
  const mnav=document.getElementById('mnav'),bg=document.getElementById('burger');
  bg.onclick=()=>{mnav.hidden=false;bg.setAttribute('aria-expanded','true');document.getElementById('mclose').focus()};
  document.getElementById('mclose').onclick=()=>{mnav.hidden=true;bg.setAttribute('aria-expanded','false');bg.focus()};
  mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mnav.hidden=true));
  document.getElementById('themeBtn').onclick=()=>{const cur=document.documentElement.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const n=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);store.set('bm_theme',n)};
  // service-page CTA scrolls to the form
  if(SVC[r])document.querySelectorAll('[data-cta]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('consult').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>document.querySelector('#consult input')?.focus({preventScroll:true}),500)});
  // count-up stats
  document.querySelectorAll('[data-count]').forEach(el=>{const to=+el.dataset.count,pre=el.dataset.pre,suf=el.dataset.suf;if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;let s=null;const step=t=>{s??=t;const p=Math.min(1,(t-s)/1200);el.textContent=pre+Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});
  // accordion
  document.querySelectorAll('.acc button').forEach(b=>b.onclick=()=>{const p=document.getElementById(b.getAttribute('aria-controls'));const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);p.hidden=o});
  // legal jumps
  document.querySelectorAll('[data-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.jump).scrollIntoView({behavior:'smooth'})});
  // copy buttons
  document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>copyText(b.dataset.copy,b));
  // newsletter
  const nf=document.getElementById('newsForm');if(nf)nf.onsubmit=e=>{e.preventDefault();const v=document.getElementById('nEmail').value.trim();const m=document.getElementById('newsMsg');if(!RX.email.test(v)){m.textContent='Enter a valid email address.';m.style.color='#F3A6A6';return}const subs=store.get('bm_subs',[]);if(!subs.includes(v))subs.push(v);store.set('bm_subs',subs);m.textContent='Subscribed. Watch your inbox for the next quarterly note.';m.style.color='#9FE3B9';nf.reset()};
  // forms
  document.querySelectorAll('form.bm[data-slug]').forEach(bindForm);
  if(r==='toolkit')bindTools();
  if(r==='admin')bindAdmin();
  cookieNotice();
}

function bindForm(form){
  const slug=form.dataset.slug;const fields=slug==='contact'?CONTACT_FIELDS:SVC[slug].fields;
  let key=slug+'-'+Date.now()+'-'+Math.random().toString(36).slice(2);
  const fid='f-'+slug;const alertBox=form.querySelector('.alert');
  const draftKey='bm_draft_'+slug;const draft=store.get(draftKey,null);
  if(draft)for(const[k,v]of Object.entries(draft)){const els=form.querySelectorAll(`[name="${k}"]`);els.forEach(el=>{if(el.type==='radio')el.checked=el.value===v;else if(el.type!=='checkbox')el.value=v})}
  form.addEventListener('input',()=>{const d={};new FormData(form).forEach((v,k)=>{if(k!=='_hp'&&k!=='consent')d[k]=v});store.set(draftKey,d)});
  const showErr=(errs)=>{
    form.querySelectorAll('.field').forEach(f=>f.classList.remove('err'));form.querySelectorAll('.ferr').forEach(e=>e.textContent='');
    for(const[k,m]of Object.entries(errs)){const e=document.getElementById(`${fid}-${k}-e`);if(e){e.textContent=m;e.closest('.field')?.classList.add('err')}}
    const first=Object.keys(errs)[0];if(first){const el=form.querySelector(`[name="${first}"]`);el?.focus()}
  };
  form.querySelectorAll('input,select,textarea').forEach(el=>el.addEventListener('blur',()=>{const f=fields.find(x=>x.n===el.name);if(!f)return;const v=f.t==='radio'?(form.querySelector(`[name="${f.n}"]:checked`)?.value||''):el.value;const e=validate([f],{[f.n]:v});const box=document.getElementById(`${fid}-${f.n}-e`);if(!box)return;if(v||e[f.n]===undefined){box.textContent=e[f.n]||'';box.closest('.field')?.classList.toggle('err',!!e[f.n])}}));
  form.onsubmit=async ev=>{
    ev.preventDefault();alertBox.hidden=true;
    const data={};new FormData(form).forEach((v,k)=>data[k]=v);
    const errs=validate(fields,data);
    if(!form.querySelector('[name="consent"]').checked)errs.consent='Please confirm you have read the Privacy Policy.';
    showErr(errs);if(Object.keys(errs).length)return;
    const btn=form.querySelector('button[type=submit]');btn.disabled=true;const orig=btn.innerHTML;btn.innerHTML='<span class="spinner"></span> Submitting…';
    try{
      const res=await apiSubmit(slug,fields,data,key);
      try{localStorage.removeItem(draftKey)}catch(e){}
      const wrap=form.parentElement;const name=(data.firstName||data.fullName||'').split(' ')[0];
      wrap.innerHTML=`<div class="success" role="status"><span class="tick">${ic('check')}</span><h3>Thank you${name?', '+esc(name):''}. Your inquiry is in.</h3><p class="muted">Keep this reference for any follow-up. A senior adviser will reply to <b>${esc(data.email)}</b> within one business day.</p><span class="refbox">${res.ref}</span><p class="form-note">${ic('lock')} Receiving your inquiry does not mean any loan, investment or transaction is approved.</p><button class="btn btn-ghost btn-sm" id="again-${slug}">Send another inquiry</button></div>`;
      document.getElementById('again-'+slug).onclick=()=>render(true);
    }catch(err){
      btn.disabled=false;btn.innerHTML=orig;
      if(err.status===422){showErr(err.errors);alertBox.innerHTML=`${ic('alert')}<span>Please correct the highlighted fields.</span>`}
      else alertBox.innerHTML=`${ic('alert')}<span>${esc(err.message||'We couldn\'t submit your inquiry. Your details are still here; try again in a moment.')}</span>`;
      alertBox.hidden=false;
    }
  };
}

const inr=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const inrShort=n=>n>=1e7?'₹'+(n/1e7).toFixed(n>=1e9?0:2).replace(/\.00$/,'')+' Cr':'₹'+(n/1e5).toFixed(1).replace(/\.0$/,'')+' L';
function bindTools(){
  const P_=document.getElementById('eP'),R_=document.getElementById('eR'),N_=document.getElementById('eN');
  const calc=()=>{const p=+P_.value,r=+R_.value/1200,n=+N_.value;const emi=p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);const tot=emi*n;
    ePv.textContent=inrShort(p);eRv.textContent=(+R_.value).toFixed(2)+'%';eNv.textContent=n+' months ('+(n/12).toFixed(n%12?1:0)+' yrs)';
    eEmi.textContent=inr(emi);eInt.textContent=inrShort(tot-p);eTot.textContent=inrShort(tot);eBar.style.width=(p/tot*100)+'%';eShare.textContent=`Interest is ${Math.round((tot-p)/tot*100)}% of total`};
  [P_,R_,N_].forEach(e=>e.oninput=calc);calc();
  const Q=[['Audited financials for the last 3 years?',['Yes','Partly','No'],[20,8,0]],['Net worth positive and profitable track record?',['Yes','Breakeven','No'],[20,8,0]],['Independent directors & board committees in place?',['Yes','Planned','No'],[15,6,0]],['Statutory filings (GST, TDS, ROC) up to date?',['Yes','Mostly','No'],[15,6,0]],['Clean promoter and company litigation history?',['Yes','Minor','Material'],[15,6,0]],['Clear use of IPO proceeds and growth plan?',['Yes','Draft','No'],[15,6,0]]];
  const box=document.getElementById('ipoQs');box.innerHTML=Q.map((q,i)=>`<div class="quiz-q"><span class="lbl" style="font-size:.9rem;font-weight:600" id="iq${i}">${q[0]}</span><div class="seg" role="radiogroup" aria-labelledby="iq${i}">${q[1].map((o,j)=>`<label><input type="radio" name="iq${i}" value="${j}"> ${o}</label>`).join('')}</div></div>`).join('');
  const score=()=>{let s=0,a=0;Q.forEach((q,i)=>{const v=box.querySelector(`[name=iq${i}]:checked`);if(v){a++;s+=q[2][+v.value]}});ipoScore.textContent=s+' / 100';ipoBar.style.width=s+'%';
    ipoRes.innerHTML=a<Q.length?`<span class="muted">${Q.length-a} question${Q.length-a>1?'s':''} left.</span>`:s>=80?`<b>Strong foundation.</b><span>You may be ready to begin formal IPO preparation. An adviser can map platform choice (SME or Mainboard) and a realistic timeline.</span><a class="btn btn-primary btn-sm" style="justify-self:start" href="#ipo-advisory">Request IPO consultation</a>`:s>=50?`<b>Good progress, some gaps.</b><span>A readiness assessment would identify what to close first, typically governance and restated financials.</span><a class="btn btn-primary btn-sm" style="justify-self:start" href="#ipo-advisory">Book a readiness review</a>`:`<b>Early stage.</b><span>Start with financial discipline and governance. Our Virtual CFO team often prepares companies 12–24 months ahead of an IPO.</span><a class="btn btn-primary btn-sm" style="justify-self:start" href="#virtual-cfo-services">Explore Virtual CFO</a>`};
  box.addEventListener('change',score);score();
  const M={grow:'fund-raising',list:'ipo-advisory',borrow:'debt-advisory',cfo:'virtual-cfo-services',deal:'mergers-acquisitions',plan:'corporate-finance-advisory'};
  document.getElementById('goalSeg').addEventListener('change',e=>{const s=SVC[M[e.target.value]];finderRes.innerHTML=`<span class="eyebrow">Recommended</span><b style="font-family:var(--f-display);font-size:1.2rem">${s.title}</b><span>${s.short}</span><div class="benefit-row">${s.features.slice(0,3).map(f=>`<span class="pill" style="background:var(--surface)">${ic('check')} ${f[0]}</span>`).join('')}</div><a class="btn btn-primary btn-sm" style="justify-self:start" href="#${s.slug}">Go to ${s.title} ${ic('arrow')}</a>`});
}

function bindAdmin(){
  const lf=document.getElementById('loginForm');
  if(lf){let tries=store.get('bm_login_tries',[]).filter(t=>Date.now()-t<5*60e3);lf.onsubmit=e=>{e.preventDefault();const a=lf.querySelector('.alert');if(tries.length>=5){a.innerHTML=`${ic('alert')}<span>Too many attempts. Wait 5 minutes and try again.</span>`;a.hidden=false;return}
    if(lu.value.trim().toLowerCase()===ADMIN.user&&lp.value===ADMIN.pass){setAuth(true);store.set('bm_login_tries',[]);render()}else{tries.push(Date.now());store.set('bm_login_tries',tries);a.innerHTML=`${ic('alert')}<span>Email or password is incorrect.</span>`;a.hidden=false}};return}
  const rr=()=>render(true);
  document.querySelectorAll('[data-av]').forEach(b=>b.onclick=()=>{adm.view=b.dataset.av;adm.open=null;rr()});
  document.getElementById('logout').onclick=()=>{setAuth(false);adm.open=null;render()};
  const cd=document.getElementById('clearDemo');if(cd)cd.onclick=()=>{memLeads=leads().filter(l=>!l.demo);saveLeads();adm.open=null;toast('Demo data removed');rr()};
  document.querySelectorAll('[data-open]').forEach(t=>{t.onclick=()=>{adm.open=t.dataset.open;rr()};t.onkeydown=e=>{if(e.key==='Enter'){adm.open=t.dataset.open;rr()}}});
  // chart tooltip
  const ch=document.getElementById('dayChart');if(ch){const tip=ch.querySelector('.tip');ch.querySelectorAll('[data-tip]').forEach(h=>{h.onmouseenter=()=>{const r=h.getBoundingClientRect(),c=ch.getBoundingClientRect();tip.textContent=h.dataset.tip;tip.style.left=(r.left-c.left+r.width/2)+'px';tip.style.top=(r.top-c.top+r.height*0.35)+'px';tip.hidden=false};h.onmouseleave=()=>tip.hidden=true})}
  // filters
  const aq=document.getElementById('aq');
  if(aq){let t;aq.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{adm.q=aq.value;adm.page=1;rr();const n=document.getElementById('aq');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
    asvc.onchange=()=>{adm.svc=asvc.value;adm.page=1;rr()};ast.onchange=()=>{adm.st=ast.value;adm.page=1;rr()};arange.onchange=()=>{adm.range=arange.value;adm.page=1;rr()};
    pPrev.onclick=()=>{adm.page--;rr()};pNext.onclick=()=>{adm.page++;rr()};
    copyCsv.onclick=()=>{const F=filtered();const q=v=>`"${String(v??'').replace(/"/g,'""')}"`;const csv=['Reference,First name,Last name,Email,Phone,Company,Service,Status,Assigned,Received',...F.map(l=>[l.ref,l.firstName,l.lastName,l.email,l.phone,l.company,svcName(l.service),l.status,l.assignedTo,l.createdAt].map(q).join(','))].join('\n');copyText(csv)}}
  // drawer
  if(adm.open){const close=()=>{adm.open=null;rr()};dclose.onclick=close;dbg.onclick=close;document.onkeydown=e=>{if(e.key==='Escape'&&adm.open)close()};dclose.focus();
    dsave.onclick=()=>{const l=leads().find(x=>x.id===adm.open);const now=new Date().toISOString();let changed=false;
      if(dst.value&&TRANSITIONS[l.status].includes(dst.value)){l.activity.push({at:now,by:ADMIN.user,a:`Status ${slabel(l.status)} → ${slabel(dst.value)}`});l.status=dst.value;changed=true}
      if(das.value!==l.assignedTo){l.activity.push({at:now,by:ADMIN.user,a:`Assigned to ${das.value||'nobody'}`});l.assignedTo=das.value;changed=true}
      const n=dnote.value.trim();if(n){l.notes=l.notes||[];l.notes.push({at:now,by:ADMIN.user,t:n});l.activity.push({at:now,by:ADMIN.user,a:'Internal note added'});changed=true}
      if(!changed){toast('Nothing to save');return}l.updatedAt=now;saveLeads();toast('Lead updated');rr()}}
  // content
  const sc=document.getElementById('saveContent');if(sc)sc.onclick=()=>{SITE.stats.forEach((s,i)=>{const raw=document.getElementById('sv'+i).value.trim();const m=raw.match(/^(₹?\s?\d+)(.*)$/);if(m){s.v=m[1];s.s=m[2]}s.l=document.getElementById('sl'+i).value.trim()||s.l});SITE.email=ce.value.trim()||SITE.email;SITE.address=ca.value.trim()||SITE.address;SITE.hours=ch.value.trim()||SITE.hours;store.set('bm_site',{stats:SITE.stats,email:SITE.email,address:SITE.address,hours:SITE.hours});toast('Published. Changes now show across the site.');rr()};
}

function cookieNotice(){
  if(document.querySelector('.cookie')||store.get('bm_cookie',null))return;
  const c=document.createElement('div');c.className='cookie';c.setAttribute('role','region');c.setAttribute('aria-label','Cookie notice');
  c.innerHTML=`<b style="color:var(--fg);font-family:var(--f-display)">Your privacy</b><span>We use essential browser storage only, to remember your preferences and any unsent form draft. No advertising or tracking cookies. <a href="#privacy-policy">Privacy Policy</a></span><div class="row"><button class="btn btn-primary btn-sm" id="ckOk">Accept essential</button><button class="btn btn-ghost btn-sm" id="ckNo">Decline optional</button></div>`;
  document.body.appendChild(c);
  const done=v=>{store.set('bm_cookie',{choice:v,at:new Date().toISOString()});c.remove()};
  ckOk.onclick=()=>done('essential');ckNo.onclick=()=>done('declined-optional');
}

/* restore admin-edited content */
(()=>{const s=store.get('bm_site',null);if(s){Object.assign(SITE,{email:s.email,address:s.address,hours:s.hours});if(Array.isArray(s.stats))SITE.stats=s.stats}})();


/* ============ INTERACTIVE + ANALYTICS LAYER ============ */
const SECTORS=['Manufacturing','Pharma & Healthcare','Infrastructure','Technology','FMCG','Logistics','Renewable Energy','Financial Services','Real Estate','Chemicals','Auto Components','Agri & Food'];
const sectorStrip=()=>`<div class="marquee" aria-label="Sectors we advise"><div class="mq-track">${[...SECTORS,...SECTORS].map(s=>`<span>${s}</span>`).join('<i>✦</i>')}</div></div>`;

const studioHTML=()=>`<section class="studio-sec"><div class="wrap">
  ${svcHead('Analytics studio','Model your next move <em>in real time</em>','Two working calculators our advisers use in first conversations. Move the sliders and the charts update instantly. Figures are illustrative and stay on your device.')}
  <div class="studio">
    <div class="st-tabs" role="tablist" aria-label="Calculators">
      <button role="tab" id="tab-wacc" aria-selected="true" aria-controls="pane-wacc">${ic('layers')} Cost of capital</button>
      <button role="tab" id="tab-grow" aria-selected="false" aria-controls="pane-grow">${ic('trend')} Growth & valuation</button>
    </div>
    <div class="st-pane" id="pane-wacc" role="tabpanel" aria-labelledby="tab-wacc">
      <div class="st-controls">
        ${rng('wEq','Equity share of funding','%',10,90,5,60)}
        ${rng('wKe','Cost of equity (investor return)','%',10,30,0.5,18)}
        ${rng('wKd','Interest rate on debt','%',7,18,0.25,10.5)}
        ${rng('wTax','Effective tax rate','%',15,35,0.5,25.2)}
      </div>
      <div class="st-out">
        <div class="kpi-row"><div class="kpi2 accent"><span>Weighted cost of capital</span><b id="wWacc">—</b></div><div class="kpi2"><span>After-tax cost of debt</span><b id="wKdat">—</b></div><div class="kpi2"><span>Annual cost on ₹100 Cr</span><b id="wAnn">—</b></div></div>
        <div class="chart-card"><div class="cc-head"><b>Cost by source</b><small>% per year</small></div><div class="bars3" id="wBars"></div></div>
        <div class="chart-card"><div class="cc-head"><b>Funding mix</b><small>share of ₹100</small></div><div class="mixbar" id="wMix"></div><p class="insight" id="wInsight"></p></div>
      </div>
    </div>
    <div class="st-pane" id="pane-grow" role="tabpanel" aria-labelledby="tab-grow" hidden>
      <div class="st-controls">
        ${rng('gRev','Current annual revenue','₹ Cr',5,500,5,60)}
        ${rng('gCagr','Expected revenue growth (CAGR)','%',5,50,1,22)}
        ${rng('gMar','EBITDA margin','%',5,40,1,16)}
        ${rng('gMul','EV / EBITDA multiple','x',4,30,0.5,12)}
      </div>
      <div class="st-out">
        <div class="kpi-row"><div class="kpi2 accent"><span>Implied value in year 5</span><b id="gEv">—</b></div><div class="kpi2"><span>Year-5 revenue</span><b id="gR5">—</b></div><div class="kpi2"><span>Value created vs today</span><b id="gUp">—</b></div></div>
        <div class="chart-card"><div class="cc-head"><b>5-year projection</b><small>₹ Cr · hover a year</small></div><div class="gchart" id="gChart"></div><div class="legend"><span><i class="lg-a"></i>Revenue</span><span><i class="lg-b"></i>EBITDA</span></div></div>
        <p class="insight" id="gInsight"></p>
      </div>
    </div>
    <p class="disclaim">Indicative models for discussion only, not investment advice. Real valuations depend on sector, governance, market conditions and diligence.</p>
  </div>
</div></section>`;
function rng(id,label,unit,min,max,step,val){return `<div class="range"><div class="top"><label for="${id}">${label}</label><b id="${id}v"></b></div><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}" data-unit="${unit}"></div>`}
const fmtCr=v=>v>=1000?'₹'+(v/1000).toFixed(2)+' K Cr':'₹'+(v>=100?Math.round(v):v.toFixed(1))+' Cr';

function bindStudio(){
  const $=id=>document.getElementById(id);
  if(!$('pane-wacc'))return;
  const tabs=document.querySelectorAll('.st-tabs [role=tab]');
  tabs.forEach(t=>t.onclick=()=>{tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);$(x.getAttribute('aria-controls')).hidden=!on})});
  const lbl=(id)=>{const e=$(id);const u=e.dataset.unit;$(id+'v').textContent=u==='₹ Cr'?'₹'+e.value+' Cr':e.value+(u==='x'?'x':'%')};
  const wacc=()=>{['wEq','wKe','wKd','wTax'].forEach(lbl);
    const E=+wEq.value/100,D=1-E,ke=+wKe.value,kd=+wKd.value,t=+wTax.value/100,kdat=kd*(1-t),w=E*ke+D*kdat;
    $('wWacc').textContent=w.toFixed(2)+'%';$('wKdat').textContent=kdat.toFixed(2)+'%';$('wAnn').textContent='₹'+w.toFixed(2)+' Cr';
    const max=Math.max(ke,kd,w)*1.15;
    $('wBars').innerHTML=[['Equity',ke,'b-eq'],['Debt (pre-tax)',kd,'b-dp'],['Debt (after tax)',kdat,'b-da'],['Blended (WACC)',w,'b-w']].map(([l,v,c])=>`<div class="cbar"><span>${l}</span><div class="t"><i class="${c}" style="width:${v/max*100}%"></i></div><b>${v.toFixed(1)}%</b></div>`).join('');
    $('wMix').innerHTML=`<i class="m-eq" style="width:${E*100}%"><span>Equity ${Math.round(E*100)}%</span></i><i class="m-d" style="width:${D*100}%"><span>Debt ${Math.round(D*100)}%</span></i>`;
    const alt=(E-0.1)*ke+(D+0.1)*kdat;
    $('wInsight').innerHTML=E>0.15?`${ic('spark')}<span>Shifting 10% of funding from equity to debt would move your blended cost to <b>${alt.toFixed(2)}%</b>, ${alt<w?'saving':'adding'} about <b>₹${Math.abs((w-alt)).toFixed(2)} Cr</b> a year on ₹100 Cr, if lenders support the extra leverage.</span>`:`${ic('alert')}<span>Debt is already ${Math.round(D*100)}% of funding. Lenders typically look closely at coverage ratios at this level.</span>`;
  };
  const grow=()=>{['gRev','gCagr','gMar','gMul'].forEach(lbl);
    const r0=+gRev.value,g=+gCagr.value/100,m=+gMar.value/100,mul=+gMul.value;
    const yrs=[0,1,2,3,4,5].map(i=>({y:i===0?'Today':'Y'+i,rev:r0*Math.pow(1+g,i)}));yrs.forEach(d=>d.eb=d.rev*m);
    const ev0=r0*m*mul,ev5=yrs[5].eb*mul;
    $('gEv').textContent=fmtCr(ev5);$('gR5').textContent=fmtCr(yrs[5].rev);$('gUp').textContent=(ev5/ev0).toFixed(1)+'x';
    const W=620,H=260,pl=48,pr=12,pt=14,pb=30,mx=yrs[5].rev*1.1;
    const nice=v=>{const p=Math.pow(10,Math.floor(Math.log10(v)));const n=v/p;return (n<=1?1:n<=2?2:n<=5?5:10)*p};
    const step=nice(mx/4),top=Math.ceil(mx/step)*step;
    const x=i=>pl+(W-pl-pr)*(i/5),y=v=>pt+(H-pt-pb)*(1-v/top);
    let ticks='';for(let v=0;v<=top+1e-9;v+=step)ticks+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end">${v>=1000?(v/1000)+'K':Math.round(v)}</text>`;
    const line=yrs.map((d,i)=>`${i?'L':'M'}${x(i)} ${y(d.rev)}`).join(' ');
    const area=line+` L${x(5)} ${y(0)} L${x(0)} ${y(0)} Z`;
    const bw=26;
    const bars=yrs.map((d,i)=>`<rect class="eb" x="${x(i)-bw/2}" y="${y(d.eb)}" width="${bw}" height="${Math.max(0,y(0)-y(d.eb))}" rx="4"/>`).join('');
    const pts=yrs.map((d,i)=>`<circle class="pt${i===5?' end':''}" cx="${x(i)}" cy="${y(d.rev)}" r="${i===5?6:4}"/>`).join('');
    const hits=yrs.map((d,i)=>`<rect class="hit" x="${x(i)-(W-pl-pr)/10}" y="${pt}" width="${(W-pl-pr)/5}" height="${H-pt-pb}" fill="transparent" data-i="${i}"/>`).join('');
    const labs=yrs.map((d,i)=>`<text x="${x(i)}" y="${H-8}" text-anchor="middle">${d.y}</text>`).join('');
    $('gChart').innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Five-year revenue and EBITDA projection"><defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2340C9" stop-opacity=".28"/><stop offset="1" stop-color="#2340C9" stop-opacity="0"/></linearGradient></defs>${ticks}${bars}<path d="${area}" fill="url(#ga)"/><path d="${line}" class="rl"/><line class="xh" id="gX" x1="0" x2="0" y1="${pt}" y2="${H-pb}" hidden/>${pts}${labs}<text class="endl" x="${x(5)-10}" y="${y(yrs[5].rev)-12}" text-anchor="end">${fmtCr(yrs[5].rev)}</text>${hits}</svg><div class="tip" hidden></div>`;
    const tip=$('gChart').querySelector('.tip'),xh=$('gX');
    $('gChart').querySelectorAll('.hit').forEach(h=>{h.onmouseenter=()=>{const d=yrs[+h.dataset.i];const svg=$('gChart').querySelector('svg').getBoundingClientRect(),c=$('gChart').getBoundingClientRect();const sx=svg.width/W;
      xh.setAttribute('x1',x(+h.dataset.i));xh.setAttribute('x2',x(+h.dataset.i));xh.removeAttribute('hidden');
      tip.innerHTML=`<b>${d.y}</b><br>Revenue ${fmtCr(d.rev)}<br>EBITDA ${fmtCr(d.eb)}<br>Value ${fmtCr(d.eb*mul)}`;tip.style.left=(svg.left-c.left+x(+h.dataset.i)*sx)+'px';tip.style.top=(svg.top-c.top+y(d.rev)*sx)+'px';tip.hidden=false};
      h.onmouseleave=()=>{tip.hidden=true;xh.setAttribute('hidden','')}});
    $('gInsight').innerHTML=`${ic('spark')}<span>At ${Math.round(g*100)}% growth, revenue roughly ${g>=0.15?'doubles in '+(Math.log(2)/Math.log(1+g)).toFixed(1)+' years':'grows '+((Math.pow(1+g,5)-1)*100).toFixed(0)+'% over five years'}. Each extra point of EBITDA margin adds about <b>${fmtCr(yrs[5].rev*0.01*mul)}</b> to year-5 value at a ${mul}x multiple.</span>`;
  };
  ['wEq','wKe','wKd','wTax'].forEach(id=>$(id).addEventListener('input',wacc));
  ['gRev','gCagr','gMar','gMul'].forEach(id=>$(id).addEventListener('input',grow));
  wacc();grow();
}
function bindMotion(){
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  // reveal on scroll (content is visible at rest; this only adds a gentle rise)
  if(!reduce&&'IntersectionObserver' in window){
    const els=document.querySelectorAll('.scard,.vp2,.step,.feat,.value,.tk-card,.res-tile,.chart-card,.mv,.kpi2,.gl-card,.ab3-copy>*');
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('rise');io.unobserve(e.target)}}),{rootMargin:'0px 0px -40px 0px'});
    els.forEach((el,i)=>{el.style.setProperty('--d',(i%6)*60+'ms');io.observe(el)});
  }
  // hero parallax
  const art=document.querySelector('.hero2-art');
  if(art&&!reduce&&matchMedia('(hover:hover)').matches){
    const panel=document.querySelector('.hero2-panel');
    panel.onmousemove=e=>{const r=panel.getBoundingClientRect();const dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
      art.querySelectorAll('[data-depth]').forEach(el=>{const d=+el.dataset.depth;el.style.translate=`${dx*d}px ${dy*d}px`})};
    panel.onmouseleave=()=>art.querySelectorAll('[data-depth]').forEach(el=>el.style.translate='0 0');
  }
  // header shadow on scroll
  const hd=document.querySelector('header.site');
  if(hd){const f=()=>hd.classList.toggle('scrolled',scrollY>8);window.onscroll=f;f()}
}

const GLANCE=[['clock','12','+','Years of advisory experience','Capital markets, credit, valuation and CFO'],['coin','₹500',' Cr+','Capital raised for clients','Across equity, debt and hybrid structures'],['users','100','+','Active client profiles','Promoter-led businesses across sectors'],['grid','6','','Integrated practice areas','One team from first call to closing']];
const glanceHTML=()=>`<section class="glance-sec"><div class="wrap"><div class="glance">${GLANCE.map(([i,v,suf,l,c])=>`<div class="gl-card"><span class="ico-ring">${ic(i)}</span><b class="gl-num" data-count="${v.replace(/[^\d]/g,'')}" data-pre="${v.replace(/\d/g,'')}" data-suf="${suf}">${v}${suf}</b><span class="gl-l">${l}</span><small>${c}</small><i class="gl-bar"></i></div>`).join('')}</div></div></section>`;
const STEPS4=['Assess','Structure','Execute','Support'];
const explorerHTML=()=>`<div class="xpx" id="xp"><div class="xpx-tabs" role="tablist" aria-label="Services">${SERVICES.map((s,i)=>`<button role="tab" id="xpt-${i}" aria-selected="${i===0}" aria-controls="xp-panel" data-i="${i}" tabindex="${i===0?0:-1}"><span class="xpx-ico">${ic(s.icon)}</span><span class="xpx-t">${s.title.replace('Corporate Finance Advisory','Corporate Finance')}</span></button>`).join('')}</div><div class="xpx-panel" id="xp-panel" role="tabpanel" aria-live="polite">${xpPanel(0)}</div></div>`;
function xpPanel(i){const s=SERVICES[i];return `<div class="xpx-media">${photo(SVC_PHOTO[s.slug],'xpx-ph')}<div class="xpx-cap"><span class="xpx-no">${String(i+1).padStart(2,'0')} / ${String(SERVICES.length).padStart(2,'0')}</span><b>${s.tag}</b></div></div>
 <div class="xpx-body"><span class="eyebrow">Practice ${String(i+1).padStart(2,'0')}</span><h3>${s.title}</h3><p class="muted">${s.overview}</p>
 <div class="xpx-sec"><span class="xp-h">What's included</span><ul class="xpx-ul">${s.features.slice(0,4).map(f=>`<li>${ic('checkc')}<span>${f[0]}</span></li>`).join('')}</ul></div>
 <div class="xpx-sec"><span class="xp-h">What you gain</span><div class="xpx-chips">${s.benefits.map(b=>`<span>${b}</span>`).join('')}</div></div>
 <div class="xpx-cta"><a class="btn btn-primary" href="#${s.slug}">Explore this service <span class="arrow-dot">${ic('arrow')}</span></a><a class="xpx-link" href="#${s.slug}">Request consultation ${ic('arrow')}</a></div></div>`}
function bindExplorer(){
  const xp=document.getElementById('xp');if(!xp)return;
  const tabs=[...xp.querySelectorAll('[role=tab]')],panel=document.getElementById('xp-panel');
  const sel=(i,focus)=>{tabs.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.tabIndex=k===i?0:-1});panel.innerHTML=xpPanel(i);panel.classList.remove('swap');void panel.offsetWidth;panel.classList.add('swap');if(focus)tabs[i].focus();const bar=tabs[i].parentElement;if(bar.scrollWidth>bar.clientWidth)bar.scrollTo({left:tabs[i].offsetLeft-bar.clientWidth/2+tabs[i].clientWidth/2,behavior:'smooth'})};
  tabs.forEach((t,i)=>{t.onclick=()=>sel(i);t.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();sel((i+k+tabs.length)%tabs.length,true)}}});
}

const __bind0=bind;
bind=function(r){__bind0(r);bindStudio();bindExplorer();bindMotion()};

/* ============ CLASSIC LAYER: organised sections + interactions (hero untouched) ============ */
const COMMIT=[['shield','Trusted financial shield','Oversight, regulatory compliance and transaction integrity built into every engagement.'],['users','Extensive investor reach','Working relationships with investors, banks, NBFCs and strategic buyers.'],['trend','Maximise & retain value','Cash-flow discipline and a capital structure that protects owner value.'],['handshake','Partner with experts','One team from first fundraise through IPO execution.']];
const VALUES=[['shield','Integrity & transparency','Clear fees, honest assessments and no hidden agendas.'],['users','Client-first execution','Your timeline and objectives set the pace of every mandate.'],['bank','Deep market access','Relationships across banks, NBFCs, funds and exchanges.'],['checkc','End-to-end ownership','We stay accountable from first meeting to final filing.']];
const secC=(eyebrow,title,lead)=>`<div class="sec-c"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${lead?`<p class="muted">${lead}</p>`:''}</div>`;

const darkBand=(eyebrow,title,lead,items,ph)=>`<section class="dband"><div class="wrap">
  <div class="db-head"><div><span class="eyebrow inv">${eyebrow}</span><h2>${title}</h2></div><p>${lead}</p></div>
  <div class="db-grid">
    <div class="db-photo">${photo(ph,'db-ph')}<div class="db-note"><span class="g-ico">${ic('users')}</span><div><b>One accountable team</b><small>From first call to closing and beyond</small></div></div></div>
    <div class="db-cards">${items.map(([i,t,d],n)=>`<div class="db-card" tabindex="0"><div class="db-top"><span class="db-ico">${ic(i)}</span><span class="db-no">${String(n+1).padStart(2,'0')}</span></div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  </div>
</div></section>`;

const PROCESS=[
 ['Discovery','A confidential first conversation about goals, timelines and constraints.',['Confidential first meeting','NDA where needed','Note of objectives and constraints'],'search'],
 ['Diagnosis','A review of financials, structure and readiness against what investors and lenders expect.',['Financial and compliance review','Readiness gap list','Options paper with trade-offs'],'gauge'],
 ['Structuring','The right instrument, partner and terms, modelled and stress-tested.',['Recommended structure','Financial model and scenarios','Term and pricing framework'],'layers'],
 ['Execution','Documentation, outreach, negotiation and regulatory coordination.',['Investor or lender documents','Outreach and negotiation','Filings and approvals'],'handshake'],
 ['Close & beyond','Closing, post-deal compliance and ongoing CFO-level support.',['Closing checklist','Post-deal compliance','Ongoing CFO-level support'],'checkc']];
const processHTML=(alt=true)=>`<section class="sec-proc"><div class="wrap">
  ${svcHead('How an engagement runs','A clear path from <em>first call to closing</em>','Select a stage to see what happens and what you receive. A structured process means fewer surprises for promoters, investors and lenders alike.')}
  <div class="proc" id="proc">
    <div class="proc-rail" role="tablist" aria-label="Engagement stages"><span class="proc-line"><i id="procFill"></i></span>
      ${PROCESS.map((p,i)=>`<button role="tab" id="pt-${i}" aria-selected="${i===0}" aria-controls="proc-panel" data-i="${i}" tabindex="${i===0?0:-1}"><span class="pdot">${String(i+1).padStart(2,'0')}</span><span class="plbl">${p[0]}</span></button>`).join('')}
    </div>
    <div class="proc-panel" id="proc-panel" role="tabpanel" aria-live="polite">${procPanel(0)}</div>
  </div>
</div></section>`;
function procPanel(i){const p=PROCESS[i];return `<div class="pp-l"><span class="pp-ico">${ic(p[3]==='search'?'target':p[3])}</span><span class="eyebrow">Stage ${i+1} of ${PROCESS.length}</span><h3>${p[0]}</h3><p class="muted">${p[1]}</p></div>
 <div class="pp-r"><span class="xp-h">What you receive</span><ul class="xp-ul">${p[2].map(x=>`<li>${ic('checkc')}${x}</li>`).join('')}</ul>
 <div class="pp-nav"><button class="btn btn-ghost btn-sm" data-pstep="${i-1}" ${i===0?'disabled':''}>Previous</button><button class="btn btn-primary btn-sm" data-pstep="${i+1}" ${i===PROCESS.length-1?'disabled':''}>Next stage ${ic('arrow')}</button></div></div>`}
function bindProcess(){
  const root=document.getElementById('proc');if(!root)return;
  const tabs=[...root.querySelectorAll('[role=tab]')],panel=document.getElementById('proc-panel'),fill=document.getElementById('procFill');
  let cur=0,auto=null;
  const sel=(i,focus)=>{if(i<0||i>=tabs.length)return;cur=i;tabs.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.classList.toggle('done',k<i);t.tabIndex=k===i?0:-1});
    fill.style.width=(i/(tabs.length-1)*100)+'%';panel.innerHTML=procPanel(i);panel.classList.remove('swap');void panel.offsetWidth;panel.classList.add('swap');
    panel.querySelectorAll('[data-pstep]').forEach(b=>b.onclick=()=>{stop();sel(+b.dataset.pstep)});if(focus)tabs[i].focus()};
  const stop=()=>{clearInterval(auto);auto=null};
  tabs.forEach((t,i)=>{t.onclick=()=>{stop();sel(i)};t.onkeydown=e=>{const k={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];if(k){e.preventDefault();stop();sel((i+k+tabs.length)%tabs.length,true)}}});
  root.addEventListener('pointerenter',stop,{once:true});
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches)auto=setInterval(()=>sel((cur+1)%tabs.length),6000);
  sel(0);
}

const FAQ_HOME=[['Does submitting an inquiry create an engagement?','No. An inquiry starts a conversation. An engagement begins only when both sides sign a written mandate setting out scope and fees.'],['Is the information I share kept confidential?','Yes. Inquiries are visible only to our advisory team and are used solely to respond to you. Transaction details are handled on a strict need-to-know basis.'],['Do you work with early-stage companies?','Yes. Our fund raising practice supports angel and early venture rounds, and our Virtual CFO team often helps younger companies build the reporting investors expect.'],['Can you help if a bank has already declined our loan?','Often, yes. We review why, restructure the proposal and approach lenders whose credit appetite matches your profile. We cannot guarantee approval.'],['How are your fees structured?','Fees depend on the mandate. Most combine a fixed component with a success-linked component, agreed in writing before work begins.']];
const faqSplit=(items,title='Answers to <em>common questions</em>',lead='Straight answers about how we work. If yours is not here, write to us and a senior adviser will reply.')=>`<section class="sec-faq"><div class="wrap faq2">
  <div class="faq2-l"><span class="eyebrow">Questions</span><h2>${title}</h2><p class="muted">${lead}</p>
    <div class="ask"><span class="g-ico">${ic('mail')}</span><div><small>Still have a question?</small><b>${SITE.email}</b></div><a class="btn btn-light btn-sm" href="#contact-us">Ask us ${ic('arrow')}</a></div></div>
  <div class="faq2-r">${items.map(([q,a,links],i)=>`<div class="acc"><button aria-expanded="${i===0}" aria-controls="facc${i}" id="faccb${i}"><span class="qn">${String(i+1).padStart(2,'0')}</span><span class="qt">${q}</span><span class="pm">+</span></button><div class="panel" id="facc${i}" role="region" aria-labelledby="faccb${i}" ${i===0?'':'hidden'}><p>${a}</p>${links?`<div class="links">${links.map(s=>`<a class="btn btn-ghost btn-sm" href="#${s}">${SVC[s].title} ${ic('arrow')}</a>`).join('')}</div>`:''}</div></div>`).join('')}</div>
</div></section>`;
const NEEDS=[['Looking to secure growth capital or plan an IPO?','We help with fundraising strategy, IPO documentation, regulatory filings and investor introductions.',['fund-raising','ipo-advisory']],['Need financial leadership without a full-time CFO?','Our Virtual CFO team handles planning, cash flow, budgeting, MIS reports and compliance oversight.',['virtual-cfo-services']],['Looking for business loans or lower interest rates?','We arrange working capital, term loans and project funding, and refinance expensive debt.',['debt-advisory']],['Buying, selling or merging a business?','Valuation, due diligence, negotiation and transaction support from first approach to close.',['mergers-acquisitions','corporate-finance-advisory']]];

const toolkitBand=()=>`<section class="sec-tool"><div class="wrap"><div class="tkb">
  <div class="tkb-copy"><span class="eyebrow">Finance toolkit</span><h2>Run the numbers <em>before you call us</em></h2><p class="muted">Estimate a loan EMI, check your IPO readiness and find which service fits your situation. Indicative only, and a useful start for the first conversation.</p><div><a class="btn btn-primary" href="#toolkit">Open the toolkit <span class="arrow-dot">${ic('arrow')}</span></a></div></div>
  <div class="tkb-cards">${[['calc','EMI calculator','Monthly instalment, interest and total cost'],['target','IPO readiness score','Six questions, about a minute'],['compass','Service finder','Match your goal to the right team']].map(([i,t,d],n)=>`<a class="tkb-card" href="#toolkit"><span class="db-no">${String(n+1).padStart(2,'0')}</span><span class="ico-ring">${ic(i)}</span><b>${t}</b><small>${d}</small><span class="more">Open ${ic('arrow')}</span></a>`).join('')}</div>
</div></div></section>`;

/* ---------- HOME (below the unchanged hero) ---------- */
const homeBelowHero=()=>`
${sectorStrip()}
${glanceHTML()}

<section class="sec-about"><div class="wrap ab3">
  <div class="ab3-media">
    ${photo('meeting','ab3-main')}
    <div class="ab3-badge"><b>12<sup>+</sup></b><span>Years advising Indian businesses</span></div>
    <div class="ab3-chip">${ic('shield')}<span>Strict confidentiality on every mandate</span></div>
  </div>
  <div class="ab3-copy">
    <span class="eyebrow">About Beyondmatrix</span>
    <h2>Strategic minds helping businesses raise <em>smarter</em> and grow with <em>confidence</em></h2>
    <p class="muted">Beyondmatrix Capital is a Mumbai-based corporate finance and investment banking advisory firm. We pair transaction experience with hands-on financial management, so promoters get one partner for raising, structuring and governing capital.</p>
    <div class="ab3-points">
      <div class="mini"><span class="ico-ring">${ic('shield')}</span><div><b>Integrity-first advisory</b><p>Transparent fees, honest assessments and strict confidentiality.</p></div></div>
      <div class="mini"><span class="ico-ring">${ic('layers')}</span><div><b>One team, end to end</b><p>Capital markets, credit, valuation and CFO skills under one roof.</p></div></div>
    </div>
    <div class="hero-actions"><a class="btn btn-primary" href="#about-us">Discover More <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost" href="#contact-us">Talk to an adviser</a></div>
  </div>
</div></section>

<section class="sec-explore"><div class="wrap">
  ${svcHead('Explore our services','What we are offering to our <em>potential clients</em>','Six integrated practices covering capital raising, listing, lending, transactions and finance leadership. Choose one to see what is included.')}
  ${explorerHTML()}
  <div class="center-cta"><a class="btn btn-ghost" href="#services">View all services ${ic('arrow')}</a></div>
</div></section>

${darkBand('Why clients choose us','Four commitments behind <em>every mandate</em>','Promoters work with us because we stay with the mandate from first call to closing, and tell them plainly what the numbers say.',COMMIT,'collab')}

<section class="sec-results"><div class="wrap">${secC('Track record','Results that <em>speak for us</em>','')}<div class="results">
  <div class="res-photo">${photo('results')}<div class="res-panel"><span class="eyebrow inv">Track record</span><h2>Where results speak <em>louder than words</em></h2><p>Every mandate is measured by what the client walks away with: the capital raised, the listing achieved, the deal closed.</p></div></div>
  <div class="res-side">
    <div class="res-tile white"><b>₹500<small>Cr+</small></b><span>capital raised for clients across equity, debt and hybrid structures</span><div class="res-bars" aria-hidden="true">${[30,42,38,56,64,80].map(h=>`<i style="height:${h}%"></i>`).join('')}</div></div>
    <div class="res-tile blue">${photo('phone','res-ph')}<div><b>One call</b><span>can change your financial trajectory</span><a href="#contact-us" class="btn btn-light btn-sm">Speak to us ${ic('arrow')}</a></div></div>
  </div>
</div></div></section>

${studioHTML()}



${processHTML()}
${toolkitBand()}
${faqSplit(FAQ_HOME)}
${ctaBand()}`;

/* ---------- ABOUT ---------- */
P['about-us']=()=>`${pageHead('<span>About Us</span>','About Beyondmatrix','Your long-term partner in <em>corporate finance</em>','Beyondmatrix Capital Private Limited helps growing Indian businesses access the right capital and make better financial decisions, with integrity at the centre of every mandate.',photo('meeting'))}
${glanceHTML()}
<section><div class="wrap ab3">
  <div class="ab3-media">${photo('analyst','ab3-main')}<div class="ab3-badge"><b>6</b><span>Integrated practice areas</span></div><div class="ab3-chip">${ic('pin')}<span>Andheri East, Mumbai</span></div></div>
  <div class="ab3-copy"><span class="eyebrow">Who we are</span><h2>Investment banking depth with an <em>operator's view</em> of finance</h2>
  <p class="muted">We work with promoters, founders and finance teams on the decisions that shape a company: raising equity, borrowing well, preparing to list, buying or selling a business, and running finance with discipline.</p>
  <p class="muted">Our team brings together experience across capital markets, credit, valuation and CFO functions, so advice in one area is always informed by the others.</p>
  <div class="hero-actions"><a class="btn btn-primary" href="#services">Our services <span class="arrow-dot">${ic('arrow')}</span></a><a class="btn btn-ghost" href="#contact-us">Meet the team</a></div></div>
</div></section>
<section class="alt"><div class="wrap">
  ${secC('Purpose','Why we <em>exist</em>','')}
  <div class="grid g2">
    <div class="mv"><span class="ico-ring">${ic('target')}</span><span class="eyebrow">Mission</span><h3>Help businesses access suitable capital and customised strategic financial guidance.</h3><p class="muted">We match each company with the funding route, partner and structure that fits its stage, not the one that is easiest to sell.</p></div>
    <div class="mv blue"><span class="ico-ring">${ic('globe')}</span><span class="eyebrow inv">Vision</span><h3>To be the trusted financial partner for India's growing businesses.</h3><p>Long-term value creation, earned through integrity and results.</p></div>
  </div>
</div></section>
${darkBand('Core values','What drives us <em>forward</em>','Four principles that shape how we take on, run and close every mandate.',VALUES,'present')}
${processHTML(false)}
<section class="alt"><div class="wrap">${svcHead('Where we can help','Six practices, <em>one team</em>','Choose a practice to see what is included.')}${explorerHTML()}</div></section>
${ctaBand('Let\'s talk about your growth plans')}`;

/* ---------- SERVICES ---------- */
P.services=()=>`${pageHead('<span>Services</span>','Financial advisory services','Find the right financial solution for <em>your business</em>','Six integrated practices covering capital raising, listing, lending, transactions and finance leadership.',photo('skyline'))}
${glanceHTML()}
<section><div class="wrap">${svcHead('Our practices','What we are offering to our <em>potential clients</em>','Each practice is led by specialists and connected to the others, so a fundraise, a loan and a listing can be planned together.')}<div class="sgrid">${SERVICES.map(scard).join('')}</div></div></section>
${faqSplit(NEEDS,'Start from your <em>business need</em>','Not sure which practice fits? Pick the question closest to your situation.')}
${processHTML(false)}
${ctaBand()}`;

/* ---------- SERVICE DETAIL ---------- */
function servicePage(s){
  const faq=[[`How does a ${s.title} engagement start?`,'With a confidential call to understand your objectives. Where needed we sign an NDA, then share a scoped proposal with fees before any work begins.'],['What should I prepare for the first call?','Your last two or three years of financial statements, a short business overview and your objectives. We will tell you what else is useful after the first call.'],['Is submitting the form a commitment?','No. It only starts a conversation. An engagement begins when both sides sign a written mandate.']];
  const nav=[['sv-ov','Overview'],['sv-inc','What\'s included'],['sv-how','How we deliver'],['sv-faq','FAQ']];
  return `${pageHead(`<a href="#services">Services</a><span>/</span><span>${s.title}</span>`,s.tag,s.title,s.tagline,photo(SVC_PHOTO[s.slug]))}
<section><div class="wrap svc-layout">
  <div class="svc-main">
    <nav class="subnav" aria-label="On this page">${nav.map(([id,l],i)=>`<button data-jump="${id}" class="${i===0?'on':''}">${l}</button>`).join('')}</nav>
    <div id="sv-ov" class="svc-block"><span class="eyebrow">Overview</span><h2>${s.title} <em>at Beyondmatrix</em></h2><p class="lead">${s.overview}</p>
      <div class="ben-grid">${s.benefits.map((b,i)=>`<div class="ben"><span class="db-no">${String(i+1).padStart(2,'0')}</span>${ic('checkc')}<b>${b}</b></div>`).join('')}</div></div>
    <div id="sv-inc" class="svc-block"><span class="eyebrow">What's included</span><div class="feat-grid">${s.features.map(([t,d,i],n)=>`<div class="feat"><span class="no">${String(n+1).padStart(2,'0')}</span><span class="ico-ring">${ic(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div>
    <div id="sv-how" class="svc-block"><span class="eyebrow">How we deliver</span><h2>Four steps, <em>one accountable team</em></h2>
      <div class="mini-steps">${[['Assess','Understand the business, numbers and goal.'],['Structure','Design the route, terms and timeline.'],['Execute','Prepare documents, run outreach, negotiate.'],['Support','Close, comply and keep improving.']].map(([t,d],i)=>`<div class="ms"><span>${i+1}</span><b>${t}</b><p>${d}</p></div>`).join('')}</div>
      <div class="photo-wide short">${photo(SVC_PHOTO[s.slug]==='collab'?'meeting':'collab')}</div></div>
    <div id="sv-faq" class="svc-block"><span class="eyebrow">Common questions</span>${faq.map(([q,a],i)=>`<div class="acc"><button aria-expanded="false" aria-controls="sacc${i}" id="saccb${i}"><span class="qt">${q}</span><span class="pm">+</span></button><div class="panel" id="sacc${i}" role="region" aria-labelledby="saccb${i}" hidden><p>${a}</p></div></div>`).join('')}</div>
    <div class="svc-block"><span class="eyebrow">Explore related services</span><div class="rel-grid">${SERVICES.filter(x=>x.slug!==s.slug).slice(0,3).map(x=>`<a class="rel" href="#${x.slug}">${photo(SVC_PHOTO[x.slug],'rel-ph')}<div><b>${x.title}</b><small>${x.tag}</small><span class="more">Read more ${ic('arrow')}</span></div></a>`).join('')}</div></div>
  </div>
  <aside class="sticky-form" id="consult">${formHTML(s.slug,s.fields,`Request ${/^[AEIOU]/.test(s.title)?'an':'a'} ${s.title} consultation`,'A senior adviser replies within one business day.',s.note)}</aside>
</div></section>
${ctaBand(`Questions about ${s.title.toLowerCase()}?`,'Write to us, or use the toolkit to run a few numbers first.')}`;
}

function bindSubnav(){
  const nav=document.querySelector('.subnav');if(!nav||!('IntersectionObserver' in window))return;
  const btns=[...nav.querySelectorAll('button')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)btns.forEach(b=>b.classList.toggle('on',b.dataset.jump===e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
  btns.forEach(b=>{const t=document.getElementById(b.dataset.jump);t&&io.observe(t)});
}
function bindFaqSingle(){
  document.querySelectorAll('.faq2-r').forEach(box=>box.querySelectorAll('.acc button').forEach(b=>b.addEventListener('click',()=>{
    if(b.getAttribute('aria-expanded')!=='true')return;
    box.querySelectorAll('.acc button').forEach(o=>{if(o!==b&&o.getAttribute('aria-expanded')==='true'){o.setAttribute('aria-expanded','false');document.getElementById(o.getAttribute('aria-controls')).hidden=true}})})));
}
const __bind1=bind;
bind=function(r){__bind1(r);bindProcess();bindSubnav();bindFaqSingle()};


/* ===== Live deployment: send inquiries to /api/inquiry (Vercel), fall back to browser demo mode ===== */
const __localSubmit=apiSubmit;
apiSubmit=async function(slug,fields,raw,key){
  if(/^https?:$/.test(location.protocol)){
    const clean={};fields.forEach(f=>{clean[f.n]=(raw[f.n]??'').toString().trim()});
    const errs=validate(fields,clean);
    if(Object.keys(errs).length)throw{status:422,errors:errs};
    let r;
    try{r=await fetch('/api/inquiry',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key},body:JSON.stringify({service:slug,fields:clean,consent:!!raw.consent,hp:raw._hp||'',source:location.hash||'#home'})})}
    catch(e){throw{status:0,message:'We could not reach our server. Check your connection and try again, or email '+SITE.email+'.'}}
    let j={};try{j=await r.json()}catch(e){}
    if(r.status===422)throw{status:422,errors:j.errors||{}};
    if(r.ok&&j.delivered){try{__localSubmit(slug,fields,raw,key+'-copy').catch(()=>{})}catch(e){}return{status:r.status,ref:j.ref}}
    if(r.status!==503&&r.status!==404)throw{status:r.status,message:j.message||'We could not send your inquiry right now. Please try again.'};
    /* 503 = email delivery not configured yet, 404 = no server function: use demo mode */
  }
  return __localSubmit(slug,fields,raw,key);
};

render();
