import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import styles from './AboutEditorial.module.scss';

export default function AboutEditorial() {
  return (
    <section className={styles.section} id="company-philosophy">
      <div className={styles.container}>
        {/* Editorial Top Grid */}
        <div className={styles.editorialGrid}>
          {/* Left Column: Manifesto */}
          <div className={styles.manifestoCol}>
            <div className={styles.tag}>
              <span className={styles.tagDot} />
              <span className={styles.tagText}>ARCHITECTURAL MANIFESTO</span>
            </div>

            <h2 className={styles.headline}>
              PRECISION IS OUR<br />
              FOUNDATION.
            </h2>

            <p className={styles.leadText}>
              We view construction not as the simple assembly of concrete and steel, but as
              the realization of enduring human intent. Every joint, pour, and cantilever
              is calibrated to withstand centuries of environmental force.
            </p>

            <div className={styles.bodyText}>
              <p>
                Founded in 1999, VANTERRA has evolved from a boutique structural engineering consultancy
                into an integrated international general contractor. Our operations unite daring
                architectural form-finding with rigorous German and Eurocode structural standards.
              </p>
              <p>
                By maintaining in-house teams across civil engineering, BIM modeling, MEP systems,
                and high-precision finish joinery, we eliminate the misalignments typical of fragmented
                subcontractor hierarchies. We guarantee singular accountability for every square meter.
              </p>
            </div>

            <div className={styles.actionRow}>
              <Link href="/about" className={styles.linkButton}>
                <span>DISCOVER OUR LEADERSHIP & STORY</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Image Composition */}
          <div className={styles.visualCol}>
            <div className={styles.mainImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Vanterra architectural blueprint engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className={styles.mainImage}
              />
            </div>

            {/* Overlapping Architectural Secondary Visual */}
            <div className={styles.subCard}>
              <div className={styles.subCardContent}>
                <div className={styles.subCardTag}>FIELD PHILOSOPHY</div>
                <div className={styles.subCardQuote}>
                  &ldquo;A building cannot lie. Its integrity is permanently recorded in its core.&rdquo;
                </div>
                <div className={styles.subCardAuthor}>
                  — Vanterra Executive Engineering Board
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
