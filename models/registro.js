'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registro.init({
    
    id_registro:{
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
    modelName: 'registro',
  });
  return registro;
};