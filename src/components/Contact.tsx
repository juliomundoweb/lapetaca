import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      details: ['+51 987 654 321', '+51 912 345 678'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@lapetaca.com', 'reservas@lapetaca.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      details: ['Región Amazonas', 'Chachapoyas, Perú'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horario',
      details: ['Lun - Dom: 24 horas', 'Atención continua'],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0604] via-[#281409] to-[#0a0604]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#78673A] mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-[#78673A] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte a planificar tu escapada perfecta al Amazonas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                ¿Tienes preguntas sobre nuestras habitaciones, servicios o reservas? No dudes en contactarnos.
                Nuestro equipo está disponible 24/7 para asistirte.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 p-6 rounded-2xl border border-[#78673A]/20 hover:border-[#78673A]/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#78673A]/20 rounded-xl mb-4 text-[#78673A]">
                    {info.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 p-8 rounded-2xl border border-[#78673A]/20">
              <h4 className="text-white font-semibold mb-4 text-xl">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#78673A]/20 rounded-xl text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#78673A]/20 rounded-xl text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#78673A]/20 rounded-xl text-[#78673A] hover:bg-[#78673A] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 border border-[#78673A]/20">
              <img
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ubicación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281409]/80 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">
                    En el Corazón del Amazonas
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Chachapoyas, Región Amazonas, Perú
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#281409]/60 to-[#281409]/30 p-8 rounded-2xl border border-[#78673A]/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Solicita Información
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                    placeholder="+51 987 654 321"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-gray-300 mb-2 text-sm font-medium">
                    Fecha de Llegada
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-gray-300 mb-2 text-sm font-medium">
                    Fecha de Salida
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-gray-300 mb-2 text-sm font-medium">
                  Número de Huéspedes
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                >
                  <option value="1">1 Huésped</option>
                  <option value="2">2 Huéspedes</option>
                  <option value="3">3 Huéspedes</option>
                  <option value="4">4 Huéspedes</option>
                  <option value="5+">5+ Huéspedes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all resize-none"
                  placeholder="Cuéntanos sobre tus necesidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
