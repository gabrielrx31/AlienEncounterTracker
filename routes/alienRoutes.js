const express = require('express');
const router = express.Router();

const alienController = require('../controllers/alienController');

//Routes
router.get('/', alienController.getAllAliens);
router.get('/:id', alienController.getAlienById);
router.post('/', alienController.createAlien);
router.put('/:id', alienController.updateAlien);
router.delete('/:id', alienController.deleteAlien);

module.exports = router;