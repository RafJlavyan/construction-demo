import React from 'react';
import { COMPANY_STATS } from '@/data';
import styles from './StatsCounter.module.scss';

export default function StatsCounter() {
  return (
    <section className={styles.section} aria-label="Company Scale & Capacity">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            <span className={styles.tagText}>SCALE & TRACK RECORD</span>
          </div>
          <h2 className={styles.title}>PRECISION BY THE NUMBERS</h2>
        </div>

        <div className={styles.grid}>
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
              <p className={styles.detail}>{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
