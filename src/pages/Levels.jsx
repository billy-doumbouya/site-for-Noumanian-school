import { NavLink } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { faqLevels, levels } from "../components/fixetures";
import AnimatedSection from "../components/helpers/animationSection";
import FAQ from "../components/FAQ/FAQCARD";

function Levels() {
  const results = [
    {
      value: "98%",
      label: "Taux de Réussite CEP",
      note: "Dont 75% de mentions Très Bien",
      featured: false,
    },
    {
      value: "96%",
      label: "Taux de Réussite BEPC",
      note: "Premier rang préfectoral",
      featured: true,
    },
    {
      value: "94%",
      label: "Taux de Réussite Bac",
      note: "Admissions universités internationales",
      featured: false,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <AnimatedSection threshold={0.3}>
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden transform duration-700 transition-all ">
          <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMnWWaDn8dVO5cbnph51VWdRkXQDR2YSHq7ZdCsbYs4b6WIfX91ztHin_QcxckDhnRvZJGWJaYiP3g1kSNvGbzVB4_BGa-ZLjjzNU1GAPMel2x5YKTVThfGZ4iy7KMbTWR_vGsjUskSAXe--VqID38n0Gdg5X4dyQ-HUa07IcajTZNwXaj3HJpWqVOQiESVNW6LKbW9TVp2aYLeFm4dE-uwVl_b68DPlYdcpi0WJZ-ZDP4FNpb31jMivYth9EDYL-alofNoPIL"
            alt="Niveaux hero"
            laoding="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-gutter">
            <h1 className="font-h1 text-h1 text-on-primary mb-4">
              Nos Niveaux d'Enseignement
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">
              Un parcours académique d'excellence, de l'initiation à la
              spécialisation, forgé pour les leaders de demain.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Niveaux */}
      <section
        className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter transform duration-700 transition-all `}
      >
        {levels.map((level, i) => (
          <div
            key={level.title}
            className={`grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg items-center ${i < levels.length - 1 ? "mb-20" : ""}`}
          >
            {/* Texte */}
            <div
              className={`md:col-span-5 ${level.reverse ? "md:order-2" : "md:order-1"}`}
            >
              <div className="inline-block px-4 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-sm text-label-sm mb-4">
                {level.age}
              </div>
              <h2 className="font-h2 text-h2 text-primary mb-6">
                {level.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {level.desc}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen
                    size={20}
                    className="text-secondary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-h3 text-[18px] text-primary">
                      Matières Clés
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      {level.subjects}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock
                    size={20}
                    className="text-secondary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-h3 text-[18px] text-primary">
                      Horaires
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      {level.hours}
                    </p>
                  </div>
                </div>
              </div>
              <NavLink
                to={level.to}
                className="inline-flex items-center gap-2 mt-6 text-secondary font-bold font-label-sm text-label-sm hover:gap-4 transition-all"
              >
                En savoir plus <ArrowRight size={16} />
              </NavLink>
            </div>

            {/* Image */}
            <div
              className={`md:col-span-7 ${level.reverse ? "md:order-1" : "md:order-2"}`}
            >
              <div className="rounded-xl overflow-hidden shadow-sm aspect-video bg-surface-container">
                <img
                  src={level.src}
                  alt={level.title}
                  laoding="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Résultats */}
      <section
        className={`bg-primary py-stack-lg transform duration-700 transition-all `}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-secondary-fixed mb-4">
              Résultats aux Examens Nationaux 2023
            </h2>
            <div className="h-1 w-24 bg-secondary-fixed mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
            {results.map((r) => (
              <div
                key={r.label}
                className={`p-8 border border-on-primary-container rounded-xl text-center transition-all ${
                  r.featured ? "scale-110 bg-primary-container shadow-xl" : ""
                }`}
              >
                <div className="text-[48px] font-h1 text-secondary-fixed mb-2">
                  {r.value}
                </div>
                <div className="font-label-sm text-label-sm text-on-primary tracking-widest uppercase">
                  {r.label}
                </div>
                <p className="mt-4 font-body-md text-on-primary opacity-80 italic">
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`py-stack-lg bg-surface transform duration-700 transition-all `}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Questions Fréquemment Posées
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </div>
          <AnimatedSection threshold={0.2}>
            <FAQ
              title="Questions Fréquemment Posées"
              subtitle="Toutes les questions que vous pouvez avoir"
              text="Nous vous répondrons au plus vite"
              items={faqLevels}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`py-stack-lg bg-surface-container-low transform duration-700 transition-all `}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant max-w-4xl mx-auto">
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Prêt à rejoindre notre institution ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Les inscriptions pour l'année scolaire 2024-2025 sont désormais
              ouvertes. Places limitées par niveau.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md">
                  Démarrer l'inscription
                </button>
              </NavLink>
              <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Levels;
