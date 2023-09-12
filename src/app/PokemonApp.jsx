import { Outlet } from "react-router-dom"

export const PokemonApp = () => {
  return (
    <>
      <h1>Pokemon App</h1>
      <Outlet />
    </>
  )
}