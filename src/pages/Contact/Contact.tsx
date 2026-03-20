import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const socials = [
  {
    icon: '📸',
    label: 'Instagram',
    handle: '@broliegames',
    href: 'https://instagram.com/broliegames',
  },
  {
    icon: '▶',
    label: 'YouTube',
    handle: '@BroLieGames',
    href: 'https://youtube.com/@BroLieGames',
  },
  {
    icon: '🎮',
    label: 'Twitch',
    handle: 'broliegames',
    href: 'https://twitch.tv/broliegames',
  },
  {
    icon: '✉️',
    label: 'Email',
    handle: 'hello@broliegames.com',
    href: 'mailto:hello@broliegames.com',
  },
];

export default function Contact() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.eyebrow}>Get in Touch</span>
        <h1 className={styles.heading}>
          Let's{' '}
          <span className={styles.highlight}>connect</span>
        </h1>
        <p className={styles.lead}>
          Want to follow our journey, chat about games, or just say hi?
          Find us on any of these platforms.
        </p>
      </motion.section>

      <section className={styles.contactGrid}>
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className={styles.contactCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className={styles.contactIcon}>{s.icon}</span>
            <span className={styles.contactLabel}>{s.label}</span>
            <span className={styles.contactHandle}>{s.handle}</span>
          </motion.a>
        ))}
      </section>
    </main>
  );
}
