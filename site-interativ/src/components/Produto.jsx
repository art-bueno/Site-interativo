import React from 'react';

const Produto = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-gray-50">
      <main className="grid place-items-center p-10">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-green-500">
            Synergy: Reduza Custos e Consuma Energia com Inteligência
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            O Synergy é a solução ideal para empresas que buscam reduzir custos e otimizar o consumo de energia. Com ele,
            você monitora em tempo real o uso energético da sua operação, identifica desperdícios e recebe recomendações
            práticas para melhorar a eficiência.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">
            Juntos, transformamos o futuro energético.
          </h2>
          <img src="https://files.oaiusercontent.com/file-EbSTjFEtMlVEauXG9smCQT53?se=2024-11-22T00%3A55%3A50Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcb263fa3-27c1-4d32-b8b7-056d58d79f7c.webp&sig=7SEluNLkCHRmtoYybNYPhnRjZiNsVaTOeT5ASx/G5Qo%3D" alt="Prototipo" />
        </div>
      </main>
    </div>
  );
};

export default Produto;
