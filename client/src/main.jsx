import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import RecipeDetailsPage from "./pages/recipeDetails/RecipeDetailsPage"



import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/recipe",
        element: <RecipeDetailsPage />
      },  
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
