
function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-contenido">
        <h2>Primeras Cartas</h2>

        <p>
          Cada huella deja un recuerdo y cada historia
          merece un lugar especial.
        </p>

        <a href="#inicio">Volver al inicio ↑</a>
      </div>

      <div className="footer-final">
        © {new Date().getFullYear()} Primeras Cartas
        · Hecho con cariño
      </div>
    </footer>
  );
}

export default Footer;
