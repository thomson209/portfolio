import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Projects from './contents/Projects';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import { Container } from '@material-ui/core';

//routing
function App() {
  return (
    
    <Router>
    <Container>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/projects">
    <Projects />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </Container>
    </Router>
  
    );
  }
  
  export default App;
