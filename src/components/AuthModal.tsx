import { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal = ({ isOpen, onClose, onSuccess }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  const { signInWithEmail } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const { error } = await signInWithEmail(email);

    if (error) {
      setError('Error al enviar el enlace. Inténtalo de nuevo.');
      setIsSubmitting(false);
    } else {
      setEmailSent(true);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setEmailSent(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-br from-[#281409] to-[#0a0604] rounded-2xl border border-[#78673A]/30 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!emailSent ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#78673A]/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-[#78673A]" />
                </div>
                <h2 className="text-3xl font-bold text-[#78673A] mb-2">
                  Iniciar Sesión
                </h2>
                <p className="text-gray-400">
                  Te enviaremos un enlace mágico a tu correo
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#0a0604]/50 border border-[#78673A]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#78673A] transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#78673A] text-white font-semibold rounded-lg hover:bg-[#8a7a48] transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Enlace Mágico'}
                </button>
              </form>

              <p className="text-gray-500 text-xs text-center mt-6">
                No necesitas contraseña. Solo ingresa tu email y te enviaremos un enlace seguro.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                ¡Revisa tu Correo!
              </h2>

              <p className="text-gray-300 mb-2">
                Hemos enviado un enlace mágico a:
              </p>

              <p className="text-[#78673A] font-semibold mb-6">
                {email}
              </p>

              <p className="text-gray-400 text-sm mb-8">
                Haz clic en el enlace del correo para iniciar sesión y continuar con tu reserva.
                El enlace es válido por 1 hora.
              </p>

              <button
                onClick={handleClose}
                className="px-6 py-3 bg-[#78673A]/20 text-[#78673A] font-semibold rounded-lg hover:bg-[#78673A]/30 transition-all duration-300"
              >
                Entendido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
