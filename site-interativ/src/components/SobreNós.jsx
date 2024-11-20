import Header from '../Pages/Header';
import Footer from '../Pages/footer'; 
import React from 'react';

const SobreNós = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      
      <main className="flex-grow bg-white p-10">
        {/* conteúdo futuro */}
        <h2 className="text-center text-gray-500"> </h2>
      </main>
      
      <Footer /> 
    </div>
  );
};

export default SobreNós;
