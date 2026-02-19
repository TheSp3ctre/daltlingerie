import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Percent, Clock, Tag, BarChart3, Repeat, Headphones, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingLabelInput from "@/components/FloatingLabelInput";

const benefits = [
  { icon: Percent, title: "Comissão 30%", desc: "Ganhe 30% em cada venda realizada através do seu link exclusivo." },
  { icon: Clock, title: "Cookie 30 dias", desc: "Seu link de afiliada rastreia vendas por até 30 dias após o clique." },
  { icon: Tag, title: "Cupom exclusivo", desc: "Receba um cupom personalizado para compartilhar com sua audiência." },
  { icon: BarChart3, title: "Painel de métricas", desc: "Acompanhe cliques, conversões e comissões em tempo real." },
  { icon: Repeat, title: "Pagamentos recorrentes", desc: "Receba suas comissões diretamente na sua conta, todo mês." },
  { icon: Headphones, title: "Suporte dedicado", desc: "Time exclusivo para ajudar você a maximizar seus resultados." },
];

const faqs = [
  { q: "Quando recebo meu pagamento?", a: "Os pagamentos são processados todo dia 15 do mês seguinte à venda confirmada. Você pode acompanhar tudo pelo painel." },
  { q: "Como funciona o cupom exclusivo?", a: "Ao ser aprovada, você recebe um cupom personalizado com seu nome. Suas seguidoras ganham desconto e você ganha comissão." },
  { q: "Posso divulgar em qualquer plataforma?", a: "Sim! Instagram, TikTok, YouTube, blog, WhatsApp — você escolhe onde divulgar seu link e cupom." },
  { q: "Como acesso meu painel de afiliada?", a: "Após aprovação, você recebe acesso ao painel por e-mail com login e senha exclusivos." },
  { q: "Qual o valor mínimo para saque?", a: "O valor mínimo para saque é de R$ 50,00. Sem limite máximo." },
  { q: "Como é calculada minha comissão?", a: "A comissão de 30% é calculada sobre o valor do produto, sem incluir frete. Simples e transparente." },
];

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Afiliados = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", rede: "", divulgacao: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <GrainOverlay />
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1215 0%, #3D1A24 100%)" }}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.15]" style={{ background: "#D4567A", filter: "blur(80px)" }} />

        <div className="relative z-10 max-w-content mx-auto px-6 text-center">
          <motion.h1
            className="text-display text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Transforme sua audiência em renda real".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-body font-light text-lg text-white max-w-xl mx-auto mb-10"
          >
            Junte-se ao programa de afiliadas Dalt Lingerie e ganhe comissões generosas compartilhando produtos que você ama.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1 } } }}
          >
            {["30% comissão", "Cookie 30 dias", "+2400 afiliadas"].map((stat) => (
              <motion.span
                key={stat}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="px-5 py-2.5 rounded-pill text-[13px] uppercase tracking-wider font-body font-medium border border-white/20 text-white/90"
                style={{ background: "rgba(212,86,122,0.2)" }}
              >
                {stat}
              </motion.span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <a
              href="#cadastro"
              className="inline-block mt-10 px-8 py-4 bg-rose-brand text-white rounded-md text-button hover:bg-rose-dark transition-all duration-200 hover:-translate-y-px btn-shimmer"
            >
              Quero me cadastrar
            </a>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-rose-surface py-[72px] md:py-30">
        <div className="max-w-content mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <h2 className="text-h2 text-rose-ink">Como funciona</h2>
          </FadeSection>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Dashed connector */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] border-t-2 border-dashed border-rose-border" />
            {[
              { num: "1", title: "Cadastre-se", desc: "Preencha o formulário com seus dados. É rápido e gratuito." },
              { num: "2", title: "Compartilhe", desc: "Receba seu link e cupom exclusivo para divulgar." },
              { num: "3", title: "Ganhe", desc: "Acompanhe suas vendas e receba comissões todo mês." },
            ].map((step, i) => (
              <FadeSection key={step.num} className="text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full border-2 border-rose-brand flex items-center justify-center mx-auto mb-6 bg-rose-surface"
                >
                  <span className="font-display text-5xl text-rose-brand">{step.num}</span>
                </motion.div>
                <h3 className="text-h3 text-rose-ink mb-2">{step.title}</h3>
                <p className="font-body font-light text-sm text-rose-ink-secondary">{step.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-rose-surface-2 py-[72px] md:py-30">
        <div className="max-w-content mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <h2 className="text-h2 text-rose-ink">Vantagens exclusivas</h2>
          </FadeSection>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <FadeSection key={b.title}>
                <div className="bg-white rounded-card p-8 border border-rose-border shadow-card transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-card-hover">
                  <b.icon size={28} strokeWidth={1.5} className="text-rose-brand mb-4" />
                  <h3 className="text-h3 text-rose-ink mb-2">{b.title}</h3>
                  <p className="font-body font-light text-sm text-rose-ink-secondary leading-relaxed">{b.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rose-surface py-[72px] md:py-30">
        <div className="max-w-[720px] mx-auto px-6">
          <FadeSection className="text-center mb-12">
            <h2 className="text-h2 text-rose-ink">Perguntas frequentes</h2>
          </FadeSection>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-rose-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className={`font-body font-medium text-base transition-colors ${openFaq === i ? "text-rose-brand" : "text-rose-ink"}`}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus size={18} strokeWidth={1.5} className="text-rose-ink-secondary flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="font-body font-light text-sm text-rose-ink-secondary pb-5 leading-relaxed">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="cadastro" className="bg-rose-brand py-[72px] md:py-30">
        <div className="max-w-[560px] mx-auto px-6">
          <FadeSection>
            <div className="bg-white rounded-3xl p-8 md:p-10">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-h2 text-rose-ink mb-2 text-center">Cadastre-se agora</h2>
                  <p className="font-body font-light text-sm text-rose-ink-secondary text-center mb-8">
                    Preencha seus dados e entraremos em contato.
                  </p>
                  <div className="space-y-4">
                    <FloatingLabelInput label="Nome completo" name="nome" required value={formData.nome} onChange={handleChange} />
                    <FloatingLabelInput label="E-mail" name="email" type="email" required value={formData.email} onChange={handleChange} />
                    <FloatingLabelInput label="Telefone / WhatsApp" name="telefone" required value={formData.telefone} onChange={handleChange} />
                    <FloatingLabelInput label="Rede social ou site (opcional)" name="rede" value={formData.rede} onChange={handleChange} />
                    <FloatingLabelInput label="Como pretende divulgar?" name="divulgacao" textarea value={formData.divulgacao} onChange={handleChange} />
                  </div>
                  <button type="submit" className="mt-6 w-full py-4 bg-rose-brand text-white rounded-md text-button hover:bg-rose-dark transition-all duration-200">
                    Enviar Cadastro
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <svg className="mx-auto mb-6" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#D4567A" strokeWidth="2" />
                    <path className="animate-draw-check" d="M20 32L28 40L44 24" stroke="#D4567A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-display text-2xl text-rose-ink mb-2">Cadastro enviado!</h3>
                  <p className="font-body font-light text-sm text-rose-ink-secondary">Entraremos em contato em breve.</p>
                </div>
              )}
            </div>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Afiliados;
