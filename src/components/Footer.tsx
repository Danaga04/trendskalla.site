import React from 'react';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Curso NY Roll</h3>
              <p className="text-gray-400 mb-6 max-w-xs">
                Transforme sua paixão por confeitaria em um negócio lucrativo com o doce mais desejado do momento.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="mailto:contato@cursonyroll.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-10 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Início</a></li>
                <li><a href="#video" className="text-gray-400 hover:text-green-400 transition-colors">O Curso</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-green-400 transition-colors">Benefícios</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">Depoimentos</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors">Preço</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">Email: contato@cursonyroll.com</p>
              <p className="text-gray-400 mb-2">Horário: Seg-Sex, 9h às 18h</p>
              <a 
                href="https://pay.kiwify.com.br/SiCcaEk" 
                className="inline-block px-6 py-2 mt-4 bg-green-500 text-black rounded-lg font-bold hover:bg-green-600 transition-all"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="mb-2">© 2025 Curso NY Roll. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
              <span>|</span>
              <a href="#" className="hover:text-green-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>

      {/* Pixel tracking script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.pixelId = "683b3ed3b67da67997e52c5d";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `
      }} />
    </footer>
  );
};

export default Footer;