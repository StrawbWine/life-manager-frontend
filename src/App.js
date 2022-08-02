import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FoodPage from "./components/FoodPage/FoodPage";
import FoodPortionPage from "./components/FoodPortionPage/FoodPortionPage";
import useToken from "./hooks/useToken";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const [token, setToken] = useToken()

  const logout = () => {
    setToken("")
  }

  return (    
    <Router>
      {(token == null || token == "") ? <LoginPage setToken={setToken} /> :
      <div className="App">
        <Navbar logout={logout} />        
        <Routes>
          <Route path="/food" element={<FoodPage token={token} />} />
          <Route path="/foodportion" element={<FoodPortionPage token={token} />} />
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
        </Routes>
      </div>}
    </Router>
  );
}

export default App;
