import { useState } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
];

const categories = ["Tous", "Examens", "Événements", "Annonces"];

function News() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous" ? allNews : allNews.filter((n) => n.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSX5bVf8HsEOsDG9ka7UjaX7XZwK3Vnwtgmf_HwGTRo00khXAd2V7kxworJE-ZzUSVIfSMm-2arwvwpuG-Y47t5_OF083Jz3uaTO92bDi9a35b4Ze1AGizh-wRggbfvf9JD6YQW0hGyO80VdEiswnV2WjA72QZT4McF2MnqT-L4ve_fHQY3mfL1CatMdpi11WUemkGd8-qb3Zg1j9aQ8_UnkpYVBb6asGY6S8tXfOgYmyQ1dMtWGRWkJw2d1dh5dLD_9FPOOi1"
          alt="Actualités hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-h1 text-h1 text-on-primary mb-4">
            Actualités et Événements
          </h1>
          <div className="w-24 h-1 bg-secondary-fixed mx-auto mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-primary opacity-90 max-w-2xl mx-auto">
            Restez informé des derniers développements et de la vie de notre
            communauté scolaire.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-surface-container-low py-8 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full font-label-sm text-label-sm transition-all ${
                  active === cat
                    ? "bg-primary text-on-primary"
                    : "bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="py-stack-lg bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filtered.map((news) => (
              <article
                key={news.id}
                className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm border border-outline-variant flex flex-col group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={news.src}
                    alt={news.title}
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
                  <h3 className="font-h3 text-h3 text-primary mb-4 leading-tight">
                    {news.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <a className="mt-auto flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold hover:text-secondary transition-colors cursor-pointer">
                    Lire la suite <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-stack-lg flex items-center justify-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all">
              <ChevronLeft size={18} />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-label-sm text-label-sm transition-all ${
                  n === 1
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {n}
              </button>
            ))}
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-sm text-label-sm">
              8
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row items-center justify-between gap-gutter">
          <div className="md:w-1/2">
            <h2 className="font-h2 text-h2 text-secondary-fixed mb-4">
              Restez connectés
            </h2>
            <p className="font-body-md text-body-md text-on-primary opacity-90">
              Inscrivez-vous à notre lettre d'information pour recevoir
              directement les actualités importantes.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow bg-white border-0 rounded-lg px-gutter py-4 text-on-surface focus:ring-2 focus:ring-secondary-fixed outline-none"
              />
              <button className="bg-secondary text-on-secondary px-stack-md py-4 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
