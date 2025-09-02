import React, { useState } from "react";

export default function VideoManager() {
  // State for video list
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Sample Video",
      description: "An example video from the library",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new video
  const handleAddVideo = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.url) {
      alert("Title and Video URL are required!");
      return;
    }

    const newVideo = {
      id: Date.now(),
      ...formData,
    };

    setVideos([...videos, newVideo]);
    setFormData({ title: "", description: "", url: "" }); // reset form
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Video Library</h2>

      {/* Form */}
      <form onSubmit={handleAddVideo} className="mb-6 space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="url"
          name="url"
          placeholder="Video URL (https://...)"
          value={formData.url}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Video
        </button>
      </form>

      {/* Video List */}
      <div className="grid gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-4 border rounded-lg shadow bg-white"
          >
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {video.description || "No description"}
            </p>
            <video
              src={video.url}
              controls
              className="w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

