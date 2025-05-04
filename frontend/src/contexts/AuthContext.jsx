import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile as fetchProfile } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      fetchProfile(token)
        .then(setUser)
        .catch(() => {
          localStorage.removeItem('token'); 
          setUser(null);
        })
        .finally(() => setLoading(false)); 
    } else {
      setLoading(false); 
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token); 
    fetchProfile(token).then(setUser);
  };

  const logout = () => {
    localStorage.removeItem('token'); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
