import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from './Root/Main/main';

function App() {

  return (
    <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
