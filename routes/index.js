var express = require('express');
var router = express.Router();

const EstadoSolicitudControllers = require('../controllers/EstadoSolicitudControllers');
const PersonaControllers = require('../controllers/PersonaControllers');
const ProfesionControllers = require('../controllers/ProfecionControllers');
const RegistroControllers = require('../controllers/RegistroControllers');
const ServicioControllers = require('../controllers/ServicioControllers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/estado_solicitud/', EstadoSolicitudControllers.ListarEstadosPendientes);
router.get('/api/estado_solicitud/pendiente/:pendiente',EstadoSolicitudControllers.ListAt);

router.get('api/persona/', PersonaControllers);
router.get('api')

module.exports = router;
