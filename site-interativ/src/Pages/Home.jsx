import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col min-h-screen">
    {/* Cabeçalho */}
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

    {/* Conteúdo principal */}
    <main className="flex-grow flex items-center justify-center bg-white p-10">
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Transformando Educação em Sustentabilidade 🌱💡</h2>
        <p className="text-gray-700">
          No "Verde & Consciente", capacitamos crianças e jovens para serem agentes de mudança no futuro da energia sustentável.
          Com uma plataforma interativa e gratuita, usamos jogos, vídeos e simuladores para ensinar sobre energias renováveis,
          eficiência energética e o impacto das escolhas no meio ambiente.
        </p>
      </div>
    </main>

    {/* Rodapé */}
    <footer className="bg-gray-200 text-center p-4">
      <p>&copy; 2024 Verde & Consciente. Todos os direitos reservados.</p>
    </footer>
  </div>
);

export default Home;
