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

import Story from './Components/story';
import Awards from './Components/awards';
import Advisors from './Components/advisors';

import Collection from './Components/collection';
import StudioProcess from './Components/studioProcess';
import NewArrivals from './Components/newArrivals';

import WorkspaceCapsule from './Components/workspaceCapsule';
import TransitTechnicals from './Components/transitTechnicals';
import EveningDroplistPage from './Components/eveningDroplistPage';

import CareersPage from './Components/careersPage'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 1. SCROLL RESET TRIGGER
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      {/* Fires every time a route changes to prevent seeing the footer first */}
      <ScrollToTop /> 

      {/* 2. GLOBAL LAYOUT WRAPPER */}
      <div className="app-layout">
        <Navbar />
        
        {/* 3. WRAP CHANNELS/ROUTES IN MAIN */}
        <main className="main-content">
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <Platform/>
                <Usecase />
                <Company  />
                <Resources />
                <Contact />
              </>
            }/>

            <Route path="/platform" element={<Platform />} />
            <Route path="/usecase" element={<Usecase />} />
            <Route path="/company" element={<Company />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/story" element={<Story />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/advisors" element={<Advisors />} />

            <Route path="/collection" element={<Collection />} />
            <Route path="/studio-process" element={<StudioProcess />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />

            <Route path="/workspace-capsule" element={<WorkspaceCapsule />} />
            <Route path="/transit-technicals" element={<TransitTechnicals />} />
            <Route path="/eveningDroplistPage" element={<EveningDroplistPage />} />

            <Route path="/careersPage" element={<CareersPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}