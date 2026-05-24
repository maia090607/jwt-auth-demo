const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
    try {
        // Creamos una instancia de MongoDB temporal en memoria
        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();

        await mongoose.connect(mongoUri);
        console.log('¡Conectado exitosamente a MongoDB Virtual (En Memoria)!');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;