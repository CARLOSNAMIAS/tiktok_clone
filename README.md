# TikTok Clone

Este proyecto es un clon de la interfaz de usuario de TikTok, creado con HTML, CSS y JavaScript. El objetivo principal es replicar la experiencia de navegación y la apariencia visual de la popular aplicación de videos, con un enfoque en la seguridad y el despliegue moderno.

El feed de videos se carga de forma dinámica desde la API de Pexels y la sección "Descubrir" utiliza la API de Unsplash. Las llamadas a estas APIs se realizan de forma segura a través de **funciones serverless de Vercel**, que protegen las API keys y las mantienen fuera del código del navegador.

## ✨ Características

- **Feed de video infinito**: Scroll vertical para navegar entre videos.
- **Carga Segura de Contenido**: Los videos (Pexels) y las imágenes (Unsplash) se cargan a través de un backend serverless, sin exponer las API keys.
- **Interfaz de usuario réplica de TikTok**: Diseño oscuro, barra lateral de interacciones y navegación inferior.
- **Sección Descubrir**: Galería de imágenes cargadas dinámicamente.
- **Comentarios**: Una ventana emergente para visualizar comentarios.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Funciones Serverless (Node.js) desplegadas en Vercel.
- **APIs Externas**:
  - [Pexels API](https://www.pexels.com/api/) para el feed de videos.
  - [Unsplash API](https://unsplash.com/developers) para la sección de descubrir.
- **Iconos**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Plataforma**: [Vercel](https://vercel.com/)

## 🚀 Despliegue en Vercel (Recomendado)

Este proyecto está optimizado para un despliegue rápido y seguro en Vercel.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tiktok_clone.git
    cd tiktok_clone
    ```

2.  **Despliega en Vercel:**
    - Regístrate o inicia sesión en [Vercel](https://vercel.com/).
    - En tu dashboard, haz clic en **"Add New..." > "Project"**.
    - Importa tu repositorio de GitHub.
    - Vercel detectará la configuración, pero asegúrate de que los **Build and Output Settings** estén así:
        - **Build Command**: `npm install`
        - **Output Directory**: `public`
    - Expande la sección **Environment Variables** y agrega tus API keys:
        - `PEXELS_API_KEY` = `TU_API_KEY_DE_PEXELS`
        - `UNSPLASH_ACCESS_KEY` = `TU_ACCESS_KEY_DE_UNSPLASH`
    - Haz clic en **"Deploy"**. ¡Y listo!

## (Opcional) Desarrollo Local

Para ejecutar el proyecto localmente, necesitas tener la [CLI de Vercel](https://vercel.com/docs/cli) instalada.

1.  **Instala la CLI de Vercel:**
    ```bash
    npm install -g vercel
    ```

2.  **Clona el repositorio y entra en el directorio:**
    ```bash
    git clone https://github.com/tu-usuario/tiktok_clone.git
    cd tiktok_clone
    ```

3.  **Crea un archivo `.env`** en la raíz del proyecto para tus API keys:
    ```
    PEXELS_API_KEY="TU_API_KEY_DE_PEXELS"
    UNSPLASH_ACCESS_KEY="TU_ACCESS_KEY_DE_UNSPLASH"
    ```

4.  **Inicia el servidor de desarrollo de Vercel:**
    ```bash
    vercel dev
    ```
    Este comando iniciará un servidor local que replica el entorno de Vercel, ejecutando tanto tu frontend como las funciones serverless de la carpeta `api`.