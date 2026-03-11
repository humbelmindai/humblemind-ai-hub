import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Bot, MessageSquare, BarChart3, FileText, ShoppingCart, HeadphonesIcon, Mail, Calendar, Database, Brain, Code, Megaphone, Truck, Heart, Briefcase, GraduationCap, Shield, Camera, Music, Utensils, Home, Plane, Wrench, Palette, Scale, Stethoscope, Landmark, Leaf, Gamepad2, Car, Smartphone, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

gsap.registerPlugin(ScrollTrigger);

type Agent = {
  icon: typeof Bot;
  name: string;
  category: string;
  desc: string;
  features: string[];
};

const categories = [
  "All", "Customer Service", "Sales & Marketing", "Operations",
  "Data & Analytics", "Content & Creative", "Industry-Specific", "Development", "HR & Legal",
];

const agents: Agent[] = [
  { icon: HeadphonesIcon, name: "Customer Support Agent", category: "Customer Service", desc: "24/7 intelligent customer support with natural language understanding.", features: ["Multi-language support", "Sentiment analysis", "Ticket escalation", "Knowledge base integration"] },
  { icon: MessageSquare, name: "Live Chat Agent", category: "Customer Service", desc: "Real-time conversational support for websites and apps.", features: ["Instant responses", "Context memory", "Handoff to human", "CRM integration"] },
  { icon: Mail, name: "Email Response Agent", category: "Customer Service", desc: "Automated email triage, categorization and response drafting.", features: ["Smart categorization", "Template suggestions", "Priority scoring", "Follow-up tracking"] },
  { icon: Bot, name: "FAQ Bot", category: "Customer Service", desc: "Instantly answers frequently asked questions from your knowledge base.", features: ["Self-learning", "Multi-format answers", "Analytics dashboard", "Easy training"] },
  { icon: HeadphonesIcon, name: "Complaint Resolution Agent", category: "Customer Service", desc: "Handles complaints with empathy and escalates when needed.", features: ["Emotion detection", "Resolution workflows", "SLA tracking", "Feedback collection"] },
  { icon: MessageSquare, name: "Social Media Support Agent", category: "Customer Service", desc: "Monitors and responds to customer queries across social platforms.", features: ["Multi-platform", "Brand voice matching", "Rapid response", "Trend alerts"] },
  { icon: ShoppingCart, name: "Sales Assistant Agent", category: "Sales & Marketing", desc: "Qualifies leads, nurtures prospects and books meetings.", features: ["Lead scoring", "Pipeline management", "Meeting scheduling", "CRM sync"] },
  { icon: Megaphone, name: "Marketing Campaign Agent", category: "Sales & Marketing", desc: "Plans, executes and optimizes marketing campaigns.", features: ["A/B testing", "Audience segmentation", "Performance tracking", "Budget optimization"] },
  { icon: Mail, name: "Email Marketing Agent", category: "Sales & Marketing", desc: "Creates, schedules and analyzes email marketing campaigns.", features: ["Smart segmentation", "Personalization", "Open rate optimization", "Drip campaigns"] },
  { icon: BarChart3, name: "Market Research Agent", category: "Sales & Marketing", desc: "Gathers and analyzes market data for strategic decisions.", features: ["Competitor analysis", "Trend detection", "Report generation", "Data visualization"] },
  { icon: Megaphone, name: "Social Media Manager Agent", category: "Sales & Marketing", desc: "Creates, schedules and manages social media content.", features: ["Content calendar", "Auto-posting", "Engagement tracking", "Hashtag optimization"] },
  { icon: ShoppingCart, name: "E-commerce Agent", category: "Sales & Marketing", desc: "Product recommendations, upselling and cart recovery.", features: ["Personalized suggestions", "Cart abandonment recovery", "Dynamic pricing", "Inventory alerts"] },
  { icon: Calendar, name: "Scheduling Agent", category: "Operations", desc: "Intelligent scheduling across teams and time zones.", features: ["Conflict detection", "Timezone management", "Resource allocation", "Calendar sync"] },
  { icon: Truck, name: "Supply Chain Agent", category: "Operations", desc: "Monitors and optimizes supply chain operations.", features: ["Inventory forecasting", "Vendor management", "Route optimization", "Risk assessment"] },
  { icon: Wrench, name: "IT Operations Agent", category: "Operations", desc: "Monitors systems, handles alerts and automates IT tasks.", features: ["System monitoring", "Auto-remediation", "Incident management", "Capacity planning"] },
  { icon: FileText, name: "Document Processing Agent", category: "Operations", desc: "Extracts, classifies and processes documents automatically.", features: ["OCR processing", "Data extraction", "Classification", "Compliance checks"] },
  { icon: Database, name: "Data Entry Agent", category: "Operations", desc: "Automates data entry tasks with high accuracy.", features: ["Multi-source input", "Validation rules", "Error correction", "Batch processing"] },
  { icon: Calendar, name: "Project Management Agent", category: "Operations", desc: "Tracks tasks, deadlines and team progress.", features: ["Task assignment", "Progress tracking", "Risk flagging", "Status reports"] },
  { icon: BarChart3, name: "Business Intelligence Agent", category: "Data & Analytics", desc: "Transforms raw data into actionable business insights.", features: ["Custom dashboards", "Trend analysis", "Predictive models", "Automated reports"] },
  { icon: Database, name: "Data Pipeline Agent", category: "Data & Analytics", desc: "ETL automation for data warehousing and analytics.", features: ["Auto-scheduling", "Data quality checks", "Schema management", "Error handling"] },
  { icon: Brain, name: "Predictive Analytics Agent", category: "Data & Analytics", desc: "Forecasts trends and outcomes using machine learning.", features: ["Demand forecasting", "Churn prediction", "Revenue modeling", "Anomaly detection"] },
  { icon: BarChart3, name: "Financial Analysis Agent", category: "Data & Analytics", desc: "Analyzes financial data and generates reports.", features: ["P&L analysis", "Cash flow forecasting", "Budget tracking", "Variance analysis"] },
  { icon: Shield, name: "Fraud Detection Agent", category: "Data & Analytics", desc: "Real-time fraud detection across transactions.", features: ["Pattern recognition", "Risk scoring", "Alert management", "Regulatory reporting"] },
  { icon: Database, name: "Data Quality Agent", category: "Data & Analytics", desc: "Ensures data integrity across your systems.", features: ["Deduplication", "Validation rules", "Consistency checks", "Data profiling"] },
  { icon: FileText, name: "Content Writer Agent", category: "Content & Creative", desc: "Generates blog posts, articles and marketing copy.", features: ["SEO optimization", "Brand voice", "Multi-format", "Research integration"] },
  { icon: Palette, name: "Design Brief Agent", category: "Content & Creative", desc: "Creates detailed design briefs from project requirements.", features: ["Mood boards", "Style guides", "Asset management", "Revision tracking"] },
  { icon: Camera, name: "Image Analysis Agent", category: "Content & Creative", desc: "Analyzes and tags images for content management.", features: ["Auto-tagging", "Quality assessment", "Brand compliance", "Metadata extraction"] },
  { icon: FileText, name: "Translation Agent", category: "Content & Creative", desc: "High-quality translation across 100+ languages.", features: ["Context-aware", "Glossary support", "Quality scoring", "Cultural adaptation"] },
  { icon: Music, name: "Audio Transcription Agent", category: "Content & Creative", desc: "Converts audio and video to text with high accuracy.", features: ["Speaker identification", "Timestamp markers", "Multi-language", "Format export"] },
  { icon: Palette, name: "Brand Voice Agent", category: "Content & Creative", desc: "Ensures all content matches your brand guidelines.", features: ["Style enforcement", "Tone analysis", "Content scoring", "Template library"] },
  { icon: Stethoscope, name: "Healthcare Assistant Agent", category: "Industry-Specific", desc: "Patient scheduling, records management and triage.", features: ["HIPAA compliant", "Appointment booking", "Symptom checker", "Record management"] },
  { icon: Scale, name: "Legal Research Agent", category: "Industry-Specific", desc: "Researches case law, statutes and legal precedents.", features: ["Case analysis", "Document review", "Compliance checking", "Citation management"] },
  { icon: Landmark, name: "Real Estate Agent", category: "Industry-Specific", desc: "Property matching, virtual tours and market analysis.", features: ["Property matching", "Market valuation", "Lead qualification", "Document preparation"] },
  { icon: GraduationCap, name: "Education Tutor Agent", category: "Industry-Specific", desc: "Personalized learning and tutoring for students.", features: ["Adaptive learning", "Progress tracking", "Quiz generation", "Feedback loops"] },
  { icon: Utensils, name: "Restaurant Management Agent", category: "Industry-Specific", desc: "Orders, reservations, inventory and staff scheduling.", features: ["Order management", "Table optimization", "Menu analysis", "Waste reduction"] },
  { icon: Car, name: "Automotive Service Agent", category: "Industry-Specific", desc: "Appointment scheduling, diagnostics and parts ordering.", features: ["Service scheduling", "Diagnostic reports", "Parts inventory", "Customer follow-up"] },
  { icon: Leaf, name: "Agriculture Agent", category: "Industry-Specific", desc: "Crop monitoring, weather analysis and yield prediction.", features: ["Soil analysis", "Weather integration", "Pest detection", "Harvest planning"] },
  { icon: Plane, name: "Travel Planning Agent", category: "Industry-Specific", desc: "Itinerary creation, booking and travel management.", features: ["Personalized itineraries", "Price comparison", "Booking automation", "Travel alerts"] },
  { icon: Home, name: "Property Management Agent", category: "Industry-Specific", desc: "Tenant communication, maintenance and rent collection.", features: ["Tenant portal", "Maintenance tickets", "Rent tracking", "Lease management"] },
  { icon: Heart, name: "Nonprofit Fundraising Agent", category: "Industry-Specific", desc: "Donor management, campaign planning and reporting.", features: ["Donor segmentation", "Campaign automation", "Impact reporting", "Grant tracking"] },
  { icon: Gamepad2, name: "Gaming Community Agent", category: "Industry-Specific", desc: "Community moderation, events and player engagement.", features: ["Moderation", "Event planning", "Player analytics", "Reward systems"] },
  { icon: Code, name: "Code Review Agent", category: "Development", desc: "Automated code review with best practice suggestions.", features: ["Style checking", "Bug detection", "Security scanning", "Performance tips"] },
  { icon: Code, name: "DevOps Agent", category: "Development", desc: "CI/CD pipeline management and infrastructure monitoring.", features: ["Pipeline automation", "Deploy management", "Log analysis", "Alerting"] },
  { icon: Smartphone, name: "QA Testing Agent", category: "Development", desc: "Automated testing, bug reporting and regression tracking.", features: ["Test generation", "Bug reproduction", "Coverage analysis", "Regression tracking"] },
  { icon: Code, name: "API Integration Agent", category: "Development", desc: "Connects and synchronizes data across APIs.", features: ["API mapping", "Data transformation", "Error handling", "Rate limiting"] },
  { icon: Database, name: "Database Admin Agent", category: "Development", desc: "Database optimization, backups and query analysis.", features: ["Query optimization", "Backup scheduling", "Schema management", "Performance tuning"] },
  { icon: Shield, name: "Security Audit Agent", category: "Development", desc: "Continuous security scanning and vulnerability assessment.", features: ["Vulnerability scanning", "Compliance checks", "Threat detection", "Patch management"] },
  { icon: Briefcase, name: "HR Onboarding Agent", category: "HR & Legal", desc: "Streamlines employee onboarding with automated workflows.", features: ["Document collection", "Training scheduling", "Policy acknowledgment", "Welcome sequences"] },
  { icon: Briefcase, name: "Recruitment Agent", category: "HR & Legal", desc: "Resume screening, candidate matching and interview scheduling.", features: ["Resume parsing", "Skill matching", "Interview booking", "Candidate scoring"] },
  { icon: FileText, name: "Contract Review Agent", category: "HR & Legal", desc: "Analyzes contracts for risks, obligations and terms.", features: ["Risk identification", "Clause extraction", "Comparison tools", "Deadline tracking"] },
  { icon: Scale, name: "Compliance Agent", category: "HR & Legal", desc: "Monitors regulatory compliance across your organization.", features: ["Policy tracking", "Audit preparation", "Risk assessment", "Training reminders"] },
  { icon: Briefcase, name: "Payroll Agent", category: "HR & Legal", desc: "Automates payroll processing and tax calculations.", features: ["Tax computation", "Deduction management", "Pay slip generation", "Compliance reporting"] },
  { icon: Users, name: "Employee Engagement Agent", category: "HR & Legal", desc: "Surveys, feedback collection and culture insights.", features: ["Pulse surveys", "Sentiment tracking", "Suggestion management", "Recognition programs"] },
];

const Agents = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-agents-hero]", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = agents.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 relative" ref={heroRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(200_85%_55%/0.08),transparent_60%)]" />
        <div className="container px-4 md:px-8 relative z-10 text-center">
          <h1 data-agents-hero className="font-display text-4xl md:text-6xl font-bold mb-4">
            AI Agents for <span className="text-gradient">Every Use Case</span>
          </h1>
          <p data-agents-hero className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our library of {agents.length}+ intelligent agents covering every industry and business function. 
            All privately hosted on your dedicated servers.
          </p>

          {/* Search */}
          <div data-agents-hero className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm"
            />
          </div>

          {/* Category filters */}
          <div data-agents-hero className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === c
                    ? "bg-gradient-brand text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-8">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} agents found</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  className="bg-gradient-card border-gradient rounded-xl p-6 hover:glow transition-shadow duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.5) }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center shrink-0">
                      <agent.icon size={22} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{agent.name}</h3>
                      <span className="text-xs text-muted-foreground">{agent.category}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{agent.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.features.map((f) => (
                      <span key={f} className="px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Agents;
