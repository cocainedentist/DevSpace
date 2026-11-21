const asyncHandler = require("express-async-handler");
const Project = require("../models/Project");

// TODO(14주차 사용자 인증 이후): 로그인한 사용자의 프로젝트만 보이도록
//   - 목록: Project.find({ members: 로그인한사용자id })
//   - 생성: userId, members 에 로그인한사용자id 저장

// @desc  프로젝트 목록 (대시보드)
// @route GET /projects
const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ updatedAt: -1 });
  res.render("projects/index", { title: "프로젝트", projects });
});

// @desc  프로젝트 생성 폼
// @route GET /projects/new
const addProjectForm = (req, res) => {
  res.render("projects/form", { title: "새 프로젝트", project: null });
};

// @desc  프로젝트 생성
// @route POST /projects
const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).render("projects/form", { title: "새 프로젝트", project: null });
  const project = await Project.create({ name, description });
  res.redirect(`/projects/${project._id}`);
});

// @desc  프로젝트 상세
// @route GET /projects/:projectId
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project) return res.status(404).render("error", { title: "404", message: "프로젝트를 찾을 수 없습니다." });
  // TODO: 이 프로젝트의 snippets / notes / tasks / links / files 를 함께 조회해서 넘기기
  res.render("projects/show", { title: project.name, project });
});

// @desc  프로젝트 수정 폼
// @route GET /projects/:projectId/edit
const editProjectForm = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project) return res.status(404).render("error", { title: "404", message: "프로젝트를 찾을 수 없습니다." });
  res.render("projects/form", { title: "프로젝트 수정", project });
});

// @desc  프로젝트 수정
// @route PUT /projects/:projectId
const updateProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const project = await Project.findById(req.params.projectId);
  if (!project) return res.status(404).render("error", { title: "404", message: "프로젝트를 찾을 수 없습니다." });
  project.name = name;
  project.description = description;
  await project.save();
  res.redirect(`/projects/${project._id}`);
});

// @desc  프로젝트 삭제
// @route DELETE /projects/:projectId
const deleteProject = asyncHandler(async (req, res) => {
  // TODO: 하위 데이터(snippets, notes, tasks, links, files)도 함께 삭제
  await Project.findByIdAndDelete(req.params.projectId);
  res.redirect("/projects");
});

module.exports = {
  getAllProjects,
  addProjectForm,
  createProject,
  getProject,
  editProjectForm,
  updateProject,
  deleteProject,
};
