import { Gift, Calendar, Percent } from 'lucide-react';
import BookingButton from './BookingButton';

const Banners = () => {
  const banners = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Oferta Especial',
      subtitle: 'Descuento del 20% en reservas anticipadas',
      description: 'Reserva con 30 días de anticipación y ahorra',
      bgImage: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1200',
      action: 'Reservar Ahora',
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: 'Paquetes de Aventura',
      subtitle: 'Incluye tours y actividades',
      description: 'Descubre la selva con guías expertos',
      bgImage: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200',
      action: 'Ver Paquetes',
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#0a0604]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-80 border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#78673A]/20"
            >
              <div className="absolute inset-0">
                <img
                  src={banner.bgImage}
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#281409]/95 via-[#281409]/80 to-[#281409]/60"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#78673A]/20 backdrop-blur-sm rounded-xl mb-6 text-[#78673A] group-hover:bg-[#78673A] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {banner.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#78673A] transition-colors">
                  {banner.title}
                </h3>

                <p className="text-xl text-[#78673A] font-semibold mb-3">
                  {banner.subtitle}
                </p>

                <p className="text-gray-300 mb-6">
                  {banner.description}
                </p>

                <BookingButton
                  roomName="Suite Amazonas"
                  roomPrice={250}
                  className="w-fit px-6 py-3 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {banner.action}
                </BookingButton>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#78673A] text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  ¡Limitado!
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-[#281409]/60 to-[#78673A]/20 rounded-2xl border border-[#78673A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-12 h-12 text-[#78673A]" />
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">
                Reserva Directa
              </h4>
              <p className="text-gray-300">
                Mejor precio garantizado al reservar con nosotros
              </p>
            </div>
          </div>
          <BookingButton
            roomName="Suite Amazonas"
            roomPrice={250}
            className="px-8 py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap"
          >
            Ver Disponibilidad
          </BookingButton>
        </div>
      </div>
    </section>
  );
};

export default Banners;
