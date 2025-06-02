import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-pink-600 text-xl' : 'text-green-500 text-2xl'
          }`}>
            Curso NY Roll
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#video" className="text-gray-700 hover:text-pink-600 transition-colors">O Curso</a></li>
              <li><a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Depoimentos</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors">Preço</a></li>
            </ul>
          </nav>
          <a 
            href="#pricing" 
            className={`px-5 py-2 rounded-lg font-bold transition-all duration-300 ${
              isScrolled 
                ? 'bg-green-500 text-black hover:bg-green-600' 
                : 'bg-pink-600 text-white hover:bg-pink-700'
            }`}
          >
            Comprar Agora
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><a href="#video" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>O Curso</a></li>
              <li><a href="#features" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Benefícios</a></li>
              <li><a href="#testimonials" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
              <li><a href="#pricing" className="block py-2 text-gray-700 hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Preço</a></li>
              <li>
                <a 
                  href="#pricing" 
                  className="block py-2 px-4 bg-green-500 text-black rounded-lg font-bold text-center hover:bg-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comprar Agora
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;