'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registros extends Model {

    static associate(models) {
      Registros.hasMany(models.Persona,{foreingKey:"id"});
    }
  }
  Registros.init({
    
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo:{
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: false,
    },
    contrasenia:{
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: false,
    },
    nombre_usuario:{
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Registros',
    tableName: "registros",
  });
  return Registros;
};