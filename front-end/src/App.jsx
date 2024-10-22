import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'; 
import Homepage from './components/Homepage';
import './index.css';

const App = () => {
  return (
    <div className="app-container bg-gray-900 text-white min-h-screen p-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/tasks" 
          element={
            <div className="app-container bg-gray-900 text-white min-h-screen p-6">
              <TaskList />
            </div>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;