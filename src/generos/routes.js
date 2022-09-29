const { Router } = require('express');
const router = Router();

const GeneroController = require('./controller');
const controller = new GeneroController();

router.post('/create', (req, res) => controller.create(req, res));
router.get('/list', (req, res) => controller.list(req, res));
router.put('/:id', (req, res) => controller.update(req, res));


module.exports = router;
