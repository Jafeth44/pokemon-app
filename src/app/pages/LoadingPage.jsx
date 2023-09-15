import { Box, Toolbar, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const LoadingPage = () => {
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
        sx={{minHeight: {xs: 'calc(100dvh - 106px)', sm: 'calc(100dvh - 114px)'}}}>
        <Typography>Loading...</Typography>
      </Box>
      <Footer />
    </>
  );
};
