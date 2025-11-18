import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import BookingButton from './BookingButton';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Bienvenidos a La Petaca',
      subtitle: 'Una experiencia única en el corazón del Amazonas',
    },
    {
      image: 'https://images.pexels.com/photos/1907982/pexels-photo-1907982.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Naturaleza Pura',
      subtitle: 'Déjate envolver por la magia de la selva amazónica',
    },
    {
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Confort y Elegancia',
      subtitle: 'Habitaciones diseñadas para tu máximo descanso',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#281409]/70 via-[#281409]/40 to-[#0a0604]/90 z-10"></div>

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#78673A] animate-pulse" />
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow tracking-tight">
                {slide.title}
              </h2>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 text-shadow font-light tracking-wide">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <BookingButton
                  roomName="Suite Amazonas"
                  roomPrice={250}
                  className="px-8 py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Reservar Ahora
                </BookingButton>
                <button className="px-8 py-4 bg-transparent border-2 border-[#78673A] text-[#78673A] font-semibold rounded-lg hover:bg-[#78673A] hover:text-white transform hover:scale-105 transition-all duration-300">
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#78673A]/80 hover:bg-[#78673A] text-white transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#78673A]/80 hover:bg-[#78673A] text-white transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#78673A]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
