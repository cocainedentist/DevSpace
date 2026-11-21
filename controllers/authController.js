const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// @desc  로그인 화면
// @route GET /login
const getLogin = (req, res) => {
  res.render("auth/login", { title: "로그인", error: null });
};

// @desc  로그인 처리
// @route POST /login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: (email || "").toLowerCase() });
  if (!user) {
    return res.status(401).render("auth/login", { title: "로그인", error: "일치하는 사용자가 없습니다." });
  }
  const isMatch = await bcrypt.compare(password || "", user.password);
  if (!isMatch) {
    return res.status(401).render("auth/login", { title: "로그인", error: "비밀번호가 일치하지 않습니다." });
  }
  // TODO(14주차 사용자 인증 이후): 로그인 상태 저장 (쿠키/세션 또는 JWT)
  res.redirect("/projects");
});

// @desc  회원가입 화면
// @route GET /register
const getRegister = (req, res) => {
  res.render("auth/register", { title: "회원가입", error: null });
};

// @desc  회원가입 처리
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, password2 } = req.body;
  if (!name || !email || !password) {
    return res.status(400).render("auth/register", { title: "회원가입", error: "모든 항목을 입력하세요." });
  }
  if (password !== password2) {
    return res.status(400).render("auth/register", { title: "회원가입", error: "비밀번호가 일치하지 않습니다." });
  }
  if (await User.findOne({ email: email.toLowerCase() })) {
    return res.status(400).render("auth/register", { title: "회원가입", error: "이미 가입된 이메일입니다." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword });
  res.redirect("/login");
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
