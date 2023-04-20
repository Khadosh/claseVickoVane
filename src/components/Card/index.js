import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await fetch(pokemon.url).then(response => response.json());
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [pokemon.url]);

  if (!pokemonData) {
    return <div>Loading ...</div>
  };

  const handleOnClick = () => {
    navigate(`/pokemon/${pokemonData.id}`);
  };

  return (
    <div className="card" onClick={handleOnClick}>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.id} />
      <h2>{pokemon.name}</h2>
      {
        pokemonData.abilities.map(({ ability }) => (
          <p key={ability.name}>{ability.name}</p>
        ))
      }
    </div>
  );
};

export default PokemonCard;