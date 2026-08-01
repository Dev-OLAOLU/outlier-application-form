# Wunna — Recruitment Application Website

Production-style **recruitment funnel**: marketing landing page, multi-field application form, success flow, and email delivery pipeline.

[![Live](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel)](https://wunna-application-form.vercel.app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222?style=for-the-badge&logo=github)](https://dev-olaolu.github.io/applicationform/)

---

## Live demos

| Environment | URL |
|-------------|-----|
| **Primary (Vercel)** | [wunna-application-form.vercel.app](https://wunna-application-form.vercel.app/) |
| **Apply form** | […/apply](https://wunna-application-form.vercel.app/apply) |
| **GitHub Pages** | [dev-olaolu.github.io/applicationform](https://dev-olaolu.github.io/applicationform/) |
| **Apply (Pages)** | […/apply.html](https://dev-olaolu.github.io/applicationform/apply.html) |

---

## Overview

Built for real multi-device use: candidates land on a clear product page, complete an eligibility-aware application, and receive confirmation after submit. Submissions are delivered via serverless + FormSubmit fallbacks so mobile and flaky networks still succeed.

---

## Features

- Responsive landing + application experience
- Rich eligibility / contact fields (WhatsApp, iMessage, Telegram, email)
- Mobile-hardened submit (timeouts + multi-path fallbacks)
- Thank-you success page
- Optional local Node submit server (`server.mjs`)
- Vercel serverless submit endpoint (`api/`)
- Google Apps Script integration folder for inbox automation
- Custom domain notes for production branding

---

## Tech stack

| Layer | Tools |
|-------|--------|
| Frontend | HTML, CSS, JavaScript |
| Email | FormSubmit + optional Apps Script |
| Deploy | Vercel + GitHub Pages |
| API | Node / Vercel serverless |

---

## Getting started

```bash
git clone https://github.com/Dev-OLAOLU/applicationform.git
cd applicationform
node server.mjs
# open http://localhost:8080/
```

Or serve the static files with any static host.

### Key files

| File | Role |
|------|------|
| `index.html` | Landing |
| `apply.html` / route `/apply` | Application form |
| `thank-you.html` | Success state |
| `api/` | Serverless submit |
| `server.mjs` | Local submit server |
| `vercel.json` | Vercel routing |
| `config.js` | Client config |

---

## Deployment

- **Vercel:** connect this repo; production URL is configured in the project.
- **GitHub Pages:** static export of core HTML (see live Pages URL above).
- Activate any FormSubmit destination email the first time you receive a confirmation mail.

---

## Author

**Ayantoyinbo David Olaoluwa**  
[GitHub @Dev-OLAOLU](https://github.com/Dev-OLAOLU) · [LinkedIn](https://www.linkedin.com/in/ayantoyinbo-david-9b5aa6240/) · davidayantoyinbo@gmail.com

---

## License

Portfolio / product demo. Destination inbox configured server-side where applicable.
