/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const RegionPage = () => {
  const { name, pokemonEntries } = useLoaderData();
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const filterPoke = pokemonEntries.filter((poke) =>
    poke.name.toLowerCase().includes(searchName.toLowerCase())
  );
  const [imgLoad, setImgLoad] = useState(false);
  const postList = useSelector((state) => state.favorites.postList);

  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearchName(newValue);
  };


  return (
    <>
      <Box sx={{
        minHeight: {xs: "calc(100vh - 57px)"}, 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginY: 2
      }}>
        <Grid
          container
          maxWidth={"1400px"}
          justifyContent="space-between"
          alignItems="center"
          p={2}
          width={'100%'}
        >
          <Grid item xs={12} sm={3} width={'100%'}>
            <Typography variant="h4" textTransform="capitalize">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: { xs: "100%" },
              }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar por Pokémon"
                inputProps={{ "aria-label": "Buscar por Pokémon" }}
                value={searchName}
                onChange={handleSearch}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
          // style={gridStyle2}
        >
          {filterPoke.map((poke) => (
            <Grid item key={poke.id} xs={4} sm={3} md={2} lg={2}>
              <Card sx={{ boxShadow: 3, position: "relative" }}>
                <CardActionArea
                  onClick={() =>
                    navigate(`/pokemon/${poke.id}`, { relative: true })
                  }>
                  {postList.filter(
                    (pokemon) => pokemon.pokemonId === poke.id
                  )[0] && postList[0].isFavorite ? (
                    <Star
                      sx={{ position: "absolute", right: "0" }}
                      color="warning"
                    />
                  ) : (
                    <StarBorder sx={{ position: "absolute", right: "0" }} />
                  )}
                  <CardMedia
                    component="img"
                    className="animate__animated animate__fadeIn"
                    onLoad={() =>
                      setTimeout(() => {
                        setImgLoad(true);
                      }, 500)
                    }
                    height={{ xs: "140", sm: "240" }}
                    image={poke.img}
                    alt={`image of the pokémon ${poke.name}`}
                    sx={imgLoad ? "" : { display: "none" }}
                  />
                  <CardMedia
                    className="animate__animated animate__fadeIn"
                    component="img"
                    height={{ xs: "140", sm: "240" }}
                    image={"/images/loader.svg"}
                    alt={`image of the pokémon ${poke.name}`}
                    sx={imgLoad ? { display: "none" } : ""}
                  />
                  <CardContent sx={{ p: "0" }}>
                    <Typography
                      variant="subtitle2"
                      fontSize={{ xs: "0.6rem", sm: "0.8rem" }}
                      textTransform="capitalize"
                      textAlign="center">
                      N.° {poke.id.padStart(4, '0')}
                    </Typography>
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
      </Box>
    </>
  );
};
