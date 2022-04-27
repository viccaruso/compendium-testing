export async function fetchAllPokemon() {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const { results } = await res.json();
  return results;
}
