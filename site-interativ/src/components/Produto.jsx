
import React from 'react';
// import Header from '../Pages/Header';
// import Footer from '../Pages/footer';

const Produto = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      {/* <Header />  */}

      <main className="grid place-items-center bg-white p-10">
        <div className="grid gap-6 text-center">
          <h1 className="text-4xl font-bold text-black">
            Synergy: Reduza Custos e Consuma Energia com Inteligência
          </h1>
          <p className="text-center text-lg text-gray-900 leading-relaxed max-w-2xl">
            O Synergy é a solução ideal para empresas que buscam reduzir custos e otimizar o consumo de energia. 
            Com ele, você monitora em tempo real o uso energético da sua operação, identifica desperdícios e recebe 
            recomendações práticas para melhorar a eficiência.
          </p>
          <p className="text-center text-lg text-gray-900 leading-relaxed max-w-2xl">
            Além de economizar, você contribui com a sustentabilidade, reduzindo a pegada de carbono e alinhando sua 
            empresa às metas ambientais modernas. Fácil de usar, o Synergy se adapta à sua operação, ajudando você a 
            economizar tempo e dinheiro enquanto cuida do planeta.
          </p>
          <h2 className="text-2xl font-semibold text-black">
            Synergy: Consuma menos, economize mais e lidere a transformação.
          </h2>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Produto;
