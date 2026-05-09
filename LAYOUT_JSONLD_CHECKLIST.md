# Checklist: Integration JSON-LD Global (layout.tsx)

Ce document suit l'intégration des données structurées globales pour le Cabinet Dentaire Dr Ferjani Amir.

## 1. Script à intégrer dans `src/app/layout.tsx`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Cabinet dentaire Dr Ferjani Amir",
  "image": "https://www.dentavip.com/logo.png",
  "@id": "https://www.dentavip.com",
  "url": "https://www.dentavip.com",
  "telephone": "+21626790175",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 hamza ibn abdelmotaleb",
    "addressLocality": "Ariana Essoghra",
    "postalCode": "2083",
    "addressCountry": "TN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.89935,
    "longitude": 10.18378
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Monday",
    "opens": "08:30",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Tuesday",
    "opens": "08:30",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Wednesday",
    "opens": "08:30",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Thursday",
    "opens": "08:30",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Friday",
    "opens": "08:30",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "08:00",
    "closes": "13:00"
  }] 
}
</script>
```

## 2. Actions à réaliser

- [x] **Insertion dans le Layout :** Ajouter le script dans le composant `RootLayout` (généralement avant la balise `</body>` ou dans `<head>` via Next.js Metadata API if preferred).
- [ ] **Validation des coordonnées :** Vérifier que la latitude (36.89935) et longitude (10.18378) correspondent exactement à l'emplacement sur Google Maps.
- [ ] **Validation des horaires :** Confirmer que les horaires (08:30-18:00 en semaine, 08:00-13:00 samedi) sont à jour.
- [ ] **Syntax Check :** S'assurer que le JSON est valide après insertion dans le JSX (dangerouslySetInnerHTML).

---
**Status :** Prêt pour implémentation.
