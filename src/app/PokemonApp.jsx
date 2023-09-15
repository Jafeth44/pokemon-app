import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Box, Toolbar } from "@mui/material";
import { Footer } from "./components/Footer";

export const PokemonApp = () => {
  return (
    <>
      <Navbar />
      <Toolbar></Toolbar>{" "}
      {/* solo se usa para darle un spacing debajo de la navbar */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{minHeight: {xs: 'calc(100dvh - 106px)', sm: 'calc(100dvh - 114px)'}}}
        bgcolor={"rgb(241, 241, 241)"}>
        <Outlet />{" "}
        {/* dentro de este componente se van a rutear los componentes hijos */}
      </Box>
      <Footer />
    </>
  );
};
