'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estado_solicitud extends Model {

    static associate(models) {
     Estado_solicitud.hasMany(models.Servicio, { foreingKey: "estado_solicitud_id"})
    }
  }
  Estado_solicitud.init({
    id: {
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
    modelName: 'Estado_solicitud',
    tableName: 'estado_solicitud',
  });
  return Estado_solicitud;
};