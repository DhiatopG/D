export interface SubService {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: 'implants',
    slug: 'implants-dentaires',
    title: 'Implants Dentaires',
    description: 'Des solutions permanentes et d\'apparence naturelle pour remplacer les dents manquantes et restaurer votre sourire.',
    subServices: [
      { title: 'Implant unitaire', description: 'Remplacement d\'une seule dent avec un implant et une couronne.' },
      { title: 'Implants multiples', description: 'Solutions pour plusieurs dents manquantes côte à côte.' },
      { title: 'Prothèse implanto-portée', description: 'Prothèses fixes ou amovibles stabilisées par des implants.' },
      { title: 'Greffe osseuse', description: 'Procédure pour renforcer l\'os de la mâchoire avant l\'implantation.' },
      { title: 'Implants à charge immédiate', description: 'Pose de la prothèse le jour même de l\'intervention.' },
      { title: 'All-on-4 / All-on-6', description: 'Restauration complète de l\'arcade sur 4 ou 6 implants.' }
    ]
  },
  {
    id: 'generale',
    slug: 'dentisterie-generale',
    title: 'Dentisterie Générale',
    description: 'Examens de routine, détartrages et soins préventifs pour tous les âges.',
    subServices: [
      { title: 'Consultation et bilan dentaire', description: 'Examen complet de votre santé bucco-dentaire.' },
      { title: 'Détartrage et polissage', description: 'Nettoyage professionnel pour éliminer tartre et taches.' },
      { title: 'Soins des caries', description: 'Traitements conservateurs pour restaurer les dents abîmées.' },
      { title: 'Couronnes dentaires', description: 'Protections sur mesure pour les dents fragilisées.' },
      { title: 'Bridges dentaires', description: 'Remplacement de dents manquantes par un pont fixe.' },
      { title: 'Traitement des gencives', description: 'Soins parodontaux pour des gencives saines.' }
    ]
  },
  {
    id: 'esthetique',
    slug: 'dentisterie-esthetique',
    title: 'Dentisterie Esthétique',
    description: 'Blanchiment, facettes et relooking du sourire pour booster votre confiance.',
    subServices: [
      { title: 'Blanchiment dentaire', description: 'Éclaircissement professionnel pour un sourire éclatant.' },
      { title: 'Facettes en porcelaine', description: 'Fines pellicules pour corriger forme, couleur et alignement.' },
      { title: 'Composite de stratification', description: 'Restauration esthétique directe en résine.' },
      { title: 'Contourage dentaire', description: 'Remodelage léger pour harmoniser le sourire.' },
      { title: 'Sourire Hollywood', description: 'Conception globale pour un sourire parfait.' },
      { title: 'Restauration de l\'émail', description: 'Traitements pour renforcer et protéger l\'émail.' }
    ]
  },
  {
    id: 'orthodontie',
    slug: 'orthodontie',
    title: 'Orthodontie',
    description: 'Solutions modernes comme Invisalign et bagues traditionnelles pour un alignement parfait.',
    subServices: [
      { title: 'Bagues métalliques', description: 'Appareillage traditionnel robuste et efficace.' },
      { title: 'Bagues céramiques', description: 'Option discrète avec des attaches de la couleur des dents.' },
      { title: 'Aligneurs transparents (Invisalign)', description: 'Correction invisible et amovible.' },
      { title: 'Orthodontie linguale', description: 'Appareillage fixé sur la face interne des dents.' },
      { title: 'Contention post-traitement', description: 'Dispositifs pour stabiliser l\'alignement final.' },
      { title: 'Orthodontie interceptive (enfants)', description: 'Traitements précoces pour guider la croissance.' }
    ]
  },
  {
    id: 'pediatrique',
    slug: 'soins-pediatriques',
    title: 'Soins Pédiatriques',
    description: 'Expériences dentaires douces et amusantes pour vos tout-petits.',
    subServices: [
      { title: 'Première consultation bébé', description: 'Approche douce pour familiariser l\'enfant au cabinet.' },
      { title: 'Soins des dents de lait', description: 'Traitements adaptés aux besoins des plus jeunes.' },
      { title: 'Scellements de fissures', description: 'Protection préventive contre les caries.' },
      { title: 'Fluoration préventive', description: 'Application de fluor pour renforcer les dents.' },
      { title: 'Éducation bucco-dentaire', description: 'Apprendre les bons gestes de brossage en s\'amusant.' },
      { title: 'Orthodontie pédiatrique', description: 'Suivi de la croissance et de l\'alignement.' }
    ]
  },
  {
    id: 'urgences',
    slug: 'urgences-dentaires',
    title: 'Urgences Dentaires',
    description: 'Soins rapides et fiables pour les problèmes dentaires inattendus.',
    subServices: [
      { title: 'Douleur dentaire aiguë', description: 'Soulagement immédiat des rages de dents.' },
      { title: 'Dent cassée ou fracturée', description: 'Réparation d\'urgence pour sauver la dent.' },
      { title: 'Dent avulsée (arrachée)', description: 'Réimplantation rapide en cas d\'accident.' },
      { title: 'Abcès dentaire', description: 'Traitement de l\'infection et drainage.' },
      { title: 'Couronne ou bridge décollé', description: 'Recollement ou remplacement rapide.' },
      { title: 'Saignement des gencives', description: 'Diagnostic et arrêt des saignements importants.' }
    ]
  },
  {
    id: 'chirurgie',
    slug: 'chirurgie-orale',
    title: 'Chirurgie Orale',
    description: 'Procédures chirurgicales sûres et confortables par nos experts.',
    subServices: [
      { title: 'Extraction dentaire simple', description: 'Retrait d\'une dent endommagée ou gênante.' },
      { title: 'Extraction des dents de sagesse', description: 'Procédure courante pour libérer de l\'espace.' },
      { title: 'Chirurgie des kystes', description: 'Retrait de lésions bénignes des mâchoires.' },
      { title: 'Gingivectomie', description: 'Remodelage chirurgical des gencives.' },
      { title: 'Frenectomie', description: 'Libération du frein labial ou lingual.' },
      { title: 'Chirurgie pré-implantaire', description: 'Préparation des tissus avant la pose d\'implants.' }
    ]
  }
];
