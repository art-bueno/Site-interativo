import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-green-500 text-center p-4">
    <h1 className="text-3xl font-bold text-white">Bem vindo a Synergy</h1>
    <nav className="mt-4">
      <ul className="grid grid-cols-4 gap-4">
        <li className="text-white">
          <Link to="/Home" className="hover:underline">Home</Link>
        </li>
        <li className="text-white">
          <Link to="/Produto" className="hover:underline">O Produto</Link>
        </li>
        <li className="text-white">
          <Link to="/Dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li className="text-white">
          <Link to="/SobreNós" className="hover:underline">Sobre Nós</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
