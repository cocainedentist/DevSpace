const express = require("express");
const router = express.Router();
const { getAllFiles, uploadFile, getFile, deleteFile } = require("../controllers/fileController");

// TODO: 파일 업로드 미들웨어(예: multer)를 정한 뒤 POST 에 연결
router.route("/").get(getAllFiles).post(uploadFile);
router.route("/:fileId").get(getFile).delete(deleteFile);

module.exports = router;
