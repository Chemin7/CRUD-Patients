const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()




const patientController = {
    getPatient: async (req,res,next)=>{

        const formData = req.session.formData || {};
        const patients = await prisma.patient.findMany();

        res.render('patient-form', 
        { formData,
        patients, 
        method:req.method});
    },

    getByFirstName: async (req,res,next)=>{
        let first_name = req.params.fn;
    
        const patient = await prisma.patient.findFirst({
            where:{
                first_name
            }
        })
    
        res.send(patient);
    },

    postPatient: async (req,res,next)=>{
        let {first_name,last_name,phone,birthday} = req.body;
      
    
        birthdayDate = new Date(birthday) ;
    
        const patient = await prisma.patient.create({
            data:{
                first_name,
                last_name,
                phone,
                birthday:birthdayDate
            }
        });
    
        res.redirect('/patients');
    },

    getCreateForm: async(req,res,next)=>{
        
    }


}


module.exports  = patientController;