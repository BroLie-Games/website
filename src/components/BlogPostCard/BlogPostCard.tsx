import { motion } from 'framer-motion';
import type { BlogPost } from '../../data/blog';
import BlogContentRenderer from '../BlogContentRenderer';
import styles from './BlogPostCard.module.css';

interface BlogPostCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <p className={styles.date}>{formatDate(post.date)}</p>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.summary}>{post.summary}</p>
      <BlogContentRenderer content={post.content} />
    </motion.article>
  );
}
