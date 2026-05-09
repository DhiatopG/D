import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Baby, 
  Gem, 
  Activity, 
  Flame, 
  Smile, 
  HeartPulse,
  Syringe
} from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  implants: <Syringe size={32} />,
  generale: <Smile size={32} />,
  esthetique: <Gem size={32} />,
  orthodontie: <Activity size={32} />,
  pediatrique: <Baby size={32} />,
  urgences: <HeartPulse size={32} />,
  chirurgie: <Flame size={32} />
};

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
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className={styles.icon}>{iconMap[service.id]}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={`/services/${service.slug}`} className={styles.link}>
                En Savoir Plus →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
