import { NavLink } from "react-router-dom";
import { Award, ShieldCheck, Gavel, Users } from "lucide-react";
import { useInView } from "../components/helpers/useInview";

function About() {
  const { ref: heroRef, isInView: heroIsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: histoireRef, isInView: histoireIsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: valeursRef, isInView: valeursIsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: timelineRef, isInView: timelineIsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: teamRef, isInView: teamIsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: galerieRef, isInView: galerieIsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: citationRef, isInView: citationIsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: ctaRef, isInView: ctaIsInView } = useInView({ threshold: 0.3 });
  const values = [
    {
      icon: Award,
      title: "Excellence",
      desc: "Nous visons le dépassement de soi dans chaque discipline académique et artistique.",
    },
    {
      icon: ShieldCheck,
      title: "Intégrité",
      desc: "La droiture morale et l'honnêteté sont les fondements de notre communauté scolaire.",
    },
    {
      icon: Gavel,
      title: "Discipline",
      desc: "Un cadre structuré pour favoriser la concentration et le respect des règles collectives.",
    },
    {
      icon: Users,
      title: "Respect",
      desc: "La valorisation de l'autre et de la diversité au sein de notre établissement.",
    },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Inauguration à Kankan",
      desc: "Ouverture des premières classes primaires sous la direction de la famille Sacko.",
    },
    {
      year: "2010",
      title: "Expansion du Lycée",
      desc: "Construction du pavillon scientifique et introduction des nouvelles technologies.",
    },
    {
      year: "2022",
      title: "Reconnaissance Nationale",
      desc: "Classé parmi les 5 meilleurs établissements de la région pour les résultats au baccalauréat.",
    },
  ];

  const team = [
    {
      name: "M. Noumanian Sacko",
      role: "Directeur Fondateur",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAmgFmMUHNHK-ILnJb-RAbaAMdVwU99P-eMfuCTDB8r45fM8ZJVpR48Uh6hY5hSAMv0IR_05hI6RKPcicAG4Tb6VTrUtsnCx7XejDYn3UHkbek--PAP9yutai9K77ZihShYb843rsWMy0vzRkLrN4GaiEepbpSt3unrf9CH_4pPeI_1o_w90ihT2Ea3o-ojPnpWg7esYr6QNjGX7I2SWK9k0wL1gjudQrgPUKQDi9hmZrFKif3TMD2lIXdFSjJo7YIX-O0tBSE",
    },
    {
      name: "Mme Keita Aminata",
      role: "Préfète des Études",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYLE0e8P8XdSNWGiOboK46gX3pUjNnRaRz4_g-sMyrb0HQVNyU1fzqhfVAwUFrskkaHaEQVt7ii-j8gEBxbgOaLZLe7C_IdyqpM5yfPmMOlM9JrfDxMKCNr5jKB2Q7bZu_bZ2s8zbWBnaornarYw3fCf-niQa0uYMnLxeRKigPo5gJv1Uhkp0vEBhN8P9TwYSLJwun_BlGj8BMTRrewWZSzJb0_8V8GJGd-HZYp12CS_W3S-sD3LM91Gbl02FWhceYSlbzwR1W",
    },
    {
      name: "M. Diallo Ousmane",
      role: "Responsable Scientifique",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9a-_MdKfSIyF8Itl1N9-_DDK9KtANpowtAD7jzxF3TBeHKXB1yHLtTqiurdObAqpKrCeUS9wMNaF8FwWMKOzAschLE1SPQrvT_msX2IH65b2jwaBfoi2_GNfvj_l_ir2fQ325lT5FdYTbMRwTIJy8R9hqp8r3QGBYtmkVcqZOwpAdp6dvNf4ZkiyA2YZFxiF-qRdvlodYPjGBOKPUdcup6A6sSOYAiGRSy1iQhlYeOKATCr2kEB2gLDBG",
    },
    {
      name: "Mme Camara Fatou",
      role: "Directrice Administrative",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIrPZJPGz7ZlAC5wWGITZNfVcT6Bc_TH4C8qfBRPM3Bupyx4Z3vfpnKmmpewZ990b5dBRZX6cHQJ3e5gPkgTu9gXyN3T-YFZ-E8nP_xA5BEvPFDywzcd7ETmoh-FpPif90HSAJ1zE6yIk805ldOSSH71JmnL6daskxlvIGW_hLMC61nS6AQM0vsN5GJLIUCxTa58Kud12mqR4Lve0qdpP5igEljinZJnZKXtjy39mgha21EXRzhsRPUxdUl5eklip6MM59DZUI",
    },
  ];

  const gallery = [
    "htps://lh3.googleusercontent.com/aida-public/AB6AXuDD5Q-G4lFuRLorUyDQ6fE8BdjH1KGosJgZXGh_UjV9KG6WwSH9N_0X9tNw-dnD2s3trqmIZa5yL1_e3mO3t5u3BPlYVbBcgVugb9B756la_LbfPbczMQEF7YGPahdm3dmcKapK6TPQFOlO7MIoS8E5ItxUOpHZu4r8LrTZpccYwCoAXwkovCfweKkoqG1KT9EdjvSBhAJs1SWHwEeqDZoqQR5AnLJOCKy-r1re1ycQroj1qEZMll5pZoopmbeganQVdJMlJRTn",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDV8iLmTsAUiERbyX0b4JbH51EtnGdcQtntmxMQh6rJ68qhHgz5sfWVdkjtcqNubZpZoPsypzLKUDYAQGNyFVGhqJUjGvwtVxM3v_LQ9b-P05bjZCtjha8oZeHYeMi2t0-kOzdQ0VhTFQhHCPFQx_4OnhRdvIUcvSgo5UaAt91BPT6wz90fY9zIBi-0sVomDuc_jne5fapayI2J44WDJIDlhkLScxskhpDEqw_T6aZbxh5-4nz9MSpGs1W3uJlRBjDxaFn-Cxt5",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzE3Dk1D5_vsTYT19tV7vlfM_GYdG0L_Ws9UVEBc-AwYnX9MPXjasSv4DrsJZ0Q_u8BwsQUZyLQhP1UzyxNSAJzbfCeg-JhqYu4Mxfx-QY6B8hFqxwJTcBIpC7y_30Fsp0vZTaA8D6UIcJ4uio4o4sTtMWzRD-iySzkmOywl9Nv8kXW4G_cR8f_ZGos1VLPByUgEXeuSyj_5LaUZ4fvsAXw9sGobeL8P4XRDk5mu1FpHuAcUEA7f67jXFIzhArHyE5BK978H90",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC63QHVup7AtzX47eGx9RQ_b3RoF2X_RB6YODB9jG5sFh9JJH_neSZ3JJYHCZoPzmrSq9CZ2i249HzxEGih9cV3_rHXXzzEOUjM2JsFdNqQHzGuBD-Cc1yc7YF9_Y6wJA3AmJRCuSzClzA0hhwBSzh_gvM3ycB-asvH9XSssow9eqjkG5b-ybCdKZ3Ik62qWoEYmQuFNHOHqwwSLS4GbqRYd_j2u1z4QXYUI5JI8F8mPgeAhxZnWZcdF9KZkUwOJd_U405Fr-RN",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDf-ITEhu7GdhEwCkZZM9ShFhic4HmgFomsRHHmUHpyBba-0u1IsRbCgVlzTMJ_tllSqXyoaQQB5YspMASmap2Ww4TUKMe1CgVFv9J0HoGemOopuvivYqRUFxLajyVwA6t725KgnLUQfaT0g8X8JrHbg6AP8kWB6VrJfIRp0KbbQ9nx7sBaGMRbo9KmeXR0SOoP3Gj2ZtFfw_qkz4cQy6zzR8VbrQv79753QPM3fDQC5b3TS_DvWfJeBc5I8czCo42dtQoatQ9l",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6NY_mkzl3AvZitUjCCI--DPc2va7C82zRSi_waF0CETp0HN5OEhPGIhP-tMZeBR4saaXQEuQAM_nb2MDl86tIW1GYflt6jtWmd26qLB0BPnpLD1hOmb3FJ6wMFP-zxkNYD5bXCbMVW_lGTO5OZE2vVhpcz5cCuEsF7zCQJraohRGfhXeSVvrNSX1gfjZvyoHH_Hgh2SeMlnQegUBaEA_pLF7MMrUUeP_TAzrobOKg17SIdhcN136oFVw4lr-pv9FNqGq9Qadq",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className={`relative h-[500px] flex items-center justify-center overflow-hidden transform duration-700 transition-all ${heroIsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEv51DYI7JZ-KSeqT6E5RVv4HEEwPhMz6VzsQS93Z2S0ZIkBMDIPUDvHGRaDPIXnxaBCXGkmew951pl2rdUbua-bfA56b6DNmWUi8K4ZYw4DPEGBrXvG01a-NgryjuhNiEjyQXWtoUr1EuDwyB9DJ9SQzrQ5cu1GgZk2Bt7V-bPNgduDYDkjKMdHeqWXyKgZj1bblscb3fmV5bHedM3Oc-2zXQhKlyTxC3HF2pCIWbfUyBsGsUbmbWAS0RY9DsZ5iXbVVXnNjE"
          alt="À propos hero"
          laoding="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-h1 text-h1 text-on-primary mb-4">
            À propos de notre école
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl mx-auto italic">
            "L'éducation comme héritage, l'excellence comme horizon."
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section
        ref={histoireRef}
        className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter transform duration-700 transition-all ${histoireIsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <h2 className="font-h2 text-h2 text-primary mb-stack-md">
              Notre Histoire
            </h2>
            <div className="border-l-4 border-primary pl-gutter">
              <p className="font-body-md text-body-md text-on-surface mb-4">
                Fondée au cœur de Kankan, l'institution Sacko Noumanian et
                Frères est née d'une vision familiale dédiée au rayonnement du
                savoir en Guinée. Depuis ses débuts, notre école s'est imposée
                comme un pilier de la rigueur académique et de l'intégrité
                morale.
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                Ce qui n'était autrefois qu'une ambition est devenu aujourd'hui
                un complexe éducatif moderne, accueillant des générations
                d'élèves portés par le désir de bâtir l'avenir.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxvyjJG9yxgQtExE1fVPUQyH5uWcBxGegzARojM8PD2I0DZx_KuR51I656yTpXiwQn8PrNEfutPfSkeekw9CA578R9KfLjpwlmVbP3ZlJ4S7SDtpGOg5gG5iZC4wTMzV9lyIL73KDj7iiRo0nThzdca16WhWWHMQIv06Xm7XDrXnrG5O8LVbE9Eomt0pNFK1VDO5qQkkUsdFiYG4VM9c8CLEYML8S4SWm32niomIQTyQzLJSgieg-_PI67Knbeo3mij52FfsYt"
                alt="Salle de classe"
                laoding="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-surface-container rounded-lg overflow-hidden shadow-sm mt-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdw_VR_TMRtMVbzVqFfRjEi-mFcqdvW12zWMmiNTR4WbApXw6bUo_1Sco3u9kCnVV4IDxBtL2zGoGR18Mw_5-yPCY-yEe482AetzH8jmvDBStm6rAMf41Q389B3jbBpvvpxXJ9Gt7owtS-PGrHPdtEfwMBk7tJDFusHFZPOKp9EzPmitwo4u0mIKGAXxhbjAsY71ZAuVWTZIJ6RFbuBAVhXhN7lekncbJasSdP4JIk1-BbZpmWbIJh2yID8mlcnw5yCyxROzqn"
                alt="Bibliothèque"
                laoding="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section
        ref={valeursRef}
        className={`bg-surface-container-low py-stack-lg transform duration-700 transition-all ${valeursIsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-h2 text-h2 text-primary text-center mb-12">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-container-lowest p-gutter rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-all"
              >
                <v.icon size={36} className="text-secondary mb-4" />
                <h3 className="font-h3 text-h3 text-primary mb-2">{v.title}</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={timelineRef}
        className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter transform duration-700 transition-all ${timelineIsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-h2 text-h2 text-primary mb-12">
          Jalons Historiques
        </h2>
        <div className="space-y-stack-md relative before:absolute before:left-4 md:before:left-1/2 before:w-0.5 before:h-full before:bg-outline-variant">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="relative pl-12 md:pl-0 md:flex md:justify-between items-center w-full"
            >
              {/* Année gauche sur desktop */}
              <div
                className={`md:w-5/12 text-right hidden md:block ${i % 2 !== 0 ? "invisible" : ""}`}
              >
                <span className="font-h3 text-h3 text-secondary">
                  {item.year}
                </span>
              </div>

              {/* Point central */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-surface shadow-sm z-10"></div>

              {/* Contenu */}
              <div
                className={`md:w-5/12 bg-surface-container p-gutter rounded-lg ${i % 2 !== 0 ? "md:ml-auto" : ""}`}
              >
                <span className="md:hidden font-h3 text-h3 text-secondary block mb-2">
                  {item.year}
                </span>
                <p className="font-body-md text-body-md font-bold text-primary">
                  {item.title}
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  {item.desc}
                </p>
              </div>

              {/* Année droite sur desktop */}
              {i % 2 !== 0 && (
                <div className="md:w-5/12 text-left hidden md:block pl-gutter">
                  <span className="font-h3 text-h3 text-secondary">
                    {item.year}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section
        ref={teamRef.ref}
        className={`bg-primary py-stack-lg transform duration-700 transition-all ${teamRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-secondary-fixed mb-4">
              Notre Équipe Dirigeante
            </h2>
            <p className="font-body-md text-body-md text-on-primary opacity-90 max-w-2xl mx-auto">
              Des éducateurs passionnés et des administrateurs chevronnés
              dévoués à la réussite de chaque élève.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] bg-primary-container rounded-lg mb-4 overflow-hidden shadow-lg border border-on-primary/10">
                  <img
                    src={member.src}
                    alt={member.name}
                    laoding="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-h3 text-h3 text-secondary-fixed">
                  {member.name}
                </h4>
                <p className="font-label-sm text-label-sm text-on-primary opacity-80 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section
        ref={galerieRef.ref}
        className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter transform duration-700 transition-all ${galerieRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-h2 text-h2 text-primary mb-8">Vie de l'école</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="aspect-square bg-surface-container rounded shadow-sm overflow-hidden group"
            >
              <img
                src={src}
                laoding="lazy"
                alt={`Galerie ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Citation */}
      <section
        ref={citationRef.ref}
        className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter transform duration-700 transition-all ${citationRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="bg-surface-container-high border-l-8 border-primary p-12">
          <blockquote className="font-body-lg text-body-lg italic text-on-surface">
            "Notre engagement n'est pas seulement de transmettre des
            connaissances, mais de forger des caractères capables de relever les
            défis de demain avec sagesse et intégrité."
          </blockquote>
          <p className="mt-4 font-label-sm text-label-sm font-bold text-secondary">
            — Message de la Direction
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef.ref}
        className={`py-stack-lg bg-primary text-center px-margin-mobile transform duration-700 transition-all ${ctaRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-h2 text-h2 text-on-primary mb-6">
            Rejoignez notre communauté d'excellence
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary opacity-80 mb-10">
            Les inscriptions pour 2024-2025 sont ouvertes. Places limitées.
          </p>
          <NavLink to="/contact">
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-h3 text-[18px] font-bold shadow-lg hover:shadow-xl transition-all">
              Nous contacter
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default About;
