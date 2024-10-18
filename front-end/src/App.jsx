// src/App.jsx
import React from 'react';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  return (
    <div className="app-container bg-gray-900 text-white min-h-screen p-6">
      <TaskList />
    </div>
  );
};

export default App;
