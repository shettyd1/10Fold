import React, { useState } from "react";

export default function VideoSelector() {
  // List of available videos
  const videoList = [
    {
      id: 1,
      title: "Nature Walk",
      src: "/videos/nature.mp4", // public folder or CDN URL
    },
    {
      id: 2,
      title: "City Timelapse",
      src: "/videos/city.mp4",
    },
    {
      id: 3,
      title: "Ocean Waves",
      src: "/videos/ocean.mp4",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select a Video</h2>

      {/* Video Preview */}
      <div className="mb-4">
        <video
          key={selectedVideo.id}
          src={selectedVideo.src}
          controls
          className="w-full rounded-md shadow"
        />
        <p className="mt-2 text-lg font-medium">{selectedVideo.title}</p>
      </div>

      {/* Video Selection List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videoList.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`p-2 rounded-md border ${
              selectedVideo.id === video.id
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            } hover:bg-gray-100`}
          >
            <p className="text-sm font-medium">{video.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

