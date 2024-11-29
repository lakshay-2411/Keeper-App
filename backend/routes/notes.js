const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  console.log(title);
  console.log(content);
  try {
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    console.log("Request params: ", req.params);
    
    const { id } = req.params;
    console.log("Received id: ", id);
    
    await Note.findByIdAndDelete(id);
    res.json({ message: "Note Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
