import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    {/* Cabeçalho */}
    <header>
      <h1>Bem-vindo ao Verde & Consciente</h1>
    </header>

    {/* Navegação */}
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/quiz">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/experimentos">
              Experimentos
            </Link>
          </li>
          <li>
            <Link  to="/mapa-energia">
              Mapa de Energia
            </Link>
          </li>
          <li>
            <Link  to="/simulador">
              Simulador de Energia
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* Rodapé */}
    <footer>
      <div>
        <p>&copy; 2024 Verde & Consciente. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
);

export default Home;
