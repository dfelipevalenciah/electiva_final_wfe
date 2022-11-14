const Sequelize = require('sequelize');
const servicio = require('../models').servicio;

module.exports={

    List(_,res){
              return servicio.findAll({})
              .then(servicio => res.status(200).send(servicio))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return servicio.findAll({
                            where: {
                                 id_servicio: req.params.id
                            }
              })
              .then(servicio => res.status(200).send(servicio))
              .catch(error => res.status(400).send(error))
},

}