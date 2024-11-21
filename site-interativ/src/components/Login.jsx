import React, { useState } from 'react';
import Header from '../Pages/Header';
import Footer from '../Pages/footer';

const Login = ({ onLogin }) => {
    <Header />
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    if (userName.trim()) {
      onLogin(userName); // Chama a função de login passada como prop
    } else {
      alert('Por favor, insira um nome válido.');
    }
  };

  return (
    <div className="grid place-items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
        >
          Entrar
        </button>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Login;
