import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Card, ListGroup, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import './Homepage.css'; // Import custom CSS file

const tasksFromDB = [
  { id: 1, name: 'Complete React Project', date: new Date(2024, 9, 20), completed: false },
  { id: 2, name: 'Buy Groceries', date: new Date(2024, 9, 21), completed: false },
  { id: 3, name: 'Gym Workout', date: new Date(2024, 9, 22), completed: true }
];

function Homepage() {
  const [quote, setQuote] = useState('');
  const [score, setScore] = useState(100); // Example score
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTasks, setFilteredTasks] = useState([]);

  const quotes = [
    "Don't stop until you're proud.",
    "The key to success is to focus on goals, not obstacles.",
    "Success is the sum of small efforts, repeated day in and day out.",
        "Stay focused, work hard, and success will follow.",
        "Do something today that your future self will thank you for.",
        "Remember each step matters like the last step",
        "Consistency is the key to success"
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setTasks(tasksFromDB); // Simulate loading tasks from DB
  }, []);

  useEffect(() => {
    const tasksForSelectedDate = tasks.filter(task => 
      task.date.toDateString() === selectedDate.toDateString()
    );
    setFilteredTasks(tasksForSelectedDate);
  }, [selectedDate, tasks]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> {/* Aligns items to the right */}
        <Nav.Link href="/tasks" className="nav-link">Tasks</Nav.Link>
        <Nav.Link href="#friends" className="nav-link">Friends</Nav.Link>
        <Nav.Link href="/profile" className="nav-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="profile"
            className="profile-icon"
          />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Container fluid className="main-content">
        {/* Left-side Calendar */}
        <Col md={3} className="calendar-container">
          <h5 className="calendar-title">Calendar</h5>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="custom-calendar"
          />
          {filteredTasks.length > 0 && (
            <div className="tasks-for-day">
              <p>Tasks on {selectedDate.toDateString()}:</p>
              <ul>
                {filteredTasks.map(task => (
                  <li key={task.id}>{task.name}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>

        {/* Main Content (Quotes and Task Card) */}
        <Col md={9} className="content-area">
          <div className="quote-container">
            <h1 className="quote-text">{quote}</h1>
          </div>

          {/* <Card className="task-card" style={{}}>
            <Card.Header className="task-card-header">Your Tasks Today</Card.Header>
            <ListGroup variant="flush">
              {tasks.filter(task => !task.completed).map(task => (
                <ListGroup.Item key={task.id} className="task-item">
                  {task.name}
                </ListGroup.Item>
              ))}
              {tasks.filter(task => !task.completed).length === 0 && (
                <ListGroup.Item className="task-item">All tasks completed!</ListGroup.Item>
              )}
            </ListGroup>
          </Card> */}

          <div className="score-dashboard">
            <p>Your Current Score: <strong>{score}</strong> points</p>
          </div>
        </Col>
        <Card className="task-card" style={{}}>
            <Card.Header className="task-card-header">Your Tasks Today</Card.Header>
            <ListGroup variant="flush">
              {tasks.filter(task => !task.completed).map(task => (
                <ListGroup.Item key={task.id} className="task-item">
                  {task.name}
                </ListGroup.Item>
              ))}
              {tasks.filter(task => !task.completed).length === 0 && (
                <ListGroup.Item className="task-item">All tasks completed!</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
      </Container>
    </div>
  );
}

// //--------->to connect to the back-End
// useEffect(() => {
//   fetch('/api/tasks') // Replace with your actual API endpoint
//     .then(response => response.json())
//     .then(data => setTasks(data));
// }, []);


export default Homepage;
