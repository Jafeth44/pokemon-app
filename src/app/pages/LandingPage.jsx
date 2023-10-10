import {Grid, Typography, ButtonBase} from "@mui/material";
import { styled } from '@mui/material/styles'
import regions from "../../data/models/regions.json";
import { useNavigate } from "react-router-dom";
import { useGetPokeFavListMutation } from "../../store/services/pokemon.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/slices/favoritesSlice";

export const LandingPage = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.auth.uid);
  const [getFavorites] = useGetPokeFavListMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    
    getFavorites({"userId": userId}).unwrap().then(payload => dispatch(setFavorites(payload)))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
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
        className="animate__animated  animate__fadeIn animate__faster"
        container
        spacing={{ xs: 1, sm: 1 }}
        p={{ xs: 1, sm: 1 }}
        justifyContent={"center"}
        // gap={'2'}
        maxWidth={"1400px"}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"}>
            ¡Bienvenido a la Pokémon App!
          </Typography>

          <Typography variant="h6" textAlign={"center"}>
            Selecciona la región para atrapar a tu pokémon favorito
          </Typography>
        </Grid>
        {regions.map((region) => (
          <Grid item key={region.id} xs={12} sm={6} md={3} lg={12 / 5}>
              <ImageButton
                focusRipple
                key={region.name}
                sx={{
                  width: '100%'
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};