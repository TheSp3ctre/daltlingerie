import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingLabelInput from "@/components/FloatingLabelInput";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "contato@daltlingerie.com.br" },
  { icon: Phone, label: "WhatsApp", value: "+55 11 99999-0000" },
  { icon: Instagram, label: "Instagram", value: "@daltlingerie" },
];

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-rose-surface">
      <GrainOverlay />
      <Header />

      <main className="pt-[72px]">
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-content mx-auto px-6 py-[72px] md:py-30"
        >
          <div className="text-center mb-16">
            <h1 className="text-h1 text-rose-ink mb-4">Fale Conosco</h1>
            <p className="font-body font-light text-rose-ink-secondary max-w-md mx-auto">
              Estamos aqui para ajudar. Entre em contato e responderemos o mais rápido possível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-6 bg-white rounded-card border border-rose-border border-l-4 border-l-rose-brand">
                  <item.icon size={22} strokeWidth={1.5} className="text-rose-brand flex-shrink-0" />
                  <div>
                    <p className="text-caption text-rose-ink-secondary">{item.label}</p>
                    <p className="font-body text-base text-rose-ink mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-rose-border">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FloatingLabelInput label="Nome" name="nome" required value={formData.nome} onChange={handleChange} />
                  <FloatingLabelInput label="E-mail" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  <FloatingLabelInput label="Assunto" name="assunto" required value={formData.assunto} onChange={handleChange} />
                  <FloatingLabelInput label="Mensagem" name="mensagem" textarea required value={formData.mensagem} onChange={handleChange} />
                  <button type="submit" className="w-full py-4 bg-rose-brand text-white rounded-md text-button hover:bg-rose-dark transition-all duration-200">
                    Enviar Mensagem
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto mb-6" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#D4567A" strokeWidth="2" />
                    <path className="animate-draw-check" d="M20 32L28 40L44 24" stroke="#D4567A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-display text-2xl text-rose-ink mb-2">Mensagem enviada!</h3>
                  <p className="font-body font-light text-sm text-rose-ink-secondary">Retornaremos em breve.</p>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
