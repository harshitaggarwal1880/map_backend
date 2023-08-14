const cookie = require("cookie");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

const IP = require("ip");

require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(cors());
// app.use(
//   "*",
//   cors({
//     origin: process.env.FRONT_URL,
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const ipAddress = IP.address();
  res.send(ipAddress);
});

// mongoose connect

// mongoose
//   .connect(process.env.MONGO_LINK)
//   .then(() => {
//     console.log("Database connect successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log(`Serving running at http://localhost:${port}`);
});
