# TikTok Clone

Este proyecto es un clon de la interfaz de usuario de TikTok, creado con HTML, CSS y JavaScript. El objetivo principal es replicar la experiencia de navegación y la apariencia visual de la popular aplicación de videos.

## ✨ Características

- **Feed de video infinito**: Scroll vertical para navegar entre videos, que se cargan de forma dinámica desde la API de Pexels.
- **Interfaz de usuario réplica de TikTok**: Diseño oscuro, barra lateral de interacciones (likes, comentarios, compartir), y navegación inferior.
- **Sección de Perfil de Usuario**: Muestra información del usuario y una galería de sus videos o imágenes.
- **Sección Descubrir**: Carga imágenes de forma dinámica desde la API de Unsplash.
- **Comentarios**: Una ventana emergente para ver y (próximamente) agregar comentarios.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**: 
  - [Pexels API](https://www.pexels.com/api/) para el feed de videos.
  - [Unsplash API](https://unsplash.com/developers) para la sección de descubrir.
- **Iconos**: [Bootstrap Icons](https://icons.getbootstrap.com/)

## 🚀 Cómo Empezar

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2.  **Obtén tus API Keys:**
    - Ve a [Pexels](https://www.pexels.com/api/) y crea una cuenta para obtener tu API key.
    - Ve a [Unsplash](https://unsplash.com/developers) y crea una cuenta para obtener tu `accessKey`.

3.  **Configura las API Keys:**
    - En el archivo `config.js`, reemplaza `"TU_API_KEY_DE_PEXELS"` con tu clave de Pexels.
    - En el archivo `discover.html`, reemplaza `'TU_API_KEY_DE_UNSPLASH'` con tu clave de Unsplash.

4.  **Abre el proyecto:**
    - Simplemente abre el archivo `index.html` en tu navegador web.
