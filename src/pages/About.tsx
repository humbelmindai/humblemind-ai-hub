import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Target, Eye, Lightbulb, Shield, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const values = [
  { icon: Shield, title: "Privacy First", desc: "We believe your data is yours. Our private hosting model ensures your AI agents and data never leave your control." },
  { icon: Heart, title: "Humble Innovation", desc: "We approach AI with humility — building tools that serve people, not replace them. Technology should empower, not intimidate." },
  { icon: Users, title: "Accessibility", desc: "Enterprise AI shouldn't require enterprise budgets. We make powerful AI agents accessible to businesses of all sizes." },
  { icon: Lightbulb, title: "Transparency", desc: "No black boxes. We believe in open, understandable AI that businesses can trust and verify." },
];

const About = () => {
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-hero]", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });
      gsap.from("[data-value-card]", {
        scrollTrigger: { trigger: valuesRef.current, start: "top 80%" },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
  <div className="min-h-screen bg-background pb-20 md:pb-0">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(280_60%_55%/0.08),transparent_60%)]" />
      <div className="container px-4 md:px-8 relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible">
          <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-brand text-primary-foreground mb-6">
            Our Story
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold mb-6">
            Building the <span className="text-gradient">Future of AI</span> With Humility
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed">
            HumbleMind AI Labs was born from a simple belief: every business deserves access to powerful, 
            private AI — without the complexity, cost, or compromise of traditional enterprise solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-card">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-primary" size={28} />
              <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To democratize AI by providing privately hosted, intelligent agents that any business can deploy, 
              manage, and scale — without sacrificing data sovereignty or breaking the bank.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine the power of OpenClaw servers with n8n automation workflows and vector databases 
              to create an AI infrastructure that's both powerful and accessible.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-secondary" size={28} />
              <h2 className="font-display text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A future where every business — from a one-person startup to a global enterprise — has 
              an army of AI agents working tirelessly behind the scenes, privately and securely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We see a world where AI agents handle the repetitive, the complex, and the time-consuming, 
              freeing humans to do what they do best: create, connect, and innovate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The principles that guide everything we build.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="bg-gradient-card border-gradient rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4">
                <v.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why We Built This */}
    <section className="py-20 bg-card">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Why We Built <span className="text-gradient">HumbleMind</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We watched businesses struggle with AI adoption — overwhelmed by complexity, concerned about data privacy, 
            and priced out by enterprise solutions. We knew there had to be a better way.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            So we built HumbleMind AI Labs: a platform where AI agents are privately hosted, easily configured, 
            and affordable. Whether you use our integrated AI assistant to self-manage or opt for our R999/month 
            fully managed service, you get enterprise-grade AI without the enterprise headaches.
          </p>
          <p className="text-foreground font-medium leading-relaxed">
            The future isn't about replacing humans with AI. It's about giving every human the AI tools 
            they need to do extraordinary things.
          </p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
