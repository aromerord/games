const { Router } = require('express');
const { check } = require('express-validator');
const { findAllGames, findGame, createGame, updateGame, deleteGame } = require('../controllers/games');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', [validateFields], findAllGames);

router.get('/:id', [validateFields], findGame);

router.post('/', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('platform', 'La plataforma es obligatoria').not().isEmpty(),
    check('category', 'La categoría es obligatoria').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    validateFields], createGame);

router.put('/:id', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('platform', 'La plataforma es obligatoria').not().isEmpty(),
    check('category', 'La categoría es obligatoria').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    validateFields], updateGame);

router.delete('/:id', [validateFields], deleteGame);


module.exports = router;