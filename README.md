# RCN Operations Map — PWA v4 (cache-bust & marker fix)

- Uses **Maple_Leaf.svg** for Leaflet markers.
- Bumps Service Worker caches to **APP: app-v4**, **RUNTIME: runtime-v2**.
- Adds version comments to `index.html` and an `x_version` field in the manifest to ensure Git detects changes.

## Update via GitHub Desktop
1. Unzip this package.
2. Open your `RCN Operations` repo in GitHub Desktop.
3. Copy these into the repo **root**, overwriting existing files:
   - `index.html`
   - `sw.js`
   - `manifest.webmanifest`
   - `Maple_Leaf.svg`
   - `icons/icon-192.png`, `icons/icon-512.png`
4. Commit: `v4 — Maple_Leaf marker + SW cache bump` and **Push**.

## After deploy
- Hard refresh (Ctrl/⌘+Shift+R).
- If needed: DevTools → Application → Service Workers → **Update** or **Unregister** then reload.
- Open `/Maple_Leaf.svg` directly to verify, then check a marker’s `src` in Elements panel.
