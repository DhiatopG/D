# Logo Integration Checklist

Logo file: `public/implants-dentaires-à-ariana.png`

---

## Header (Navbar) — Primary

- [x] **1. Remove** the `<span className={styles.logoDot} />` (cyan diamond dot)
- [x] **2. Remove** the text `Dentiste<span>.</span>`
- [x] **3. Add** an `<img>` tag pointing to `/implants-dentaires-à-ariana.png`
- [ ] **4. Set** `alt="Cabinet dentaire Dr Ferjani Amir"` for accessibility & SEO
- [ ] **5. Set** `height="44"` so the logo fits neatly inside the navbar height
- [ ] **6. Verify** the logo is vertically centered in the navbar on desktop
- [ ] **7. Verify** the logo is visible and not cropped on mobile

---

## Footer — Optional

- [x] **8. Add** a smaller version of the logo in the footer brand section
- [x] **9. Set** `height="36"` for the footer logo (slightly smaller than navbar)

---

## Final Checks

- [ ] **10. Check** logo renders correctly on white background (navbar)
- [ ] **11. Check** logo renders correctly on dark/navy background (footer, if added)
- [ ] **12. Check** no old "Dentiste." text remains anywhere on the page
