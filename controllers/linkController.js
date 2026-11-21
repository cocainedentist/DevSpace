const asyncHandler = require("express-async-handler");
const Link = require("../models/Link");

// 담당: 이동현
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /links?projectId=
const getAllLinks = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "링크 공유", route: "GET /links?projectId=" });
});

// @route POST /links
const createLink = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "링크 공유", route: "POST /links" });
});

// @route GET /links/:linkId
const getLink = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "링크 공유", route: "GET /links/:linkId" });
});

// @route DELETE /links/:linkId
const deleteLink = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "링크 공유", route: "DELETE /links/:linkId" });
});

module.exports = { getAllLinks, createLink, getLink, deleteLink };
