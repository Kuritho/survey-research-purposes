import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CrushQuestionnaire from './CrushQuestionnaire';
import VideoConfession from './VideoConfession';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CrushQuestionnaire />} />
          <Route path="/confession" element={<VideoConfession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;