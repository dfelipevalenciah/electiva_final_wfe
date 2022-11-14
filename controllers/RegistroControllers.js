const Sequelize = require('sequelize');
const registro = require('../models').registro;

module.exports={

    List(_,res){
              return registro.findAll({})
              .then(registro => res.status(200).send(registro))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return registro.findAll({
                            where: {
                                 id_registro: req.params.id
                            }
              })
              .then(registro => res.status(200).send(registro))
              .catch(error => res.status(400).send(error))
},

}