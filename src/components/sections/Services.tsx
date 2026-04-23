import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { 
  Baby, 
  Gem, 
  Activity, 
  Flame, 
  Smile, 
  HeartPulse 
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and preventative care for all ages.',
    icon: <Smile size={32} />
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and smile makeovers to boost your confidence.',
    icon: <Gem size={32} />
  },
  {
    title: 'Orthodontics',
    description: 'Modern solutions like Invisalign and traditional braces for perfect alignment.',
    icon: <Activity size={32} />
  },
  {
    title: 'Pediatric Care',
    description: 'Gentle and fun dental experiences for your little ones.',
    icon: <Baby size={32} />
  },
  {
    title: 'Emergency Dental',
    description: 'Fast and reliable care for unexpected dental issues.',
    icon: <HeartPulse size={32} />
  },
  {
    title: 'Oral Surgery',
    description: 'Safe and comfortable surgical procedures by our experts.',
    icon: <Flame size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Our Expertise</span>
          <h2 className={styles.title}>Comprehensive Dental <span className={styles.highlight}>Services</span></h2>
          <p className={styles.subtitle}>From routine maintenance to advanced procedures, we cover everything you need for a lifelong healthy smile.</p>
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
              <a href="#" className={styles.link}>Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
