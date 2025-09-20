import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-bold">Logo</div>
      <nav className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansion</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
      </nav>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <input
          type="search"
          placeholder="Search"
          className="border rounded px-2 py-1"
        />
        <button className="text-blue-600">Sign In</button>
        <button className="text-blue-600">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
