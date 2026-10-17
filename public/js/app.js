/* Beyond Matrix Capital: site application (vanilla JS, hash-routed) */
'use strict';
const P={};
/* ===== Reused, tested logic from the previous build (data, forms, validation, API, tools, staff console) ===== */

/* --- icons+site --- */
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

/* --- services+storage+validate+api --- */
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

/* --- forms --- */
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

/* --- legal-data+toolkit --- */
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


/* --- admin --- */
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

/* --- toast-copy --- */
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;t.setAttribute('role','status');document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function copyText(txt,btn){const done=()=>{toast('Copied to clipboard')};try{navigator.clipboard.writeText(txt).then(done,()=>fallback())}catch(e){fallback()}function fallback(){const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){toast('Select the text to copy it')}ta.remove()}}

/* --- bindForm..cookie+restore --- */
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



/* --- studio --- */
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

/* --- process --- */
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


/* --- faq-data --- */
const FAQ_HOME=[['Does submitting an inquiry create an engagement?','No. An inquiry starts a conversation. An engagement begins only when both sides sign a written mandate setting out scope and fees.'],['Is the information I share kept confidential?','Yes. Inquiries are visible only to our advisory team and are used solely to respond to you. Transaction details are handled on a strict need-to-know basis.'],['Do you work with early-stage companies?','Yes. Our fund raising practice supports angel and early venture rounds, and our Virtual CFO team often helps younger companies build the reporting investors expect.'],['Can you help if a bank has already declined our loan?','Often, yes. We review why, restructure the proposal and approach lenders whose credit appetite matches your profile. We cannot guarantee approval.'],['How are your fees structured?','Fees depend on the mandate. Most combine a fixed component with a success-linked component, agreed in writing before work begins.']];
const NEEDS=[['Looking to secure growth capital or plan an IPO?','We help with fundraising strategy, IPO documentation, regulatory filings and investor introductions.',['fund-raising','ipo-advisory']],['Need financial leadership without a full-time CFO?','Our Virtual CFO team handles planning, cash flow, budgeting, MIS reports and compliance oversight.',['virtual-cfo-services']],['Looking for business loans or lower interest rates?','We arrange working capital, term loans and project funding, and refinance expensive debt.',['debt-advisory']],['Buying, selling or merging a business?','Valuation, due diligence, negotiation and transaction support from first approach to close.',['mergers-acquisitions','corporate-finance-advisory']]];

/* --- api-hook --- */
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


/* --- v7-data-tools --- */
const TURNOVER=['Less than ₹1 Cr','₹1 – 5 Cr','₹5 – 20 Cr','₹20 Cr+'];
const CIBIL=['Below 600','600 – 649','650+','700+','750+','800+','Don\'t know'];
(function enrich(){
  const by=Object.fromEntries(SERVICES.map(s=>[s.slug,s]));
  const set=(slug,o)=>Object.assign(by[slug],o);
  set('ipo-advisory',{tagline:'Expert guidance for SME & Mainboard IPO listings, from readiness assessment to listing day and beyond.',
    overview:'We offer end-to-end IPO advisory for businesses becoming public companies, to unlock long-term equity capital and build credibility in the capital markets. We assess readiness, strengthen corporate governance and coordinate merchant bankers, legal counsel, auditors and the stock exchanges (BSE/NSE).',
    features:[['IPO readiness assessment','A diagnostic of financial health, regulatory compliance, corporate structure and equity story, the starting point for any listing.','target'],['SME IPO advisory','End-to-end guidance for high-growth SMEs listing on BSE SME or NSE Emerge.','rocket'],['Mainboard IPO advisory','Transaction management and execution for larger companies listing on the main boards.','bell'],['Financial & compliance due diligence','Pre-IPO financial reviews, legal checks and disclosure preparation.','doc'],['Corporate governance framework','Independent board committees and internal financial control (IFC) mechanisms.','shield'],['Restated financial statements','Helping finance teams and auditors recast historical accounts to exchange reporting norms.','layers'],['Regulatory & exchange compliance','Statutory filings and approvals with SEBI, the ROC and the exchanges.','globe'],['Pre-IPO capital planning','Structuring and placing pre-IPO rounds to set valuation benchmarks and attract institutions.','coin']],
    keyBenefits:[['Thorough preparation','Builds investor trust and smoother regulatory clearances.'],['Ecosystem management','One coordination point for merchant bankers, legal teams, registrars and auditors.'],['Value maximisation','Timing, pricing and narrative strategy aimed at the best public-market valuation.']],
    fields:[...CORE,{n:'turnover',l:'Tentative turnover / annual revenue',t:'select',req:1,o:TURNOVER}],tool:'Compare listing routes'});
  set('fund-raising',{tagline:'End-to-end equity & hybrid capital solutions connecting high-growth companies with institutional, venture and strategic investors.',
    overview:'Capital is the fuel for expansion. We help businesses raise equity, debt and hybrid capital for growth plans, acquisitions, technology and working capital, working alongside promoters to build the equity story, prepare investor-ready documents, find aligned capital partners and negotiate terms from pitch to closing.',
    features:[['Equity fund raising','Structured raises for growth-stage and mid-market companies expanding without adding debt.','users'],['Private equity & venture capital','Introductions to PE firms and VC funds for Series A through late-stage rounds.','handshake'],['Angel investments','Early-stage syndication, pitch decks and access to HNI networks.','spark'],['Growth capital','Funding for geographic expansion, R&D and new product lines.','trend'],['Strategic investments','Corporate investors, industry partners and JV allies who bring synergies and market access.','target'],['Convertible instruments (CCDs, CCPS)','Bridging valuation gaps while protecting founder ownership.','layers'],['Debt & hybrid funding','Mezzanine debt and revenue-based financing to limit dilution.','coin']],
    keyBenefits:[['Targeted investor access','PE funds, VCs, family offices and HNIs aligned to your stage and sector.'],['Valuation & terms optimisation','Protecting promoter equity while offering investors attractive returns.'],['Turnkey support','Information memoranda, financial models and deal negotiation, end to end.']],
    fields:[...CORE,{n:'company',l:'Company name',t:'text'},{n:'turnover',l:'Tentative turnover / annual revenue',t:'select',req:1,o:TURNOVER},{n:'amount',l:'Funding requirement',t:'select',o:['Up to ₹5 Cr','₹5 – 25 Cr','₹25 – 100 Cr','Above ₹100 Cr']},{n:'message',l:'What will the capital be used for?',t:'textarea',max:1000}],tool:'Dilution calculator & route finder'});
  set('debt-advisory',{tagline:'Customised debt & financing solutions: the right capital, on the best terms, matched to your operating and strategic needs.',
    overview:'Getting the right financing on good terms is essential for sustainable growth. Through our network of banks, NBFCs, financial institutions and alternative lenders, we run end-to-end debt syndication: assessing needs, preparing documentation, negotiating with lenders and supporting you to disbursement.',
    features:[['Working capital finance','Fund-based (cash credit, overdraft) and non-fund-based (LC, bank guarantee) facilities for day-to-day liquidity.','coin'],['Term loans','Medium to long-term facilities for expansion, acquisitions and growth.','bank'],['Project finance','Greenfield and brownfield projects: feasibility, Detailed Project Reports (DPRs) and bank syndication.','target'],['Machinery & equipment loans','Asset-backed financing to upgrade machinery without draining working capital.','gauge'],['Loan against property (LAP)','Turning property into business liquidity at competitive rates.','pin'],['Structured debt solutions','Mezzanine, growth capital and special-situation packages for complex cases.','spark'],['Refinancing & restructuring','Replacing costly debt, extending maturities and realigning repayments.','trend']],
    keyBenefits:[['Institutional network','Direct relationships with banks, NBFCs and alternative lenders.'],['Optimised terms','Competitive rates, flexible covenants and structured repayment schedules.'],['Seamless execution','Lender documentation, credit assessment and fast-track sanction handled for you.']],
    fields:[...CORE,{n:'applicant',l:'What do you do?',t:'radio',req:1,o:['Business','Job']},{n:'loanType',l:'What type of loan do you need?',t:'radio',req:1,o:['Secured','Unsecured']},{n:'cibil',l:'What is your CIBIL score? (optional)',t:'select',o:CIBIL},{n:'message',l:'Additional information',t:'textarea',max:1000,ph:'Loan amount, purpose, existing facilities…'}],tool:'Facility matcher & EMI estimator'});
  set('virtual-cfo-services',{tagline:'On-demand executive financial leadership: senior finance expertise, cash-flow management and MIS reporting without a full-time CFO.',
    overview:'A flexible, cost-effective option for growing businesses that need strategic financial leadership. We work with promoters and leadership teams to improve financial visibility, strengthen internal controls, optimise working capital, raise profitability and support data-driven decisions.',
    features:[['MIS & business dashboards','Management reporting, KPI tracking and executive dashboards.','grid'],['Budgeting & forecasting','Annual operating plans, zero-based budgeting, revenue models and variance monitoring.','calc'],['Cash-flow management','Rolling projections, runway tracking, working capital and liquidity planning.','coin'],['Financial planning & analysis','Unit economics, product and channel profitability, pricing models.','gauge'],['Investor & lender reporting','Quarterly investor updates, board decks and covenant compliance reports.','doc'],['Internal controls & processes','Financial SOPs, approval matrices and audit trails.','shield'],['Compliance monitoring','Ongoing oversight of GST, Income Tax, TDS and governance obligations.','checkc'],['Strategic finance support','A thought partner on capex, cost reduction, expansion and pivots.','compass']],
    keyBenefits:[['Cost efficiency','Senior CFO experience at a fraction of a full-time salary.'],['Actionable visibility','Clear insight into business metrics and profit drivers.'],['Scalable engagement','Scope that grows as your business does.']],tool:'Virtual vs full-time CFO & health checklist'});
  set('mergers-acquisitions',{tagline:'Strategic M&A advisory for deal execution and value creation: buy-side, sell-side, valuation and deal structuring.',
    overview:'Acquisitions, mergers and divestitures help companies enter markets, scale operations and create enterprise value. We advise business owners, strategic acquirers and corporate investors across the whole M&A lifecycle, from deal origination to closing, keeping each deal aligned with strategy while maximising value and reducing execution risk.',
    features:[['Buy-side advisory','Target identification, synergy evaluation, outreach and valuation models.','target'],['Sell-side advisory','Sale readiness, confidential teasers, buyer matching and managed bidding.','handshake'],['Business valuation','Independent fair-value opinions for negotiations, boards and filings.','calc'],['Financial due diligence','Quality of earnings, balance sheet verification and hidden liabilities.','doc'],['Deal structuring & negotiation','Tax-efficient structures, term sheets, SPA and SHA support.','layers'],['Partnerships & joint ventures','Domestic and cross-border JVs, profit-sharing and alliance agreements.','users'],['Business succession planning','Ownership transitions, management buyouts and recapitalisations.','compass'],['Transaction execution','Closing conditions, regulatory approvals and definitive agreements.','checkc']],
    keyBenefits:[['Strategic alignment','Precise target matching for real operating and revenue synergies.'],['Risk mitigation','Diligence and structuring that protect you from transaction risk.'],['Confidentiality & integrity','Discretion throughout buyer and seller interactions.']],tool:'Valuation range & deal lifecycle'});
  set('corporate-finance-advisory',{tagline:'Strategic financial advisory for sustainable growth: better capital allocation, stronger performance, long-term value.',
    overview:'We help promoters and leadership teams make financial decisions aimed at sustainable growth and higher shareholder value, at every stage from planning and capital allocation to restructuring and expansion, assessing opportunities, refining financial strategy and preparing the organisation to scale.',
    features:[['Financial strategy & planning','Practical roadmaps that tie budgets to growth goals and adapt to markets.','compass'],['Business valuation','Independent value assessment for deals, compliance, disputes and pitches.','calc'],['Financial modelling & forecasting','Scenario models that test strategies and project cash flows before capital is committed.','gauge'],['Capital structure optimisation','The debt-equity mix that lowers WACC with safe leverage and liquidity.','layers'],['Growth & expansion advisory','Feasibility of new markets, product lines and capacity.','trend'],['Strategic business reviews','Health checks of unit economics, margins and working capital cycles.','target'],['Restructuring & turnaround','Debt renegotiation, cost reduction and restoring cash flow.','shield']],
    keyBenefits:[['Informed decision making','Clearer insight from in-depth financial analysis.'],['Capital efficiency','Better balance sheet management and a lower cost of capital.'],['Investor & lender readiness','A solid financial foundation for future fundraising.']],tool:'Business health check'});
})();

/* ---------- shared bits ---------- */
const v7Range=(id,label,unit,min,max,step,val)=>`<div class="range"><div class="top"><label for="${id}">${label}</label><b id="${id}v"></b></div><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}" data-unit="${unit}"></div>`;
const v7Lbl=el=>{const u=el.dataset.unit,v=+el.value;return u==='₹ Cr'?'₹'+v.toLocaleString('en-IN')+' Cr':u==='%'?v+'%':u==='x'?v+'x':u==='days'?v+' days':u==='yrs'?v+' yrs':String(v)};
const crf=v=>'₹'+(Math.abs(v)>=100?Math.round(v).toLocaleString('en-IN'):v.toFixed(1))+' Cr';
const flag=(lvl,txt)=>`<span class="flag f-${lvl}">${lvl==='good'?ic('checkc'):ic('alert')}${txt}</span>`;
const stepper=(id,steps)=>`<div class="vstep" id="${id}"><div class="vstep-rail" role="tablist">${steps.map((s,i)=>`<button role="tab" aria-selected="${i===0}" data-i="${i}"><span>${i+1}</span>${s[0]}</button>`).join('')}</div><div class="vstep-panel" aria-live="polite"><b>${steps[0][0]}</b><p>${steps[0][1]}</p></div></div>`;
function bindStepper(id,steps){const r=document.getElementById(id);if(!r)return;const bs=[...r.querySelectorAll('[role=tab]')],p=r.querySelector('.vstep-panel');
  bs.forEach((b,i)=>b.onclick=()=>{bs.forEach((x,k)=>{x.setAttribute('aria-selected',k===i);x.classList.toggle('done',k<i)});p.innerHTML=`<b>${steps[i][0]}</b><p>${steps[i][1]}</p>`})}

/* ---------- per-service tools ---------- */
const IPO_STEPS=[['Readiness assessment','Diagnose financials, compliance, structure and equity story; agree a realistic listing plan.'],['Restatement & governance','Restated financials, independent directors, board committees and internal financial controls.'],['Team & documentation','Appoint merchant banker, legal counsel and registrar; prepare the draft offer document.'],['Regulatory approvals','Filings and observations with SEBI, the exchange and the ROC.'],['Marketing & pricing','Investor meetings, anchor book and price band.'],['Listing & after-care','Listing day, then ongoing disclosure and investor relations.']];
const MA_STEPS=[['Origination','Define strategy, screen targets or buyers, approach confidentially.'],['Valuation','Independent valuation and synergy case to set the negotiating range.'],['Due diligence','Quality of earnings, legal and tax review, liabilities and risks.'],['Structuring & negotiation','Deal structure, consideration and key terms in a term sheet.'],['Definitive agreements','SPA, SHA and related documents drafted and negotiated.'],['Approvals & closing','Regulatory approvals, conditions precedent and completion.'],['Integration','Post-deal integration plan so the value case is delivered.']];
const TOOLS={
 'ipo-advisory':()=>`<div class="cmp"><table><thead><tr><th></th><th>SME platform</th><th>Mainboard</th></tr></thead><tbody>${[['Best suited for','Growing SMEs building a public-market track record','Larger, established companies seeking deep liquidity'],['Exchange platform','BSE SME / NSE Emerge','BSE / NSE main board'],['Investor base','HNIs, retail and select institutions','Broad institutional, HNI and retail participation'],['Compliance load','Scaled to SME listing norms','Full listed-company disclosure and governance'],['Growth path','Can migrate to the main board once eligible','Access to the deepest public capital pool']].map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>
  <p class="disclaim">Indicative comparison. Eligibility depends on SEBI and exchange criteria at the time of filing.</p>
  <span class="xp-h">The IPO journey: select a stage</span>${stepper('ipoSteps',IPO_STEPS)}
  <a class="xpx-link" href="#toolkit">Check your IPO readiness score ${ic('arrow')}</a>`,
 'fund-raising':()=>`<div class="tool2"><div class="st-controls">${v7Range('dPre','Pre-money valuation','₹ Cr',5,1000,5,100)}${v7Range('dRaise','Amount to raise','₹ Cr',1,300,1,25)}${v7Range('dFnd','Founders\' current holding','%',10,100,1,80)}</div>
  <div class="st-out"><div class="kpi-row"><div class="kpi2 accent"><span>Post-money valuation</span><b id="dPost"></b></div><div class="kpi2"><span>New investor stake</span><b id="dInv"></b></div><div class="kpi2"><span>Founders after round</span><b id="dAft"></b></div></div>
  <div class="mixbar" id="dBar"></div><p class="insight" id="dIns"></p></div></div>
  <span class="xp-h">Which route fits your stage?</span><div class="seg" id="frStage">${[['early','Early stage'],['growth','Growth stage'],['mid','Mid-market'],['pre','Pre-IPO']].map(([v,l],i)=>`<label><input type="radio" name="frs" value="${v}" ${i===0?'checked':''}> ${l}</label>`).join('')}</div><div class="finder-res" id="frRes"></div>`,
 'debt-advisory':()=>`<span class="xp-h">What do you need the money for?</span><div class="seg" id="dmNeed">${[['day','Day-to-day operations'],['trade','Imports & trade'],['capex','Expansion / capex'],['machine','New machinery'],['property','Unlock property value'],['refi','Cut existing loan cost']].map(([v,l],i)=>`<label><input type="radio" name="dmn" value="${v}" ${i===0?'checked':''}> ${l}</label>`).join('')}</div><div class="finder-res" id="dmRes"></div>
  <div class="tool2"><div class="st-controls">${v7Range('eA','Loan amount','₹ Cr',0.5,100,0.5,5)}${v7Range('eR2','Interest rate (p.a.)','%',7,18,0.25,10.5)}${v7Range('eT','Tenure','yrs',1,15,1,5)}</div>
  <div class="st-out"><div class="kpi-row"><div class="kpi2 accent"><span>Monthly EMI</span><b id="eM"></b></div><div class="kpi2"><span>Total interest</span><b id="eI"></b></div><div class="kpi2"><span>Every 1% lower rate saves</span><b id="eS"></b></div></div><p class="disclaim">Indicative estimate. Actual rates and eligibility depend on the lender's assessment.</p></div></div>`,
 'virtual-cfo-services':()=>`<div class="cmp"><table><thead><tr><th></th><th>Full-time CFO</th><th>Beyondmatrix Virtual CFO</th></tr></thead><tbody>${[['Cost','Full salary, benefits and hiring cost','A fraction of the cost, scoped to your needs'],['Commitment','Long-term employment','Flexible engagement that scales up or down'],['Expertise','One person\'s experience','A team across reporting, FP&A, compliance and capital'],['Time to start','Months to hire and onboard','Weeks to set up reporting and controls'],['Best for','Large, complex organisations','Growing businesses that need senior finance leadership now']].map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td><b>${r[2]}</b></td></tr>`).join('')}</tbody></table></div>
  <span class="xp-h">Finance health checklist: tick what you already have</span><div class="chk" id="cfoChk">${['Monthly MIS within 10 days of month-end','Annual budget with monthly variance review','Rolling 13-week cash-flow forecast','Product / channel profitability analysis','Documented approval matrix and SOPs','GST, TDS and ROC filings tracked on a calendar','Board / investor pack every quarter','Clear KPIs reviewed by leadership'].map((t,i)=>`<label><input type="checkbox" value="${i}"> ${t}</label>`).join('')}</div>
  <div><div style="display:flex;justify-content:space-between;font-size:.9rem"><b>Finance function score</b><b id="cfoScore" class="num">0 / 8</b></div><div class="meter" style="margin-top:6px"><i id="cfoBar" style="width:0"></i></div></div><div class="finder-res" id="cfoRes"></div>`,
 'mergers-acquisitions':()=>`<div class="tool2"><div class="st-controls">${v7Range('vE','Annual EBITDA','₹ Cr',1,500,1,20)}${v7Range('vL','Low multiple (EV/EBITDA)','x',3,25,0.5,7)}${v7Range('vH','High multiple (EV/EBITDA)','x',4,30,0.5,11)}${v7Range('vD','Net debt (debt minus cash)','₹ Cr',-100,500,1,15)}</div>
  <div class="st-out"><div class="kpi-row"><div class="kpi2 accent"><span>Enterprise value range</span><b id="vEV"></b></div><div class="kpi2"><span>Equity value range</span><b id="vEq"></b></div><div class="kpi2"><span>Mid-point equity</span><b id="vMid"></b></div></div><div class="vrange" id="vBar"></div><p class="disclaim">Multiples-based indication only. A formal valuation also weighs DCF, comparable deals, synergies and diligence findings.</p></div></div>
  <span class="xp-h">The deal lifecycle: select a stage</span>${stepper('maSteps',MA_STEPS)}`,
 'corporate-finance-advisory':()=>`<div class="tool2"><div class="st-controls">${v7Range('hR','Annual revenue','₹ Cr',5,1000,5,80)}${v7Range('hE','EBITDA','₹ Cr',-20,300,1,10)}${v7Range('hD','Total debt','₹ Cr',0,500,1,25)}${v7Range('hC','Cash & equivalents','₹ Cr',0,200,1,5)}${v7Range('hDr','Debtor days','days',0,180,5,75)}${v7Range('hIn','Inventory days','days',0,180,5,60)}${v7Range('hCr','Creditor days','days',0,180,5,45)}</div>
  <div class="st-out"><div class="hc" id="hcOut"></div><p class="disclaim">Indicative thresholds for discussion. Healthy levels vary by sector.</p></div></div>`};
const BIND={
 'ipo-advisory':()=>bindStepper('ipoSteps',IPO_STEPS),
 'fund-raising':()=>{const ids=['dPre','dRaise','dFnd'];const f=()=>{ids.forEach(i=>document.getElementById(i+'v').textContent=v7Lbl(document.getElementById(i)));
   const pre=+dPre.value,r=+dRaise.value,fd=+dFnd.value/100,post=pre+r,inv=r/post,fa=fd*(1-inv),oth=(1-fd)*(1-inv);
   dPost.textContent=crf(post);dInv.textContent=(inv*100).toFixed(1)+'%';dAft.textContent=(fa*100).toFixed(1)+'%';
   dBar.innerHTML=`<i class="m-eq" style="width:${fa*100}%"><span>Founders ${(fa*100).toFixed(0)}%</span></i>${oth>0.001?`<i style="width:${oth*100}%;background:#9FB2FF;color:#0A1538"><span>Others ${(oth*100).toFixed(0)}%</span></i>`:''}<i class="m-d" style="width:${inv*100}%"><span>New ${(inv*100).toFixed(0)}%</span></i>`;
   dIns.innerHTML=`${ic('spark')}<span>${inv>0.3?'This round gives away more than 30%. Consider a smaller round, a higher valuation or convertible instruments (CCDs/CCPS) to bridge the gap.':'Dilution looks moderate. Raising at a higher valuation by '+Math.round(pre*0.2)+' Cr would keep about '+((fd*(1-r/(pre*1.2+r)))*100-fa*100).toFixed(1)+' more points with founders.'}</span>`};
   ids.forEach(i=>document.getElementById(i).addEventListener('input',f));f();
   const R={early:['Angel investors & early-stage VC','Pitch deck, HNI syndication and seed or Series A terms.'],growth:['Venture capital & growth capital','Series A to C rounds, venture debt or CCPS to support scaling.'],mid:['Private equity & strategic investors','Growth equity, minority stakes, mezzanine or hybrid structures.'],pre:['Pre-IPO placement','Anchor-style rounds that set a valuation benchmark ahead of listing.']};
   const g=()=>{const v=document.querySelector('[name=frs]:checked').value;frRes.innerHTML=`<span class="eyebrow">Suggested route</span><b style="font-family:var(--f-display);font-size:1.1rem">${R[v][0]}</b><span>${R[v][1]}</span>`};frStage.addEventListener('change',g);g()},
 'debt-advisory':()=>{const M={day:['Working capital: cash credit / overdraft','Revolving limits sized to your operating cycle, usually secured on stock and receivables.'],trade:['Letters of credit & bank guarantees','Non-fund-based limits that support imports and contracts without tying up cash.'],capex:['Term loan or project finance','Medium to long-term funding; larger projects need a Detailed Project Report (DPR).'],machine:['Machinery & equipment loan','Asset-backed funding secured on the equipment you buy.'],property:['Loan against property (LAP)','Longer tenors and lower rates, secured on commercial or residential property.'],refi:['Refinancing / balance transfer','Move expensive debt to a lower rate, extend maturity or realign repayments.']};
   const g=()=>{const v=document.querySelector('[name=dmn]:checked').value;dmRes.innerHTML=`<span class="eyebrow">Best-fit facility</span><b style="font-family:var(--f-display);font-size:1.1rem">${M[v][0]}</b><span>${M[v][1]}</span>`};dmNeed.addEventListener('change',g);g();
   const ids=['eA','eR2','eT'];const emi=(p,r,n)=>p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
   const f=()=>{ids.forEach(i=>document.getElementById(i+'v').textContent=v7Lbl(document.getElementById(i)));const p=+eA.value*1e7,r=+eR2.value/1200,n=+eT.value*12,e=emi(p,r,n),e2=emi(p,(+eR2.value-1)/1200,n);
   eM.textContent='₹'+Math.round(e).toLocaleString('en-IN');eI.textContent=crf((e*n-p)/1e7);eS.textContent=crf((e-e2)*n/1e7)};ids.forEach(i=>document.getElementById(i).addEventListener('input',f));f()},
 'virtual-cfo-services':()=>{const box=document.getElementById('cfoChk');const f=()=>{const n=box.querySelectorAll('input:checked').length;cfoScore.textContent=n+' / 8';cfoBar.style.width=(n/8*100)+'%';
   cfoRes.innerHTML=n>=7?`<b>Strong finance function.</b><span>A Virtual CFO can focus on strategy, investor reporting and capital raising.</span>`:n>=4?`<b>Good base, clear gaps.</b><span>Typical first 90 days: close the gaps above, starting with cash-flow forecasting and MIS timeliness.</span>`:`<b>Early-stage finance function.</b><span>A Virtual CFO would start with MIS, budgeting and a cash-flow forecast, the foundations lenders and investors expect.</span><a class="btn btn-primary btn-sm" style="justify-self:start" href="#consult" data-jump="consult">Request a consultation</a>`;
   document.querySelectorAll('#cfoRes [data-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('consult').scrollIntoView({behavior:'smooth'})})};box.addEventListener('change',f);f()},
 'mergers-acquisitions':()=>{bindStepper('maSteps',MA_STEPS);const ids=['vE','vL','vH','vD'];const f=()=>{if(+vH.value<+vL.value)vH.value=vL.value;ids.forEach(i=>document.getElementById(i+'v').textContent=v7Lbl(document.getElementById(i)));
   const e=+vE.value,lo=e*+vL.value,hi=e*+vH.value,d=+vD.value,el=lo-d,eh=hi-d;vEV.textContent=crf(lo)+' – '+crf(hi);vEq.textContent=crf(el)+' – '+crf(eh);vMid.textContent=crf((el+eh)/2);
   const mx=Math.max(hi,1);vBar.innerHTML=`<div class="vr-track"><i class="vr-ev" style="left:${lo/mx*100}%;width:${(hi-lo)/mx*100}%"></i></div><div class="vr-lbl"><span>EV ${crf(lo)}</span><span>${crf(hi)}</span></div>`};ids.forEach(i=>document.getElementById(i).addEventListener('input',f));f()},
 'corporate-finance-advisory':()=>{const ids=['hR','hE','hD','hC','hDr','hIn','hCr'];const f=()=>{ids.forEach(i=>document.getElementById(i+'v').textContent=v7Lbl(document.getElementById(i)));
   const R=+hR.value,E=+hE.value,nd=+hD.value-+hC.value,m=E/R*100,lev=E>0?nd/E:Infinity,ccc=+hDr.value+ +hIn.value-+hCr.value;
   const L=(v,g,w)=>v<=g?'good':v<=w?'watch':'act';
   const mL=m>=15?'good':m>=8?'watch':'act',lL=nd<=0?'good':L(lev,2,3.5),cL=L(ccc,60,120);
   const card=(t,v,l,msg)=>`<div class="hc-card hc-${l}"><span>${t}</span><b>${v}</b>${flag(l,{good:'Healthy',watch:'Watch',act:'Act now'}[l])}<small>${msg}</small></div>`;
   hcOut.innerHTML=card('EBITDA margin',m.toFixed(1)+'%',mL,mL==='good'?'Solid operating profitability.':'Review pricing, product mix and overheads.')+
     card('Net debt / EBITDA',nd<=0?'Net cash':(isFinite(lev)?lev.toFixed(1)+'x':'n/a'),lL,lL==='good'?'Comfortable leverage for lenders.':'Lenders may tighten terms; consider equity or refinancing.')+
     card('Cash conversion cycle',ccc+' days',cL,cL==='good'?'Cash returns quickly from operations.':'Working capital is tying up cash; tighten collections and inventory.')};ids.forEach(i=>document.getElementById(i).addEventListener('input',f));f()}};

/* --- aud --- */
const AUD=[['spark','Early-stage businesses','Angel and early venture rounds, pitch decks and the finance basics investors expect.','fund-raising'],['trend','Growth companies','Growth capital, debt and a Virtual CFO to scale with control.','virtual-cfo-services'],['bank','Mid-market enterprises','Debt syndication, capital structure, acquisitions and strategic investors.','debt-advisory'],['bell','Pre-IPO companies','Readiness, governance, restated financials and pre-IPO placements.','ipo-advisory']];

/* --- topics --- */
const TOPICS=['IPO Advisory','Fund Raising','Debt Advisory','Virtual CFO Services','Mergers & Acquisitions','Corporate Finance Advisory','General inquiry'];

/* --- bindContact --- */
function bindContact(){document.querySelectorAll('.topic').forEach(b=>b.onclick=()=>{document.querySelectorAll('.topic').forEach(x=>x.classList.toggle('on',x===b));const sel=document.getElementById('f-contact-subject');if(sel){sel.value=b.dataset.topic==='General inquiry'?'General inquiry':b.dataset.topic;sel.dispatchEvent(new Event('input',{bubbles:true}))}
  document.getElementById('consult').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>document.getElementById('f-contact-fullName')?.focus({preventScroll:true}),450)});
  document.querySelectorAll('.help [data-copy]').forEach(b=>b.onclick=()=>copyText(b.dataset.copy))}
/* ===== Figures: precise, computed SVG charts in a research-report style (no stock imagery) ===== */
const STAGES=['Founding','Early','Growth','Mid-market','Pre-IPO','Listed'];
const SPANS=[['corporate-finance-advisory',0,5],['fund-raising',1,3],['virtual-cfo-services',1,4],['debt-advisory',2,5],['mergers-acquisitions',3,5],['ipo-advisory',4,5]];
let FIGN=0;
const figure=(svg,cap,note='Illustrative')=>`<figure class="fig"><div class="fig-body">${svg}</div><figcaption><b>Figure ${++FIGN}</b><span>${cap}</span>${note?`<em>${note}</em>`:''}</figcaption></figure>`;
const fmt1=v=>(Math.round(v*10)/10).toLocaleString('en-IN',{minimumFractionDigits:1,maximumFractionDigits:1});
const crN=v=>'₹'+(Math.abs(v)>=100?Math.round(v).toLocaleString('en-IN'):fmt1(v))+' Cr';

/* Figure: where practices engage across the capital lifecycle (home hero) */
function lifecycleFig(){
  const W=620,H=430,pl=118,pr=14,top=26,ch=150,cw=(W-pl-pr)/6;
  const xc=i=>pl+cw*i+cw/2, ev=[5,11,24,44,72,100], y=v=>top+ch-(v/100)*ch;
  const line=ev.map((v,i)=>`${i?'L':'M'}${xc(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area=line+` L${xc(5)} ${top+ch} L${xc(0)} ${top+ch} Z`;
  const rowY=i=>top+ch+48+i*30;
  let s=`<svg class="lc" viewBox="0 0 ${W} ${H}" role="img" aria-label="Where Beyondmatrix practices engage across a company's capital lifecycle">`;
  s+=STAGES.map((st,i)=>`<rect class="lc-col" data-i="${i}" x="${pl+cw*i}" y="${top-14}" width="${cw}" height="${H-top-6}"/>`).join('');
  for(let g=0;g<=4;g++){const yy=top+ch*g/4;s+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}"/>`}
  s+=`<text class="ax" x="${pl-12}" y="${top+4}" text-anchor="end">Enterprise</text><text class="ax" x="${pl-12}" y="${top+18}" text-anchor="end">value</text>`;
  s+=`<path class="lc-area" d="${area}"/><path class="lc-line" d="${line}"/>`;
  s+=ev.map((v,i)=>`<circle class="lc-pt" data-i="${i}" cx="${xc(i)}" cy="${y(v)}" r="4.5"/>`).join('');
  s+=STAGES.map((st,i)=>`<text class="lc-st" data-i="${i}" x="${xc(i)}" y="${top+ch+24}" text-anchor="middle">${st}</text>`).join('');
  s+=`<line class="gl strong" x1="${pl}" x2="${W-pr}" y1="${top+ch}" y2="${top+ch}"/>`;
  SPANS.forEach(([slug,a,b],k)=>{const yy=rowY(k);
    s+=`<text class="lc-lbl" x="${pl-12}" y="${yy+5}" text-anchor="end">${SVC[slug].title.replace(' Advisory','').replace('Virtual CFO Services','Virtual CFO').replace('Mergers & Acquisitions','M&A')}</text>`;
    s+=`<line class="lc-track" x1="${pl+6}" x2="${W-pr-6}" y1="${yy}" y2="${yy}"/>`;
    s+=`<a href="#${slug}"><rect class="lc-bar" data-a="${a}" data-b="${b}" x="${pl+cw*a+6}" y="${yy-7}" width="${cw*(b-a+1)-12}" height="14" rx="3"><title>${SVC[slug].title}: ${STAGES[a]} to ${STAGES[b]}</title></rect></a>`});
  s+=STAGES.map((st,i)=>`<rect class="lc-hit" data-i="${i}" x="${pl+cw*i}" y="${top-14}" width="${cw}" height="${H-top-6}" tabindex="0" aria-label="${st} stage"><title>${st}</title></rect>`).join('');
  return s+'</svg>';
}
function bindLifecycle(){
  const svg=document.querySelector('svg.lc');if(!svg)return;const out=document.getElementById('lcOut');
  const show=i=>{svg.setAttribute('data-stage',i);svg.querySelectorAll('.lc-bar').forEach(b=>b.classList.toggle('on',i>=+b.dataset.a&&i<=+b.dataset.b));
    svg.querySelectorAll('.lc-col,.lc-pt,.lc-st').forEach(e=>e.classList.toggle('on',+e.dataset.i===i));
    const list=SPANS.filter(([,a,b])=>i>=a&&i<=b).map(([s])=>`<a href="#${s}">${SVC[s].title}</a>`).join('');
    if(out)out.innerHTML=`<span class="kicker">At the ${STAGES[i]} stage</span><div class="lc-links">${list}</div>`};
  svg.querySelectorAll('.lc-hit').forEach(h=>{const i=+h.dataset.i;h.addEventListener('mouseenter',()=>show(i));h.addEventListener('focus',()=>show(i));h.addEventListener('click',()=>show(i))});
  show(2);
}

/* Practice figures */
const FIGS={
 'ipo-advisory':()=>{const ph=[['Readiness assessment',0,2],['Restatement & governance',1,4.2],['Team & draft offer document',3,6.2],['Regulatory approvals',5,8.2],['Marketing & pricing',7.4,9.2],['Listing',9.2,10]];
   const W=560,H=300,pl=190,pr=16,t=18,rh=40,x=v=>pl+(W-pl-pr)*v/10;
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Indicative sequencing of an IPO programme">`;
   for(let g=0;g<=10;g+=2.5)s+=`<line class="gl" x1="${x(g)}" x2="${x(g)}" y1="${t-6}" y2="${t+rh*6}"/>`;
   ph.forEach(([n,a,b],i)=>{const yy=t+i*rh;s+=`<text class="lbl" x="${pl-12}" y="${yy+22}" text-anchor="end">${n}</text><rect class="${i===5?'s3':'s1'}" x="${x(a)}" y="${yy+10}" width="${x(b)-x(a)}" height="18" rx="3"><title>${n}</title></rect>`});
   s+=`<text class="ax" x="${x(0)}" y="${H-10}">Mandate</text><text class="ax" x="${x(10)}" y="${H-10}" text-anchor="end">Listing day</text>`;
   return s+'</svg>'},
 'fund-raising':()=>{const W=560,H=250,pl=86,pr=16,bw=W-pl-pr,rows=[['Before',[[80,'Founders','s1'],[20,'Other holders','s2']]],['After round',[[64,'Founders','s1'],[16,'Others','s2'],[20,'New investors','s3']]]];
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Ownership before and after a ₹25 crore raise at ₹100 crore pre-money">`;
   rows.forEach(([n,segs],r)=>{const yy=40+r*92;let x0=pl;s+=`<text class="lbl b" x="${pl-12}" y="${yy+27}" text-anchor="end">${n}</text>`;
     segs.forEach(([v,l,c])=>{const w=bw*v/100;s+=`<rect class="${c}" x="${x0}" y="${yy}" width="${w-2}" height="44" rx="3"><title>${l}: ${v}%</title></rect><text class="in" x="${x0+10}" y="${yy+20}">${v}%</text><text class="in sm" x="${x0+10}" y="${yy+36}">${l}</text>`;x0+=w})});
   s+=`<text class="ax" x="${pl}" y="${H-8}">0%</text><text class="ax" x="${W-pr}" y="${H-8}" text-anchor="end">100%</text>`;
   return s+'</svg>'},
 'debt-advisory':()=>{const P=10,n=60,rates=[9,10.5,12];const it=rates.map(r=>{const m=r/1200,e=P*m*Math.pow(1+m,n)/(Math.pow(1+m,n)-1);return e*n-P});
   const W=560,H=290,pl=56,pr=16,t=30,ch=200,mx=Math.ceil(Math.max(...it)/1)*1+0.5,y=v=>t+ch-(v/mx)*ch,bw=88,gap=(W-pl-pr-bw*3)/4;
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Total interest on a ₹10 crore five-year loan at three interest rates">`;
   for(let g=0;g<=Math.floor(mx);g++){s+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${y(g)}" y2="${y(g)}"/><text class="ax" x="${pl-8}" y="${y(g)+4}" text-anchor="end">${g}</text>`}
   it.forEach((v,i)=>{const x=pl+gap+(bw+gap)*i;s+=`<rect class="${i===0?'s1':'s1 dim'}" x="${x}" y="${y(v)}" width="${bw}" height="${t+ch-y(v)}" rx="3"><title>${rates[i]}%: ${crN(v)} interest</title></rect><text class="val" x="${x+bw/2}" y="${y(v)-8}" text-anchor="middle">${crN(v)}</text><text class="lbl b" x="${x+bw/2}" y="${t+ch+20}" text-anchor="middle">${rates[i]}% p.a.</text>`});
   s+=`<text class="ax" x="${pl-8}" y="${t-12}" text-anchor="end">₹ Cr</text><line class="gl strong" x1="${pl}" x2="${W-pr}" y1="${t+ch}" y2="${t+ch}"/>`;
   s+=`<text class="note" x="${W-pr}" y="${t-12}" text-anchor="end">3 points of rate = ${crN(it[2]-it[0])} over 5 years</text>`;
   return s+'</svg>'},
 'virtual-cfo-services':()=>{const bal=[42,38,35,37,31,28,30,24,17,22,27,31,36],min=20,W=560,H=280,pl=48,pr=16,t=24,ch=200,x=i=>pl+(W-pl-pr)*i/12,y=v=>t+ch-(v/50)*ch;
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Thirteen-week cash balance forecast against a minimum cash threshold">`;
   for(let g=0;g<=50;g+=10)s+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${y(g)}" y2="${y(g)}"/><text class="ax" x="${pl-8}" y="${y(g)+4}" text-anchor="end">${g}</text>`;
   const ln=bal.map((v,i)=>`${i?'L':'M'}${x(i)} ${y(v)}`).join(' ');
   s+=`<path class="area1" d="${ln} L${x(12)} ${y(0)} L${x(0)} ${y(0)} Z"/><path class="line1" d="${ln}"/>`;
   s+=`<line class="thr" x1="${pl}" x2="${W-pr}" y1="${y(min)}" y2="${y(min)}"/><text class="note" x="${W-pr}" y="${y(min)-6}" text-anchor="end">Minimum cash ₹20 L</text>`;
   bal.forEach((v,i)=>{s+=`<circle class="${v<min?'pt-bad':'pt'}" cx="${x(i)}" cy="${y(v)}" r="${v<min?5.5:3}"><title>Week ${i+1}: ₹${v} L</title></circle>`});
   s+=`<text class="note bad" x="${x(8)+10}" y="${y(17)+18}">Week 9 shortfall flagged early</text>`;
   [1,4,8,13].forEach(w=>s+=`<text class="ax" x="${x(w-1)}" y="${t+ch+18}" text-anchor="middle">W${w}</text>`);
   s+=`<text class="ax" x="${pl-8}" y="${t-10}" text-anchor="end">₹ L</text>`;
   return s+'</svg>'},
 'mergers-acquisitions':()=>{const ebitda=20,mult=9,ev=ebitda*mult,debt=40,cash=10,eq=ev-debt+cash;const st=[['Enterprise value',0,ev,'s1'],['Less: debt',ev-debt,ev,'s3'],['Plus: cash',ev-debt,ev-debt+cash,'s2'],['Equity value',0,eq,'s1 dk']];
   const W=560,H=290,pl=52,pr=16,t=34,ch=196,mx=200,y=v=>t+ch-(v/mx)*ch,bw=84,gap=(W-pl-pr-bw*4)/5;
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Bridge from enterprise value to equity value">`;
   for(let g=0;g<=200;g+=50)s+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${y(g)}" y2="${y(g)}"/><text class="ax" x="${pl-8}" y="${y(g)+4}" text-anchor="end">${g}</text>`;
   st.forEach(([n,a,b,c],i)=>{const x=pl+gap+(bw+gap)*i,v=b-a;s+=`<rect class="${c}" x="${x}" y="${y(b)}" width="${bw}" height="${y(a)-y(b)}" rx="3"><title>${n}: ${crN(i===1?-v:v)}</title></rect><text class="val" x="${x+bw/2}" y="${y(b)-8}" text-anchor="middle">${i===1?'−':i===2?'+':''}${crN(v)}</text><text class="lbl b" x="${x+bw/2}" y="${t+ch+20}" text-anchor="middle">${n}</text>`;
     if(i<3){const nx=x+bw,ny=y(i===0?ev:i===1?ev-debt:eq);s+=`<line class="conn" x1="${nx}" x2="${nx+gap}" y1="${ny}" y2="${ny}"/>`}});
   s+=`<text class="note" x="${pl}" y="${t-14}">EBITDA ₹${ebitda} Cr × ${mult.toFixed(1)}x EV/EBITDA</text><text class="ax" x="${W-pr}" y="${t-14}" text-anchor="end">₹ Cr</text><line class="gl strong" x1="${pl}" x2="${W-pr}" y1="${t+ch}" y2="${t+ch}"/>`;
   return s+'</svg>'},
 'corporate-finance-advisory':()=>{const tax=0.252,ds=[];for(let d=0;d<=0.7001;d+=0.025)ds.push(+d.toFixed(3));
   const ke=d=>15+9*(d/(1-d))*0.5, kd=d=>(9+8*d*d)*(1-tax), w=d=>(1-d)*ke(d)+d*kd(d);
   let best=ds[0];ds.forEach(d=>{if(w(d)<w(best))best=d});
   const W=560,H=290,pl=46,pr=104,t=20,ch=210,x=d=>pl+(W-pl-pr)*d/0.7,y=v=>t+ch-((v-5)/22)*ch;
   const path=f=>ds.map((d,i)=>`${i?'L':'M'}${x(d).toFixed(1)} ${y(f(d)).toFixed(1)}`).join(' ');
   let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Cost of equity, after-tax cost of debt and weighted average cost of capital as leverage rises">`;
   for(let g=5;g<=27;g+=5)s+=`<line class="gl" x1="${pl}" x2="${W-pr}" y1="${y(g)}" y2="${y(g)}"/><text class="ax" x="${pl-8}" y="${y(g)+4}" text-anchor="end">${g}%</text>`;
   [0,0.2,0.4,0.6].forEach(d=>s+=`<text class="ax" x="${x(d)}" y="${t+ch+18}" text-anchor="middle">${Math.round(d*100)}%</text>`);
   s+=`<text class="ax" x="${(pl+W-pr)/2}" y="${t+ch+38}" text-anchor="middle">Debt share of funding →</text>`;
   s+=`<path class="ln s2" d="${path(ke)}"/><path class="ln s3" d="${path(kd)}"/><path class="ln s1 thick" d="${path(w)}"/>`;
   const end=0.7;s+=`<text class="dl" x="${x(end)+8}" y="${y(ke(end))+4}">Cost of equity</text><text class="dl" x="${x(end)+8}" y="${y(kd(end))}">Cost of debt</text><text class="ax" x="${x(end)+8}" y="${y(kd(end))+14}">(after tax)</text><text class="dl b" x="${x(end)+8}" y="${y(w(end))+4}">WACC</text>`;
   s+=`<line class="thr" x1="${x(best)}" x2="${x(best)}" y1="${y(w(best))}" y2="${t+ch}"/><circle class="pt-key" cx="${x(best)}" cy="${y(w(best))}" r="6"><title>Lowest WACC ${w(best).toFixed(1)}% at ${Math.round(best*100)}% debt</title></circle><text class="note" x="${x(best)}" y="${y(w(best))-14}" text-anchor="middle">Lowest WACC ${w(best).toFixed(1)}%</text>`;
   return s+'</svg>'}};
const FIG_CAP={'ipo-advisory':'Indicative sequencing of an IPO programme, from mandate to listing day','fund-raising':'Ownership before and after a ₹25 Cr raise at ₹100 Cr pre-money valuation','debt-advisory':'Total interest on a ₹10 Cr, 5-year term loan at three interest rates','virtual-cfo-services':'13-week cash-flow forecast: a shortfall is flagged weeks before it happens','mergers-acquisitions':'Bridge from enterprise value to equity value','corporate-finance-advisory':'How leverage changes the cost of capital, and where WACC is lowest'};
/* ===== Signature design elements: ribbon, bento, network, spotlight, reveal ===== */
const RIBBON=[['SME IPO','ipo-advisory'],['Mainboard IPO','ipo-advisory'],['Pre-IPO placement','ipo-advisory'],['Angel & seed','fund-raising'],['Series A to C','fund-raising'],['Private equity','fund-raising'],['Working capital','debt-advisory'],['Term loans','debt-advisory'],['Project finance','debt-advisory'],['Loan against property','debt-advisory'],['MIS & FP&A','virtual-cfo-services'],['Cash-flow management','virtual-cfo-services'],['Buy-side M&A','mergers-acquisitions'],['Sell-side M&A','mergers-acquisitions'],['Business valuation','mergers-acquisitions'],['Capital structure','corporate-finance-advisory'],['Financial modelling','corporate-finance-advisory'],['Restructuring','corporate-finance-advisory']];
const ribbon=()=>{const row=RIBBON.map(([t,s])=>`<a href="#${s}">${t}</a><i aria-hidden="true">/</i>`).join('');
  return `<div class="ribbon" aria-label="Mandate types we advise on"><span class="rb-tag">Mandates</span><div class="rb-view"><div class="rb-track">${row}<span aria-hidden="true" class="rb-dup">${row}</span></div></div></div>`};

const NET_NODES=[['Banks',0],['NBFCs',1],['PE / VC funds',2],['HNIs & family offices',3],['Stock exchanges',4],['Strategic buyers',5]];
function networkSVG(){
  const W=500,H=250,cx=W/2,cy=H/2,rx=135,ry=92;
  let s=`<svg class="net" viewBox="0 0 ${W} ${H}" role="img" aria-label="Beyond Matrix at the centre of banks, NBFCs, PE and VC funds, HNIs, exchanges and strategic buyers">`;
  const pts=NET_NODES.map(([l],i)=>{const a=-Math.PI/2+i*Math.PI*2/NET_NODES.length;return [cx+rx*Math.cos(a),cy+ry*Math.sin(a),l]});
  pts.forEach(([x,y],i)=>{s+=`<line class="net-l" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" style="--i:${i}"/>`});
  pts.forEach(([x,y],i)=>{const n=pts[(i+1)%pts.length];s+=`<line class="net-r" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${n[0].toFixed(1)}" y2="${n[1].toFixed(1)}"/>`});
  pts.forEach(([x,y,l],i)=>{const anc=Math.abs(x-cx)<10?'middle':x>cx?'start':'end',dx=anc==='middle'?0:x>cx?10:-10,dy=Math.abs(x-cx)<10?(y<cy?-12:20):4;
    s+=`<circle class="net-n" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" style="--i:${i}"/><text class="net-t" x="${(x+dx).toFixed(1)}" y="${(y+dy).toFixed(1)}" text-anchor="${anc}">${l}</text>`});
  s+=`<circle class="net-c2" cx="${cx}" cy="${cy}" r="30"/><circle class="net-c" cx="${cx}" cy="${cy}" r="22"/><text class="net-ct" x="${cx}" y="${cy+4}" text-anchor="middle">BM</text>`;
  return s+'</svg>';
}
const bento=()=>`<section class="bento-sec"><div class="wrap">
  ${secHead('','The firm at a glance','Built for decisions that cannot be undone.','How we work, who we work with, and what you can expect from the first call.')}
  <div class="bento">
    <div class="bt bt-a spot rv"><span class="kicker inv">Operating model</span><h3>One senior team, from mandate to closing.</h3><p>The adviser who scopes your mandate stays on it through negotiation, approvals and closing.</p>
      <ol class="bt-track">${['Assess','Structure','Execute','Support'].map((t,i)=>`<li style="--i:${i}"><span>${pad2(i+1)}</span>${t}</li>`).join('')}</ol></div>
    <div class="bt bt-b spot rv"><span class="kicker">Response time</span><b class="bt-big">1</b><span class="bt-unit">business day</span><p>A senior adviser replies to every inquiry.</p></div>
    <div class="bt bt-c spot rv"><span class="bt-ico">${ic('lock')}</span><span class="kicker">Confidential by default</span><p>NDA before data, need-to-know access, and no outreach to investors or buyers without your written approval.</p></div>
    <div class="bt bt-d spot rv"><span class="kicker">Capital network</span><h3>Relationships across the capital stack.</h3>${networkSVG()}</div>
    <div class="bt bt-e spot rv"><span class="kicker">Capital routes compared</span><ul class="routes">${[['Equity','Growth capital, PE/VC, IPO','s1'],['Debt','Working capital, term, project','s2'],['Hybrid','CCDs, CCPS, mezzanine','s3']].map(([t,d,c])=>`<li><i class="${c}"></i><b>${t}</b><small>${d}</small></li>`).join('')}</ul><p>We model every route side by side before recommending one.</p></div>
    <div class="bt bt-f spot rv"><span class="kicker">Sectors</span><div class="chips">${['Manufacturing','Pharma','Infrastructure','Technology'].map(t=>`<span>${t}</span>`).join('')}<span class="more">and more</span></div><p>Promoter-led businesses across India.</p></div>
  </div>
</div></section>`;

function bindTrend(){
  // spotlight follows the pointer on cards
  if(!window.__bmSpot&&matchMedia('(hover:hover)').matches){window.__bmSpot=true;
    document.addEventListener('pointermove',e=>{const el=e.target.closest&&e.target.closest('.spot');if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true})}
  // scroll progress
  const bar=document.getElementById('sprog');
  if(bar){const f=()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?Math.min(1,scrollY/h):0})`};f();window.addEventListener('scroll',f,{passive:true})}
  // reveal on scroll
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const els=document.querySelectorAll('main .sh,main .prow,main .aud-c,main .plist li,main .why4>div,main .kb3>div,main .steps4 li,main .mv2>div,main .rv,main .lc-card,main .studio,main .proc,main .mx-wrap,main .scope,main .tool-blk,main .faq2-r .acc');
  if(reduce||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px'});
  els.forEach((el,i)=>{if(el.getBoundingClientRect().top<innerHeight){el.classList.add('in');return}el.classList.add('rv');el.style.setProperty('--d',((i%4)*70)+'ms');io.observe(el)});
}
const phdLine=()=>{const W=1440,H=120,pts=[];let y=78;for(let i=0;i<=36;i++){y=Math.max(18,Math.min(104,y+Math.sin(i*1.7)*9-1.1+Math.cos(i*.6)*4));pts.push(`${(i*W/36).toFixed(0)},${y.toFixed(1)}`)}
  return `<svg class="phd-line" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts.join(' ')}" pathLength="1"/></svg>`};
/* Toolkit: blue guide band above the closing CTA */
const __tk=P.toolkit;
P.toolkit=()=>__tk().replace('<section class="cta-sec">',`<section class="band band-blue"><div class="wrap">${secHead('','How to use these tools','Three quick ways to frame your requirement.','Each tool takes about a minute. Results stay in your browser and are a starting point for the first conversation.')}
  <div class="aud4 g3">${[['Business loan EMI','Size a facility: see the monthly instalment, total interest and how much a lower rate saves.','emi','Open the calculator'],['IPO readiness self-check','Six questions on scale, governance and reporting give an indicative readiness score.','ipoq','Take the self-check'],['Service finder','Pick your goal and we point you to the practice and team best placed to help.','finder','Find a practice']].map(([t,d,id,l],n)=>`<a class="aud-c spot" href="#toolkit" data-jump="${id}"><span class="aud-n">${pad2(n+1)}</span><h3>${t}</h3><p>${d}</p><span class="lnk">${l} ${ic('arrow')}</span></a>`).join('')}</div></div></section><section class="cta-sec">`);
/* ===== Layout and pages: serious, analytical design ===== */
const SKIN=['#F1C7A5','#D9A47E','#B97E58','#8A5A3C','#E8B48F'];
const HERO_SRC='images/hero-advisers.webp';
const LOGO_SRC={full:'images/logo-full.png',white:'images/logo-full-white.png'};
const pad2=n=>String(n).padStart(2,'0');
const shortT=t=>t.replace('Corporate Finance Advisory','Corporate Finance').replace('Virtual CFO Services','Virtual CFO');

function header(r){
  const svcOn=r==='services'||!!SVC[r];
  const L=(h,t)=>`<a href="#${h}" class="${r===h?'on':''}">${t}</a>`;
  return `<div class="util"><div class="wrap"><span>${ic('mail')}${SITE.email}</span><span class="hide-sm">${ic('pin')}Raylon Arcade, Andheri East, Mumbai 400059</span><span class="hide-md">${ic('clock')}${SITE.hours}</span></div></div>
<header class="site" id="top"><div class="wrap hdr">
  <a class="brand" href="#home" aria-label="Beyond Matrix Capital home"><img src="${LOGO_SRC.full}" alt="Beyond Matrix Capital: Your Partner in Growth & Wealth Creation" width="1392" height="332"></a>
  <nav class="nav" aria-label="Main">
    ${L('home','Home')}${L('about-us','The Firm')}
    <div class="dd ${svcOn?'on':''}" id="dd"><button id="ddb" aria-expanded="false" aria-controls="ddm">Practices ${ic('chev')}</button>
      <div class="mega" id="ddm" hidden><div class="mega-l">${SERVICES.map((s,i)=>`<a href="#${s.slug}"><span class="mn">${pad2(i+1)}</span><span><b>${s.title}</b><small>${s.tag}</small></span></a>`).join('')}</div>
      <div class="mega-r"><span class="kicker">Not sure where to start?</span><p>Answer one question and we will point you to the right practice.</p><a class="lnk" href="#toolkit">Open the service finder ${ic('arrow')}</a><a class="lnk" href="#services">All practices ${ic('arrow')}</a></div></div></div>
    ${L('toolkit','Tools & Analytics')}${L('contact-us','Contact')}
  </nav>
  <a class="btn btn-ink hide-nav" href="#contact-us" data-cta>Request a consultation</a>
  <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">${ic('menu')}</button>
</div><div class="sprog" aria-hidden="true"><i id="sprog"></i></div></header>
<div class="drawer-nav" id="mnav" hidden><div class="dn-top"><img src="${LOGO_SRC.full}" alt="Beyond Matrix Capital" height="44"><button class="icon-btn" id="mclose" aria-label="Close menu">${ic('x')}</button></div>
  <a href="#home">Home</a><a href="#about-us">The Firm</a><a href="#services">Practices</a><div class="dn-sub">${SERVICES.map(s=>`<a href="#${s.slug}">${s.title}</a>`).join('')}</div><a href="#toolkit">Tools & Analytics</a><a href="#contact-us">Contact</a><a href="#admin">Staff login</a>
  <a class="btn btn-ink" href="#contact-us">Request a consultation</a></div>`;
}
function footer(){
  return `<footer class="site"><div class="wrap">
  <div class="f-grid">
    <div class="f-brand"><img src="${LOGO_SRC.white}" alt="Beyond Matrix Capital: Your Partner in Growth & Wealth Creation" width="1392" height="332"><p>${SITE.name} is a corporate finance and investment banking advisory firm helping Indian businesses raise capital, list, borrow and transact with confidence.</p></div>
    <div><h4>Practices</h4><ul>${SERVICES.map(s=>`<li><a href="#${s.slug}">${s.title}</a></li>`).join('')}</ul></div>
    <div><h4>Firm</h4><ul><li><a href="#about-us">About the firm</a></li><li><a href="#services">All practices</a></li><li><a href="#toolkit">Tools & Analytics</a></li><li><a href="#contact-us">Contact</a></li><li><a href="#admin">Staff login</a></li></ul></div>
    <div><h4>Office</h4><ul class="f-office"><li>${SITE.address}</li><li class="mono">${SITE.email}</li><li>${SITE.hours}</li></ul></div>
  </div>
  <div class="f-mark" aria-hidden="true">Beyond Matrix</div>
  <div class="f-bot"><span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span><span class="f-legal"><a href="#privacy-policy">Privacy Policy</a><a href="#terms-and-conditions">Terms & Conditions</a></span></div>
  <p class="f-disc">Information on this website is general in nature and is not financial, legal, investment or tax advice. Calculators and figures are illustrative. Submitting an inquiry does not create an advisory engagement.</p>
</div></footer>`;
}
const pageHead=(crumb,kicker,title,lead,fig='')=>`<section class="phd">${phdLine()}<div class="wrap ${fig?'phd-g':''}"><div class="phd-t"><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span>${crumb}</nav><span class="kicker inv">${kicker}</span><h1>${title}</h1>${lead?`<p class="lead">${lead}</p>`:''}</div>${fig?`<div class="phd-f">${fig}</div>`:''}</div></section>`;
const secHead=(num,kicker,title,lead='')=>`<div class="sh">${num?`<span class="sh-n">${num}</span>`:''}<div class="sh-b"><span class="kicker">${kicker}</span><h2>${title}</h2>${lead?`<p>${lead}</p>`:''}</div></div>`;
const svcHead=(k,t,l)=>secHead('',k,t,l);
const ctaBand=(h='Discuss your next financial decision in confidence',p='Tell us where the business is headed. A senior adviser reviews every inquiry and replies within one business day.')=>`<section class="cta-sec"><div class="wrap"><div class="cta"><div><span class="kicker inv">Next step</span><h2>${h}</h2><p>${p}</p></div><div class="cta-a"><a class="btn btn-white" href="#contact-us">Request a consultation ${ic('arrow')}</a><a class="btn btn-line-inv" href="#toolkit">Use the tools</a></div></div></div></section>`;
const kpiBand=()=>`<section class="kband-sec"><div class="wrap"><div class="kband">${[['12','+','Years of advisory experience'],['₹500',' Cr+','Capital raised for clients'],['100','+','Active client profiles'],['6','','Integrated practice areas']].map(([v,s,l])=>`<div class="kpi-c"><b class="num" data-count="${v.replace(/[^\d]/g,'')}" data-pre="${v.replace(/\d/g,'')}" data-suf="${s}">${v}${s}</b><span>${l}</span></div>`).join('')}</div><p class="src">Figures as published by Beyondmatrix Capital.</p></div></section>`;
const practiceTable=(full)=>`<div class="ptable">${SERVICES.map((s,i)=>`<a class="prow spot" href="#${s.slug}"><span class="prow-n">${pad2(i+1)}</span><div class="prow-t"><h3>${s.title}</h3><small>${s.tag}</small></div><p>${s.short}</p><ul>${s.features.slice(0,full?4:3).map(f=>`<li>${f[0]}</li>`).join('')}</ul><span class="prow-go" aria-hidden="true">${ic('arrow')}</span></a>`).join('')}</div>`;
const faqBlock=(items,title,lead,open=0)=>`<div class="faq2"><div class="faq2-l">${secHead('','Questions',title,lead)}<div class="ask"><span class="kicker inv">Still have a question?</span><b class="mono">${SITE.email}</b><a class="btn btn-white btn-sm" href="#contact-us">Write to us ${ic('arrow')}</a></div></div>
  <div class="faq2-r">${items.map(([q,a,links],i)=>`<div class="acc"><button aria-expanded="${i===open}" aria-controls="facc${i}" id="faccb${i}"><span class="qn">${pad2(i+1)}</span><span class="qt">${q}</span><span class="pm" aria-hidden="true"></span></button><div class="panel" id="facc${i}" role="region" aria-labelledby="faccb${i}" ${i===open?'':'hidden'}><p>${a}</p>${links?`<div class="links">${links.map(s=>`<a class="lnk" href="#${s}">${SVC[s].title} ${ic('arrow')}</a>`).join('')}</div>`:''}</div></div>`).join('')}</div></div>`;
const PRINCIPLES=[['Trusted financial shield','Oversight, regulatory compliance and transaction integrity built into every engagement.'],['Extensive investor reach','Working relationships with institutional investors, banks, NBFCs and lenders.'],['Maximise and retain value','Cash-flow discipline, budgeting and a capital structure that protects owner value.'],['Partner with experts','Investment bankers who stay with you from first equity raise through IPO execution.']];

P.home=()=>{FIGN=0;return `
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
    <img class="cutout" src="${HERO_SRC}" width="1110" height="1038" fetchpriority="high" alt="Two Beyondmatrix advisers reviewing a plan on a tablet">
    <span class="bubble b1" data-depth="-24">${ic('doc')}</span><span class="bubble b2" data-depth="-18"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="13" fill="none" stroke="#E3E8FF" stroke-width="6"/><circle cx="18" cy="18" r="13" fill="none" stroke="#2D4BD8" stroke-width="6" stroke-dasharray="58 82" transform="rotate(-90 18 18)"/></svg></span><span class="bubble b3" data-depth="-28">${ic('gauge')}</span>
    <div class="glass gl1" data-depth="-16"><span class="g-ico">${ic('trend')}</span><div><small>Capital raised for clients</small><b>₹500 Cr+</b></div><svg class="spark" viewBox="0 0 80 28" aria-hidden="true"><path d="M2 24 L14 20 L26 22 L38 14 L50 16 L62 8 L78 4" fill="none" stroke="#7CE3A6" stroke-width="2.4" stroke-linecap="round"/></svg></div>
    <div class="glass gl2" data-depth="-22"><span class="g-ico">${ic('shield')}</span><div><small>Practice areas</small><b>6 integrated</b></div></div>
  </div>
</div></div></section>
${ribbon()}
${kpiBand()}
<section class="lc-sec"><div class="wrap lc-g">
  <div class="lc-copy">${secHead('','Capital lifecycle','Where we engage, stage by stage.','Every company passes through the same capital stages. Hover or tap a stage to see which practices apply, then open the one that fits.')}<div class="lc-out" id="lcOut" aria-live="polite"></div></div>
  <div class="lc-card">${figure(lifecycleFig(),'Where our practices engage across a company\'s capital lifecycle. Hover a stage.')}</div>
</div></section>
${bento()}
<section><div class="wrap">${secHead('01','Practices','Six practices. One accountable team.','Each practice is led by specialists and connected to the others, so a fundraise, a loan and a listing can be planned as one programme.')}${practiceTable(false)}</div></section>
<section class="band band-blue"><div class="wrap">${secHead('02','Who we advise','Advice matched to the stage of the business.','')}
  <div class="aud4">${AUD.map(([i,t,d,s],n)=>`<a class="aud-c spot" href="#${s}"><span class="aud-n">${pad2(n+1)}</span><h3>${t}</h3><p>${d}</p><span class="lnk">Start with ${SVC[s].title} ${ic('arrow')}</span></a>`).join('')}</div></div></section>
${studioHTML()}
${processHTML()}
<section><div class="wrap pr-g">
  <div>${secHead('03','Principles','Four commitments behind every mandate.','')}<blockquote class="pq">“Integrity in advice and excellence in execution are the foundations of true enterprise value.”</blockquote></div>
  <ol class="plist">${PRINCIPLES.map(([t,d],i)=>`<li><span class="pl-n">${pad2(i+1)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
</div></section>
<section class="alt"><div class="wrap">${faqBlock(FAQ_HOME,'Answers to common questions.','Straight answers about how we work.')}</div></section>
${ctaBand()}`};

P['about-us']=()=>{FIGN=0;return `${pageHead('<span>The Firm</span>','About Beyondmatrix','A corporate finance partner for growing Indian businesses.','A Mumbai-based corporate finance and investment banking advisory firm connecting growing companies with institutional capital.')}
${kpiBand()}
<section><div class="wrap ov-g">
  <div>${secHead('01','Overview','Bridging growing companies with institutional capital.','')}
    <div class="prose"><p>Beyondmatrix Capital Private Limited is a corporate finance and advisory firm that helps businesses raise growth capital, improve financial performance and expand sustainably. We work with entrepreneurs and enterprises at every stage, from early-stage businesses to mid-market companies preparing for an IPO.</p><p>Our team brings together capital markets, credit, valuation and CFO experience, so advice in one area is always informed by the others.</p></div>
    <blockquote class="pq sm">“We partner with ambitious businesses to raise capital, optimise performance, and unlock long-term enterprise value.”</blockquote></div>
  <aside class="factsheet"><span class="kicker">Fact sheet</span><table>${[['Legal name',SITE.name],['Headquarters','Raylon Arcade, J.B. Nagar, Andheri East, Mumbai 400059'],['Practices','IPO · Fund Raising · Debt · Virtual CFO · M&A · Corporate Finance'],['Experience','12+ years'],['Capital raised','₹500 Cr+'],['Active client profiles','100+'],['Contact',SITE.email]].map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table></aside>
</div></section>
<section class="band band-deep"><div class="wrap">${secHead('02','Purpose','Mission and vision.','')}
  <div class="mv2"><div><span class="kicker">Mission</span><h3>To empower businesses with tailored financial solutions, right-fit capital and strategic advisory.</h3><p>We match each company with the funding route, partner and structure that fits its stage, not the one that is easiest to sell.</p></div>
  <div><span class="kicker">Vision</span><h3>To be a highly trusted strategic financial partner for growing businesses.</h3><p>Known for integrity and long-term value creation.</p></div></div></div></section>
<section><div class="wrap pr-g">
  <div>${secHead('03','Core values','What drives us forward.','')}<blockquote class="pq">“Integrity in advice and excellence in execution are the foundations of true enterprise value.”</blockquote></div>
  <ol class="plist">${[['Integrity and transparency','Honest, transparent advice at every stage of a deal.'],['Client-first execution','Strategies aligned to your long-term goals.'],['Deep market access','Relationships with investors, lenders and regulators.'],['End-to-end ownership','From preparation through post-transaction integration.']].map(([t,d],i)=>`<li><span class="pl-n">${pad2(i+1)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
</div></section>
<section class="band band-blue"><div class="wrap">${secHead('04','Who we advise','Advice matched to the stage of the business.','')}
  <div class="aud4">${AUD.map(([i,t,d,s],n)=>`<a class="aud-c spot" href="#${s}"><span class="aud-n">${pad2(n+1)}</span><h3>${t}</h3><p>${d}</p><span class="lnk">Start with ${SVC[s].title} ${ic('arrow')}</span></a>`).join('')}</div></div></section>
<section><div class="wrap">${secHead('05','Why Beyondmatrix','Four reasons clients choose us.','')}
  <div class="why4 cards">${[['Experienced professionals','Corporate finance and investment banking experience in one team.'],['Tailored, end to end','Solutions built around you, with support through the full transaction.'],['Strong network','Relationships with investors, banks, NBFCs and financial institutions.'],['Integrity and confidentiality','Transparency in advice and discretion with every detail you share.']].map(([t,d],i)=>`<div><span class="pl-n">${pad2(i+1)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
${processHTML()}
${ctaBand('Let\'s talk about your growth plans.')}`};

const MATRIX=()=>`<div class="mx-wrap"><table class="mx" id="mx"><thead><tr><th>Practice</th>${STAGES.map((s,i)=>`<th data-c="${i}">${s}</th>`).join('')}</tr></thead><tbody>${SPANS.slice().sort((a,b)=>SERVICES.findIndex(s=>s.slug===a[0])-SERVICES.findIndex(s=>s.slug===b[0])).map(([slug,a,b])=>`<tr><th><a href="#${slug}">${SVC[slug].title}</a></th>${STAGES.map((st,i)=>`<td data-c="${i}">${i>=a&&i<=b?`<span class="dot" title="${SVC[slug].title}: relevant at ${st}"></span>`:'<span class="dash"></span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function bindMatrix(){const t=document.getElementById('mx');if(!t)return;t.querySelectorAll('td,th[data-c]').forEach(c=>{c.onmouseenter=()=>{const i=c.dataset.c;t.querySelectorAll('[data-c]').forEach(e=>e.classList.toggle('mxh',e.dataset.c===i));c.parentElement.classList.add('hr')};c.onmouseleave=()=>{t.querySelectorAll('.mxh').forEach(e=>e.classList.remove('mxh'));c.parentElement.classList.remove('hr')}})}

P.services=()=>{FIGN=0;return `${pageHead('<span>Practices</span>','Practices','Comprehensive corporate finance and advisory solutions.','Six integrated practices covering capital raising, listing, lending, transactions and finance leadership.')}
${ribbon()}
${kpiBand()}
<section><div class="wrap">${secHead('01','All practices','What we offer.','Select a practice for scope, interactive analysis and a consultation form.')}${practiceTable(true)}</div></section>
<section class="band band-blue"><div class="wrap">${secHead('02','Who we advise','Advice matched to the stage of the business.','Find the stage closest to yours and start with the practice that fits it.')}
  <div class="aud4">${AUD.map(([i,t,d,sl],n)=>`<a class="aud-c spot" href="#${sl}"><span class="aud-n">${pad2(n+1)}</span><h3>${t}</h3><p>${d}</p><span class="lnk">Start with ${SVC[sl].title} ${ic('arrow')}</span></a>`).join('')}</div></div></section>
<section class="alt"><div class="wrap">${secHead('03','Coverage','Practice relevance by company stage.','Read across a row to see where a practice applies; hover to highlight a stage.')}${MATRIX()}<p class="src">Indicative. Every mandate is scoped individually.</p></div></section>
<section><div class="wrap">${faqBlock(NEEDS,'Start from your business need.','Pick the question closest to your situation.')}</div></section>
${processHTML()}
${ctaBand()}`};

function servicePage(s){
  FIGN=0;
  const faq=[[`How does ${/^[AEIOU]/.test(s.title)?'an':'a'} ${s.title} engagement start?`,'With a confidential call to understand your objectives. Where needed we sign an NDA, then share a scoped proposal with fees before any work begins.'],['What should I prepare for the first call?','Your last two or three years of financial statements, a short business overview and your objectives. We will tell you what else is useful after the first call.'],['How are fees structured?','Usually a fixed component plus a success-linked component, agreed in writing before work begins.'],['Is submitting the form a commitment?','No. It only starts a conversation. An engagement begins when both sides sign a written mandate.']];
  const nav=[['sv-ov','Overview'],['sv-sc','Scope'],['sv-tl','Analysis'],['sv-kb','Outcomes'],['sv-pr','Process'],['sv-fq','FAQ']];
  const idx=SERVICES.indexOf(s);
  return `${pageHead(`<a href="#services">Practices</a><span>/</span><span>${s.title}</span>`,`Practice ${pad2(idx+1)} · ${s.tag}`,s.title,s.tagline,figure(FIGS[s.slug](),FIG_CAP[s.slug]))}
<section class="svc-sec"><div class="wrap svc-g">
  <div class="svc-m">
    <nav class="subnav" aria-label="On this page">${nav.map(([id,l],i)=>`<button data-jump="${id}" class="${i===0?'on':''}">${l}</button>`).join('')}</nav>
    <div id="sv-ov" class="blk"><span class="kicker">Overview</span><h2>${s.title} at Beyondmatrix</h2><p class="lead">${s.overview}</p>
      <ul class="ticks">${s.benefits.map(b=>`<li>${ic('check')}${b}</li>`).join('')}</ul></div>
    <div id="sv-sc" class="blk"><span class="kicker">Scope of work</span><h2>What the mandate covers</h2>
      <div class="scope"><table><thead><tr><th>#</th><th>Capability</th><th>What it covers</th></tr></thead><tbody>${s.features.map(([t,d],n)=>`<tr><td class="mono">${pad2(n+1)}</td><th>${t}</th><td>${d}</td></tr>`).join('')}</tbody></table></div></div>
    <div id="sv-tl" class="blk tool-blk"><span class="kicker">Interactive analysis</span><h2>${s.tool}</h2>${TOOLS[s.slug]()}</div>
    <div id="sv-kb" class="blk bpanel"><span class="kicker">Key benefits</span><h2>Outcomes we work toward</h2><div class="kb3">${s.keyBenefits.map(([t,d],i)=>`<div><span class="pl-n">${pad2(i+1)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div>
    <div id="sv-pr" class="blk"><span class="kicker">Engagement process</span><h2>Four stages, one accountable team</h2><ol class="steps4">${[['Assess','Understand the business, the numbers and the goal.'],['Structure','Design the route, terms and timeline.'],['Execute','Prepare documents, run outreach, negotiate.'],['Support','Close, comply and keep improving.']].map(([t,d],i)=>`<li><span>${pad2(i+1)}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol></div>
    <div id="sv-fq" class="blk"><span class="kicker">Questions</span><h2>Frequently asked</h2>${faq.map(([q,a],i)=>`<div class="acc"><button aria-expanded="false" aria-controls="sacc${i}" id="saccb${i}"><span class="qt">${q}</span><span class="pm" aria-hidden="true"></span></button><div class="panel" id="sacc${i}" role="region" aria-labelledby="saccb${i}" hidden><p>${a}</p></div></div>`).join('')}</div>
  </div>
  <aside class="svc-a" id="consult">${formHTML(s.slug,s.fields,`Request ${/^[AEIOU]/.test(s.title)?'an':'a'} ${s.title} consultation`,'A senior adviser replies within one business day.',s.note)}</aside>
</div></section>
<section class="band band-blue"><div class="wrap">${secHead('','Related practices','Often planned alongside this mandate.','Capital decisions rarely stand alone. These practices are most often combined with this one.')}<div class="aud4 g3">${SERVICES.filter(x=>x.slug!==s.slug).slice(0,3).map(x=>`<a class="aud-c spot" href="#${x.slug}"><span class="aud-n">${pad2(SERVICES.indexOf(x)+1)}</span><h3>${x.title}</h3><p>${x.short}</p><span class="lnk">View practice ${ic('arrow')}</span></a>`).join('')}</div></div></section>
${ctaBand(`Ready to discuss your ${s.title} mandate?`,'Schedule a confidential consultation. A senior adviser replies within one business day.')}`;
}

P['contact-us']=()=>{FIGN=0;return `${pageHead('<span>Contact</span>','Contact','Strategic advisory hub in Mumbai.','Headquartered at Raylon Arcade in the J.B. Nagar business corridor, Andheri East. Write to us, visit, or send an inquiry below.')}
<section><div class="wrap ct-g">
  <div class="ct-l">
    <div class="help"><div><span class="kicker inv">Our helpline</span><p>Questions about raising capital, IPOs or loans? Email us and a senior adviser will reply within one business day.</p><b class="mono help-mail">${SITE.email}</b></div><button class="btn btn-white btn-sm" data-copy="${SITE.email}">Copy email</button></div>
    <div><span class="kicker">What would you like to discuss?</span><div class="topics">${TOPICS.map(t=>`<button class="topic" data-topic="${t}">${t}</button>`).join('')}</div></div>
    <table class="office"><tbody>${[['Office',SITE.address+`<div class="o-act"><button class="lnk" data-copy="${SITE.address}">Copy address</button><a class="lnk" href="https://www.google.com/maps/search/?api=1&query=Raylon+Arcade+Kondivita+Andheri+East+Mumbai" target="_blank" rel="noopener">Get directions ${ic('arrow')}</a></div>`],['Email',`<span class="mono">${SITE.email}</span>`],['Hours',SITE.hours],['Response','Within one business day']].map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</tbody></table>
    <div class="bpanel"><span class="kicker">What happens next</span><ol class="steps3">${[['Inquiry received','You get a reference number straight away.'],['Adviser call','A senior adviser calls within one business day.'],['Scoped proposal','If there is a fit, you receive scope and fees in writing.']].map(([t,d],i)=>`<li><span>${pad2(i+1)}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol></div>
  </div>
  <aside id="consult">${formHTML('contact',CONTACT_FIELDS,'Send us a message','We usually reply within one business day.')}</aside>
</div></section>
<section class="band band-blue"><div class="wrap">${secHead('','How we can help','Six practices, one senior team.','Not sure which to choose? Pick the closest match, or simply describe your situation in the form above.')}<div class="aud4 g3">${SERVICES.map(x=>`<a class="aud-c spot" href="#${x.slug}"><span class="aud-n">${pad2(SERVICES.indexOf(x)+1)}</span><h3>${x.title}</h3><p>${x.short}</p><span class="lnk">View practice ${ic('arrow')}</span></a>`).join('')}</div></div></section>`};

function legal(title,crumb,sections){FIGN=0;
  return `${pageHead(`<span>${crumb}</span>`,'Legal',title,`Effective and last updated: ${SITE.policyDate}`)}
  <section><div class="wrap legal"><aside aria-label="On this page"><span class="kicker">Contents</span>${sections.map((s,i)=>`<a href="#lg${i}" data-jump="lg${i}"><span class="mono">${pad2(i+1)}</span>${s[0]}</a>`).join('')}</aside><article>${sections.map((s,i)=>`<h2 id="lg${i}"><span class="mono">${pad2(i+1)}</span>${s[0]}</h2>${s[1]}`).join('')}</article></div></section>`;
}
P.notfound=()=>`<section class="nf"><div class="wrap"><span class="mono nf-code">404</span><h1>This page is not on our books.</h1><p class="lead">The link may be outdated or mistyped.</p><div class="actions"><a class="btn btn-ink" href="#home">Go to home</a><a class="btn btn-line" href="#services">View practices</a></div></div></section>`;
/* ===== Additions drawn from the firm's reference design: capital stack, leadership, sectors, who-it-is-for ===== */
const LINKEDIN='https://www.linkedin.com/company/beyondmatrix-capital-private-limited/';
const TEAM=[['VJ','CA Vijay Jaju','Founder · Chartered Accountant','Leads corporate finance, IPO and fundraising mandates.'],['RJ','Rahul Jaju','Director','Leads client relationships and transaction execution.'],['+','Advisory team','CAs · Analysts · Bankers','Financial modelling, diligence, documentation and MIS.']];
const SECTORS=['Manufacturing','Infrastructure & EPC','Real estate','Healthcare & pharma','FMCG & consumer','Textiles','Chemicals','Logistics','Technology & SaaS','Renewable energy','Hospitality','Trading & distribution'];
const WHO_FOR={'ipo-advisory':['Profitable companies planning to list in 1 to 3 years','Promoters wanting liquidity and a stronger brand','Businesses needing large, long-term growth capital'],
 'fund-raising':['Growth-stage companies raising ₹5 to 200 crore','Promoters seeking a strategic or financial partner','Companies planning a pre-IPO round'],
 'debt-advisory':['Companies expanding capacity or entering new markets','Businesses paying above-market interest rates','Promoters needing finance against receivables or assets'],
 'virtual-cfo-services':['Companies with ₹10 to 250 crore turnover','Founders spending too much time on finance','Businesses preparing for a raise or listing'],
 'mergers-acquisitions':['Promoters planning an exit or partial sale','Companies growing through acquisition','Family groups restructuring holdings'],
 'corporate-finance-advisory':['Boards planning the next three to five years','Companies weighing equity against debt','Promoters planning succession or reorganisation']};
FAQ_HOME.push(['What size of company do you work with?','Mostly growing private companies, from early-growth businesses raising their first institutional round to mid-market enterprises preparing for a listing. If you are unsure, a first conversation will tell us both quickly.'],
 ['How long does an SME IPO take?','Usually 6 to 12 months from appointment to listing for a company whose financials and governance are already in order. Restating accounts, converting to a public limited company or fixing compliance gaps adds time, which is why we start with a readiness review.',['ipo-advisory']],
 ['Do you only work with companies in Mumbai?','No. We are based in Andheri East, Mumbai, and work with companies across India, meeting in person where it helps and online otherwise.']);
const FEES_A='Fundraising and IPO mandates usually combine a fixed retainer with a success fee linked to closing. Virtual CFO services are a fixed monthly fee based on scope. Everything is agreed in writing before work starts.';
FAQ_HOME.forEach(f=>{if(/fees structured/i.test(f[0]))f[1]=FEES_A});

const capitalStack=()=>`<div class="cstack" aria-label="Illustrative capital plan">
  <div class="cs-head"><b>An illustrative capital plan</b><span class="mono">₹ crore</span></div>
  <div class="cs-layers">
    <a class="cs-l cs-ipo" href="#ipo-advisory"><div><b>SME / Mainboard IPO</b><small>Listing in 24 to 36 months</small></div><span class="mono">Next stage</span></a>
    <a class="cs-l cs-eq" href="#fund-raising" style="--w:100%"><div><b>Growth equity</b><small>PE / family office round</small></div><span class="mono">40.00</span></a>
    <a class="cs-l cs-mez" href="#corporate-finance-advisory"><div><b>Structured / mezzanine</b><small>NCDs, convertible instruments</small></div><span class="mono">15.00</span></a>
    <a class="cs-l cs-debt" href="#debt-advisory"><div><b>Senior debt</b><small>Term loan and working capital</small></div><span class="mono">25.00</span></a>
  </div>
  <div class="cs-bar" aria-hidden="true"><i class="s-eq" style="width:50%"></i><i class="s-mez" style="width:18.75%"></i><i class="s-debt" style="width:31.25%"></i></div>
  <div class="cs-leg"><span><i class="s-eq"></i>Equity 50%</span><span><i class="s-mez"></i>Mezzanine 19%</span><span><i class="s-debt"></i>Debt 31%</span></div>
  <p class="cs-foot">Example only. Every plan we build starts from your cash flows, not a template.</p>
</div>`;
const stackSection=()=>`<section class="stack-sec"><div class="wrap stack-g">
  <div class="stack-copy">${secHead('','Capital planning','Capital, structured for the next stage of your business.','Most clients start with one need and stay for the next. A company that raises debt today is often preparing for equity or a listing tomorrow, so we plan the whole stack, not one layer.')}
    <ul class="trust"><li>Led by Chartered Accountants</li><li>Institutional investor and lender network</li><li>Strict confidentiality on every mandate</li></ul>
    <a class="btn btn-ink" href="#contact-us">Plan your capital stack ${ic('arrow')}</a></div>
  ${capitalStack()}
</div></section>`;
const leadership=()=>`<section><div class="wrap">${secHead('','Leadership','The people on your mandate.','Senior professionals lead every engagement personally, from the first meeting to closing.')}
  <div class="team">${TEAM.map(([i,n,r,d])=>`<div class="person spot"><span class="avatar">${i}</span><div><h3>${n}</h3><span class="role">${r}</span><p>${d}</p></div></div>`).join('')}</div></div></section>`;
const sectorsSec=()=>`<section class="band band-blue"><div class="wrap sec-split">${secHead('','Sectors','Industries we work with.','Our advice is shaped by how each sector earns and spends: its working-capital cycle, its asset base and what investors look for.')}
  <div class="chips-lg">${SECTORS.map((t,i)=>`<span style="--i:${i}">${t}</span>`).join('')}</div></div></section>`;

/* wire into pages */
(()=>{
  const home=P.home;P.home=()=>home().replace('<section class="bento-sec">',stackSection()+'<section class="bento-sec">');
  const about=P['about-us'];P['about-us']=()=>{let h=about();
    h=h.replace(/<section class="band band-blue"><div class="wrap">(<div class="sh">.*?Who we advise)/s,leadership()+'<section class="band band-blue"><div class="wrap">$1');
    const i=h.indexOf(leadership());return i>0?h.slice(0,i)+sectorsSec()+h.slice(i):h};
  const sp=servicePage;servicePage=s=>{let h=sp(s);
    const who=`<div id="sv-wf" class="blk"><span class="kicker">Who it is for</span><h2>Best suited to</h2><ul class="wf">${(WHO_FOR[s.slug]||[]).map((t,i)=>`<li><span class="mono">${pad2(i+1)}</span>${t}</li>`).join('')}</ul></div>`;
    h=h.replace('<div id="sv-tl"',who+'\n    <div id="sv-tl"');
    h=h.replace('Usually a fixed component plus a success-linked component, agreed in writing before work begins.',FEES_A);
    return h};
  const ct=P['contact-us'];P['contact-us']=()=>ct().replace('<tr><th>Hours</th>',`<tr><th>LinkedIn</th><td><a href="${LINKEDIN}" target="_blank" rel="noopener">Beyondmatrix Capital on LinkedIn ${ic('arrow')}</a></td></tr><tr><th>Hours</th>`);
  const ft=footer;footer=()=>ft().replace(/(<ul class="f-office">.*?)(<\/ul>)/s,`$1<li><a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn ↗</a></li>$2`);
})();

/* ===== Service pages: split "Get in touch" card in place of the sidebar form (contact page: 38-contact.js) ===== */
function gtSvc(s){
  let f=formHTML(s.slug,s.fields,'Get in touch',`Request ${/^[AEIOU]/.test(s.title)?'an':'a'} ${s.title} consultation. We reply within one business day.`,s.note);
  f=f.replace('<div class="form-card">','<div class="gt-form">').replace('<div class="form-head">','<div class="gt-head">')
     .replace(/Submit inquiry /,'Send ').replace('class="btn btn-primary" type="submit"','class="btn gt-send" type="submit"');
  return `<section class="gt-sec svc-gt" id="consult"><div class="wrap"><div class="gt">
  <div class="gt-side">
    <span class="gt-shape s1" aria-hidden="true"></span><span class="gt-shape s2" aria-hidden="true"></span><span class="gt-shape s3" aria-hidden="true"></span>
    <div class="gt-side-in">
      <span class="kicker inv">${s.title} · Consultation</span>
      <h2>Discuss your ${s.title} mandate.</h2>
      <p>${s.tagline}</p>
      <div class="gt-list"><span class="gt-lh">What you can expect</span><ul>${s.benefits.slice(0,4).map(t=>`<li>${ic('check')}<span>${t}</span></li>`).join('')}</ul></div>
      <div class="gt-meta"><div><small>Email</small><b class="mono">${SITE.email}</b></div><div><small>Response</small><b>Within one business day</b></div></div>
    </div>
  </div>
  ${f}
</div></div></section>`;
}
(()=>{
  const sp=servicePage;servicePage=s=>{let h=sp(s);const a=h.indexOf('<aside class="svc-a" id="consult">');
    if(a>=0){const b=h.indexOf('</aside>',a);h=h.slice(0,a)+h.slice(b+8)}
    h=h.replace('<div class="wrap svc-g">','<div class="wrap svc-g svc-wide">');
    const i=h.indexOf('<section class="band band-blue">');
    return i>0?h.slice(0,i)+gtSvc(s)+h.slice(i):h+gtSvc(s)};
})();
/* ===== Contact: split "Get in touch" card (blue panel + navy form) ===== */
CONTACT_FIELDS.length=0;
CONTACT_FIELDS.push({n:'firstName',l:'First name',t:'text',req:1,half:1,ac:'given-name',ph:'Enter your first name'},{n:'lastName',l:'Last name',t:'text',req:1,half:1,ac:'family-name',ph:'Enter your last name'},
 {n:'email',l:'Email',t:'email',req:1,half:1,ac:'email',ph:'name@company.in'},{n:'phone',l:'Phone number',t:'tel',half:1,ac:'tel',ph:'+91 98XXX XXXXX'},
 {n:'company',l:'Company name',t:'text',ac:'organization',ph:'Enter your company name'},
 {n:'subject',l:'What would you like to discuss?',t:'select',req:1,o:['General inquiry','IPO Advisory','Fund Raising','Debt Advisory','Virtual CFO Services','Mergers & Acquisitions','Corporate Finance Advisory','Media / partnerships']},
 {n:'message',l:'Add comments',t:'textarea',req:1,max:1500,ph:'Briefly describe your requirement, e.g. raising ₹25 crore growth capital for a new plant.'});
function gtCard(){
  let f=formHTML('contact',CONTACT_FIELDS,'Get in touch','We will get back to you within one business day.');
  f=f.replace('<div class="form-card">','<div class="gt-form">').replace('<div class="form-head">','<div class="gt-head">')
     .replace(/Submit inquiry /,'Send ').replace('class="btn btn-primary" type="submit"','class="btn gt-send" type="submit"');
  return `<section class="gt-sec" id="consult"><div class="wrap"><div class="gt">
  <div class="gt-side">
    <span class="gt-shape s1" aria-hidden="true"></span><span class="gt-shape s2" aria-hidden="true"></span><span class="gt-shape s3" aria-hidden="true"></span>
    <div class="gt-side-in">
      <span class="kicker inv">Beyond Matrix Capital</span>
      <h2>One partner for capital, listing and growth.</h2>
      <p>Raise capital, borrow better, list with confidence and run finance with discipline, with one senior team from first call to closing.</p>
      <div class="gt-list"><span class="gt-lh">Our practices</span><ul>${SERVICES.map(s=>`<li>${ic('check')}<a href="#${s.slug}">${s.title}</a></li>`).join('')}</ul></div>
      <div class="gt-meta"><div><small>Email</small><b class="mono">${SITE.email}</b></div><div><small>Response</small><b>Within one business day</b></div></div>
    </div>
  </div>
  ${f}
</div></div></section>`;
}
P['contact-us']=()=>{FIGN=0;return `${pageHead('<span>Contact</span>','Contact','Strategic advisory hub in Mumbai.','Headquartered at Raylon Arcade in the J.B. Nagar business corridor, Andheri East. Write to us, visit, or send an inquiry below.')}
${gtCard()}
<section class="ct2-sec"><div class="wrap ct2">
  <div class="ct-l">
    <div class="help"><div><span class="kicker inv">Our helpline</span><p>Questions about raising capital, IPOs or loans? Email us and a senior adviser will reply within one business day.</p><b class="mono help-mail">${SITE.email}</b></div><button class="btn btn-white btn-sm" data-copy="${SITE.email}">Copy email</button></div>
    <div><span class="kicker">Quick topics</span><div class="topics">${TOPICS.map(t=>`<button class="topic" data-topic="${t}">${t}</button>`).join('')}</div></div>
  </div>
  <table class="office"><tbody>${[['Office',SITE.address+`<div class="o-act"><button class="lnk" data-copy="${SITE.address}">Copy address</button><a class="lnk" href="https://www.google.com/maps/search/?api=1&query=Raylon+Arcade+Kondivita+Andheri+East+Mumbai" target="_blank" rel="noopener">Get directions ${ic('arrow')}</a></div>`],['Email',`<span class="mono">${SITE.email}</span>`],['LinkedIn',`<a href="${LINKEDIN}" target="_blank" rel="noopener">Beyondmatrix Capital on LinkedIn ${ic('arrow')}</a>`],['Hours',SITE.hours],['Response','Within one business day']].map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</tbody></table>
</div>
<div class="wrap"><div class="bpanel ct-next"><span class="kicker">What happens next</span><ol class="steps3">${[['Inquiry received','You get a reference number straight away.'],['Adviser call','A senior adviser calls within one business day.'],['Scoped proposal','If there is a fit, you receive scope and fees in writing.']].map(([t,d],i)=>`<li><span>${pad2(i+1)}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol></div></div></section>
<section class="band band-blue"><div class="wrap">${secHead('','How we can help','Six practices, one senior team.','Not sure which to choose? Pick the closest match, or simply describe your situation in the form above.')}<div class="aud4 g3">${SERVICES.map(x=>`<a class="aud-c spot" href="#${x.slug}"><span class="aud-n">${pad2(SERVICES.indexOf(x)+1)}</span><h3>${x.title}</h3><p>${x.short}</p><span class="lnk">View practice ${ic('arrow')}</span></a>`).join('')}</div></div></section>`};
const __bc=bindContact;bindContact=function(){__bc();document.querySelectorAll('.topic').forEach(b=>{const o=b.onclick;b.onclick=()=>{o&&o();setTimeout(()=>document.getElementById('f-contact-firstName')?.focus({preventScroll:true}),460)}})};
/* ===== Router and behaviour ===== */
const app=document.getElementById('app');
const ROUTES=['home','about-us','services','contact-us','privacy-policy','terms-and-conditions','toolkit','admin',...SERVICES.map(s=>s.slug)];
const TITLES={home:'Corporate Finance & Investment Banking Advisory','about-us':'About the Firm',services:'Practices','contact-us':'Contact','privacy-policy':'Privacy Policy','terms-and-conditions':'Terms & Conditions',toolkit:'Tools & Analytics',admin:'Staff Console'};
function route(){return (location.hash||'#home').slice(1).split('/')[0]||'home'}
function render(keepScroll){
  const r=route();const known=ROUTES.includes(r);let body;
  try{FIGN=0;body=!known?P.notfound():SVC[r]?servicePage(SVC[r]):P[r]()}
  catch(e){console.error(e);body=`<section class="nf"><div class="wrap"><span class="mono nf-code">Error</span><h1>Something went wrong loading this page.</h1><p class="lead">Reload the page, or go back home. If it keeps happening, email ${SITE.email}.</p><div class="actions"><a class="btn btn-ink" href="#home">Go to home</a></div></div></section>`}
  app.innerHTML=r==='admin'?header(r)+body:header(r)+'<main id="main">'+body+'</main>'+footer();
  document.title=`${known?(SVC[r]?.title||TITLES[r]):'Page not found'} | Beyond Matrix Capital`;
  if(!keepScroll)window.scrollTo(0,0);
  bind(r);
}
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h.startsWith('lg'))return;render()});

function bindNav(){
  const dd=document.getElementById('dd'),b=document.getElementById('ddb'),m=document.getElementById('ddm');
  if(dd&&b&&m){
    const hov=matchMedia('(hover:hover) and (pointer:fine)').matches;let timer=null,hoverAt=0;
    const set=v=>{m.hidden=!v;dd.classList.toggle('open',v);b.setAttribute('aria-expanded',String(v))};
    dd.onmouseenter=()=>{if(!hov)return;clearTimeout(timer);if(m.hidden){set(true);hoverAt=Date.now()}};
    dd.onmouseleave=()=>{if(!hov)return;clearTimeout(timer);timer=setTimeout(()=>set(false),280)};
    b.onclick=e=>{e.preventDefault();e.stopPropagation();if(!m.hidden&&Date.now()-hoverAt<700)return;set(m.hidden)};
    b.onkeydown=e=>{if(e.key==='ArrowDown'){e.preventDefault();set(true);m.querySelector('a')?.focus()}};
    dd.onkeydown=e=>{if(e.key==='Escape'){set(false);b.focus()}};
    m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>set(false)));
    if(!window.__bmNavDoc){window.__bmNavDoc=true;document.addEventListener('click',e=>{const d=document.getElementById('dd'),mm=document.getElementById('ddm');if(d&&mm&&!mm.hidden&&!d.contains(e.target)){mm.hidden=true;d.classList.remove('open');document.getElementById('ddb')?.setAttribute('aria-expanded','false')}})}
  }
  const mnav=document.getElementById('mnav'),bg=document.getElementById('burger'),mc=document.getElementById('mclose');
  if(mnav&&bg&&mc){
    const close=()=>{mnav.hidden=true;document.body.classList.remove('lock');bg.setAttribute('aria-expanded','false')};
    bg.onclick=()=>{mnav.hidden=false;document.body.classList.add('lock');bg.setAttribute('aria-expanded','true');mc.focus()};
    mc.onclick=()=>{close();bg.focus()};
    mnav.onkeydown=e=>{if(e.key==='Escape'){close();bg.focus()}};
    mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }
  const hdr=document.querySelector('header.site');
  if(hdr){const on=()=>hdr.classList.toggle('scrolled',scrollY>8);on();window.onscroll=on}
}
function bindSubnav(){
  const nav=document.querySelector('.subnav');if(!nav||!('IntersectionObserver' in window))return;
  const btns=[...nav.querySelectorAll('button')];
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)btns.forEach(b=>b.classList.toggle('on',b.dataset.jump===e.target.id))})},{rootMargin:'-30% 0px -60% 0px'});
  btns.forEach(b=>{const t=document.getElementById(b.dataset.jump);if(t)io.observe(t)});
}
function bind(r){
  bindNav();
  if(SVC[r])document.querySelectorAll('[data-cta]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('consult').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>document.querySelector('#consult input')?.focus({preventScroll:true}),500)});
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const cnt=el=>{const to=+el.dataset.count,pre=el.dataset.pre,suf=el.dataset.suf;let s=null;const step=t=>{s??=t;const p=Math.min(1,(t-s)/1100);el.textContent=pre+Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  if(!reduce&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cnt(e.target);io.unobserve(e.target)}}),{threshold:.4});document.querySelectorAll('[data-count]').forEach(el=>io.observe(el))}
  // accordions: single-open within a group
  document.querySelectorAll('.acc button').forEach(b=>b.onclick=()=>{const p=document.getElementById(b.getAttribute('aria-controls'));const o=b.getAttribute('aria-expanded')==='true';
    const grp=b.closest('.faq2-r,#sv-fq');if(grp&&!o)grp.querySelectorAll('.acc button[aria-expanded="true"]').forEach(x=>{x.setAttribute('aria-expanded','false');document.getElementById(x.getAttribute('aria-controls')).hidden=true});
    b.setAttribute('aria-expanded',String(!o));p.hidden=o});
  document.querySelectorAll('[data-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.jump)?.scrollIntoView({behavior:reduce?'auto':'smooth'})});
  document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>copyText(b.dataset.copy,b));
  document.querySelectorAll('form.bm[data-slug]').forEach(bindForm);
  if(r==='toolkit')bindTools();
  if(r==='admin')bindAdmin();
  if(document.getElementById('pane-wacc'))bindStudio();
  if(document.getElementById('proc'))bindProcess();
  bindLifecycle();bindMatrix();
  if(BIND[r])BIND[r]();
  if(r==='contact-us')bindContact();
  bindSubnav();bindTrend();
  const art=document.querySelector('.hero2-art');
  if(art&&!reduce&&matchMedia('(hover:hover)').matches){const panel=document.querySelector('.hero2-panel');
    panel.onmousemove=e=>{const r=panel.getBoundingClientRect();const dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;art.querySelectorAll('[data-depth]').forEach(el=>{const d=+el.dataset.depth;el.style.translate=`${dx*d}px ${dy*d}px`})};
    panel.onmouseleave=()=>art.querySelectorAll('[data-depth]').forEach(el=>el.style.translate='0 0')}
  cookieNotice();
}
render();
