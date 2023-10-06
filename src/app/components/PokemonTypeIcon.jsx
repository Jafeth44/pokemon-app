import { Avatar, Chip } from "@mui/material"
import {pokemonTypes} from '../../data/models/types.model.js'

// eslint-disable-next-line react/prop-types
export const PokemonTypeIcon = ({pokemonType}) => {

  const {type, tipo, color} = pokemonTypes.filter((pokemon) => pokemon.type == pokemonType)[0];

  return (
    <Chip
      avatar={<Avatar src={`/images/elemental-types/${type}.svg`}/>}
      label={tipo}
      sx={{
        color: 'white',
        backgroundColor: color,
        textTransform: 'capitalize',
        margin: '3px' //! no me cuadra esto, luego lo cambio
      }}
    />
  )
}