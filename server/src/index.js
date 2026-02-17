const express = require("express");
const cors = require("cors");
require("dotenv").config();

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// basic route
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
