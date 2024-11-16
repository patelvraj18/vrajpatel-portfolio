/* eslint-disable no-unused-vars */
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import NotFound from "./components/NotFound";
import { useEffect } from "react";

// Add this component to handle the redirect
const RedirectToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && !window.location.hash) {
      window.location.replace('/#/');
    }
  }, [location]);

  return null;
};

const App = () => {
  const MainContent = () => (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Experience /> */}
      <Works />
      <Tech />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );

  return (
    <HashRouter>
      <RedirectToHash />
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;