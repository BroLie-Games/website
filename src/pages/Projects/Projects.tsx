import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
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
          Every game starts as a question we can't stop asking.
        </p>
      </motion.section>

      <section className={styles.grid}>
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className={styles.card}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.engine}>{project.engine}</span>
                <span className={styles.status}>{project.status}</span>
              </div>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.genre}>{project.genre} · Game Dev</p>
            </div>

            <p className={styles.summary}>{project.summary}</p>

            <div className={styles.loreBox}>
              <p className={styles.loreLabel}>Lore Fragment</p>
              <blockquote className={styles.lore}>{project.lore}</blockquote>
            </div>

            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
