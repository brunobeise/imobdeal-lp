"use client";

import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function WhatsAppButton({ 
  message, 
  children, 
  className = "" 
}: { 
  message: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const { trackWhatsAppContact } = useFacebookPixel();

  const handleClick = () => {
    trackWhatsAppContact();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5551995529578?text=${encodedMessage}`, "_blank");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
