const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, default: "" },
    summary: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);
