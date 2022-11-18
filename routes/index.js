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


router.get('/api/estado_solicitud', EstadoSolicitudControllers.List);
router.get('/api/estado_solicitud/id_estado_solicitud/:id_estado_solicitud', EstadoSolicitudControllers.ListAt);
//router.get('/api/estado_solicitud/', EstadoSolicitudControllers.ListarEstadosPendientes);
router.get('/api/estado_solicitud/pendiente/:pendiente',EstadoSolicitudControllers.ListAt);

//router.get('api/persona/', PersonaControllers);
//router.get('api')

//Consultas servicio por estado de solicitud - Didier Montero
router.get('/api/servicio/estado_solicitud', ServicioControllers.ListarServicioEstado_solicitud);
router.get('api/servicio/',ServicioControllers.ListarServicioEstado_solicitud);
//Consultas Registro personas registradas - David 
router.get('api/registro/',RegistroControllers.ListarPersonasRegistradas);
//Consulta de Listar profesiones - Hector
//router.get('api/profesiones/',ProfesionControllersControllers.ListarP);
//Listar Servicios por persona - Felipe
router.get('api/servicio/',ServicioControllers.ListarServicio_Persona);
//



module.exports = router;



