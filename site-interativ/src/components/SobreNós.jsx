// import Header from '../Pages/Header';
// import Footer from '../Pages/footer'; 
import React from 'react';

const SobreNós = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      {/* <Header />  */}
      
      <main className="grid place-items-center bg-white p-10">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-black">
            Sobre a Synergy
          </h1>
          <p className="text-lg text-gray-900 leading-relaxed">
            Fundada com a missão de transformar o consumo energético em uma prática inteligente e sustentável, 
            a Synergy é uma empresa inovadora que combina tecnologia de ponta e consciência ambiental. Nosso 
            objetivo é capacitar empresas a otimizar seus recursos, economizar energia e adotar práticas que 
            beneficiem não apenas seus negócios, mas também o planeta.
          </p>
          <p className="text-lg text-gray-900 leading-relaxed">
            Com uma equipe apaixonada por tecnologia e sustentabilidade, a Synergy é guiada por três pilares principais:
            <strong> inovação, eficiência e impacto positivo.</strong> Cada projeto desenvolvido por nós reflete 
            nosso compromisso em criar soluções tecnológicas que atendam às demandas de indústrias modernas enquanto 
            promovem um futuro mais sustentável.
          </p>
          <p className="text-lg text-gray-900 leading-relaxed">
            Desde o início, acreditamos que pequenas mudanças podem gerar grandes impactos. Por isso, trabalhamos ao lado 
            de nossos parceiros para identificar oportunidades, reduzir desperdícios e alcançar resultados expressivos. 
            Nosso sucesso é medido pelo impacto que criamos para nossos clientes e para o meio ambiente.
          </p>
          <h2 className="text-2xl font-semibold text-black">
            Synergy: Juntos, construímos um futuro mais eficiente e sustentável.
          </h2>
        </div>
      </main>
      
      {/* <Footer />  */}
    </div>
  );
};

export default SobreNós;

