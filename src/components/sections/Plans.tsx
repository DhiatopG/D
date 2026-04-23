import React from 'react';
import styles from './Plans.module.css';
import { Check, Star, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Wellness Base',
    price: '$29',
    period: '/mo',
    description: 'Perfect for maintaining a healthy smile with regular checkups.',
    features: [
      '2 Professional Cleanings/year',
      'Annual Digital X-Rays',
      'Emergency Exams',
      '15% Off All Procedures'
    ],
    icon: <ShieldCheck size={24} />,
    color: 'var(--primary)'
  },
  {
    name: 'Premium Care',
    price: '$49',
    period: '/mo',
    description: 'Comprehensive coverage for those seeking the best dental maintenance.',
    features: [
      '3 Professional Cleanings/year',
      'Semi-annual Exams & X-Rays',
      'Fluoride Treatment',
      '25% Off All Procedures',
      'Teeth Whitening Credit'
    ],
    icon: <Star size={24} />,
    popular: true,
    color: '#3b82f6'
  },
  {
    name: 'Elite Health',
    price: '$89',
    period: '/mo',
    description: 'Ultimate protection with cosmetic and advanced health benefits.',
    features: [
      '4 Professional Cleanings/year',
      'Priority Scheduling',
      'Full Cosmetic Consultation',
      '40% Off All Procedures',
      'Personal Dental Concierge'
    ],
    icon: <Zap size={24} />,
    color: '#8b5cf6'
  }
];

const Plans = () => {
  return (
    <section id="plans" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent <span className={styles.highlight}>Wellness Plans</span></h2>
          <p className={styles.subtitle}>Choose the plan that fits your lifestyle. No hidden fees, just pure oral health.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {plan.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.iconWrapper} style={{ backgroundColor: `${plan.color}15`, color: plan.color }}>
                {plan.icon}
              </div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.description}>{plan.description}</p>
              
              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <Check size={18} className={styles.check} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : styles.ctaOutline}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
