import React from 'react';
import styles from './Header.module.css';
import { Menu, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          Dentiste<span>.</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.cta}>
          <a href="tel:+21626790175" className={styles.phone}>
            <Phone size={18} />
            <span>+216 26 790 175</span>
          </a>
          <button className={styles.mobileMenu}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
