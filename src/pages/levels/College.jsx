import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Calculator,
  Globe,
  FlaskConical,
  Languages,
  Dumbbell,
  Palette,
  CheckCircle,
} from "lucide-react";

const curriculum = [
  {
    icon: BookOpen,
    bg: "secondary",
    title: "Français & Littérature",
    desc: "Maîtrise de la langue, analyse de textes classiques et expression écrite avancée.",
    span: "md:col-span-2",
  },
  {
    icon: Calculator,
    bg: "secondary",
    title: "Maths",
    desc: "Logique, algèbre et géométrie.",
    span: "",
  },
  {
    icon: Globe,
    bg: "secondary",
    title: "Hist-Géo",
    desc: "Comprendre le monde.",
    span: "",
  },
  {
    icon: FlaskConical,
    bg: "secondary",
    title: "Sciences",
    desc: "SVT, Physique-Chimie et technologie.",
    span: "",
  },
  {
    icon: Languages,
    bg: "secondary",
    title: "LV1 & LV2",
    desc: "Anglais et Langues au choix.",
    span: "",
  },
  {
    icon: Dumbbell,
    bg: "secondary",
    title: "EPS",
    desc: "Discipline et santé.",
    span: "",
  },
  {
    icon: Palette,
    bg: "secondary",
    title: "Arts Plastiques & Musique",
    desc: "Éveiller la créativité et la sensibilité artistique à travers des projets collaboratifs.",
    span: "md:col-span-3",
  },
];

const supports = [
  {
    icon: CheckCircle,
    title: "Préparation au Brevet (BEPC)",
    desc: "Un suivi intensif dès la 4ème pour garantir 100% de réussite avec mention.",
  },
  {
    icon: CheckCircle,
    title: "Méthodes de Travail",
    desc: "Ateliers dédiés à l'organisation, la mémorisation et la prise de notes.",
  },
  {
    icon: CheckCircle,
    title: "Soutien Personnalisé",
    desc: "Heures d'accompagnement pour renforcer les acquis dans les matières fondamentales.",
  },
];

function College() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,53,39,0.85), rgba(0,53,39,0.85))",
            backgroundSize: "cover",
          }}
        ></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6P5nMloCRfBP98BouXLIuuZvkK-LB2TZluW7MQG22fzTufQ0fPgYeZGl6Y_RKw-8MSlcute4WJoWPNg33THHaQpnRCF7DNk-8nopmZafPMAVD7wuWuk5B_Bim6XMd--sQ-DsLgcdBxS0KUxGEvbnQd3fM8qM6yfVV3Vs_u0FqHbTYZZFd8tR8YH-_8GnCjVqiRIQbeW-TFjYewHoGtSdmmwmEE0da6vxy-FnZ4viVr8_nJ3oZphefkf97iYCP3GriVzqmG1"
          alt="Collège hero"
          laoding="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
          <div className="max-w-3xl text-on-primary">
            <h1 className="font-h1 text-h1 mb-stack-sm text-secondary-fixed">
              Le Collège (6ème - 3ème)
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 mb-stack-md leading-relaxed">
              Une étape charnière pour construire l'autonomie et la rigueur
              académique au sein d'un environnement d'excellence.
            </p>
            <div className="flex flex-wrap gap-stack-sm">
              <NavLink to="/contact">
                <button className="bg-secondary-container text-on-secondary-container px-gutter py-3 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all">
                  Inscrire mon enfant
                </button>
              </NavLink>
              <button className="border border-secondary-fixed text-secondary-fixed px-gutter py-3 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all">
                Demander une brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-stack-md border-l-4 border-primary pl-gutter">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic">
                Le passage du primaire au secondaire marque une transition
                fondamentale. Au Collège Sacko Noumanian et Frères, nous
                accompagnons nos élèves dans cette mutation, passant d'un
                apprentissage encadré à une véritable autonomie intellectuelle.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Notre programme met l'accent sur le développement de l'esprit
                critique et la maîtrise approfondie des socles de connaissances.
                Chaque élève est encouragé à questionner, analyser et
                synthétiser.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6P5nMloCRfBP98BouXLIuuZvkK-LB2TZluW7MQG22fzTufQ0fPgYeZGl6Y_RKw-8MSlcute4WJoWPNg33THHaQpnRCF7DNk-8nopmZafPMAVD7wuWuk5B_Bim6XMd--sQ-DsLgcdBxS0KUxGEvbnQd3fM8qM6yfVV3Vs_u0FqHbTYZZFd8tR8YH-_8GnCjVqiRIQbeW-TFjYewHoGtSdmmwmEE0da6vxy-FnZ4viVr8_nJ3oZphefkf97iYCP3GriVzqmG1"
                alt="Bibliothèque"
                laoding="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-h2 text-h2 text-primary mb-stack-lg text-center">
            Un Curriculum d'Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {curriculum.map((c) =>
              c.title !== "Sciences" ? (
                <div
                  key={c.title}
                  className={`bg-white p-gutter rounded-lg shadow-sm border border-outline-variant hover:border-primary transition-colors ${c.span}`}
                >
                  <c.icon size={36} className="text-secondary mb-stack-sm" />
                  <h3 className="font-h3 text-h3 text-primary mb-2">
                    {c.title}
                  </h3>
                  <p className="text-on-surface-variant">{c.desc}</p>
                </div>
              ) : (
                <div
                  key="sciences-block"
                  className="md:col-span-1 bg-white p-gutter rounded-lg shadow-sm border border-outline-variant hover:border-primary transition-colors"
                >
                  <FlaskConical
                    size={36}
                    className="text-secondary mb-stack-sm"
                  />
                  <h3 className="font-h3 text-h3 text-primary mb-2">
                    Sciences
                  </h3>
                  <p className="text-on-surface-variant">
                    SVT, Physique-Chimie et technologie.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Réussite */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="bg-primary rounded-xl p-stack-lg flex flex-col md:flex-row gap-gutter">
            <div className="flex-1 space-y-stack-md">
              <h2 className="font-h2 text-h2 text-secondary-fixed">
                Réussite & Accompagnement
              </h2>
              <ul className="space-y-4">
                {supports.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-start gap-4 text-on-primary"
                  >
                    <s.icon
                      size={20}
                      className="text-secondary-fixed flex-shrink-0 mt-1"
                    />
                    <div>
                      <strong className="block text-lg">{s.title}</strong>
                      <span className="opacity-80">{s.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative rounded-lg overflow-hidden min-h-[300px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOJaWUawZIlIsid3EMr9F1Dipf9otCaUrQAX46xXbp6bs5oYY3-AcxhPOSOPcBS2pBqFWOHGortjtP1wgLwsq3X_zA9g4MtAjDld_2KJXs4kdKH329RT-T8w21PePVVa27czk4_M49zWVYwM1-MZd33ilyUN-wNzvULQ1SdmgnLgkz-SLpiyDj2OhF7C3ne0oxlRpXFjK1u95Hjvno2fpPswn5XUmSzVzG1Bp_z8F6cvTc9fQFl-AWk"
                alt="Classe moderne"
                laoding="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg bg-surface-container-low text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-h2 text-h2 text-primary mb-stack-md">
            Préparez l'avenir de votre enfant dès aujourd'hui
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
            Rejoignez une institution qui place l'excellence et l'épanouissement
            au cœur de son projet pédagogique.
          </p>
          <div className="flex justify-center gap-stack-md flex-wrap">
            <NavLink to="/contact">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-all shadow-md">
                Inscrire mon enfant
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="bg-white border border-primary text-primary px-10 py-4 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">
                Nous contacter
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default College;
