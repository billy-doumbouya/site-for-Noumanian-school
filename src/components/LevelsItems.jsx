import { NavLink } from "react-router-dom";
import AnimatedSection from "./helpers/animationSection";
import { ArrowRight, School, BookOpen, GraduationCap } from "lucide-react";

const variants = {
  primary: {
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glow: "group-hover:shadow-primary/10",
    button: "text-primary",
    buttonHover: "group-hover:text-primary",
  },
  secondary: {
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    glow: "group-hover:shadow-secondary/10",
    button: "text-secondary",
    buttonHover: "group-hover:text-secondary",
  },
  tertiary: {
    border: "border-tertiary/20",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    glow: "group-hover:shadow-tertiary/10",
    button: "text-tertiary",
    buttonHover: "group-hover:text-tertiary",
  },
};

const levels = [
  {
    id: 1,
    icon: School,
    title: "Primaire",
    description:
      "L'éveil des curiosités et l'acquisition des bases fondamentales dans un environnement bienveillant.",
    variant: "secondary",
    to: "/levels/primary",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Collège",
    description:
      "Le développement de la pensée critique et l'approfondissement des connaissances disciplinaires.",
    variant: "primary",
    to: "/levels/college",
  },
  {
    id: 3,
    icon: GraduationCap, // Cette icône existe dans Lucide
    title: "Lycée",
    description:
      "La spécialisation et la préparation intensive aux examens nationaux et aux études supérieures.",
    variant: "tertiary",
    to: "/levels",
  },
];

function LevelCard({ level, delay }) {
  const styles = variants[level.variant];
  const Icon = level.icon;

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        ${styles.border}
        bg-white/10
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(31,38,135,0.08)]
        transition-all
        duration-700
        ease-out
        hover:-translate-y-3
        hover:bg-white/[0.14]
        hover:shadow-2xl
        ${styles.glow}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

      {/* Top Glow */}
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Border Shine */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 pointer-events-none" />

      <div className="relative z-10 p-8">
        {/* Icon Container */}
        <div
          className={`
            relative
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            ${styles.iconBg}
            border
            border-white/10
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          `}
        >
          {/* Small glow */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Icon
            size={34}
            strokeWidth={2.2}
            className={`
              relative
              z-10
              ${styles.iconColor}
              transition-transform
              duration-500
            `}
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="font-h3 text-h3 text-primary mb-4">{level.title}</h3>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            {level.description}
          </p>

          {/* CTA */}
          <NavLink
            to={level.to}
            className={`
              group/link
              inline-flex
              items-center
              gap-2
              font-bold
              text-[15px]
              transition-all
              duration-300
              ${styles.button}
            `}
          >
            <span className="relative">
              En savoir plus
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[1.5px]
                  w-0
                  bg-current
                  transition-all
                  duration-500
                  group-hover/link:w-full
                `}
              />
            </span>
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="
                transition-all
                duration-300
                group-hover/link:translate-x-1
              "
            />
          </NavLink>
        </div>
      </div>
    </article>
  );
}

function HomeLevels() {
  return (
    <AnimatedSection threshold={0.3}>
      <section className="relative overflow-hidden py-stack-lg bg-gradient-to-b from-surface-container to-surface">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block uppercase tracking-[0.35em] text-secondary font-bold text-sm">
              Excellence Académique
            </span>
            <h2 className="font-h2 text-h2 text-primary mt-5">
              Nos Niveaux d'Enseignement
            </h2>
            <p className="text-on-surface-variant mt-5 max-w-2xl mx-auto leading-relaxed">
              Un parcours structuré conçu pour accompagner chaque élève vers
              l'excellence académique, personnelle et professionnelle.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <LevelCard key={level.id} level={level} delay={index * 120} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default HomeLevels;
