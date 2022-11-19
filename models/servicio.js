'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicio extends Model {

    static associate(models) {
      Servicio.hasMany(models.Persona,{foreingKey:"servicio_id"});
      Servicio.belongsTo(models.Estado_solicitud,{foreingKey:"estado_solicitud_id"});
    }
  }
  Servicio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_servicio: {
      type:DataTypes.STRING(200),
      defaultValue: false,
      allowNull: false,
    },
    servicio_descripcion: {
      type:DataTypes.STRING(200),
      defaultValue: false,
      allowNull: false,
    },
    servicio_ciudad: {
      type:DataTypes.STRING(200),
      defaultValue: false,
      allowNull: false,
    },
    servicio_fecha: {
      type:DataTypes.DATE,
      defaultValue: false,
      allowNull: false,
    },
    servicio_valor: {
      type:DataTypes.STRING(50),
      defaultValue: false,
      allowNull: false,
    },
    servicio_imagen: {
      type:DataTypes.STRING(50),
      defaultValue: false,
      allowNull: false,
    },
    servicio_direccion: {
      type:DataTypes.STRING(50),
      defaultValue: false,
      allowNull: false,
    },
    estado_solicitud_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: "estado_solicitud", key:"id"}
    },
  }, 
  {
    sequelize,
    modelName: 'Servicio',
    tableName: "servicio",
  });
  return Servicio;
};
