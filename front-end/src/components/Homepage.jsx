import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Sample quotes
const quotes = [
  "Don't stop until you're proud.",
  "The key to success is to focus on goals, not obstacles.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Stay focused, work hard, and success will follow.",
  "Do something today that your future self will thank you for.",
  "Remember each step matters like the last step",
  "Consistency is the key to success"
];

function App() {
  const [quote, setQuote] = useState('');
  const [score, setScore] = useState(0); // Example score

  // Set a random quote each time the component renders
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div style={{ backgroundColor: '#0e0725', minHeight: '100vh', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Taskify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#tasks">Tasks</Nav.Link>
            <Nav.Link href="#friends">Friends</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#profile">
              <img
                src="https://via.placeholder.com/30" // Updated image link, ensure it's a valid image source
                alt="User Profile"
                style={{ borderRadius: '50%', width: '30px', height: '30px' }}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ flex: 1 }}>
        {/* Quote Section */}
        <div className="quote-container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 'bold' }}>{quote}</h1>
        </div>

        {/* Score Dashboard */}
        <div style={{ marginTop: '50px', color: '#ffffff', fontSize: '1.2rem' }}>
          <p>Your Current Score: <strong>{score}</strong> points</p>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;