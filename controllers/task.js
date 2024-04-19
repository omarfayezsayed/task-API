const { json } = require("express");
const { taskSchema } = require("../models/task");
const getTasks = async (req, res) => {
  try {
    const tasks = await taskSchema.find({});
    res.status(200).json({ success: true, nbHits: tasks.length, data: tasks });
  } catch (error) {
    res.status(500).json({ succes: false, msg: error });
  }
};

const getTask = async (req, res) => {
  console.log(req.params.id);
  try {
    const task = await taskSchema.find({ _id: req.params.id });
    if (!task) {
      return res
        .status(404)
        .json({ succes: true, msg: "there is no task with that id" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ succes: false, msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskSchema.create(req.body);
    return res.status(200).json({ succes: true, data: task });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskSchema.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name, Done: req.body.Done },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const task = await taskSchema.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: `no task with ud ${req.params.id}` });
    }
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(500).json({ succes: false });
  }
};

module.exports = {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
