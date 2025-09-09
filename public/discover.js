// Esta JS carga imágenes aleatorias de Unsplash y las muestra en la sección "Discover" de la página principal.

const container = document.getElementById('discoverContainer');

// La variable "UNSPLASH_ACCESS_KEY" se tomará del archivo config.js
fetch('/api/unsplash')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const img = document.createElement('img');
      img.src = item.urls.regular;
      img.alt = item.alt_description || 'Imagen';
      img.className = 'discover-image';
      container.appendChild(img);
    });
  })
  .catch(error => console.error('Error al cargar imágenes:', error));

// Navegación
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', e => {
    const view = e.currentTarget.dataset.view;
    window.location.href = `${view}.html`;
  });
});
