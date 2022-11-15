const Sequelize = require('sequelize');
<<<<<<< HEAD
const estado_solicitud = require('../models').estado_solicitud;

module.exports={

    List(_,res){
=======
const estado_solicitud = require('../models').Estado_solicitud;

module.exports={

    ListarEstadosPendientes(_,res){
>>>>>>> 72709fb7ae1bb231452b5f1b96ce72da4eab3c36
              return estado_solicitud.findAll({})
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return estado_solicitud.findAll({
                            where: {
<<<<<<< HEAD
                                 id_estado_solicutud: req.params.id
=======
                               pendiente: req.params.pendiente
>>>>>>> 72709fb7ae1bb231452b5f1b96ce72da4eab3c36
                            }
              })
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},

}