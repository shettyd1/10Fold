import React, { useRef, useState } from "react";

export default function CustomVideoPlayer() {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  // Change Playback Speed
  const handleSpeedChange = (e) => {
    const rate = parseFloat(e.target.value);
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  // Change Volume
  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-black rounded-lg">
      {/* Video */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        className="w-full rounded"
      />

      {/* Controls */}
      <div className="flex justify-between items-center mt-4 p-2 bg-gray-900 text-white rounded">
        {/* Playback Speed */}
        <div>
          <label className="mr-2">Speed:</label>
          <select
            value={playbackRate}
            onChange={handleSpeedChange}
            className="text-black rounded px-2 py-1"
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x (Normal)</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>

        {/* Volume */}
        <div>
          <label className="mr-2">Volume:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

