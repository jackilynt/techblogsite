const sequelizeConn = require('../config/connection');
// //const seedRecipe = require('./recipeData')
const { Recipe, User } = require("../models")
const recipeData = require("./recipeData.json");


const seedAll = async () => {
  await sequelizeConn.sync({ force: true }); // reset tables
  console.log("Running seed")

  console.log(recipeData);

  Recipe.bulkCreate(recipeData);

}

seedAll();