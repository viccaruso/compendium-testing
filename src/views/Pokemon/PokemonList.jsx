import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../../services/api';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
   async function fetch() {
     const data = await fetchAllPokemon();
     setPokemon(data);
   };
   fetch();

  }, [])
  
  console.log(pokemon);
  return (
  <p>hello</p>
  );
};
