# RCN Operations Map — PWA v2 (marker fix)

This build uses **marker-maple.svg** for Leaflet markers (separate from app icons) and bumps the service worker cache to **v2**.

## Update steps (GitHub Desktop)
1. Download and unzip this package.
2. In GitHub Desktop, open your `RCN Operations` repo.
3. Copy these files into the repo root (overwrite existing):
   - `index.html`
   - `sw.js`
   - `marker-maple.svg`
   - `manifest.webmanifest`
   - `Maple_Leaf.svg`
   - `icons/icon-192.png`, `icons/icon-512.png` (keep the folder)
4. Commit with a message like: `Use marker-maple.svg; bump SW to v2`.
5. Push to origin. Cloudflare Pages will auto-redeploy.
6. After deploy, hard refresh the site (**Ctrl/⌘ + Shift + R**). If needed, open DevTools → Application → Service Workers → **Update**.

## Sanity checks
- Open `/marker-maple.svg` directly — you should see the red leaf SVG.
- Inspect a marker element — its `src` should be `marker-maple.svg`.
