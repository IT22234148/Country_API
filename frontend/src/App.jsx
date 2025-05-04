import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
          <Route path="/home" element={<Protected><Home /></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}