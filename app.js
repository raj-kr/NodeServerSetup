require('dotenv').config()
//imports
import express from "express";
import http from "http";
import { PORT, clientPath } from "./config/keys";
import { mongoConnect } from "./config/mongo";

let app = express();
const server = http.createServer(app);

//routes
const userRouter = require("./routes/user")();

//dbConnect
mongoConnect();

//routes middlewares

app.use("/signup", userRouter);

// module.exports = app;

app.get("/", (req, res) => {
  res.send("hello");
});

//server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

