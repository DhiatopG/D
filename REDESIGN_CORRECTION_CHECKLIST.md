# Redesign Correction Checklist (White-First Theme)

This checklist tracks the corrections to ensure the site is primarily white with ODL blue accents, and that the reviews section is fully functional.

## 1. "Clean White" Reset [COMPLETED]
- [x] **Global Styles (`globals.css`)**
  - [x] Ensure `--background` is pure `#FFFFFF`.
  - [x] Remove any global radial gradients that make the background look "blueish".
- [x] **Hero Section**
  - [x] Remove radial gradients from `Hero.module.css`.
  - [x] Set section background to solid white or a very subtle off-white.
- [x] **Footer Section**
  - [x] Remove blue radial gradients from the footer background.
  - [x] Ensure the footer background is either solid Navy (`--secondary`) or matches the page background.

## 2. Fix Reviews (Testimonials) [COMPLETED]
- [x] **Component Logic (`Testimonials.tsx`)**
  - [x] Audit `ReviewCard` for any rendering bugs or layout conflicts.
  - [x] Verify `shouldShowReadMore` logic is triggering correctly on all screen sizes.
  - [x] Ensure `startIndex` and `cardsToShow` are working correctly in the slider.
- [x] **Styling (`Testimonials.module.css`)**
  - [x] Fix the `isExpanded` class application to ensure the fade effect disappears when expanded.
  - [x] Update the fade gradient to use pure white (`#FFFFFF`) to match the card background.
  - [x] Ensure the "Read more" link color is professional (either primary blue or a muted navy).

## 3. ODL Blue Accents [COMPLETED]
- [x] **Buttons & CTAs**
  - [x] Verify all primary buttons use `#00AEEF`.
  - [x] Ensure buttons have white text and clean hover states.
- [x] **Section Utilities**
  - [x] Create a `.blueSection` utility for solid blue backgrounds (like "Why Choose Us").

## 4. Final Verification
- [ ] Check mobile responsiveness of the expanded cards.
- [ ] Verify that no "Seafoam Green" or "Muddy Gradients" remain.
- [ ] Confirm "Read more" functions smoothly without jumping the slider.
