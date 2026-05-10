import AnimatedSection from "./helpers/animationSection";

import { Users, Brain, Trophy, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Users,
    variant: "primary",
    title: "Enseignants qualifiés",
    description:
      "Une équipe pédagogique expérimentée et passionnée par l'excellence académique.",
  },

  {
    id: 2,
    icon: Brain,
    variant: "secondary",
    title: "Encadrement personnalisé",
    description:
      "Un accompagnement individuel pour favoriser l'épanouissement et la réussite.",
  },

  {
    id: 3,
    icon: Trophy,
    variant: "primary",
    title: "Résultats remarquables",
    description:
      "L'un des meilleurs taux de réussite aux examens nationaux de la région.",
  },

  {
    id: 4,
    icon: ShieldCheck,
    variant: "secondary",
    title: "Environnement sécurisé",
    description:
      "Un cadre moderne, serein et sécurisé propice à l'apprentissage.",
  },
];

const variants = {
  primary: {
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    border: "border-primary/15",
    glow: "group-hover:bg-primary/15",
  },

  secondary: {
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    border: "border-secondary/15",
    glow: "group-hover:bg-secondary/15",
  },
};

function FeatureCard({ feature, delay }) {
  const styles = variants[feature.variant];

  const Icon = feature.icon;

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

        p-8

        shadow-[0_8px_32px_rgba(31,38,135,0.06)]

        transition-all
        duration-700
        ease-out

        hover:-translate-y-2
        hover:bg-white/[0.14]
        hover:shadow-2xl
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

      {/* Glow */}
      <div
        className={`
          absolute
          -top-20
          -right-20

          w-40
          h-40

          rounded-full
          blur-3xl

          opacity-0

          transition-all
          duration-700

          ${styles.glow}

          group-hover:opacity-100
        `}
      />

      {/* Border Light */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
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
          {/* Icon Glow */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Icon
            size={30}
            strokeWidth={2.2}
            className={`
              relative
              z-10

              ${styles.iconColor}
            `}
          />
        </div>

        {/* Content */}
        <div className="mt-7">
          <h3 className="font-h3 text-[20px] text-primary mb-4 leading-tight">
            {feature.title}
          </h3>

          <p className="text-on-surface-variant leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function HomeFeatures() {
  return (
    <AnimatedSection threshold={0.3}>
      <section className="relative overflow-hidden py-stack-lg">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block uppercase tracking-[0.35em] text-secondary font-bold text-sm">
              Pourquoi Nous Choisir
            </span>

            <h2 className="font-h2 text-h2 text-primary mt-5">
              Une institution tournée vers l'excellence
            </h2>

            <p className="text-on-surface-variant mt-5 max-w-2xl mx-auto leading-relaxed">
              Nous créons un environnement éducatif moderne combinant rigueur,
              innovation pédagogique et accompagnement humain.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default HomeFeatures;
