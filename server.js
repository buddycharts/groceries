const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS for frontend apps (React, Flutter, Android, etc.)
app.use(cors());
app.use(express.json());

// Serve images from: grocieries/images/
app.use("/images", express.static(path.join(__dirname, "images")));

// Serve groceries.json
app.get("/api/groceries", (req, res) => {
  res.sendFile(path.join(__dirname, "groceries.json"));
});

// Test route
app.get("/", (req, res) => {
  res.send("Groceries API running on Render 🚀");
});

// Use Render port OR 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
