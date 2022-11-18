const Sequelize = require('sequelize');
const servicio = require('../models').servicio;
const estado_solicitud = require('../models').estado_solicitud;


module.exports = {

  List(_, res) {
    return servicio.findAll({})
      .then(servicio => res.status(200).send(servicio))
      .catch(error => res.status(400).send(error))
  },
  ListAt(req, res) {
    return servicio.findAll({
      where: {
        id_servicio: req.params.id_servicio
      }
    })
      .then(servicio => res.status(200).send(servicio))
      .catch(error => res.status(400).send(error))
  },

  DeleteServicio(req, res) {
    return servicio
      .destroy({
        where: {
          id_servicio: req.params.id_servicio,
        },
      })
      .then((servicio) => res.sendStatus(servicio))
      .catch((error) => res.status(400).send(error));
  },

  UpdateServicio(req, res) {
    return servicio
      .update(
        {
          nombre_servicio: req.body.nombre_servicio,
          servicio_descripcion: req.body.servicio_descripcion,
          servicio_ciudad: req.body.servicio_ciudad,
          servicio_fecha: req.body.servicio_fecha,
          servicio_valor: req.body.servicio_valor,
          servicio_imagen: req.body.servicio_imagen,
          servicio_direccion: req.body.servicio_direccion,
          id_estado_solicitud: req.body.id_estado_solicitud,

        },
        {
          where: {
            id_servicio: req.params.id_servicio,
          },
        }
      )
      .then((result) => {
        res.json(result);
      });
  },
  CreateServicio(req, res) {
    return servicio
      .create({
        nombre_servicio: req.params.nombre_servicio,
        servicio_descripcion: req.params.servicio_descripcion,
        servicio_ciudad: req.params.servicio_ciudad,
        servicio_fecha: req.params.servicio_fecha,
        servicio_valor: req.params.servicio_valor,
        servicio_imagen: req.params.servicio_imagen,
        servicio_direccion: req.params.servicio_direccion,
        id_estado_solicitud: req.params.id_estado_solicitud,
      })
      .then((servicio) => res.status(200).send(servicio))
      .catch((error) => res.status(400).send(error));
  },
  ListarServicioEstado_solicitud(req, res) {
    return estado_solicitud
      .findAll({
        include: [
          { model: servicio, require: true },
        ],
      })
      .then((estado_solicitud) => res.status(200).send(estado_solicitud))
      .catch((error) => res.status(400).send(error));
  },
  ListarServicio_Persona(req, res) {
    return persona
      .findAll({
        where:{
          servicio_id_servicio: req.params.servicio_id_servicio
        }
      })
      .then((persona) => res.status(200).send(persona))
      .catch((error) => res.status(400).send(error));
  },

}