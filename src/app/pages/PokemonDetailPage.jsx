/* eslint-disable react-hooks/exhaustive-deps */
import {Box, Button, Card, CardContent, CardMedia, Grid, IconButton, TextField, Tooltip, Typography} from "@mui/material";
import {useGetPokemonDataMutation, useSetPokemonDataMutation} from "../../store/services/pokemon.service";
import { PokemonTypeIcon } from "../components/PokemonTypeIcon";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Save, Star, StarBorder } from "@mui/icons-material";
import RadarChart from "react-svg-radar-chart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../theme/chart.css";

const pokemonPageState = {
  isFavorite: false,
  postComment: "",
};

export const PokemonDetailPage = () => {
  const navigate = useNavigate();
  const { name, img, types, abilities, flavorText, id, weight, height, stats } =
    useLoaderData();
  const { uid } = useSelector((state) => state.auth);
  const [state, setState] = useState(pokemonPageState);
  const { isFavorite, postComment } = state;
  const [getData] = useGetPokemonDataMutation();
  const [setData] = useSetPokemonDataMutation();

  //datos para la shart
  const data = [
    {
      data: {
        hp: stats[0].base_stat / 220,
        attk: stats[1].base_stat / 220,
        spAttk: stats[2].base_stat / 220,
        def: stats[3].base_stat / 220,
        spDef: stats[4].base_stat / 220,
        speed: stats[5].base_stat / 220,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    // columns
    hp: "PS",
    attk: "Ataque",
    spAttk: "Ataque Esp",
    def: "Defensa",
    spDef: "Defensa Esp",
    speed: "Velocidad",
  };

  console.log(stats);

  const setInputChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const setSubmitCommend = (e) => {
    e.preventDefault();
    setData({
      pokemonId: id.toString(),
      userId: uid,
      ...state,
    });
  };

  const setFavorite = () => {
    setState({
      ...state,
      isFavorite: !isFavorite,
    });
    setData({
      pokemonId: id.toString(),
      userId: uid,
      ...state,
      isFavorite: !isFavorite,
    });
  };

  useEffect(() => {
    getData({ userId: uid, pokemonId: id.toString() })
      .unwrap()
      .then(({ post }) =>
        setState(() => ({
          isFavorite: post?.isFavorite || false,
          postComment: post?.postComment || "",
        }))
      );
  }, []);

  return (
    <>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        my={1}
        mt={2}
        px={1}
        maxWidth={"1000px"}>
        <Button
          sx={{
            backgroundColor: 'rgb(46,139,87)',
            '&:hover': {
              backgroundColor: 'rgb(34, 100, 63)'
            }
          }}
          item
          variant="contained"
          onClick={() => navigate(`/pokemon/${id - 1}`)}
          disabled={id == "1" ? true : false}>
          Anterior
        </Button>
        <Button
          sx={{
            backgroundColor: 'rgb(46,139,87)',
            '&:hover': {
              backgroundColor: 'rgb(34, 100, 63)'
            }
          }}
          item
          variant="contained"
          onClick={() => navigate(`/pokemon/${id + 1}`)}
          disabled={id == "1017" ? true : false}>
          Siguiente
        </Button>
      </Grid>
      <Grid
        className="animate__animated animate__fadeIn faster"
        container
        mb={2}
        px={1}
        maxWidth={"1000px"}>
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <CardMedia
              component={"img"}
              image={img}
              alt={`image of the pokemon ${name}`}
              sx={{
                maxWidth: { sm: "50%" },
                objectFit: "contain",
              }}
            />
            <CardContent
              sx={{
                flexBasis: "50%",
                position: "relative",
              }}>
              <Typography
                textTransform="capitalize"
                justifyContent="center"
                textAlign="center"
                variant="h4">
                {name}
              </Typography>
              <Tooltip
                title={
                  isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
                }>
                <IconButton
                  onClick={setFavorite}
                  sx={{ position: "absolute", right: "8px", top: "8px" }}
                  size="large">
                  {isFavorite ? <Star color="warning" /> : <StarBorder />}
                </IconButton>
              </Tooltip>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}>
                {types.map((type, id) => (
                  <PokemonTypeIcon pokemonType={type} key={id} />
                ))}
              </Box>
              <Typography marginY={3} textAlign={"center"} fontStyle={"italic"}>
                &quot;{flavorText}&quot;
              </Typography>
              <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid
                  item
                  xs={6}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}>
                  <Typography>Altura: {(height * 0.1).toFixed(2)} m</Typography>
                  <Typography>Peso: {(weight * 0.1).toFixed(1)} Kg</Typography>
                  {abilities.map((ability, id) => (
                    <Typography textTransform="capitalize" key={id}>
                      Habilidad {id + 1}: {ability}
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                  <RadarChart captions={captions} data={data} size={200}/>
                </Grid>
              </Grid>
              <Typography mt={1}>Comentario:</Typography>
              <Card sx={{ position: "relative" }} variant="elevation">
                <form onSubmit={setSubmitCommend}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    value={postComment}
                    name="postComment"
                    onChange={setInputChange}
                    sx={{
                      border: "none",
                    }}
                  />
                  <Tooltip title="Guardar comentario">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        position: "absolute",
                        bottom: "4px",
                        right: "4px",
                      }}>
                      <Save />
                    </Button>
                  </Tooltip>
                </form>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
