const Sequelize = require('sequelize');
const profesion = require('../models').profesion;

module.exports={

    List(_,res){
              return profesion.findAll({})
              .then(profesion => res.status(200).send(profesion))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return profesion.findAll({
                            where: {
                                 id_profesion: req.params.id
                            }
              })
              .then(profesion => res.status(200).send(profesion))
              .catch(error => res.status(400).send(error))
},

}