import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/ChefFeysLogo_1.png";
import { useState } from "react";

const Navbar = ({ handleSubmit, search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <nav className="container mx-auto py-4 flex justify-between items-center flex-col lg:flex-row">
      {/* Logo */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h2 className="text-2xl font-semibold">
          <NavLink to="/" aria-label="Go to homepage">
            <img src={Logo} alt="ChefFeys Logo" width={150} height={150} />
          </NavLink>
        </h2>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleSearch}
            className="text-black focus:outline-none mr-4"
            aria-label="Toggle search">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21h4M5 12a7 7 0 1114 0 7 7 0 01-14 0z"></path>
            </svg>
          </button>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Form */}
      {isSearchOpen && (
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center mt-4 w-full lg:hidden"
          aria-label="Search form">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter items..."
            className="bg-white p-3 px-8 rounded-full outline-none w-full shadow-lg focus:shadow-red-200"
            aria-label="Search items"
          />
        </form>
      )}

      {/* Menu items */}
      <div
        className={`lg:flex items-center lg:gap-10 gap-4 mt-4 lg:mt-0 ${
          isOpen ? "flex flex-col" : "hidden"
        } lg:flex w-full lg:w-auto`}>
        <Link
          to="/"
          className="text-black block px-3 py-2 rounded-md text-base font-medium lg:hidden">
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-black block px-3 py-2 rounded-md text-base font-medium lg:hidden">
          Favorites
        </Link>

        {/* Search Form for Larger Screens */}
        <form
          onSubmit={handleFormSubmit}
          className="hidden lg:flex items-center lg:mr-auto lg:ml-8 w-full lg:w-auto"
          aria-label="Search form">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter items..."
            className="bg-white p-3 px-8 rounded-full outline-none w-full lg:w-96 shadow-lg focus:shadow-red-200"
            aria-label="Search items"
          />
        </form>
      </div>

      {/* Main Navigation Links */}
      <ul className="hidden lg:flex gap-5">
        <li>
          <NavLink
            to="/"
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
            to="/favorites"
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
