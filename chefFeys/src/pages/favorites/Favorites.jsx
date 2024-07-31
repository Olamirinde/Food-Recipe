import RecipeDetails from "../../components/RecipeDetails";

const Favorites = ({ favorite, setFavorite }) => {
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {Array.isArray(favorite) && favorite.length > 0 ? (
        favorite.map((item) => <RecipeDetails item={item} key={item.id} />)
      ) : (
        <div className="w-full">
          <p className="text-3xl h-screen text-center font-semibold text-gray-300 shadow-xl">
            Nothing is added to favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
