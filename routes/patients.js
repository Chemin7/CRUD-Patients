const patientsRouter = require('express').Router();
const {validateCreate} = require('../validators/patients');
const patientController = require('../controllers/patients');
const services = require('../services/render')
const { isAuthenticated } = require('../middlewares/auth');
module.exports = patientsRouter;

//render
patientsRouter.get('/',isAuthenticated,services.homeRoute);

patientsRouter.get('/add-patient',isAuthenticated,services.add_patient);

patientsRouter.get('/update-patient',isAuthenticated,services.update_patient);

//API
patientsRouter.get('/api',patientController.getPatients);
patientsRouter.post('/api',validateCreate,patientController.postPatient);
patientsRouter.put('/api/:id',patientController.updatePatient);
patientsRouter.delete('/api/:id',patientController.deletePatient);