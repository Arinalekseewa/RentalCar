import clsx from 'clsx';
import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({
  onClick,
  hidden = false,
  disabled = false,
  isLoading = false,
  fullWidth = true,
  children = 'Load more',
  className,
}) {
  if (hidden) return null;

  return (
    <div className={styles.container}>
      <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? 'true' : 'false'}
      className={styles.loadMoreBtn}
    >Load More
    </button>
    </div>
    
  );
}