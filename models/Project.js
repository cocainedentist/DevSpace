const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // 만든 사람 (로그인 구현 후 저장)
    name: { type: String, required: true },
    description: { type: String, default: "" },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
