WUNNA — RECRUITMENT APPLICATION WEBSITE
=======================================

GitHub: https://github.com/Dev-OLAOLU/outlier-application-form

SHARE THIS LINK (works on phones worldwide)
-------------------------------------------
Home:
  https://dev-olaolu.github.io/outlier-application-form/

Apply form (USE THIS):
  https://dev-olaolu.github.io/outlier-application-form/apply.html

Why not only wunna.is-cool.dev?
  Some mobile networks (especially LTE in some countries) cannot resolve
  free Open Domains hostnames → ERR_NAME_NOT_RESOLVED / Connection Error.
  GitHub Pages (github.io) resolves reliably almost everywhere.

  Optional custom domain (may fail on some phones):
  https://wunna.is-cool.dev/

WHAT WAS FIXED (28 Jul 2026)
----------------------------
1. Removed custom-domain redirect that forced phones onto broken DNS.
2. Site is served primarily on github.io again.
3. Form submit hardened for mobile / WhatsApp in-app browsers:
   - skip hanging /api/submit on static hosts
   - request timeouts
   - classic form POST fallback if fetch fails

WHERE EMAIL GOES
----------------
davidayantoyinbo@gmail.com via FormSubmit

LOCAL TEST
----------
Double-click start-server.command
  or:  node server.mjs
Open http://localhost:8080/
