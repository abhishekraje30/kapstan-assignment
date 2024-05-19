const data = {
  id: 1,
  name: "tic-tac-toc",
  status: "deployed",
  version: "1.2.1",
  updatedAt: 1714454128, // Assuming this is in Unix timestamp format
  desiredVersion: "1.2.2",
};

export function getTimeAgo(updatedAtTimestamp: number) {
  const now = new Date().getTime();
  const updatedAt = new Date(updatedAtTimestamp * 1000); // Convert to milliseconds

  const timeDifference = now - updatedAt.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}
