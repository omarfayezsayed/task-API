const express = require("express");
const tasksRouter = express.Router();
const controller = require("../controllers/task");
tasksRouter.get("/", controller.getTasks);

tasksRouter.get("/:id", controller.getTask);

tasksRouter.post("/", controller.createTask);

tasksRouter.patch("/:id", controller.updateTask);

tasksRouter.delete("/:id", controller.deleteTask);

module.exports = { tasksRouter };
