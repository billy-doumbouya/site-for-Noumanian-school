import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import FAQ from "../components/FAQ/FAQCARD";
import AnimatedSection from "../components/helpers/animationSection";
import { contactFaqs } from "../components/fixetures";
import { contactSchema } from "../components/Validators/contact.validators";
import { EMAILJS_CONFIG } from "../components/config/emailjs.config";
import emailjs from "@emailjs/browser";
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      sujet: "Demande d'inscription",
      message: "",
    },
  });

  // Surveiller les changements du sujet pour des actions spécifiques (optionnel)
  const selectedSujet = watch("sujet");

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const templateParams = {
      from_name: `${data.prenom} ${data.nom}`,
      from_email: data.email,
      phone: data.telephone,
      subject: data.sujet,
      message: data.message,
      reply_to: data.email,
    };

    const submitPromise = emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
    );

    toast.promise(submitPromise, {
      loading: "Envoi en cours...",
      success: () => {
        setIsSubmitting(false);
        reset();
        return "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.";
      },
      error: (err) => {
        setIsSubmitting(false);
        return `Erreur: ${err?.text || "Une erreur est survenue. Veuillez réessayer."}`;
      },
    });
  };
  return (
    <div className="pt-20">
      {/* Toaster pour les notifications */}
      <Toaster position="top-right" richColors closeButton duration={4000} />

      {/* Hero Section */}
      <AnimatedSection threshold={0.3}>
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2V0JTIwaW4lMjB0b3VjaHxlbnwwfHwwfHx8MA%3D%3D')`,
            }}
          ></div>
          <div className="relative z-20 text-center px-margin-mobile">
            <h1 className="font-h1 text-h1 text-white mb-stack-sm">
              Contactez-nous
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
              Nous sommes à votre écoute pour toute demande d'information
              concernant le parcours d'excellence de vos enfants.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Formulaire + Infos */}
      <AnimatedSection threshold={0.2}>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            {/* Formulaire */}
            <div className="md:col-span-7 bg-surface rounded-xl shadow-lg border border-outline-variant overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-stack-lg py-stack-md">
                <h2 className="font-h2 text-h2 text-white mb-1">
                  Envoyez-nous un message
                </h2>
                <p className="text-white/80 text-body-md">
                  Remplissez le formulaire et nous vous répondrons rapidement
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-stack-lg space-y-stack-md"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                  {/* Nom */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Nom *
                    </label>
                    <input
                      {...register("nom")}
                      type="text"
                      placeholder="Votre nom"
                      className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none transition-all ${
                        errors.nom ? "border-error" : "border-outline-variant"
                      }`}
                    />
                    {errors.nom && (
                      <p className="text-error text-xs mt-1">
                        {errors.nom.message}
                      </p>
                    )}
                  </div>

                  {/* Prénom */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Prénom *
                    </label>
                    <input
                      {...register("prenom")}
                      type="text"
                      placeholder="Votre prénom"
                      className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none transition-all ${
                        errors.prenom
                          ? "border-error"
                          : "border-outline-variant"
                      }`}
                    />
                    {errors.prenom && (
                      <p className="text-error text-xs mt-1">
                        {errors.prenom.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                  {/* Téléphone */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Téléphone *
                    </label>
                    <input
                      {...register("telephone")}
                      type="tel"
                      placeholder="+224 XXX XX XX XX"
                      className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none transition-all ${
                        errors.telephone
                          ? "border-error"
                          : "border-outline-variant"
                      }`}
                    />
                    {errors.telephone && (
                      <p className="text-error text-xs mt-1">
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="votre@email.com"
                      className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none transition-all ${
                        errors.email ? "border-error" : "border-outline-variant"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-error text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sujet */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Sujet *
                  </label>
                  <select
                    {...register("sujet")}
                    className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none transition-all cursor-pointer ${
                      errors.sujet ? "border-error" : "border-outline-variant"
                    }`}
                  >
                    <option>Demande d'inscription</option>
                    <option>Informations générales</option>
                    <option>Recrutement</option>
                    <option>Partenariat</option>
                    <option>Réclamation</option>
                    <option>Autre</option>
                  </select>
                  {errors.sujet && (
                    <p className="text-error text-xs mt-1">
                      {errors.sujet.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className={`border p-3 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg bg-surface outline-none resize-none transition-all ${
                      errors.message ? "border-error" : "border-outline-variant"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-error text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                  {watch("message") && !errors.message && (
                    <p className="text-success text-xs mt-1">
                      {watch("message").length}/1000 caractères
                    </p>
                  )}
                </div>

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full bg-secondary text-white py-4 font-label-sm text-label-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>

                {/* Message d'information */}
                <p className="text-xs text-center text-on-surface-variant/60 mt-4">
                  * Tous les champs sont obligatoires
                </p>
              </form>
            </div>

            {/* Infos de contact */}
            <div className="md:col-span-5 space-y-stack-md">
              {/* Carte de visite */}
              <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-stack-md rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
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
                <div className="border-t border-white/20 pt-4 mt-2">
                  <p className="text-sm opacity-75">📍 Facilement accessible</p>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="bg-surface-container-low p-stack-md rounded-xl shadow-md border border-outline-variant">
                <h3 className="font-h3 text-h3 text-primary mb-stack-md">
                  Coordonnées
                </h3>
                <div className="space-y-stack-md">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Téléphone
                      </p>
                      <p className="font-body-md font-bold text-primary">
                        +224 622 27 04 03
                      </p>
                      <p className="text-xs text-on-surface-variant/60">
                        Lun - Ven: 08h - 17h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Email
                      </p>
                      <p className="font-body-md font-bold text-primary">
                        contact@sacko-noumanian.edu
                      </p>
                      <p className="text-xs text-on-surface-variant/60">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-md border border-outline-variant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock size={20} className="text-primary" />
                  </div>
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
                      className="flex justify-between items-center py-2 border-b border-outline-variant last:border-0"
                    >
                      <span className="font-medium text-on-surface">
                        {item.day}
                      </span>
                      <span
                        className={
                          item.closed
                            ? "text-error font-semibold"
                            : "text-primary font-medium"
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-md border border-outline-variant text-center">
                <p className="text-on-surface-variant text-sm">
                  Suivez-nous sur nos réseaux sociaux
                </p>
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="#"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection threshold={0.2}>
        <section className="w-full h-[450px] relative">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10"></div>
          <iframe
            title="Localisation Sacko Noumanian et Frères"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.2110068492526!2d-9.317420820539427!3d10.393590382938006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfab51faf0679899%3A0x6b76f837ab33061a!2sMarch%C3%A9%20de%20missiran!5e1!3m2!1sfr!2s!4v1778287311306!5m2!1sfr!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection threshold={0.2}>
        <div className="bg-surface-container-low py-stack-lg">
          <FAQ
            title="Questions Fréquentes"
            subtitle="Toutes les réponses à vos questions"
            text="Une question ? Consultez notre FAQ ou contactez-nous directement"
            items={contactFaqs || []}
            showStats={true}
          />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Contact;
