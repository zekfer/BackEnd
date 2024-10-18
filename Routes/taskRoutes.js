const express = require("express");
const { protect } = require("../Controllers/authController");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../Controllers/taskController");

const router = express.Router();

router.use(protect);

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
