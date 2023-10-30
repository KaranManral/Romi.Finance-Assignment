import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Earn from "./Earn";
import AlertComponent from "./AlertComponent";

export default function App() {
  return (
    <>
      <AlertComponent />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/earn" element={<Earn />} />
          <Route path="*" element={<h1>Page not yet available</h1>} />
        </Routes>
      </Router>
    </>
  );
}
