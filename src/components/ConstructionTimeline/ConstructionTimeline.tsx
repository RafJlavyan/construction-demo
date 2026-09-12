'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TIMELINE_PHASES } from '@/data';
import { ShieldCheck, HardHat, Hammer, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ConstructionTimeline.module.scss';

export default function ConstructionTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(1);
  const currentPhase = TIMELINE_PHASES[activePhaseIndex];

  const handlePrev = () => {
    setActivePhaseIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_PHASES.length - 1));
  };

  const handleNext = () => {
    setActivePhaseIndex((prev) => (prev < TIMELINE_PHASES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={styles.section} id="construction-progress-timeline">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerTag}>
            <Activity size={16} className={styles.activityIcon} />
            <span className={styles.tagText}>LIVE 4D PROGRESS VISUALIZATION</span>
          </div>
          <h2 className={styles.title}>CONSTRUCTION TIMELINE</h2>
          <p className={styles.subtitle}>
            Monitor milestone velocity, concrete pour volumes, rebar tonnages, and field safety
            metrics across each sequential construction epoch.
          </p>
        </div>

        {/* Interactive Progress Stepper Navigation */}
        <div className={styles.timelineStepper} role="tablist">
          {TIMELINE_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.stepButton} ${isActive ? styles.activeStep : ''}`}
                onClick={() => setActivePhaseIndex(idx)}
              >
                <div className={styles.stepPoint}>
                  <div className={styles.pointInner} />
                </div>
                <div className={styles.stepLabels}>
                  <span className={styles.dateLabel}>{phase.phaseDate}</span>
                  <span className={styles.phaseName}>{phase.title.split('&')[0]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Panel for Active Stage */}
        <div className={styles.displayPanel}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrap}>
              <Image
                src={currentPhase.image}
                alt={currentPhase.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className={styles.stageImage}
              />
              <div className={styles.imageOverlay} />

              <div className={styles.stageFloatTag}>
                <span className={styles.floatStageName}>{currentPhase.stageName}</span>
                <span className={styles.floatDate}>{currentPhase.phaseDate}</span>
              </div>

              {/* Slider Controls */}
              <div className={styles.navArrows}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={styles.arrowBtn}
                  aria-label="Previous Phase"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.arrowBtn}
                  aria-label="Next Phase"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoTop}>
              <div className={styles.percentageIndicator}>
                <span className={styles.percentNumber}>{currentPhase.completionPercent}%</span>
                <span className={styles.percentText}>STAGE COMPLETION</span>
              </div>

              <div className={styles.safetyStamp}>
                <ShieldCheck size={16} className={styles.safetyIcon} />
                <span>ZERO LTI PROTOCOL</span>
              </div>
            </div>

            <h3 className={styles.phaseHeadline}>{currentPhase.title}</h3>
            <p className={styles.phaseNarrative}>{currentPhase.narrative}</p>

            {/* Technical Specifications Matrix */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>CONCRETE SPECIFICATION</span>
                <span className={styles.metricValue}>{currentPhase.technicalDetails.concretePoured}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>STRUCTURAL STEEL</span>
                <span className={styles.metricValue}>{currentPhase.technicalDetails.steelInstalled}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>DEPLOYED CREW</span>
                <span className={styles.metricValue}>{currentPhase.technicalDetails.workforceOnSite}</span>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>SAFETY COMPLIANCE</span>
                <span className={styles.metricValue}>{currentPhase.technicalDetails.safetyIncidentRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
