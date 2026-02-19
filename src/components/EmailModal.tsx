import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import FloatingLabelInput from "./FloatingLabelInput";

interface EmailModalProps {
  product: Product | null;
  onClose: () => void;
}

const EmailModal = ({ product, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        style={{ background: "rgba(28,18,21,0.4)", backdropFilter: "blur(8px)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-10 max-w-[420px] w-full relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-rose-ink-secondary hover:text-rose-ink" aria-label="Fechar">
            <X size={20} strokeWidth={1.5} />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <span className="inline-block px-3 py-1 rounded-pill text-[11px] uppercase tracking-wider font-body font-medium text-rose-brand border border-rose-light bg-rose-accent mb-4">
                Em breve
              </span>
              <h2 className="font-display text-[28px] text-rose-ink mb-2">Seja a primeira a saber</h2>
              <p className="font-body text-sm text-rose-ink-secondary mb-6">
                Avise-me quando <strong>{product.name}</strong> estiver disponível.
              </p>
              <FloatingLabelInput
                label="Seu melhor e-mail"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="mt-4 w-full py-3.5 bg-rose-brand text-white rounded-md text-button hover:bg-rose-dark transition-all duration-200">
                Quero ser avisada
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <svg className="mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke="#D4567A" strokeWidth="2" />
                <path className="animate-draw-check" d="M18 28L25 35L38 22" stroke="#D4567A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-display italic text-2xl text-rose-ink">Perfeito! Te avisaremos em breve.</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmailModal;
