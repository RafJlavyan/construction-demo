import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './ContactPage.module.scss';

export const metadata: Metadata = {
  title: 'Project Inquiry & Tender Submission',
  description: 'Submit a tender brief or project inquiry to Vanterra Construction & Engineering. Enterprise-grade general contracting for landmark developments.',
};

const OFFICES = [
  {
    city: 'Zurich, Switzerland',
    address: 'Bahnhofstrasse 45, Commercial Centre, 8001 Zürich',
    phone: '+41 44 215-5000',
    email: 'zurich@example.com',
    hours: 'Mon – Fri: 09:00 – 18:00 (CET)',
  },
  {
    city: 'Tbilisi, Georgia',
    address: 'Chavchavadze Avenue 34, Vake Business Hub',
    phone: '+995 (32) 219-2801',
    email: 'tbilisi@example.com',
    hours: 'Mon – Fri: 09:00 – 18:00 (GET)',
  },
  {
    city: 'Dubai, UAE',
    address: 'DIFC Gate Precinct, Building 3, Floor 14',
    phone: '+971 4 318-7200',
    email: 'dubai@example.com',
    hours: 'Sun – Thu: 08:00 – 17:00 (GST)',
  },
  {
    city: 'London, UK',
    address: '30 St Mary Axe, Financial District, EC3A 8EP',
    phone: '+44 (20) 7946-0958',
    email: 'london@example.com',
    hours: 'Mon – Fri: 09:00 – 17:30 (GMT)',
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>ENTERPRISE PROJECT ENGAGEMENT</span>
          <h1 className={styles.title}>START A PROJECT</h1>
          <p className={styles.subtitle}>
            Whether you are mobilizing a $200M commercial tower or commissioning a civic
            viaduct, our engineering directors are available to receive your formal project brief.
          </p>
        </div>
      </header>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Form Column */}
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>PROJECT DOSSIER SUBMISSION</h2>
                <p className={styles.formDesc}>
                  Complete the fields below and a senior project director will review your
                  preliminary scope within 24 business hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Offices Column */}
            <div className={styles.officesCol}>
              <div className={styles.officesHeader}>
                <h2 className={styles.officesTitle}>REGIONAL OFFICES</h2>
                <p className={styles.officesDesc}>
                  Visit or contact one of our international hubs for direct engagement.
                </p>
              </div>

              <div className={styles.officesList}>
                {OFFICES.map((office, i) => (
                  <div key={i} className={styles.officeCard}>
                    <h3 className={styles.officeCity}>{office.city}</h3>
                    <div className={styles.officeDetail}>
                      <MapPin size={14} className={styles.officeIcon} />
                      <span>{office.address}</span>
                    </div>
                    <div className={styles.officeDetail}>
                      <Phone size={14} className={styles.officeIcon} />
                      <span>{office.phone}</span>
                    </div>
                    <div className={styles.officeDetail}>
                      <Mail size={14} className={styles.officeIcon} />
                      <span>{office.email}</span>
                    </div>
                    <div className={styles.officeDetail}>
                      <Clock size={14} className={styles.officeIcon} />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* General Inquiries */}
              <div className={styles.generalContact}>
                <h3 className={styles.generalTitle}>GENERAL INQUIRIES & MEDIA</h3>
                <a href="mailto:contact@example.com" className={styles.generalEmail}>
                  contact@example.com
                </a>
                <a href="tel:+18005550199" className={styles.generalPhone}>
                  +1 (800) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
