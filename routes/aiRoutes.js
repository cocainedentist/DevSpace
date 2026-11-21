const express = require("express");
const router = express.Router();
const { classify, summary } = require("../controllers/aiController");

router.post("/classify", classify);
router.post("/summary", summary);

module.exports = router;
