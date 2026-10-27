
function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#inicio">
        <span className="logo-icono">♥</span>
        <span>Primeras Cartas</span>
      </a>

      <div className="navbar-enlaces">
        <a href="#inicio">Inicio</a>
        <a href="#mascotas">Mascotas</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
