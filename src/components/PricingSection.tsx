import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 animate-fadeIn">
              OFERTA ESPECIAL
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Curso Completo NY Roll + 7 Bônus Exclusivos
                </h3>
                
                <div className="mb-8">
                  <div className="text-gray-400 text-lg mb-1">Você receberá:</div>
                  <ul className="space-y-3">
                    {[
                      "Acesso completo ao curso NY Roll",
                      "30 receitas exclusivas e lucrativas",
                      "Suporte na comunidade VIP",
                      "Técnicas profissionais de preparo",
                      "Estratégias de marketing e vendas",
                      "7 bônus exclusivos",
                      "Acesso vitalício ao conteúdo",
                      "Atualizações gratuitas"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-black">
                          <Check size={14} />
                        </div>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-pink-800/30 rounded-lg mb-8">
                  <p className="text-pink-200 text-sm font-medium">
                    ⚡ OFERTA POR TEMPO LIMITADO: Os primeiros 100 alunos recebem acesso a uma masterclass exclusiva com uma chef premiada!
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/3 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-gray-400 line-through text-xl mb-2">De R$849,92</div>
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-green-400 font-bold mr-2">Por apenas</span>
                    <div className="text-4xl font-bold text-green-400">R$27,90</div>
                  </div>
                  <div className="text-sm text-gray-400 mb-6">Pagamento único</div>
                  
                  <a 
                    href="https://pay.kiwify.com.br/SiCcaEk" 
                    className="block w-full py-4 bg-green-500 text-black rounded-lg font-bold text-xl shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
                  >
                    COMPRAR AGORA
                  </a>
                  
                  <div className="flex items-center justify-center mt-4 text-gray-400 text-sm">
                    <ArrowRight size={14} className="mr-1" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 text-gray-400">
            <p>
              Pagamento único. Sem mensalidades ou cobranças escondidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;