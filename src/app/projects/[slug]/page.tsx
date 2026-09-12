'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Layers,
  Building,
  User,
  ShieldCheck,
  CheckCircle,
  ZoomIn,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '@/data';
import Lightbox from '@/components/Lightbox/Lightbox';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './ProjectDetail.module.scss';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className={styles.caseStudy}>
      {/* Top Breadcrumb Bar */}
      <div className={styles.topNav}>
        <div className={styles.container}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
          <span className={styles.projectRef}>REF // {project.id.toUpperCase()}</span>
        </div>
      </div>

      {/* Case Study Hero */}
      <header className={styles.heroSection}>
        <div className={styles.heroImageWrap}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroMeta}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <span className={styles.statusBadge}>{project.status}</span>
            </div>

            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.shortDesc}>{project.shortDescription}</p>

            {/* Quick Specs Strip */}
            <div className={styles.specStrip}>
              <div className={styles.stripItem}>
                <MapPin size={14} className={styles.stripIcon} />
                <div>
                  <span className={styles.stripLabel}>LOCATION</span>
                  <span className={styles.stripValue}>{project.location}</span>
                </div>
              </div>

              <div className={styles.stripItem}>
                <Layers size={14} className={styles.stripIcon} />
                <div>
                  <span className={styles.stripLabel}>GROSS AREA</span>
                  <span className={styles.stripValue}>{project.area}</span>
                </div>
              </div>

              <div className={styles.stripItem}>
                <Building size={14} className={styles.stripIcon} />
                <div>
                  <span className={styles.stripLabel}>CLIENT</span>
                  <span className={styles.stripValue}>{project.client}</span>
                </div>
              </div>

              <div className={styles.stripItem}>
                <Calendar size={14} className={styles.stripIcon} />
                <div>
                  <span className={styles.stripLabel}>TIMELINE / YEAR</span>
                  <span className={styles.stripValue}>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Narrative Section: Overview, Challenge & Solution */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeColLeft}>
              <div className={styles.tag}>
                <span className={styles.dot} />
                <span>ARCHITECTURAL & ENGINEERING DOSSIER</span>
              </div>
              <h2 className={styles.sectionHeading}>THE DEVELOPMENT BRIEF</h2>
              <p className={styles.overviewText}>{project.overview}</p>

              <div className={styles.challengeBox}>
                <h3 className={styles.subHeading}>THE STRUCTURAL CHALLENGE</h3>
                <p>{project.challenge}</p>
              </div>

              <div className={styles.solutionBox}>
                <h3 className={styles.subHeading}>OUR ENGINEERING SOLUTION</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            {/* Right Column: Key Technical Specs Table */}
            <div className={styles.narrativeColRight}>
              <div className={styles.specsCard}>
                <h3 className={styles.specsCardTitle}>TECHNICAL SPECIFICATIONS</h3>
                <dl className={styles.specsList}>
                  {project.specs.map((spec, i) => (
                    <div key={i} className={styles.specRow}>
                      <dt className={styles.specKey}>{spec.label}</dt>
                      <dd className={styles.specVal}>{spec.value}</dd>
                    </div>
                  ))}
                  <div className={styles.specRow}>
                    <dt className={styles.specKey}>Lead Architect</dt>
                    <dd className={styles.specVal}>{project.leadArchitect}</dd>
                  </div>
                </dl>

                <div className={styles.assuranceNote}>
                  <ShieldCheck size={16} className={styles.shieldIcon} />
                  <span>Subject to third-party non-destructive ultrasonic testing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery with Zoom In / Zoom Out Controls */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryHeader}>
            <div>
              <span className={styles.tag}>PHOTOGRAPHY & ARCHITECTURAL VIEWS</span>
              <h2 className={styles.galleryTitle}>SITE & SPATIAL GALLERY</h2>
              <p className={styles.gallerySub}>
                Click any photograph to launch the interactive viewer with zoom in and zoom out controls.
              </p>
            </div>
            <span className={styles.galleryCount}>
              {project.galleryImages.length} HIGH-RES PLATES
            </span>
          </div>

          <div className={styles.galleryGrid}>
            {project.galleryImages.map((img, index) => (
              <div
                key={index}
                className={`${styles.galleryItem} ${index === 0 ? styles.galleryHeroItem : ''}`}
                onClick={() => openLightbox(index)}
              >
                <div className={styles.galleryImgWrap}>
                  <Image
                    src={img}
                    alt={`${project.title} photographic record ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.galleryImage}
                  />
                  <div className={styles.galleryHoverCue}>
                    <ZoomIn size={22} />
                    <span>INSPECT DETAIL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Milestones & Sequence */}
      <section className={styles.milestoneSection}>
        <div className={styles.container}>
          <div className={styles.milestoneHeader}>
            <span className={styles.tag}>CHRONOLOGY & PHASING</span>
            <h2 className={styles.milestoneTitle}>CONSTRUCTION PHASING RECORD</h2>
          </div>

          <div className={styles.milestoneTimeline}>
            {project.milestones.map((m, i) => (
              <div
                key={i}
                className={`${styles.milestoneItem} ${m.completed ? styles.completed : ''}`}
              >
                <div className={styles.mPoint}>
                  {m.completed ? <CheckCircle size={18} /> : <div className={styles.mDot} />}
                </div>
                <div className={styles.mContent}>
                  <div className={styles.mMeta}>
                    <span className={styles.mDate}>{m.date}</span>
                    <span className={styles.mStatus}>
                      {m.completed ? 'VERIFIED COMPLETE' : 'IN PROGRESS'}
                    </span>
                  </div>
                  <h3 className={styles.mPhase}>{m.phase}</h3>
                  <p className={styles.mDesc}>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>RELATED DEVELOPMENTS</h2>
            <Link href="/projects" className={styles.allLink}>
              VIEW FULL PORTFOLIO <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {relatedProjects.map((rel) => (
              <Link key={rel.id} href={`/projects/${rel.slug}`} className={styles.relCard}>
                <div className={styles.relImageWrap}>
                  <Image
                    src={rel.coverImage}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.relImage}
                  />
                </div>
                <div className={styles.relBody}>
                  <span className={styles.relCategory}>{rel.category}</span>
                  <h3 className={styles.relName}>{rel.title}</h3>
                  <span className={styles.relLocation}>{rel.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Zoom In/Out */}
      <Lightbox
        images={project.galleryImages}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={project.title}
      />

      <PreFooterCTA />
    </article>
  );
}
