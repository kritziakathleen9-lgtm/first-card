
import './App.css';
import Tarjeta from './components/Tarjeta';

function App() {
  return (
    <div className="App">
      <Tarjeta
        imagen="Khael"
        nombre="Khael"
        tipo="Gato"
        descripcion="Soy un gato cariñoso y juguetón, siempre listo para una aventura. Me gusta dormir en lugares soleados y comer mucho. Solía jugar mucho con mi hermana Brisa, pero por temas de salud me llevaron a otro lugar y no volvimos a estar juntos. ¡Después de 9 años y 11 meses, me pude reencontrar con mi dueño en el cielo!"
      />

      <Tarjeta
        imagen="Brisa"
        nombre="Brisa"
        tipo="Perro"
        descripcion="Soy una perrita muy juguetona y cariñosa. Me encanta correr y saltar, y siempre estoy lista para una aventura. Me gusta que me saquen a pasear al parque con mi hermano Dano y jugar con otros perros. Como mucho pollito y me gusta dormir en mi camita. Aunque tenga 10 años, todavía corro y juego como una cachorrita."
      />

      <Tarjeta
        imagen="Dano"
        nombre="Dano"
        tipo="Perro"
        descripcion="Soy un perro muy juguetón, cariñoso y timido. Me gusta jugar con mi hermana Brisa y correr por el parque. Me encanta que me acaricien y me den premios. Aunque soy un poco tímido, me gusta estar cerca de mi familia y sentirme seguro. ¡Soy un perro muy especial!"
      />

      <Tarjeta
        imagen="Loca-Morocha"
        nombre="Loca y Morocha"
        tipo="Perros"
        descripcion="Somos dos amigas con mucha personalidad, nos abandonaron en la calle cuando eramos pequeñas, pero nos adoptaron en una empresa de motos. Somos muy cariñosas, juguetonas y comelonas. También nos gusta dormir mucho y estar cerca de nuestros amiguitos."
      />

      <Tarjeta
        imagen="Pogui"
        nombre="Pogui"
        tipo="Perro"
        descripcion="Soy un perro muy especial y obediente. Tengo 4 añitos y me encanta que me saquen al parque a jugar y correr, tambien ir de aventura a todos lados. Me gusta que me acaricien y me den premios. Aunque ladro mucho a los que no conozco, me gusta estar cerca de mi familia y sentirme seguro."
      />
    </div>
  );
}

export default App;
