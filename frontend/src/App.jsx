import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Landing from './pages/Landing';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} /> {/* Removed Protected */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}