import { Link } from "react-router-dom";
import DiamondDivider from "./DiamondDivider";
import daltLogo from "@/assets/dalt-logo.png";

const Footer = () => (
  <footer className="bg-rose-surface-2 pt-16 pb-8">
    <div className="max-w-content mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={daltLogo} alt="Dalt Lingerie" className="h-16 mb-4" />
          <p className="font-body text-sm text-rose-ink-secondary leading-relaxed">
            Conforto e sensualidade. Peças exclusivas feitas para você se sentir poderosa.
          </p>
        </div>
        <div>
          <p className="text-caption text-rose-ink-secondary mb-4">Navegação</p>
          <div className="flex flex-col gap-3">
            <Link to="/" className="font-body text-sm text-rose-ink-secondary hover:text-rose-brand transition-colors">Produtos</Link>
            <Link to="/sobre" className="font-body text-sm text-rose-ink-secondary hover:text-rose-brand transition-colors">Sobre Nós</Link>
            <Link to="/afiliados" className="font-body text-sm text-rose-ink-secondary hover:text-rose-brand transition-colors">Programa de Afiliadas</Link>
            <Link to="/contato" className="font-body text-sm text-rose-ink-secondary hover:text-rose-brand transition-colors">Contato</Link>
          </div>
        </div>
        <div>
          <p className="text-caption text-rose-ink-secondary mb-4">Contato</p>
          <div className="flex flex-col gap-3 font-body text-sm text-rose-ink-secondary">
            <span>contato@daltlingerie.com.br</span>
            <span>+55 11 99999-0000</span>
            <span>@daltlingerie</span>
          </div>
        </div>
      </div>
      <DiamondDivider />
      <p className="text-center font-body text-xs text-rose-ink-secondary">
        © 2026 Dalt Lingerie. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
