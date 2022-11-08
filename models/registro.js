'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registro.init({
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    nombre_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'registro',
  });
  return registro;
};