const express = require('express');

const db = require('../data/db-helpers');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.getRecipes()
		.then((recipe) => {
			res.status(200).json(recipe);
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

module.exports = router;
