RECRUITMENT APPLICATION WEBSITE + EMAIL FORM
============================================

GitHub: https://github.com/Dev-OLAOLU/outlier-application-form

WHAT THIS IS
------------
• Interactive landing page (index.html)
• Short application form (apply.html)
• Thank-you page (thank-you.html)
• Form data emailed to: davidayantoyinbo@gmail.com (FormSubmit)

ELIGIBILITY (shown on site)
---------------------------
• USA, UK, or Canada residents only
• Students or adults
• Valid government-issued ID required

FORM FIELDS
-----------
• Full Name *
• Country (USA / UK / Canada) *
• WhatsApp Number *
• iMessage Number *
• Telegram Username/Number *
• Email (optional)

SUCCESS MESSAGE
---------------
“A message would be sent out to you in a short while.”


============================================
HOST ON VERCEL (recommended for domain)
============================================

Option 1 — Import from GitHub (easiest)
1. Go to https://vercel.com and sign in (GitHub login is fine)
2. Click “Add New…” → “Project”
3. Import: Dev-OLAOLU/outlier-application-form
4. Framework Preset: Other (static HTML)
5. Root Directory: ./
6. Build Command: leave empty
7. Output Directory: leave empty / .
8. Click Deploy
9. Copy your URL, e.g. https://outlier-application-form.vercel.app

Option 2 — Vercel CLI
  npm i -g vercel
  cd Desktop/OUTLIER
  vercel login
  vercel
  vercel --prod

Custom domain (Vercel dashboard)
1. Project → Settings → Domains
2. Add your domain (e.g. apply.yourdomain.com)
3. Follow DNS instructions Vercel shows
4. Wait for SSL (automatic)


FIRST EMAIL ACTIVATION (once, after Vercel is live)
---------------------------------------------------
1. Open your Vercel URL → Apply form
2. Submit a TEST application
3. Open davidayantoyinbo@gmail.com (Inbox + Spam)
4. Confirm FormSubmit activation email
5. After that, all real submissions go to Gmail


LOCAL TESTING
-------------
Double-click start-server.command
Open http://localhost:8080/

Do NOT open HTML files with file:// or email will fail.


FILES
-----
index.html           Landing page
apply.html           Application form → emails Gmail
thank-you.html       Success page
vercel.json          Vercel static hosting config
config.js            Email destination
start-server.command Local server helper
README.txt           This file
