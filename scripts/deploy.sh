#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# Deploy the ResGuru owner console (Vue 2 SPA) to the NewResGuruFront server
#   host : 203.146.252.184  (SSH alias "NewResGuruFront" in ~/.ssh/config)
#   nginx serves the static build straight from /home/resguru-project/dist
#   (config: /etc/nginx/conf.d/subdomain.conf , domain console.resguru.app)
#
# The build is done HERE and rsync'd up - the server CANNOT build it
# (its vue-template-compiler is 2.6.x and chokes on `?.` in templates).
#
# Usage:
#   npm run deploy          git push + build + rsync   (normal)
#   npm run deploy:sync     skip the build, just rsync the existing dist/
#
# Requirements: SSH host alias "NewResGuruFront" in ~/.ssh/config.
# After it finishes, hard-refresh the browser (Cmd+Shift+R) to skip cache.
# ─────────────────────────────────────────────────────────────────────────────

BUILD=1
[ "${1:-}" = "--no-build" ] && BUILD=0

echo "==> Pushing to origin/main ..."
git push origin main || echo "   (nothing to push)"

if [ "$BUILD" = "1" ]; then
  echo "==> Building locally ..."
  npm run build
fi

if [ ! -f dist/index.html ]; then
  echo "!! dist/index.html missing - run 'npm run build' first (or drop --no-build)"
  exit 1
fi

echo "==> Syncing dist/ -> NewResGuruFront:/home/resguru-project/dist/ ..."
rsync -avz --delete dist/ NewResGuruFront:/home/resguru-project/dist/

echo "==> Frontend deploy complete. Hard-refresh the browser (Cmd+Shift+R)."
