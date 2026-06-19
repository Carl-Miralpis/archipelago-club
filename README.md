# ☕ The Archipelago Club - Hybrid AI-Human Promo & Waitlist Site

A high-conversion, multi-page promotional website built for a fictional modern smart-cafe and co-working space based in Calabarzon. 

This project serves as a production-grade portfolio piece demonstrating modern frontend craftsmanship, utility-first styling, strict SEO/Accessibility compliance, and execution under an **AI Pilot / Human-in-the-Loop** development workflow.

## 🚀 Tech Stack & Core Deliverables
- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS (Utility-first, fluid mobile-first layouts)
- **State & Forms:** React Server Actions / API Routes with validation
- **Performance & SEO:** 100/100 Lighthouse scores, semantic HTML, structured JSON-LD data
- **Accessibility:** WCAG 2.1 AA compliant keyboard navigation and color contrast

---

## 🤖 AI Pilot Case Study: Human Refinement Workflow

As an AI Pilot developer, this project showcases my ability to orchestrate AI generation tooling (e.g., v0.dev, ChatGPT) while providing the vital human quality control, pixel-perfect design refinement, and production hardening necessary for client delivery.

### 1. Structural Engineering vs. Raw AI Output
* **The AI Draft:** The initial LLM layout generated generic, non-semantic nested `<div>` clusters and hardcoded pixel values for spacing.
* **The Human Polish:** I refactored the markup using strictly semantic HTML tags (`<main>`, `<nav>`, `<section>`, `<article>`) to support screen readers and search crawlers. I implemented a fluid typography and spacing scale using Tailwind’s arbitrary values and relative units (`rem`, `em`, `clamp`) ensuring seamless fluid transitions between screen sizes.

### 2. Layout & Pixel-Perfect Responsive Adjustments
* **The AI Draft:** The AI generated a standard desktop grid that clipped imagery and caused horizontal scrolling layout breaks on narrow screen widths (under 360px).
* **The Human Polish:** I applied mobile-first design methodologies, building complex cross-axis alignment using CSS Flexbox layouts that dynamically realign on mobile (`flex-col lg:flex-row`), enforcing strict `overflow-hidden` constraints, and adding tactile container paddings (`px-4 sm:px-6 lg:px-8`).

### 3. Web Performance & Core Web Vitals (Optimization)
* **The AI Draft:** The AI components suggested traditional unoptimized uncompressed external images via standard standard `<img>` tags, causing a heavy Cumulative Layout Shift (CLS) and slow Largest Contentful Paint (LCP).
* **The Human Polish:** I replaced these with the native Next.js `<Image />` component, providing explicit aspect ratios, `sizes` attributes for responsive viewport src-set selection, and custom blurred base64 structural placeholder images to eliminate layout shifting during data hydration.

---

## 🛠️ Performance Audits
* **Performance:** 100% (Optimized Next.js Image components and bundled code splits)
* **Accessibility:** 100% (Strict aria-labels, focus indicators, and semantic hierarchy)
* **Best Practices:** 100% (HTTPS rules, modern JS APIs only)
* **SEO:** 100% (Configured dynamic metadata, OpenGraph cards, and robot crawler paths)