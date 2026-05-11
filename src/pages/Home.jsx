import { NavLink } from "react-router-dom";
import AnimatedSection from "../components/helpers/animationSection";
import { Counter } from "../components/helpers/Counter";
import HomeLevels from "../components/LevelsItems";
import HomeFeatures from "../components/HomeFeature";
import { faqHome } from "../components/fixetures";
import FAQ from "../components/FAQ/FAQCARD";

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection threshold={0.5}>
        <section
          className={`relative transform  duration-700 transition-all  h-[600px] flex items-center justify-center overflow-hidden`}
        >
          <img
            alt="Sacko Noumanian et Frères Building"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-FgbZv2o9xSdVWZMFeTX8ViTm7PBvzoM--isX8nOPp_36nyfcDUb0Qe0htH4rU2AOC8TKLI6A5dib57agpMuMQzBG1I4wJz0-EQ-AufwckUaWA7vAeUCGJcleOi37dfzGqo7g1VLoRej_Skz1Wt98TuZxMIbc-vRdrmb-mo7dYXgWE6wLQhzMHyhErsxCicQbq-XlNMyjRinkDyKFPIvElcLMNsF1bd7W61rpS2ib-J8K0ck8jxFqr2W5jKfBwBtwFIWZya27"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="relative z-10 text-center text-white max-w-3xl px-margin-mobile">
            <h1 className="font-h1 text-h1 mb-4 text-secondary-fixed">
              Sacko Noumanian et Frères
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90 italic">
              L'excellence au cœur de Kankan
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-secondary-fixed transition-all">
                  Nous contacter
                </button>
              </NavLink>
              <NavLink to="/about">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all">
                  Découvrir l'école
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Bar */}
      <section className="bg-primary py-8 border-b-4 border-secondary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 500, suffix: "+", label: "Élèves" },
            { value: 30, suffix: "+", label: "Enseignants" },
            { value: 20, suffix: "ans", label: "Expérience" },
            { value: 95, suffix: "%", label: "Taux de réussite" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-secondary-fixed font-h2 text-h2 flex items-center gap-0.5">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-on-primary font-label-sm text-label-sm opacity-80 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection threshold={0.5}>
        <section
          className={`py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-16 items-center transform duration-700 transition-all `}
        >
          <div className="space-y-6">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              Notre Institution
            </span>
            <h2 className="font-h2 text-h2 text-primary">
              Une mission d'excellence académique
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Depuis deux décennies, l'institution Sacko Noumanian et Frères
              s'engage à fournir une éducation de classe mondiale au cœur de
              Kankan. Notre approche combine rigueur académique et
              épanouissement personnel pour préparer les leaders de demain.
            </p>
            <div className="quote-accent pl-6 py-2">
              <blockquote className="font-body-lg text-body-lg italic text-primary">
                "Notre priorité est de cultiver l'intelligence et le caractère
                de chaque enfant qui franchit nos portes."
              </blockquote>
              <cite className="block mt-2 font-label-sm text-label-sm text-secondary font-bold">
                — Le Directeur Général
              </cite>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl border-8 border-surface-container">
              <img
                alt="Director Portrait"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC691DaY2H-DWluOjvtRrkoO2r3FSL68fc6F4ruHTUD4U7tNu4zUQJeUb9W82cNLNd-IOJHNREddORFZKEnUrmJ9-6wOomfTEdpx-j3K9p-ysgd4cmi5AgsKdkkELziW9Akp4b5mt-C6pv_xuksfeYP-USE9500pM-VHb_Qdzb6vToMJg8zitZhT2tAlrSl_q5h5MNBI2mIpvYfTy7q6DPpBmaODpsxRtElE46_iVE_wchz_QGSLdO8jk1vyW8Mi3KPxMq2I7B"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-lg shadow-lg hidden md:block">
              <span className="block font-h3 text-h3 text-on-secondary-fixed">
                20+
              </span>
              <span className="font-label-sm text-label-sm text-on-secondary-fixed opacity-80">
                Années de Tradition
              </span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Levels Section */}
      <HomeLevels />

      {/* Why Choose Us */}
      <HomeFeatures />

      {/* Latest News */}
      <AnimatedSection threshold={0.5}>
        <section
          className={`py-stack-lg bg-surface transform duration-700 transition-all `}
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-h2 text-h2 text-primary">
                  Dernières Actualités
                </h2>
                <p className="text-on-surface-variant mt-2">
                  Suivez la vie de notre établissement.
                </p>
              </div>
              <NavLink
                to="/news"
                className="hidden md:block font-label-sm text-label-sm font-bold text-primary border-b-2 border-primary"
              >
                Toutes les actualités
              </NavLink>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqniVZb0aMI_gNHuFVmp6upqKDOBYNGu3hJ1REw8LXT7lOPWkimhC9HFj3Ts0iAMLd08eQy3ccEhcONBJGY_pjCQ-VsMlANqCIuWzrbB969dvVGuyfQOvdQXeIoP8SyKw3tKxL8663f-iuFVfQUJ3dRb5po80VOCf-5QJUphM1kQDz59ACNbLkfh-4epL6M-qsQe4mICqInkm-EMAn6V6mvNsXSxWXeJUSpjcT7Ns3HrBy1iWOZOyKXVN_LML5-n2l4QPBOiLD",
                  date: "12 Mai 2024",
                  title: "Cérémonie de remise des prix d'excellence",
                  excerpt:
                    "Retour sur la journée mémorable célébrant les meilleurs élèves de la promotion sortante...",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKP_INUYzN3g_n4lEEni1WuzlK7E93jm3_JhXFy0UOom-l40_QekiUbo1lXwc1Q2K5vYkGwaxgPcZYvWdGY5HD27JOEila1v772e4vsn9ocp9usNOew0NMNA_TyIlrr6DOUw4Kvz76XT2vNTg-axZEUzbnXbdSWthtztUP2xBUiT9RCCsT0KW2GCxLWQBTUWiwofQ6nPvsLH-mCesO-1vr-CoRhTGgSmGVPKLs-mk1FDY8tPb_zb6LRfXUfdRPlrTt1zhCVnZG",
                  date: "05 Mai 2024",
                  title: "Nouveaux équipements pour le laboratoire de sciences",
                  excerpt:
                    "L'école continue d'investir dans le matériel pédagogique de pointe pour nos élèves de Terminale...",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvvDueO4FfkMuSjhyo_sCLDyw2xJxqTa-dHzQhy_cP4CsaRjOf52RoVshLiQ_R8z3XaGUrAYZNBVNwpYzt12Fs66mYLc-CHsZQQzBmRic9VkJ4wxcSXQ7BBCBZe7yS6uTo3W3za72Ogq_kFtmg27IOR98C1XPfmkzsvDY3H9Er7XIIKFv3sLnh1qhGPqOsBVIx4Vu7kcQQN5oIikuIWkqPBvKWdJk0A2j542d0Dlc0DkLIyu_uQ8wrALvl4yDVxjV14EtM2txt",
                  date: "28 Avril 2024",
                  title: "Succès éclatant lors du tournoi inter-écoles",
                  excerpt:
                    "Nos équipes sportives ont brillé lors du championnat régional, remportant plusieurs trophées...",
                },
              ].map((news) => (
                <div key={news.title} className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      alt={news.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={news.src}
                    />
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-bold">
                    {news.date}
                  </span>
                  <h3 className="font-h3 text-[20px] text-primary mt-2 group-hover:text-secondary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-on-surface-variant mt-2 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FAQ
        title="Support"
        subtitle="Foire Aux Questions"
        text="Tout ce que vous devez savoir concernant notre établissement, les admissions et l'encadrement académique."
        items={faqHome}
        showStats={true}
      />

      {/* CTA Banner */}
      <AnimatedSection threshold={0.5}>
        <section className="py-stack-lg bg-primary text-center px-margin-mobile">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-h2 text-h2 text-on-primary mb-6">
              Inscrivez votre enfant pour 2027-2028
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary opacity-80 mb-10">
              Les places sont limitées. Contactez notre bureau des admissions
              dès aujourd'hui.
            </p>
            <NavLink to="/contact">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-h3 text-[18px] font-bold shadow-lg hover:shadow-xl transition-all">
                Rejoindre l'excellence
              </button>
            </NavLink>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default Home;
