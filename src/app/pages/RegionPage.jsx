/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const RegionPage = () => {
  const { name, pokemonEntries } = useLoaderData();
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');
  const [isSearching1, setIsSearching1] = useState(false);
  const [isSearching2, setIsSearching2] = useState(false);
  const filterPoke = pokemonEntries.filter((poke) => poke.name.toLowerCase().includes(searchName.toLowerCase()));
  const [imgLoad, setImgLoad] = useState(false);
  const postList = useSelector(state => state.favorites.postList);

  console.log({postList});

  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearchName(newValue);
    setIsSearching1(newValue !== '');
    setIsSearching2(newValue !== '');
  };

  const gridStyle1 =  isSearching1 
  ? {
    position: 'absolute',
    top: '64px',
    height: '64px'
    }
  : null;

  const gridStyle2 = isSearching2
  ? {
    position: 'relative',
    // top : {sx: '250px', sm: '300px'}
    top: '-324px',
    marginTop: '412px'
  }
  : null

  return (
    <>
      <Grid
        container
        spacing={2}
        p={2}
        maxWidth={"1400px"}
        justifyContent="space-between"
        alignItems="center"
        marginTop={1}
        // con style no, use sx={...}
        style={gridStyle1}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h4" textTransform="capitalize">{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={6}>
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {xs: '100%' } }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar por Pokémon"
              inputProps={{ 'aria-label': 'Buscar por Pokémon' }}
              value={searchName}
              onChange={handleSearch}/>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        spacing={{ xs: 2, sm: 2 }}
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}
        style={gridStyle2}>
        {filterPoke.map((poke) => (
          <Grid item key={poke.id} xs={4} sm={3} md={2} lg={2}>
            <Card sx={{ boxShadow: 3 , position: 'relative'}}>
              <CardActionArea onClick={() => navigate(`/pokemon/${poke.id}`, { relative: true })}>
                {
                  postList.filter(pokemon => pokemon.pokemonId === poke.id)[0] && postList[0].isFavorite
                  ? <Star sx={{position: 'absolute', right: '0'}} color="warning"/>
                  : <StarBorder sx={{position: 'absolute', right: '0'}}/>
                }
                <CardMedia
                  component="img"
                  className="animate__animated animate__fadeIn"
                  onLoad={() => setTimeout(() => {
                    setImgLoad(true)
                  }, 500)}
                  height={{ xs: "140", sm: "240" }}
                  image={poke.img}
                  alt={`image of the pokémon ${poke.name}`}
                  sx={imgLoad ? '' : {display: 'none'}}
                />
                <CardMedia
                className="animate__animated animate__fadeIn"
                  component="img"
                  height={{ xs: "140", sm: "240" }}
                  image={'/images/loader.svg'}
                  alt={`image of the pokémon ${poke.name}`}
                  sx={imgLoad ? {display: 'none'} : ''}
                />
                <CardContent sx={{ p: '0' }}>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "1.1rem", sm: "1.3rem" }}
                    textTransform="capitalize"
                    textAlign="center">
                    {poke.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};