import React from 'react';
import type { Metadata } from 'next';
import ProjectsFilter from '@/components/ProjectsFilter/ProjectsFilter';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import { PROJECTS } from '@/data';
import styles from './ProjectsPage.module.scss';

export const metadata: Metadata = {
  title: 'Portfolio of Capital Developments',
  description: 'Explore the complete portfolio of Vanterra residential towers, commercial corporate centers, hospitality retreats, and heavy civic infrastructure.',
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHero}>
        <div className={styles.container}>
          <span className={styles.tag}>GLOBAL PORTFOLIO & CASE STUDIES</span>
          <h1 className={styles.title}>ENGINEERED DEVELOPMENTS</h1>
          <p className={styles.subtitle}>
            A catalog of high-seismic towers, long-span viaducts, and corporate landmarks
            commissioned by enterprise developers and national infrastructure ministries.
          </p>
        </div>
      </header>

      <ProjectsFilter projects={PROJECTS} title="ALL COMMISSIONS" subtitle="Filter by asset class or explore individual engineering case studies." />

      <PreFooterCTA />
    </div>
  );
}
