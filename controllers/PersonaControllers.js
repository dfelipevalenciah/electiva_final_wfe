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
                              id_persona: req.params.id_persona
                            }
              })
              .then(persona => res.status(200).send(persona))
              .catch(error => res.status(400).send(error))
},

DeletePersona(req, res) {
     return persona
       .destroy({
         where: {
          id_persona: req.params.id_persona,
         },
       })
       .then((persona) => res.sendStatus(persona))
       .catch((error) => res.status(400).send(error));
   },
 
   UpdatePersona(req, res) {
     return persona
       .update(
         {
           nombres_persona: req.body.nombres_persona,
           numero_identificacion: req.body.numero_identificacion,
           apellidos_persona: req.body.apellidos_persona,
           telefono_persona: req.body.telefono_persona,
           email_persona: req.body.email_persona,
           edad_persona: req.body.edad_persona,
           lugar_residencia_persona: req.body.lugar_residencia_persona,


         },
         {
           where: {
            id_persona: req.params.id_persona,
           },
         }
       )
       .then((result) => {
         res.json(result);
       });
   },
   CreatePersona(req, res) {
     return persona
       .create({
          nombres_persona: req.params.nombres_persona,
          numero_identificacion: req.params.numero_identificacion,
          apellidos_persona: req.params.apellidos_persona,
          telefono_persona: req.params.telefono_persona,
          email_persona: req.params.email_persona,
          edad_persona: req.params.edad_persona,
          lugar_residencia_persona: req.params.lugar_residencia_persona,
          token_google: req.params.token_google,

       })
       .then((persona) => res.status(200).send(persona))
       .catch((error) => res.status(400).send(error));
   },
 

}