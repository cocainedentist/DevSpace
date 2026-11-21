require("dotenv").config({ quiet: true });
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const dbConnect = require("./config/dbConnect");

const app = express();
const port = process.env.PORT || 3000;

dbConnect();

// 뷰 엔진
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 공통 미들웨어
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // 폼에서 ?_method=PUT / DELETE 사용

// TODO(14주차 사용자 인증 이후): 로그인 상태 확인 미들웨어 추가
app.use("/", require("./routes/authRoutes"));
app.get("/", (req, res) => res.redirect("/login"));
app.use("/projects", require("./routes/projectRoutes"));
app.use("/snippets", require("./routes/snippetRoutes"));
app.use("/notes", require("./routes/noteRoutes"));
app.use("/links", require("./routes/linkRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));
app.use("/files", require("./routes/fileRoutes"));
app.use("/search", require("./routes/searchRoutes"));
app.use("/ai", require("./routes/aiRoutes"));

// 404
app.use((req, res) => {
  res.status(404).render("error", { title: "404", message: "페이지를 찾을 수 없습니다." });
});

// 에러 처리
app.use((err, req, res, next) => {
  if (err.name === "CastError") err.status = 404; // 잘못된 형식의 id
  if (!err.status || err.status >= 500) console.error(err);
  res.status(err.status || 500).render("error", { title: "오류", message: err.message });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
