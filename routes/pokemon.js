const express = require('express');

const pokemonController = require('../controllers/pokemon');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Hello Node 18'});
});
router.get('/pokemon', pokemonController.getPokemon);
router.get('/pokemon-moves', pokemonController.getPokemonMoves);

module.exports = router;