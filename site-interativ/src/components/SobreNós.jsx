import React from 'react';

const SobreNós = ({ userName }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-white">
      <main className="grid place-items-center p-10">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-green-500">
            Sobre a Synergy {userName ? `, ${userName}` : ''}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fundada com a missão de transformar o consumo energético em uma prática inteligente e sustentável, a Synergy
            é uma empresa inovadora que combina tecnologia de ponta e consciência ambiental.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Desde o início, acreditamos que pequenas mudanças podem gerar grandes impactos. Por isso, trabalhamos ao lado
            de nossos parceiros para identificar oportunidades, reduzir desperdícios e alcançar resultados expressivos.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SobreNós;
