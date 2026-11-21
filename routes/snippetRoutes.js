const express = require("express");
const router = express.Router();
const { getAllSnippets, createSnippet, getSnippet, updateSnippet, deleteSnippet } = require("../controllers/snippetController");

router.route("/").get(getAllSnippets).post(createSnippet);
router.route("/:snippetId").get(getSnippet).put(updateSnippet).delete(deleteSnippet);

module.exports = router;
