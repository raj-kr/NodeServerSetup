//imports
const express = require("express");
const userModel = require('../models/user');
const { clientPath, PORT } = require('../config/keys');

const userRouter = () => {
  //router variable for api routing
  const router = express.Router();

  router.post("/", async (req, res) => {
    res.send({
      code: 200,
      msg: "Data saved successfully"
    });
  });
  
  return router;
};

module.exports = userRouter;