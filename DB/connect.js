const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async (url) => {
  console.log(url);
  return mongoose.connect(url);
};

module.exports = { connectDB };
