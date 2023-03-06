const { check } = require('express-validator')
const {validateResult} = require('../helpers/validateHelperPatients')

const validateCreate = [
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
        .withMessage('El campo fecha debe ser una fecha'),
    (req,res,next )=>{
        validateResult(req,res,next);


    }
]

module.exports = {validateCreate}