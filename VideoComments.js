import React, { useState } from "react";

export default function VideoWithComments() {
  // Example video
  const video = {
    id: 1,
    title: "Ocean Waves",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  };

  // Comments state
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", text: "Wow, this video is so relaxing!" },
    { id: 2, author: "Bob", text: "Reminds me of my vacation last year 🌊" },
  ]);

  // New comment input
  const [newComment, setNewComment] = useState("");

  // Handle submit
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: "Guest User", // In real app: use logged-in user info
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewComment(""); // clear input
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Video */}
      <h2 className="text-xl font-bold mb-2">{video.title}</h2>
      <video src={video.url} controls className="w-full rounded-md mb-4" />

      {/* Comment Form */}
      <form onSubmit={handleAddComment} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border rounded p-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="p-3 border rounded bg-gray-50 shadow-sm"
            >
              <p className="font-medium">{c.author}</p>
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

