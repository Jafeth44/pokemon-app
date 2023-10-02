import { store } from "../../store/store";
import { pokemonMapper } from "../mappings/pokemon.mapper";

const {} = store.dispatch.
export const pokemonLoader = async({params}) => {
  const url1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemonId}`);
  const url2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
  const res1 = await url1.json();
  const res2 = await url2.json();
  const data = await pokemonMapper(res1, res2);
  return data;
}