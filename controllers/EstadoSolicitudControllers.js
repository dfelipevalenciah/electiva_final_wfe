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
                                 id_estado_solicitud: req.params.id
                            }
              })
              .then(persona => res.status(200).send(estado_solicitud))
              .catch(error => res.status(400).send(error))
},

DeleteEstado_Solicitud(req, res) {
   return estado_solicitud
     .destroy({
       where: {
         id: req.params.id,
       },
     })
     .then((estado_solicitud) => res.sendStatus(estado_solicitud))
     .catch((error) => res.status(400).send(error));
 },

 UpdateEstado_Solicitud(req, res) {
   return estado_solicitud
     .update(
       {
         pendiente: req.body.pendiente,
         aprobado: req.body.aprobado,
         rechazado: req.body.rechazado,
         id_servicio: req.body.id_servicio,
       },
       {
         where: {
           id: req.params.id,
         },
       }
     )
     .then((result) => {
       res.json(result);
     });
 },
 CreateEstado_Solicitud(req, res) {
   return estadisticas
     .create({
      pendiente: req.params.pendiente,
      aprobado: req.params.aprobado,
      rechazado: req.params.rechazado,
      id_servicio: req.params.id_servicio,
     })
     .then((estado_solicitud) => res.status(200).send(estado_solicitud))
     .catch((error) => res.status(400).send(error));
 },


}