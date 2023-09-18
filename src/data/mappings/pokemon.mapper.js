import { Pokemon } from '../models/Pokemon.model.js';

export const pokemonMapper = async(jsonObj1, jsonObj2) => {

  const {
    name,
    id,
    flavor_text_entries: [...text],
    evolution_chain: {...evolutionChainUrl}
  } = jsonObj1;

  const {
    abilities: [...ability],
    types: [...type]
  } = jsonObj2;

  const getEvolutionChain = async() => {
    const url =  await fetch(evolutionChainUrl.url);
    const data = url.json();
    return  data;
  }

  const {flavor_text} = text.find((text) => text.language.name == 'es' || text.language.name == 'en');

  const jsonObj3 = await getEvolutionChain();

  return new Pokemon({
    name,
    id,
    flavorText: flavor_text,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, '0')}.png`,
    abilities: ability.map(({ability}) => (ability.name)),
    types: type.map(({type}) => (type.name)),
    url: `/pokemon/${name}`,
    evolutionLine: [
      jsonObj3.chain.evolves_to[0]?.species,
      jsonObj3.chain.evolves_to[0]?.evolves_to[0]?.species
    ]
  })
};
