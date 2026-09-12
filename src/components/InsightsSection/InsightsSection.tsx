import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { INSIGHTS } from '@/data';
import styles from './InsightsSection.module.scss';

export default function InsightsSection() {
  return (
    <section className={styles.section} id="journal-insights">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headingBlock}>
            <span className={styles.tag}>THOUGHT LEADERSHIP & RESEARCH</span>
            <h2 className={styles.title}>ENGINEERING INSIGHTS</h2>
          </div>
          <Link href="/insights" className={styles.viewAllLink}>
            <span>VIEW ALL DISPATCHES</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {INSIGHTS.slice(0, 3).map((article) => (
            <article key={article.id} className={styles.card}>
              <Link href={`/insights#${article.slug}`} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                  <span className={styles.categoryBadge}>{article.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Calendar size={13} />
                      {article.date}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock size={13} />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.summary}>{article.summary}</p>

                  <div className={styles.authorRow}>
                    <span className={styles.authorName}>{article.author.name}</span>
                    <span className={styles.authorRole}>{article.author.role}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
