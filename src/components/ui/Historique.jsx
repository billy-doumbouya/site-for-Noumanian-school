import {
  Calendar,
  Award,
  Building,
  Users,
  Trophy,
  Zap,
  Target,
  Rocket,
  Sparkles,
  Clock,
} from "lucide-react";
import AnimatedSection from "../helpers/animationSection";

const timeline = [
  {
    year: "2004",
    title: "Fondation de l'Institution",
    desc: "Création de l'école Sacko Noumanian et Frères avec une classe unique de 25 élèves.",
    icon: Building,
  },
  {
    year: "2010",
    title: "Extension du Collège",
    desc: "Ouverture des premières classes de collège et agrandissement des infrastructures.",
    icon: Users,
  },
  {
    year: "2015",
    title: "Laboratoire Informatique",
    desc: "Inauguration du premier laboratoire informatique équipé de 30 postes.",
    icon: Zap,
  },
  {
    year: "2018",
    title: "Première Promotion BAC",
    desc: "Première promotion de bacheliers avec un taux de réussite exceptionnel de 95%.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Certification d'Excellence",
    desc: "L'école reçoit la certification nationale pour la qualité de son enseignement.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "20 Ans de Tradition",
    desc: "Célébration des 20 ans d'excellence académique et d'innovation pédagogique.",
    icon: Sparkles,
  },
  {
    year: "2025",
    title: "Nouveau Campus Sportif",
    desc: "Inauguration d'un complexe sportif moderne avec terrain multi-sports, piscine et salle de fitness.",
    icon: Target,
  },
  {
    year: "2026",
    title: "Section Internationale",
    desc: "Lancement de la filière internationale bilingue avec échanges académiques et certifications Cambridge.",
    icon: Rocket,
  },
];

function Historique() {
  return (
    <AnimatedSection threshold={0.2}>
      <section className="py-stack-lg bg-gradient-to-b from-surface via-surface-container-low to-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Notre Parcours
            </span>
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Jalons Historiques
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Deux décennies d'engagement pour l'excellence éducative
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 transform -translate-x-1/2 rounded-full" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={item.year} className="relative mb-12 last:mb-0">
                  <div
                    className={`
                    flex flex-col md:flex-row items-start md:items-center
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                    gap-4 md:gap-8
                  `}
                  >
                    {/* Année */}
                    <div
                      className={`
                      hidden md:block w-[calc(50%-2rem)]
                      ${isLeft ? "text-right" : "text-left"}
                    `}
                    >
                      <span className="font-h3 text-h3 text-secondary font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* Point central */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg ring-4 ring-surface">
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>

                    {/* Carte de contenu */}
                    <div
                      className={`
                      w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                    `}
                    >
                      <div className="bg-surface rounded-xl p-5 shadow-md border border-outline-variant hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        {/* Année mobile */}
                        <div className="md:hidden flex items-center gap-2 mb-3">
                          <Calendar size={16} className="text-secondary" />
                          <span className="font-h3 text-h3 text-secondary">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="font-h3 text-[18px] text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicateur de fin */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-on-surface-variant text-sm">
              <Clock size={14} />
              <span>Une histoire qui s'écrit chaque jour</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Historique;
