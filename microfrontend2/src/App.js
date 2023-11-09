import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ActorList from './component/actorList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ElSeñorDeLosAnillos" element={<ActorList language={"English"} />} />
        <Route path="/" element={<Navigate to="/ElSeñorDeLosAnillos" />} />
        <Route path="*" element={<Navigate to="/ElSeñorDeLosAnillos"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
