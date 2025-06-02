import React from 'react';
import { Gift, Check } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonusList = [
    "Receitas secretas de recheios gourmet",
    "Guia completo de precificação",
    "Checklist de utensílios essenciais",
    "Modelo de cardápio atrativo",
    "Consultoria de marketing digital",
    "Grupo VIP no WhatsApp",
    "Certificado de conclusão"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 text-pink-600 mb-4">
              <Gift size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
              BÔNUS EXCLUSIVOS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Garantindo sua vaga hoje você ainda terá direito a 7 bônus exclusivos:
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  7 Bônus Incríveis Inclusos:
                </h3>
                <ul className="space-y-4">
                  {bonusList.map((bonus, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">
                        <Check size={16} />
                      </div>
                      <span className="text-lg text-gray-700">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-200 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-pink-600 mb-2">Valor Total</h3>
                      <p className="text-gray-500 mb-4">Se vendidos separadamente</p>
                      <div className="text-3xl font-bold text-green-600 mb-4">R$ 397,00</div>
                      <div className="py-3 px-4 bg-pink-100 rounded-lg text-pink-800 font-bold mb-4">
                        INCLUSOS GRATUITAMENTE
                      </div>
                      <p className="text-sm text-gray-600">
                        Ao adquirir o Curso NY Roll hoje
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#pricing" 
              className="inline-block px-8 py-3 bg-green-500 text-black rounded-lg font-bold text-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
            >
              QUERO GARANTIR MEUS BÔNUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;