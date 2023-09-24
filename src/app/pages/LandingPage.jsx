import {
  Grid,
  Typography,
  Box,
  ButtonBase
} from "@mui/material";
import { styled } from '@mui/material/styles'
import regions from "../../data/models/regions.json";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    margin: 18,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor'
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 1,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 1 }}
        p={{ xs: 1, sm: 1 }}
        justifyContent={"center"}
        maxWidth={"1400px"}>
        <Grid item xs={12} marginBottom={2}>
          <Typography variant="h3" textAlign={"center"}>
            ¡Bienvenido a la Pokémon App!
          </Typography>

          <Typography variant="h6" textAlign={"center"}>
            Selecciona tu región favorita para ver todos los pokémons
          </Typography>
        </Grid>
        {regions.map((region) => (
          <Grid item key={region.id} xs={12} sm={6} md={3} lg={12 / 5}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
              <ImageButton
                focusRipple
                key={region.name}
                style={{
                  width: '95%'
                }}
                onClick={() => navigate(`/region/${region.id}`)}>

                <ImageSrc style={{backgroundImage: `url(${region.image})`}}/>
                <ImageBackdrop className="MuiImageBackdrop-root"/>
                <Image>
                  <Typography
                    component='span'
                    variant="h5"
                    color='inherit'
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)})`,
                    }}>
                    {region.name}

                    <ImageMarked className="MuiImageMarked-root"/>
                  </Typography>                
                </Image> 
              </ImageButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};