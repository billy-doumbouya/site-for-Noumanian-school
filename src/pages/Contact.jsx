import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quelles sont les modalités d'inscription ?",
    a: "Les inscriptions se font sur dossier après un entretien avec la direction académique. Vous devrez fournir les bulletins de l'année précédente et un acte de naissance.",
  },
  {
    q: "L'établissement propose-t-il une cantine scolaire ?",
    a: "Oui, nous disposons d'un service de restauration proposant des repas équilibrés et sains, préparés quotidiennement selon des normes d'hygiène strictes.",
  },
  {
    q: "Quels sont les niveaux d'enseignement couverts ?",
    a: "Nous accueillons les élèves de l'école primaire jusqu'au baccalauréat, avec des programmes adaptés aux exigences nationales et internationales.",
  },
  {
    q: "Y a-t-il des activités extra-scolaires ?",
    a: "Absolument. Nous encourageons l'épanouissement personnel à travers le sport, le théâtre, le club de lecture et des projets de citoyenneté.",
  },
  {
    q: "Comment se passe la sécurité au sein de l'école ?",
    a: "La sécurité est notre priorité. L'accès à l'établissement est contrôlé et une surveillance constante est assurée pendant les heures de cours.",
  },
];

function Contact() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    sujet: "Demande d'inscription",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD6mPIwIWrqKyFkFbXeJFiLl6IAdOcrTQV0Dnn6nqsSrjLkpM37deg2kqr6X212DtUyChh3UKz6sfZQ1h24qll65Hbt5AUFE8ABykcnOXgl6V15Ls0CPwqLAnAOroWyrwt-tTQbWe1SrPGoVMXqLdo6i1NBdl-NAnMLiEA_R1NJd4L6_qVqZchxRO4r8dfFr2FevPTRA9-RcN_q5Yd2bTmJGbrWSxINL6KKtCVW_nkmJD4XRRk6VnDPwqFZtbasIW9T1otNETY')`,
          }}
        ></div>
        <div className="relative z-20 text-center px-margin-mobile">
          <h1 className="font-h1 text-h1 text-on-primary-container mb-stack-sm">
            Contactez-nous
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container/90 max-w-2xl mx-auto italic">
            Nous sommes à votre écoute pour toute demande d'information
            concernant le parcours d'excellence de vos enfants.
          </p>
        </div>
      </section>

      {/* Formulaire + Infos */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Formulaire */}
          <div className="md:col-span-7 bg-surface-container-lowest p-stack-lg border border-outline-variant rounded-xl shadow-sm">
            <h2 className="font-h2 text-h2 text-primary mb-stack-md">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-stack-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Nom
                  </label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    type="text"
                    placeholder="Votre nom"
                    className="border border-outline-variant p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Prénom
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    type="text"
                    placeholder="Votre prénom"
                    className="border border-outline-variant p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Téléphone
                </label>
                <input
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+224 ..."
                  className="border border-outline-variant p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Sujet
                </label>
                <select
                  name="sujet"
                  value={form.sujet}
                  onChange={handleChange}
                  className="border border-outline-variant p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none"
                >
                  <option>Demande d'inscription</option>
                  <option>Informations générales</option>
                  <option>Recrutement</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="border border-outline-variant p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-on-primary py-4 font-label-sm text-label-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Infos */}
          <div className="md:col-span-5 space-y-stack-md">
            {/* Adresse */}
            <div className="bg-primary text-on-primary p-stack-md rounded-xl shadow-sm border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <MapPin
                  size={28}
                  className="text-secondary-fixed flex-shrink-0"
                />
                <div>
                  <h3 className="font-h3 text-h3 mb-2">Notre Adresse</h3>
                  <p className="text-body-md opacity-90">
                    Kankan, Quartier Missira
                  </p>
                  <p className="text-body-md opacity-90">
                    République de Guinée
                  </p>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-surface-container-high p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="space-y-stack-md">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-container p-3 rounded-lg">
                    <Phone size={20} className="text-secondary-fixed" />
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Téléphone
                    </p>
                    <p className="font-body-md font-bold">+224 6XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-container p-3 rounded-lg">
                    <Mail size={20} className="text-secondary-fixed" />
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Email
                    </p>
                    <p className="font-body-md font-bold">
                      contact@sacko-noumanian.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-primary" />
                <h3 className="font-h3 text-h3 text-primary">
                  Heures d'ouverture
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  {
                    day: "Lundi - Vendredi",
                    hours: "08:00 - 17:00",
                    closed: false,
                  },
                  { day: "Samedi", hours: "08:00 - 12:30", closed: false },
                  { day: "Dimanche", hours: "Fermé", closed: true },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between border-b border-outline-variant py-2 last:border-0"
                  >
                    <span
                      className={`font-medium ${item.closed ? "text-error" : ""}`}
                    >
                      {item.day}
                    </span>
                    <span
                      className={item.closed ? "text-error font-medium" : ""}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="w-full h-[400px] relative overflow-hidden grayscale contrast-125">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATx_6Kdpfx5DurASxdsQE0V8QeMsGiQQ0bApLP3xt69eRBKeJ3akMvrOHP5qq5-BGc4oatfXJYBBcW8qYAUKckF-Q5GjgJdDGggj9Rr181gB831EhG9SMw05SCBoBj_z_tCt7YIRFXS_xz5_TgwVK8bQw4QD9bStvkGSOX3_8kc_X7fV6FoN-cCrMfOG93Xm6Y1PKYyPHjUmVMCFbmQc-PNhJbWYCMx2AtjckHVTeP-FT4skWq2I0kcdtusgzvnLLJSfdD6uIi"
          alt="Carte Kankan"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-surface p-stack-md rounded-xl shadow-lg border border-primary flex items-center gap-4">
            <MapPin size={28} className="text-primary" />
            <div>
              <p className="font-bold text-primary">
                Sacko Noumanian et Frères
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Kankan, Missira
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[800px] mx-auto px-margin-mobile py-stack-lg">
        <div className="text-center mb-stack-lg">
          <h2 className="font-h2 text-h2 text-primary">Questions Fréquentes</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-stack-sm"></div>
        </div>
        <div className="space-y-stack-sm">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface-container border border-outline-variant rounded-lg overflow-hidden"
            >
              <summary className="flex justify-between items-center p-stack-md cursor-pointer list-none">
                <span className="font-h3 text-h3 text-primary text-lg pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="text-secondary flex-shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-stack-md pb-stack-md text-on-surface-variant font-body-md">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
