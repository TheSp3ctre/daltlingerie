import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import daltLogo from "@/assets/dalt-logo.png";

const navLinks = [
  { to: "/", label: "Produtos" },
  { to: "/afiliados", label: "Afiliados" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center" style={{ background: "rgba(253,250,249,0.85)", backdropFilter: "blur(20px) saturate(180%)", borderBottom: "1px solid rgba(237,213,222,0.6)" }}>
        <div className="w-full max-w-content mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={daltLogo} alt="Dalt Lingerie" className="h-16" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-body text-sm tracking-[0.04em] transition-colors duration-200 group ${location.pathname === link.to ? "text-rose-brand" : "text-rose-ink-secondary hover:text-rose-brand"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-rose-brand transition-transform duration-300 origin-left ${location.pathname === link.to ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
            <Link
              to="/afiliados"
              className="btn-shimmer ml-2 inline-flex items-center px-6 py-3 bg-rose-brand text-white rounded-md text-button transition-all duration-200 hover:bg-rose-dark hover:-translate-y-px hover:shadow-card-hover"
            >
              Seja Afiliado
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-rose-ink" aria-label="Abrir menu">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50"
              style={{ background: "rgba(28,18,21,0.4)", backdropFilter: "blur(8px)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-50 bg-rose-surface flex flex-col items-center justify-center gap-8 p-8"
            >
              <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-rose-ink" aria-label="Fechar menu">
                <X size={24} strokeWidth={1.5} />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-3xl ${location.pathname === link.to ? "text-rose-brand" : "text-rose-ink"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/afiliados"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-4 bg-rose-brand text-white rounded-md text-button"
              >
                Seja Afiliado
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
