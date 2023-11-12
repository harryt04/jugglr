/**
 * Converts the number of seconds to hh:mm:ss format, omitting hours if applicable.
 * @param {number} seconds - number of seconds to convert to hh:mm:ss format
 * @returns {string} the formatted time string
 */
export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours =
    hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
  const formattedMinutes = `${minutes.toString()}:`;
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
