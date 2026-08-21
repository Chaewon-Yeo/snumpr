import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import highlightsData from '../../public/data/highlights.json';
import { HighlightItem } from '../types';
import FadeIn from '../components/FadeIn';

const highlights: HighlightItem[] = highlightsData;
const HIGHLIGHTS_PREVIEW_COUNT = 4;

export default function Home() {
  return (
    <main className={styles.main}>
      <FadeIn>
          <section className={`${styles.section} ${styles.newsSection}`}>
            <div className={styles.newsIntro}>
              <h1 className={styles.welcomeTitle}>
                Welcome to
                <br />
                Machine Perception &amp;
                <br />
                Reasoning Lab!
              </h1>
              <h2 className={styles.newsTitle}>We study computational cognition and learning in efficiency.</h2>
              <p className={styles.newsDetails}>
                We explore the intersection of computational perception and efficient learning algorithms to advance intelligent systems. Our research optimizes how artificial agents acquire, represent, and adapt knowledge with minimal computational overhead. We try to trailblaze scalable, sustainable intelligence that works in real-world environments.
              </p>
            </div>

          <div className={styles.sliderArea}>
            <div className={styles.newsImageWrapper}>
              <Image
                src="/images/gallery/2026workshop1_protected.jpeg"
                alt="SNUMPR lab members"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
                className={styles.image}
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Highlights */}
      <FadeIn>
        <section className={`${styles.section} ${styles.highlightsSection}`}>
          <div className={styles.highlightsHeader}>
            <h2 className={styles.sectionTitle}>Highlights</h2>
            <Link href="/highlights" className={styles.seeAllLink}>
              <span className={styles.seeAllText}>See all</span>
              <svg
                className={styles.seeAllArrow}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="18" y2="12" />
                <polyline points="13,7 18,12 13,17" />
              </svg>
            </Link>
          </div>
          <div className={styles.highlightsGrid}>
            {highlights.slice(0, HIGHLIGHTS_PREVIEW_COUNT).map((item, idx) => (
              <article key={item.id} className={styles.highlightCard}>
                <div className={styles.highlightImageWrapper}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 50vw, 28rem"
                    className={styles.image}
                    priority={idx < 2}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.details}>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
