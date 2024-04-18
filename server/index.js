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

// List de toutes les recettes
app.get("/recipes", (req, res) => res.json(recipes));

app.get("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  const recipeArray = recipes.find((r) => r.id === recipeId);

  if (recipeArray != null) {
    res.json(recipeArray);
  } else {
    res.sendStatus(404);
  }
});
