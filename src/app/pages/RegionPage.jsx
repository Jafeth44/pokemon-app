import { useLoaderData, useNavigate } from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export const RegionPage = () => {
  const { name, pokemonEntries } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 2 }}
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}>
          <Grid item xs={12}>
            <Typography variant="h4" textTransform={"capitalize"}>{name}</Typography>
          </Grid>
        {pokemonEntries.map((poke) => (
          <Grid item key={poke.id} xs={4} sm={3} md={2} lg={2}>
            <Card sx={{boxShadow: 3}}>
              <CardActionArea onClick={() => navigate(`/pokemon/${poke.name}`, {relative: true})}>
                <CardMedia
                  component={"img"}
                  height={{ xs: "140", sm: "240" }}
                  image={poke.img}
                  alt={`image of the pokémon ${poke.name}`}
                />
              <CardContent sx={{p: '0'}}>
                <Typography
                  variant="h6"
                  fontSize={{ xs: "1.1rem", sm: "1.3rem" }}
                  textTransform={"capitalize"}
                  textAlign={"center"}>
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
