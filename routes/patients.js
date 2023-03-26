const patientsRouter = require('express').Router();
const {validateCreate} = require('../validators/patients');
const patientController = require('../controllers/patients');
const services = require('../services/render')
module.exports = patientsRouter;

//render
patientsRouter.get('/',services.homeRoute);

patientsRouter.get('/add-patient',services.add_patient);

patientsRouter.get('/update-patient',services.update_patient);

//API
patientsRouter.get('/api',patientController.getPatients);
patientsRouter.post('/api',validateCreate,patientController.postPatient);
patientsRouter.put('/api/:id',patientController.updatePatient);
patientsRouter.delete('/api/:id',patientController.deletePatient);