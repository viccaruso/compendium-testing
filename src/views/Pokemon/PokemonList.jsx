import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../../services/api';
import PokemonCard from '../../components/Pokemon/PokemonCard';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
   async function fetch() {
     const data = await fetchAllPokemon();
     setPokemons(data);
   };
   fetch();

  }, [])
  
  return (
    <div className='pokemon-list'>
      { pokemons.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />) } 
    </div>
  );
};
