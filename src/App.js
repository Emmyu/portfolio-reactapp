import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Container>
          <AnimatePresence mode="wait"> {/* Replace exitBeforeEnter with mode='wait' */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
            
            </Routes>
          </AnimatePresence>
        </Container>
      </>
    </Router>
  );
}

export default App;
