# Implementation Plan: Testimonial Reviews Fix

This plan outlines the steps to resolve the layout and functionality issues with the "Read more" feature in the Testimonials section.

## Current Issues
- **Flexbox Stretching:** Expanding one card causes all cards in the row to stretch, creating excessive white space.
- **Inconsistent Truncation:** "Read more" trigger (200 chars) doesn't match CSS clamping (5 lines).
- **Layout Shifting:** Sudden height changes snap the UI, making it feel unpolished.
- **Extreme Length:** Very long reviews take up too much vertical space in the slider.

## Proposed Solutions

### Option A: Premium Modal Overlay (Recommended)
This approach moves the full review to a focused modal, keeping the slider clean.

1.  **Create a `ReviewModal` Component:**
    - Shared design with the review card but larger.
    - Backdrop blur (glassmorphism) for clinical elegance.
    - Scrollable text area for long reviews.
2.  **Update "Read more" logic:**
    - Clicking "Read more" opens the modal instead of expanding inline.
3.  **Refine Truncation:**
    - Keep CSS line-clamp at 5 lines.
    - Only show "Read more" if the content actually overflows.

### Option B: Enhanced Inline Expansion
If keeping everything inline is preferred, we will focus on stability and animation.

1.  **Animate Height:**
    - Use `framer-motion`'s `layout` prop or `AnimatePresence` to smoothly grow the card.
2.  **Independent Card Height:**
    - Change `align-items` to `flex-start` on the slider track.
    - Set a consistent `min-height` for collapsed cards to keep them aligned.
3.  **Truncation Fade:**
    - Add a subtle linear-gradient fade at the bottom of the 5th line to indicate more content.

## Technical Implementation Steps

### 1. Truncation Logic (Applicable to both)
- Use a `useRef` to measure the `scrollHeight` of the text container.
- Update the `isTruncated` state based on whether `scrollHeight > clientHeight`.

### 2. Styling Improvements
- **CSS:** Update `Testimonials.module.css` to handle `flex-start` alignment.
- **Animations:** Add transition properties for any height changes.

## Selection Required
Please specify if you prefer **Option A (Modal)** or **Option B (Inline)**.
