WUNNA — RECRUITMENT APPLICATION WEBSITE
=======================================

GitHub: https://github.com/Dev-OLAOLU/outlier-application-form

LIVE SITE (share these links)
-----------------------------
Custom domain (after you finish Open Domains steps below):
  https://wunna.is-cool.dev/
  https://wunna.is-cool.dev/apply.html

GitHub Pages (works now):
  https://dev-olaolu.github.io/outlier-application-form/
  https://dev-olaolu.github.io/outlier-application-form/apply.html

CUSTOM DOMAIN — wunna.is-cool.dev (do this once)
------------------------------------------------
You already created an Open Domains account with Gmail. The old
device-code expired, so register the domain from the dashboard instead:

1. Log in at: https://manage.open-domains.com/
   (or https://opendomains.andrewstech.me/)

2. Start a new subdomain request:
   - Subdomain:   wunna
   - Root domain: is-cool.dev
   - Record type: CNAME
   - Record value: dev-olaolu.github.io
   - Proxied: OFF / false
   - Reason: Wunna recruitment application form on GitHub Pages

3. Submit and wait for approval (often minutes to a day).

4. After DNS is approved, open:
   https://wunna.is-cool.dev/
   In GitHub → repo Settings → Pages → confirm custom domain
   "wunna.is-cool.dev" and Enforce HTTPS.

WHAT USERS SEE
--------------
• Landing page + application form + thank-you page (branded Wunna)
• On GitHub Pages: form uses FormSubmit so applications reach Gmail
• On local/Vercel: submissions go through /api/submit

WHERE EMAIL GOES
----------------
davidayantoyinbo@gmail.com
  api/submit.js   (Vercel)
  server.mjs      (local)

LOCAL
-----
Double-click start-server.command
  or:  node server.mjs
Open http://localhost:8080/

FORM EMAIL ACTIVATION
---------------------
Confirm FormSubmit activation email in Gmail (Inbox/Spam) once.
After that, every application hits your inbox automatically.
