import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PokemonTypeIcon } from "../components/PokemonTypeIcon";
import { useSelector } from "react-redux";

export const PokemonDetailPage = () => {
  const { name, img, types, abilities, flavorText, id, stats } = useLoaderData();
  const {} = useSelector()
  const navigate = useNavigate();
  console.log(useLoaderData());
  return (
    <>
      <Grid
        container
        display={'flex'}
        justifyContent={'space-between'}
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}
      >
          <Button item variant="contained" onClick={() => navigate(`/pokemon/${id - 1}`)} disabled={id == '1' ? true : false}>Anterior</Button>
          <Button item variant="contained" onClick={() => navigate(`/pokemon/${id + 1}`)} disabled={id == '1017' ?  true : false}>Siguiente</Button>
      </Grid>
      <Grid
        className="animate__animated animate__fadeIn faster"
        container
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}>
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
                flexBasis: "50%",
              }}
            />

            <CardContent
              sx={{
                flexBasis: "50%",
              }}>
              <Typography 
                textTransform='capitalize'
                justifyContent='center'
                textAlign='center'
                variant="h4">
                  {name}
              </Typography>
              {
                types.map((type, id) => (
                  <PokemonTypeIcon pokemonType={type} key={id}/>
                ))
              }
              <Typography marginY={2}>{flavorText}</Typography>
              <Card>

              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
