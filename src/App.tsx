import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
