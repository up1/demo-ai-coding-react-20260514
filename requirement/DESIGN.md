---
name: Neon Tokyo — Daybreak
colors:
  surface: '#fcf8ff'
  surface-dim: '#d9d7f4'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e8e5ff'
  surface-container-highest: '#e2e0fd'
  on-surface: '#19192f'
  on-surface-variant: '#5b3f44'
  inverse-surface: '#2e2e45'
  inverse-on-surface: '#f2efff'
  outline: '#8f6f74'
  outline-variant: '#e4bdc3'
  surface-tint: '#bc0051'
  primary: '#b7004f'
  on-primary: '#ffffff'
  primary-container: '#e40a65'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c0'
  secondary: '#006b54'
  on-secondary: '#ffffff'
  secondary-container: '#00f9c7'
  on-secondary-container: '#006e57'
  tertiary: '#6e5e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c6aa0a'
  on-tertiary-container: '#4b3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0017'
  on-primary-fixed-variant: '#90003d'
  secondary-fixed: '#24ffcd'
  secondary-fixed-dim: '#00e0b3'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#00513f'
  tertiary-fixed: '#ffe25a'
  tertiary-fixed-dim: '#e3c530'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#fcf8ff'
  on-background: '#19192f'
  surface-variant: '#e2e0fd'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
---

# Neon Tokyo — Daybreak

## North Star: "Electric Daylight"
Cyberpunk-inspired, but adapted for the light. Clean white backgrounds with high-contrast neon accents. Futuristic, technical, and high-visibility.

## Colors
- **Primary (`#ff2d78`):** Hot pink neon — CTAs, focus states, active elements.
- **Secondary (`#00ffcc`):** Cyan neon — links, secondary actions, data highlights.
- **Tertiary (`#ffe04a`):** Warm neon yellow — badges, warnings, emphasis.
- **Background:** Pure white or extremely light gray.
- **Neutral (`#28283e`):** Deep navy/charcoal for text and structural lines.
- Use neon colors as vibrant accents to guide the eye across the light canvas.

## Glow Effects (Core Pattern)
- **Neon Aura:** Instead of dark glows, use `box-shadow: 0 4px 12px rgba(255, 45, 120, 0.15)` for a soft color tint on light surfaces.
- **Button Interaction:** `box-shadow: 0 0 12px rgba(255, 45, 120, 0.3)` on hover.
- **Border Focus:** `border: 2px solid #ff2d78` to clearly define interactive elements.
- Keep glows subtle; they should look like light reflecting off a white surface, not a light source in a dark room.

## Typography
- **Headlines:** Sora — geometric and futuristic. Use bold weight for strong hierarchy.
- **Body:** Inter — high legibility for long-form content on light backgrounds.
- **Labels:** Space Grotesk — technical, monospaced feel for metadata.

## Elevation
- Surface hierarchy via subtle neutral shifts (White base → Light Gray containers).
- Use thin, crisp borders (`1px`) to define sections.
- Depth is conveyed through colored "auras" rather than traditional heavy black shadows.

## Components
- **Buttons:** White background with a bold neon border, or solid neon fill with high-contrast text.
- **Cards:** White surface with a thin neutral border (20% opacity).
- **Inputs:** White fill, neutral border, switches to a primary neon border with a soft aura on focus.

## Rules
- Maximum 2 neon accent colors per view to maintain a clean "Daybreak" aesthetic.
- Neon on light is encouraged for high-energy interaction points.
- Ensure all text on neon backgrounds meets accessibility standards (use dark neutral text on yellow/cyan if needed).