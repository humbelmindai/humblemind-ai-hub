import { Link, useLocation } from "react-router-dom";
import { Home, Bot, Info, Sparkles } from "lucide-react";

const links = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Bot, label: "Agents", path: "/agents" },
  { icon: Sparkles, label: "Plans", path: "/plans/managed" },
  { icon: Info, label: "About", path: "/about" },
];

const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-border">
      <div className="flex items-center justify-around h-16 px-2">
        {links.map((l) => {
          const isActive = pathname === l.path || (l.path !== "/" && pathname.startsWith(l.path));
          return (
            <Link
              key={l.path}
              to={l.path}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <l.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium">{l.label}</span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
