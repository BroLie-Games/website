import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const socials = [
  {
    label: 'Instagram',
    handle: '@broliegames',
    href: 'https://instagram.com/broliegames',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: '@BroLieGames',
    href: 'https://youtube.com/@BroLieGames',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Twitch',
    handle: 'broliegames',
    href: 'https://twitch.tv/broliegames',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'hello@broliegames.com',
    href: 'mailto:hello@broliegames.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
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
