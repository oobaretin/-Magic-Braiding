'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingModal } from './BookingModal';

interface BookingContextType {
  openBookingModal: (serviceId?: string) => void;
  closeBookingModal: () => void;
  isBookingModalOpen: boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openBookingModal = (serviceId?: string) => {
    setSelectedService(serviceId);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <BookingContext.Provider
      value={{
        openBookingModal,
        closeBookingModal,
        isBookingModalOpen,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
