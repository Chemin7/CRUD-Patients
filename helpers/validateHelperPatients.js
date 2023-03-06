const {validationResult} = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const validateResult =  async (req,res,next)=>{
    
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        req.session.formData = req.body;
        
        res.status(403);
        res.render('patient-form',{
            errors:err.array(),
            formData:req.session.formData,
            patients:await prisma.patient.findMany()
        })

        
    }
}

module.exports = {validateResult}

