const express = require('express');
const router = express.Router();
const { list, detail, genreMovies } = require('../../controllers/api/genresAPIController');

//Rutas
router
    .get('/', list)
    .get('/:id', detail)
    .get('/:id/movies', genreMovies);

module.exports = router;