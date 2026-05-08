import { NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/levels", label: "Niveaux" },
    { to: "/levels/computer", label: "Informatique" },
    { to: "/news", label: "Actualités" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-2xl border-b border-outline-variant shadow-sm h-20">
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-full">
        {/* Logo */}
        <NavLink to="/" className="text-h3 font-h3 font-bold text-primary">
          Sacko Noumanian et Frères
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "font-label-sm text-label-sm text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "font-label-sm text-label-sm text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <NavLink to="/contact">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-colors">
            Nous contacter
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
