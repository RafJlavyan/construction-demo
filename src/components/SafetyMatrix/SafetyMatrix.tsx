import React from 'react';
import { ShieldCheck, Award, FileCheck2, Cpu, Scale, CheckCircle2 } from 'lucide-react';
import styles from './SafetyMatrix.module.scss';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'ZERO-HARM SAFETY CHARTER',
    stat: '0.00 LTI',
    description: 'Mandatory automated morning safety briefings, smart PPE biometric monitoring, and unannounced third-party compliance inspections across every active jobsite.',
  },
  {
    icon: Award,
    title: 'ISO 9001 & ISO 45001',
    stat: '100% AUDIT PASS',
    description: 'Triple-certified management systems covering quality assurance, occupational health, and environmental stewardship audited annually by Bureau Veritas.',
  },
  {
    icon: Cpu,
    title: 'BIM LEVEL 3 & DIGITAL TWINS',
    stat: '0 CLASH MARGIN',
    description: 'Continuous laser-scanning georeferenced to structural IFC models, eliminating field clashes before pouring reinforced concrete foundations.',
  },
  {
    icon: Scale,
    title: 'SEISMIC ZONE 4 ENGINEERING',
    stat: '9.0 MAGNITUDE',
    description: 'Non-linear dynamic time-history response calculations ensuring critical structural nodes maintain ductile energy dissipation under severe seismic excitation.',
  },
  {
    icon: FileCheck2,
    title: 'LEED & BREEAM ACCREDITATION',
    stat: 'LEED GOLD TARGET',
    description: 'Utilizing low-carbon supplementary cementitious materials (SCMs), stormwater detention cells, and closed-loop concrete recycling machinery.',
  },
  {
    icon: CheckCircle2,
    title: 'FIDIC FIDUCIARY GOVERNANCE',
    stat: 'GUARANTEED GMP',
    description: 'Strict adherence to international contract frameworks, open-book cost ledgers, and guaranteed maximum price commitments for corporate sponsors.',
  },
];

export default function SafetyMatrix() {
  return (
    <section className={styles.section} id="safety-quality-matrix">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            <span className={styles.tagText}>RISK MITIGATION & QUALITY CONTROL</span>
          </div>
          <h2 className={styles.title}>SAFETY & ENGINEERING STANDARDS</h2>
          <p className={styles.subtitle}>
            Enterprise-grade construction demands institutional reliability. We operate
            with mathematical transparency and zero tolerance for structural shortcuts.
          </p>
        </div>

        <div className={styles.matrixGrid}>
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <div className={styles.iconCircle}>
                    <Icon size={22} className={styles.icon} />
                  </div>
                  <span className={styles.statBadge}>{pillar.stat}</span>
                </div>

                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
