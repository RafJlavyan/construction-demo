import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ShieldCheck, Layers, ArrowRight } from 'lucide-react';
import { SERVICES, PROJECTS } from '@/data';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './ServiceDetail.module.scss';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS.slice(0, 2);

  return (
    <div className={styles.serviceDetail}>
      <div className={styles.topNav}>
        <div className={styles.container}>
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>BACK TO ALL DISCIPLINES</span>
          </Link>
          <span className={styles.discNumber}>DISCIPLINE // {service.number}</span>
        </div>
      </div>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>DISCIPLINE SPECIFICATION</span>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.tagline}>{service.tagline}</p>
        </div>
      </header>

      {/* Visual & Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.imageWrap}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className={styles.serviceImage}
              />
            </div>

            <div className={styles.contentCol}>
              <h2 className={styles.heading}>TECHNICAL SCOPE & APPROACH</h2>
              <p className={styles.description}>{service.description}</p>

              <div className={styles.standardsBox}>
                <span className={styles.standardsLabel}>GOVERNING CERTIFICATIONS</span>
                <div className={styles.standardsBadges}>
                  {service.technicalStandards.map((std, i) => (
                    <span key={i} className={styles.stdBadge}>
                      <ShieldCheck size={14} />
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables Breakdown */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>ENGINEERING CAPABILITIES</h3>
              <ul className={styles.list}>
                {service.capabilities.map((cap, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>FORMAL CLIENT DELIVERABLES</h3>
              <ul className={styles.list}>
                {service.deliverables.map((del, i) => (
                  <li key={i}>
                    <Layers size={16} className={styles.checkIcon} />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Developments Executed Under this Discipline */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>FEATURED EXECUTIONS</h2>
            <Link href="/projects" className={styles.allLink}>
              VIEW ALL PROJECTS <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {relatedProjects.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className={styles.projCard}>
                <div className={styles.projImgWrap}>
                  <Image src={p.coverImage} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.projImg} />
                </div>
                <div className={styles.projInfo}>
                  <span className={styles.projCategory}>{p.category}</span>
                  <h3 className={styles.projTitle}>{p.title}</h3>
                  <span className={styles.projLocation}>{p.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
