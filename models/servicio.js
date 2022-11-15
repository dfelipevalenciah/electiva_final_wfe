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
    servicio.belongsTo(models.estado_solicitud, { foreingKey: "id_estado_solicitud"})
    }
  }
  servicio.init({
    id_servicio: {
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
    id_estado_solicitud: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: "estado_solicitud", key:"id_estado_solicitud"}
    },
  }, 
  {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};
