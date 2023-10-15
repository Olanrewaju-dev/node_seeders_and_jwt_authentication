const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const shortId = require("short-uuid");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate(),
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile_number: { type: String },
  user_type: {
    type: String,
    enum: ["customer", "admin"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
});

// before save
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
