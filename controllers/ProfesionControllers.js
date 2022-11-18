const Sequelize = require('sequelize');
const profesion = require('../models').profesion;

module.exports = {

  List(_, res) {
    return profesion.findAll({})
      .then(profesion => res.status(200).send(profesion))
      .catch(error => res.status(400).send(error))
  },
  ListAt(req, res) {
    return profesion.findAll({
      where: {
        id_profesion: req.params.id_profesion
      }
    })
      .then(profesion => res.status(200).send(profesion))
      .catch(error => res.status(400).send(error))
  },
  DeleteProfesion(req, res) {
    return profesion
      .destroy({
        where: {
          id_profesion: req.params.id_profesion,
        },
      })
      .then((profesion) => res.sendStatus(profesion))
      .catch((error) => res.status(400).send(error));
  },
  UpdateProfesion(req, res) {
    return profesion
      .update(
        {
          profesion_nombre: req.body.profesion_nombre,
          profesion_descripcion: req.body.profesion_descripcion,
        },
        {
          where: {
            id_profesion: req.params.id_profesion,
          },
        }
      )
      .then((result) => {
        res.json(result);
      });
  },
  CreateProfesion(req, res) {
    return estudios
      .create({
        profesion_nombre: req.params.profesion_nombre,
        profesion_descripcion: req.params.profesion_descripcion,
      })
      .then((profesion) => res.status(200).send(profesion))
      .catch((error) => res.status(400).send(error));
  },
  ListarProfesiones(req, res) {
    return profesion
      .findAll({
        where:{
          id_profesion: req.params.id_profesion
        }
      })
      .then((profesion) => res.status(200).send(profesion))
      .catch((error) => res.status(400).send(error));
  },

}