import React, { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="Cabinet dentaire Dr Ferjani Amir"
            height="44"
            style={{ display: 'block' }}
          />
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>À propos</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <div className={styles.mobilePhone}>
            <a href="tel:+21626790175">
              <Phone size={18} />
              <span>+216 26 790 175</span>
            </a>
          </div>
        </nav>

        <div className={styles.cta}>
          <a href="tel:+21626790175" className={styles.phone}>
            <Phone size={18} />
            <span>+216 26 790 175</span>
          </a>
          <button className={styles.mobileMenuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
