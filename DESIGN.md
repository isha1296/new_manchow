---
name: Obsidian Flame
colors:
  surface: '#1e100b'
  surface-dim: '#1e100b'
  surface-bright: '#47352f'
  surface-container-lowest: '#180b07'
  surface-container-low: '#271813'
  surface-container: '#2b1c17'
  surface-container-high: '#372621'
  surface-container-highest: '#42312b'
  on-surface: '#f9dcd4'
  on-surface-variant: '#e4beb3'
  inverse-surface: '#f9dcd4'
  inverse-on-surface: '#3e2c27'
  outline: '#ab897f'
  outline-variant: '#5b4138'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1800'
  primary-container: '#fc5a1f'
  on-primary-container: '#521300'
  inverse-primary: '#ad3300'
  secondary: '#ffb77b'
  on-secondary: '#4c2700'
  secondary-container: '#e47f02'
  on-secondary-container: '#4d2700'
  tertiary: '#a7c8ff'
  on-tertiary: '#003061'
  tertiary-container: '#3291ff'
  on-tertiary-container: '#002a55'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#842500'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#004789'
  background: '#1e100b'
  on-background: '#f9dcd4'
  surface-variant: '#42312b'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
  element-gap: 32px
---

## Brand & Style

The brand personality is sophisticated, dramatic, and intensely culinary. It targets a premium audience seeking an elevated Indo-Chinese dining experience that bridges traditional techniques with modern presentation. The UI should evoke a sense of nocturnal mystery and "wok-fired" energy.

The design style is **Minimalist Editorial** with a dark, high-contrast foundation. It utilizes cinematic spacing and asymmetric layouts to mirror the artful plating of high-end gastronomy. Subtle visual motifs—such as hairline dividers reminiscent of steam and sweeping curves inspired by the silhouette of a wok—provide a cultural nod without relying on traditional clichés. 

The overall mood is intellectual yet sensory, prioritizing high-fidelity photography over decorative UI elements.

## Colors

This design system uses a deeply recessed dark palette to allow food photography to "glow" on the screen. 

- **Primary & Secondary Orange:** Used exclusively for interactive elements and brand highlights. These represent the heat of the flame and the richness of the sauces.
- **Backgrounds:** A tiered system of near-blacks (`#090909` to `#181818`) creates depth without the use of heavy shadows, maintaining an editorial flatness.
- **Accents:** Use white for high-contrast serif typography and a muted grey for supporting body copy to maintain legibility while preserving the dark atmosphere.

## Typography

Typography is the primary vehicle for the brand’s editorial feel. 

- **Display & Headlines:** Playfair Display is used for dramatic, high-impact messaging. Large-scale headings should often use asymmetric placement or overlap photography slightly to create a layered, cinematic effect.
- **Body & Labels:** Manrope provides a clean, technical counterpoint to the decorative serif. Its high x-height ensures exceptional legibility on dark backgrounds.
- **Styling Note:** Use "Display" sizes for hero sections only. All labels should be uppercase with generous letter-spacing to act as "signposts" within the layout.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on "Cinematic White Space"—which in this case is "Black Space." 

- **Grid:** A 12-column grid is used for desktop, but elements frequently break the grid or align to an 8-column center-cut to create an asymmetric, editorial look.
- **Spacing Rhythm:** Generous vertical gaps (`section-gap`) are essential to give the high-quality photography room to breathe. 
- **Breakpoints:**
  - **Desktop (1280px+):** Full 12-column with 64px outer margins.
  - **Tablet (768px - 1279px):** 8-column grid with 40px margins.
  - **Mobile (<767px):** 4-column grid with 20px margins. Headlines should scale down significantly while body text remains consistent.

## Elevation & Depth

Depth is created through **Tonal Layering** rather than traditional shadows. This maintains the sleek, modern aesthetic of the design system.

- **Layer 0 (Base):** `#090909` for the main canvas.
- **Layer 1 (Containers/Sections):** `#151515` for section backgrounds or full-width blocks.
- **Layer 2 (Interactive Cards/Modals):** `#181818` for clickable elements like menu items or reservation cards.
- **Hairline Outlines:** Use a 1px solid border of `#FFFFFF10` (10% opacity white) on cards and inputs to define boundaries without adding visual weight. 
- **Backdrop Blurs:** Use `blur(12px)` on navigation bars and floating buttons when they scroll over content to create a sense of glass-like transparency.

## Shapes

The shape language is **Soft (0.25rem)**, leaning toward sharp to maintain a precise, professional feel. 

- **Small Elements:** Buttons and tags use the `0.25rem` radius.
- **Large Elements:** Featured dish cards or hero image containers use `rounded-lg` (`0.5rem`).
- **Signature Curve:** For decorative "steam" lines or background separators, use a custom asymmetric Bézier curve that mimics the movement of a wok toss. These should be thin, 1px strokes in primary orange.

## Components

### Buttons
- **Primary:** Solid `#E84C0E` background, white text (Manrope Bold), 0.25rem radius. Should include a small "arrow" icon (45-degree angle) for "Order Now" or "Reservations."
- **Secondary:** Transparent background with a `#FFFFFF30` border. White text.

### Menu Cards
- Use `#181818` backgrounds. Dish titles in Playfair Display (Headline-md). Prices should be subtly emphasized in Secondary Orange. 
- Image treatment: 1:1 aspect ratio with a subtle `0.5rem` corner radius.

### Input Fields
- Dark backgrounds (`#090909`) with a 1px border of `#FFFFFF20`. 
- Focused state: Border changes to Primary Orange. Labels remain in Manrope (Label-sm) above the field.

### Chips/Tags
- Used for dietary restrictions (e.g., "Spicy," "Vegan"). 
- Small, uppercase Manrope text with a `#FFFFFF10` background and `#FFFFFF` text. No borders.

### Lists
- For menu sections, use simple hairline separators (`#FFFFFF10`). Title on the left, price on the right, description below in muted gray.