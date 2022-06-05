const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require('validator');

const validateEmail =(email)=> validator.isEmail(email)
const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a user name "],
    default: "guest",
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    validate: [validateEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});
usersSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

usersSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err);
      if (!isMatch) return reject(false);
      resolve(true);
    });
  });
};

const User = mongoose.model("users", usersSchema);

module.exports = User;
