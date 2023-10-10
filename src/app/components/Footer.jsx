import { Button, Card, CardContent } from "@mui/material"
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

const handleGitHub = () => {
  window.open ('https://github.com/Jafeth44/pokemon-app', '_blank');
};

const handleEmail = () => {
  window.location.href = 'mailto: jafethocampo@icloud.com, jeancarlo2196@gmail.com';
}

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
      </Grid>
  );

  return (
    <Card 
      height={'120px'}
      width={'100%'}
      position={'static'}
      bottom={0}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
    >
      <CardContent>

      <Root>
        <Divider>
            <Button
            color="inherit"
            sx={{marginX: -1}}
            onClick={handleGitHub}>
              <GitHubIcon/>
            </Button>
            <Button
            color="inherit"
            sx={{marginX: -1}}
            onClick={handleEmail}>
              <EmailIcon/>
            </Button>
        </Divider>
        {content}
      </Root>
      </CardContent>
    </Card>
  );
}