import React from 'react';
import type { Metadata } from 'next';
import ServicesAccordion from '@/components/ServicesAccordion/ServicesAccordion';
import SafetyMatrix from '@/components/SafetyMatrix/SafetyMatrix';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './ServicesPage.module.scss';

export const metadata: Metadata = {
  title: 'Engineering & Construction Disciplines',
  description: 'Explore our turnkey capabilities across General Contracting, Civil Engineering, Parametric Architecture, Project Management, and Heavy Infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>PRACTICES & CAPABILITIES</span>
          <h1 className={styles.title}>ENGINEERING DISCIPLINES</h1>
          <p className={styles.subtitle}>
            From seismic soil stabilization to precision interior joinery, Vanterra maintains
            in-house technical mastery over every operational domain of complex construction.
          </p>
        </div>
      </header>

      <ServicesAccordion />
      <SafetyMatrix />
      <PreFooterCTA />
    </div>
  );
}
