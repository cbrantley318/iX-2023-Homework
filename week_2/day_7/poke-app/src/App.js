import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokeTable from "./components/PokeTable";
import { useState } from "react";
import PokeForm from "./components/PokeForm";
import Pokemon from "./models/Pokemon";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState([]);
  let input = "joe";

  async function fetchPokemon(name) {
    const result = await fetch(url + name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const poke = await result.json();

    console.log(poke.types[0].type.name);

    return new Pokemon(poke.name, poke.types[0].type.name, poke.height, poke.weight);

  }

  async function onSearch(name) {
    const poke =  await fetchPokemon(name);
    setPokemon([...pokemon, poke]);
  }



  return (
    <div className="container m-5">
      <div className="card text-center">
        <div className="card-body">
        <PokeForm onSearch={onSearch} input={input}></PokeForm>
        <PokeTable pokemon={pokemon}></PokeTable></div>

      </div>
    </div>
  );
}

export default App;
