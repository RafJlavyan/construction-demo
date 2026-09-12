import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Maximize2, MapPin, Calendar, Layers } from 'lucide-react';
import { FEATURED_PROJECT } from '@/data';
import styles from './FeaturedProject.module.scss';

export default function FeaturedProject() {
  return (
    <section className={styles.section} aria-label="Featured Development">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHead}>
          <div className={styles.headTag}>
            <span className={styles.dot} />
            <span className={styles.tagText}>FLAGSHIP CASE STUDY</span>
          </div>
          <span className={styles.projectNumber}>REF: 01 / AR-2026</span>
        </div>

        {/* Monumental Interactive Card */}
        <div className={styles.showcaseCard}>
          <Link href={`/projects/${FEATURED_PROJECT.slug}`} className={styles.imageLink}>
            <div className={styles.imageWrapper}>
              <Image
                src={FEATURED_PROJECT.coverImage}
                alt={FEATURED_PROJECT.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1440px"
                className={styles.image}
              />
              <div className={styles.overlayGradient} />
            </div>

            {/* Hover Reveal Card Corner Details */}
            <div className={styles.cardCorner}>
              <span className={styles.expandLabel}>ENTER ARCHITECTURAL STUDY</span>
              <div className={styles.expandIconWrapper}>
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Content Floating Overlay */}
            <div className={styles.cardContent}>
              <div className={styles.categoryBadge}>
                {FEATURED_PROJECT.category} &bull; {FEATURED_PROJECT.status}
              </div>

              <h2 className={styles.projectTitle}>{FEATURED_PROJECT.title}</h2>

              <p className={styles.projectSnippet}>
                {FEATURED_PROJECT.shortDescription}
              </p>

              {/* Quick Specs Grid */}
              <div className={styles.specsRow}>
                <div className={styles.specItem}>
                  <MapPin size={14} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>LOCATION</span>
                    <span className={styles.specVal}>{FEATURED_PROJECT.location}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Layers size={14} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>FLOOR AREA</span>
                    <span className={styles.specVal}>{FEATURED_PROJECT.area}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <Calendar size={14} className={styles.specIcon} />
                  <div>
                    <span className={styles.specLabel}>TARGET DELIVERY</span>
                    <span className={styles.specVal}>{FEATURED_PROJECT.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
