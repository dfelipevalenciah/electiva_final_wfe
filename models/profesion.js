'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profesion.init({
    profesion_nombre: DataTypes.STRING,
    profesion_descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profesion',
  });
  return profesion;
};