const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
// app.get("/", (req, res) => {
//   return res.send("Hello world");
// });
// app.listen(port, () => {
//   console.log("Server is running in port: ", +port);
// });
console.log("Process dotenv:", process.env.MONGO_DB);
mongoose
  .connect(
    `mongodb+srv://mtoansecond:${process.env.MONGO_DB}@cluster0.rkmqjfh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connect Db success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running at: ", port);
});
