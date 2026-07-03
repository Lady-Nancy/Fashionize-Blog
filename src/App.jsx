import React from 'react';
import './App.css'; 
import Home from "./Components/home";
import Company from "./Components/company";
import Contact from "./Components/contact";
import Navbar from "./Components/navbar";
import Platform from "./Components/platform";
import Resources from "./Components/resources";
import Usecase from "./Components/usecase";
import Footer from "./Components/footer"



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
   <Router>
      {/* 1. Render your actual Navbar component here */}
      <Navbar />
      
      <Routes>
          <Route path='/' element={<>
          <Home />
          <Platform/>
          <Usecase />
          <Company  />
          <Resources />
          <Contact />
          </>
          }/>

        <Route path="/" element={<Home />} /> 
        <Route path="/platform" element={<Platform />} />
        <Route path="/usecase" element={<Usecase />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
      <Footer />
    </Router>
  );
}