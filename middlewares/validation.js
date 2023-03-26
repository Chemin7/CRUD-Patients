const { check } = require("express-validator");

exports.validateUserRegistration = [
  check("email", "Invalid email").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
];