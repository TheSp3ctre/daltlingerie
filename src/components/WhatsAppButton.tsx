import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "5511999990000"; // Replace with actual number
    const message = "Olá! Gostaria de saber mais sobre as lingeries.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 group flex items-center justify-center animate-fade-up"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={28} className="fill-white text-white" />
            <span className="absolute right-full mr-3 bg-white text-rose-ink px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Fale Conosco
            </span>
        </a>
    );
};

export default WhatsAppButton;
