import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import EmailModal from "@/components/EmailModal";

type CategoryKey = "all" | "bestseller" | "launch" | "available";
type SortKey = "relevance" | "price-asc" | "price-desc" | "newest";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");
  const [notifyProduct, setNotifyProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory === "bestseller") filtered = filtered.filter((p) => p.category === "bestseller");
    else if (activeCategory === "launch") filtered = filtered.filter((p) => p.category === "launch");
    else if (activeCategory === "available") filtered = filtered.filter((p) => p.available);

    const getPrice = (p: Product) => (typeof p.price === 'number' ? p.price : 0);

    if (sortBy === "price-asc") filtered.sort((a, b) => getPrice(a) - getPrice(b));
    else if (sortBy === "price-desc") filtered.sort((a, b) => getPrice(b) - getPrice(a));
    else if (sortBy === "newest") filtered.sort((a, b) => (a.category === "launch" ? -1 : 1));

    return filtered;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-rose-surface">
      <GrainOverlay />
      <Header />

      <FilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        resultCount={filteredProducts.length}
      />

      <main className="pt-12 pb-30 max-w-content mx-auto px-4 md:px-6" style={{ paddingTop: 120, paddingBottom: 120 }}>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onNotify={setNotifyProduct}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Search size={48} strokeWidth={1.5} className="text-rose-brand mb-4" />
            <h2 className="font-display text-[28px] text-rose-ink mb-2">Nenhum produto encontrado</h2>
            <p className="font-body font-light text-sm text-rose-ink-secondary mb-6">Tente outro filtro</p>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-6 py-3 border-[1.5px] border-rose-brand text-rose-brand rounded-md text-button hover:bg-rose-light transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <Footer />

      {notifyProduct && <EmailModal product={notifyProduct} onClose={() => setNotifyProduct(null)} />}
    </div>
  );
};

export default Index;
