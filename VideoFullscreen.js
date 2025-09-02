import React, { useRef } from "react";

export default function FullscreenVideoPlayer() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Play / Pause
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  // Toggle Fullscreen
  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative max-w-3xl mx-auto bg-black rounded-lg overflow-hidden"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        className="w-full h-auto"
      />

      {/* Custom Controls */}
      <div className="absolute bottom-2 left-2 flex gap-2">
        <button
          onClick={handlePlayPause}
          className="px-3 py-1 bg-white/80 text-black rounded hover:bg-white"
        >
          Play / Pause
        </button>
        <button
          onClick={handleFullscreen}
          className="px-3 py-1 bg-white/80 text-black rounded hover:bg-white"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}

