import { useState, useEffect } from 'react';
import { X, Calendar, Users as UsersIcon, DollarSign, CheckCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Profile } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomPrice: number;
}

const BookingModal = ({ isOpen, onClose, roomName, roomPrice }: BookingModalProps) => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [specialRequests, setSpecialRequests] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (data) {
      setProfile(data);
      setFullName(data.full_name || '');
      setPhone(data.phone || '');
    }
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const calculateTotal = () => {
    return calculateNights() * roomPrice;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!user) {
      setError('Debes iniciar sesión primero');
      setIsSubmitting(false);
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('La fecha de salida debe ser posterior a la fecha de entrada');
      setIsSubmitting(false);
      return;
    }

    try {
      if (fullName || phone) {
        await supabase
          .from('profiles')
          .update({
            full_name: fullName || null,
            phone: phone || null,
          })
          .eq('id', user.id);
      }

      const { error: reservationError } = await supabase
        .from('reservations')
        .insert({
          user_id: user.id,
          room_name: roomName,
          check_in: checkIn,
          check_out: checkOut,
          guests: parseInt(guests),
          total_price: calculateTotal(),
          special_requests: specialRequests || null,
          status: 'pending',
        });

      if (reservationError) throw reservationError;

      setBookingComplete(true);
    } catch (err) {
      setError('Error al crear la reserva. Inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCheckIn('');
    setCheckOut('');
    setGuests('1');
    setSpecialRequests('');
    setBookingComplete(false);
    setError('');
    onClose();
  };

  const handleSignOut = async () => {
    await signOut();
    handleClose();
  };

  if (!isOpen) return null;

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#281409] to-[#0a0604] rounded-2xl border border-[#78673A]/30 shadow-2xl my-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!bookingComplete ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#78673A] mb-2">
                  Reservar Habitación
                </h2>
                <p className="text-gray-400 mb-4">
                  {roomName} - ${roomPrice}/noche
                </p>
                {user && (
                  <div className="flex items-center justify-between p-3 bg-[#78673A]/10 border border-[#78673A]/20 rounded-lg">
                    <span className="text-sm text-gray-300">
                      Sesión: <span className="text-[#78673A] font-semibold">{user.email}</span>
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#78673A] transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-300 mb-2 text-sm font-medium">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                      placeholder="+51 987 654 321"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-gray-300 mb-2 text-sm font-medium">
                      Fecha de Entrada *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="date"
                        id="checkIn"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={minDate}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-gray-300 mb-2 text-sm font-medium">
                      Fecha de Salida *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="date"
                        id="checkOut"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || minDate}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-gray-300 mb-2 text-sm font-medium">
                    Número de Huéspedes *
                  </label>
                  <div className="relative">
                    <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white focus:outline-none focus:border-[#78673A] transition-all"
                    >
                      <option value="1">1 Huésped</option>
                      <option value="2">2 Huéspedes</option>
                      <option value="3">3 Huéspedes</option>
                      <option value="4">4 Huéspedes</option>
                      <option value="5">5+ Huéspedes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-gray-300 mb-2 text-sm font-medium">
                    Solicitudes Especiales
                  </label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all resize-none"
                    placeholder="Preferencias de cama, alergias, etc."
                  ></textarea>
                </div>

                {checkIn && checkOut && (
                  <div className="p-6 bg-gradient-to-br from-[#78673A]/20 to-[#78673A]/10 border border-[#78673A]/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-[#78673A]" />
                      <h3 className="text-xl font-bold text-white">Resumen de la Reserva</h3>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Noches:</span>
                        <span className="font-semibold">{calculateNights()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Precio por noche:</span>
                        <span className="font-semibold">${roomPrice}</span>
                      </div>
                      <div className="pt-2 mt-2 border-t border-[#78673A]/30 flex justify-between text-lg">
                        <span className="font-bold text-[#78673A]">Total:</span>
                        <span className="font-bold text-[#78673A]">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !checkIn || !checkOut}
                  className="w-full py-4 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Procesando...' : 'Confirmar Reserva'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                ¡Reserva Confirmada!
              </h2>

              <p className="text-gray-300 mb-6">
                Tu reserva ha sido creada exitosamente. Recibirás un correo de confirmación con todos los detalles.
              </p>

              <div className="p-6 bg-[#78673A]/10 border border-[#78673A]/30 rounded-xl mb-6 text-left">
                <h3 className="text-[#78673A] font-bold mb-3">Detalles de la Reserva:</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Habitación:</span>
                    <span className="font-semibold">{roomName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Entrada:</span>
                    <span className="font-semibold">{new Date(checkIn).toLocaleDateString('es-PE')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salida:</span>
                    <span className="font-semibold">{new Date(checkOut).toLocaleDateString('es-PE')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Huéspedes:</span>
                    <span className="font-semibold">{guests}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#78673A]/30">
                    <span>Total:</span>
                    <span className="font-bold text-[#78673A]">${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transition-all duration-300 transform hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
