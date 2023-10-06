import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  Divider,
  ListItemIcon,
  List,
  ListItem,
} from "@mui/material";
import { Drawer, Box } from "@mui/material";
import IconPokeball from "./pokeball";
import {
  Logout,
  Menu as MenuIcon,
  Bookmark,
  Landscape,
} from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../store/slices/authSlice";
import regions from "../../data/models/regions.json";
import pokemonNames from "../../data/models/pokemon.json";

export const Navbar = () => {
  const { isLoggedIn, name } = useSelector((state) => state.auth);
  const { postList } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn) setLogin(true);
  }, [isLoggedIn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 0",
          }}>
          {login && (
            <>
              <IconButton
                color="inherit"
                size="large"
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box
                  p={1}
                  width="300px"
                  display={"flex"}
                  alignItems={"center"}
                  role="presentation">
                  <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setIsDrawerOpen(false)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    marginLeft={1}
                    component="div"
                    flex={1}>
                    Menú principal
                  </Typography>
                </Box>
                <Divider />
                <Box
                  p={1}
                  width="300px"
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  role="presentation">
                  <Typography
                    variant="h6"
                    textTransform="capitalize"
                    marginLeft={1}>
                    Pokémones favoritos
                  </Typography>
                  <List sx={{ width: "100%" }}>
                    {postList.map((data) =>
                      data.isFavorite ? (
                        <ListItem key={data.pokemonId} sx={{width: '100%'}}>
                          <Button fullWidth
                            sx={{ textTransform: "capitalize", fontSize: '1.2rem', margin: 0}}
                            onClick={() => {
                              navigate(`/pokemon/${data.pokemonId}`);
                              setIsDrawerOpen(false);
                            }}>
                            <Bookmark sx={{ marginRight: 1 }} />{" "}
                            {pokemonNames[data.pokemonId - 1].name}
                          </Button>
                        </ListItem>
                      ) : null
                    )}
                  </List>
                </Box>
                <Divider />
                <Box
                  p={1}
                  width="300px"
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  role="presentation">
                  <Typography
                    variant="h6"
                    textTransform="capitalize"
                    marginLeft={1}>
                    Regiones
                  </Typography>
                  <List sx={{ width: "100%" }}>
                    {regions.map((region) => (
                      <ListItem key={region.id}>
                        <Button
                          fullWidth
                          sx={{ textTransform: "capitalize", fontSize: '1.2rem', margin: 0 }}
                          onClick={() => {
                            navigate(`/region/${region.id}`);
                            setIsDrawerOpen(false);
                          }}>
                          <Landscape sx={{ marginRight: 1 }} /> {region.name}
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}

          <Tooltip title={"Regresar al inicio"}>
            <Button
              container
              justifyContent={"center"}
              alignItems={"center"}
              width={"fit-content"}
              color="inherit"
              onClick={() => navigate("/")}>
              <IconPokeball />
              <Typography variant="h6" textTransform={"none"}>
                Pokémon App
              </Typography>
              <Divider />
            </Button>
          </Tooltip>
          {login && (
            <Tooltip title={"Cerrar sesión"}>
              <Button
                onClick={handleClick}
                color="inherit"
                sx={{
                  width: "max-content",
                  padding: "none",
                  margin: "none",
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{ display: { xs: "none", sm: "block" } }}
                  textTransform={"capitalize"}>
                  {name}
                </Typography>
                <Avatar
                  sx={{
                    marginLeft: "6px",
                    backgroundColor: "rgb(81, 108, 156)",
                  }}
                />
              </Button>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            navigate("/auth");
          }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          cerrar sesión
        </MenuItem>
      </Menu>
    </>
  );
};
