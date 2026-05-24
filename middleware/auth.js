const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const [scheme, token] = authHeader.split(' ');

    // Validar el formato estándar 'Bearer <TOKEN>'
    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Cabecera de autorización faltante o inválida' });
    }

    try {
        // Verificar el token con la firma secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Inyectar los datos decodificados del usuario en la petición (req)
        req.user = { id: decoded.id, email: decoded.email };
        
        next(); // Pasar al siguiente controlador o ruta
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'El token de acceso ha expirado' });
        }
        return res.status(401).json({ message: 'Token inválido' });
    }
}

module.exports = auth;