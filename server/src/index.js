const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");

const cors = require("cors");

dotenv.config();

// Nhận và gửi request từ thanh body, gửi data
const bodyParse = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   return res.send("Hello world");
// });
// app.listen(port, () => {
//   console.log("Server is running in port: ", +port);
// });
// console.log("Process dotenv:", process.env.MONGO_DB);
app.use(cors());
app.use(bodyParse.json());
routes(app);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("connect Db success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running at: ", port);
});
