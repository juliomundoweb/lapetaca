import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      location: 'Lima, Perú',
      rating: 5,
      text: 'Una experiencia absolutamente mágica. La atención del personal es excepcional y las habitaciones son hermosas. Despertar con los sonidos de la selva es indescriptible.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Carlos Mendoza',
      location: 'Bogotá, Colombia',
      rating: 5,
      text: 'El hotel perfecto para desconectar. La combinación de lujo y naturaleza es impecable. Los tours por la selva fueron increíbles. Definitivamente volveremos.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ana Martínez',
      location: 'Buenos Aires, Argentina',
      rating: 5,
      text: 'Nuestra luna de miel fue perfecta gracias a La Petaca. El restaurante es exquisito y las instalaciones impecables. Un lugar donde se respira paz y tranquilidad.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Roberto Silva',
      location: 'São Paulo, Brasil',
      rating: 5,
      text: 'La mejor experiencia hotelera que he tenido. El compromiso ambiental del hotel es admirable y la conexión con la cultura local es auténtica.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Laura Fernández',
      location: 'Madrid, España',
      rating: 5,
      text: 'Vine desde España y valió cada kilómetro. El personal es cálido, las habitaciones cómodas y la naturaleza que te rodea es simplemente espectacular.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#281409] to-[#0a0604] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#78673A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#78673A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#78673A] mb-4">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <div className="w-24 h-1 bg-[#78673A] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Las experiencias de quienes nos visitaron hablan por sí solas
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === 1 ? 'scale-105' : 'scale-95 opacity-70'
                }`}
              >
                <div className="bg-gradient-to-br from-[#281409]/80 to-[#281409]/40 p-8 rounded-2xl border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-300 h-full">
                  <Quote className="w-12 h-12 text-[#78673A]/30 mb-6" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#78673A] text-[#78673A]" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-[#78673A]/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#78673A]"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="bg-gradient-to-br from-[#281409]/80 to-[#281409]/40 p-8 rounded-2xl border border-[#78673A]/20">
              <Quote className="w-12 h-12 text-[#78673A]/30 mb-6" />

              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#78673A] text-[#78673A]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#78673A]/20">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#78673A]"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-[#78673A]/80 hover:bg-[#78673A] text-white transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-[#78673A]/80 hover:bg-[#78673A] text-white transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-[#78673A]'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
