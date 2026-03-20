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
        <motion.div
          className={styles.glowOrb}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className={styles.heroContent}>
          <motion.span
            className={styles.eyebrow}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Indie Game Studio
          </motion.span>

          <motion.h1
            className={styles.headline}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            We build worlds
            <br />
            <span className={styles.highlight}>worth exploring.</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            BroLie Games is a small indie studio obsessed with narrative-driven
            puzzle games. We love desolate aesthetics, morally complex robots,
            and questions without easy answers.
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
            icon: '🤖',
            title: 'Robot Protagonists',
            body: 'Our heroes run on rust and reluctance — machines questioning their own directives.',
          },
          {
            icon: '🧩',
            title: 'Puzzle-Driven',
            body: 'Every challenge is woven into the environment. No tutorials, just discovery.',
          },
          {
            icon: '🌑',
            title: 'Desolate Worlds',
            body: "Silent, overgrown, and hauntingly beautiful. There's always something left behind.",
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
