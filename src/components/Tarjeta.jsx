import '../styles/Tarjeta.css';

const imagenes = import.meta.glob('../assets/*.png', { 
    eager: true, 
    import: 'default' 
});

    function Tarjeta(props) {
  return (


    <div className='contenedor-tarjeta'>
      <img 
        className='imagen-tarjeta'

        src={imagenes[`../assets/${props.imagen}.png`]}
        
        alt={`Foto de ${props.nombre}`}
        />

      <div className='contenedor-texto-tarjeta'>
        <p className='nombre-tarjeta'>
            <strong>{props.nombre}</strong>
        </p>
        <p className='tipo-tarjeta'>
            <strong>{props.tipo}</strong> 
        </p>
        <p className='texto-tarjeta'>
            "{props.descripcion}" 
        </p>
      </div>
    </div>
    );
}

export default Tarjeta;