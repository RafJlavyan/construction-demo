'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Plus, Minus, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/data';
import styles from './ServicesAccordion.module.scss';

export default function ServicesAccordion() {
  const [expandedId, setExpandedId] = useState<string>(SERVICES[0].id);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section className={styles.section} id="services-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.tagline}>
            <span className={styles.dot} />
            <span className={styles.tagText}>CORE CAPABILITIES & DISCIPLINES</span>
          </div>
          <h2 className={styles.title}>ENGINEERING SERVICES</h2>
          <p className={styles.subtitle}>
            We reject off-the-shelf solutions. Every discipline operates under unified enterprise
            standards to deliver unmatched speed, structural safety, and execution precision.
          </p>
        </div>

        {/* Large Interactive Panels */}
        <div className={styles.accordionList}>
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`${styles.servicePanel} ${isExpanded ? styles.expanded : ''}`}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  className={styles.panelHeader}
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.headerLeft}>
                    <span className={styles.number}>{service.number}</span>
                    <h3 className={styles.panelTitle}>{service.title}</h3>
                  </div>

                  <div className={styles.headerRight}>
                    <span className={styles.desktopTagline}>{service.tagline}</span>
                    <div className={styles.toggleIcon}>
                      {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                </button>

                {/* Collapsible Expanded Body */}
                {isExpanded && (
                  <div className={styles.panelBody}>
                    <div className={styles.bodyGrid}>
                      <div className={styles.imageColumn}>
                        <div className={styles.imageWrap}>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className={styles.serviceImage}
                          />
                        </div>
                      </div>

                      <div className={styles.infoColumn}>
                        <p className={styles.description}>{service.description}</p>

                        <div className={styles.capabilitiesBlock}>
                          <h4 className={styles.blockHeading}>KEY CAPABILITIES</h4>
                          <ul className={styles.capabilitiesList}>
                            {service.capabilities.map((cap, i) => (
                              <li key={i}>
                                <CheckCircle size={15} className={styles.checkIcon} />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.footerAction}>
                          <div className={styles.standardsList}>
                            <span className={styles.standardsLabel}>GOVERNANCE:</span>
                            {service.technicalStandards.map((std, i) => (
                              <span key={i} className={styles.stdBadge}>{std}</span>
                            ))}
                          </div>

                          <Link href={`/services/${service.slug}`} className={styles.detailBtn}>
                            <span>EXPLORE DISCIPLINE</span>
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
