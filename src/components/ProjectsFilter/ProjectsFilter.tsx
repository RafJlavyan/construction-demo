'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { Project } from '@/types';
import styles from './ProjectsFilter.module.scss';

interface ProjectsFilterProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality', 'Mixed Use', 'Industrial', 'Infrastructure'];

export default function ProjectsFilter({
  projects,
  title = 'PORTFOLIO OF DEVELOPMENTS',
  subtitle = 'Engineering monuments built to endure multiple generations.',
}: ProjectsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section className={styles.section} id="projects-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headingBlock}>
            <span className={styles.categoryTag}>DISCIPLINES & ASSET CLASSES</span>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionDesc}>{subtitle}</p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className={styles.filterTabs} role="tablist" aria-label="Project Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`${styles.tabBtn} ${selectedCategory === cat ? styles.activeTab : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            return (
              <article
                key={project.id}
                className={`${styles.card} ${isWide ? styles.cardWide : ''}`}
              >
                <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.imageDarkener} />

                    <div className={styles.hoverAction}>
                      <span>CASE STUDY</span>
                      <ArrowUpRight size={18} />
                    </div>

                    <div className={styles.statusBadge}>
                      {project.status}
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.metaTop}>
                      <span className={styles.category}>{project.category}</span>
                      <span className={styles.area}>{project.area}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{project.title}</h3>

                    <p className={styles.cardSnippet}>{project.shortDescription}</p>

                    <div className={styles.metaBottom}>
                      <span className={styles.location}>
                        <MapPin size={13} className={styles.pinIcon} />
                        {project.city}, {project.country}
                      </span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
