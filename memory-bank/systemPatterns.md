# System Patterns

## Architecture Overview

The application is a directly served static, multi-page website. There is no application server or build output stage.

```text
Browser
  -> static host / Vercel CDN
    -> /index.html
    -> /about-us/index.html
    -> /contact/index.html
    -> /finance/index.html
    -> /shop/index.html
    -> /policies/index.html
    -> route-local CSS, JavaScript, and image files
```

## Route Pattern

Clean routes map to directories containing `index.html`:

| Public route | Entry file |
| --- | --- |
| `/` | `index.html` |
| `/about-us` | `about-us/index.html` |
| `/contact` | `contact/index.html` |
| `/finance` | `finance/index.html` |
| `/shop` | `shop/index.html` |
| `/policies` | `policies/index.html` |

Root-relative URLs are preferred for shared repairs and internal routes because route-relative paths behave differently at different directory depths.

## Page Families

### Magento/KTM scrape

The homepage, About, Contact, Finance, and Shop pages share a large Magento-derived DOM and KTM theme conventions:

- `ktm-container`, `ktm-nav`, `ktm-accordion`, and related navigation classes.
- Prototype/Magento globals such as `Mage`, `Translate`, and bundled legacy scripts.
- Bootstrap-era responsive classes.
- Repeated header, navigation, brand, and footer markup in every page.
- Generated/hash-named CSS and JavaScript bundles.

Most pages use `d9407f2651966df3bfb2caca7c610fe1.js` and common CSS hashes. Shop uses a distinct `e448ded2419375fbfc13c0f14013d72d.js` bundle and distinct all-media CSS; Finance also contains extra catalogue-related assets.

### Policies page

`policies/index.html` is separate legacy markup based on Bootstrap, jQuery 1.11.3, `jquery.alton.js`, and page-specific `script.js`/`style.css`. It should not be assumed to support the same selectors or JavaScript globals as Magento-derived pages.

## Asset Organization

- Root page assets: `/css`, `/js`, `/imgs`.
- Route assets: `/<route>/css`, `/<route>/js`, `/<route>/imgs`.
- Assets are substantially duplicated between route directories due to scraping.
- Some CSS embeds absolute URLs to the production domain for fonts and theme imagery.
- Some HTML includes remote favicon, social-image, legacy browser, analytics, and Cloudflare references.

## Maintenance Pattern

Future maintainable repairs should be isolated in:

- `/assets/css/fixes.css`
- `/assets/js/site.js`

These files are planned but were not present at Memory Bank initialization. Shared code should use progressive enhancement and defensive page detection so one script can load safely on pages with differing markup.

## Change Strategy

- Prefer additive overrides over modifying minified/generated bundles.
- Use precise HTML edits without reformatting entire files.
- Keep shared behavior idempotent and safe when an expected element is absent.
- Preserve intentional external links; normalize only internal navigation.
- Avoid coupling to Magento server endpoints because the repository has no Magento backend.
- Treat external integrations as optional enhancements, never as prerequisites for core page rendering.

## Critical Implementation Paths

1. **Page boot:** HTML loads route-local CSS and legacy JavaScript; inline scripts initialize Magento/KTM behavior.
2. **Shared navigation:** duplicated desktop/mobile markup must remain synchronized on all applicable pages.
3. **Responsive layout:** legacy Bootstrap/theme CSS determines breakpoints; repairs must override it carefully.
4. **Static catalogue:** listing markup is fixed at scrape time; controls must not claim unavailable dynamic behavior.
5. **Contact actions:** phone/email/map links can work statically; form processing cannot work without an external endpoint.
6. **Deployment routing:** directory indexes must resolve with clean URLs and direct refreshes.
