# Active Context

## Current Focus

Vercel/static asset hardening has been completed after the homepage three-image hero rotator repair. The next planned body of work is the remaining staged repair of the existing static scrape, following the sequence documented in `docs/prompts.md`.

## Current Repository State

- Branch: `main`, tracking `origin/main`.
- The tracked site contains six HTML entry points and route-local copies of CSS, JavaScript, and images.
- No package manifest, framework, build configuration, or test runner is currently present.
- A minimal `vercel.json` is present to keep clean URL behavior while redirecting directory routes to trailing-slash URLs so route-relative scraped assets resolve correctly on deployment.
- The HTML and assets primarily originate from a Magento/KTM-themed site scrape.
- `policies/index.html` comes from a separate older Bootstrap/jQuery page structure.
- `.clinerules/markdown.md` and this `memory-bank/` are newly untracked at initialization time.
- `docs/prompts.md` is intentionally ignored by `.gitignore` and describes the proposed repair sequence.

## Active Decisions

1. **Repair, do not rebuild.** Preserve plain HTML/CSS/JavaScript and static deployment.
2. **Introduce a repair layer before feature fixes.** Planned project-owned files are `assets/css/fixes.css` and `assets/js/site.js`, referenced root-relatively from applicable pages.
3. **Treat scraped bundles as vendor/generated artifacts.** Avoid broad edits and reformatting; put maintainable overrides and behavior in the repair layer.
4. **Respect static limitations.** Do not imply that cart, checkout, live search/filtering, inventory, or form submission works when no backend exists.
5. **Use clean internal routes.** Target `/`, `/about-us`, `/contact`, `/finance`, `/shop`, and `/policies` rather than legacy absolute production links.
6. **Validate via HTTP.** Relative paths and directory routes cannot be assessed reliably with `file://`.

## Planned Repair Sequence

1. Establish the shared repair CSS/JS layer and perform a baseline asset audit.
2. Repair the homepage three-image hero rotator. **Completed.**
3. Repair shared desktop/mobile navigation and footer behavior.
4. Repair contact-page layout and provide an honest static-compatible enquiry path.
5. Repair finance-page content, links, and responsive presentation.
6. Repair the shop catalogue while clearly retaining only static functionality.
7. Harden Vercel routing and normalize internal links. **Partially completed for routing/static assets.**
8. Perform complete side-by-side visual, functional, responsive, accessibility, console, and network QA.

## Important Patterns and Preferences

- Always inspect Git status before and after changes.
- Use absolute paths in task communication and tooling.
- Do not overwrite unrelated user changes.
- Keep diffs narrow; scraped HTML is large and duplicated.
- Add shared CSS after existing styles and shared JavaScript near the end of `<body>` after existing scripts.
- Test every route and representative desktop/mobile viewport after shared changes.
- Update this file after significant implementation or when priorities change.

## Open Questions / Risks

- The actual deployed Vercel project behavior has not yet been inspected after this hardening pass.
- A formal local asset-reference audit now reports no missing active local HTML/CSS asset references; deployment should still be checked in the browser after pushing.
- Existing absolute links can send users back to the legacy domain.
- Google Universal Analytics and Cloudflare email-decode artifacts may be stale.
- Duplicated route-local assets make fixes easy to apply inconsistently.
- The shop references different bundle names from most other Magento-derived pages.
- The policy page has a separate architecture and likely missing favicon/manifest assets.

## Latest Completed Work — Homepage Hero Rotator

- Added three explicit, root-relative local hero images to `/index.html`.
- Added isolated responsive fade styling to `/assets/css/fixes.css`.
- Added an idempotent vanilla-JavaScript rotator to `/assets/js/site.js` with 4-second slide timing, 700ms fades, reduced-motion stability, visibility pause/resume, and failed-image fallback.
- Removed only the active legacy remote-image rotator handler from the root generated bundle while preserving its unrelated loaded-state initialization.
- Validated over local HTTP at desktop and mobile widths for more than two cycles; all three hero images returned HTTP 200 from the local origin, the Shop Bikes link remained topmost and navigated to `/shop/`, reduced motion held the first slide, and no uncaught hero errors or hero-image 404s were observed.

## Latest Completed Work — Vercel / Static Asset Hardening

- Added `/vercel.json` with `cleanUrls` and `trailingSlash` enabled so Vercel redirects directory pages such as `/about-us` to `/about-us/`, preserving the scraped pages' route-relative `css/`, `js/`, and `imgs/` references.
- Added local files for missing active asset references: `/img/motorbackground.jpg`, generated-CSS breadcrumb background copies, policy-page background images, policy-page Bootstrap/Glyphicons and Font Awesome fonts, root app icons, and `/manifest.json`.
- Normalized malformed scraped Google Fonts links to `https://fonts.googleapis.com/...` and changed the missing shop `/shop/motor-bikes.html` link to `/shop/`.
- Removed active Cloudflare beacon scripts that referenced missing local `js/v451...` files from the Magento-derived pages.
- Re-ran a local active HTML/CSS asset-reference audit; result: `MISSING_COUNT 0`.
- Validated representative routes and repaired assets over local HTTP with `200` responses.
