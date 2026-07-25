#!/bin/bash
# Double-click this file to open the application website correctly.
# Form email delivery only works over http:// (not by double-clicking HTML files).

cd "$(dirname "$0")"
PORT=8080

echo "============================================"
echo "  Application website"
echo "  Open: http://localhost:$PORT/"
echo "  Email: davidayantoyinbo@gmail.com"
echo "============================================"
echo ""
echo "Keep this window open while you use the form."
echo "Press Ctrl+C to stop the server."
echo ""

# Open browser after a short delay
(sleep 1 && open "http://localhost:$PORT/") &

# Serve this folder
python3 -m http.server "$PORT"
