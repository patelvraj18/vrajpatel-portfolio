/* eslint-disable no-unused-vars */
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import NotFound from "./components/NotFound";

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
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/404" element={<NotFound />} />
          {/* Redirect all unknown paths to 404 page */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;