const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserModel = require("../models/user.model");

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

    // const hashedPassword = await generateHash(newUserInput.password); // hashing password

    const newUserObject = await UserModel.create({
      // creating user into mongodb database
      _id: newUserInput._id,
      firstname: newUserInput.firstname,
      lastname: newUserInput.lastname,
      email: newUserInput.email,
      password: newUserInput.password,
      user_type: newUserInput.user_type,
      gender: newUserInput.gender,
    });

    const token = await jwt.sign(
      { _id: newUserObject._id, email: newUserObject.email },
      process.env.JWT_SECRET // signing JWTs
    );

    return res.status(201).json({
      message: "User created successfully", // success message
      newUserObject,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message, // returning error if create user operation failed.
      success: false,
    });
  }
};

// POST - LOGIN a user
const loginUser = async (req, res) => {
  try {
    const userLoginDetail = req.body;

    const user = await UserModel.findOne({ email: userLoginDetail.email }); // checking db for user provided email address
    console.log(user);
    if (!user) {
      res.status(404).json({
        message: "User not found.", // handling error if email not found.
      });
    }

    const userPassword = user.isValidPassword(userLoginDetail.password); // unhashing password and comparing with one in the db

    if (!userPassword) {
      res.status(422).json({
        message: "Email or password not correct!",
      });
    }

    const token = await jwt.sign(
      { email: user.email, id: user.id }, // signing jwt token for user login
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  loginUser,
};
