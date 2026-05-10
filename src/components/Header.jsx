import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/levels", label: "Niveaux" },
  { to: "/levels/computer", label: "Informatique" },
  { to: "/news", label: "Actualités" },
  { to: "/contact", label: "Contact" },
];
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/50 border-b border-outline-variant shadow-sm h-20">
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-full">
        <NavLink to="/" className="text-h3 font-h3 font-bold text-primary">
          Sacko Noumanian et Frères
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "font-label-sm text-label-sm text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "font-label-sm text-label-sm text-on-surface-variant font-medium hover:text-primary transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA desktop */}
        <NavLink to="/contact" className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-colors">
            Nous contacter
          </button>
        </NavLink>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant shadow-lg">
          <div className="flex flex-col px-margin-mobile py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "font-label-sm text-label-sm text-secondary font-bold py-2 border-l-4 border-secondary pl-4"
                    : "font-label-sm text-label-sm text-on-surface-variant font-medium py-2 pl-4 hover:text-primary transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-label-sm mt-2">
                Nous contacter
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
