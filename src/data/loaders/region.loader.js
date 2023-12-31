import { regionMapper } from "../mappings/region.mapper.js";

export const regionLoader = async({params}) => {
  const url = await fetch(`https://pokeapi.co/api/v2/generation/${params.regionId}`);
  const res = await url.json();
  const data = regionMapper(res);
  return data;
};
