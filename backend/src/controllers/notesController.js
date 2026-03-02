// read note
export const getAllNotes = (req, res) => {
  res.status(200).send("view notes");
};

// create note
export const createNote = (req, res) => {
  res.status(201).json({ message: "create note" });
};

// update note
export const updateNote = (req, res) => {
  res.status(200).json({ message: "update note" });
};

// delete note
export const deleteNote = (req, res) => {
  res.status(200).json({ message: "delete note" });
};
