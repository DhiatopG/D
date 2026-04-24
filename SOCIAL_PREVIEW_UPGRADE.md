# Social Preview & Branding Upgrade Checklist

This checklist tracks the steps to replace the Vercel branding with the **Dentiste** brand identity and fix the missing reviews on the live site.

---

## 1. File Preparation
- [x] **Copy Logo**: Ensure `public/logo.png` is copied to `src/app/opengraph-image.png`.
- [ ] **Favicon Check**: (Optional) Delete the old `src/app/favicon.ico` to ensure the new metadata takes priority.

---

## 2. Code Updates (Metadata)
- [x] **Update `layout.tsx`**: Add the `icons`, `openGraph`, and `twitter` fields to the `metadata` object.
- [x] **Verify URL**: Ensure the `url` in `openGraph` matches `https://d-beta-nine.vercel.app`.

---

## 3. Vercel Configuration (Live Site Fixes)
- [ ] **Environment Variables**: Add `FEATURABLE_API_KEY` and `FEATURABLE_WIDGET_ID` to the Vercel Dashboard (Project Settings > Environment Variables).
- [ ] **Deploy**: Push changes to GitHub or trigger a manual **Redeploy** in the Vercel dashboard.

---

## 4. Final Verification
- [ ] **Browser Tab**: Verify the dentist logo appears in the browser tab (may require a hard refresh: `Ctrl + F5`).
- [ ] **Link Preview**: Paste the URL into WhatsApp, Slack, or a Social Media tool to verify the large logo preview.
- [ ] **Reviews**: Verify that patient reviews are now visible on the live `d-beta-nine.vercel.app` site.
