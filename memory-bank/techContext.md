# Technical Context

## Technology Stack

- HTML5/XHTML-style static documents
- CSS, including generated Magento/KTM theme CSS
- Vanilla JavaScript plus legacy bundled libraries
- Bootstrap 3-era layout/styles
- Prototype/Magento JavaScript APIs on Magento-derived pages
- jQuery and KTM plugins on the scraped pages
- Separate jQuery 1.11.3/Bootstrap/Alton implementation on the Policies page
- Git for source control
- Vercel as the intended static deployment platform (documented intent; no `vercel.json` currently exists)

## Repository Location

`/Users/talsmat/Projects/hobartmoto`

## Development Model

There is no installation or build step. Serve the repository root through a static HTTP server. A typical available-Python command is:

```zsh
cd /Users/talsmat/Projects/hobartmoto
python3 -m http.server 8000
```

Then test routes at `http://localhost:8000/`, `/about-us/`, `/contact/`, `/finance/`, `/shop/`, and `/policies/`. Plain Python serving does not exactly emulate every Vercel no-trailing-slash behavior, so deployment-routing checks may require separate validation.

## Confirmed Dependencies Embedded in Assets

- Magento frontend code and Prototype-era utilities
- Bootstrap 3.3.5 content in generated CSS
- jQuery
- KTM accordion/theme plugins
- Owl Carousel references
- Font Awesome on the Policies page
- Google Universal Analytics (`UA-3081278-59`), now a legacy/stale integration candidate
- Cloudflare email-obfuscation scripts in route copies

These are vendored/scraped browser assets, not package-managed dependencies.

## Constraints

- Do not add npm, Yarn, pnpm, a framework, or a bundler for routine repairs.
- Do not depend on server-side code or Magento endpoints.
- The large hash-named bundles are generated/minified third-party artifacts and are difficult to maintain safely.
- Relative URL semantics vary by route; prefer root-relative paths for new shared assets.
- Some current CSS and HTML depend on `www.hobartmotorcycles.com.au`, so offline/local reliability is incomplete.
- Browser validation is essential because parsing, runtime globals, and responsive behavior cannot be confirmed by static inspection alone.

## Validation Practices

For each implementation:

1. Inspect `git status` and the relevant source before editing.
2. Serve from the repository root over HTTP.
3. Check every affected route and shared component.
4. Check desktop and mobile viewports.
5. Inspect browser console and network failures.
6. Run a local asset-reference checker for HTML/CSS/JS/image/font paths.
7. Verify keyboard interaction and visible focus for changed controls.
8. Review `git diff --check`, the complete diff, and final Git status.

## Tooling Notes

- Shell environment is macOS with Oh My Zsh conventions.
- No project-specific lint, test, build, or format commands currently exist.
- Avoid running formatters over scraped files because they would create very large unrelated diffs.
- Use browser automation when changing interactive or visual behavior.
