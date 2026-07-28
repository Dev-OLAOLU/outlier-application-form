# Wunna — Recruitment Application Website

Live recruitment funnel: landing page + multi-field application form + email delivery.

## Live demos

| Environment | URL |
|-------------|-----|
| **Primary (Vercel)** | https://wunna-application-form.vercel.app/ |
| **Apply form** | https://wunna-application-form.vercel.app/apply |
| **GitHub Pages** | https://dev-olaolu.github.io/applicationform/ |
| **Apply (Pages)** | https://dev-olaolu.github.io/applicationform/apply.html |

## Features

- Responsive landing + application form
- Eligibility and contact fields (WhatsApp, iMessage, Telegram, email)
- Mobile-hardened submit (timeouts + FormSubmit fallbacks)
- Thank-you success flow
- Optional local Node server for `/api/submit`
- Vercel serverless submit endpoint

## Stack

- HTML / CSS / JavaScript
- FormSubmit (email)
- GitHub Pages + Vercel

## Local run

```bash
node server.mjs
# open http://localhost:8080/
```

Or open static files via any static server.

## Author

**Ayantoyinbo David Olaoluwa** · [GitHub @Dev-OLAOLU](https://github.com/Dev-OLAOLU)

---

> Public product demo / production-ready static funnel. Destination inbox configured server-side where applicable.
