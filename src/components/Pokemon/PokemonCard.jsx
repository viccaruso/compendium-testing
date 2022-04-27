import { capitalizeFirst } from '../../utils/capitalize';

export default function PokemonCard({ pokemon, type_1 }) {

  return (
    <div className='pokemon-card'>
      <h1>{capitalizeFirst(pokemon)}</h1>
      <p>{capitalizeFirst(type_1)}</p>
    </div>
  )
};