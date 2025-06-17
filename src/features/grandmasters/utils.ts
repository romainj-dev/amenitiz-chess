export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatLastOnline(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60),
  );

  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  return `${Math.floor(diffInHours / 24)} days ago`;
}
