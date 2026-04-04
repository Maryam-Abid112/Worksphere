import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import './App.css'

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
    
}

export default App
