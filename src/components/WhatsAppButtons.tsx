"use client";

export default function WhatsAppButton({ 
  message, 
  children, 
  className = "" 
}: { 
  message: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5551995529578?text=${encodedMessage}`, "_blank");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
