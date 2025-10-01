"use client";
import { useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppWidget() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const href = useMemo(() => {
    const txt = "Hi Accelerates Online, I need a high-performance website.";
    return `https://wa.me/${number}?text=${encodeURIComponent(txt)}`;
  }, [number]);

  return (
    <a
      href={href}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 text-white shadow-elevate hover:scale-[1.02] transition"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
    <FaWhatsapp size={50} />
    </a>
  );
}