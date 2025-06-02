import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-200 rounded-lg overflow-hidden mb-4">
      <button
        className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
          isOpen ? 'bg-green-50' : 'bg-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-gray-800">{question}</h3>
        {isOpen ? 
          <ChevronUp className="text-green-600 flex-shrink-0" size={20} /> : 
          <ChevronDown className="text-green-600 flex-shrink-0" size={20} />
        }
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white border-t border-green-100">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia em confeitaria?",
      answer: "Não! O curso é indicado tanto para iniciantes quanto para profissionais que desejam aprimorar suas habilidades. Todas as técnicas são ensinadas do zero, com explicações detalhadas e passo a passo."
    },
    {
      question: "O curso é totalmente online?",
      answer: "Sim, você pode acessar o conteúdo de qualquer lugar e no seu próprio ritmo. Uma vez que você adquire o curso, tem acesso vitalício a todo o material, podendo assistir e revisar quando quiser."
    },
    {
      question: "Receberei certificado?",
      answer: "Sim, ao concluir o curso, você receberá um certificado de conclusão que pode ser utilizado para comprovar seus conhecimentos e agregar valor ao seu currículo."
    },
    {
      question: "Como acesso os bônus?",
      answer: "Todos os bônus estarão disponíveis na plataforma do curso após a confirmação da sua inscrição. Você poderá acessá-los imediatamente junto com o conteúdo principal."
    },
    {
      question: "Quais materiais precisarei para fazer o curso?",
      answer: "Na primeira aula, compartilhamos uma lista completa de todos os utensílios e ingredientes necessários. A maioria dos itens são comuns e facilmente encontrados em supermercados e lojas de artigos para confeitaria."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso é vitalício! Uma vez que você compra o curso, pode acessá-lo quando e quantas vezes quiser, sem custos adicionais ou mensalidades."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 animate-fadeIn">
              PERGUNTAS FREQUENTES
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-8">
              Ainda tem dúvidas? Entre em contato conosco:
            </p>
            <a 
              href="mailto:contato@cursonyroll.com" 
              className="inline-block px-6 py-2 bg-pink-600 text-white rounded-lg font-bold shadow-lg hover:bg-pink-700 transition-all"
            >
              Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;