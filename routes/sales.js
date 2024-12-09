const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
const salesController = require('../controllers/salesController');

// Rutas para operaciones
router.get('/', salesController.getSales);
router.get('/:id', salesController.getSaleById);
router.post('/', salesController.createSale);
router.put('/:id', salesController.updateSale);
router.delete('/:id', salesController.deleteSale);

module.exports = router;
