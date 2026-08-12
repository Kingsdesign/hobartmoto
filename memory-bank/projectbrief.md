# Project Brief

## Project

Hobart Motorcycles is a static copy of the business website at `https://www.hobartmotorcycles.com.au/`. This repository exists to host and repair that static site while retaining its established content, branding, and clean public routes.

## Primary Goal

Deliver a reliable, responsive, accessible static website for Hobart Motorcycles without rebuilding the site in a framework or restoring the original Magento backend.

## Scope

The public site comprises six routes:

- `/` — homepage and promotional content
- `/about-us` — company story and business information
- `/contact` — contact details and enquiry experience
- `/finance` — motorcycle finance and related information
- `/shop` — static motorcycle catalogue
- `/policies` — terms, shipping, returns, and policy content

## Core Requirements

- Preserve direct static-file hosting and compatibility with Vercel.
- Keep clean route behavior for directory-based `index.html` pages.
- Repair the existing scrape rather than migrate it to Next.js or another framework.
- Do not introduce a package manager, bundler, build step, backend, database, or runtime dependency unless project scope is explicitly changed.
- Preserve the existing visual identity and business content while fixing broken behavior.
- Use locally hosted assets where practical and remove stale scrape dependencies.
- Keep project-owned repairs separate from large scraped/generated Magento files.
- Maintain responsive behavior and usable keyboard/accessibility behavior.
- Validate changes through HTTP rather than `file://`.
- Avoid broad reformatting of scraped HTML or generated CSS and JavaScript.

## Non-Goals

- Recreating Magento ecommerce functionality.
- Supporting checkout, cart, accounts, live inventory, server-side filtering, or transactional forms without a separately approved service.
- Rewriting the site in a modern application framework.
- Refactoring all duplicated scraped assets as part of routine repairs.

## Success Criteria

- All six routes load correctly via local HTTP and the deployment target.
- Required local CSS, JavaScript, images, fonts, and icons resolve without unexpected errors.
- Shared navigation and footer behavior are consistent across pages.
- Homepage hero, mobile navigation, contact experience, finance content, shop catalogue, and policy navigation work within static-site limitations.
- Internal links remain on the local deployment rather than unexpectedly redirecting to the legacy production domain.
- Browser console and network checks reveal no preventable runtime or missing-asset errors.
