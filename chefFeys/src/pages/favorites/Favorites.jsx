import { useState } from "react";
import RecipeDetails from "../../components/RecipeDetails";

const Favorites = () => {
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorite ? (
        favorite.map((item) => <RecipeDetails item={item} key={item.id} />)
      ) : (
        <div>
          <p className="text-3xl h-screen text-center font-semibold text-gray-300 shadow-xl">
            Nothing is added in favorite
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
