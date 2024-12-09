const Sale = require('../models/sale');

// Obtener todas las ventas
exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.json(sales);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener una venta por ID
exports.getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id);
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json(sale);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 

// Crear una nueva venta
exports.createSale = async (req, res) => {
    const sale = new Sale({
        fecha: req.body.fecha,
        idCliente: req.body.idCliente,
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    try {
        const newSale = await sale.save();
        res.status(201).json(newSale);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar una venta existente
exports.updateSale = async (req, res) => {
    try {
        const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json(sale);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una venta
exports.deleteSale = async (req, res) => {
    try {
        const sale = await Sale.findByIdAndDelete(req.params.id);
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json({ message: 'Venta eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
