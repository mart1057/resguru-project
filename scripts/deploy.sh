#!/usr/bin/env bash
set -euo pipefail

echo "==> Pushing local changes to origin/main..."
git push origin main

echo "==> Deploying to frontend server (NewResGuruFront)..."
ssh NewResGuruFront <<'REMOTE'
set -euo pipefail
cd /home/resguru-project
echo "--> Stashing any server-side drift..."
git stash -u
echo "--> Pulling latest..."
git pull origin main
REMOTE

echo "==> Frontend deploy complete. (Dev server hot-reloads automatically - verify in browser.)"
