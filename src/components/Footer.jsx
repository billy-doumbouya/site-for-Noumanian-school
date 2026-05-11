import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/levels", label: "Niveaux d'enseignement" },
    { to: "/news", label: "Dernières actualités" },
    { to: "/contact", label: "Contactez-nous" },
  ];

  return (
    <footer className="bg-primary w-full py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-h2 font-h2 text-secondary-fixed leading-tight">
            Sacko Noumanian et Frères
          </div>
          <p className="font-body-md text-body-md text-on-primary opacity-90">
            L'excellence éducative au service de la nation guinéenne depuis
            1998.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="text-secondary-fixed hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-secondary-fixed hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:contact@sackonoumanian.gn"
              className="text-secondary-fixed hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-label-sm text-label-sm font-bold text-secondary-fixed uppercase tracking-widest mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-label-sm text-label-sm text-secondary-fixed font-bold"
                      : "font-label-sm text-label-sm text-on-primary-container opacity-90 hover:opacity-100 hover:text-secondary-fixed transition-all"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label-sm text-label-sm font-bold text-secondary-fixed uppercase tracking-widest mb-6">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 font-label-sm text-label-sm text-on-primary opacity-90">
              <MapPin
                size={16}
                className="text-secondary-fixed mt-0.5 flex-shrink-0"
              />
              <span>
                Kankan, Quartier Missira,
                <br />
                République de Guinée
              </span>
            </li>
            <li className="flex items-center gap-3 font-label-sm text-label-sm text-on-primary opacity-90">
              <Phone size={16} className="text-secondary-fixed flex-shrink-0" />
              <span>+224623952011</span>
            </li>
            <li className="flex items-center gap-3 font-label-sm text-label-sm text-on-primary opacity-90">
              <Mail size={16} className="text-secondary-fixed flex-shrink-0" />
              <span>contact@sackonoumanian.gn</span>
            </li>
          </ul>
        </div>

        {/* Horaires */}
        <div>
          <h4 className="font-label-sm text-label-sm font-bold text-secondary-fixed uppercase tracking-widest mb-6">
            Heures d'ouverture
          </h4>
          <ul className="space-y-3 font-label-sm text-label-sm text-on-primary opacity-90">
            <li className="flex justify-between gap-4">
              <span>Lun – Ven</span>
              <span className="text-secondary-fixed">08h – 17h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Samedi</span>
              <span className="text-secondary-fixed">08h – 12h30</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Dimanche</span>
              <span className="text-error">Fermé</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-white/10 text-center">
        <p className="font-label-sm text-label-sm text-on-primary opacity-70">
          &copy; {new Date().getFullYear()} Sacko Noumanian et Frères. Tous
          droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
