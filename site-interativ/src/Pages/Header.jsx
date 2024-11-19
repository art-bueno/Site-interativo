import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-green-500 text-center p-4">
    <h1 className="text-3xl font-bold text-white">Bem-vindo ao Verde & Consciente</h1>
    <nav className="mt-4">
      <ul className="grid grid-cols-4 gap-4">
        <li className="text-white">
          <Link to="/quiz" className="hover:underline">Quiz</Link>
        </li>
        <li className="text-white">
          <Link to="/experimentos" className="hover:underline">Experimentos</Link>
        </li>
        <li className="text-white">
          <Link to="/mapa-energia" className="hover:underline">Mapa de Energia</Link>
        </li>
        <li className="text-white">
          <Link to="/simulador" className="hover:underline">Simulador de Energia</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
