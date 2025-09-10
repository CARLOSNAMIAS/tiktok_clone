// Carga imágenes aleatorias de Unsplash en la sección "Discover".

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('discoverContainer');

  if (!container) {
    console.error('Error: No se encontró el contenedor #discoverContainer.');
    return;
  }

  console.log('Iniciando carga de imágenes de Unsplash...');

  fetch('/api/unsplash')
    .then(response => {
      console.log('Respuesta recibida del servidor:', response);
      if (!response.ok) {
        // Si la respuesta no es exitosa, intenta leer el cuerpo del error.
        return response.json().then(errorData => {
          // Lanza un error que incluye el mensaje del servidor.
          throw new Error(`El servidor respondió con un error ${response.status}: ${errorData.error || 'Sin detalles'}`);
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos recibidos y procesados como JSON:', data);

      // Validar que los datos son un array y no está vacío.
      if (!Array.isArray(data) || data.length === 0) {
        console.warn('Advertencia: La API no devolvió imágenes o el formato es incorrecto.', data);
        container.innerHTML = '<p class="error-message">No se pudieron cargar las imágenes en este momento.</p>';
        return;
      }

      // Limpiar el contenedor por si acaso.
      container.innerHTML = '';

      // Crear y añadir cada imagen al DOM.
      data.forEach(item => {
        if (item && item.urls && item.urls.regular) {
          const img = document.createElement('img');
          img.src = item.urls.regular;
          img.alt = item.alt_description || 'Imagen de Unsplash';
          img.className = 'discover-image';
          
          // Añadir un efecto de aparición suave.
          img.style.opacity = 0;
          img.onload = () => {
            img.style.transition = 'opacity 0.5s';
            img.style.opacity = 1;
          };

          container.appendChild(img);
        }
      });
    })
    .catch(error => {
      console.error('Error final en el proceso de carga de imágenes:', error);
      if (container) {
        container.innerHTML = '<p class="error-message">Ocurrió un error al cargar las imágenes. Revisa la consola para más detalles.</p>';
      }
    });
});

// La navegación se maneja en nav.js, por lo que no es necesaria aquí para evitar duplicados.