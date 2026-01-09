import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const location = useLocation();

  return (
    <>
      {/* NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />

          <Route
            path="/booking"
            element={
              <PageTransition>
                <Booking />
              </PageTransition>
            }
          />

          <Route
            path="/gallery"
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/admin-login"
            element={
              <PageTransition>
                <AdminLogin />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
