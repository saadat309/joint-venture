You are a senior frontend engineer rebuilding a Framer website as a production-ready React application.

REFERENCE WEBSITE:
https://hanzo.framer.website/

GOAL:
Recreate the visual design, layout structure, and interaction feel of the reference website with high performance and smooth but lightweight animations.

TECH STACK:
- React (Vite)
- Tailwind CSS
- Framer Motion (primary animation library)
- GSAP (only when Framer Motion is insufficient)
- Lenis (smooth scrolling, subtle)
- shadcn/ui (for UI primitives only)

CONSTRAINTS:
- The site is mostly static (marketing / landing page)
- Animations must be subtle, performant, and non-blocking
- Avoid animation overuse
- Animate ONLY transform and opacity
- No layout shift
- Must perform well on slow internet and low-end devices
- Respect prefers-reduced-motion
- SEO-friendly semantic HTML

ANIMATION RULES:
- Default to Framer Motion
- Use viewport-based animations with once=true
- No scroll-jank
- GSAP allowed ONLY for complex timelines or SVG animations
- Lenis should feel natural, not exaggerated

DESIGN & THEMING REQUIREMENTS:
- Implement a centralized, token-based design system
- All colors must be defined as CSS variables (via :root or Tailwind theme config)
- No hardcoded hex/rgb values inside components
- Support easy theme updates (brand color, background, text, accent)

- Use Tailwind theme extension for:
  - colors
  - spacing
  - font sizes
  - border radius
  - shadows

- Prefer semantic utility classes:
  - bg-background, text-foreground, border-muted
  - section-padding, container-width, grid-gap

- Abstract layout spacing into reusable classes:
  - section padding
  - max-width containers
  - vertical rhythm utilities

- Components must NOT depend on specific colors or spacing
- Layout changes (padding, gaps, max-widths) should be adjustable from a single config file

- Dark/light mode support should be possible without refactoring components

GOAL:
Allow global design changes (colors, spacing, layout density) by editing theme tokens instead of touching individual components.

DELIVERABLES:
- Clean, modular component structure
- Each section as a separate React component
- Tailwind-based responsive layout
- Motion-enhanced but readable UI
- Desktop-first, mobile-optimized

WORKFLOW:
1. Build static layout first (no animations)
2. Match spacing, typography, colors
3. Add animations incrementally per section
4. Optimize performance after each section

IMPORTANT:
Do NOT invent new sections or creative changes.
Follow the reference closely but do not copy Framer-specific logic.
Think like a frontend architect, not a motion demo creator.
