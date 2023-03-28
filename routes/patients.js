const patientsRouter = require('express').Router();
const {validateCreate} = require('../validators/patients');
const {validatePatient} = require('../middlewares/validation');
const {handlePatient} = require('../middlewares/handleErrors')
const patientController = require('../controllers/patients');
const services = require('../services/render')
const { isAuthenticated } = require('../middlewares/auth');
module.exports = patientsRouter;

//render
patientsRouter.get('/',isAuthenticated,services.homeRoute);

patientsRouter.get('/add-patient',isAuthenticated,services.add_patient);

patientsRouter.get('/update-patient',services.update_patient);

//API
patientsRouter.get('/api/:id',patientController.getPatients);

patientsRouter.post('/api',validateCreate,patientController.postPatient);
patientsRouter.put('/api/:id',validatePatient,handlePatient,patientController.updatePatient);
patientsRouter.delete('/api/:id',patientController.deletePatient);