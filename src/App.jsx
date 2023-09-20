import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from './Root/Main/main';
import Navigation from './Root/Navigation/navigation';
import FDashboard from './Root/Dashboard/FDashboard';

function App() {

  return (
    <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/navigation" element={<Navigation/>} />
        <Route path="/dashboard" element={<FDashboard/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
