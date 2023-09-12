import { createBrowserRouter } from "react-router-dom";
import { PokemonApp } from "../app/PokemonApp";
import { RegionPage } from "../app/pages/RegionPage";

export const router = createBrowserRouter([
  {
    path: 'auth',
  },
  {
    path: '/',
    element: <PokemonApp />,
    children: [
      {
        path: '/:regionId',
        element: <RegionPage />
      }
    ]
  }
])