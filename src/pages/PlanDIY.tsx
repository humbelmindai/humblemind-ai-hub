import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot, Server, Zap, Code, Shield, Settings, ArrowRight, Check, Terminal,
  Cpu, Database, Workflow, Lightbulb, Rocket
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Server, title: "Choose Your Server", desc: "Select from OpenClaw dedicated servers optimized for AI workloads with full root access." },
  { icon: Bot, title: "Pick Your Agents", desc: "Browse 100+ agent templates across every business category and deploy instantly." },
  { icon: Settings, title: "Configure with AI", desc: "Our integrated AI assistant walks you through setup, configuration, and optimization." },
  { icon: Rocket, title: "Go Live", desc: "Deploy your agents and start automating. Scale up or down as your needs evolve." },
];

const features = [
  { icon: Terminal, title: "Full Server Access", desc: "SSH access, custom configurations, and complete control over your AI infrastructure." },
  { icon: Cpu, title: "OpenClaw Servers", desc: "Purpose-built servers for AI inference with blazing-fast response times." },
  { icon: Shield, title: "Private & Secure", desc: "Your data stays on your servers. No third-party access, ever." },
  { icon: Bot, title: "100+ Agent Templates", desc: "Pre-built agents for every use case — customize and deploy in minutes." },
  { icon: Zap, title: "AI Setup Assistant", desc: "Our built-in AI guides you through every step of deployment and management." },
  { icon: Code, title: "API Access", desc: "Full REST API and webhook support for custom integrations and workflows." },
  { icon: Database, title: "Vector DB Ready", desc: "Optional vector database integration for enhanced agent memory and context." },
  { icon: Workflow, title: "n8n Workflows", desc: "Connect your agents with 400+ apps through visual automation workflows." },
  { icon: Lightbulb, title: "Community Resources", desc: "Access our knowledge base, tutorials, and active community forum." },
];

const faqs = [
  { q: "Do I need technical experience?", a: "Our integrated AI assistant guides you through everything. Basic server knowledge is helpful but not required — the AI handles the complex parts." },
  { q: "What servers are included?", a: "You get a dedicated OpenClaw server optimized for AI inference. You can upgrade specs or add additional servers at any time." },
  { q: "Can I add n8n and vector databases later?", a: "Absolutely. You can start with just OpenClaw and add n8n workflows and vector databases whenever you're ready." },
  { q: "Is there a contract or lock-in?", a: "No long-term contracts. You own your server and data. Cancel or modify your plan at any time." },
  { q: "Can I upgrade to the Managed plan?", a: "Yes — seamlessly upgrade to Fully Managed at any time and our team will take over operations." },
];

const PlanDIY = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero stagger
      gsap.from("[data-hero-anim]", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });

      // Steps timeline
      gsap.from("[data-step]", {
        scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
        x: -40, opacity: 0, stagger: 0.15, duration: 0.6, ease: "power2.out",
      });

      // Feature cards
      gsap.from("[data-feature]", {
        scrollTrigger: { trigger: featuresRef.current, start: "top 80%" },
        y: 30, opacity: 0, stagger: 0.06, duration: 0.5, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(200_85%_55%/0.1),transparent_60%)]" />
        <div className="container px-4 md:px-8 relative z-10 max-w-4xl mx-auto text-center">
          <span data-hero-anim className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-muted text-primary mb-6">
            Self-Managed Plan
          </span>
          <h1 data-hero-anim className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build It <span className="text-gradient">Your Way</span>
          </h1>
          <p data-hero-anim className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Full control over your AI agents with our integrated AI assistant to guide you 
            every step of the way. Perfect for teams who love to tinker.
          </p>
          <div data-hero-anim className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/plans/managed"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Compare Managed Plan
            </Link>
          </div>

          {/* Price callout */}
          <div data-hero-anim className="mt-12 inline-block border-gradient rounded-xl p-6 bg-gradient-card">
            <p className="text-muted-foreground text-sm mb-1">Starting from</p>
            <span className="font-display text-4xl font-bold text-gradient">Custom Pricing</span>
            <p className="text-muted-foreground text-sm mt-1">Based on server specs & agent count</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-24 bg-card">
        <div className="container px-4 md:px-8 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Go from zero to running AI agents in four simple steps — with our AI assistant by your side.
          </p>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.title}
                data-step
                className="flex items-start gap-6 p-6 rounded-xl border border-border bg-background hover:glow transition-shadow duration-500"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                    <s.icon size={24} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-24">
        <div className="container px-4 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            Everything You <span className="text-gradient">Need</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            All the tools and infrastructure to run your own AI agent fleet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                data-feature
                className="bg-gradient-card border-gradient rounded-xl p-6 hover:glow transition-shadow duration-500"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-border rounded-xl bg-background overflow-hidden"
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_85%_55%/0.08),transparent_70%)]" />
        <div className="container px-4 md:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="text-gradient">Your Way</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Start deploying AI agents today with full control and our AI assistant to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Explore Agents <ArrowRight size={18} />
            </Link>
            <Link
              to="/plans/managed"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              View Managed Plan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default PlanDIY;
