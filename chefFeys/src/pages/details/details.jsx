import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({ favorite, setFavorite }) => {
  const { id } = useParams();
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setRecipeDetailsData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    getRecipeDetails();
  }, [id]);

  function handleAddToFavorite(getCurrentItem) {
    let cpyFavorite = [...favorite];
    const index = cpyFavorite.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavorite.push(getCurrentItem);
    } else {
      cpyFavorite.splice(index, 1);
    }

    setFavorite(cpyFavorite);
  }

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">Error: {error}</div>;
  }

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">Error: {error}</div>;
  }

  if (!recipeDetailsData) {
    return <div className="text-center py-10">No data available</div>;
  }

  if (!recipeDetailsData || !recipeDetailsData.recipe) {
    return <div className="text-center py-10">No data available</div>;
  }
  const recipe = recipeDetailsData.recipe;

  if (!recipe) {
    return <div className="text-center py-10">No recipe details available</div>;
  }
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl group">
            {recipe.image_url ? (
              <img
                src={recipe.image_url}
                alt="recipeDetailsImage"
                className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 ">
                No Image Available
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm text-cyan-700 font-medium">
            {recipe.publisher || "Unknown Publisher"}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            {recipe.title || "Untitled Recipe"}
          </h3>
          <div>
            {/* <button
              onClick={() => handleAddToFavorite(recipe)}
              className={`p-3 px-6 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md ${
                favorite.some((item) => item.id === recipe.id)
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
              disabled={favorite.some((item) => item.id === recipe.id)}>
              {favorite.some((item) => item.id === recipe.id) !== -1
                ? "Already in Favorites"
                : "Save as favorite"}
            </button> */}
            <button
              onClick={() => handleAddToFavorite(recipe)}
              className="p-3 px-6 rounded-lg bg-black text-white text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md">
              {favorite &&
              favorite.length > 0 &&
              favorite.findIndex((item) => item.id === recipe.id) !== -1
                ? "Remove from favorites"
                : "Add to favorite"}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <span className="text-xl sm:text-2xl font-semibold text-black">
          Ingredients
        </span>
        <ul className="flex flex-col gap-3 mt-4">
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-lg sm:text-xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-lg sm:text-xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Details;
