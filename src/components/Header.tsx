import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header = ({ currentSection, setCurrentSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'rooms', label: 'Habitaciones' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#281409]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <Leaf className="w-10 h-10 text-[#78673A] transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 bg-[#78673A] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#78673A] tracking-wider">LA PETACA</h1>
              <p className="text-xs text-[#78673A]/70 tracking-widest">HOTEL AMAZONAS</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  currentSection === item.id
                    ? 'text-[#78673A]'
                    : 'text-gray-300 hover:text-[#78673A]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#78673A] transform origin-left transition-transform duration-300 ${
                    currentSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-[#78673A] hover:text-[#78673A]/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-[#281409]/98 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-medium tracking-wide transition-all duration-300 ${
                currentSection === item.id
                  ? 'text-[#78673A] scale-110'
                  : 'text-gray-300 hover:text-[#78673A] hover:scale-110'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
