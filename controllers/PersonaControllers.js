const Sequelize = require('sequelize');
const persona = require('../models').persona;

module.exports={

    List(_,res){
              return persona.findAll({})
              .then(persona => res.status(200).send(persona))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return persona.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(persona => res.status(200).send(persona))
              .catch(error => res.status(400).send(error))
},

}