# Progress

## Current Status

**Phase:** Homepage hero rotator and initial Vercel/static asset hardening repaired; remaining staged repairs pending.

The repository contains a complete initial static scrape for all six intended routes. Memory Bank documentation now records its purpose, architecture, constraints, and planned repair sequence.

## What Exists / Works at the Repository Level

- Static entry files exist for `/`, `/about-us`, `/contact`, `/finance`, `/shop`, and `/policies`.
- Each route has local style/script assets and relevant images.
- Core business content is present: homepage promotions, company information, contact content, finance information, a motorcycle catalogue, and policy/legal text.
- Clean-route directory structure is compatible in principle with static hosting.
- Git history records the original files plus later policy, menu, and shop updates.

These observations confirm file presence only. Full browser functionality and deployment behavior have not yet been validated.

## Completed Work

- Repaired the homepage hero as a three-image local fade rotator with explicit HTML slides, project-owned CSS/JavaScript, reduced-motion handling, visibility pause/resume, and missing-image fallback.
- Removed the root bundle's active remote hero append/fade handler with a narrow targeted edit.
- Validated desktop/mobile rendering, two full cycles, local hero network responses, Shop Bikes clickability, reduced motion, JavaScript syntax, and final diff cleanliness.

- Added minimal Vercel configuration with `cleanUrls` and `trailingSlash` enabled so clean directory URLs redirect to trailing-slash URLs and scraped route-relative assets load correctly.
- Added local copies/placeholders for missing active static assets including `/img/motorbackground.jpg`, generated-CSS `bg-bread.jpg` copies, policy backgrounds, root icons, `/manifest.json`, and policy icon fonts.
- Fixed malformed local Google Fonts scrape URLs to use `https://fonts.googleapis.com/...`.
- Removed active Cloudflare beacon scripts that requested missing local `js/v451...` files.
- Re-ran the active HTML/CSS asset-reference audit with comments ignored; result: `MISSING_COUNT 0`.
- Validated all six routes and representative repaired assets over local HTTP with `200` responses.

- Inspected repository structure, Git state/history, page entry points, asset layout, and project instructions.
- Confirmed there is no package/build system and no existing Memory Bank.
- Initialized all six required Memory Bank files.
- Documented the staged static-site repair strategy from `docs/prompts.md`.

## Remaining Work

- Continue using the project-owned repair stylesheet and JavaScript for future repairs.
- Perform deployment/browser network QA after pushing the Vercel/static asset hardening changes.
- Repair the homepage hero rotator. **Completed.**
- Normalize and repair shared desktop/mobile navigation and footer.
- Repair the contact page and settle on a truthful static enquiry mechanism.
- Repair finance-page presentation and links.
- Repair shop catalogue presentation and remove misleading dynamic controls.
- Determine whether any additional Vercel routing configuration is necessary after deployment QA. **Initial minimal configuration added.**
- Normalize local internal links and remove stale scrape artifacts.
- Perform full visual, responsive, accessibility, console, network, and route QA.

## Known Issues / Risks

- Multiple internal logo/Home links still target the absolute production domain.
- Nonessential remote production dependencies are still embedded in HTML and CSS, especially legacy/conditional and Open Graph references.
- Active local HTML/CSS asset references have been systematically audited after the hardening pass; no active missing local references were found by the local checker.
- Legacy analytics and Cloudflare scripts may fail or be inappropriate in the static deployment.
- Magento-derived controls may imply backend behavior that does not exist.
- Shared markup and assets are duplicated, creating consistency risk.
- Shop has different/more generated bundles and should be tested independently.
- Policies uses a different page system and references root favicon/manifest files that do not appear in the initial repository listing.
- No automated tests, linting, asset checker, or deployment config currently exists.
- The current live production domain may change independently and should not be treated as a reliable dependency.

## Decision History

- The project direction is explicitly **Option A**: repair the static scrape instead of rebuilding in Next.js.
- Future custom behavior and styling should live in a small project-owned repair layer.
- Frameworks, package managers, build steps, and backend services are excluded unless scope changes.
- Minimal Vercel configuration was added because clean no-trailing-slash deployment URLs can break the scraped pages' route-relative asset URLs unless Vercel canonicalizes them to trailing-slash directory routes.
