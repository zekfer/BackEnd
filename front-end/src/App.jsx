// // src/App.jsx
// import React from 'react';
// import Login from './components/Login';
// import TaskList from './components/TaskList';
// import './index.css';

// const App = () => {
//   return (
//       <Login />
//     // <div className="app-container bg-gray-900 text-white min-h-screen p-6">
//     //   <TaskList />
//     // </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/tasklist" 
          element={
            <div className="app-container bg-gray-900 text-white min-h-screen p-6">
              <TaskList />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

