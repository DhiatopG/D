# Section Color Strategy Plan

## Goal
Break up the "plain white" aesthetic across the website by introducing alternating background colors to create clear visual boundaries between sections.

## Proposed Strategy: Alternating Layouts
By using alternating colors as the user scrolls, we prevent the page from feeling monotonous while maintaining a clean, professional, and clinical look suitable for a dental practice.

### Section-by-Section Breakdown

| Section | Proposed Background | Reasoning |
| --- | --- | --- |
| ✅ **1. Hero** | White (`var(--background)`) | Keeps the initial impression clean, bright, and focused on the value proposition and hero image. |
| ✅ **2. Services** | Light Slate/Gray (`var(--muted)`) | Creates the first visual break from the Hero section. Soft enough to keep text readable but distinct enough to group the service cards together. |
| ✅ **3. Testimonials** | White (`var(--background)`) | Pops back out against the gray Services section, bringing focus to patient reviews and adding contrast. |
| **4. CTA (Contact)** | Deep Blue (`var(--secondary)`) or Vibrant Blue (`var(--primary)`) | A bold, dark section that grabs attention and signals to the user that it's time to take action (book an appointment). |
| ✅ **5. Footer** | Dark Navy / Black | Anchors the bottom of the page definitively. |



## Next Steps
Once this strategy is approved or modified, we will:
1. Update `globals.css` if new color variables are needed.
2. Update the `.module.css` files for `Hero`, `Services`, `Testimonials`, and `CTA` to apply the chosen backgrounds.
3. Ensure text colors (headers, paragraphs) adapt correctly if placed on a dark background (e.g., the CTA section).
