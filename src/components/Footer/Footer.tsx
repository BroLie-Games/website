import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} BroLie Games — All rights reserved
        </p>
        <p className={styles.tagline}>making games, having fun</p>
      </div>
    </footer>
  );
}
