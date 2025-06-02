import React from 'react';
import { Users, MessageCircle, Share2 } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
              COMUNIDADE "ALTA CONFEITARIA"
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="https://saludahora99.site/icone-perfil-mulher.png" 
                      alt="Perfil de mulher segurando o doce" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-pink-600 text-white rounded-full p-2">
                    <Users size={24} />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Conecte-se com confeiteiros apaixonados!
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Junte-se à nossa comunidade exclusiva de confeiteiros apaixonados! Compartilhe experiências, tire dúvidas e cresça junto com outros alunos que estão transformando suas vidas com o NY Roll.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-pink-600">
                    <MessageCircle size={20} className="mr-2" />
                    <span className="font-medium">Suporte exclusivo</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Share2 size={20} className="mr-2" />
                    <span className="font-medium">Compartilhe experiências</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <a 
              href="#pricing" 
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-pink-700 transition-all transform hover:-translate-y-1"
            >
              QUERO FAZER PARTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;