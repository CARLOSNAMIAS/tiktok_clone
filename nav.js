document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
    <a href="index.html" class="btn-icono">
      <img src="img/tiktok-home-symbol.svg" alt="Home" class="icono">
      <p>Inicio</p>
    </a>

    <a href="discover.html" class="btn-icono">
      <img src="img/users-outline.svg" alt="Discover" class="icono">
      <p>Discover</p>
    </a>

    <button id="btnCamara">
      <img class="tiktok" src="img/boton-camara-TK.png" alt="Upload">
    </button>

    <a href="#" class="btn-icono notificacion">
      <img src="img/inboxx.svg" alt="Inbox" class="icono">
      <span class="burbuja">10</span>
      <p>Mensajes</p>
    </a>

    <a href="profile.html" class="btn-icono">
      <img src="img/user-outline.svg" alt="Profile" class="icono">
      <p>Perfil</p>
    </a>
  `;

  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
});
