# MDC Hunt Calendar 2026–27

A visual hunting season calendar and scouting planner for **Pevely, MO (Jefferson County)**, built on Missouri Department of Conservation season data. Runs entirely in the browser, works **offline**, and installs to a phone home screen as an app.

**Live app:** https://edodev.github.io/MDC-Hunt-Calendar-2025/

> **Not a legal document.** Season data is sourced and dated (see the footer in the app), but regulations change. Always verify at [mdc.mo.gov](https://mdc.mo.gov) and in the current MDC Fall Deer & Turkey Hunting Regulations booklet before hunting.

## Features

- **2026–27 season calendar** (Sep 1, 2026 – Jan 15, 2027): all seven deer portions plus the Oct 17–30 black bear season (BMZ 2), each rendered as colored bars per day
- **Day detail:** sunrise/sunset, legal shooting light (½-hour rule), moon phase, rut estimate, and the rules in effect that day
- **Bear permit modes:** info-only, applied-not-drawn, or permit holder — holders get the mandatory daily quota-hotline (800-668-4045) reminder on every bear-season day
- **Scouting planner:** location registry (stands, cameras, access points), planned sessions and logged observations on any day, suggested scouting windows ahead of each opener
- **Scouting report:** printable per-species summary — sessions completed, observations, un-scouted locations, next openers
- **Offline PWA:** after one online visit, everything works with no cell signal; installable on Android and iOS (see the in-app Help)
- **Your data stays yours:** scouting data lives only in your browser (localStorage), with JSON export/import for backup and device moves
- PNG download, print styles, keyboard shortcuts (L legend, ? help, Esc close)

## Truth-seeking data policy

Every date in the app is classed and labeled:

| Tag | Meaning |
|---|---|
| **REG** | Set by MDC / Missouri Conservation Commission. Carries a source URL and verification date in the app footer and in `seasons-2026.json`. |
| **MODEL** | Computed here (sun, moon, rut estimate, suggested scouting windows). Not regulatory, methods noted. |
| **LOG** | Your personal scouting data. Never leaves your device unless you export it. |

Hatched season bars mean dates are confirmed but a county-level detail (e.g., antlerless open-county status) is still pending MDC's annual Fall booklet — the app says so rather than guessing.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app (embedded season data is the offline fallback) |
| `seasons-2026.json` | Canonical season data with per-item `source_url` and `verified_date`; if present alongside `index.html`, it overrides the embedded copy |
| `sw.js` | Service worker. Network-first for HTML/JSON (fresh regulations win), cache-first for assets |
| `manifest.json`, `icon-192.png`, `icon-512.png` | PWA install metadata |
| `MDC-Hunt-Calendar-2026-Backlog.md` | Feature summary, verified facts, and prioritized backlog |

## Updating season data (annual)

1. Edit `seasons-2026.json` (and the embedded copy in `index.html`) with new MDC-approved dates — every range needs a `source_url` and `verified_date`.
2. Bump the cache version date in `sw.js` (`const CACHE = "mdc-cal-YYYY-MM-DD"`) so installed copies fetch the new data.
3. Re-verify the `needs_verification` items against the annual Fall booklet when it publishes (typically July).

## Development

No build step. Serve the folder over HTTP(S) — the service worker requires HTTPS or localhost:

```
python3 -m http.server 8000
```

GitHub Pages serves it with HTTPS automatically.

## License

Apache-2.0. Season data belongs to the public record; verify against MDC originals.
