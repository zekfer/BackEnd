import React, { useState } from 'react';
import { FaBug, FaCheckCircle, FaFileAlt, FaCogs } from 'react-icons/fa';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: "e730", title: "Generating the driver won't do anything, we need to quantify the ...", type: "Bug", status: "Canceled", priority: "Medium" },
    { id: "ab78", title: "Write unit tests for new API endpoints", type: "Documentation", status: "Todo", priority: "Medium" },
    { id: "b4a3", title: "Implement user authentication using OAuth 2.0", type: "Feature", status: "Todo", priority: "High" },
    { id: "13c9", title: "Update dependencies to latest versions", type: "Documentation", status: "Canceled", priority: "Medium" },
    { id: "7c74", title: "Design UI for new dashboard component", type: "Feature", status: "InProgress", priority: "Medium" },
    { id: "ef9c", title: "Optimize database queries for improved performance", type: "Bug", status: "Todo", priority: "High" },
    { id: "c932", title: "Implement feature to export data in CSV format", type: "Feature", status: "Backlog", priority: "Medium" },
    { id: "f4e6", title: "Fix critical security vulnerability in authentication system", type: "Bug", status: "InProgress", priority: "High" },
    { id: "90d5", title: "Create documentation for the new API endpoints", type: "Documentation", status: "Done", priority: "Medium" },
    { id: "2db8", title: "Investigate potential solutions for scalability issues", type: "Bug", status: "InProgress", priority: "High" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusSortOrder, setStatusSortOrder] = useState("asc");
  const [prioritySortOrder, setPrioritySortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    type: "Bug",
    status: "Todo",
    priority: "Medium"
  });

  const statusOrder = ["Todo", "InProgress", "Done", "Canceled"];
  const rowsPerPage = 5;

  const handleSortByStatus = () => {
    setStatusSortOrder(statusSortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortByPriority = () => {
    setPrioritySortOrder(prioritySortOrder === "asc" ? "desc" : "asc");
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredTasks.length / rowsPerPage)));
  };

  const handleCreateTask = () => {
    setShowForm(!showForm);
    setShowSuccessMessage(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
    setShowForm(false);
    setShowSuccessMessage(true);
    setNewTask({
      title: "",
      type: "Bug",
      status: "Todo",
      priority: "Medium"
    });
  };

  const filteredTasks = tasks
    .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (statusSortOrder === "asc") {
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      } else {
        return statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status);
      }
    })
    .sort((a, b) => {
      if (prioritySortOrder === "asc") {
        return a.priority.localeCompare(b.priority);
      } else {
        return b.priority.localeCompare(a.priority);
      }
    });

  const paginatedTasks = filteredTasks.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-6xl font-bold">Welcome back, Ali!</h1>
      <p>Here's a list of your tasks!</p>

      <div className="mt-4 flex justify-between">
        <input
          type="text"
          className="rounded p-2 bg-gray-800 text-white"
          placeholder="Filter tasks by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-700 text-white rounded" onClick={handleSortByStatus}>
            Status
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded" onClick={handleSortByPriority}>
            Priority
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleCreateTask}>
          Create Task
        </button>
      </div>

      {showForm && (
        <form className="mt-4 p-4 bg-gray-800 rounded" onSubmit={handleAddTask}>
          <div className="mb-4">
            <label className="block text-white">Title</label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Type</label>
            <select
              name="type"
              value={newTask.type}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Documentation">Documentation</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Status</label>
            <select
              name="status"
              value={newTask.status}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="Todo">Todo</option>
              <option value="InProgress">InProgress</option>
              <option value="Done">Done</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Priority</label>
            <select
              name="priority"
              value={newTask.priority}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Add Task
          </button>
        </form>
      )}

      {showSuccessMessage && (
        <div className="mt-4 p-4 bg-green-400 text-white rounded">
          Task has been created successfully!
        </div>
      )}

      <table className="table-auto w-full mt-6">
        <thead>
          <tr className="text-left text-gray-400">
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-700">
              <td>
                {task.type === "Bug" && <FaBug className="text-red-500" />}
                {task.type === "Feature" && <FaCogs className="text-blue-500" />}
                {task.type === "Documentation" && <FaFileAlt className="text-yellow-500" />}
              </td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between text-gray-400">
        <span>Rows per page: {rowsPerPage}</span>
        <div className="flex space-x-2">
          <button onClick={() => setCurrentPage(1)}>&lt;&lt;</button>
          <button onClick={handlePreviousPage}>&lt;</button>
          <span>Page {currentPage} of {Math.ceil(filteredTasks.length / rowsPerPage)}</span>
          <button onClick={handleNextPage}>&gt;</button>
          <button onClick={() => setCurrentPage(Math.ceil(filteredTasks.length / rowsPerPage))}>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;