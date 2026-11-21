const asyncHandler = require("express-async-handler");

// 담당: 이동현, 최서진
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route POST /ai/classify
const classify = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "AI", route: "POST /ai/classify" });
});

// @route POST /ai/summary
const summary = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "AI", route: "POST /ai/summary" });
});

module.exports = { classify, summary };
