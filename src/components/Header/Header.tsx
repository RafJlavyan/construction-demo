'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ShieldCheck, MapPin, Phone, Activity } from 'lucide-react';
import DemoBanner from '@/components/DemoBanner/DemoBanner';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { num: '01', label: 'PROJECTS', href: '/projects' },
  { num: '02', label: 'SERVICES', href: '/services' },
  { num: '03', label: 'ABOUT', href: '/about' },
  { num: '04', label: 'PROCESS', href: '/process' },
  { num: '05', label: 'INSIGHTS', href: '/insights' },
  { num: '06', label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      id="main-navigation"
    >
      {/* Universal Demo Banner Component */}
      <DemoBanner />

      <div className={styles.navBar}>
        <div className={styles.container}>
          {/* Brand Wordmark Logo (Clean without icon) */}
          <Link href="/" className={styles.logoLink} aria-label="VANTERRA Construction Home">
            <div className={styles.wordmark}>
              <div className={styles.nameRow}>
                <span className={styles.brandName}>VANTERRA</span>
                <span className={styles.brandBadge}>EST. 1999</span>
              </div>
              <span className={styles.brandSub}>CONSTRUCTION & CIVIL ENGINEERING</span>
            </div>
          </Link>

          {/* Center Floating Architectural Capsule Navigation */}
          <nav className={styles.capsuleNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    <span className={styles.navNum}>{item.num}</span>
                    <span className={styles.navText}>{item.label}</span>
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Utility & Actions */}
        <div className={styles.headerActions}>
          {/* Live Operational Status Indicator */}
          <div className={styles.statusIndicator} title="Real-time operational status">
            <span className={styles.statusDot} />
            <div className={styles.statusText}>
              <span className={styles.statusLabel}>148 SITES</span>
              <span className={styles.statusSub}>BIM L3 ACTIVE</span>
            </div>
          </div>

          {/* Primary CTA */}
          <Link href="/contact" className={styles.ctaButton}>
            <span>INQUIRE</span>
            <ArrowUpRight className={styles.ctaIcon} size={15} />
          </Link>

          {/* Directory / Mobile Drawer Trigger */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? 'Close Directory' : 'Open Directory Menu'}
            aria-expanded={drawerOpen}
          >
            <span className={styles.menuButtonText}>INDEX</span>
            {drawerOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </div>

      {/* Global Architectural Directory Drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerBackdrop} onClick={() => setDrawerOpen(false)} />
        <div className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <div>
              <span className={styles.drawerTag}>GLOBAL HEADQUARTERS DIRECTORY</span>
              <p className={styles.drawerTitle}>VANTERRA ENGINEERING CORP</p>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.drawerBody}>
            {/* Quick Links Column */}
            <div className={styles.drawerCol}>
              <span className={styles.colHeading}>NAVIGATION</span>
              <ul className={styles.drawerNavList}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.drawerNavLink}
                    >
                      <span className={styles.drawerNum}>{item.num}</span>
                      <span className={styles.drawerLabel}>{item.label}</span>
                      <ArrowUpRight size={14} className={styles.linkArrow} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hubs Column */}
            <div className={styles.drawerCol}>
              <span className={styles.colHeading}>GLOBAL OFFICES</span>
              <div className={styles.officeItem}>
                <span className={styles.officeCity}>ZURICH (HQ)</span>
                <p className={styles.officeAddress}>Bahnhofstrasse 45, 8001 Zürich</p>
                <p className={styles.officePhone}>+41 (44) 215-5000</p>
              </div>
              <div className={styles.officeItem}>
                <span className={styles.officeCity}>DUBAI HUB</span>
                <p className={styles.officeAddress}>DIFC Gate Tower 4, Level 18</p>
                <p className={styles.officePhone}>+971 (4) 312-8800</p>
              </div>
              <div className={styles.officeItem}>
                <span className={styles.officeCity}>BERLIN ENG.</span>
                <p className={styles.officeAddress}>Potsdamer Platz 10, Mitte</p>
                <p className={styles.officePhone}>+49 (30) 259-330</p>
              </div>
            </div>

            {/* Standards & Direct Channels */}
            <div className={styles.drawerCol}>
              <span className={styles.colHeading}>CERTIFICATIONS & PROTOCOLS</span>
              <div className={styles.certBadge}>
                <ShieldCheck size={16} className={styles.certIcon} />
                <span>ISO 9001:2015 QUALITY ASSURANCE</span>
              </div>
              <div className={styles.certBadge}>
                <ShieldCheck size={16} className={styles.certIcon} />
                <span>ISO 45001 OCCUPATIONAL SAFETY</span>
              </div>
              <div className={styles.certBadge}>
                <Activity size={16} className={styles.certIcon} />
                <span>ZERO TOLERANCE STRUCTURAL AUDIT</span>
              </div>

              <div className={styles.directContactBox}>
                <span className={styles.directTag}>DIRECT CLIENT INQUIRIES</span>
                <a href="mailto:contact@example.com" className={styles.directEmail}>
                  contact@example.com
                </a>
                <Link href="/contact" className={styles.drawerCtaBtn}>
                  START NEW PROJECT BRIEF
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
