#!/bin/bash
cd "$(dirname "$0")"
PORT=8080

echo "============================================"
echo "  Application website (local)"
echo "  Open: http://localhost:$PORT/"
echo "  Form emails are sent privately (not shown on page)"
echo "============================================"
echo ""
echo "Keep this window open. Press Ctrl+C to stop."
echo ""

(sleep 1 && open "http://localhost:$PORT/") &

# Prefer Node server (includes /api/submit). Fallback: plain static only.
if command -v node >/dev/null 2>&1; then
  node server.mjs
else
  echo "Node not found — starting static server only (email API needs Node or Vercel)."
  python3 -m http.server "$PORT"
fi
