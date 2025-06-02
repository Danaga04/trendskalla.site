import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "NOSSO SEGREDO",
      description: "Descubra a técnica exclusiva que torna o NY Roll irresistível e único no mercado.",
      image: "https://saludahora99.site/Bb35SLX1O0qECcmw7zC3iA.png"
    },
    {
      title: "30 RECEITAS DELICIOSAS",
      description: "Aprenda a fazer 30 variações incríveis do NY Roll para encantar seus clientes.",
      image: "https://saludahora99.site/5heOKxKQX06zvG5eCi7Bg.png"
    },
    {
      title: "LUCRAR ALTO COM FOLHADOS",
      description: "Entenda como transformar sua paixão em uma fonte de renda lucrativa.",
      image: "https://saludahora99.site/1b9Q3QPLekOiAa6gX3id6g.png"
    },
    {
      title: "PROCESSO COMPLETO",
      description: "Desde a escolha dos ingredientes até a finalização perfeita do doce.",
      image: "https://saludahora99.site/Bb35SLX1O0qECcmw7zC3iA.png"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
            O QUE VOCÊ VAI APRENDER
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle2 size={18} className="mr-2" />
                  <span className="text-sm font-medium">Incluído no curso</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Tudo que você precisa para começar seu negócio de sucesso com NY Rolls está incluído neste curso completo!
          </p>
          <a 
            href="#pricing" 
            className="inline-block px-8 py-3 bg-green-500 text-black rounded-lg font-bold text-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;