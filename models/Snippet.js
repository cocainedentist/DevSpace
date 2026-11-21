const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    code: { type: String, required: true },
    language: { type: String, default: "javascript" },
    category: { type: String, default: "" }, // AI 자동분류 결과
  },
  { timestamps: true }
);

module.exports = mongoose.model("Snippet", snippetSchema);
