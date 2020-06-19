exports.up = function(knex) {
	return knex.schema.createTable('steps', (tbl) => {
		tbl.increments('id').notNullable();
		tbl.string('step', 258).notNullable().index();
		tbl
			.integer('recipe_id')
			.notNullable()
			.references('id')
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
	});
};

exports.down = function(knex) {
	return knex.dropTable('steps');
};
