# Sub-Services & Next.js 16 Fix Checklist

This checklist tracks the technical fixes and feature completion for the services section following the upgrade to Next.js 16.2.4.

## 1. Critical Fix: Next.js Dynamic API
- [x] **Unwrap `params` in Page:** Update `src/app/services/[slug]/page.tsx` to `await params`.
- [x] **Fix Data Fetching:** Ensure `services.find()` uses the resolved slug.
- [x] **Type Updates:** Update the `Props` interface to reflect that `params` is now a `Promise`.
- [ ] **Verify Route:** Confirm `/services/implants-dentaires` load without the "Sync Dynamic API" error.

## 2. SEO & Metadata (Phase 4)
- [ ] **MetadataBase Warning:** Set `metadataBase` in `src/app/layout.tsx` (e.g., `process.env.NEXT_PUBLIC_SITE_URL`).
- [ ] **Dynamic Title/Desc:** Implement `generateMetadata` in `[slug]/page.tsx` to show the specific service name in the browser tab.
- [ ] **Social Sharing:** Ensure Open Graph images work for individual service pages.
- [ ] **Structured Data:** Inject JSON-LD (MedicalBusiness/Dentist) into the service pages for better Google indexing.

## 3. UI/UX Polish (Phase 3 & 5)
- [ ] **Back Navigation:** Verify the "Retour aux services" link uses a smooth transition.
- [ ] **Sub-Service Cards:** Check alignment and spacing of the `CheckCircle2` icons.
- [ ] **CTA Visibility:** Ensure the "Prendre rendez-vous" button is prominent on mobile devices.
- [ ] **Theme Consistency:** Ensure the "Force White Theme" rules are applied to the new sub-pages.

## 4. Final Validation
- [ ] **Build Check:** Run `npm run build` to ensure all static params generate correctly.
- [ ] **Links Check:** Verify all 7 principal services correctly link from the homepage.
- [ ] **Navigation Flow:** Confirm the user journey from Home -> Service -> Contact is seamless.

---
**Status:** ⏳ Pending Approval
**Target File:** `src/app/services/[slug]/page.tsx`
