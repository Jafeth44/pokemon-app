import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconPokeball from "./pokeball";
import { Typography, Grid } from "@mui/material";

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
  },
}));

export const Footer = () => {
  const content = (
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        p={{ xs: 1, sm: 1 }}>

        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}>
          <IconPokeball/>
          <Typography variant="subtitle1" textTransform={'none'}>
            Pokémon App
          </Typography>
        </Grid>

        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}>
          <Typography variant="subtitle2" textTransform={'none'}>
            2023
          </Typography>
        </Grid>

        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}>
          <Typography sx={{ marginX: 1 }} variant="subtitle2" textTransform={'none'}>Información</Typography>
          <Divider sx={{ height: 20, m: 0.5 }} orientation="vertical"/>
          <Typography sx={{ marginX: 1 }} variant="subtitle2" textTransform={'none'}>Contactenos</Typography>
        </Grid>

      </Grid>
  );

  return (
    <Box 
      height={'150px'}
      width={'100%'}
      position={'static'}
      bottom={0}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
      sx={{
        backgroundColor: 'rgb(45, 112, 189)'
      }}
    >
      <Root>
        <Divider> 
          <GitHubIcon sx={{ marginX: 1 }}/>
          <EmailIcon sx={{ marginX: 1 }}/>
        </Divider>
        {content}
      </Root>
    </Box>
  );
}