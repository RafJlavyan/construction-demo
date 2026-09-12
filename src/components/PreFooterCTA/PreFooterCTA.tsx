import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './PreFooterCTA.module.scss';

export default function PreFooterCTA() {
  return (
    <section className={styles.section} aria-label="Direct Project Engagement">
      <div className={styles.bgVisual}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="High rise architecture engineering"
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>ENTERPRISE ENGAGEMENT & TENDERS</span>
          <h2 className={styles.title}>
            LET’S BUILD SOMETHING<br />
            THAT LASTS.
          </h2>
          <p className={styles.text}>
            Whether mobilizing a complex urban high-rise or breaking ground on sovereign
            infrastructure, our structural engineering directors are ready to discuss your brief.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </Link>
            <a href="mailto:contact@example.com" className={styles.secondaryBtn}>
              DIRECT EMAIL INQUIRY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
