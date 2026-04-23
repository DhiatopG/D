import React from 'react';
import styles from './Footer.module.css';
import { Send, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoDot} />
              Dentiste<span>.</span>
            </div>
            <p className={styles.brandDesc}>
              Redefining dental care through technology and personalized patient experiences. Dedicated to your smile since 2012.
            </p>
            <div className={styles.socials}>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Expertise</h3>
            <ul>
              <li><a href="#">Cosmetic</a></li>
              <li><a href="#">General</a></li>
              <li><a href="#">Surgical</a></li>
              <li><a href="#">Pediatric</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h3>Join our Wellness List</h3>
            <p>Get dental tips and oral health updates directly in your inbox.</p>
            <form className={styles.form}>
              <input type="email" placeholder="email@example.com" />
              <button type="submit">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <span><MapPin size={16} /> 14 hamza ibn abdelmotaleb, Cebalat Ben Ammar 2083</span>
            <span><Phone size={16} /> +216 26 790 175</span>
            <span><Mail size={16} /> care@dentiste.com</span>
          </div>
          <div className={styles.copyright}>
            © 2024 Dentiste. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
