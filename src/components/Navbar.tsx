import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Agents", path: "/agents" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoHorizontal} alt="HumbleMind AI Labs" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/agents"
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/agents"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-brand text-primary-foreground"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
