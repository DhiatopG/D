import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { 
  Baby, 
  Gem, 
  Activity, 
  Flame, 
  Smile, 
  HeartPulse,
  Syringe
} from 'lucide-react';

const services = [
  {
    title: 'Implants Dentaires',
    description: 'Des solutions permanentes et d\'apparence naturelle pour remplacer les dents manquantes et restaurer votre sourire.',
    icon: <Syringe size={32} />
  },
  {
    title: 'Dentisterie Générale',
    description: 'Examens de routine, détartrages et soins préventifs pour tous les âges.',
    icon: <Smile size={32} />
  },
  {
    title: 'Dentisterie Esthétique',
    description: 'Blanchiment, facettes et relooking du sourire pour booster votre confiance.',
    icon: <Gem size={32} />
  },
  {
    title: 'Orthodontie',
    description: 'Solutions modernes comme Invisalign et bagues traditionnelles pour un alignement parfait.',
    icon: <Activity size={32} />
  },
  {
    title: 'Soins Pédiatriques',
    description: 'Expériences dentaires douces et amusantes pour vos tout-petits.',
    icon: <Baby size={32} />
  },
  {
    title: 'Urgences Dentaires',
    description: 'Soins rapides et fiables pour les problèmes dentaires inattendus.',
    icon: <HeartPulse size={32} />
  },
  {
    title: 'Chirurgie Orale',
    description: 'Procédures chirurgicales sûres et confortables par nos experts.',
    icon: <Flame size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Notre Expertise</span>
          <h2 className={styles.title}>Services Dentaires <span className={styles.highlight}>Complets</span></h2>
          <p className={styles.subtitle}>De l'entretien de routine aux procédures avancées, nous couvrons tout ce dont vous avez besoin pour un sourire sain toute votre vie.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a href="#" className={styles.link}>En Savoir Plus →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
