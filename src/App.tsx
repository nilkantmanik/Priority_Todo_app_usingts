import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Updatefrom from "./components/Updatefrom";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskupdate/:id" element={<Updatefrom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
