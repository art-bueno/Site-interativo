// src/components/Experimentos.jsx
import React from 'react';

const experiments = [
  { title: 'Forno Solar Mini', instructions: 'Use uma caixa de pizza para fazer um forno solar...' },
  { title: 'Modelo de Turbina Eólica', instructions: 'Crie uma turbina eólica simples usando papel e palitos...' },
];

const Experimentos = () => (
  <div>
    <h2>Experimentos em Casa</h2>
    {experiments.map((exp, index) => (
      <div key={index} className="mb-4">
        <h3>{exp.title}</h3>
        <p>{exp.instructions}</p>
      </div>
    ))}
  </div>
);

export default Experimentos;


