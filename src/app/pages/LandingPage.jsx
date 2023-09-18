import {Grid, Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
import regions from "../../data/models/regions.json";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 2 }}
        p={{ xs: 2, sm: 2}}
        maxWidth={"1400px"}>
        
        <Grid item xs={12}>
          <Typography
          variant="h4"
          textAlign={"center"}>
            ¡Bienvenido a la Pokémon App!
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign={"center"}>
            Selecciona tu región favorita para ver todos los pokémons
          </Typography>
        </Grid>

        {regions.map((region) =>
          <Grid item key={region.id} xs={12} sm={6} md={3} lg={12/5}>
            <Card sx={{boxShadow: 3}}>

              <CardActionArea onClick={() => navigate(`/region/${region.id}`)}>
                <CardMedia
                component={"img"}
                height={{  xs: "140", sm: "240"}}
                image={region.image}
                alt={`image of the region ${region.name}`}/>

                <CardContent>
                  <Typography
                  variant="h6"
                  fontSize={{ xs: "1.1rem", sm: "1.3rem"}}
                  textAlign={"center"}>
                  {region.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>        
        )}

      </Grid>
    </>
  )
}