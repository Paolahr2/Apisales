const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sale', saleSchema);
