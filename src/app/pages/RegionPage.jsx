import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react";

export const RegionPage = () => {
  const { name, pokemonEntries } = useLoaderData();
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');
  const filterPoke = pokemonEntries.filter((poke) => poke.name.toLowerCase().includes(searchName.toLowerCase()));
  const handleSearch = (e) => {setSearchName(e.target.value)};

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
      >
        <Grid item>
          <Typography variant="h4" textTransform="capitalize">{name}</Typography>
        </Grid>
        <Grid item>
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar por Pokémon"
              inputProps={{ 'aria-label': 'Buscar por Pokémon' }}
              value={searchName}
              onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, sm: 2 }}
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}
      >
        {filterPoke.map((poke) => (
          <Grid item key={poke.id} xs={4} sm={3} md={2} lg={2}>
            <Card sx={{ boxShadow: 3 }}>
              <CardActionArea onClick={() => navigate(`/pokemon/${poke.id}`, { relative: true })}>
                <CardMedia
                  component="img"
                  height={{ xs: "140", sm: "240" }}
                  image={poke.img}
                  alt={`image of the pokémon ${poke.name}`}
                />
                <CardContent sx={{ p: '0' }}>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "1.1rem", sm: "1.3rem" }}
                    textTransform="capitalize"
                    textAlign="center"
                  >
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
