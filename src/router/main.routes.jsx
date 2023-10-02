import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { PokemonApp } from "../app/PokemonApp";
import { RegionPage } from "../app/pages/RegionPage";
import { LandingPage } from "../app/pages/LandingPage";
import { regionLoader } from "../data/loaders/region.loader";
import { pokemonLoader } from "../data/loaders/pokemon.loader";
import { PokemonDetailPage } from "../app/pages/PokemonDetailPage";
import { AuthLayout } from "../app/auth/AuthLayout";
import { LoginPage } from "../app/auth/pages/LoginPage";
import { RegisterPage } from "../app/auth/pages/RegisterPage";
import { store } from "../store/store";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <PokemonApp />,
    loader: () => {
      const isLoggedIn = store.getState().auth.isLoggedIn;
      if (isLoggedIn) return null;
      return redirect('/auth/login');
    },
    children: [
      {
        path: "*",
        element: <Navigate to={'/'}/>,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/region/:regionId",
        element: <RegionPage />,
        loader: regionLoader,
      },
      {
        path: "/pokemon/:pokemonId",
        element: <PokemonDetailPage />,
        loader: ({params}) => {
          pokemonLoader({params})
          
        },
      },
    ],
    
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    loader: () => {
      const isLoggedIn = store.getState().auth.isLoggedIn;
      if (!isLoggedIn) return null;
      return redirect('/');
    },
    children: [
      {
        path: '',
        element: <Navigate to={'/auth/login'}/>
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
]);
