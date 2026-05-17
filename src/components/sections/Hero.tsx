import React from 'react';
import styles from './Hero.module.css';
import { Calendar, Shield } from 'lucide-react';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <span className={styles.tagline}>Cabinet Dentaire Dr Ferjani Amir</span>
            <h1 className={styles.title}>
              Dentiste <br />
              à <span className={styles.highlight}>Ariana</span>
            </h1>
            <p className={styles.description}>
              Nous combinons une technologie de pointe avec une approche centrée sur le patient pour vous offrir les soins dentaires que vous méritez. Découvrez la différence des soins modernes.
            </p>
            <div className={styles.actions}>
              <a href="#services" className={styles.btnSecondary}>Nos Services</a>
              <Link href="/contact" className={styles.btnPrimary}>Prendre Rendez-vous</Link>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Patients Satisfaits</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Taux de Réussite</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.imageCard} ${styles.imageCardAnimated}`}>
            {/* Placeholder for dental image, using a gradient for now as a luxury background */}
            <div className={styles.luxuryBg}>
              <img 
                src="/images/hero-dental.webp" 
                alt="Premium Dental Care" 
                className={styles.luxuryImage} 
              />
              <div className={styles.floatingBadges}>
                <div className={`${styles.badge} ${styles.badge1} glass`}>
                  <Calendar size={18} />
                  <span>Réservation rapide</span>
                </div>
                <div 
                  className={`${styles.badge} ${styles.badge2} glass`}
                  style={{ top: '60%', right: '-20px' }}
                >
                  <Shield size={18} />
                  <span>Soins 100% sécurisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
