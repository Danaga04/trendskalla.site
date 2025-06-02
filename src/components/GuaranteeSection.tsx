import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white p-4 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://saludahora99.site/wwnpAakXsk61C6rUjxLg.png" 
                    alt="Selo de garantia" 
                    className="w-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                  <ShieldCheck size={24} />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                GARANTIA TOTAL DE 7 DIAS
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Estamos tão confiantes na qualidade do nosso curso que oferecemos uma garantia de satisfação de 7 dias. Se você não ficar satisfeito com o conteúdo, basta solicitar o reembolso.
              </p>
              <div className="p-4 bg-white rounded-lg shadow-inner">
                <p className="text-gray-800 font-medium">
                  Experimente o curso sem riscos! Se em até 7 dias você perceber que não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;