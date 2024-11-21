import React from 'react';
// import Header from '../Pages/Header';
// import Footer from '../Pages/footer';

const Home = () => (
  <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
    {/* <Header /> */}

    {/* Conteúdo */}
    <main className="grid place-items-center bg-white p-10">
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-semibold text-black">
          Synergy: Transformando Energia em Eficiência
        </h2>
        <p className="text-gray-900 font-sans text-lg leading-relaxed">
          No Synergy, acreditamos que eficiência energética é o futuro da indústria. Nossa plataforma combina tecnologia 
          avançada e inovação para monitorar, otimizar e reduzir o consumo energético de forma inteligente, sustentável e acessível.
        </p>
        <p className="text-gray-900 font-sans text-lg leading-relaxed">
          Permitimos que empresas identifiquem desperdícios energéticos, monitorem o desempenho de máquinas em tempo real 
          e recebam recomendações automáticas para melhorar a eficiência e reduzir custos.
        </p>
        <p className="text-gray-900 font-sans text-lg leading-relaxed">
          Nosso objetivo é não apenas ajudar as indústrias a economizar, mas também a adotar práticas mais sustentáveis 
          que beneficiem o planeta. Cada watt economizado é um passo em direção a um futuro mais limpo e consciente.
        </p>
      </div>
    </main>

    {/* <Footer /> */}
  </div>
);

export default Home;

