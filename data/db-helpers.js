const db = require('./db-config');

module.exports = {
	getRecipes,
	getInstructions,
	getShoppingList
};

function getRecipes() {
	return db('recipes');
}

function getShoppingList() {
	return db('recipes')
		.select('recipes.recipe', 'ingredients.ingredient', 'recipes_ingredient.ingredient_quantity')
		.join('recipe_ingredients', 'recipe.id', 'recipe_ingredients.recipe_id')
		.join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredients_id')
		.where('recipe.id', id);
}

function getInstructions(id) {
	return db('recipe')
		.select('steps.step', 'ingredients.ingredient', 'recipe_ingredients.ingredient_quantity', 'recipes.recipe')
		.join('steps', 'recipes.id', 'steps.recipe_id')
		.join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
		.join('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id')
		.where('recipe.id', id);
}
