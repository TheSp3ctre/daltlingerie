import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import DiamondDivider from "@/components/DiamondDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({ children, className = "", bg = "bg-rose-surface" }: { children: React.ReactNode; className?: string; bg?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className={`${bg} py-[72px] md:py-30 ${className}`}>
      {children}
    </motion.section>
  );
}

const values = [
  { title: "Conforto", desc: "Modelagens pensadas para o seu bem-estar diário." },
  { title: "Qualidade", desc: "Tecidos premium e acabamento impecável." },
  { title: "Empoderamento", desc: "Lingerie que celebra quem você é, sem padrões impostos." },
];

const Sobre = () => (
  <div className="min-h-screen bg-rose-surface">
    <GrainOverlay />
    <Header />

    {/* Hero */}
    <div className="relative h-[60vh] min-h-[400px] mt-[72px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&h=900&fit=crop"
        alt="Beauty lifestyle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-ink/60 to-rose-ink/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-display text-white text-center px-6"
        >
          Nossa História
        </motion.h1>
      </div>
    </div>

    {/* Brand Story */}
    <Section bg="bg-rose-surface">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-h2 text-rose-ink mb-6">Conforto e Sensualidade</h2>
          <p className="font-body font-light text-base text-rose-ink-secondary leading-[1.75] mb-4">
            Nascemos da crença de que a lingerie ideal não precisa de ocasiões especiais — ela deve fazer você se sentir especial todos os dias. Cada peça Dalt Lingerie é desenhada para unir conforto absoluto e sofisticação.
          </p>
          <p className="font-body font-light text-base text-rose-ink-secondary leading-[1.75]">
            Nossa jornada começou com o desejo de transformar a relação das mulheres com a lingerie. Hoje, somos uma comunidade de mulheres que acreditam no poder de se sentir bem na própria pele.
          </p>
        </div>
        <div className="rounded-card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop"
            alt="Lingerie Dalt"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>

    {/* Values */}
    <Section bg="bg-rose-accent">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-h2 text-rose-ink text-center mb-12">Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-card p-8 border-l-4 border-rose-brand">
              <h3 className="text-h3 text-rose-ink mb-3">{v.title}</h3>
              <p className="font-body font-light text-sm text-rose-ink-secondary leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Team */}
    <Section bg="bg-rose-surface">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="text-h2 text-rose-ink mb-12">Nosso Time</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Ana Clara", role: "Fundadora & CEO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
            { name: "Marina Costa", role: "Head de Produto", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
            { name: "Juliana Reis", role: "Diretora Criativa", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
            { name: "Beatriz Lima", role: "Head de Marketing", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
          ].map((person) => (
            <div key={person.name}>
              <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-rose-border" />
              <p className="font-display text-lg text-rose-ink">{person.name}</p>
              <p className="text-caption text-rose-ink-secondary mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section bg="bg-rose-surface-2">
      <div className="max-w-content mx-auto px-6 text-center">
        <DiamondDivider />
        <h2 className="text-h2 text-rose-ink mb-4">Faça parte da nossa comunidade</h2>
        <p className="font-body font-light text-rose-ink-secondary mb-8">Torne-se uma afiliada e ajude a espalhar autoconfiança.</p>
        <Link to="/afiliados" className="inline-block px-8 py-4 bg-rose-brand text-white rounded-md text-button hover:bg-rose-dark transition-all duration-200 hover:-translate-y-px">
          Quero ser afiliada
        </Link>
      </div>
    </Section>

    <Footer />
  </div>
);

export default Sobre;
