

const VideoDuration = (videoInfo) => {
  const lengthSeconds = videoInfo?.videoInfo?.lengthSeconds || 0;
  const minutes = Math.floor(lengthSeconds / 60);
  const seconds = lengthSeconds % 60;

  // Ensure seconds are displayed with two digits (e.g., "02" instead of "2")
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <p className="text-xl">
      Duration: {minutes}:{formattedSeconds}
    </p>
  );
};

export default VideoDuration;
