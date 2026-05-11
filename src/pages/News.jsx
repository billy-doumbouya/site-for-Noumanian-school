import { useState, useMemo } from "react";
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import AnimatedSection from "../components/helpers/animationSection";

const allNews = [
  {
    id: 1,
    category: "Événements",
    date: "12 Octobre 2024",
    title: "Cérémonie de remise des prix d'excellence 2024",
    excerpt:
      "Nous célébrons cette année les performances exceptionnelles de nos élèves lors d'une soirée dédiée au mérite.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdHSEmM1Jic0EQdWYxkaPlDZxBnM-ldklFO4papU3WrgRMA1CMbQynGHjZUe6VqiZvvRh1wvUhV6ADdpB3GwXPfkG_A9NLE_ix-zRbrK7XOFhnom6slLfWJT9RE07SfdmgjZxv9nE9AfxHo3qo85UMNklO4I1Bup-uGwtE5KGeuDkrJwzmnlpdntEzCSFK0RZJZKYGl0he1OMkBaShpbzAK2azbnVZBtqav9vgnkQck7FNKADpcF8Pqd9QgBJTJTwqeHvG-X8a",
  },
  {
    id: 2,
    category: "Annonces",
    date: "05 Octobre 2024",
    title: "Ouverture des inscriptions pour l'année prochaine",
    excerpt:
      "Le calendrier des admissions pour la session 2025 est désormais disponible.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdYEDMI5ajihLQVmCA0eJI1Lksop98eLbp6G7cQmVEURyG3udRQiluCjVj0Y23ua7FUFGk3ZAyGQvPNAREgsHplKynuffC75vJBUD7ZDXURTxL2VvCY9sONFWD5Xiv72BbgYQyNm2dm5AIVf9t-5eQ5rmtu_ZVFefgzFNbpiaf5OBFMLi1vURKU6RJ4zBs_VGHEcaEAER69uoonAZyOeiCWcjxE31z3UbAIHHSMMoJMK1SRHTbgws1pQNDeqaGInZ2-LZXvS8J",
  },
  {
    id: 3,
    category: "Examens",
    date: "28 Septembre 2024",
    title: "Calendrier des évaluations du premier trimestre",
    excerpt:
      "Les dates des contrôles continus pour tous les niveaux ont été publiées.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpE8AnyGxqi-y9oiIbGtP7cFNNOj4W7FU_hQHCYcPeb85SNWTAMwCNdfmENsyXUVf5dlqJ0EOg6B1UfxabakQ-CcUg3Zp9BNVujXTdiUiuwDllxU-uNq3cqzVd7NTD6K6FAeOw5r6fKnlN_L15aGQ-iPl-UEDXWb_qgXVPpHhLnovhqu0wRZkJ_f-s8lqKzTanzyIvy8xZjeDO7EtyjvGUEZwgGtSwG3FL1zNXQRzISpB9_u4XBs4wGBJuRgWSyp8Kae7O67k",
  },
  {
    id: 4,
    category: "Événements",
    date: "15 Septembre 2024",
    title: "Semaine des Sciences et de l'Innovation",
    excerpt:
      "Retour sur une semaine riche en découvertes où nos élèves ont présenté leurs projets innovants.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI4qF0g8k31Ytg0askrD_02UCRJZ9JlPD-8TYGe5SYoo_wuZRrRPVJkSLhM-yW_VG4yXn8o-xFUtuvlSxE9dt9wGIyMnClNJUSV2zpRjGc2L1k4uI71_Ym7vsJGUftglf0tELfyHTe4HDf1bsoN6WnrTFM-KIqXaffB2GxzZKRKBgKoozik6Ta3GTP51fuympWR1acNuOiLCOBQCqsiSLRHTbuYdgndq0DmghhszFrjWFcwAiGRSy1iQhlYeOKATCr2kEB2gLDBG",
  },
  {
    id: 5,
    category: "Annonces",
    date: "10 Septembre 2024",
    title: "Rénovation de la bibliothèque centrale",
    excerpt:
      "Un nouvel espace de travail moderne et connecté pour offrir à nos étudiants les meilleures conditions.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKdy2J4amJodAlnecFEy9U-NLztrVkR4Y7qFIRWyyiSQWTZZ9P-NrJA2F-vczDGu4TTnEM_kXCtYnlFvL7v5BIKHbxYaiDHou2VRyyJzs1K-Vs-xyoyarRqZSdNL8qyOSJ0GRlwSod2MiAwudtCzvf1dz4NPgpaScfAr_SqUDx6d6sHF0ttyUhsoisaaWUIJ32ggHZTmmerHwlUebnbSvHltNmehSFqaZEyn4R6aOxgvOzKvVQ2R2KAilJwG8wFIhphXTQybO5",
  },
  {
    id: 6,
    category: "Événements",
    date: "01 Septembre 2024",
    title: "Conférence annuelle sur l'orientation scolaire",
    excerpt:
      "Accompagner nos élèves dans leurs choix de carrière avec l'intervention d'experts du monde professionnel.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgZG5CJyUW42eQYtDG978yXvXb7N17AWq3UQWUu5SzKK8WT7-YpJ2n2qvm62QzejH7ziNnpsvexPdB6Kz9d6y0YpmpdtU4ciiNK74AsgLjwskGQGGv63K-nI2H7BOpF37UMhkETev6HVDudaPxeWnaFWEpE5YnrDAJIvLC-RgU6yH6oaLmhvhLiMnqRcaVSAY-m2-FSy9Y5sh-uda5DkFyGiozkKb8x24wJMv2wr_7qEavHSagl3rrf30eZF-N_UZEWLDGgVtC",
  },
  {
    id: 7,
    category: "Examens",
    date: "25 Août 2024",
    title: "Résultats du BAC 2024",
    excerpt:
      "Félicitations à nos élèves pour un taux de réussite exceptionnel de 98% !",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSX5bVf8HsEOsDG9ka7UjaX7XZwK3Vnwtgmf_HwGTRo00khXAd2V7kxworJE-ZzUSVIfSMm-2arwvwpuG-Y47t5_OF083Jz3uaTO92bDi9a35b4Ze1AGizh-wRggbfvf9JD6YQW0hGyO80VdEiswnV2WjA72QZT4McF2MnqT-L4ve_fHQY3mfL1CatMdpi11WUemkGd8-qb3Zg1j9aQ8_UnkpYVBb6asGY6S8tXfOgYmyQ1dMtWGRWkJw2d1dh5dLD_9FPOOi1",
  },
  {
    id: 8,
    category: "Annonces",
    date: "15 Août 2024",
    title: "Journée portes ouvertes 2024",
    excerpt:
      "Venez découvrir notre établissement et rencontrer notre équipe pédagogique.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdYEDMI5ajihLQVmCA0eJI1Lksop98eLbp6G7cQmVEURyG3udRQiluCjVj0Y23ua7FUFGk3ZAyGQvPNAREgsHplKynuffC75vJBUD7ZDXURTxL2VvCY9sONFWD5Xiv72BbgYQyNm2dm5AIVf9t-5eQ5rmtu_ZVFefgzFNbpiaf5OBFMLi1vURKU6RJ4zBs_VGHEcaEAER69uoonAZyOeiCWcjxE31z3UbAIHHSMMoJMK1SRHTbgws1pQNDeqaGInZ2-LZXvS8J",
  },
];

const categories = ["Tous", "Examens", "Événements", "Annonces"];
const ITEMS_PER_PAGE = 6;

function News() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les articles par catégorie et recherche
  const filteredNews = useMemo(() => {
    let news =
      activeCategory === "Tous"
        ? allNews
        : allNews.filter((n) => n.category === activeCategory);

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      news = news.filter(
        (n) =>
          n.title.toLowerCase().includes(term) ||
          n.excerpt.toLowerCase().includes(term) ||
          n.category.toLowerCase().includes(term),
      );
    }

    return news;
  }, [activeCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset page when category or search changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  // Générer les numéros de page à afficher
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection threshold={0.3}>
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSX5bVf8HsEOsDG9ka7UjaX7XZwK3Vnwtgmf_HwGTRo00khXAd2V7kxworJE-ZzUSVIfSMm-2arwvwpuG-Y47t5_OF083Jz3uaTO92bDi9a35b4Ze1AGizh-wRggbfvf9JD6YQW0hGyO80VdEiswnV2WjA72QZT4McF2MnqT-L4ve_fHQY3mfL1CatMdpi11WUemkGd8-qb3Zg1j9aQ8_UnkpYVBb6asGY6S8tXfOgYmyQ1dMtWGRWkJw2d1dh5dLD_9FPOOi1"
            alt="Actualités hero"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-h1 text-h1 text-white mb-4">
              Actualités et Événements
            </h1>
            <div className="w-24 h-1 bg-secondary-fixed mx-auto mb-6"></div>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
              Restez informé des derniers développements et de la vie de notre
              communauté scolaire.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Search & Filters */}
      <AnimatedSection threshold={0.3}>
        <section className="bg-surface-container-low py-8 border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            {/* Barre de recherche */}
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-5 py-3 pl-12 rounded-xl bg-surface border border-outline-variant text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60"
                />
              </div>
            </div>

            {/* Filtres catégories */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-surface border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Résultats de recherche */}
            {searchTerm && (
              <p className="text-center mt-4 text-on-surface-variant text-sm">
                {filteredNews.length} résultat
                {filteredNews.length > 1 ? "s" : ""} trouvé
                {filteredNews.length > 1 ? "s" : ""} pour "{searchTerm}"
              </p>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Grille des articles */}
      <AnimatedSection threshold={0.2}>
        <section className="py-stack-lg bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            {currentNews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {currentNews.map((news, index) => (
                    <article
                      key={news.id}
                      className="bg-surface rounded-lg overflow-hidden shadow-sm border border-outline-variant flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={news.src}
                          alt={news.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 bg-secondary-fixed text-on-secondary-fixed px-3 py-1 text-label-sm font-label-sm rounded-full">
                          {news.category}
                        </span>
                      </div>
                      <div className="p-gutter flex flex-col flex-grow">
                        <div className="flex items-center text-on-surface-variant text-label-sm font-label-sm mb-3 gap-2">
                          <Calendar size={14} />
                          {news.date}
                        </div>
                        <h3 className="font-h3 text-h3 text-primary mb-4 leading-tight line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                          {news.excerpt}
                        </p>
                        <button className="mt-auto flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold hover:text-secondary transition-colors cursor-pointer group w-fit">
                          Lire la suite
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-stack-lg flex items-center justify-center space-x-2 flex-wrap gap-2">
                    <button
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                        currentPage === 1
                          ? "bg-surface border border-outline-variant text-on-surface-variant/40 cursor-not-allowed"
                          : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary"
                      }`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {getPageNumbers().map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          typeof page === "number" && goToPage(page)
                        }
                        disabled={page === "..."}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-label-sm text-label-sm transition-all ${
                          currentPage === page
                            ? "bg-primary text-white shadow-md"
                            : page === "..."
                              ? "cursor-default text-on-surface-variant"
                              : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                        currentPage === totalPages
                          ? "bg-surface border border-outline-variant text-on-surface-variant/40 cursor-not-allowed"
                          : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary"
                      }`}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-on-surface-variant text-lg">
                  Aucun article ne correspond à votre recherche.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Tous");
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Voir tous les articles
                </button>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection threshold={0.3}>
        <section className="bg-primary py-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row items-center justify-between gap-gutter">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-h2 text-h2 text-secondary-fixed mb-4">
                Restez connectés
              </h2>
              <p className="font-body-md text-body-md text-white/90">
                Inscrivez-vous à notre lettre d'information pour recevoir
                directement les actualités importantes.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <form
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow bg-white border-0 rounded-lg px-gutter py-4 text-on-surface focus:ring-2 focus:ring-secondary-fixed outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-stack-md py-4 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-secondary-fixed hover:text-primary transition-all whitespace-nowrap"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default News;
