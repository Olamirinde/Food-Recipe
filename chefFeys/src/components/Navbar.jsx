import { NavLink } from "react-router-dom";

const Navbar = ({ handleSubmit, search, setSearch }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission
    handleSubmit(); // Calls the passed in handleSubmit function
  };

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row md:flex-col lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
          aria-label="Go to homepage">
          ChefFeys
        </NavLink>
      </h2>
      <form onSubmit={handleFormSubmit} aria-label="Search form">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter items..."
          className="bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-200"
          aria-label="Search items"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-black hover:text-gray-700 duration-300"
            }
            aria-label="Go to home page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-black hover:text-gray-700 duration-300"
            }
            aria-label="Go to favorites page">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
