const User = require('./User');
const Recipe = require('./Recipe');

Recipe.hasMany(User, {
  foreignKey: 'recipe_id',
});

User.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

module.exports = { User, Recipe };
