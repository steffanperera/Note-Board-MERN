import express from "express";

const app = express();

// set basic api route
app.get("/api/notes", (req, res) => {
  res.send("test: /api/notes");
});

// set up express to listen on port 5001
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
