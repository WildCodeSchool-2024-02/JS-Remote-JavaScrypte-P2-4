// Load environment variables from .env file
require("dotenv").config();

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
// require("./database/client").checkConnection();

// Import the Express application from app/config.js
const app = require("./app/config");

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

const recipes = require("./recipes.json");

// Recettes "populaires"
app.get("/featured", (req, res) => {
  const filterPopular = recipes.filter((r) => r.popular === true);
  res.json(filterPopular);
});
// Route des filtres
app.get("/filter", (req, res) => {
  const {
    category = "",
    ingredient = "",
    vegetarian,
    country = "",
  } = req.query;
  const filterByCategory =
    category === "" ? recipes : recipes.filter((r) => r.category === category);
  const filterByIngredient =
    ingredient === ""
      ? filterByCategory
      : filterByCategory.filter((f) => f.ingredients.includes(ingredient));
  const booleanString = vegetarian === "true"; // on "transforme" la chaîne de caractères en booléen
  const isVegetarian =
    vegetarian === undefined
      ? filterByIngredient
      : filterByIngredient.filter((f) => f.vegetarian === booleanString);
  const filterByCountry =
    country === ""
      ? isVegetarian
      : isVegetarian.filter((i) => i.country === country);

  const filteredResult = filterByCountry;
  res.json(filteredResult);
});

// Liste de toutes les recettes
app.get("/recipes", (req, res) => res.json(recipes));
