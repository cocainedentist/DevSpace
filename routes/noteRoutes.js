const express = require("express");
const router = express.Router();
const { getAllNotes, createNote, getNote, updateNote, deleteNote } = require("../controllers/noteController");

router.route("/").get(getAllNotes).post(createNote);
router.route("/:noteId").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
