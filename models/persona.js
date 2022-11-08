'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  persona.init({
    numero_identificacion: DataTypes.STRING,
    nombres_persona: DataTypes.STRING,
    telefono_persona: DataTypes.STRING,
    apellidos_persona: DataTypes.STRING,
    email_persona: DataTypes.STRING,
    edad_persona: DataTypes.STRING,
    lugar_residencia_persona: DataTypes.STRING,
    profesion: DataTypes.STRING,
    servicio: DataTypes.STRING,
    registro: DataTypes.STRING,
    token_google: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'persona',
  });
  return persona;
};