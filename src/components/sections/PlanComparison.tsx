import React from 'react';
import styles from './PlanComparison.module.css';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Routine Exams', base: true, premium: true, elite: true },
  { name: 'X-Rays', base: true, premium: true, elite: true },
  { name: 'Cleanings (Per Year)', base: '2', premium: '3', elite: '4' },
  { name: 'Emergency Exams', base: true, premium: true, elite: true },
  { name: 'Treatment Discount', base: '15%', premium: '25%', elite: '40%' },
  { name: 'Fluoride Treatment', base: false, premium: true, elite: true },
  { name: 'White Filling Credit', base: false, premium: true, elite: true },
  { name: 'Teeth Whitening', base: false, premium: '50% Off', elite: 'Free/Year' },
  { name: 'Priority Booking', base: false, baseIcon: false, premium: false, elite: true },
  { name: 'Cosmetic Consultation', base: false, premium: false, elite: true },
];

const PlanComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compare <span className={styles.highlight}>Details</span></h2>
        
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Features</th>
                <th>Wellness Base</th>
                <th>Premium Care</th>
                <th>Elite Health</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name}>
                  <td className={styles.featureName}>{f.name}</td>
                  <td>{renderValue(f.base)}</td>
                  <td>{renderValue(f.premium)}</td>
                  <td>{renderValue(f.elite)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const renderValue = (val: string | boolean) => {
  if (typeof val === 'boolean') {
    return val ? <Check size={20} className={styles.check} /> : <X size={20} className={styles.cross} />;
  }
  return <span className={styles.textValue}>{val}</span>;
};


export default PlanComparison;
