import React from 'react';
import Header from '../Pages/Header'
import Footer from '../Pages/footer';

const Home = () => (
  <div className="flex flex-col min-h-screen">
  <Header />

    {/* Conteúdo*/}
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

  <Footer/>
  </div>
);

export default Home;
