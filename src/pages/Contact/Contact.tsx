import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

type FormState = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<FormState>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    // Simulate async submission
    setTimeout(() => setState('sent'), 1200);
  }

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
          Say{' '}
          <span className={styles.highlight}>hello</span>
        </h1>
        <p className={styles.lead}>
          Interested in our work? Want to collaborate? Or just want to talk
          about robots? We'd love to hear from you.
        </p>
      </motion.section>

      <section className={styles.formSection}>
        {state === 'sent' ? (
          <motion.div
            className={styles.successBox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.successIcon}>✓</span>
            <h2 className={styles.successTitle}>Message received!</h2>
            <p className={styles.successBody}>
              Thanks for reaching out. We'll get back to you as soon as the
              signal cuts through the static.
            </p>
            <button
              className={styles.resetBtn}
              onClick={() => {
                setForm({ name: '', email: '', message: '' });
                setState('idle');
              }}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us what's on your mind…"
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={state === 'sending'}
            >
              {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </motion.form>
        )}
      </section>
    </main>
  );
}
