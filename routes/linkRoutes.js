const express = require("express");
const router = express.Router();
const { getAllLinks, createLink, getLink, deleteLink } = require("../controllers/linkController");

router.route("/").get(getAllLinks).post(createLink);
router.route("/:linkId").get(getLink).delete(deleteLink);

module.exports = router;
