import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";

const App = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setIsLoading(false);
        setSearch("");
        navigate("/");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setSearch("");
    }
  }

  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} recipeList={recipeList} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorite={favorite} setFavorite={setFavorite} />}
        />
        <Route
          path="/recipe-item/:id"
          element={<Details favorite={favorite} setFavorite={setFavorite} />}
        />
      </Routes>
    </div>
  );
};

export default App;
