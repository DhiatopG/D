# Logo File Fix Checklist

Problem: Filename `implants-dentaires-à-ariana.png` has a special character (`à`) that causes a 404 error due to URL double-encoding.
Solution: Rename the file to `logo.png` (no special characters).

---

## File System

- [x] **1. Delete** the empty `logo.png` folder accidentally created in `public/`
- [x] **2. Copy** `implants-dentaires-à-ariana.png` and rename it to `logo.png` in `public/`
- [x] **3. Delete** the old `implants-dentaires-à-ariana.png` file to keep things clean

---

## Code Updates

- [x] **4. Update** `Header.tsx` — change `src` from `/implants-dentaires-à-ariana.png` to `/logo.png`
- [x] **5. Update** `Footer.tsx` — change `src` from `/implants-dentaires-à-ariana.png` to `/logo.png`

---

## Final Checks

- [ ] **6. Verify** no 404 error in the browser console for the logo
- [ ] **7. Verify** logo appears correctly in the navbar (white background)
- [ ] **8. Verify** logo appears correctly in the footer (dark navy background)
