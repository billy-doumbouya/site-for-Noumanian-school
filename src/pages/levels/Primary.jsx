import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Palette,
  CheckCircle,
  Monitor,
  Sun,
  Users,
} from "lucide-react";

const subjects = [
  {
    icon: BookOpen,
    bg: "primary-container",
    color: "on-primary-container",
    title: "Français",
    desc: "Maîtrise de la lecture, de l'expression écrite et orale pour une communication fluide.",
  },
  {
    icon: Calculator,
    bg: "secondary-container",
    color: "on-secondary-container",
    title: "Mathématiques",
    desc: "Développement du raisonnement logique à travers l'arithmétique et la géométrie.",
  },
  {
    icon: FlaskConical,
    bg: "primary-container",
    color: "on-primary-container",
    title: "Sciences",
    desc: "Exploration du monde vivant et de la matière pour susciter l'esprit scientifique.",
  },
  {
    icon: Palette,
    bg: "secondary-container",
    color: "on-secondary-container",
    title: "Arts",
    desc: "Expression créative par le dessin, la peinture et la musique.",
  },
];

const activities = [
  {
    title: "Clubs de Sport",
    subtitle:
      "Football, Basketball et Athlétisme pour forger l'esprit d'équipe.",
    bg: "bg-primary",
    text: "text-on-primary",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7l9ToXxqsEF2tvt4FY_9Qzg3YF7INrvBLRLmeDJKws0qN0RZS5NqQ5zdYKY1VRaH7SZEeDQSaRjOf52RoVshLiQ_R8z3XaGUrAYZNBVNwpYzt12Fs66mYLc-CHsZQQzBmRic9VkJ4wxcSXQ7BBCBZe7yS6uTo3W3za72Ogq_kFtmg27IOR98C1XPfmkzsvDY3H9Er7XIIKFv3sLnh1qhGPqOsBVIx4Vu7kcQQN5oIikuIWkqPBvKWdJk0A2j542d0Dlc0DkLIyu_uQ8wrALvl4yDVxjV14EtM2txt",
    span: "md:row-span-2",
  },
  {
    title: "Atelier Créatif",
    subtitle: "Peinture, poterie et arts plastiques.",
    bg: "bg-secondary",
    text: "text-on-secondary",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKZ6BT4bQzZVSz1-9gylxwCbczNI0_zG0wuLDIdsG0R32zFCQw7zdT_yzCe_srnI2WpFcX3GSE3dnXh0-UonGwUJUe_viwwoUU-8WKHHXNOb8bYfoFxZr_PyWI1b4XqhEsRH8c0XBMxNCyPsLHc-7us-oFOprxfXP3363diaZO1AB85pyCus4yP0lRHK79SfmsYmLHkK2hWq0I65tjl1w2fMixGRV_gUqfy8OFKAdQLIFRtLbfJ_4NiwL45dl2eexQiv8V5oPt",
    span: "",
  },
  {
    title: "Théâtre & Musique",
    subtitle: "Expression scénique et éveil musical.",
    bg: "bg-primary-container",
    text: "text-on-primary-container",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt-x7vFyO0CiV9ftT6QUH1pOpncUZF-JlpAXQTeYPGhe-2yXP15r1D5YaFoA1SNYTUD65BtulQ8Ji7hTXKhfwzHnm8I4Bcbfbkci--C57IkLf3BzJp0Zn_Mj3ps7zWOVl2EXehtEjgq1glNmFvkTb853F9GnY2PYdkYR9qgG0oHF4sXsHKgl3GrjJkVZc0mPYpJwZdjhHA-bRVblDgQJuKDDHkcjJRE_41IOrL4UAKsWhX9A2wuVheD00Mde8tX6EC4bPp1jvL",
    span: "",
  },
];

const parentItems = [
  {
    icon: Users,
    title: "Rencontres Individuelles",
    desc: "Points réguliers sur les progrès scolaires.",
  },
  {
    icon: Sun,
    title: "Événements Scolaires",
    desc: "Fêtes, sorties et journées portes ouvertes.",
  },
  {
    icon: Monitor,
    title: "Plateforme Parentale",
    desc: "Suivi numérique des devoirs et absences.",
  },
  {
    icon: Users,
    title: "Conseil des Parents",
    desc: "Participer aux décisions de la vie scolaire.",
  },
];

function Primary() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ21n5mTkgo2VAtLsOwwkBMwU0tu5dOtBfqHgCSyACZZiv7BjF9cYocBWdCe-z8-7i5UH7_1x8S86qBlJxWhkYbM_ECgEGN3WVHn3MeWGm60BWHwKC5QTgxY9AvwMhBYjhx2CKm3xNHhYnCwZveyTcxzVHkJtHKrMFOiA-78X6JDsNJhg7X15Nkas1EcHbW_Jbk_tJP-nYCv-_O9lRH3kcG06FEwL2oznuz8uO00rQtGqaS_iNe7fubaQBaTDrjruTEaTQ_QJ6"
          alt="Primaire hero"
          laoding="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
          <div className="max-w-2xl bg-surface/90 backdrop-blur-sm p-stack-lg border-l-4 border-secondary rounded-r-xl shadow-xl">
            <h1 className="font-h1 text-h1 text-primary mb-stack-sm">
              L'Enseignement Primaire
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic">
              "Éveiller la curiosité et bâtir les fondements de la réussite."
            </p>
            <div className="w-24 h-1 bg-secondary mt-stack-md"></div>
          </div>
        </div>
      </section>

      {/* Matières */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-lg">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              Programme Académique
            </span>
            <h2 className="font-h2 text-h2 text-primary mt-2">Matières Clés</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {subjects.map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${s.bg} rounded-lg flex items-center justify-center mb-stack-sm`}
                >
                  <s.icon size={22} className={`text-${s.color}`} />
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-2">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre apprentissage */}
      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <div className="border-l-8 border-primary pl-gutter">
              <h2 className="font-h2 text-h2 text-primary mb-stack-md">
                Cadre d'Apprentissage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface mb-stack-sm">
                Nous croyons que chaque enfant mérite une attention
                particulière. Notre environnement est conçu pour être à la fois
                stimulant et sécurisant.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Nos méthodologies reposent sur l'
                <strong>apprentissage actif</strong>, où l'élève est acteur de
                ses découvertes. Grâce à des effectifs réduits, nos enseignants
                assurent un <strong>soutien personnalisé</strong>.
              </p>
              <ul className="space-y-stack-sm">
                {[
                  "Pédagogie différenciée",
                  "Outils numériques modernes",
                  "Classes aérées et lumineuses",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="font-label-sm text-label-sm font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary-fixed/30 rounded-xl blur-xl group-hover:bg-secondary-fixed/50 transition-all"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADIb6D3xipYdiXoznXebOcxzUPaIkmlv3jPLrSu6KuNazLBLZy18IpagpZpnVUEbEdDDVfzN-flVwxMf0hnGXvGxJNZ2pZUyEeXrVlt_mGia1LFW68C_R8mXY2pXYmtLDJk49M9d0TSJEuKd9HicmJGgBES2n5k_exOg7-v2gGpeObVLpvf6wAMD1Lroqm093IekY0Ame7aKVplvC58finmqkcVFc4gyyilKRB0uO1fUr2YLrNot28WRpGB0P7fyKMjPUi8tU0"
                alt="Apprentissage"
                laoding="lazy"
                className="relative rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activités périscolaires */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="font-h2 text-h2 text-primary">
              Activités Périscolaires
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-stack-sm">
              L'épanouissement passe aussi par le sport, les arts et la culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[500px]">
            {activities.map((a) => (
              <div
                key={a.title}
                className={`${a.bg} p-gutter rounded-xl flex flex-col justify-end relative overflow-hidden group ${a.span}`}
              >
                <img
                  src={a.src}
                  laoding="lazy"
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-10">
                  <h3 className={`font-h3 text-h3 ${a.text}`}>{a.title}</h3>
                  <p className={`${a.text} opacity-80 text-sm mt-2`}>
                    {a.subtitle}
                  </p>
                </div>
              </div>
            ))}
            <div className="md:col-span-2 bg-surface-container-high p-gutter rounded-xl flex items-center border border-outline-variant">
              <div className="flex-1">
                <h3 className="text-primary font-h3 text-h3">
                  Club de Robotique
                </h3>
                <p className="text-on-surface-variant text-sm mt-2">
                  Initiation à la programmation et au montage de robots pour les
                  futurs ingénieurs.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-on-primary flex-shrink-0">
                <Monitor size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implication parents */}
      <section className="py-stack-lg bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="bg-primary rounded-2xl p-stack-lg flex flex-col md:flex-row items-center gap-gutter">
            <div className="flex-1">
              <h2 className="font-h2 text-h2 text-secondary-fixed mb-stack-sm">
                Implication des Parents
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary mb-stack-md">
                Le succès de l'élève repose sur une collaboration étroite entre
                l'école et la famille.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-primary/90">
                {parentItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-2">
                    <item.icon
                      size={20}
                      className="text-secondary-fixed flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="font-bold block">{item.title}</span>
                      <span className="text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <NavLink to="/contact">
                <button className="bg-secondary-fixed text-on-secondary-fixed px-stack-lg py-4 rounded-xl font-h3 text-h3 shadow-lg hover:scale-105 transition-transform">
                  Nous contacter
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg text-center bg-surface">
        <div className="max-w-3xl mx-auto px-margin-mobile">
          <h2 className="font-h1 text-h1 text-primary mb-stack-sm">
            Prêt pour l'aventure ?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
            Les inscriptions pour l'année scolaire prochaine sont maintenant
            ouvertes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-gutter">
            <NavLink to="/contact">
              <button className="w-full sm:w-auto bg-primary text-on-primary px-stack-lg py-4 rounded-lg font-bold hover:bg-primary-container transition-all">
                Inscrire mon enfant
              </button>
            </NavLink>
            <button className="w-full sm:w-auto border-2 border-primary text-primary px-stack-lg py-4 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all">
              Demander une brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Primary;
