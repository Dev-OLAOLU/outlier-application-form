/**
 * Local dev server: static files + /api/submit (email hidden from browser).
 * Usage: node server.mjs
 * Then open http://localhost:8080/
 */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;
const TO = process.env.FORM_TO_EMAIL || "davidayantoyinbo@gmail.com";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".command": "text/plain; charset=utf-8",
};

async function handleSubmit(req, res) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  let body = {};
  try {
    body = JSON.parse(raw || "{}");
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, message: "Invalid JSON" }));
    return;
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
    _subject: body._subject || "New referral application",
    _template: "table",
    _captcha: "false",
  };
  if (body.email && String(body.email).includes("@")) {
    payload._replyto = body.email;
  }

  try {
    const r = await fetch(`https://formsubmit.co/ajax/${TO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await r.json().catch(() => ({}));
    res.writeHead(r.ok ? 200 : r.status, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify(
        r.ok
          ? { ok: true, message: "Submitted" }
          : { ok: false, message: data.message || data.error || "Email delivery failed" }
      )
    );
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, message: err.message || "Server error" }));
  }
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, `http://localhost:${PORT}`).pathname);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(__dirname, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ""));
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url && req.url.split("?")[0] === "/api/submit") {
    return handleSubmit(req, res);
  }
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Form emails → ${TO} (hidden from browser)`);
});
