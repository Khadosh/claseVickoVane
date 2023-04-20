import React from "react";
import { Link, useParams } from "react-router-dom";

const Pokemon = () => {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPokemon(data)
      });
  }, [pokemonId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Link to="/">Back</Link>
    </div>
  );
};


export default Pokemon;