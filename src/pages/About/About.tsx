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
    name: 'Robin Heij',
    role: 'Co-Founder',
    accentClass: 'cardBlue',
    photo: '/robin.jpeg',
    bio: `Robin brings a sharp eye for detail and a love for well-crafted experiences. He's the kind of person who notices when a game's UI feels just right — or just off. At BroLie Games, he handles the visuals and has strong opinions about making things look and feel great. When he's not working on games, he's probably playing one.`,
    favoriteGames: ['The Last of Us', 'Factorio', 'Skyrim'],
    initial: 'R',
  },
  {
    id: 'thomas',
    name: 'Thomas Liebregts',
    role: 'Co-Founder',
    accentClass: 'cardOrange',
    photo: '/thomas.png',
    bio: `Thomas is driven by curiosity and a passion for building things from scratch. He loves diving deep into systems, figuring out how everything connects, and occasionally proposing ideas that are "maybe a bit too ambitious." At BroLie Games, he builds the systems that make things work and always pushes for one more feature.`,
    favoriteGames: ['God of War', 'Hollow Knight', 'Paw Patrol'],
    initial: 'T',
  },
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
          About Us
        </motion.span>
        <motion.h1 className={styles.heading} variants={item}>
          Two friends.{' '}
          <span className={styles.highlight}>One dream.</span>
          <br />
          A lot of game ideas.
        </motion.h1>
        <motion.p className={styles.lead} variants={item}>
          We're Robin Heij and Thomas Liebregts — two people who grew up
          playing games and eventually decided to start making them.
          BroLie Games was born from a shared love for fun, creative, and
          simple gameplay experiences.
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
              <img
                className={styles.profilePhoto}
                src={p.photo}
                alt={p.name}
              />
              <div>
                <h2 className={styles.profileName}>{p.name}</h2>
                <span className={styles.profileRole}>{p.role}</span>
              </div>
            </div>

            <p className={styles.profileBio}>{p.bio}</p>

            <div className={styles.favGames}>
              <span className={styles.favLabel}>🎮 Favorite games</span>
              <ul className={styles.gameList}>
                {p.favoriteGames.map((game) => (
                  <li key={game} className={styles.gameTag}>
                    {game}
                  </li>
                ))}
              </ul>
            </div>
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
          <p className={styles.storyLabel}>Our Story</p>
          <h2 className={styles.storyHeading}>How it started</h2>
          <p className={styles.storyBody}>
            It started with playing games together. We bonded over our
            favorites, debated what made them great, and kept coming back to
            the same thought:{' '}
            <em>"What if we made our own?"</em>
          </p>
          <p className={styles.storyBody}>
            We both come from a development background, which gives us the
            tools to turn ideas into reality. But BroLie Games isn't about
            our day jobs — it's about our passion for games. We're inspired
            by the titles we love and driven by the simple goal of creating
            something fun, from scratch, together.
          </p>
        </div>
      </motion.section>
    </main>
  );
}
