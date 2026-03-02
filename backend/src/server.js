import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// /api/notes
app.use("/api/notes", notesRoutes);

app.listen(5002, () => {
  console.log("Server PORT: 5002");
});
