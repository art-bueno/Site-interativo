import React from 'react';
import Header from '../Pages/Header'; 
import Footer from '../Pages/footer';

const experiments = [
  { title: 'Forno Solar Mini', instructions: 'Use uma caixa de pizza para fazer um forno solar...' },
  { title: 'Modelo de Turbina Eólica', instructions: 'Crie uma turbina eólica simples usando papel e palitos...' },
];

const Experimentos = () => (
  <div className="flex flex-col min-h-screen">
    <Header /> 
    
    <main className="flex-grow bg-white p-10">
      <h2 className="text-2xl font-semibold mb-4">Experimentos em Casa</h2>
      {experiments.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="text-gray-700">{exp.instructions}</p>
        </div>
      ))}
    </main>
    
    <Footer />
  </div>
);

export default Experimentos;



