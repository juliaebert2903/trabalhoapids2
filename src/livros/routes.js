const { Router } = require('express');
const router = Router();

const LivrosController = require('./controller');
const controller = new LivrosController();

router.post('/create', (req, res) => controller.create(req, res));
router.post('/create-livrogen', (req, res) => controller.createLivroGenero(req, res));
router.get('/random', (req, res) => controller.random(req, res));
router.get('/list', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.detail(req, res));

module.exports = router;
