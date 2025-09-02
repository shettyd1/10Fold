import React, { useState } from "react";
import axios from "axios";

export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // local preview
      setMessage("");
    } else {
      setMessage("Please select a valid video file.");
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!videoFile) {
      setMessage("No video selected!");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      setUploading(true);
      setMessage("Uploading...");

      // Replace with your backend API endpoint
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Upload successful ✅");
      console.log(res.data);
    } catch (err) {
      setMessage("Upload failed ❌");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Upload a Video</h2>

      <input type="file" accept="video/*" onChange={handleFileChange} />

      {previewUrl && (
        <video
          src={previewUrl}
          controls
          className="w-full mt-3 rounded-md shadow"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Video"}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

