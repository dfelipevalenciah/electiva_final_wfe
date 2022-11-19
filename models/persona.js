'use strict';
const {Model} = require('sequelize');
//*
//const Profesion = require("./profesion");
//const Servicio = require("./servicio");
//const Registro = require("./registros");

module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {

    static associate(models) {

      Persona.belongsTo(models.Profesion,{foreignKey: "profesion_id"});
      Persona.belongsTo(models.Servicio,{foreignKey: "servicio_id"});
      Persona.belongsTo(models.Registros,{foreignKey: "registros_id"});
    }
  }
  Persona.init({
    
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    telefono_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    apellidos_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    email_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    edad_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    lugar_residencia_persona: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    profesion_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: "profesion", key:"id"}
    },
    servicio_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: "servicio", key:"id"}
    },
    registros_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: "registros", key:"id"}
    },
    token_google: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'Persona',
    tableName: "persona",
  });
  return Persona;
};