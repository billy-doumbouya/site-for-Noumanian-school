import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactFaqs } from "../components/fixetures";
import FAQ from "../components/FAQ/FAQCARD";

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
      <section
        className={`relative h-[400px] flex items-center justify-center overflow-hidden transform duration-700 transition-all `}
      >
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
      <section
        className={`max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg transform duration-700 transition-all `}
      >
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
      {/* Remplace la section map par ceci */}
      <section
        className={`w-full h-[450px] transform duration-700 transition-all `}
      >
        <iframe
          title="Localisation Sacko Noumanian et Frères"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.2110068492526!2d-9.317420820539427!3d10.393590382938006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfab51faf0679899%3A0x6b76f837ab33061a!2sMarch%C3%A9%20de%20missiran!5e1!3m2!1sfr!2s!4v1778287311306!5m2!1sfr!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>

      {/* FAQ */}
      <FAQ
        title="Questions Fréquentes"
        subtitle="Toutes les questions que vous pouvez avoir"
        text="Nous vous répondrons au plus vite"
        items={contactFaqs}
      />
    </div>
  );
}

export default Contact;
