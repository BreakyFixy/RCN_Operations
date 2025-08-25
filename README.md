# RCN Operations Map — PWA v3 (uses provided Maple_Leaf.svg as marker)

What changed
- Leaflet marker icon now points to **Maple_Leaf.svg** (the file you supplied).
- Service worker cache bumped to **app-v3** to force browsers to fetch the updated assets.

Update steps (GitHub Desktop)
1. Download and unzip this package.
2. In GitHub Desktop, open your `RCN Operations` repo.
3. Copy these into the repo root, overwriting existing:
   - `index.html`
   - `sw.js`
   - `Maple_Leaf.svg`
   - `manifest.webmanifest`
   - `icons/icon-192.png`, `icons/icon-512.png`
4. Commit: `Use Maple_Leaf.svg for markers; bump SW to v3` and push.
5. After Cloudflare redeploys: **hard refresh** (Ctrl/⌘ + Shift + R). If needed: DevTools → Application → Service Workers → **Update**.

Sanity checks
- Open `/Maple_Leaf.svg` on your live URL — see the red leaf SVG.
- Inspect a marker element — its `src` should be `Maple_Leaf.svg`.
