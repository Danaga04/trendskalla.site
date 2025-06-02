import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
            O QUE NOSSOS ALUNOS ESTÃO DIZENDO
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured testimonial */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://saludahora99.site/48x71jrMPU6Z4YNhMhwlTw.jpg" 
                  alt="Depoimento principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote size={48} className="absolute -top-4 -left-2 text-pink-100" />
                  <p className="text-lg text-gray-700 relative z-10 mb-6">
                    "Eu nunca imaginei que seria tão fácil começar um negócio de confeitaria! O curso NY Roll mudou minha vida completamente. Comecei vendendo para amigos e família, e agora tenho uma pequena empresa com encomendas diárias!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Clara</h4>
                    <p className="text-gray-600">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://saludahora99.site/mbuFYSglk2R5mXV3UUsjg.jpg",
                text: "Estou faturando mais de R$2.000 por semana com os NY Rolls! Melhor investimento que já fiz.",
                name: "Renata S.",
                location: "Rio de Janeiro, RJ"
              },
              {
                image: "https://saludahora99.site/r6UCoFiyH02AhirV1zt4Q.jpg",
                text: "As receitas são super fáceis de seguir e o resultado é perfeito! Meus clientes estão viciados.",
                name: "Marcos T.",
                location: "Belo Horizonte, MG"
              },
              {
                image: "https://saludahora99.site/ecx0rHWJgEmYfLQvGCdkVA.jpg",
                text: "Comecei como hobby e hoje já tenho meu próprio espaço. Tudo graças ao curso NY Roll!",
                name: "Patricia L.",
                location: "Curitiba, PR"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <img 
                  src={testimonial.image} 
                  alt={`Depoimento ${index + 1}`} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;