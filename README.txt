RECRUITMENT APPLICATION WEBSITE + PRIVATE EMAIL FORM
====================================================

GitHub: https://github.com/Dev-OLAOLU/outlier-application-form

WHAT USERS SEE
--------------
• Landing page + application form + thank-you page
• Your personal Gmail is NOT shown on the website
• Submissions are posted to /api/submit (server-side only)

WHERE EMAIL GOES (hidden from users)
------------------------------------
davidayantoyinbo@gmail.com
Set on the server in:
  api/submit.js   (Vercel)
  server.mjs      (local)
Optional Vercel env: FORM_TO_EMAIL

COUNTRIES
---------
Dropdown grouped as:
  Tier 1 — USA, UK, Canada, Australia, NZ, Ireland, Western Europe, SG, JP, KR, IL, UAE, HK, TW...
  Tier 2 — Spain, Italy, Poland, Brazil, Mexico, India, Nigeria, PH, and more

FIELDS
------
Full Name *, Country (T1/T2) *, WhatsApp *, iMessage *, Telegram *, Email (optional)

SUCCESS
-------
“A message would be sent out to you in a short while.”


VERCEL HOSTING
--------------
1. Import GitHub repo on vercel.com
2. Framework: Other / no build command
3. Deploy
4. Optional: Project → Settings → Environment Variables
     FORM_TO_EMAIL = davidayantoyinbo@gmail.com
5. Open your Vercel URL → submit a TEST form
6. Confirm FormSubmit activation email in Gmail once (Inbox/Spam)


LOCAL
-----
Double-click start-server.command
  or:  node server.mjs
Open http://localhost:8080/


FIRST FORM EMAIL ACTIVATION
---------------------------
First successful delivery may require confirming FormSubmit in Gmail.
After that, every application hits your inbox automatically.
