import { useState, useEffect, useMemo } from "react";
import { useRef } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Search,
  X,
} from "lucide-react";

// Composant FAQItem simplifié SANS highlight
function FAQItem({ item, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        transition-all
        duration-500
        ease-out
        ${
          isOpen
            ? "border-primary/30 bg-surface-container-low shadow-xl"
            : "border-outline-variant/30 bg-surface/50 hover:border-primary/20"
        }
      `}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/5 via-secondary/5 to-tertiary/5 pointer-events-none" />

      <button
        onClick={onToggle}
        className="relative z-10 w-full flex items-start justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
            <span className="text-sm font-semibold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <span
            className={`
              font-h3 text-[18px] leading-relaxed transition-all duration-300 flex-1
              ${
                isOpen
                  ? "text-primary font-semibold"
                  : "text-on-surface/80 group-hover:text-primary/90"
              }
            `}
          >
            {item.q}
          </span>
        </div>

        <div
          className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            transition-all duration-500
            ${
              isOpen
                ? "bg-primary text-on-primary rotate-180"
                : "bg-surface-container text-primary/60 group-hover:bg-primary/10"
            }
          `}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className="pt-4 pl-0 sm:pl-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary/40 to-secondary/40 mb-4 rounded-full" />

            <div className="font-body-md text-on-surface-variant leading-relaxed">
              {typeof item.a === "string" ? (
                <p className="text-base">{item.a}</p>
              ) : (
                item.a
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant FAQ principal SIMPLIFIÉ
function FAQ({ title, subtitle, text, items = [], showStats = true }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Search functionality - simple filtering
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items;
    }

    const searchLower = searchTerm.toLowerCase().trim();
    return items.filter((item) => {
      const questionMatch = item.q.toLowerCase().includes(searchLower);
      const answerMatch =
        item.a &&
        typeof item.a === "string" &&
        item.a.toLowerCase().includes(searchLower);
      return questionMatch || answerMatch;
    });
  }, [searchTerm, items]);

  // Reset states
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(null);
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const totalQuestions = items.length;
  const searchResultsCount = filteredItems.length;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Vérifier si items est valide
  if (!items || items.length === 0) {
    return (
      <section className="relative py-stack-lg overflow-hidden">
        <div className="relative max-w-[900px] mx-auto px-margin-mobile text-center">
          <h2 className="font-h2 text-h2 text-primary">{title}</h2>
          <p className="text-on-surface-variant mt-4">
            Aucune FAQ disponible pour le moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-stack-lg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-margin-mobile">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle size={16} className="text-primary" />
            <span className="text-sm font-label-sm text-primary tracking-wide">
              FOIRE AUX QUESTIONS
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center mb-4">
            <h2 className="font-h2 text-h2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && (
              <span className="text-on-surface-variant font-h3">
                {subtitle}
              </span>
            )}
          </div>

          {text && (
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto leading-relaxed text-body-md">
              {text}
            </p>
          )}

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-5 py-3 pl-12 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 pointer-events-none"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary transition-colors cursor-pointer"
                  type="button"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        {showStats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="relative p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/20 text-center">
              <Sparkles size={24} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {totalQuestions}
              </div>
              <div className="text-sm text-on-surface-variant">
                Questions disponibles
              </div>
            </div>

            <div className="relative p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/20 text-center">
              <MessageCircle
                size={24}
                className="text-secondary mx-auto mb-2"
              />
              <div className="text-2xl font-bold text-secondary">
                {searchResultsCount}
              </div>
              <div className="text-sm text-on-surface-variant">
                {searchTerm ? "Résultats trouvés" : "Réponses disponibles"}
              </div>
            </div>

            <div className="relative p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/20 text-center">
              <div className="text-2xl font-bold text-tertiary">24/7</div>
              <div className="text-sm text-on-surface-variant">
                Support disponible
              </div>
            </div>
          </div>
        )}

        {/* FAQ List */}
        {currentItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {currentItems.map((item, idx) => {
                const globalIndex = startIndex + idx;
                return (
                  <FAQItem
                    key={`${globalIndex}-${item.q.substring(0, 30)}`}
                    item={item}
                    isOpen={activeIndex === globalIndex}
                    onToggle={() => handleToggle(globalIndex)}
                    index={globalIndex}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-surface-container-low/50 text-on-surface-variant/40 cursor-not-allowed"
                      : "bg-surface-container-low/80 text-on-surface hover:bg-primary/10 hover:text-primary border border-outline-variant/20 cursor-pointer"
                  }`}
                >
                  Précédent
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    if (pageNum > 0 && pageNum <= totalPages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg transition-all duration-300 cursor-pointer ${
                            currentPage === pageNum
                              ? "bg-primary text-on-primary shadow-lg"
                              : "bg-surface-container-low/50 text-on-surface hover:bg-primary/10 border border-outline-variant/20"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-surface-container-low/50 text-on-surface-variant/40 cursor-not-allowed"
                      : "bg-surface-container-low/80 text-on-surface hover:bg-primary/10 hover:text-primary border border-outline-variant/20 cursor-pointer"
                  }`}
                >
                  Suivant
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container-low border border-outline-variant/30 mb-4">
              <HelpCircle size={32} className="text-on-surface-variant/40" />
            </div>
            <p className="text-on-surface-variant">
              Aucune question ne correspond à votre recherche
            </p>
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              Voir toutes les questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;
