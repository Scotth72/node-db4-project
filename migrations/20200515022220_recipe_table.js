exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments('id').notNullable();
			tbl.string('recipe', 128).notNullable().index();
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments('id').notNullable();
			tbl.string('ingredients', 128).notNullable().index();
		})
		.createTable('recipe_ingredients', (tbl) => {
			tbl.increments('id').notNullable();
			tbl
				.integer('recipe_id')
				.notNullable()
				.references(id)
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('ingredients_id')
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.float('ingredients_quanity', 3).notNullable();
		});
};

exports.down = function(knex) {
	knex.schema.dropTable('recipe_ingredients').dropTable('ingredients').dropTable('recipes');
};
