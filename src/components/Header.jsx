import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/levels", label: "Niveaux" },
  { to: "/news", label: "Actualités" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Détecter le scroll pour changer l'apparence - CORRIGÉ
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Niveaux avec sous-menu
  const levelsWithSubmenu = [
    { to: "/levels/primary", label: "Primaire" },
    { to: "/levels/college", label: "Collège" },
    { to: "/levels/computer", label: "Informatique" },
  ];

  return (
    <header
      className={`
        fixed top-0 w-full z-50 
        transition-all duration-300
        h-20
        ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-md "
            : "bg-surface border-b border-outline-variant/50 shadow-sm"
        }
      `}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-full">
        {/* Logo */}
        <NavLink to="/" className="group">
          <span className="text-h3 font-h3 font-bold text-primary transition-colors duration-200 group-hover:text-primary/80">
            {/* Sacko Noumanian et Frères */}
            <img
              src="/logo.png"
              alt="Logo Sacko Noumanian et Frères"
              className="w-24 h-24 md:w-26 md:h-26"
            />
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            // Gestion spéciale pour le menu Niveaux avec sous-menu
            if (link.label === "Niveaux") {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-label-sm text-label-sm transition-colors duration-200 pb-1
                      ${
                        isActive
                          ? "text-secondary font-bold border-b-2 border-secondary"
                          : "text-on-surface-variant font-medium hover:text-primary hover:border-b-2 hover:border-primary"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  {/* Sous-menu */}
                  <div
                    className={`
                      absolute top-full left-0 mt-2 w-48
                      transition-all duration-200
                      ${
                        activeDropdown === link.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }
                    `}
                  >
                    <div className="rounded-lg bg-surface border border-outline-variant shadow-lg overflow-hidden">
                      {levelsWithSubmenu.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-sm transition-colors duration-200
                            ${
                              isActive
                                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-label-sm text-label-sm transition-colors duration-200 pb-1
                  ${
                    isActive
                      ? "text-secondary font-bold border-b-2 border-secondary"
                      : "text-on-surface-variant font-medium hover:text-primary hover:border-b-2 hover:border-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* CTA desktop */}
        <NavLink to="/contact" className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            Nous contacter
          </button>
        </NavLink>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 rounded-lg bg-primary/10 border border-primary/20"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X size={22} className="text-primary" />
          ) : (
            <Menu size={22} className="text-primary" />
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <div className="bg-surface border-t border-outline-variant shadow-lg">
          <div className="flex flex-col px-margin-mobile py-4 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition-colors duration-200
                  ${
                    isActive
                      ? "bg-primary/10 text-secondary font-bold border-l-4 border-secondary"
                      : "text-on-surface-variant font-medium hover:bg-primary/5 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Sous-menu dans mobile */}
            <div className="pl-4 mt-2 space-y-1">
              <p className="text-xs text-on-surface-variant/60 px-4 mb-2">
                — Nos niveaux —
              </p>
              {levelsWithSubmenu.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm transition-colors duration-200
                    ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-on-surface-variant/80 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>

            {/* Bouton contact dans mobile */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-label-sm hover:bg-primary/90 transition-colors duration-200">
                Nous contacter
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
