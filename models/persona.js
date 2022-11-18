'use strict';
const {Model} = require('sequelize');
const profesion = require("./profesion");
const servicio = require("./servicio");
const registro = require("./registro");
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      persona.hasMany(models.profesion,{foreignKey: "id_profesion"});
      persona.hasMany(models.servicio,{foreignKey: "id_id_servicio"});
      persona.hasMany(models.registro,{foreignKey: "id"});
    }
  }
  persona.init({
    
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
    token_google: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'persona',
    tableName: "persona",
  });
  return persona;
};