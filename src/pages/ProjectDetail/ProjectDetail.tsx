import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../../data/projects';
import { getPostsByProjectId } from '../../data/blog';
import BlogPostCard from '../../components/BlogPostCard';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className={styles.main}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundHeading}>Project not found</h1>
          <p className={styles.notFoundText}>
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects" className={styles.backLink}>
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const posts = getPostsByProjectId(project.id);

  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.eyebrow}>{project.status}</span>
        <h1 className={styles.heading}>
          <span className={styles.highlight}>{project.title}</span>
        </h1>
        <p className={styles.description}>{project.summary}</p>
      </motion.section>

      <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>Development Updates</h2>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
