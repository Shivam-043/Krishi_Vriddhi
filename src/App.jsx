import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from './Root/Main/main';
import Navigation from './Root/Navigation/navigation';
import FDashboard from './Root/Dashboard/FDashboard';
import { LoginSignup } from './Root/Auth/loginSignup';

function App() {

  return (
    <BrowserRouter>
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/navigation" element={<Navigation/>} />
        <Route path="/dashboard" element={<FDashboard/>} />
        <Route path="/auth" element={<LoginSignup/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
