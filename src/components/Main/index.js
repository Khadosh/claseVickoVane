import React, { useState, useEffect } from 'react';
import PokemonCard from '../Card';
import './style.css';

const Main = () => {
  const [data, setData] = useState([]);

  const fetchPokemones = async () => {
    const d = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(response => response.json());
    setData(d.results);
  };

  useEffect(() => {
    fetchPokemones();
  }, []);

  return (
    <div className="main">
      <h1>Pokemones</h1>
      <ul>
        {
          data.map(pokemon => (
            <PokemonCard key={pokemon.url} pokemon={pokemon} />
          ))
        }
      </ul>
    </div>
  );
};

export default Main;