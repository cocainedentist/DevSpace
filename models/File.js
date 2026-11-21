const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fileName: { type: String, required: true }, // 원본 파일명
    filePath: { type: String, required: true }, // uploads/ 안의 저장 경로
    size: Number,
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
