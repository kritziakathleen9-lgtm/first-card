
import '../styles/Tarjeta.css';

const imagenes = import.meta.glob('../assets/*.png', {
  eager: true,
  import: 'default'
});

function Tarjeta({ imagen, nombre, tipo, descripcion }) {
  const rutaImagen = imagenes[`../assets/${imagen}.png`];

  return (
    <article className="contenedor-tarjeta">
      {rutaImagen ? (
        <img
          className="imagen-tarjeta"
          src={rutaImagen}
          alt={`Foto de ${nombre}`}
          loading="lazy"
        />
      ) : (
        <div className="imagen-no-disponible">
          Imagen no disponible
        </div>
      )}

      <div className="contenedor-texto-tarjeta">
        <span className="etiqueta-tarjeta">
          Nuestra familia
        </span>

        <h3 className="nombre-tarjeta">{nombre}</h3>

        <span className="tipo-tarjeta">{tipo}</span>

        <p className="texto-tarjeta">{descripcion}</p>
      </div>
    </article>
  );
}

export default Tarjeta;
