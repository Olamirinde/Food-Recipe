import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import Loading from "../../components/Loading";
import RecipeDetails from "../../components/RecipeDetails";

const Home = () => {
  const { recipeList, isLoading } = useContext(GlobalContext);

  if (isLoading) return <Loading />;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList ? (
        recipeList.map((item) => <RecipeDetails item={item} key={item.id} />)
      ) : (
        <div>
          <p className="text-3xl h-screen text-center font-semibold text-gray-300 shadow-xl">
            Please seach something else
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
