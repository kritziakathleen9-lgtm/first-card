
function Footer() {
  return (
    <footer className="footer">
      <a className="footer-logo" href="#inicio">
        <span className="footer-corazon">♥</span>
        Mi mundo de cuatro patas
      </a>

      <p className="footer-frase">
        Cinco personalidades, mil recuerdos y un amor infinito.
      </p>

      <nav className="footer-enlaces" aria-label="Enlaces del pie de página">
        <a href="#inicio">Inicio</a>
        <a href="#mascotas">Mis mascotas</a>
        <a href="#nosotros">Sobre nosotros</a>
      </nav>

      <div className="footer-final">
        <span>
          © {new Date().getFullYear()} Mi mundo de cuatro patas
        </span>
        <span className="footer-cariño">
          Hecho con <span aria-label="amor">♥</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
