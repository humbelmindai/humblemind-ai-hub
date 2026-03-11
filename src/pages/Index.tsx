import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bot, Shield, Server, Zap, Globe, Users, ArrowRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import heroBg from "@/assets/hero-bg.jpg";
import logoStacked from "@/assets/logo-stacked.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Shield, title: "Private & Secure", desc: "Your AI agents run on dedicated, private servers — your data never leaves your infrastructure." },
  { icon: Server, title: "OpenClaw Servers", desc: "Powered by OpenClaw for blazing-fast inference, or combine with n8n and vector databases." },
  { icon: Bot, title: "100s of Agents", desc: "From customer support to data analysis, we have AI agents for every business use case." },
  { icon: Zap, title: "Integrated AI Assistant", desc: "Our built-in AI helps you configure, deploy, and manage your agents effortlessly." },
  { icon: Globe, title: "Scale Without Limits", desc: "From startup to enterprise — our infrastructure scales with your ambitions." },
  { icon: Users, title: "Managed Service", desc: "For R999/month, our team handles everything so you can focus on your business." },
];

const pricingPlans = [
  {
    name: "Self-Managed",
    price: "Custom",
    desc: "Full control with our integrated AI assistant",
    features: ["OpenClaw server deployment", "Integrated AI configuration assistant", "100+ agent templates", "Community support", "Self-managed infrastructure"],
    highlight: false,
    link: "/plans/diy",
  },
  {
    name: "Fully Managed",
    price: "R999",
    period: "/month",
    desc: "We handle everything for you",
    features: ["Everything in Self-Managed", "OpenClaw + n8n + Vector DB stack", "Dedicated support team", "Custom agent development", "24/7 monitoring & maintenance", "Priority updates & scaling"],
    highlight: true,
    link: "/plans/managed",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from("[data-hero]", {
        y: 50, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
      });

      // Features
      gsap.from("[data-feature-card]", {
        scrollTrigger: { trigger: featuresRef.current, start: "top 80%" },
        y: 40, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power2.out",
      });

      // Pricing
      gsap.from("[data-pricing-card]", {
        scrollTrigger: { trigger: pricingRef.current, start: "top 80%" },
        scale: 0.9, opacity: 0, stagger: 0.15, duration: 0.7, ease: "back.out(1.4)",
      });

      // Parallax hero bg
      gsap.to("[data-hero-bg]", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0" data-hero-bg>
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container px-4 md:px-8 text-center z-10">
          <div data-hero>
            <img src={logoStacked} alt="HumbleMind AI Labs" className="h-32 md:h-44 mx-auto mb-6 animate-float" />
          </div>
          <h1 data-hero className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your Private AI Agents.{" "}
            <span className="text-gradient">Your Rules.</span>
          </h1>
          <p data-hero className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Deploy hundreds of intelligent AI agents on privately hosted servers. 
            Powered by OpenClaw, enhanced with n8n workflows and vector databases.
          </p>
          <div data-hero className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Explore Agents <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative" ref={featuresRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_85%_55%/0.05),transparent_70%)]" />
        <div className="container px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Why <span className="text-gradient">HumbleMind</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enterprise-grade AI infrastructure, made accessible for every business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                data-feature-card
                className="bg-gradient-card border-gradient rounded-xl p-6 hover:glow transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-card" ref={pricingRef}>
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose self-managed with our AI assistant, or let us handle everything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                data-pricing-card
                className={`rounded-xl p-8 ${
                  plan.highlight
                    ? "border-gradient bg-gradient-card glow"
                    : "border border-border bg-gradient-card"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-brand text-primary-foreground mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.link}
                  className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(280_60%_55%/0.1),transparent_70%)]" />
        <div className="container px-4 md:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Join the future of AI-powered business automation with privately hosted, secure agents.
          </p>
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Explore Our Agents <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
