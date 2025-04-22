import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="logo">Errantry.xyz</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={
            <main>
              <section className="hero">
                <h1>Welcome to Errantry.xyz</h1>
                <p>Exploring the digital landscape with purpose and creativity</p>
              </section>

              <section id="about" className="section">
                <h2>About</h2>
                <p>Your digital journey starts here. We create meaningful experiences in the digital world.</p>
              </section>

              <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                  <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of your first project</p>
                  </div>
                  <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of your second project</p>
                  </div>
                </div>
              </section>

              <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Get in touch with us to discuss your next project</p>
              </section>
            </main>
          } />
        </Routes>

        <footer>
          <p>&copy; 2024 Errantry.xyz. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
