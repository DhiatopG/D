# Force White Theme Checklist

This checklist tracks the steps to permanently disable dark mode and ensure the "Clinical White" aesthetic is forced globally.

## 1. Global Theme Locking [COMPLETED]
- [x] **Remove Dark Mode Overrides (`globals.css`)**
  - [x] Delete the entire `@media (prefers-color-scheme: dark)` block.
  - [x] Ensure `:root` variables are the only source of truth.
- [x] **Lock Global Background**
  - [x] Set `body` background explicitly to `var(--background)` (#FFFFFF).
  - [x] Set `body` text color explicitly to `var(--foreground)` (#002D44).

## 2. Component White-Out [COMPLETED]
- [x] **Hero Section (`Hero.module.css`)**
  - [x] Ensure background is solid `var(--background)`.
  - [x] Verify title and description are using the dark Navy (`var(--secondary)`).
- [x] **Header (`Header.module.css`)**
  - [x] Ensure navigation links are Deep Navy (#002D44).
  - [x] Remove any glass effects that might look "dark" when layered.
- [x] **Testimonials (`Testimonials.module.css`)**
  - [x] Verify cards are pure white with a clean light border (`#E2E8F0`).

## 3. Review & Verification
- [ ] **System Toggle Test**
  - [ ] Switch system to Dark Mode and verify the website stays 100% white.
- [ ] **Contrast Audit**
  - [ ] Ensure no white text is hidden on white backgrounds.
  - [ ] Confirm the ODL Blue (#00AEEF) buttons pop correctly.
