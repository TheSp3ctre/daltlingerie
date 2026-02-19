import { useState } from "react";
import { Heart, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
  onNotify: (product: Product) => void;
}

const ProductCard = ({ product, index, onNotify }: ProductCardProps) => {
  const [wishlisted, setWishlisted] = useState(false);

  const handleCopyAffiliateLink = () => {
    const link = `${window.location.origin}/produto/${product.id}?ref=afiliado`;
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Link de afiliado copiado!");
    });
  };

  const badge = product.category === "bestseller"
    ? { text: "✦ Mais Vendido", className: "bg-rose-brand text-white" }
    : product.available
    ? { text: "Novo", className: "bg-rose-ink text-white" }
    : null;

  const emBreveBadge = !product.available;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group bg-white border border-rose-border rounded-card overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-product-hover hover:border-rose-light"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06] ${
            !product.available ? "blur-[6px] brightness-105" : ""
          }`}
          loading="lazy"
        />

        {/* Badge */}
        {badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-pill font-body font-medium text-[11px] uppercase tracking-wider ${badge.className}`}>
            {badge.text}
          </span>
        )}
        {emBreveBadge && (
          <span className="pulse-dot absolute top-3 left-3 px-3 py-1 rounded-pill font-body font-medium text-[11px] uppercase tracking-wider bg-white text-rose-brand border-[1.5px] border-rose-brand flex items-center">
            Em Breve
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border border-rose-border opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
          aria-label="Favoritar"
        >
          <motion.div whileTap={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 400 }}>
            <Heart
              size={16}
              strokeWidth={1.5}
              className={wishlisted ? "fill-rose-brand text-rose-brand" : "text-rose-ink-secondary"}
            />
          </motion.div>
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-caption text-rose-ink-secondary">{product.category === "bestseller" ? "Best-seller" : "Lançamento"}</p>
        <h3 className="font-body font-medium text-base text-rose-ink mt-1.5 line-clamp-2">{product.name}</h3>
        <p className="font-body font-light text-[13px] text-rose-ink-secondary mt-1 line-clamp-1">{product.shortDescription}</p>

        <div className="flex items-baseline gap-2 mt-3">
          <span className="font-display font-medium text-[22px] text-rose-brand">
            R$ {product.price}
          </span>
          {product.originalPrice && (
            <span className="font-body text-[13px] text-rose-ink-secondary line-through">
              R$ {product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => !product.available && onNotify(product)}
          className={`mt-3 w-full py-3.5 rounded-md text-button transition-all duration-200 ${
            product.available
              ? "btn-shimmer bg-rose-brand text-white hover:bg-rose-dark hover:-translate-y-px hover:shadow-card-hover"
              : "bg-transparent border-[1.5px] border-rose-brand text-rose-brand hover:bg-rose-light"
          }`}
        >
          {product.available ? "Comprar" : "Avisar-me"}
        </button>
        <button
          onClick={handleCopyAffiliateLink}
          className="mt-2 w-full py-3 rounded-md text-button transition-all duration-200 bg-transparent border-[1.5px] border-rose-border text-rose-ink-secondary hover:border-rose-brand hover:text-rose-brand flex items-center justify-center gap-2"
        >
          <Link2 size={14} strokeWidth={1.5} />
          Obter link de afiliado
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
