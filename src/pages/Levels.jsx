import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Clock,
  FlaskConical,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function Levels() {
  const levels = [
    {
      age: "6 - 11 ANS",
      title: "Enseignement Primaire (CI-CM2)",
      desc: "Les fondations du savoir. Notre programme primaire met l'accent sur la maîtrise des langages fondamentaux tout en éveillant la curiosité intellectuelle de chaque élève.",
      subjects: "Français, Mathématiques, Éveil Scientifique, Arts & Culture.",
      hours: "Lundi au Vendredi: 08h00 - 14h00",
      to: "/levels/primary",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUg8ZuA068ASI8VOmHY1CiU19ToAzAkFH2kDudEmOFe_lWiDvp7LKDGzOdfFjeSN2ngs2REg9TLt8illGevdyRw7vInFcHDaVikmOaAACs58Fb8o4nCF7jhyxWp9kwxOVt7Ds8wJnb3x5sZ2IAel87kC8MumCTwGTMtMwGzUvtTlx5YIAytl1g8bj-R7HFV94k3cV1gAFY1uEvc9BfU1j1AB4MmcYfFE3MeFNvMJ3ROTWQQtvHUUd6627-kPVuoxxqaqIukA5c",
      reverse: false,
    },
    {
      age: "12 - 15 ANS",
      title: "Le Collège (6ème - 3ème)",
      desc: "L'étape de la consolidation et de la découverte. Nos collégiens développent leur autonomie et leurs capacités d'analyse critique à travers un socle commun exigeant.",
      subjects: "Sciences de la Vie, Physique-Chimie, Histoire-Géo, LV1 & LV2.",
      hours: "Lundi au Vendredi: 08h00 - 16h00",
      to: "/levels/college",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXbYILGbqhOiFepvs8B1f6b_67wvaPAncy4ZILtqdgfBV5S04iRB8q6GL86k2mBABx-CgPN0_0GvS0sl2sT-5VnrSvjQgMkxmneEhH7DSB4E94fIZIwAFBVpULs1oA5sZBXwwRUeZXaQYhkRm63eZMoErgKgzMStDZ5OGn2MMh2-5zz5sOwbD_RB3NV17unXsZESrYtYlQ9SD-xVJrpyX9-N_NFjI5b55UO0d1vjvF8sVs8RnkosdfIvGdOMQrbBJPZSUbYgDX",
      reverse: true,
    },
    {
      age: "16 - 18 ANS+",
      title: "Le Lycée (2nde - Terminale)",
      desc: "Vers l'enseignement supérieur. Le lycée propose des parcours spécialisés (Sciences, Lettres, Économie) pour préparer nos élèves aux meilleurs concours nationaux et internationaux.",
      subjects:
        "Sciences Mathématiques, Sciences Expérimentales, Sciences Sociales.",
      hours: "Lundi au Vendredi: 08h00 - 16h30",
      to: "/levels",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPlB47zcGxSAcvO-WrkDakD64JE6fDrr-NcHlXEKaHiS5V9uf7b07GlhhXxDsx3yx3UQGlfkU7PYphoUgDzyy0eiK1dvp0ui_prmrT3p8ozeh9JNDJ9cPJqGK3qV8WFJ7l0GEgdal3uM2UnjP_m-wGonunjMN8rppvUtgOAcRtAZc1sxNS3G0B2yL2lBXmNvY6BLQ9ea1kKNGt-ACOjFOm4_dwZ3sm9ngpFA51r7uaREeZAn7tbvPjm9XXnGpvkzh-mPCWOs61",
      reverse: false,
    },
  ];

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

  const faqs = [
    {
      q: "Quel est le programme d'études suivi par l'institution ?",
      a: "Nous suivons rigoureusement le programme national de l'Éducation Nationale Guinéenne, enrichi par des approches pédagogiques modernes et un accent particulier sur les langues étrangères et les nouvelles technologies dès le primaire.",
    },
    {
      q: "Comment préparez-vous les élèves aux examens nationaux (BEPC/BAC) ?",
      a: "La préparation commence dès le début de l'année avec des évaluations régulières, des examens blancs mensuels et des séances de remédiation ciblées. Nos enseignants experts accompagnent chaque élève pour maîtriser la méthodologie des épreuves.",
    },
    {
      q: "Quels sont les horaires d'ouverture et de cours ?",
      a: "Les cours se déroulent du lundi au vendredi. Pour le primaire, les horaires sont de 08h00 à 14h00. Pour le collège et le lycée, les horaires peuvent s'étendre jusqu'à 16h00 selon l'emploi du temps spécifique de la classe.",
    },
    {
      q: "Proposez-vous des cours de soutien ou des activités périscolaires ?",
      a: "Oui, nous organisons des sessions de renforcement les samedis matin pour les classes d'examen. De plus, divers clubs sont accessibles pour favoriser l'épanouissement complet de nos élèves.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMnWWaDn8dVO5cbnph51VWdRkXQDR2YSHq7ZdCsbYs4b6WIfX91ztHin_QcxckDhnRvZJGWJaYiP3g1kSNvGbzVB4_BGa-ZLjjzNU1GAPMel2x5YKTVThfGZ4iy7KMbTWR_vGsjUskSAXe--VqID38n0Gdg5X4dyQ-HUa07IcajTZNwXaj3HJpWqVOQiESVNW6LKbW9TVp2aYLeFm4dE-uwVl_b68DPlYdcpi0WJZ-ZDP4FNpb31jMivYth9EDYL-alofNoPIL"
          alt="Niveaux hero"
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

      {/* Niveaux */}
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter">
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
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Résultats */}
      <section className="bg-primary py-stack-lg">
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
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Questions Fréquemment Posées
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-h3 text-[18px] text-primary pr-4">
                    {faq.q}
                  </h3>
                  <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 flex-shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 font-body-md text-on-surface-variant">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg bg-surface-container-low">
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
