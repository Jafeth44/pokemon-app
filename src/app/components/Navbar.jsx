import { AppBar, Avatar, Button, IconButton, MenuItem, Toolbar, Tooltip, Typography, Menu, Divider, ListItemIcon } from "@mui/material";
import { Drawer, Box } from '@mui/material';
import IconPokeball from "./pokeball";
import { Logout, Settings, Menu as MenuIcon, Star } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../store/slices/authSlice";

export const Navbar = () => {
  const {isLoggedIn, name} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn) 
      setLogin(true)
  },[isLoggedIn])

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
            padding: '0 0',
          }}>
          
          <>
            <IconButton color="inherit" size="large" onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='300px' textAlign='center' role='presentation'>
                  <Typography variant="h6" component='div'>
                    Menú principal
                  </Typography>
                </Box>
                <Divider/>
                <Box p={1} width='300px' textAlign='left' marginY={2}>
                  <Button>
                    <Star/>
                    <Typography variant="subtitle2" component='div' marginX={2}>
                      Pokémones favoritos
                    </Typography>
                  </Button>
                  
                </Box>
              </Drawer>
          </>                

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
              <Divider/>
            </Button>
          </Tooltip>
          {login && (
            <Tooltip title={"Account settings"}>
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
                <Avatar sx={{ marginLeft: "3px" }} />
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            navigate("/auth");
          }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
