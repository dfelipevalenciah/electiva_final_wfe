const Sequelize = require('sequelize');
const estado_solicitud = require('../models').estado_solicitud;

module.exports={

    List(_,res){
              return estado_solicitud.findAll({})
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return estado_solicitud.findAll({
                            where: {
                                 id_estado_solicutud: req.params.id
                            }
              })
              .then(estado_solicitud => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},

}