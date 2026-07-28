/**
 * Vercel serverless — receives form data and emails you.
 * Destination email is server-side only (never sent to the browser).
 *
 * Optional Vercel env var: FORM_TO_EMAIL
 * Default: davidayantoyinbo@gmail.com
 *
 * Uses FormSubmit.co. That service rejects server-side POSTs without a
 * browser-like Origin/Referer, so we always set those headers.
 */

const DEFAULT_TO = "davidayantoyinbo@gmail.com";
const DEFAULT_ORIGIN = "https://wunna.is-cool.dev"; // live custom domain

function formSubmitOk(httpOk, data) {
  if (!httpOk) return false;
  // FormSubmit returns HTTP 200 with success: "false" on some failures
  if (data && (data.success === false || data.success === "false")) return false;
  return true;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const to = process.env.FORM_TO_EMAIL || DEFAULT_TO;

    // Prefer the live request origin so FormSubmit accepts the POST
    const reqOrigin =
      (req.headers && (req.headers.origin || req.headers.referer)) ||
      process.env.SITE_ORIGIN ||
      DEFAULT_ORIGIN;
    const origin = String(reqOrigin).replace(/\/$/, "").split("?")[0];
    // If referer was a full URL path, keep host-only for Origin
    let originBase = origin;
    try {
      originBase = new URL(origin).origin;
    } catch {
      /* keep as-is */
    }

    const payload = {
      fullName: body.fullName || "",
      country: body.country || "",
      countryTier: body.countryTier || "",
      whatsapp: body.whatsapp || "",
      imessage: body.imessage || "",
      telegram: body.telegram || "",
      email: body.email || "—",
      eligibilityConfirm: body.eligibilityConfirm || "",
      seriousConfirm: body.seriousConfirm || "",
      submittedAt: body.submittedAt || new Date().toISOString(),
      _subject: body._subject || "New Wunna application",
      _template: "table",
      _captcha: "false",
    };

    if (body.email && String(body.email).includes("@")) {
      payload._replyto = body.email;
    }

    const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: originBase,
        Referer: `${originBase}/apply.html`,
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => ({}));

    if (!formSubmitOk(r.ok, data)) {
      const msg =
        data.message ||
        data.error ||
        "Email delivery failed. Check that FormSubmit is activated for your Gmail (confirm the first email in Inbox/Spam).";
      return res.status(502).json({ ok: false, message: msg });
    }

    return res.status(200).json({ ok: true, message: "Submitted" });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err && err.message ? err.message : "Server error",
    });
  }
};
