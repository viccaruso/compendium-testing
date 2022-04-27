import { capitalizeFirst } from '../../utils/capitalize';

export default function PokemonCard({ pokemon, type_1 }) {

  return (
    <div>
      <h1>{capitalizeFirst(pokemon)}</h1>
      <p>{capitalizeFirst(type_1)}</p>
    </div>
  )
};