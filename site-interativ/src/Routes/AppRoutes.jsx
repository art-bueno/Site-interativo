import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Produto from '../components/Produto';
import SobreNós from '../components/SobreNós';
import Footer from '../Pages/footer';
import Header from '../Pages/Header';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

const AppRoutes = () => {
  const [userName, setUserName] = useState('');

  // Recupera o nome do usuário do localStorage ao carregar a aplicação
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Lógica de login
  const handleLogin = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name); // Salva o nome no localStorage
  };

  // Lógica de logout
  const handleLogout = () => {
    setUserName('');
    localStorage.removeItem('userName'); // Remove o nome do localStorage
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header userName={userName} onLogout={handleLogout} />
        <Routes>
          {/* Redireciona para Login se o usuário não estiver logado */}
          <Route
            path="/"
            element={userName ? <Navigate to="/Home" /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Produto" element={<Produto />} />
          <Route path="/SobreNós" element={<SobreNós userName={userName} />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
