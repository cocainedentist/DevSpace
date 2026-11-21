const asyncHandler = require("express-async-handler");
const Note = require("../models/Note");

// 담당: 최서진
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /notes?projectId=
const getAllNotes = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "메모 관리", route: "GET /notes?projectId=" });
});

// @route POST /notes
const createNote = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "메모 관리", route: "POST /notes" });
});

// @route GET /notes/:noteId
const getNote = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "메모 관리", route: "GET /notes/:noteId" });
});

// @route PUT /notes/:noteId
const updateNote = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "메모 관리", route: "PUT /notes/:noteId" });
});

// @route DELETE /notes/:noteId
const deleteNote = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "메모 관리", route: "DELETE /notes/:noteId" });
});

module.exports = { getAllNotes, createNote, getNote, updateNote, deleteNote };
