import { Utensils, Wifi, Car, Dumbbell, Waves, Trees, Mountain, Camera } from 'lucide-react';

interface ServicesProps {
  preview: boolean;
}

const Services = ({ preview }: ServicesProps) => {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restaurante Gourmet',
      description: 'Cocina local e internacional con ingredientes frescos de la región',
      featured: true,
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: 'Tours Ecológicos',
      description: 'Explora la selva amazónica con guías expertos',
      featured: true,
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Piscina Natural',
      description: 'Relájate en nuestra piscina rodeada de naturaleza',
      featured: true,
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'WiFi Gratuito',
      description: 'Conexión de alta velocidad en todas las áreas',
      featured: true,
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Transporte',
      description: 'Servicio de traslado desde y hacia el aeropuerto',
      featured: false,
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Gimnasio',
      description: 'Mantén tu rutina con equipos modernos',
      featured: false,
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Senderismo',
      description: 'Rutas guiadas por paisajes increíbles',
      featured: false,
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Observación de Fauna',
      description: 'Descubre la biodiversidad amazónica',
      featured: false,
    },
  ];

  const displayServices = preview ? services.filter(s => s.featured) : services;

  return (
    <section className="py-20 px-4 bg-[#0a0604]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#78673A] mb-4">
            {preview ? 'Servicios Destacados' : 'Todos Nuestros Servicios'}
          </h2>
          <div className="w-24 h-1 bg-[#78673A] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experiencias únicas diseñadas para hacer de tu estadía un momento inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 p-8 rounded-2xl border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#78673A]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#78673A]/0 to-[#78673A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#78673A]/20 rounded-xl mb-6 text-[#78673A] group-hover:bg-[#78673A] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#78673A] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transform hover:scale-105 transition-all duration-300 shadow-xl">
              Ver Todos los Servicios
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
