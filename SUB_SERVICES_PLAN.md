# Sub-Services Implementation Plan

This plan outlines the expansion of the dental clinic's service offerings by introducing dedicated sub-pages for each principal service category.

## 1. User Journey Flow
- **Step 1 (Homepage):** User explores the main `Services` grid.
- **Step 2 (Click):** User clicks "En Savoir Plus" or the service card itself.
- **Step 3 (Redirect):** System routes them to `/services/[service-slug]`.
- **Step 4 (Service Page):** User arrives at a dedicated page detailing the specific category and its sub-services.

## 2. Service Hierarchy

### Implants Dentaires
- [x] Implant unitaire
- [x] Implants multiples
- [x] Prothèse implanto-portée
- [x] Greffe osseuse
- [x] Implants à charge immédiate
- [x] All-on-4 / All-on-6

### Dentisterie Générale
- [x] Consultation et bilan dentaire
- [x] Détartrage et polissage
- [x] Soins des caries
- [x] Couronnes dentaires
- [x] Bridges dentaires
- [x] Traitement des gencives

### Dentisterie Esthétique
- [x] Blanchiment dentaire
- [x] Facettes en porcelaine
- [x] Composite de stratification
- [x] Contourage dentaire
- [x] Sourire Hollywood
- [x] Restauration de l'émail

### Orthodontie
- [x] Bagues métalliques
- [x] Bagues céramiques
- [x] Aligneurs transparents (Invisalign)
- [x] Orthodontie linguale
- [x] Contention post-traitement
- [x] Orthodontie interceptive (enfants)

### Soins Pédiatriques
- [x] Première consultation bébé
- [x] Soins des dents de lait
- [x] Scellements de fissures
- [x] Fluoration préventive
- [x] Éducation bucco-dentaire
- [x] Orthodontie pédiatrique

### Urgences Dentaires
- [x] Douleur dentaire aiguë
- [x] Dent cassée ou fracturée
- [x] Dent avulsée (arrachée)
- [x] Abcès dentaire
- [x] Couronne ou bridge décollé
- [x] Saignement des gencives

### Chirurgie Orale
- [x] Extraction dentaire simple
- [x] Extraction des dents de sagesse
- [x] Chirurgie des kystes
- [x] Gingivectomie
- [x] Frenectomie
- [x] Chirurgie pré-implantaire

---

## 2. Technical Implementation Checklist

### Phase 1: Data Modeling
- [x] Create `src/data/services.ts` to store all service data centrally.
- [x] Define a `Service` type/interface including `slug`, `title`, `description`, and `subServices`.

### Phase 2: Dynamic Routing (Next.js App Router)
- [x] Create directory: `src/app/services/[slug]/`.
- [x] Implement `page.tsx` for dynamic service rendering.
- [x] Generate static params for better performance (`generateStaticParams`).

### Phase 3: Components & UI
- [x] Design a shared `ServiceHero` component.
- [x] Create a `SubServiceList` component to render the checkboxes/list.
- [x] Update the main `Services` section to link to dynamic routes.

### Phase 4: SEO & Metadata
- [x] Implement dynamic `generateMetadata` for each service page.
- [ ] Add structured data (JSON-LD) for medical services.

### Phase 5: Testing & Polish
- [ ] Responsive design check for sub-service grids.
- [ ] Navigation flow verification.
