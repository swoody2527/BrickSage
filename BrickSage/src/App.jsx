import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Register from "./components/Register"
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let user = ""
  return (
    <main>
        {user ? (
          <Link to="/home">
            <h1 className="main-header">BrickSage</h1>
          </Link>
        ) : (
          <section>
          <Link to="/">
            <h1 className="main-header">BrickSage</h1>
          </Link>
          <Navbar />
          </section>
        )}
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </main>
  );
}

export default App;
