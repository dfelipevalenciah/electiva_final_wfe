'use strict';
const {Model} = require('sequelize');
const Profesion = require("./profesion");
const Servicio = require("./servicio");
const Registro = require("./registro");
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      persona.hasMany(models.Profesion,{foreignKey: "id_profesion"});
      persona.hasMany(models.Servicio,{foreignKey: "id_id_servicio"});
      persona.hasMany(models.Registro,{foreignKey: "id_registro"});
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