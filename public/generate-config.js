const fs = require('fs');

// Obtener las claves de las variables de entorno del servidor
const pexelsApiKey = process.env.PEXELS_API_KEY;
const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY;

// Verificar que las variables de entorno existan
if (!pexelsApiKey || !unsplashApiKey) {
  console.error('Error: Las variables de entorno PEXELS_API_KEY y UNSPLASH_ACCESS_KEY deben estar definidas.');
  process.exit(1); // Termina el proceso con un código de error
}

// Contenido que se escribirá en el archivo config.js
const configContent = `
// Clave para la API de Pexels (videos)
const PEXELS_API_KEY = "${pexelsApiKey}";

// Clave de acceso de Unsplash (imágenes para la sección Discover)
const UNSPLASH_ACCESS_KEY = "${unsplashApiKey}";
`;

// Escribir el contenido en el archivo config.js
fs.writeFile('config.js', configContent, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo config.js:', err);
    process.exit(1);
  }
  console.log('El archivo config.js ha sido generado exitosamente.');
});
