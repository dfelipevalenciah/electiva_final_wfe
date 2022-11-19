'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesion extends Model {
    static associate(models) {
      Profesion.hasMany(models.Persona,{foreingKey:"id"});
    }
  }
  Profesion.init({

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profesion_nombre:{
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    profesion_descripcion:{
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    
  }, {
    sequelize,
    modelName: 'Profesion',
    tableName: 'profesion',
  });
  return Profesion;
};