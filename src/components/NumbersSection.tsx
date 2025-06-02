import React from 'react';
import { Users, Gift, Globe, BookOpen } from 'lucide-react';

const NumbersSection: React.FC = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "3.772",
      title: "ALUNOS",
      description: "Já transformaram suas vidas com o NY Roll."
    },
    {
      icon: <Gift size={32} />,
      number: "7",
      title: "BÔNUS",
      description: "Exclusivos para potencializar suas vendas."
    },
    {
      icon: <Globe size={32} />,
      number: "100%",
      title: "ONLINE",
      description: "Aprenda no seu ritmo, de onde estiver."
    },
    {
      icon: <BookOpen size={32} />,
      number: "100%",
      title: "EXPLICAÇÃO",
      description: "Do início ao fim, sem segredos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
            NÚMEROS IMPRESSIONANTES
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-black mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">{stat.number}</h3>
              <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de alunos satisfeitos e comece sua jornada de sucesso com o NY Roll!
          </p>
          <a 
            href="#pricing" 
            className="inline-block px-8 py-3 bg-green-500 text-black rounded-lg font-bold text-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
          >
            QUERO FAZER PARTE
          </a>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;