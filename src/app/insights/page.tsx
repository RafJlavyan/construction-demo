import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowUpRight } from 'lucide-react';
import { INSIGHTS } from '@/data';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import styles from './InsightsPage.module.scss';

export const metadata: Metadata = {
  title: 'Engineering Insights & Research Dispatches',
  description: 'Technical whitepapers, structural mechanics research, and urban development analysis authored by Vanterra specialists.',
};

export default function InsightsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.tag}>RESEARCH & THOUGHT LEADERSHIP</span>
          <h1 className={styles.title}>ENGINEERING INSIGHTS</h1>
          <p className={styles.subtitle}>
            Critical perspectives on seismic dampening, high-yield post-tensioned slabs,
            and computational BIM coordination for high-density metropolitan capitals.
          </p>
        </div>
      </header>

      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.articlesList}>
            {INSIGHTS.map((article, idx) => (
              <article key={article.id} id={article.slug} className={styles.articleCard}>
                <div className={styles.imageCol}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className={styles.articleImg}
                    />
                    <span className={styles.categoryBadge}>{article.category}</span>
                  </div>
                </div>

                <div className={styles.contentCol}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock size={14} />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.summary}>{article.summary}</p>

                  {article.content && (
                    <div className={styles.contentSnippet}>
                      {article.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  <div className={styles.authorBar}>
                    <div className={styles.authorInfo}>
                      <User size={14} className={styles.userIcon} />
                      <span className={styles.name}>{article.author.name}</span>
                      <span className={styles.role}>&bull; {article.author.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
