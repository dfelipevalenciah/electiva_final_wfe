'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicio.init({
    nombre_servicio: DataTypes.STRING,
    servicio_descripcion: DataTypes.STRING,
    servicio_ciudad: DataTypes.STRING,
    servicio_fecha: DataTypes.DATE,
    servicio_valor: DataTypes.STRING,
    servicio_imagen: DataTypes.STRING,
    servicio_direccion: DataTypes.STRING,
    estado_solicitud: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};