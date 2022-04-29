import { render, screen, waitFor } from '@testing-library/react';
import { capitalizeFirst } from '../../utils/capitalize';
import userEvent from '@testing-library/user-event';
import PokemonList from './PokemonList';

describe('PokemonList', () => {
  it('should render a list of pokemon cards to screen and then filter down to one', async () => {
    render(
      <PokemonList />
    );

    await screen.findByText('Geodude');

    const filter = screen.getByPlaceholderText('Filter pokemon');
    userEvent.type(filter, 'arb');

    return waitFor(() => {
      const result = screen.getAllByRole('heading');
      expect(result.length).toEqual(2);
      expect(result[1].textContent).toEqual('Arbok');
    });
  });
});
