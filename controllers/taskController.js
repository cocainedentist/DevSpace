const asyncHandler = require("express-async-handler");
const Task = require("../models/Task");

// 담당: 최서진
// 아래 함수들은 뼈대만 있는 상태입니다. projectController.js 를 참고해서 채워주세요.

// @route GET /tasks?projectId=
const getAllTasks = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "작업 관리", route: "GET /tasks?projectId=" });
});

// @route POST /tasks
const createTask = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "작업 관리", route: "POST /tasks" });
});

// @route GET /tasks/:taskId
const getTask = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "작업 관리", route: "GET /tasks/:taskId" });
});

// @route PUT /tasks/:taskId
const updateTask = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "작업 관리", route: "PUT /tasks/:taskId" });
});

// @route DELETE /tasks/:taskId
const deleteTask = asyncHandler(async (req, res) => {
  // TODO
  res.status(501).render("todo", { title: "작업 관리", route: "DELETE /tasks/:taskId" });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
