# RCN Operations Map — PWA Edition

Static web app with installable “Add to Home Screen” support and basic offline caching.

## Files
- `index.html` — the app
- `Maple_Leaf.svg` — marker icon (kept next to `index.html`)
- `manifest.webmanifest` — PWA manifest
- `sw.js` — service worker (caches app shell + runtime-caches map tiles/images)
- `icons/icon-192.png`, `icons/icon-512.png` — app icons

---

## Publish on GitHub Pages (easy)
1) Create a new GitHub repo (e.g., `rcn-ops-map-pwa`).  
2) Upload everything in this folder (preserve the `icons/` directory).  
3) Repo → **Settings → Pages** → Source: *Deploy from a branch*; Branch: `main` (root).  
4) Open your site at `https://<your-user>.github.io/<repo>/`.

## Publish on Cloudflare Pages (custom domain friendly)
1) Push these files to a GitHub repo.  
2) Cloudflare → **Pages → Create a project → Connect to Git**.  
3) Build settings: Framework **None**, Build command **None**, Output dir **/** (root).  
4) Deploy. Optionally add a custom domain.

---

## Test locally
- Double‑click `index.html`.  
- For full PWA behavior (service worker requires a server):  
  - Drag the folder into a simple local server (e.g., VS Code Live Server, `python -m http.server`).

## Update content
- Open `index.html` and edit the **OPS** and **MEDIA** constants near the top of the script.  
- Photos support exact URLs, a single `file` name (Wikimedia), or a list of `files` (tries each until one loads).  
- Video embeds use YouTube IDs.

## Notes
- Offline support is **app shell only** (the page, Leaflet, icon). Online media and tiles need network on first view.  
- If markers show as circles, make sure `Maple_Leaf.svg` sits next to `index.html` and do a hard refresh (**Ctrl/⌘ + Shift + R**).
