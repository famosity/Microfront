import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './page/notFound';
import Home from './page/home';
import { HostProvider } from './component/context';
import logo from '../src/assets/logo.svg'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element={
          <HostProvider>
            <Home/>
          </HostProvider>
        } />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="*" element={
          <HostProvider>
            <NotFound/>
          </HostProvider>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
