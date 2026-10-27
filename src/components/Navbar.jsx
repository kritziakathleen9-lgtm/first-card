
function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#inicio">
        <span className="navbar-huella">♥</span>
        <span>Mi mundo de cuatro patas</span>
      </a>

      <nav className="navbar-enlaces" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#mascotas">Mis mascotas</a>
        <a className="navbar-destacado" href="#nosotros">
          Sobre nosotros <span>♥</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
