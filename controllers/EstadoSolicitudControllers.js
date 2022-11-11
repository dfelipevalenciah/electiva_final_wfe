const Sequelize = require('sequelize');
const estado_solicitud = require('../models').Estado_solicitud;

module.exports={

    ListarEstadosPendientes(_,res){
              return estado_solicitud.findAll({})
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return estado_solicitud.findAll({
                            where: {
                               pendiente: req.params.pendiente
                            }
              })
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},

}