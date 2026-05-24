const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/user');
const router = express.Router();

// Endpoint protegido para obtener el perfil del usuario autenticado
router.get('/me', auth, async (req, res) => {
    try {
        // Buscamos al usuario por el ID inyectado en req.user, excluyendo el campo password (-password)
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;