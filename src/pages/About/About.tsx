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

const profiles = [
  {
    id: 'robin',
    name: 'Robin Hij',
    role: 'Front-End Developer',
    handle: 'RHij',
    accentClass: 'cardBlue',
    bio: `Robin is a front-end developer with a talent for building interfaces — and an equal talent for getting distracted by them in games. He's the kind of developer who notices when a button animation is 12ms too slow, both at work and in cutscenes. At BroLie Games, he handles the visuals and has very strong opinions about it. His greatest achievement so far is convincing Thomas that aesthetics actually matter.`,
    traits: ['UX Perfectionist', 'Lore Admirer', 'Reluctant Designer'],
  },
  {
    id: 'thomas',
    name: 'Thomas Liebregts',
    role: 'Full-Stack Developer',
    handle: 'TLieb',
    accentClass: 'cardOrange',
    bio: `Thomas Liebregts is a full-stack developer who approaches games the same way he approaches code: with a lot of questions and a suspicious number of browser tabs open. He's the narrative guy — always getting sidetracked by world-building when he's supposed to be solving the puzzle. At BroLie Games, he builds the systems that make things work and occasionally proposes story directions that are "maybe a bit too dark."`,
    traits: ['Systems Thinker', 'Lore Architect', 'Tab Hoarder'],
  },
];

const stats = [
  { label: 'Combined gaming hours', value: '[CLASSIFIED]' },
  { label: 'Bugs fixed vs introduced', value: '≈ 1 : 1' },
  { label: 'Game design arguments', value: 'Yes.' },
  { label: 'Regrets so far', value: 'Ask after launch.' },
];

export default function About() {
  return (
    <main className={styles.main}>
      {/* ── Hero ── */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.span className={styles.eyebrow} variants={item}>
          Personnel Database // BroLie Games
        </motion.span>
        <motion.h1 className={styles.heading} variants={item}>
          Two devs.{' '}
          <span className={styles.highlight}>One studio.</span>
          <br />
          Questionable sleep schedules.
        </motion.h1>
        <motion.p className={styles.lead} variants={item}>
          Meet Robin Hij and Thomas Liebregts — two web developers who
          discovered that the best debugging sessions happen after a few rounds
          of co-op. What started as a shared sense of humour and an unhealthy
          obsession with well-crafted puzzles turned into BroLie Games.
        </motion.p>
      </motion.section>

      {/* ── Profile Cards ── */}
      <section className={styles.profiles}>
        {profiles.map((p, i) => (
          <motion.div
            key={p.id}
            className={[styles.profileCard, styles[p.accentClass]].join(' ')}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.55 }}
          >
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>
                {p.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <h2 className={styles.profileName}>{p.name}</h2>
                <span className={styles.profileRole}>{p.role}</span>
              </div>
              <span className={styles.handle}>// {p.handle}</span>
            </div>
            <p className={styles.profileBio}>{p.bio}</p>
            <ul className={styles.traitList}>
              {p.traits.map((t) => (
                <li key={t} className={styles.trait}>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* ── Origin Story ── */}
      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.storyCard}>
          <p className={styles.storyLabel}>// Origin Protocol</p>
          <h2 className={styles.storyHeading}>How it started</h2>
          <p className={styles.storyBody}>
            They met as web developers. They bonded over good design, terrible
            puns, and games that make you think too much. One co-op session
            turned into many more. Then someone said{' '}
            <em>"what if we just... made our own?"</em> — and BroLie Games was
            born out of that specific kind of hubris only two developers with
            too many side-project ideas can generate.
          </p>
          <p className={styles.storyBody}>
            Robin plays to optimise. Thomas plays to get lost in the lore.
            Together, somehow, it works. BroLie Games is what happens when two
            friends with good taste and bad sleep schedules decide to build the
            game they always wanted to play.
          </p>
        </div>
      </motion.section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.statCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
