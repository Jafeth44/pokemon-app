import { Region } from "../models/Region.model.js";

export const regionMapper = (jsonObj) => {
  const {
    id,               //number
    name,             //string
    pokemon_entries,  //[entry_number: number, pokemon_species[name: string, url: string]]
  } = jsonObj;


  const pokemonEntriesArray = pokemon_entries.map(({ pokemon_species }) => (
    [pokemon_species.name, pokemon_species.url]
  ))

  const pokemonEntries = [];

  for (let pokemon of pokemonEntriesArray) {
    let currId = pokemon[1].match(/\/pokemon-species\/[0-9]*/)[0].match(/[0-9]+/)[0];
    //* doble regex, el primero saca un pedazo del url y el otro devuelve solo la parte numérica
    pokemonEntries.push(
      {
        name: pokemon[0],
        url: pokemon[1],
        id: currId,
        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${currId.toString().padStart(3, '0')}.png`
         //* muy vacilón esta vara de padStart, se puede usar para agregar carácteres extra al inicio de un string
      }
    )
  }

  return new Region({
    id,
    name,
    pokemonEntries,
  })
}