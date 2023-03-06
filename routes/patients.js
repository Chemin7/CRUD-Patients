const patientsRouter = require('express').Router();
const {validateCreate} = require('../validators/patients');
const patientController = require('../controllers/patients');

module.exports = patientsRouter;

patientsRouter.get('/',patientController.getPatient)

patientsRouter.get('/:fn',patientController.getByFirstName);

patientsRouter.post('/',validateCreate,patientController.postPatient);