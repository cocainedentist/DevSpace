const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, default: "" },
    category: { type: String, default: "" }, // AI 자동분류 결과
    summary: { type: String, default: "" }, // AI 요약 결과
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" }, // 화면설계: 중요도 배지
    hashtags: [String], // 화면설계: 해시태그
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
