import { motion } from "framer-motion";

type CategoryKey = "all" | "bestseller" | "launch" | "available";
type SortKey = "relevance" | "price-asc" | "price-desc" | "newest";

interface FilterBarProps {
  activeCategory: CategoryKey;
  setActiveCategory: (c: CategoryKey) => void;
  sortBy: SortKey;
  setSortBy: (s: SortKey) => void;
  resultCount: number;
}

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "bestseller", label: "Mais Vendidos" },
  { key: "launch", label: "Lançamentos" },
  { key: "available", label: "Disponíveis" },
];

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "relevance", label: "Relevância" },
  { key: "price-asc", label: "Menor preço" },
  { key: "price-desc", label: "Maior preço" },
  { key: "newest", label: "Lançamentos" },
];

const FilterBar = ({ activeCategory, setActiveCategory, sortBy, setSortBy, resultCount }: FilterBarProps) => (
  <div
    className="sticky top-[92px] z-40 flex items-center border-b border-rose-border transition-all duration-200"
    style={{ background: "rgba(253,250,249,0.92)", backdropFilter: "blur(20px)" }}
  >
    <div className="max-w-content mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-3 md:py-0 h-auto md:h-16">
      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`relative whitespace-nowrap px-5 py-2 rounded-pill font-body text-[13px] uppercase tracking-[0.06em] border-[1.5px] transition-all duration-200 ${activeCategory === cat.key
              ? "bg-rose-brand border-rose-brand text-white"
              : "border-rose-border text-rose-ink-secondary hover:bg-rose-accent"
              }`}
          >
            {activeCategory === cat.key && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-rose-brand rounded-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4">
        <span className="font-body text-xs text-rose-ink-secondary whitespace-nowrap">{resultCount} produtos</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="font-body text-[13px] text-rose-ink border-[1.5px] border-rose-border rounded-lg px-3.5 py-2 bg-white outline-none focus:border-rose-brand focus:shadow-focus-input appearance-none cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt.key} value={opt.key}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default FilterBar;
