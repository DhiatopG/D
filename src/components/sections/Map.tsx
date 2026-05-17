import React from 'react';
import styles from './Map.module.css';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tagLine}>
            <MapPin size={18} className={styles.icon} />
            <span>Visitez Notre Clinique</span>
          </div>
          <h2 className={styles.title}>Cabinet dentaire <span className={styles.highlight}>Dr Ferjani Amir</span></h2>
          <p className={styles.subtitle}>
            Idéalement situé pour tous vos besoins dentaires. Nous avons hâte de vous accueillir dans notre cabinet moderne.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.6312760050196!2d10.181225875552755!3d36.899168262115026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb92b5df5263%3A0x184d822d93626bd5!2sCabinet%20dentaire%20Dr%20Ferjani%20Amir!5e0!3m2!1sen!2stn!4v1776961092181!5m2!1sen!2stn" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.iframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
