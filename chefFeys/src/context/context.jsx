import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
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
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setSearch("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        isLoading,
        recipeList,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
