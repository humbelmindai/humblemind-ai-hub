import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Shield, Server, Zap, Globe, Users, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import logoStacked from "@/assets/logo-stacked.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

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
  },
  {
    name: "Fully Managed",
    price: "R999",
    period: "/month",
    desc: "We handle everything for you",
    features: ["Everything in Self-Managed", "OpenClaw + n8n + Vector DB stack", "Dedicated support team", "Custom agent development", "24/7 monitoring & maintenance", "Priority updates & scaling"],
    highlight: true,
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="relative container px-4 md:px-8 text-center z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <img src={logoStacked} alt="HumbleMind AI Labs" className="h-32 md:h-44 mx-auto mb-6 animate-float" />
        </motion.div>
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial="hidden" animate="visible" variants={fadeUp} custom={1}
        >
          Your Private AI Agents.{" "}
          <span className="text-gradient">Your Rules.</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial="hidden" animate="visible" variants={fadeUp} custom={2}
        >
          Deploy hundreds of intelligent AI agents on privately hosted servers. 
          Powered by OpenClaw, enhanced with n8n workflows and vector databases.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
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
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_85%_55%/0.05),transparent_70%)]" />
      <div className="container px-4 md:px-8 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">HumbleMind</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enterprise-grade AI infrastructure, made accessible for every business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-gradient-card border-gradient rounded-xl p-6 hover:glow transition-shadow duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4">
                <f.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-24 bg-card">
      <div className="container px-4 md:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose self-managed with our AI assistant, or let us handle everything.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-xl p-8 ${
                plan.highlight
                  ? "border-gradient bg-gradient-card glow"
                  : "border border-border bg-gradient-card"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
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
                to="/agents"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(280_60%_55%/0.1),transparent_70%)]" />
      <div className="container px-4 md:px-8 text-center relative z-10">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Ready to <span className="text-gradient">Transform</span> Your Business?
        </motion.h2>
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
  </div>
);

export default Index;
