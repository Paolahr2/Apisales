require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CNN = process.env.MONGO_CNN;


app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(MONGO_CNN, {

})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/sales', require('./routes/sales'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
