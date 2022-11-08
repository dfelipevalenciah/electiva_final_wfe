'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado_solicitud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estado_solicitud.init({
    pendiente: DataTypes.TINYINT,
    aprobado: DataTypes.TINYINT,
    rechazado: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'estado_solicitud',
  });
  return estado_solicitud;
};