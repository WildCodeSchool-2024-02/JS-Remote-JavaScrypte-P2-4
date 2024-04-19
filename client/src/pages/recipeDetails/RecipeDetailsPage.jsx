import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`http://localhost:3310/recipes/${id}`);
      const data = await response.json();

      setRecipe(data);
      setLoader(true);
    };
    fetchRecipe();
  }, [id]);

  return (
    <div>
      {loader ? recipe.recipe : <h3>...</h3>}
      {loader ? (
        <>
          <h1>{recipe.name}</h1>
          <figure>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.recipe}</p>
          </figure>
        </>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}
