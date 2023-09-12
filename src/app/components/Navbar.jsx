import { AppBar, Grid, SvgIcon, Toolbar, Typography } from "@mui/material";
import IconPokeball from "../../../public/images/pokeball";


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
        <IconPokeball />
        <Typography variant="h6">Pokemón App</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}