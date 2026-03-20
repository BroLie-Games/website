import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './Home.module.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55 },
  }),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.span
            className={styles.eyebrow}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            🎮 Indie Game Studio
          </motion.span>

          <motion.h1
            className={styles.headline}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            We make games
            <br />
            <span className={styles.highlight}>we'd love to play.</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            BroLie Games is Robin Heij and Thomas Liebregts — two friends
            who share a love for simple, fun games inspired by the titles
            that shaped them. We're building what we enjoy, one project at
            a time.
          </motion.p>

          <motion.div
            className={styles.cta}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link to="/projects" className={styles.btnPrimary}>
              See our projects
            </Link>
            <Link to="/about" className={styles.btnSecondary}>
              Who we are
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={styles.features}>
        {[
          {
            icon: '🕹️',
            title: 'Fun & Engaging Gameplay',
            body: 'We focus on games that are genuinely fun to play — simple to pick up, satisfying to master.',
          },
          {
            icon: '📚',
            title: 'Learning Through Creation',
            body: 'Every project is a chance to grow. We learn by doing, experimenting, and shipping real games.',
          },
          {
            icon: '🛠️',
            title: 'Fully Self-Made',
            body: 'From concept to code to art — everything is built by us. No templates, no shortcuts, just passion.',
          },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className={styles.featureIcon}>{f.icon}</span>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureBody}>{f.body}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
