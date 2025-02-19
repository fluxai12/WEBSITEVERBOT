import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Documentation } from './pages/Documentation';
import { Terminal } from './pages/Terminal';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen bg-white text-black"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/features"
          element={
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen bg-white text-black"
            >
              <Features />
            </motion.div>
          }
        />
        <Route
          path="/docs"
          element={
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen bg-white text-black"
            >
              <Documentation />
            </motion.div>
          }
        />
        <Route
          path="/terminal"
          element={
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen"
            >
              <Terminal />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;