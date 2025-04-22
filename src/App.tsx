import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogEditor from './components/admin/BlogEditor';
import BackgroundTransition from './components/common/BackgroundTransition';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <BackgroundTransition />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/blog" element={<BlogEditor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
