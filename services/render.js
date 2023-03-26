const axios = require('axios')
const moment = require('moment')

exports.homeRoute =async (req,res)=>{
    axios.get("http://localhost:3000/patients/api")
        .then((response) =>{
            res.render('index-patient',
            {patients:response.data,
            moment,
            user: req.user})
        })
}

exports.add_patient = (req,res)=>{

    res.render('add-patient',
            {formData:''})
}

exports.update_patient = (req,res)=>{
    axios.get(`http://localhost:3000/patients/api?id=${req.query.id}`)
        .then( (patientdata)=>{
            res.render('update-patient',{patient:patientdata.data,moment})
            
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.login = (req, res) => {
    res.render("login", { message: req.flash("error") });
  };

exports.register =  (req, res) => {
    res.render("register",{email:''});
  };

exports.logout = (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  };