1. Clonar el repositorio
    https://github.com/maia090607/jwt-auth-demo.git
2. Instalar paquetes
   npm install
3. Crear archivo .env
   crear un archivo .env y colocar este codigo:
   PORT=5000
  JWT_SECRET=Un_Clave_Unica
4. Ejecuta el proyecto
   Escribri esto en la terminal: 
   node server.js
5. Descargar / abrir la extencion Thunder Client
   Probar los Endpoints en Thunder Client 
   - Enviar una petición POST para registrarse en: http://localhost:5000/api/auth/register
   - Enviar una petición POST para iniciar sesión en: http://localhost:5000/api/auth/login (y copiar el token devuelto).
   - Enviar una petición GET usando el token copiado como Bearer Token en la ruta protegida: http://localhost:5000/api/profile/me