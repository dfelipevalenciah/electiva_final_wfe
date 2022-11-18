const Sequelize = require('sequelize');
const registro = require('../models').registro;

module.exports = {

  List(_, res) {
    return registro.findAll({})
      .then(registro => res.status(200).send(registro))
      .catch(error => res.status(400).send(error))
  },
  ListAt(req, res) {
    return registro.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(registro => res.status(200).send(registro))
      .catch(error => res.status(400).send(error))
  },
  DeleteRegistro(req, res) {
    return registro
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((registro) => res.sendStatus(registro))
      .catch((error) => res.status(400).send(error));
  },
  UpdateRegistro(req, res) {
    return registro
      .update(
        {
          correo: req.body.correo,
          contrasenia: req.body.contrasenia,
          nombre_usuario: req.body.nombre_usuario,
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
  CreateRegistro(req, res) {
    return registro
      .create({
        correo: req.params.correo,
        contrasenia: req.params.contrasenia,
        nombre_usuario: req.params.nombre_usuario,
      })
      .then((registro) => res.status(200).send(registro))
      .catch((error) => res.status(400).send(error));
  },
  ListarPersonasRegistradas(req, res) {
    return registro
      .findAll({
        include: [
          { model: persona, require: true },
        ],
      })
      .then((registro) => res.status(200).send(registro))
      .catch((error) => res.status(400).send(error));
  },

}