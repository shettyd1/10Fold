// server.js
import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single("video"), (req, res) => {
  res.json({ message: "Video uploaded successfully", file: req.file });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

