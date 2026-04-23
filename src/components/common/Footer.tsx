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
              <img
                src="/logo.png"
                alt="Cabinet dentaire Dr Ferjani Amir"
                height="36"
                style={{ display: 'block' }}
              />
            </div>
            <p className={styles.brandDesc}>
              Redéfinir les soins dentaires grâce à la technologie et à des expériences patient personnalisées. Dévoués à votre sourire depuis 2012.
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
              <li><a href="#">Esthétique</a></li>
              <li><a href="#">Générale</a></li>
              <li><a href="#">Chirurgicale</a></li>
              <li><a href="#">Pédiatrique</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Entreprise</h3>
            <ul>
              <li><a href="#">À Propos</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Carrières</a></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h3>Rejoignez notre Liste Bien-être</h3>
            <p>Recevez des conseils dentaires et des actualités sur la santé bucco-dentaire directement dans votre boîte de réception.</p>
            <form className={styles.form}>
              <input type="email" placeholder="email@exemple.com" />
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
            © {new Date().getFullYear()} Dentiste. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
