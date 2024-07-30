import Loading from "../../components/Loading";
import RecipeDetails from "../../components/RecipeDetails";

const Home = ({ isLoading, recipeList }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {recipeList && recipeList.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
          {recipeList.map((item) => (
            <RecipeDetails item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-300">
            Please search something else
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
