"use client";

import { useBooking } from "./BookingProvider";

interface BookingButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onBeforeOpen?: () => void;
}

export default function BookingButton({
  className,
  style,
  children = "Rezervovat online",
  onBeforeOpen,
}: BookingButtonProps) {
  const { open } = useBooking();

  const handleClick = () => {
    onBeforeOpen?.();
    open();
  };

  return (
    <button onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
