import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Toolbar } from "@mui/material"
import { Footer } from "./components/Footer"

export const PokemonApp = () => {
  return (
    <>
      <Navbar />
      <Toolbar></Toolbar> {/* solo se usa para darle un spacing debajo de la navbar */}
      <Outlet /> {/* dentro de este componente se van a rutear los componentes hijos */}
      <Footer />
    </>
  )
}