const express = require("express");
const controller = require("../controllers/user.controller");
const middleware = require("../middlewares/validation");

const userRouter = express.Router();

userRouter.post(
  "/signup",
  middleware.validateUserCreation,
  controller.createUser
);
userRouter.post("/login", middleware.LoginValidation, controller.loginUser);

module.exports = userRouter;
