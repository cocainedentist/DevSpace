const asyncHandler = require("express-async-handler");
const Snippet = require("../models/Snippet");

// 담당: 이동현
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /snippets?projectId=
const getAllSnippets = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "코드 관리", route: "GET /snippets?projectId=" });
});

// @route POST /snippets
const createSnippet = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "코드 관리", route: "POST /snippets" });
});

// @route GET /snippets/:snippetId
const getSnippet = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "코드 관리", route: "GET /snippets/:snippetId" });
});

// @route PUT /snippets/:snippetId
const updateSnippet = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "코드 관리", route: "PUT /snippets/:snippetId" });
});

// @route DELETE /snippets/:snippetId
const deleteSnippet = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "코드 관리", route: "DELETE /snippets/:snippetId" });
});

module.exports = { getAllSnippets, createSnippet, getSnippet, updateSnippet, deleteSnippet };
