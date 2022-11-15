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
    estado_solicitud.hasMany(models.servicio, { foreingKey: "id_servicio"})

    }
  }
  estado_solicitud.init({
    id_estado_solicitud: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pendiente: {
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
    aprobado: {
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
    rechazado: {
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'estado_solicitud',
  });
  return estado_solicitud;
};