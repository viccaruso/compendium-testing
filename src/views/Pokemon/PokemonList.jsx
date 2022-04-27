import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../../services/api';
import PokemonCard from '../../components/Pokemon/PokemonCard';
import Search from '../../components/Search/Search';

export default function PokemonList() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokes, setFilteredPokes] = useState([]);

  const handleSearch = (search) => {
    const filteredPokemon = pokemons.filter(pokemon => pokemon.pokemon.includes(search));
    setFilteredPokes(filteredPokemon);
  }

  useEffect(() => {
    async function fetch() {
      const data = await fetchAllPokemon();
      setPokemons(data);
      setIsLoading(!isLoading);
    };
    fetch();

  }, [])

  return (
    <>
      <h1>Pokemon List</h1>
      {
        isLoading
          ? (<p>Loading Pokemon...</p>)
          : (<div className='pokemon-list'>
            <Search onSearch={handleSearch} />
            {
              filteredPokes.length
                ? filteredPokes.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />)
                : pokemons.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />)
            }
          </div>)
      }
    </>
  )
};
