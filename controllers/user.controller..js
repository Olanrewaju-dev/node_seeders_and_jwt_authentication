const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserModel = db.user;

// POST - CREATE a user
const createUser = async (req, res) => {
  try {
    const newUserInput = req.body;

    const existingUser = await UserModel.findOne({
      // checking if user already exist
      email: newUserInput.email,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already created",
      });
    }

    // hashing user password input before interacting with db
    // const hashedPassword = await bcrypt.hash(newUserInput.password, 10);

    const newUserObject = await UserModel.create({
      // creating user into sequelize database
      id: newUserInput.id,
      firstname: newUserInput.firstname,
      lastname: newUserInput.lastname,
      email: newUserInput.email,
      // password: hashedPassword,
      password: newUserInput.password,
      user_type: newUserInput.user_type,
    });

    const token = await jwt.sign(
      { id: newUserObject.id, email: newUserObject.email },
      process.env.JWT_SECRET // signing JWTs
    );

    return res.status(201).json({
      message: "User created successfully", // success message
      newUserObject,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error", // returning error if create user operation failed.
    });
  }
};

// POST - LOGIN a user
const loginUser = async (req, res) => {
  try {
    const userLoginDetail = req.header;

    const user = await UserModel.findOne({ email: userLoginDetail.email }); // checking db for user provided email address

    if (!user) {
      res.status(404).json({
        message: "User not found.", // handling error if email not found.
      });
    }

    const userPassword = await user.validPassword(userLoginDetail.password); // unhashing password and comparing with one in the db

    // const userPassword = await bcrypt.compare(
    //   userLoginDetail.password,
    //   user.password
    // ); // unhashing password in the db
    if (!userPassword) {
      res.status(404).json({
        message: "Email or passwor not correct!",
      });
    }

    const token = await jwt.sign(
      { email: user.email, id: user.id }, // signing jwt token for user login
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log(token);
    return res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      data: null,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};
