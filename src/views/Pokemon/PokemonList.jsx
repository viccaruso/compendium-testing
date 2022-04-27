import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../../services/api';
import PokemonCard from '../../components/Pokemon/PokemonCard';
import Search from '../../components/Search/Search';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokes, setFilteredPokes] = useState([]);

  const handleSearch = (search) => {
    const filteredPokemon = pokemons.filter(pokemon => pokemon.pokemon.includes(search));
    console.log(filteredPokemon);
    setFilteredPokes(filteredPokemon);
  }

  useEffect(() => {
   async function fetch() {
     const data = await fetchAllPokemon();
     setPokemons(data);
   };
   fetch();

  }, [])
  
  return (
    <div className='pokemon-list'>
      <Search onSearch={handleSearch} />
      { 
        filteredPokes.length
        ? filteredPokes.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />)
        : pokemons.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />) 
      } 
    </div>
  );
};
