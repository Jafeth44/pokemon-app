import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

export const RegionPage = () => {

  const { name, pokemonEntries } = useLoaderData();


  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Grid container spacing={3} p={3} maxWidth={'1400px'}>
        {
          pokemonEntries.map(poke => (
            <Grid 
              item 
              key={poke.id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
            >
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component={'img'}
                    height={'240'}
                    image={poke.img}
                    alt={`imgage of the pokémon ${poke.name}`}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant="h6" textAlign={"center"}>{poke.name}</Typography>
                </CardContent>
              </Card>

            </Grid>
          ))
        }
      </Grid>
    </>
  );
};
