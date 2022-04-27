import { render, screen } from '@testing-library/react';
import { capitalizeFirst } from '../../utils/capitalize';
import PokemonCard from './PokemonCard';

describe('PokemonCard', () => { 
  it('should render a pokemon card to the screen with a name and a type', async () => {
    const pokemon = {
      pokemon: 'butterfree',
      type_1: 'bug'
    }
    render(
      <PokemonCard pokemon={pokemon} />
    )

    const pokemonName = screen.getByText('Butterfree');
    expect(pokemonName.textContent).toEqual(capitalizeFirst(pokemon.pokemon));

    const pokemonType = screen.getByText('Bug');
    expect(pokemonType.textContent).toEqual(capitalizeFirst(pokemon.type_1));
  });
 });