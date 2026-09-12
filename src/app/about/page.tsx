import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import AboutEditorial from '@/components/AboutEditorial/AboutEditorial';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import SafetyMatrix from '@/components/SafetyMatrix/SafetyMatrix';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './AboutPage.module.scss';

export const metadata: Metadata = {
  title: 'Corporate Profile & Engineering Philosophy',
  description: 'Vanterra Construction & Engineering — Established in 1999. Fusing monolithic architecture with structural mechanics and international general contracting.',
};

const LEADERSHIP = [
  {
    name: 'Henrik Vartanian',
    role: 'Managing Director & Founder',
    credentials: 'M.Sc. Structural Mechanics, ETH Zürich',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: '27 years spearheading complex urban developments, earthquake-resilient structures, and bilateral FIDIC joint ventures.',
  },
  {
    name: 'Dr. Armen Sarkisyan',
    role: 'Chief Structural Engineer',
    credentials: 'Ph.D. Seismic Dynamics, Imperial College London',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Author of patented fiber-optic post-tensioned sensor matrices and consultant to international seismological institutes.',
  },
  {
    name: 'Elena Rostova',
    role: 'Design Director & Partner',
    credentials: 'M.Arch, Architectural Association (AA London)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneered parametric computational facades and passive solar envelope engineering for high-density metropolitan projects.',
  },
  {
    name: 'Marcus Sterling',
    role: 'Director of Global Project Delivery',
    credentials: 'B.Eng Civil Engineering, PMP, MRICS',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Oversees 4D/5D algorithmic BIM scheduling, supply chain resilience, and turnkey EPC contract execution.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>INSTITUTIONAL FOUNDATION</span>
          <h1 className={styles.title}>ENGINEERING PERMANENCE</h1>
          <p className={styles.subtitle}>
            We build for century horizons. A privately held engineering and construction
            corporation operating across the Mediterranean, Caucasus, and Gulf regions.
          </p>
        </div>
      </header>

      <AboutEditorial />
      <StatsCounter />

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <div className={styles.secHeader}>
            <span className={styles.tag}>EXECUTIVE BOARD</span>
            <h2 className={styles.secTitle}>ENGINEERING LEADERSHIP</h2>
            <p className={styles.secDesc}>
              Decisions are directed by veteran structural engineers and architects, not speculative financiers.
            </p>
          </div>

          <div className={styles.leadershipGrid}>
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className={styles.leaderCard}>
                <div className={styles.leaderImgWrap}>
                  <Image src={leader.image} alt={leader.name} fill sizes="(max-width: 768px) 100vw, 300px" className={styles.leaderImg} />
                </div>
                <div className={styles.leaderBody}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <span className={styles.leaderCreds}>{leader.credentials}</span>
                  <p className={styles.leaderBio}>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SafetyMatrix />
      <PreFooterCTA />
    </div>
  );
}
