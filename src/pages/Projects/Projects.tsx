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

          <h2 className={styles.featuredTitle}>AutonomousLee</h2>
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
            <p className={styles.ctaText}>📣 Follow the development closely</p>
            <div className={styles.socialLinks}>
              <a
                href="https://youtube.com/@BroLieGames"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                ▶ YouTube
              </a>
              <a
                href="https://instagram.com/broliegames"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
