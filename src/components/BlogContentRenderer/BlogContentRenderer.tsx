import type { BlogContentBlock } from '../../data/blog';
import YouTubeEmbed from '../YouTubeEmbed';
import styles from './BlogContentRenderer.module.css';

interface BlogContentRendererProps {
  content: BlogContentBlock[];
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className={styles.content}>
      {content.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <h3 key={i}>{block.text}</h3>
            );
          case 'paragraph':
            return <p key={i}>{block.text}</p>;
          case 'bullet-list':
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case 'ordered-list':
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case 'image':
            return <img key={i} src={block.url} alt={block.alt} />;
          case 'youtube':
            return <YouTubeEmbed key={i} url={block.url} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
