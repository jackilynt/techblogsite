const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}


Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  } 
);

module.exports = Recipe;
