/**
 * Vercel serverless — receives form data and emails you.
 * Destination email is server-side only (never sent to the browser).
 *
 * Optional Vercel env var: FORM_TO_EMAIL
 * Default: davidayantoyinbo@gmail.com
 */

const DEFAULT_TO = "davidayantoyinbo@gmail.com";

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
      _subject: body._subject || "New referral application",
      _template: "table",
      _captcha: "false",
    };

    if (body.email && String(body.email).includes("@")) {
      payload._replyto = body.email;
    }

    const r = await fetch(`https://formsubmit.co/ajax/${to}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      return res.status(r.status).json({
        ok: false,
        message: data.message || data.error || "Email delivery failed",
      });
    }

    return res.status(200).json({ ok: true, message: "Submitted" });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err && err.message ? err.message : "Server error",
    });
  }
};
