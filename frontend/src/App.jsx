import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Client from "./pages/Clientdash";
import ClientHome from "./pages/Clienthome";
import Settings from "./pages/Settings"
import Project from './pages/Project';
import Jobs from './pages/Jobs';
import Messages from './pages/Messages';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Client" element={<Client/>}/>
        <Route path="/Clienthome" element={<ClientHome/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Project" element={<Project/>}/>
          <Route path="/Jobs" element={<Jobs/>}/>
          <Route path="/Messages" element={<Messages/>}/>
        
      </Routes>
    </BrowserRouter>
  );
    
}

export default App
