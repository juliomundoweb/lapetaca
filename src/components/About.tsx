import { Heart, Award, Users, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '5000+', label: 'Huéspedes Felices' },
    { number: '20+', label: 'Habitaciones' },
    { number: '100%', label: 'Satisfacción' },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Pasión por el Servicio',
      description: 'Nos dedicamos a superar las expectativas de cada huésped con atención personalizada.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Compromiso Ambiental',
      description: 'Protegemos y preservamos el ecosistema amazónico con prácticas sostenibles.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excelencia',
      description: 'Calidad premium en cada detalle, desde nuestras instalaciones hasta el servicio.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Comunidad Local',
      description: 'Trabajamos con comunidades amazónicas promoviendo el desarrollo sostenible.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0604] via-[#281409] to-[#0a0604]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#78673A] mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-[#78673A] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una historia de conexión con la naturaleza y hospitalidad amazónica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hotel La Petaca"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281409]/80 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-[#78673A]">
              Bienvenidos al Corazón del Amazonas
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Hotel La Petaca nace del amor profundo por la región amazónica y su cultura milenaria.
              Nuestro nombre e identidad visual se inspiran en la rica iconografía de las culturas
              ancestrales de la región, honrando su legado y preservando su esencia.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Desde hace más de 15 años, hemos creado un espacio donde el confort moderno se fusiona
              armoniosamente con la majestuosidad de la selva. Cada rincón de nuestro hotel cuenta
              una historia, cada detalle refleja nuestro compromiso con la excelencia y el respeto
              por el entorno natural.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Ubicados en un privilegiado enclave selvático, ofrecemos a nuestros huéspedes la
              oportunidad única de desconectar del mundo moderno y reconectar con la naturaleza
              en su forma más pura, sin sacrificar el lujo y la comodidad.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-[#78673A]"></div>
              <p className="text-[#78673A] font-semibold italic">
                "Donde la selva abraza tu espíritu"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 rounded-2xl border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#78673A] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#78673A] text-center mb-12">
            Nuestros Valores
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 rounded-2xl border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#78673A]/20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#78673A]/20 rounded-full mb-6 text-[#78673A] group-hover:bg-[#78673A] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#78673A] transition-colors">
                  {value.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Amazonas"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-[#281409]/70 flex items-center justify-center">
            <div className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vive la Experiencia Amazónica
              </h3>
              <p className="text-gray-200 text-lg mb-8">
                Descubre un mundo donde cada momento se convierte en un recuerdo inolvidable
              </p>
              <button className="px-8 py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transform hover:scale-105 transition-all duration-300 shadow-xl">
                Reserva Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
