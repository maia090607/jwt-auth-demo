require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar a la Base de Datos
connectDB();

// Middleware para procesar formato JSON
app.use(express.json());

// Declaración de Rutas de la API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('¡JWT Auth API corriendo con éxito!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));