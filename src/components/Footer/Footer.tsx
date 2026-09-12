import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.wordmark}>
              <span className={styles.brandName}>VANTERRA</span>
              <span className={styles.brandSub}>CONSTRUCTION & ENGINEERING</span>
            </div>
            <p className={styles.brandDescription}>
              Engineered permanence. Constructing landmark residences, state-of-the-art
              commercial towers, and high-capacity civil infrastructure across Eurasia.
            </p>
            <div className={styles.licenseBadge}>
              <Globe size={14} className={styles.licenseIcon} />
              <span>LICENSED FIDIC / EUROCODE ENGINEERING GENERAL CONTRACTOR</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>INDEX</h4>
            <ul className={styles.linkList}>
              <li><Link href="/projects">Projects Portfolio</Link></li>
              <li><Link href="/services">Engineering Disciplines</Link></li>
              <li><Link href="/about">Corporate Profile</Link></li>
              <li><Link href="/process">Lifecycle & BIM</Link></li>
              <li><Link href="/insights">Technical Journal</Link></li>
              <li><Link href="/contact">Inquiries & Tenders</Link></li>
            </ul>
          </div>

          {/* Core Hubs / Locations */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>REGIONAL HUBS</h4>
            <ul className={styles.locationList}>
              <li>
                <strong>Zurich, Switzerland</strong>
                <span>Bahnhofstrasse 45, Commercial Centre</span>
              </li>
              <li>
                <strong>Tbilisi, Georgia</strong>
                <span>Chavchavadze 34, Vake Business Hub</span>
              </li>
              <li>
                <strong>Dubai, UAE</strong>
                <span>DIFC Gate Precinct, Floor 14</span>
              </li>
              <li>
                <strong>London, UK</strong>
                <span>30 St Mary Axe, Financial District</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>DIRECT ENGAGEMENT</h4>
            <p className={styles.contactText}>
              For tender submissions, sovereign infrastructure RFQs, and private capital projects.
            </p>
            <div className={styles.contactActions}>
              <a href="mailto:contact@example.com" className={styles.contactLink}>
                <Mail size={16} />
                <span>contact@example.com</span>
              </a>
              <a href="tel:+18005550199" className={styles.contactLink}>
                <Phone size={16} />
                <span>+1 (800) 555-0199</span>
              </a>
            </div>

            <Link href="/contact" className={styles.footerCta}>
              REQUEST TENDER PROPOSAL
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar with Ravioh Digital Credit & Logo */}
        <div className={styles.bottomBar}>
          <div className={styles.legalInfo}>
            <span>&copy; {new Date().getFullYear()} VANTERRA Construction & Engineering. All Rights Reserved.</span>
            <div className={styles.legalLinks}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Engagement</Link>
              <Link href="#">Safety Protocol Statement</Link>
            </div>
          </div>

          {/* Creator Attribution */}
          <div className={styles.creatorAttribution}>
            <span className={styles.creatorLabel}>SITE CREATED BY</span>
            <span className={styles.creatorBrand}>RAVIOH DIGITAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
