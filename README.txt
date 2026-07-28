WUNNA — RECRUITMENT APPLICATION WEBSITE
=======================================

GitHub: https://github.com/Dev-OLAOLU/outlier-application-form

LIVE SITE (share these links)
-----------------------------
Custom domain (primary):
  https://wunna.is-cool.dev/
  https://wunna.is-cool.dev/apply.html

GitHub Pages (also works):
  https://dev-olaolu.github.io/outlier-application-form/
  https://dev-olaolu.github.io/outlier-application-form/apply.html

CUSTOM DOMAIN SETUP (done)
--------------------------
• Open Domains: wunna.is-cool.dev → CNAME dev-olaolu.github.io
• Repo root file: CNAME
• GitHub Pages custom domain: wunna.is-cool.dev
• Enforce HTTPS in Pages settings when certificate is ready

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
