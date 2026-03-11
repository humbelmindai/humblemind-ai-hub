import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot, Server, Shield, Zap, Users, ArrowRight, Check, Headphones,
  Clock, BarChart3, Wrench, RefreshCw, Star, Crown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

gsap.registerPlugin(ScrollTrigger);

const included = [
  { icon: Server, title: "Full Infrastructure Stack", desc: "OpenClaw servers + n8n automation + vector databases — all set up and optimized for you." },
  { icon: Bot, title: "Custom Agent Development", desc: "We build, configure, and fine-tune agents specifically for your business workflows." },
  { icon: Headphones, title: "Dedicated Support Team", desc: "A team of AI engineers assigned to your account — available via chat, call, or email." },
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock infrastructure monitoring with automatic incident response." },
  { icon: RefreshCw, title: "Priority Updates", desc: "First access to new agent templates, features, and performance improvements." },
  { icon: BarChart3, title: "Monthly Reports", desc: "Detailed performance analytics, usage reports, and optimization recommendations." },
  { icon: Shield, title: "Security Management", desc: "Continuous security audits, patch management, and compliance monitoring." },
  { icon: Wrench, title: "Maintenance & Scaling", desc: "We handle all server maintenance, backups, and scaling as your needs grow." },
];

const comparison = [
  { feature: "OpenClaw Server", diy: true, managed: true },
  { feature: "100+ Agent Templates", diy: true, managed: true },
  { feature: "AI Setup Assistant", diy: true, managed: true },
  { feature: "n8n Workflows", diy: "Optional", managed: true },
  { feature: "Vector Database", diy: "Optional", managed: true },
  { feature: "Custom Agent Development", diy: false, managed: true },
  { feature: "Dedicated Support Team", diy: false, managed: true },
  { feature: "24/7 Monitoring", diy: false, managed: true },
  { feature: "Security Management", diy: false, managed: true },
  { feature: "Monthly Performance Reports", diy: false, managed: true },
  { feature: "Priority Updates & Scaling", diy: false, managed: true },
  { feature: "Server Maintenance & Backups", diy: false, managed: true },
];

const testimonials = [
  { name: "Sarah K.", role: "CEO, TechFlow", quote: "HumbleMind's managed service freed up our entire dev team. The agents just work." },
  { name: "David M.", role: "Ops Director, RetailPlus", quote: "From setup to scaling — their team handles everything. Best R999 we spend each month." },
  { name: "Ayanda N.", role: "Founder, EduBridge", quote: "We went from zero AI to 15 agents running 24/7 in under a week. Incredible service." },
];

const faqs = [
  { q: "What exactly is included for R999/month?", a: "Everything: dedicated OpenClaw servers, n8n workflows, vector databases, custom agent development, 24/7 monitoring, security management, monthly reports, and a dedicated support team." },
  { q: "How quickly can you get us set up?", a: "Most businesses are fully operational within 3-5 business days. Complex custom agent development may take 1-2 weeks." },
  { q: "Can we start with DIY and upgrade later?", a: "Absolutely. You can upgrade to Fully Managed at any time — we'll seamlessly take over your existing infrastructure." },
  { q: "Is there a minimum commitment?", a: "Month-to-month billing with no long-term contract. You can cancel or adjust at any time." },
  { q: "How many agents are included?", a: "Unlimited agents from our template library. Custom-built agents are included as part of the managed service at no extra cost." },
];

const PlanManaged = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const compRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });

      gsap.from("[data-included]", {
        scrollTrigger: { trigger: "[data-included-section]", start: "top 80%" },
        scale: 0.9, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.4)",
      });

      gsap.from("[data-comp-row]", {
        scrollTrigger: { trigger: compRef.current, start: "top 80%" },
        x: -20, opacity: 0, stagger: 0.05, duration: 0.4, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const renderCell = (val: boolean | string) => {
    if (val === true) return <Check size={18} className="text-primary mx-auto" />;
    if (val === false) return <span className="text-muted-foreground">—</span>;
    return <span className="text-xs text-muted-foreground">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(280_60%_55%/0.12),transparent_60%)]" />
        <div className="container px-4 md:px-8 relative z-10 max-w-4xl mx-auto text-center">
          <span data-hero-anim className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-brand text-primary-foreground mb-6">
            <Crown size={14} /> Most Popular
          </span>
          <h1 data-hero-anim className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Handle <span className="text-gradient">Everything</span>
          </h1>
          <p data-hero-anim className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            For R999/month, our expert team deploys, manages, and scales your entire 
            AI agent infrastructure — so you can focus on your business.
          </p>
          <div data-hero-anim className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
            <Link
              to="/plans/diy"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Compare DIY Plan
            </Link>
          </div>

          {/* Price callout */}
          <div data-hero-anim className="mt-12 inline-block border-gradient rounded-xl p-8 bg-gradient-card glow">
            <p className="text-muted-foreground text-sm mb-1">All-inclusive</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient">R999</span>
              <span className="text-muted-foreground text-lg">/month</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">Unlimited agents · Full stack · Dedicated team</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section data-included-section className="py-24 bg-card">
        <div className="container px-4 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            What's <span className="text-gradient">Included</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            A complete, managed AI infrastructure with a team behind it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {included.map((item) => (
              <div
                key={item.title}
                data-included
                className="bg-gradient-card border-gradient rounded-xl p-6 hover:glow transition-shadow duration-500"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto" ref={compRef}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Plan <span className="text-gradient">Comparison</span>
          </h2>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-muted text-xs font-semibold text-foreground">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">Self-Managed</div>
              <div className="p-4 text-center bg-primary/10 text-primary">Fully Managed</div>
            </div>
            {comparison.map((row) => (
              <div key={row.feature} data-comp-row className="grid grid-cols-3 border-t border-border text-sm">
                <div className="p-4 text-foreground">{row.feature}</div>
                <div className="p-4 text-center">{renderCell(row.diy)}</div>
                <div className="p-4 text-center bg-primary/5">{renderCell(row.managed)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-8 max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gradient-card border-gradient rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-border rounded-xl bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                  <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(280_60%_55%/0.1),transparent_70%)]" />
        <div className="container px-4 md:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Let Us Handle <span className="text-gradient">The Heavy Lifting</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Join businesses already running on HumbleMind's fully managed AI infrastructure.
          </p>
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started for R999/month <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default PlanManaged;
