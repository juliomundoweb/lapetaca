import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentSection: (section: string) => void;
}

const Footer = ({ setCurrentSection }: FooterProps) => {
  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#281409] border-t border-[#78673A]/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="w-10 h-10 text-[#78673A]" />
              <div>
                <h3 className="text-xl font-bold text-[#78673A] tracking-wider">LA PETACA</h3>
                <p className="text-xs text-[#78673A]/70 tracking-widest">HOTEL AMAZONAS</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Conectando el lujo con la naturaleza en el corazón del Amazonas peruano.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#78673A]/20 rounded-lg text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#78673A]/20 rounded-lg text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#78673A]/20 rounded-lg text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'about', label: 'Nosotros' },
                { id: 'rooms', label: 'Habitaciones' },
                { id: 'services', label: 'Servicios' },
                { id: 'contact', label: 'Contacto' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-[#78673A] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Restaurante Gourmet</li>
              <li className="text-gray-400">Tours Ecológicos</li>
              <li className="text-gray-400">Piscina Natural</li>
              <li className="text-gray-400">WiFi Gratuito</li>
              <li className="text-gray-400">Transporte</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#78673A] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Región Amazonas<br />Chachapoyas, Perú
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#78673A] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  +51 987 654 321<br />+51 912 345 678
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#78673A] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  info@lapetaca.com<br />reservas@lapetaca.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#78673A]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Hotel La Petaca. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#78673A] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-[#78673A] transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0604] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-xs">
            Inspirado en la rica iconografía de las culturas amazónicas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
