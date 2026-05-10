import { NavLink } from "react-router-dom";
import {
  Wifi,
  Monitor,
  Code,
  ChevronDown,
  ArrowRight,
  FileText,
  Clock,
} from "lucide-react";

const infra = [
  {
    icon: Wifi,
    title: "Fibre Optique Dédiée",
    desc: "Connexion haut débit sécurisée permettant l'accès instantané aux ressources mondiales.",
  },
  {
    icon: Monitor,
    title: "Stations de Travail",
    desc: "Ordinateurs de dernière génération équipés de processeurs haute performance.",
  },
  {
    icon: Code,
    title: "Logiciels Experts",
    desc: "Suites complètes pour le développement web, le design industriel et la gestion de projet.",
  },
];

const programs = [
  {
    title: "Cycle Primaire",
    subtitle: "INITIATION & DÉCOUVERTE",
    desc: "Découverte ludique de l'ordinateur, sensibilisation à la sécurité en ligne et premiers pas avec les outils éducatifs.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3uRmyt8ghJ9u6B2DjJwfB0wcVWS5k0ViixSqe2MogUzaU9FYrzM7XF043dBL4P0I-Fh1Aa0yigphsWCANUU7Dln_OSWFyWkfabIa6VjJo3P27gspBZk5YS6dq3gl3Gq0GKmFlOOsxilYU45yw-HozinTJfTsdGaTYrd8LlGozq4xGNm3X2NLZA9qai-RRh4_JqOg8sEV2zEJirMRNIP_NQ5znD7poGxptLg5TPyws4C0he5SkSaxql2wTpVX2wGs5fq-yv9KN",
  },
  {
    title: "Cycle Collège",
    subtitle: "MAÎTRISE DES OUTILS BUREAU",
    desc: "Approfondissement de la suite Office, recherche documentaire avancée et introduction au montage multimédia.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmhtXnMQThAkrI2_AkewI7qaTEDpYo6hviIdOqSQGFjZJDDPsHZ2HaN7Lco4Ljw_H_euoLOkRNd2DnjIpZR2wt02PS6figuIfNCrgEd_K7WtBiRXTGDegGmj1nWtjUgw1JxvL2as5SZbgjnze6XUSy6wfKeHZfDyHRv4XVG6iSzlxZ-0rmmHgAXgaoWSPOlxzqMuF1-pigf4Uf3ssraMz8jabO2mOI5CUjZOrMsliqXi2fvnP-V868chVks_FdcKIiUJX95XF0",
  },
  {
    title: "Cycle Lycée",
    subtitle: "CODAGE & DÉVELOPPEMENT",
    desc: "Algorithmique, développement web (HTML/CSS), Python et préparation aux certifications internationales.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChmU_P2b4lih9qzYFX23_vxV36S6U3o4_r1pvnZZzIxOx2TNNCVZc2Ax5RRR3JEwN_5l9Pi3wmK_KkXIXYL2SZ6tJW4-QAysFvvb-eN-OfPCpv9C0BoqWB48h38_lmRySulo4zx1FANKQKNHkUHzWiCOFlVTtiFJtHb6z1LfGm8Vdciw6EVeo2u2PBKZSuVQXm039CtnmKTGd0NrtQII0st3aPMmTvff5-oCwo4h8Sl1ECk5TvxUcdKAtVD4-DhV5K9TGai1SY",
  },
];

const portfolio = [
  {
    title: "App Mobile Eco-Guinée",
    sub: "Projet de Terminale - Design UI/UX",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxaUrZOjRl5AK-iYcysWN793dsCWQaA0355hv9Lcho-oooSTgKlDSKOHJW8SKxvHiNMAtU0W0WHF8rGKTKKGUs2w2yUx7CLDMi1QipNBJ3fIunEPXiG0eUDrcKJe1zP1rvfUNU2nLQkzMpjH1fQZ1d9274ec_PLTFsj2IB4XW0lzJErp-MtGHsG0bnLGG50pmcgqazxCogTGe1-qoWd4d3Sn2jlbkukRVl6v3_hTKO501svHe96FqKkHc0JMSmn8wBJox1moy7",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Modélisation 3D",
    sub: "Atelier Architecture - Classe de 1ère",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6fG-vDeQWSGqUhpnuGWLpnYIWsmn8RbL3QBKNIBAT3YGczXLxx_KyLPoC2Cow2VDbrAA5j5tJjI3_ROp6oGtiYohRfREUDkRO1AsmrmwDE4vnvMnZtK3ZqC7FnScIS6-kdPNN_oEBKk1GOiBv14IncBEXZXB5cC0nr618MpreR587LZSq0_gYe8F8HtSt4P-VxQI3UF9AjRes9z8xcdzKmmqmIV1ZpZj2M84oXyCAziYTMisQMhqDNIxmRMrvkqe3IPtAHae",
    span: "md:col-span-2",
  },
  {
    title: "Club Robotique",
    sub: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB66lF7uM_GNrOuuXvN-8XA5LE1T4lMNuJrdPK3ruUFY99VHYWp5iiKkJtOa5owUu8T34Ch-Md7f5roz0f5cgmt_PjifYzQqtEJ2ZV29hpiyNdrxBUu4H7G0Pp8es6blHNRND_BLLPZ1UrqQ-Uv-a7w5PFmYY6TVDDCkEfICfli3zfGWBX8eJGootGFMIFStlF_NnApyGhT4TQ-8bG8iSL40DLiruX06Q5TPZCXXA8alG_cjBSb9VV6CvE9X0yy6x6hTdcnYDMK",
    span: "",
  },
  {
    title: "Digital Business",
    sub: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApd1F97W7SG7eAEEQ0l3nS0D9Jwr6aOhIC6GpoTh2z2NW853WHFVPdynzqoDVuUccD-5qSGu725ckXny0Hjvj3rOEp6dqkulcNBfNZspueK33yyPZIWK-2FcYhRjJd6_Z8UXnnkZUcSm69EMuB4K7IjL1gf33bE7wtspEEL09Xncsl14K49WrblDUKR9dwHTyOPLdLnsftJ1mg58gHH6buW0DXhefd9uQcqUE6rM9VkaJjiwPGyfpiPuLX7mwxv1a2FHtXD6LH",
    span: "",
  },
];

const faqs = [
  {
    q: "L'accès au lab est-il ouvert à tous les élèves ?",
    a: "Oui, l'accès est intégré dans l'emploi du temps de chaque cycle. Des créneaux libres sont également disponibles pour les projets personnels encadrés par nos instructeurs.",
  },
  {
    q: "Quels langages de programmation sont enseignés ?",
    a: "Nous commençons par Scratch pour les plus jeunes, puis nous évoluons vers le HTML/CSS, le JavaScript et le Python au collège et au lycée.",
  },
  {
    q: "Proposez-vous des certifications internationales ?",
    a: "Absolument. Nous préparons nos élèves de terminale aux certifications reconnues mondialement (Microsoft Office Specialist, bases Python PCEP).",
  },
];

function Computer() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe4G2ruYJV1sA7B6HWveevkzGs9lH7n3Nb35GtlscrHudqYttdeZstJ9uyYIbzmerBHho3n8ZvJWa1Cq9yTfuN2K1okxXegKQ2-UjbhOFqQ_jUQP252np-kOkxfz9xfAQ47aANLYHkSWzvKqknnAoLK8AFC2LLzfH-nqq5Vdl-1_MlSkNc7i7e4qVXjiCKArx-G8PbYTJIAfKH6EEUfMYpSHTK6scNMwbYVDxjIrbVjfb9rkOzw-5OVRH2EFFNOrJ3a3dVEtRi"
          alt="Centre informatique hero"
          laoding="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
          <div className="max-w-2xl text-on-primary">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-6">
              Pôle d'Excellence Numérique
            </span>
            <h1 className="font-h1 text-h1 mb-6">Centre d'Informatique</h1>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed mb-8">
              Façonner les leaders de demain à travers la maîtrise du numérique.
              Notre centre allie technologie de pointe et pédagogie innovante.
            </p>
            <div className="flex gap-4 flex-wrap">
              <NavLink to="/contact">
                <button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-sm text-label-sm font-bold hover:opacity-90 transition-all">
                  Découvrir le cursus
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="flex flex-col md:flex-row items-center gap-gutter">
            <div className="w-full md:w-1/2">
              <div className="border-l-4 border-primary pl-6 py-2 mb-6">
                <h2 className="font-h2 text-h2">Notre Vision Numérique</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
                "L'informatique n'est plus une discipline isolée, c'est le
                langage universel du savoir moderne."
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                À Sacko Noumanian et Frères, nous intégrons la technologie au
                cœur de chaque apprentissage. Notre objectif est de transformer
                nos élèves de simples consommateurs en créateurs avertis.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTylc2iGdf7OMLs3NAqHmdP0fQgXaCL1T_Jd2VfAPjSY0RGVLj4V8eZvprU0P5h4TDk3i2CG7yvo0TF59Z2_tMWiNn19at3tCJCu_kF6lmu2MlwslxW7xgRV8MiW9xXrGcP2a0gCTxDoC2zVHLLlvmiECKJbSR25w7dA6RIkpB-pCbr52ZxGkEJ__0bs_zninGu4jG7AwhRVNkqqW9hyNOlmvM4mpNXMXQqcLi66RCohDWEaIpRVnlN9jeBufYX_UnPZHH3FTL"
                alt="Vision numérique"
                laoding="lazy"

                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Équipement & Infrastructure
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Un environnement technologique de niveau professionnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {infra.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-surface-container-low rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-h3 text-h3 mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-stack-lg bg-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-h2 text-h2 text-on-primary mb-12 text-center">
            Programmes de Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {programs.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-xl h-[400px]"
              >
                <img
                  src={p.src}
                  laoding="lazy"
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="font-h3 text-h3 text-on-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="font-label-sm text-label-sm text-secondary-fixed mb-4">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-on-primary opacity-80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-h2 text-h2 text-primary">Lab des Talents</h2>
              <p className="text-on-surface-variant">
                Aperçu des réalisations numériques de nos élèves.
              </p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors">
              Voir tout <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[600px]">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-xl overflow-hidden group shadow-md ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  laoding="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h4 className="font-bold text-lg">{p.title}</h4>
                  {p.sub && <p className="text-sm opacity-80">{p.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-primary mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur notre pôle numérique.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-outline-variant rounded-xl overflow-hidden bg-surface"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="font-h3 text-body-lg font-bold text-primary pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    className="text-secondary flex-shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-surface-container-highest border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="font-h2 text-h2 text-primary mb-6">
            Préparez leur avenir dès aujourd'hui
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Inscrivez votre enfant dans un établissement qui place l'innovation
            au premier plan. Places limitées.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/contact">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2">
                <FileText size={18} />
                Dossier d'inscription
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                <Clock size={18} />
                Prendre rendez-vous
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Computer;
