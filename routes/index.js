var express = require('express');
var router = express.Router();

const EstadoSolicitudControllers = require('../controllers/EstadoSolicitudControllers');
const PersonaControllers= require('../controllers/PersonaControllers');
const ProfesionControllers = require('../controllers/ProfesionControllers');
const RegistroControllers = require('../controllers/RegistroControllers');
const ServicioControllers = require('../controllers/ServicioControllers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/profesion', ProfesionControllers.List);
router.get('/api/persona', PersonaControllers.List);
router.get('/api/estado_solicitud', EstadoSolicitudControllers.List);
router.get('/api/registros', RegistroControllers.List);
router.get('/api/servicio', ServicioControllers.List);

module.exports = router;



