import { Wifi, Tv, Wind, Coffee, Users, Maximize } from 'lucide-react';
import BookingButton from './BookingButton';

interface RoomsProps {
  featured: boolean;
}

const Rooms = ({ featured }: RoomsProps) => {
  const rooms = [
    {
      id: 1,
      name: 'Suite Amazonas',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 250,
      capacity: 2,
      size: '45m²',
      description: 'Suite espaciosa con vista panorámica a la selva',
      amenities: ['Wifi', 'TV', 'Aire Acondicionado', 'Mini Bar'],
      featured: true,
    },
    {
      id: 2,
      name: 'Habitación Selva',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 180,
      capacity: 2,
      size: '35m²',
      description: 'Confort y naturaleza en perfecta armonía',
      amenities: ['Wifi', 'TV', 'Aire Acondicionado', 'Balcón'],
      featured: true,
    },
    {
      id: 3,
      name: 'Habitación Doble',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 150,
      capacity: 2,
      size: '30m²',
      description: 'Ideal para parejas que buscan tranquilidad',
      amenities: ['Wifi', 'TV', 'Ventilador', 'Escritorio'],
      featured: false,
    },
    {
      id: 4,
      name: 'Habitación Familiar',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 300,
      capacity: 4,
      size: '55m²',
      description: 'Perfecta para familias, con espacio y comodidad',
      amenities: ['Wifi', 'TV', 'Aire Acondicionado', 'Mini Bar'],
      featured: true,
    },
    {
      id: 5,
      name: 'Habitación Individual',
      image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 120,
      capacity: 1,
      size: '25m²',
      description: 'Espacio acogedor para viajeros solitarios',
      amenities: ['Wifi', 'TV', 'Ventilador', 'Escritorio'],
      featured: false,
    },
    {
      id: 6,
      name: 'Suite Premium',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 350,
      capacity: 3,
      size: '60m²',
      description: 'La máxima expresión de lujo y confort',
      amenities: ['Wifi', 'TV', 'Aire Acondicionado', 'Jacuzzi'],
      featured: true,
    },
  ];

  const displayRooms = featured ? rooms.filter(room => room.featured) : rooms;

  const getIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi className="w-4 h-4" />;
      case 'TV':
        return <Tv className="w-4 h-4" />;
      case 'Aire Acondicionado':
      case 'Ventilador':
        return <Wind className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0604] to-[#281409]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#78673A] mb-4">
            {featured ? 'Nuestras Habitaciones' : 'Catálogo Completo'}
          </h2>
          <div className="w-24 h-1 bg-[#78673A] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cada habitación está diseñada para brindarte el máximo confort en medio de la naturaleza amazónica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-[#281409]/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-[#78673A]/20 hover:border-[#78673A]/60 hover:shadow-2xl hover:shadow-[#78673A]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281409] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-[#78673A] text-white px-4 py-2 rounded-full font-bold text-sm">
                  ${room.price}/noche
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#78673A] mb-3">{room.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{room.description}</p>

                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.capacity} personas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-[#78673A]/20 text-[#78673A] px-3 py-1 rounded-full text-xs"
                    >
                      {getIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <BookingButton
                  roomName={room.name}
                  roomPrice={room.price}
                  className="w-full py-3 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg"
                >
                  Reservar Ahora
                </BookingButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
