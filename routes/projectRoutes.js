const express = require("express");
const router = express.Router();
const {
  getAllProjects, addProjectForm, createProject, getProject,
  editProjectForm, updateProject, deleteProject,
} = require("../controllers/projectController");

router.route("/").get(getAllProjects).post(createProject);
router.get("/new", addProjectForm); // "/:projectId" 보다 먼저 와야 함
router.route("/:projectId").get(getProject).put(updateProject).delete(deleteProject);
router.get("/:projectId/edit", editProjectForm);

module.exports = router;
