# Website Redesign Checklist (ODL Blue & White)

This checklist tracks the progress of migrating the design from "Clinical Seafoam" to the "ODL Cyan Blue & White" palette.

## 1. Global Style Tokens [COMPLETED]
- [x] Update `:root` variables in `src/app/globals.css`
  - [x] `--primary`: Change to `#00AEEF` (Cyan Blue)
  - [x] `--secondary`: Change to `#002D44` (Deep Navy)
  - [x] `--background`: Change to `#FFFFFF` (Pure White)
  - [x] `--accent`: Change to `#E0F2FE` (Light Sky Blue)
- [x] Update `::selection` background to match new primary.

## 2. Component Refactoring (CSS Modules) [COMPLETED]
- [x] **Testimonials Section**
  - [x] Replace `#004D43` placeholders with `var(--primary)`.
  - [x] Update "Read more" link colors.
  - [x] Update star icon colors.
- [x] **Hero Section**
  - [x] Update main background or decorative gradients.
  - [x] Update primary CTA button colors.
- [x] **Header / Navigation**
  - [x] Update logo color (if applicable).
  - [x] Update "Book Now" button to match ODL's vibrant blue.
  - [x] Set navigation link colors to Deep Navy.
- [x] **Footer**
  - [x] Update background to Deep Navy or keep consistent with page background.
  - [x] Update icon colors and link hovers.

## 3. UI/UX Polishing
- [ ] Ensure all `lucide-react` icons are using consistent primary colors.
- [ ] Add subtle shadows to cards to match the ODL "floaty" look.
- [ ] Verify hover states for all interactive elements.

## 4. Final Review
- [ ] Audit all sections for "Seafoam Green" leftovers.
- [ ] Verify accessibility (contrast ratios) for white text on cyan blue.
