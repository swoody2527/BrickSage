import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import "./App.css";

function App() {
  let user = ""
  return (
    <main>
        {user ? (
          <Link to="/home">
            <h1 className="main-header">BrickSage</h1>
          </Link>
        ) : (
          <Link to="/">
            <h1 className="main-header">BrickSage</h1>
          </Link>
        )}
        <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
