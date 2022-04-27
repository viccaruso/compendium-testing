import { capitalizeFirst } from '../../utils/capitalize';

export default function PokemonCard({ pokemon }) {
  return (
    <div className='pokemon-card'>
      <h1>{ capitalizeFirst(pokemon.pokemon) }</h1>
      <p>{ capitalizeFirst(pokemon.type_1) }</p>
    </div>
  )
};