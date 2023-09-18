import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useLoaderData, useNavigate } from "react-router-dom"

export const PokemonDetailPage = () => {
  const {name, img, types, abilities, flavorText} = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <Grid
      container
      p={{xs: 2, sm: 2}}
      maxWidth={"1400px"}>
        <Grid
          item
          xs={12}
          >
            <Card 
              sx={{
                boxShadow: 3,
                display: "flex",
                flexDirection: {xs: 'column', sm: 'row'}
              }}
            >

                <CardMedia
                  component={'img'}
                  image={img}
                  alt={`image of the pokemon ${name}`}
                  sx={{
                    flexBasis: '50%'
                  }}
                />

                <CardContent
                  sx={{
                    flexBasis: '50%'
                  }}
                >
                  <Typography>{name}</Typography>
                </CardContent>

            </Card>
        </Grid>
      </Grid>
    </>
  )
}