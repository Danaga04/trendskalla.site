import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-2 animate-fadeIn">
            CURSO NY ROLL:
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6 leading-tight animate-slideUp">
            O DOCE MAIS DESEJADO DO MOMENTO!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fadeIn">
            SUCESSO DE VENDAS NAS REDES SOCIAIS!!! <span className="font-bold text-green-600">Receita Fácil</span>, <span className="font-bold text-green-600">Super barata</span> com <span className="font-bold text-green-600">Alta margem de Lucro</span>
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 animate-fadeIn">
            <a 
              href="#video" 
              className="px-8 py-3 bg-green-500 text-black rounded-lg font-bold text-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
              onClick={scrollToVideo}
            >
              CONHEÇA O CURSO
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-pink-700 transition-all transform hover:-translate-y-1"
            >
              COMPRAR AGORA
            </a>
          </div>
        </div>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-pink-600 transition-colors animate-bounce"
        onClick={scrollToVideo}
      >
        <ChevronDown size={32} />
      </button>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-100 rounded-full opacity-50 animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-100 rounded-full opacity-50 animate-float-delay hidden md:block"></div>
    </section>
  );
};

export default HeroSection;