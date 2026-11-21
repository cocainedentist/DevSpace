const asyncHandler = require("express-async-handler");

// 담당: 이동현
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /search?q=
const search = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "전체 검색", route: "GET /search?q=" });
});

module.exports = { search };
