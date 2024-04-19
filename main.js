const express = require("express");
const app = express();

const { tasksRouter } = require("./routes/task.js");
const { connectDB } = require("./DB/connect");
require("dotenv").config();
const { notFound, notFound2 } = require("./middlewares/notFound.js");
//middleware
app.use(express.json());
const port = process.env.Port || 3000;
app.use("/api/v0/task", tasksRouter);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
