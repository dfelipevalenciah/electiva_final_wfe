const Sequelize = require('sequelize');
const estado_solicitud = require('../models').Estado_solicitud;

module.exports = {

  List(_, res) {
    return estado_solicitud.findAll({})
      .then(estado_solicitud => res.status(200).send(estado_solicitud))
      .catch(error => res.status(400).send(error))
  },
  ListAt(req, res) {
    return estado_solicitud
    .findAll({
      where: {
        id: req.params.id
      }
    })
      .then(estado_solicitud => res.status(200).send(estado_solicitud))
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
          id: req.body.id,
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
    return estado_solicitud
      .create({
        pendiente: req.params.pendiente,
        aprobado: req.params.aprobado,
        rechazado: req.params.rechazado,
        id: req.params.id,
      })
      .then((estado_solicitud) => res.status(200).send(estado_solicitud))
      .catch((error) => res.status(400).send(error));
  },


}