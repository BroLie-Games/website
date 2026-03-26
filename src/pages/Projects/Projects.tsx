import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.eyebrow}>Our Work</span>
        <h1 className={styles.heading}>
          Projects in{' '}
          <span className={styles.highlight}>the workshop</span>
        </h1>
        <p className={styles.lead}>
          Every game starts as an idea we can't stop thinking about.
        </p>
      </motion.section>

      <motion.section
        className={styles.featured}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.featuredImage}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderIcon}>🎮</span>
            <span className={styles.placeholderText}>Game footage coming soon</span>
          </div>
        </div>

        <div className={styles.featuredInfo}>
          <div className={styles.metaBadges}>
            <span className={styles.engine}>Godot</span>
            <span className={styles.status}>In Development</span>
          </div>

          <Link to="/projects/autonomouslee" className={styles.featuredTitle}>
            <h2 className={styles.featuredTitleText}>AutonomousLee</h2>
          </Link>
          <p className={styles.genre}>Puzzle · Sci-Fi</p>

          <p className={styles.featuredSummary}>
            A puzzle game set in a quiet, post-apocalyptic world where you
            play as Lee — a lone construction bot with a singular directive:
            revive the robot army and annihilate humanity. But as Lee
            explores the ruins, things aren't so black and white.
          </p>

          <p className={styles.featuredDescription}>
            AutonomousLee is our first game, built entirely in Godot. Players
            navigate ruined landscapes, solve environmental puzzles, and piece
            together a forgotten civilisation — all through the optics of a
            battered construction bot named Lee.
          </p>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>Follow the development closely</p>
            <div className={styles.socialLinks}>
              <a
                href="https://youtube.com/@BroLieGames"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
                YouTube
              </a>
              <a
                href="https://instagram.com/broliegames"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
