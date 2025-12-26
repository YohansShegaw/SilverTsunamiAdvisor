"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion";
import { 
  BrainCircuit, 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  Target, 
  Search, 
  Scale, 
  BarChart, 
  Rocket, 
  Users, 
  RefreshCw,
  Globe2,
  Megaphone,
  Smile,
  Truck,
  Wrench,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Database,
  Server
} from "lucide-react";

export default function AiIntegrationPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const revenueStrategies = [
    { icon: TrendingUp, title: "Pricing Optimization", desc: "AI algorithms dynamically adjust prices based on demand elasticity, competitor pricing, and market saturation to maximize revenue potential." },
    { icon: Megaphone, title: "Enhanced Marketing", desc: "Highly targeted campaigns and personalized content to increase acquisition. Automate email, SMS, and thank-you communications." },
    { icon: Smile, title: "Personalized CX", desc: "AI-driven personalization improves customer satisfaction and loyalty, leading to increased sales and a healthier customer base." },
    { icon: Globe2, title: "New Market Penetration", desc: "Translation and region-specific coding tools help businesses efficiently cross borders to reach previously unreachable segments." },
  ];

  const costStrategies = [
    { icon: Zap, title: "Operational Efficiency", desc: "Automate repetitive tasks like invoicing and scheduling. Some companies see 15–25% cost reductions in supply chain management." },
    { icon: Truck, title: "Supply Chain & Inventory", desc: "Generate highly accurate demand forecasts to optimize inventory levels, reduce carrying costs, and minimize waste or stockouts." },
    { icon: Wrench, title: "Predictive Maintenance", desc: "Predict equipment failures before they occur in asset-intensive industries, preventing costly downtime and extending machinery lifespan." },
    { icon: Users, title: "Labor Management", desc: "Forecast operational demand to create optimal shift schedules, aligning staffing with actual needs for productivity gains." },
    { icon: ShoppingBag, title: "Improved Procurement", desc: "Analyze supplier data and spending patterns to identify cost-saving opportunities and facilitate better negotiation terms." },
  ];

  const frameworkSteps = [
    { number: "01", title: "Define Objectives", icon: Target, desc: "Identify specific pain points impacting revenue or cost. Don't adopt AI just for innovation; solve real business problems." },
    { number: "02", title: "Identify High-Impact Areas", icon: Search, desc: "Pinpoint data-intensive tasks. Focus on optimizing pricing, supply chain efficiency, or automating manual data entry." },
    { number: "03", title: "Prioritize (Value vs Feasibility)", icon: Scale, desc: "Weigh ROI against difficulty. Balance 'quick wins' to build momentum with long-term strategic projects." },
    { number: "04", title: "Establish Baseline & KPIs", icon: BarChart, desc: "Document current metrics. Define clear KPIs (e.g., reduced defect rate, lower ops costs) to link AI performance to outcomes." },
    { number: "05", title: "Run Pilot Projects", icon: Rocket, desc: "Test with a small, focused pilot to validate assumptions and gather real-world data before full-scale deployment." },
    { number: "06", title: "Foster Collaboration", icon: Users, desc: "Involve Finance, IT, and Ops stakeholders early to ensure the solution fits workflows and reduce resistance." },
    { number: "07", title: "Monitor & Scale", icon: RefreshCw, desc: "Continuously track performance against KPIs using feedback loops. Adapt to market conditions and scale sustainably." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-md">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">AI & Automation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              AI-Driven <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-cyan-400 to-white">
                EBITDA Growth
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              AI can improve a business's EBITDA by both <strong>increasing revenue</strong> and <strong>reducing operating costs</strong> through enhanced efficiency, automation, and data-driven decision-making.
            </p>
          </motion.div>
        </section>

        {/* PILLAR 1 & 2: REVENUE & COST */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Revenue Uplift */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-500/30">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Revenue Uplift</h2>
              </div>
              
              <div className="space-y-4">
                {revenueStrategies.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="p-6 bg-[#0B0F1A] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex gap-4">
                      <item.icon className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cost Optimization */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Cost Optimization</h2>
              </div>

              <div className="space-y-4">
                {costStrategies.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="p-6 bg-[#0B0F1A] border border-white/10 rounded-2xl hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex gap-4">
                      <item.icon className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* RISK MANAGEMENT BANNER */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="p-6 bg-red-950/30 rounded-full border border-red-500/20">
                <ShieldAlert className="w-12 h-12 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Risk Management: Fraud Detection</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI leverages machine learning to analyze vast amounts of data to detect anomalies and identify potential fraud patterns, helping safeguard assets and minimize financial losses.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Implementation Framework</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A step-by-step framework for identifying impactful AI solutions aligned with core business objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {frameworkSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative group p-6 bg-white/3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all ${i === 6 ? "lg:col-span-3 xl:col-span-2 xl:col-start-2" : ""}`}
                >
                  <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{step.number}</div>
                  <step.icon className="w-8 h-8 text-cyan-500 mb-6 relative z-10" />
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC EVALUATION CRITERIA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-12 pl-4 border-l-4 border-cyan-500 text-white"
            >
              Strategic Evaluation Criteria
            </motion.h2>

            <div className="space-y-8">
              {/* ROI Analysis */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B0F1A] border border-white/10 rounded-3xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-900/20 rounded-xl"><BarChart className="w-6 h-6 text-green-400" /></div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Quantify Potential Financial Impact (ROI/EBITDA)</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-bold text-green-400 mb-2">Estimate Benefits</h4>
                        <p className="text-xs text-gray-400">Gains from efficiency, cost savings, revenue growth, and risk mitigation.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-bold text-red-400 mb-2">Estimate Costs</h4>
                        <p className="text-xs text-gray-400">Tech development, infrastructure, data management, and talent acquisition.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-bold text-blue-400 mb-2">Calculate ROI</h4>
                        <p className="text-xs text-gray-400">Use NPV and payback period to ensure benefits outweigh costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tech & Data Readiness */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0B0F1A] border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Data Readiness</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI relies heavily on data quality. Evaluate whether necessary data is available, accessible, clean, and sufficient for training models.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0B0F1A] border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Technical Feasibility</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Assess if required AI tools are compatible with existing systems and if technology can scale. Decide between off-the-shelf vs custom solutions.
                  </p>
                </motion.div>
              </div>

              {/* Organizational Readiness */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B0F1A] border border-white/10 rounded-3xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Users className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Organizational Readiness & Risk</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span><strong>Talent:</strong> Ensure internal talent exists or plan to acquire it to manage AI systems.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span><strong>Change Management:</strong> Prepare for impact on workflows; successful adoption requires training.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span><strong>Risk Mitigation:</strong> Identify ethical/legal implications, data privacy, and security vulnerabilities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL IMPLEMENTATION GRID */}
        <section className="py-24 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
             <div className="p-6 border-t-2 border-cyan-500">
               <h4 className="text-lg font-bold text-white mb-3">Start Focused</h4>
               <p className="text-gray-400 text-sm">Instead of enterprise-wide rollout, launch a proof-of-concept project in an area with high likelihood of measurable financial impact.</p>
             </div>
             <div className="p-6 border-t-2 border-purple-500">
               <h4 className="text-lg font-bold text-white mb-3">Iterate Continuously</h4>
               <p className="text-gray-400 text-sm">Regularly track metrics against baselines. Adjust models based on real-world data to ensure positive impact on EBITDA.</p>
             </div>
             <div className="p-6 border-t-2 border-blue-500">
               <h4 className="text-lg font-bold text-white mb-3">Focus on Outcomes</h4>
               <p className="text-gray-400 text-sm">The ultimate measure of success is the actual business outcome (dollar amount saved, revenue generated), not just the technology itself.</p>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}