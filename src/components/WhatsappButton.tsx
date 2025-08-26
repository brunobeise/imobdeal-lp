"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function WhatsAppButton() {
  const { trackWhatsAppContact } = useFacebookPixel();

  const handleClick = () => {
    trackWhatsAppContact();
  };

  return (
    <a
      href="https://wa.me/5121605371"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-[200]"
      style={{ width: "60px", height: "60px" }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
