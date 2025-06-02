import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl mb-10 animate-fadeIn">
            <div 
              id="vid_683dc6a39250e951ef89d6b4" 
              style={{ position: 'relative', width: '100%', padding: '133.33333333333331% 0 0' }}
            >
              <img 
                id="thumb_683dc6a39250e951ef89d6b4" 
                src="https://images.converteai.net/80d0b89d-7901-4c62-bf15-807e2dab2483/players/683dc6a39250e951ef89d6b4/thumbnail.jpg" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                alt="thumbnail" 
                className="rounded-xl"
              />
              <div 
                id="backdrop_683dc6a39250e951ef89d6b4" 
                style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <a 
              href="#pricing" 
              className="inline-block px-8 py-4 bg-green-500 text-black rounded-lg font-bold text-xl shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1 animate-pulse"
            >
              ACESSAR CONTEÚDO
            </a>
          </div>

          <p className="text-center text-lg md:text-xl text-blue-600 font-semibold mb-10 max-w-3xl mx-auto animate-fadeIn">
            O DOCE MUNDIAL MAIS FAMOSO DAS REDES SOCIAIS AGORA NA PALMA DA SUA MÃO PARA VOCÊ SAIR NA FRENTE E FATURAR ALTO COM OS QUERIDINHOS DO MOMENTO!!!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10 animate-fadeIn">
            <div className="overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <img 
                src="https://saludahora99.site/Bb35SLX1O0qECcmw7zC3iA.png" 
                alt="ny roll 1" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <img 
                src="https://saludahora99.site/5heOKxKQX06zvG5eCi7Bg.png" 
                alt="ny roll 2" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <img 
                src="https://saludahora99.site/1b9Q3QPLekOiAa6gX3id6g.png" 
                alt="ny roll 3" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/80d0b89d-7901-4c62-bf15-807e2dab2483/players/683dc6a39250e951ef89d6b4/player.js",
          s.async=!0,document.head.appendChild(s);
        `
      }} />
    </section>
  );
};

export default VideoSection;