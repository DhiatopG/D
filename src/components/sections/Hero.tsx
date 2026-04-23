import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { Calendar, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.tagline}>Advanced Digital Dentistry</span>
            <h1 className={styles.title}>
              Modern Smiles <br />
              Starting with <span className={styles.highlight}>Confidence.</span>
            </h1>
            <p className={styles.description}>
              We combine state-of-the-art technology with a patient-first approach to give you the dental care you deserve. Experience the difference in modern patient care.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Our Services</button>
              <button className={styles.btnSecondary}>Book Appointment</button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Happy Patients</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <motion.div 
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Placeholder for dental image, using a gradient for now as a luxury background */}
            <div className={styles.luxuryBg}>
              <img 
                src="/images/hero-dental.png" 
                alt="Premium Dental Care" 
                className={styles.luxuryImage} 
              />
              <div className={styles.floatingBadges}>
                <motion.div 
                  className={`${styles.badge} glass`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Calendar size={18} />
                  <span>Next Gen Booking</span>
                </motion.div>
                <motion.div 
                  className={`${styles.badge} glass`}
                  style={{ top: '60%', right: '-20px' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Shield size={18} />
                  <span>100% Secure Care</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
