# RCN Operations Map — PWA v5 (restore all 19 ops)

- All **19 operations** are back on the map.
- Keeps **Maple_Leaf.svg** as the Leaflet marker.
- Service Worker cache bumped to **app-v5** (runtime **v3**) to force fresh assets.
- Gallery UI remains (photo/video icons), with the same media sources as earlier.

## Update via GitHub Desktop
1. Unzip this package.
2. Open your `RCN Operations` repo in GitHub Desktop.
3. Copy these into the repo **root**, overwriting existing files:
   - `index.html`
   - `sw.js`
   - `manifest.webmanifest`
   - `Maple_Leaf.svg`
   - `icons/icon-192.png`, `icons/icon-512.png`
4. Commit: `v5 — restore 19 ops; SW cache bump` and **Push**.

## After deploy
- Hard refresh (Ctrl/⌘+Shift+R).
- If needed: DevTools → Application → Service Workers → **Update** / **Unregister** → reload.
