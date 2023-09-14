import { createBrowserRouter } from "react-router-dom";
import { PokemonApp } from "../app/PokemonApp";
import { RegionPage } from "../app/pages/RegionPage";
import { LandingPage } from "../app/pages/LandingPage";
import { regionLoader } from "../data/loaders/region.loader";

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
        element: <RegionPage />,
        loader: regionLoader
      }
    ]
  }
])