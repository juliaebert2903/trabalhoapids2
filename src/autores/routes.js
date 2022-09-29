const { Router } = require('express');
const router = Router();

const AutorController = require('./controller');
const controller = new AutorController();

router.post('/create', (req, res) => controller.create(req, res));
router.get('/list', (req, res) => controller.list(req, res));
router.put('/:id', (req, res) => controller.update(req, res));

module.exports = router;
