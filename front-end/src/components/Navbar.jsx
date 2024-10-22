import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Taskify Hub</h1>
      <div>
        <Link to="/home" className="mx-4 text-white">Home</Link>
        <Link to="/tasks" className="mx-4 text-white">Tasks</Link>
        <Link to="/profile" className="mx-4 text-white">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
