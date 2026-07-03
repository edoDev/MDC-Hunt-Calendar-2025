# MDC Hunt Calendar — 2026 Update: Feature Summary & Backlog

**Repo:** https://github.com/edoDev/MDC-Hunt-Calendar-2025
**Live:** https://edodev.github.io/MDC-Hunt-Calendar-2025/
**Status:** Planning only — no code changes yet
**Last updated:** July 2, 2026
**Principle:** Maximally truth-seeking. Every regulatory fact below is sourced. Anything unverified is marked ❓ OPEN QUESTION.

---

## 1. Current State (as-is)

Single-file `index.html` app (HTML 100%), Apache-2.0, served via GitHub Pages.

Current features:
- Visual calendar, Sep 1, 2025 – Jan 15, 2026, for Pevely, MO (Jefferson County)
- Season overlays: Archery, Firearms, Youth, Alternative Methods, Antlerless Portion (CWD)
- Rut activity levels (peak ~Nov 6–15 for the region, ±5 days)
- Moon phases with hunt tips (astronomical algorithms)
- Sunrise/sunset via SunCalc for 38.2834°N, 90.3951°W
- PNG download, print view, toggleable legend, hover details, keyboard shortcut (L)
- Jefferson County CWD Management Zone banner + data-source notes

Known limitations:
- Hardcoded to the 2025–26 season; dates now expired
- Single species (deer), single location
- No user data entry (no logs, no scouting notes, no harvest records)
- README is a single line (just the Pages URL)

---

## 2. Verified 2026–27 Regulatory Facts (drive the update)

### 2.1 Deer season dates (approved by Missouri Conservation Commission, Dec 12, 2025)
| Portion | Dates |
|---|---|
| Archery | Sep 15 – Nov 13, 2026 and Nov 25, 2026 – Jan 15, 2027 |
| Firearms Early Antlerless | Oct 9–11, 2026 (open counties) |
| Firearms Early Youth | Oct 24–25, 2026 (moved a week earlier due to Halloween-overlap rule) |
| Firearms November Portion | Nov 14–24, 2026 |
| Firearms Late Youth | Nov 27–29, 2026 |
| Firearms Late Antlerless | Dec 5–13, 2026 (open counties) |
| Firearms Alternative Methods | Dec 26, 2026 – Jan 5, 2027 |

Source: MDC newsroom, "MDC sets deer and turkey hunting dates for 2026-2027 seasons" (mdc.mo.gov/newsroom).

### 2.2 CWD changes — BREAKING for this app
Per MDC's current deer page (mdc.mo.gov/hunting-trapping/species/deer):
- CWD Management Zone: REMOVED
- CWD portion of firearms season: REMOVED
- Antler-point restriction: REMOVED statewide
- Still in effect: mandatory CWD sampling during the November Portion in designated counties (list published in the July Fall Deer & Turkey booklet); feed/mineral ban year-round in counties within 10 miles of a CWD detection
- Landowner CWD Management Permits now require 20 contiguous acres in a CWD Core Area (up from 5)

Implication: the app's Jefferson County CWD zone banner, the "Antlerless Portion (CWD)" legend item, and related notes are obsolete and must be replaced, not just re-dated.

⚠️ Verify in July 2026: whether Jefferson County is on the mandatory-sampling county list for Nov 2026 (booklet not yet checked).

### 2.3 Black bear season 2026
- Season: Oct 17–30, 2026 (or until zone quota reached)
- 2,000 permits statewide (up from 600), max harvest quota 60 bears (up from 40)
- Missouri residents only; random draw; application window was May 1–31, 2026 (NOW CLOSED for 2026); drawing results by July 1; permits purchasable from July 1
- Permit is zone-specific. Jefferson County / Pevely is inside BMZ 2 (portion of Missouri east of a line: north from the Arkansas border on US-63 to I-44; east on I-44 to Hwy 47; north on Hwy 47 to the Missouri River; east along the river to the Illinois border)
- Daily requirement: call 800-668-4045 before hunting each day to check quota/closure status
- Key rules: one bear either sex; lone bears only (no bears with other bears, incl. sows with cubs); no denned bears; no bait, no dogs; hunter orange required; Telecheck within 24 hours; physical check-station presentation; tooth (premolar) submission to MDC within 10 days
- Context: 2025 harvest was 9 bears statewide; bear density near Pevely is low (BMZ 2 historically the lowest-harvest zone)

Sources: MDC newsroom (Mar 27, 2026 release), mdc.mo.gov/hunting-trapping/species/bear, 3 CSR 10-7.900.

### 2.4 Reporting (Telecheck) facts
- Deer: must be Telechecked by 10 p.m. on the day of harvest — via MO Hunting app, online at mdc.mo.gov, or phone 1-866-227-2564; confirmation number recorded on permit
- Bear: Telecheck within 24 hours + physical check station + tooth submission
- Note: some third-party sites say "within 24 hours" for deer; MDC materials say by 10 p.m. day of harvest. Use the official Fall 2026 booklet as final authority when published.

---

## 3. Open Questions (need your answers before build)

1. ✅ **Bear scope (RESOLVED 2026-07-02):** Project owner holds a 2026 BMZ 2 permit, but bear features must be permit-agnostic. Design: a "Bear permit status" setting (Permit holder / Not drawn / Info only). Permit holders see daily quota-hotline reminders + post-harvest checklist; all users see the season overlay, BMZ 2 info, rules, and May 2027 application reminders.
2. ✅ **"Enhanced reporting" (RESOLVED 2026-07-02):** Reporting = scouting-planning output. Core deliverable is a scouting plan/report: planned sessions, logged observations, and a printable/exportable pre-season scouting summary per species. Telecheck helpers stay as a small P2 item, not the core.
3. ❓ **Scouting — what data?** Personal field data (stand/camera locations, sign, sightings) vs. environmental planning (wind, weather, moon), or both? Map pins? *(Per Q2 answer, planning-oriented; assume both, defer map pins to P3 unless told otherwise.)*
4. ✅ **Persistence (RESOLVED 2026-07-02):** Browser localStorage as the live store + downloadable JSON export/import for backup and portability. No backend. UI must state that data is device/browser-bound.
5. ❓ **Location scope:** Keep hardcoded to Pevely, or make location configurable (which changes sunrise/rut assumptions)?
6. ❓ **Turkey:** Fall turkey (archery Sep 15–Nov 13 & Nov 25–Jan 15; firearms Oct 1–31 in open counties) overlaps the calendar window. In or out of scope?

---

## 4. Backlog

Priority: P0 = must (correctness), P1 = core new features, P2 = enhancements, P3 = nice-to-have.

### EPIC A — 2026–27 Season Refresh (P0)
- A1. Replace all 2025–26 deer dates with the 2026–27 dates in §2.1
- A2. Remove CWD Management Zone banner and "Antlerless Portion (CWD)" layer; replace with "Early/Late Antlerless (open counties)" layers
- A3. Add note layer for mandatory CWD sampling days (Nov 15–16-equivalent for 2026 — confirm exact days & Jefferson County inclusion from the July booklet) and the feed/mineral ban
- A4. Update calendar window to Sep 1, 2026 – Jan 15, 2027; recompute moon phases & sunrise/sunset for the new dates
- A5. Recompute rut overlay for Nov 2026 (same regional pattern, ±5 days caveat retained)
- A6. Update data-sources footer: new MDC citations, "verified as of <date>", link to 2026 Fall Deer & Turkey booklet when published
- A7. Update title/repo naming (2025 → 2026-27); update README with real project description
- A8. Add "regulations verification" checklist item: re-verify against official booklet (expected ~July 2026) before season

### EPIC B — Bear Hunting (P1)
- B1. Add Bear Season overlay: Oct 17–30, 2026, visually distinct, with "quota-dependent — season may close early" flag
- B2. BMZ 2 info panel: zone boundary description, resident-only draw, permit facts (§2.3)
- B3. Daily quota-check reminder element on each bear-season day: hotline 800-668-4045 (must call before hunting)
- B4. Bear rules quick-reference: lone bears only, no dens, no bait/dogs, orange required
- B5. 2027 planning aids: "Apply May 1–31, 2027" marker + optional reminder; drawing results ~July 1
- B6. Post-harvest checklist (permit-holder mode): Telecheck ≤24 h → check station → tooth to MDC ≤10 days
- B7. Permit-status setting (Permit holder / Not drawn / Info only), stored in localStorage; controls prominence of B3/B6 vs. B5. Default: Info only, so the app is useful to any user out of the box.
- UNBLOCKED: permit-agnostic design confirmed 2026-07-02

### EPIC C — Scouting & Planning (P1) — CORE of "enhanced reporting"
- C1. Scouting session planner: schedule sessions on the calendar (species: deer or bear; target: stand check, sign search, trail-cam pull, glassing)
- C2. Scouting log: date-stamped observations (sign, sightings, trail-cam notes) attached to calendar days
- C3. Stand/camera/location registry (names + optional lat/long); map pins deferred to P3
- C4. Suggested scouting windows on calendar (late-summer glassing, October sign-checks, pre-bear-opener BMZ 2 checks) — labeled as general practice, NOT MDC guidance
- C5. Persistence: localStorage live store + JSON export/import (download/upload). Visible note: data is device/browser-bound. (DECIDED 2026-07-02)
- C6. Wind/weather planning: manual entry first (truth-safe); weather API as later enhancement (key/CORS decision needed)

### EPIC D — Scouting Reports (P1)
- D1. Pre-season scouting report per species: sessions completed, observations, locations reviewed, gaps remaining — printable/PNG (reuse existing export code)
- D2. Season summary report: days hunted, sightings, harvests
- D3. JSON/CSV export of all logs (pairs with C5 backup)
- D4. Multi-season history via retained localStorage + imported archives
- D5. (P2, demoted) Telecheck compliance helper: deadline countdown (deer: 10 p.m. day-of; bear: 24 h), links/phone numbers — small, optional

### EPIC E — Platform & Quality (P2)
- E1. Split monolithic index.html into data (JSON season definitions) + rendering, so future season updates are data-only edits
- E2. Season-data schema with `source_url` and `verified_date` per date range (enforces truth-seeking)
- E3. Mobile layout pass (current app is desktop/print oriented)
- E4. Accessibility: keyboard nav beyond 'L', ARIA on legend/hover info
- E5. Add LICENSE-consistent contribution notes to README; document data-update procedure
- E6. Optional: fall turkey overlay (Open Question 6)

### EPIC G — Mobile & Offline (P1–P2)
- G1. (P1) Web app manifest: name, icons, theme color, standalone display → installable to phone home screen
- G2. (P1) Service worker: cache-first for index.html, seasons JSON, and html2canvas → full function with no cell signal (stand/field use). Version-stamped cache so season-data updates propagate
- G3. (P1) Phone layout: below ~480px switch the 7-column month grid to a scrollable week-strip or agenda view; 44px minimum touch targets; day detail already behaves as a bottom sheet
- G4. (P2) Storage resilience: iOS Safari can evict localStorage under pressure — add a periodic "export your scouting data" nudge and request persistent storage via navigator.storage.persist()
- G5. (P2) Offline indicator + "data verified as of <date>" stamp so a user in the field knows how fresh the regulation data is
- Note: no schema.org markup needed — this is a tool, not indexed content

### EPIC F — Nice-to-have (P3)
- F1. Location configurability (coords → sun times; rut window flagged as region-specific)
- F2. iCal export of season openers/closers and personal reminders
- F3. Countdown widget to next opener
- F4. Managed-hunt application deadline markers (dates from annual booklet)

---

## 4B. Publishing Options (considered 2026-07-02)

| Path | Cost | Effort | Notes |
|---|---|---|---|
| PWA on GitHub Pages (current) | $0 | Done | Installable on Android + iOS via Add to Home Screen; offline; instant updates; no store review |
| Play Store via TWA (Bubblewrap) | $25 one-time | Low-med | Wraps the existing PWA; needs a privacy policy URL and store listing; discoverability gain is modest for a single-county tool |
| Apple App Store | $99/yr | High | Requires a native wrapper, Mac tooling, and review; Apple often rejects thin web wrappers ("minimum functionality") — not recommended at current scope |
| Custom domain + PWA | ~$12/yr | Trivial | Nicer install name/URL; pairs well with either of the first two |

Recommendation: stay PWA-first. Revisit TWA/Play if the app goes multi-county and gains an audience. A hunting-regulations app also carries accuracy expectations in store reviews — the truth-seeking policy and disclaimers must stay prominent in any listing.

## 4C. Feature Brainstorm — Planning a Hunt (unprioritized candidates)

Screened for feasibility on a static/offline PWA and for truth-seeking risk. ⚗ = MODEL-class, must be labeled as such; ⚠ = risks pseudoscience or false precision, handle carefully or skip.

**Wind & weather (highest planning value)**
- H1. Stand-wind matcher: tag each stand with its good wind directions; given a forecast (or manually entered) wind, highlight which stands are hunt-able that day. Deer hunting's most actionable variable; works offline with manual wind entry, API optional. ⚗
- H2. Forecast strip on calendar days (temp, wind, precip, pressure) via a weather API when online; cached for offline reference with a "fetched <time>" stamp. ⚗
- H3. Cold-front flags: mark days following significant temp drops (movement correlate). ⚗ ⚠ label as heuristic

**Time & conditions**
- H4. Season countdowns and opener notifications (Push API; works from installed PWA on Android, iOS 16.4+)
- H5. First/last legal-light "prime hours" shading on day cells (already computed, just surfaced). ⚗
- H6. "Best days" composite scores (rut × moon × weather): popular in commercial apps but scientifically weak — if ever added, must be clearly labeled folk-model. ⚠ default: skip

**Ground & access**
- H7. Public-land quick links: nearby MDC conservation areas and Mark Twain NF units with area-regulation links (bear CA-open list exists on MDC site)
- H8. Managed-hunt application windows on the calendar (dates from annual booklet — REG class, needs yearly verification)
- H9. CWD sampling / bear check-station finder links for harvest day
- H10. Simple offline property sketch: draw stands/cameras/trails on an uploaded aerial image, stored locally (no map tiles needed — avoids offline-map weight)

**Log-powered insight (uses data we already collect)**
- H11. Sighting analytics: sightings by location × time-of-day × wind from the LOG, rendered as a small heat table — personal data, honest by construction
- H12. Shared scouting: export/import already enables partner data swaps; add a merge-instead-of-replace import mode
- H13. Gear checklists per portion (archery vs firearms vs bear) with pack-state saved locally
- H14. Harvest log completing the loop to D-epic Telecheck helpers

**Scale**
- H15. Multi-location profiles (Q5): per-property coordinates driving sun times; rut window flagged region-specific
- H16. Fall turkey layer (Q6) — dates already verified in §2.1

Suggested next picks: H1 + H5 (high value, offline-native, zero new data dependencies), then H2, H8, H11.

## 5. Truth-Seeking Guardrails (project policy)

1. No regulatory date ships without a source URL and verification date in the data file.
2. Distinguish three data classes in the UI: **Regulation** (MDC-sourced), **Model** (moon/sun/rut calculations, with method noted), **Personal** (user's own logs).
3. Re-verify against the official MDC 2026 Fall Deer & Turkey booklet (expected ~July 2026) before the season; add a visible "verify at mdc.mo.gov before hunting" disclaimer (retain existing one).
4. Known unknowns right now: exact 2026 mandatory CWD sampling counties/days; final booklet details on antlerless open counties; managed-hunt specifics.

---

## 6. Suggested Sequence

1. EPIC A (correctness) — smallest possible PR, ship first
2. EPIC E1–E2 (data/render split) — makes B–D cheaper
3. EPIC B (bear, permit-agnostic) + booklet re-verification when the 2026 Fall Deer & Turkey booklet publishes (~July 2026 — check now)
4. EPIC C (scouting planner + localStorage/JSON persistence)
5. EPIC D (scouting reports)
Remaining open: Q3 detail (env-data depth), Q5 (location config), Q6 (turkey)
