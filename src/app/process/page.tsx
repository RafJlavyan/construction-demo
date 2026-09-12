import React from 'react';
import type { Metadata } from 'next';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import ConstructionTimeline from '@/components/ConstructionTimeline/ConstructionTimeline';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './ProcessPage.module.scss';

export const metadata: Metadata = {
  title: 'Project Lifecycle & Engineering Methodology',
  description: 'How Vanterra plans, designs, engineers, constructs, and delivers complex capital assets with zero margin for error.',
};

export default function ProcessPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>METHODOLOGY & BIM GOVERNANCE</span>
          <h1 className={styles.title}>FROM BLUEPRINT TO REALITY</h1>
          <p className={styles.subtitle}>
            Eliminating uncertainty through mathematical modeling, Level 3 digital twins,
            and daily drone-monitored critical path construction execution.
          </p>
        </div>
      </header>

      <ProcessSection />
      <ConstructionTimeline />
      <PreFooterCTA />
    </div>
  );
}
