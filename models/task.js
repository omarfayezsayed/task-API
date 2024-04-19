const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  name: { type: String, require: true },
  Done: { type: Boolean, default: false, required: false },
});

const taskSchema = mongoose.model("Task", schema);
module.exports = { taskSchema };
