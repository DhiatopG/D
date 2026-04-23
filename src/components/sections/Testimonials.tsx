import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Wellness Plan Member',
    content: "The monthly plan has completely changed how I think about dental care. No more surprise bills, and the care is absolutely top-notch.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Dental Patient',
    content: "I've always been anxious about the dentist, but the team here made me feel so comfortable. The technology they use is incredible.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Elite Plan Member',
    content: "Priority scheduling and the cosmetic benefits are totally worth it. Best dental experience I've ever had in New York.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our <span className={styles.highlight}>Patients Say</span></h2>
          <p className={styles.subtitle}>Real stories from patients who transformed their dental health with our modern approach.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.top}>
                <Quote className={styles.quoteIcon} size={32} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
              </div>
              <p className={styles.content}>{t.content}</p>
              <div className={styles.author}>
                <Image 
                  src={t.avatar} 
                  alt={t.name} 
                  className={styles.avatar} 
                  width={48} 
                  height={48} 
                />
                <div className={styles.info}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
