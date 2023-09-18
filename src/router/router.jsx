import { createBrowserRouter } from "react-router-dom";
import { PokemonApp } from "../app/PokemonApp";
import { RegionPage } from "../app/pages/RegionPage";
import { LandingPage } from "../app/pages/LandingPage";
import { regionLoader } from "../data/loaders/region.loader";
import { pokemonLoader } from "../data/loaders/pokemon.loader";
import { PokemonDetailPage } from "../app/pages/PokemonDetailPage";

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
        path: '/region/:regionId',
        element: <RegionPage />,
        loader: regionLoader,
      },
      {
        path: '/pokemon/:pokemonId',
        element: <PokemonDetailPage />,
        loader: pokemonLoader,
      }
    ]
  }
])