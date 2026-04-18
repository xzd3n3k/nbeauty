"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onBeforeOpen?.();
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={className} style={style}>
        {children}
      </button>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
