import React from 'react';

const Home = () => (
  <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-white">
    <main className="grid place-items-center p-10">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-green-500">Bem-vindo ao Synergy</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          O Synergy é a solução ideal para indústrias que desejam economizar energia e contribuir para a sustentabilidade.
          Nossa tecnologia inteligente monitora, otimiza e fornece insights para transformar o consumo energético em um
          diferencial competitivo.
        </p>
        <a
          href="/Produto"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
        >
          Conheça o Produto
        </a>
      </div>
    </main>
  </div>
);

export default Home;
