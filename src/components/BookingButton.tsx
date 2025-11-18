import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import BookingModal from './BookingModal';

interface BookingButtonProps {
  roomName: string;
  roomPrice: number;
  className?: string;
  children?: React.ReactNode;
}

const BookingButton = ({ roomName, roomPrice, className, children }: BookingButtonProps) => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleClick = () => {
    if (user) {
      setShowBookingModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setShowBookingModal(true);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children || 'Reservar Ahora'}
      </button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      {user && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          roomName={roomName}
          roomPrice={roomPrice}
        />
      )}
    </>
  );
};

export default BookingButton;
