import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You have notes!");
});

app.listen(5002, () => {
  console.log("Server PORT: 5002");
});
