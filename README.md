# Beyondmatrix Capital: Website

The Beyondmatrix Capital corporate finance advisory website, set up as a normal Node.js project.

**Workflow:** run and edit in **VS Code** → save to **GitHub** → **Vercel** publishes it from GitHub automatically.

No packages to install. You only need **Node.js 18 or newer**.

---

## Project structure

```
beyondmatrix-website/
├── public/                  ← the website (everything visitors download)
│   ├── index.html           ← page shell, SEO tags
│   ├── css/styles.css       ← all design and colours
│   ├── js/app.js            ← pages, content, forms, calculators, staff console
│   ├── images/              logos (header, footer, favicon)
│   ├── images/logo*.png      ← company logo (navy, white, full lockup with tagline)
│   ├── favicon.ico/.png, apple-touch-icon.png, robots.txt, sitemap.xml, 404.html
├── api/
│   └── inquiry.js           ← form handler: checks inquiries and emails them to your team
├── server.js                ← local server for VS Code (npm start)
├── package.json             ← project info and run commands
├── vercel.json              ← hosting settings: public folder, security headers
├── .env.example             ← list of email settings (copy to .env)
├── .gitignore               ← keeps secrets (.env) out of GitHub
└── .vscode/                 ← one-click Run button in VS Code
```

---

## Part 1: Run it in VS Code

### One-time installs
1. **VS Code**: code.visualstudio.com
2. **Node.js (LTS)**: nodejs.org. Restart VS Code after installing.
3. **Git**: git-scm.com/download/win (default options). Needed for Part 2.

### Open and run
1. Extract the zip, e.g. to `C:\Users\<you>\Projects\beyondmatrix-website`.
2. VS Code → **File → Open Folder** → select **beyondmatrix-website** (the folder that contains `package.json`).
3. Open the terminal: **Terminal → New Terminal** (Ctrl+`).
4. Run:
   ```
   npm start
   ```
5. Open **http://localhost:3000** in your browser.

**Alternatives:**
- Press **F5** (or **Run → Start Debugging**). The "Start Beyondmatrix website" option starts the server and opens the browser for you.
- Run `npm run dev` instead of `npm start` to restart the server automatically when you change `server.js` or `api/inquiry.js`.

Stop the server with **Ctrl+C** in the terminal.

After editing files in `public/`, save and **refresh the browser**. No restart is needed.

### Forms while running locally
- **Without a `.env` file:** forms run in demo mode. They show a reference number and the inquiry appears in the staff console (`/#admin`) in that browser, but no email is sent.
- **With email:** copy `.env.example` to a new file named `.env`, fill in your Resend details (see Part 4), then restart with `npm start`. The terminal confirms `Form email delivery: ON`.

---

## Part 2: Save it to GitHub

1. Create a free account at **github.com** if you don't have one.
2. Set your name and email once, in the VS Code terminal:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
3. In VS Code, click **Source Control** on the left (Ctrl+Shift+G) → **Publish to GitHub**.
4. Sign in when asked → choose **private repository** → name it `beyondmatrix-website`.
5. Click **Open on GitHub** and check that you see `public`, `api`, `server.js`, `package.json` and `vercel.json`.

Your `.env` file (with your email key) is **not** uploaded; `.gitignore` excludes it on purpose.

**Using the terminal instead:** first create an empty private repository named `beyondmatrix-website` on github.com, then run:
```
git init
git add .
git commit -m "Initial Beyondmatrix website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/beyondmatrix-website.git
git push -u origin main
```

---

## Part 3: Publish on Vercel (from GitHub)

1. Go to **vercel.com** → **Sign up with GitHub**.
2. **Add New… → Project** → select `beyondmatrix-website` → **Import**.
   If it's not listed: **Adjust GitHub App Permissions** → allow that repository.
3. Leave all settings as they are. `vercel.json` already tells Vercel to publish the `public` folder and run `api/inquiry.js` as the form handler.
4. Click **Deploy**. You'll get a live link like `beyondmatrix-website.vercel.app`.

### Updating the live site later
1. Edit and test in VS Code (`npm start`).
2. In **Source Control**, type a message (e.g. "Update FAQ") → **Commit** → **Sync Changes**.
3. Vercel sees the change on GitHub and updates the live site in about a minute.

---

## Part 4: Make the forms email your team

1. Create a free account at **resend.com** → **Domains** → add `beyondmatrix.in` → add the DNS records it shows at your domain registrar → wait for **Verified**.
2. In Resend → **API Keys** → create a key.
3. In Vercel → your project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | your Resend key |
| `NOTIFY_EMAIL` | `info@beyondmatrix.in` |
| `FROM_EMAIL` | `Beyondmatrix Website <website@beyondmatrix.in>` |
| `SEND_ACKNOWLEDGEMENT` | `true` (email visitors a confirmation) or `false` |

4. Vercel → **Deployments** → latest → **⋯ → Redeploy**.
5. Submit a test inquiry on the live site. You'll receive an email like `[BM-20261013-AB12CD] Debt Advisory inquiry from …`, and **Reply** goes straight to the visitor.

> Until this is done, the live site's forms run in **demo mode** and nobody receives inquiries.

---

## Part 5: Connect beyondmatrix.in

1. Vercel → project → **Settings → Domains** → add `beyondmatrix.in` and `www.beyondmatrix.in`.
2. Add the DNS records Vercel shows at your domain registrar.
3. HTTPS turns on automatically.

This replaces the current website on that domain.

---

## Where to edit content

| To change | File | Search for |
|---|---|---|
| Email, address, hours, headline figures | `public/js/app.js` | `const SITE=` |
| Services, features, form fields | `public/js/app.js` | `const SERVICES=` |
| Home FAQ | `public/js/app.js` | `const FAQ_HOME=` |
| Engagement stages | `public/js/app.js` | `const PROCESS=` |
| Privacy Policy / Terms | `public/js/app.js` | `P['privacy-policy']` / `P['terms-and-conditions']` |
| Colours and fonts | `public/css/styles.css` | `--b-royal`, `--b-navy`, `--f-display` |
| Page title and SEO description | `public/index.html` | `<title>` / `description` |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `'npm' is not recognized` | Install Node.js, then fully close and reopen VS Code |
| `running scripts is disabled on this system` | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or switch the terminal to **Command Prompt** (⌄ next to +) |
| `EADDRINUSE` / port 3000 in use | Another copy is running. Close it, or run `set PORT=3001 && npm start` (Command Prompt) and open localhost:3001 |
| Vercel shows 404 | GitHub must have `vercel.json` and `public/` at the top level, not inside another folder |
| Forms don't email on the live site | Check the four environment variables in Vercel, then **Redeploy** |

---

## Before going live: checklist
- [ ] Inquiry emails configured and tested on the live site
- [ ] Headline figures (12+ years, ₹500 Cr+, 100+ profiles) approved for publication
- [ ] Privacy Policy and Terms reviewed by your legal adviser (DPDP Act, 2023)

## About the staff console (`/#admin`)
The console is a **front-end prototype**: it shows demo data plus inquiries made from the same browser, and its login is written in the page code, so it is not real security. Real inquiries arrive **by email**. To turn it into a real lead system, add a database (e.g. Vercel Postgres or Supabase) and save each lead in `api/inquiry.js`.
