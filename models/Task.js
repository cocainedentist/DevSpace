const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["todo", "in-progress", "review", "done"], // 대시보드 보드 컬럼과 동일
      default: "todo",
    },
    dueDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
