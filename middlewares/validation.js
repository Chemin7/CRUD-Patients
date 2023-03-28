const { check } = require("express-validator");

exports.validateUser = [
  check("email", "Invalid email").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
];


exports.validatePatient = [
  check('first_name')
        .not()
        .isEmpty()
        .withMessage('El primer nombre no debe estar vacio'),
    check('last_name')
        .not()
        .isEmpty()
        .withMessage('El segundo nombre no debe estar vacio'),
    check('phone')
        .not()
        .isEmpty()
        .withMessage('El celular no debe estar vacio')
        ,
    check('birthday')
        .not()
        .isEmpty()
        .withMessage('El campo fecha de nacimiento no debe estar vacio')
        .isDate()
        .withMessage('El campo fecha debe ser una fecha')
]