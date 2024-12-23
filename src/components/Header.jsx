import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      {/* Top Header Section */}
      <div className=" container mx-auto flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 text-xl font-bold text-gray-800">
          <Link to="/">
            Shop <span>Center</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-40 hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-1 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button className="px-4 py-1 bg-blue-600 text-white font-medium rounded-r hover:bg-blue-500 border border-transparent">
            Search
          </button>
        </div>

        {/* Sign-In Button */}
        <div className="flex-shrink-0 space-x-3">
          <Link to="/cart">
            <button className="px-4 py-1 font-medium text-white bg-blue-600 rounded hover:bg-blue-500">
              cart
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-1 font-medium text-white bg-blue-600 rounded hover:bg-blue-500">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-2 md:hidden">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-500">
            Search
          </button>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="bg-gray-200 md:relative fixed bottom-0 w-full">
        <ul className="container mx-auto flex flex-wrap justify-center md:justify-start md:px-8">
          <li className="p-2 md:p-4">
            <NavLink
              to="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </NavLink>
          </li>
          <li className="p-2 md:p-4">
            <NavLink
              to="/shop"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Shop
            </NavLink>
          </li>
          <li className="p-2 md:p-4">
            <NavLink
              to="/category"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Category
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
