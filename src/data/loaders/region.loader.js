import { regionMapper } from "../mappings/region.mapper.js";

export const regionLoader = async({params}) => {
  const url = await fetch(`https://pokeapi.co/api/v2/pokedex/${params.regionId}`);
  const res = await url.json();
  const data = regionMapper(res);
  console.log(data);
  return data;
};
