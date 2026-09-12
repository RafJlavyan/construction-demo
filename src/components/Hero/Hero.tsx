import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Shield, Layers, Building2 } from 'lucide-react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      {/* Background Architectural Visual with cinematic overlay */}
      <div className={styles.visualContainer}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=90"
          alt="Vanterra monumental structural engineering site"
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.meshGrid} />
      </div>

      <div className={styles.container}>
        {/* Editorial Subheader / Identification */}
        <div className={styles.heroHeaderMeta}>
          <div className={styles.tickerBadge}>
            <span className={styles.pulseDot} />
            <span className={styles.tickerText}>GENERAL CONTRACTOR & STRUCTURAL ENGINEERING</span>
          </div>
          <div className={styles.coordinates}>
            <span>40°10&apos;48&quot;N 44°30&apos;49&quot;E</span>
            <span className={styles.slash}>/</span>
            <span>BIM LEVEL 3 IPD</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className={styles.headlineBlock}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleLine}>WE BUILD WHAT</span>
            <span className={styles.titleLineAccent}>OTHERS ONLY DRAW.</span>
          </h1>

          <div className={styles.subContent}>
            <p className={styles.subDescription}>
              VANTERRA delivers turnkey architecture, high-seismic civil engineering,
              and large-scale construction management for governments and global developers.
              Engineered permanence with zero tolerance for compromise.
            </p>

            <div className={styles.heroCtaGroup}>
              <Link href="/projects" className={styles.primaryBtn}>
                <span>EXPLORE PROJECTS</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                <span>START A PROJECT</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specification Ribbon / Authority Stats */}
        <div className={styles.technicalRibbon}>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonValue}>27+</span>
            <span className={styles.ribbonLabel}>YEARS ACTIVE</span>
            <span className={styles.ribbonSub}>SINCE 1999</span>
          </div>

          <div className={styles.ribbonDivider} />

          <div className={styles.ribbonItem}>
            <span className={styles.ribbonValue}>148</span>
            <span className={styles.ribbonLabel}>PROJECTS</span>
            <span className={styles.ribbonSub}>TURNKEY COMPLETE</span>
          </div>

          <div className={styles.ribbonDivider} />

          <div className={styles.ribbonItem}>
            <span className={styles.ribbonValue}>12</span>
            <span className={styles.ribbonLabel}>CITIES</span>
            <span className={styles.ribbonSub}>GLOBAL HUBS</span>
          </div>

          <div className={styles.ribbonDivider} />

          <div className={styles.ribbonItem}>
            <span className={styles.ribbonValue}>2.4M+</span>
            <span className={styles.ribbonLabel}>M² BUILT</span>
            <span className={styles.ribbonSub}>FLOOR AREA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
