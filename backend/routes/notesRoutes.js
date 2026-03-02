import express from "express";

const router = express.Router();

// read
router.get("/", (req, res) => {
  res.status(200).send("view notes");
});

// create
router.post("/", (req, res) => {
  res.status(201).json({ message: "create note" });
});

// update
router.post("/:id", (req, res) => {
  res.status(200).json({ message: "update note" });
});

// delete
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "delete note" });
});

export default router;
