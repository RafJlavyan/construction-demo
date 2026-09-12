import React from 'react';
import styles from './DemoBanner.module.scss';

interface DemoBannerProps {
  label?: string;
  tagline?: string;
  creatorName?: string;
}

export default function DemoBanner({
  label = 'DEMO PROJECT',
  tagline = 'Flagship Concept & Capability Demonstration',
  creatorName = 'Ravioh Digital',
}: DemoBannerProps) {
  return (
    <aside className={styles.banner} role="note" aria-label="Demo Project Announcement">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>{label}</span>
          </div>
          <span className={styles.separator}>/</span>
          <span className={styles.tagline}>{tagline}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.byText}>Created by</span>
          <span className={styles.creatorText}>{creatorName}</span>
        </div>
      </div>
    </aside>
  );
}
