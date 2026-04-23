import React from 'react';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to Transform Your Smile?</h2>
            <p className={styles.description}>
              Join over 15,000+ happy patients and experience the future of dental care. Book your first appointment or choose a wellness plan today.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>
                <Calendar size={18} />
                Book Now
              </button>
              <button className={styles.btnSecondary}>
                <Phone size={18} />
                Call Us
              </button>
            </div>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.circle} />
            <div className={styles.circleSmall} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
