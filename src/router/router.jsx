import { createBrowserRouter } from "react-router-dom";
import { PokemonApp } from "../app/PokemonApp";
import { RegionPage } from "../app/pages/RegionPage";
import { LandingPage } from "../app/pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: 'auth',
  },
  {
    path: '/',
    element: <PokemonApp />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/:regionId',
        element: <RegionPage />
      }
    ]
  }
])