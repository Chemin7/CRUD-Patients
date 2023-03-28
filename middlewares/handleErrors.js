const { validationResult } = require("express-validator");
const moment = require('moment')


exports.handlePatient = (req,res,next) =>{
    const errors = validationResult(req);
          if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.render("update-patient", {
              errors: errors.array(),
              patient: req.body,
              moment
            });
          }
          next();
}