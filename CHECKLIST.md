# Checklist SEO - Cabinet Dentaire Dr Ferjani Amir

Ce document détaille les optimisations SEO à mettre en place pour le site du Cabinet Dentaire Dr Ferjani Amir à Ariana.

## 1. Titres & H1 par Service

| Slug | Titre (Title Tag) | H1 (Titre Principal) |
| :--- | :--- | :--- |
| `implants-dentaires` | Meilleur Dentiste Implants Dentaires à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Implants Dentaires à Ariana |
| `dentisterie-generale` | Meilleur Dentiste Généraliste à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Dentisterie Générale à Ariana |
| `dentisterie-esthetique` | Meilleur Dentiste Esthétique à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Dentisterie Esthétique à Ariana |
| `orthodontie` | Meilleur Dentiste Orthodontie à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Orthodontie à Ariana |
| `soins-pediatriques` | Meilleur Dentiste Soins Pédiatriques à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Soins Pédiatriques à Ariana |
| `urgences-dentaires` | Meilleur Dentiste Urgences Dentaires à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Urgences Dentaires à Ariana |
| `chirurgie-orale` | Meilleur Dentiste Chirurgie Orale à Ariana \| Cabinet Dentaire Dr Ferjani Amir \| près de chez vous | Chirurgie Orale à Ariana |

## 2. Meta Descriptions (Français)

- **Implants Dentaires :** Découvrez nos solutions d'implants dentaires de haute qualité à Ariana pour restaurer votre sourire de manière durable et naturelle avec le Dr Ferjani Amir.
- **Dentisterie Générale :** Soins dentaires complets à Ariana : bilan, détartrage et traitements conservateurs. Le Cabinet du Dr Ferjani Amir assure la santé bucco-dentaire de votre famille.
- **Dentisterie Esthétique :** Sublimez votre sourire à Ariana. Blanchiment, facettes et relooking dentaire avec l'expertise du Dr Ferjani Amir pour un résultat éclatant.
- **Orthodontie :** Alignez vos dents avec les dernières technologies d'orthodontie à Ariana. Invisalign et bagues traditionnelles au Cabinet du Dr Ferjani Amir.
- **Soins Pédiatriques :** Des soins dentaires doux et adaptés pour vos enfants à Ariana. Le Dr Ferjani Amir crée une expérience rassurante pour les plus petits.
- **Urgences Dentaires :** Douleur aiguë ou dent cassée ? Urgences dentaires à Ariana. Le Dr Ferjani Amir vous reçoit rapidement pour soulager vos douleurs.
- **Chirurgie Orale :** Expertise en chirurgie orale à Ariana : extractions complexes, dents de sagesse et soins parodontaux réalisés avec précision par le Dr Ferjani Amir.

## 3. Tâches Techniques

- [x] **Fix `metadataBase` :** Ajouter `metadataBase: new URL('https://www.dentavip.com')` dans `src/app/layout.tsx`.
- [x] **Data Mapping :** Créer un objet `seoMeta` dans `src/app/services/[slug]/page.tsx` contenant les titres et descriptions ci-dessus.
- [x] **Dynamic SEO :** Mettre à jour la fonction `generateMetadata` pour utiliser le mapping SEO.
- [x] **H1 Dynamic :** Modifier le rendu de la page pour que le titre principal utilise la formule `[Service] à Ariana`.
- [ ] **Structured Data (JSON-LD) :** Injecter un script `application/ld+json` pour chaque service (type `Dentist` / `MedicalBusiness`).
- [ ] **Open Graph :** Configurer les images de partage social pour chaque service sur `https://www.dentavip.com`.

## 4. Structure JSON-LD (Exemple)

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Cabinet Dentaire Dr Ferjani Amir",
  "image": "https://www.dentavip.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 Hamza Ibn Abdelmotaleb",
    "addressLocality": "Ariana Essoghra",
    "postalCode": "2083",
    "addressCountry": "TN"
  },
  "url": "https://www.dentavip.com/services/[slug]",
  "telephone": "+21626790175",
  "priceRange": "$$"
}
```

---
**Status :** En attente de revue finale.
