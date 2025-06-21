import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import TimelineSection from './components/TimelineSection';
import CollaborationPortal from './components/CollaborationPortal';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ExpertiseSection />
              <TimelineSection />
              <PortfolioGallery />
              <CollaborationPortal />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;