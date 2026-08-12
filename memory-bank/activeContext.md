# Active Context

## Current Focus

The Memory Bank has been initialized from the repository baseline. The next planned body of work is the staged repair of the existing static scrape, following the sequence documented in `docs/prompts.md`.

## Current Repository State

- Branch: `main`, tracking `origin/main`.
- The tracked site contains six HTML entry points and route-local copies of CSS, JavaScript, and images.
- No package manifest, framework, build configuration, test runner, or Vercel configuration is currently present.
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
2. Repair the homepage three-image hero rotator.
3. Repair shared desktop/mobile navigation and footer behavior.
4. Repair contact-page layout and provide an honest static-compatible enquiry path.
5. Repair finance-page content, links, and responsive presentation.
6. Repair the shop catalogue while clearly retaining only static functionality.
7. Harden Vercel routing and normalize internal links; add configuration only if required.
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

- The actual Vercel project configuration and production behavior have not yet been inspected.
- Many local and remote asset references require a formal automated audit.
- Existing absolute links can send users back to the legacy domain.
- Google Universal Analytics and Cloudflare email-decode artifacts may be stale.
- Duplicated route-local assets make fixes easy to apply inconsistently.
- The shop references different bundle names from most other Magento-derived pages.
- The policy page has a separate architecture and likely missing favicon/manifest assets.
