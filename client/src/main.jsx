import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import FilterPage from "./pages/FilterPage";
import LandingPage from "./pages/LandingPage";

// const allRecipes = fetch("http://localhost:3310/recipes");

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      const allRecipes = fetch("http://localhost:3310/recipes");
      return allRecipes;
    },
    id: "app",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/search",
        element: <FilterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
