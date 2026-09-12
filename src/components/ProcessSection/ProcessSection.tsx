'use client';

import React, { useState } from 'react';
import { LIFECYCLE_STEPS } from '@/data';
import { CheckCircle2, ChevronRight, Binary, Compass, ShieldAlert, Cpu } from 'lucide-react';
import styles from './ProcessSection.module.scss';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={styles.section} id="process-lifecycle">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTag}>
            <span className={styles.tagDot} />
            <span className={styles.tagText}>INTEGRATED PROJECT DELIVERY</span>
          </div>
          <h2 className={styles.title}>FROM BLUEPRINT TO REALITY</h2>
          <p className={styles.subtitle}>
            A rigorous five-stage construction lifecycle driven by parametric engineering,
            continuous laser telemetry, and uncompromising project governance.
          </p>
        </div>

        {/* Interactive Lifecycle Workflow */}
        <div className={styles.processGrid}>
          {/* Navigation Stages */}
          <div className={styles.stageList} role="tablist">
            {LIFECYCLE_STEPS.map((step, idx) => (
              <button
                key={step.number}
                role="tab"
                aria-selected={activeStep === idx}
                className={`${styles.stageButton} ${activeStep === idx ? styles.activeStage : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className={styles.stageBtnLeft}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <div className={styles.stepInfo}>
                    <span className={styles.stepTitle}>{step.title}</span>
                    <span className={styles.stepMetrics}>{step.metrics}</span>
                  </div>
                </div>
                <ChevronRight size={18} className={styles.arrowIcon} />
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <div className={styles.detailCard}>
            <div className={styles.detailTop}>
              <span className={styles.currentNum}>STAGE {LIFECYCLE_STEPS[activeStep].number}</span>
              <span className={styles.verificationBadge}>
                <CheckCircle2 size={16} />
                VERIFIED QUALITY PROTOCOL
              </span>
            </div>

            <h3 className={styles.activeTitle}>{LIFECYCLE_STEPS[activeStep].title}</h3>

            <p className={styles.activeDesc}>
              {LIFECYCLE_STEPS[activeStep].description}
            </p>

            <div className={styles.technicalSpecsBox}>
              <h4 className={styles.boxHeading}>METHODOLOGY CRITERIA</h4>
              <ul className={styles.criteriaList}>
                <li>
                  <strong>BIM Coordination:</strong> Level 3 digital twin clash detection
                </li>
                <li>
                  <strong>Structural Telemetry:</strong> Finite Element Analysis (FEA) Pushover simulations
                </li>
                <li>
                  <strong>Risk Control:</strong> ISO 31000 enterprise risk mitigation matrix
                </li>
              </ul>
            </div>

            <div className={styles.lifecycleFooter}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${((activeStep + 1) / LIFECYCLE_STEPS.length) * 100}%` }}
                />
              </div>
              <span className={styles.progressPercent}>
                {Math.round(((activeStep + 1) / LIFECYCLE_STEPS.length) * 100)}% LIFECYCLE COMPLETION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
