const asyncHandler = require("express-async-handler");
const File = require("../models/File");

// 담당: 최서진
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /files?projectId=
const getAllFiles = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "파일 업로드", route: "GET /files?projectId=" });
});

// @route POST /files
const uploadFile = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "파일 업로드", route: "POST /files" });
});

// @route GET /files/:fileId (다운로드)
const getFile = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "파일 업로드", route: "GET /files/:fileId (다운로드)" });
});

// @route DELETE /files/:fileId
const deleteFile = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "파일 업로드", route: "DELETE /files/:fileId" });
});

module.exports = { getAllFiles, uploadFile, getFile, deleteFile };
