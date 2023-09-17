import {Grid, Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";

export const LandingPage = () => {

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
            ¡Welcome to the pokémon app!
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign={"center"}>
            Please select your favorite region to watch all the pokémons
          </Typography>
        </Grid>

          <Grid xs={4} sm={3} md={2} lg={2}>
            <Card sx={{boxShadow: 3}}>

              <CardActionArea>
                <CardMedia
                component={"img"}
                height={{  xs: "140", sm: "240"}}
                alt={`image of the region`}/>

                <CardContent>
                  <Typography
                  variant="h6"
                  fontSize={{ xs: "1.1rem", sm: "1.3rem"}}
                  textAlign={"center"}>

                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>

      </Grid>
    </>
  )
}