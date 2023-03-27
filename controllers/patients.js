const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const moment = require('moment')



const patientController = {
    getPatients: async (req,res,next)=>{
        //console.log("id: ", req.user.id)
        
            if(req.query.id){
                
                const patient =  await prisma.patient.findUnique({
                    where: {
                      id: req.query.id,
                    },
                  });
                 
                res.send(patient )
            }else{
            const patients = await prisma.patient.findMany({
                where: {
                  doctorId: req.params.id,
                },
              });
              
            res.send(patients)
            }

    },

    postPatient: async (req,res,next)=>{
        
        let {first_name,last_name,phone,birthday} = req.body;
      
    
        birthdayDate = new Date(Date.parse(birthday)) ;
        
        const patient = await prisma.patient.create({
            data:{
                first_name,
                last_name,
                phone,
                birthday:birthdayDate,
                doctor: {
                    connect: {
                        id: req.user.id,
                    },
                },
            }
        });
    
        res.redirect('/patients/');
    },

    updatePatient:async(req,res,next)=>{
        let id = req.params.id;
        let  {first_name,last_name,phone,birthday} = req.body;
        console.log(first_name,last_name,phone,birthday)

        birthdayDate = new Date(Date.parse(birthday)) ;
        let updatedUser = await prisma.patient.update({
            where: {
              id
            },
            data:{
                first_name,last_name,phone,
                birthday:birthdayDate
            }
        })
        res.status(204).send();
    },

    deletePatient: async(req,res,next)=>{
        let id = req.params.id;

        await prisma.patient.delete({
            where:{id}
        })

        res.status(200).redirect('/patients/');
    }


}


module.exports  = patientController;