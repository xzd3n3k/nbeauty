"use client";

import { createContext, useContext, useState } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  open: () => void;
}

const BookingContext = createContext<BookingContextType>({ open: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  );
}
