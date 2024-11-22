import React from 'react';

const Home = () => (
  <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">

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

      <img
        className="w-[750px] h-[500px] mt-6 object-cover rounded-xl shadow-lg"
        src="https://mail.google.com/mail/u/0?ui=2&ik=48741e7373&attid=0.1&permmsgid=msg-a:r1789884658466936766&th=193515ec229eee88&view=fimg&fur=ip&permmsgid=msg-a:r1789884658466936766&sz=s0-l75-ft&attbid=ANGjdJ-XBafHzK8TwdhVTV7estMZtzr0oyjSzHJufv8qSFkqTm6ClvtzFlx7yP5v-PLNxqb3gi-uf-Jl1hPcEjt5EPHHP9mk6ArLbneXy3uS1SIJLpP-LGDEOdNJFZg&disp=emb&realattid=ii_m3s169dw0&zw"
        alt="Indústria"
      />
    </main>
  </div>
);

export default Home;
