import { motion } from 'framer-motion';
import styles from './About.module.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.span className={styles.eyebrow} variants={item}>
          About Us
        </motion.span>
        <motion.h1 className={styles.heading} variants={item}>
          Small studio.{' '}
          <span className={styles.highlight}>Big questions.</span>
        </motion.h1>
        <motion.p className={styles.lead} variants={item}>
          BroLie Games is a passion-driven indie studio. We make games that sit
          with you long after you've put the controller down.
        </motion.p>
      </motion.section>

      <section className={styles.content}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.cardTitle}>Who We Are</h2>
          <p>
            We're a small team (sometimes a team of one) making games we'd
            desperately want to play. Our work lives at the intersection of
            environmental storytelling, clever puzzle design, and robots with
            existential crises.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.cardTitle}>Our Philosophy</h2>
          <p>
            We believe the most interesting characters are the ones who question
            their own purpose. We're drawn to quiet worlds — places that used to
            be full of life, now full of echoes. And we think puzzles should
            feel like archaeology, not homework.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.cardTitle}>Our Tools</h2>
          <ul className={styles.techList}>
            {['Godot', 'Blender', 'Aseprite', 'FMOD', 'Git'].map((t) => (
              <li key={t} className={styles.techItem}>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
