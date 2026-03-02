import express from "express";

const app = express();

app.get("api/notes", (req, res) => {
  res.send("New Notes!");
});

app.listen(5001, () => {
  console.log("PORT: 5001");
});
