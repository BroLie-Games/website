import styles from './YouTubeEmbed.module.css';

function extractVideoId(url: string): string | null {
  // Match youtu.be/ID or youtube.com/watch?v=ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return longMatch[1];
  return null;
}

interface YouTubeEmbedProps {
  url: string;
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const videoId = extractVideoId(url);
  if (!videoId) return null;

  return (
    <div className={styles.wrapper}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
