import { Link } from "react-router-dom";
import logoStacked from "@/assets/logo-stacked.png";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img src={logoStacked} alt="HumbleMind AI Labs" className="h-20 mb-4" />
          <p className="text-muted-foreground text-sm max-w-md">
            Private, secure AI agents hosted on your terms. Empowering businesses with intelligent automation.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Navigation</h4>
          <div className="space-y-2">
            {[{ label: "Home", path: "/" }, { label: "Agents", path: "/agents" }, { label: "About", path: "/about" }].map((l) => (
              <Link key={l.path} to={l.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">hello@humblemind.ai</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HumbleMind AI Labs. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
