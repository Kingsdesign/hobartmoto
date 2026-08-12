# Progress

## Current Status

**Phase:** Baseline captured; repair work not yet implemented.

The repository contains a complete initial static scrape for all six intended routes. Memory Bank documentation now records its purpose, architecture, constraints, and planned repair sequence.

## What Exists / Works at the Repository Level

- Static entry files exist for `/`, `/about-us`, `/contact`, `/finance`, `/shop`, and `/policies`.
- Each route has local style/script assets and relevant images.
- Core business content is present: homepage promotions, company information, contact content, finance information, a motorcycle catalogue, and policy/legal text.
- Clean-route directory structure is compatible in principle with static hosting.
- Git history records the original files plus later policy, menu, and shop updates.

These observations confirm file presence only. Full browser functionality and deployment behavior have not yet been validated.

## Completed Work

- Inspected repository structure, Git state/history, page entry points, asset layout, and project instructions.
- Confirmed there is no package/build system and no existing Memory Bank.
- Initialized all six required Memory Bank files.
- Documented the staged static-site repair strategy from `docs/prompts.md`.

## Remaining Work

- Create and include the project-owned repair stylesheet and JavaScript.
- Perform and record a complete local/remote/missing asset audit.
- Repair the homepage hero rotator.
- Normalize and repair shared desktop/mobile navigation and footer.
- Repair the contact page and settle on a truthful static enquiry mechanism.
- Repair finance-page presentation and links.
- Repair shop catalogue presentation and remove misleading dynamic controls.
- Determine whether minimal Vercel routing configuration is necessary.
- Normalize local internal links and remove stale scrape artifacts.
- Perform full visual, responsive, accessibility, console, network, and route QA.

## Known Issues / Risks

- Multiple internal logo/Home links still target the absolute production domain.
- Essential and nonessential remote production dependencies are embedded in HTML and CSS.
- Missing local references have not yet been systematically categorized.
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
- Vercel configuration should be added only when actual route testing proves it necessary.
