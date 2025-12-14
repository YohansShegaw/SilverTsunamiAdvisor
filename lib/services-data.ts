import { BarChart3, Bot, Handshake, ShieldAlert, Landmark, ClipboardList } from "lucide-react";

export const servicesData = [
  {
    id: "ebitda",
    title: "EBITDA Growth Strategies",
    icon: BarChart3,
    image: "/services/ebitda.png", 
    shortDesc: "Maximize your sale price. Every $100k increase in EBITDA adds $300k–$1M to valuation.",
    pdfContent: {
      intro: "Understanding EBITDA is crucial. It is the transparent financial measure that eliminates tax strategies and tactical accounting, allowing investors to effectively compare similar businesses.",
      sections: [
        // --- NEW SECTION: USES OF EBITDA (FROM PDF PAGE 1) ---
        {
          heading: "Why EBITDA Matters (The 4 Viewpoints)",
          content: "Before increasing EBITDA, it is vital to understand who is looking at it and why.",
          bullets: [
            "For Investors: It is a measure of scalability. A consistently rising EBITDA graph signals clear growth and effective operational strategy.",
            "For Buyers: It is the benchmark for valuation (M&A). Companies are often valued at 4x or 6x EBITDA. Increasing it directly enhances your sale price.",
            "For Internal Use: Senior leadership uses it as a KPI to link performance to bonuses, focusing on gross profits rather than just revenue.",
            "For Banks: Used to create tailored funding packages. A strong EBITDA history allows for larger loans and better interest rates."
          ]
        },
        // --- EXISTING SECTION: 7 WAYS TO INCREASE ---
        {
          heading: "1. Increase Revenue Without Increasing Costs",
          content: "Strategies to boost income without raising expenses are fundamental to growing EBITDA.",
          bullets: [
            "Raising prices when feasible (adjust for inflation/demand).",
            "Upselling and cross-selling to existing clients.",
            "Improving client retention strategies."
          ]
        },
        {
          heading: "2. Reduce Operating Costs",
          content: "Managing outgoings positively impacts EBITDA just as increasing revenue does.",
          bullets: [
            "Auditing administrative processes for inefficiencies.",
            "Canceling unused subscriptions and recurring expenses.",
            "Outsourcing work to enhance financial efficiency."
          ]
        },
        {
          heading: "3. Improve Gross Margins",
          content: "Expanding profit margins by driving efficiencies rather than increasing prices.",
          bullets: [
            "Re-evaluating supply chains to reduce logistics costs.",
            "Sourcing more affordable materials.",
            "Improving production procedures for efficiency."
          ]
        },
        {
          heading: "4. Improve Productivity & Staff Retention",
          content: "Using AI and technology to reassess productivity.",
          bullets: [
            "Automating manual processes.",
            "Restructuring administrative tasks with software.",
            "Focusing on staff retention and work/life balance to reduce turnover costs."
          ]
        },
        {
          heading: "5. Lower Customer Credit & Bad Debt",
          content: "Poor credit management disrupts cash flow.",
          bullets: [
            "Invoicing earlier in the process.",
            "Setting clear credit account guidelines.",
            "Offering discounts for prompt payments."
          ]
        },
        {
          heading: "6. Limit Capital Load",
          content: "Spreading capital loads improves both cash flow and key financial metrics.",
          bullets: [
            "Utilize asset finance to lease rather than buy major assets.",
            "Opt for cloud-based solutions over in-house hardware.",
            "Implement strategic debt financing."
          ]
        },
        {
          heading: "7. Optimize Working Capital",
          content: "Utilizing debt finance tools to enhance working capital.",
          bullets: [
            "Employ cash flow tools such as invoice financing.",
            "Leverage supplier relationships through dynamic discounting.",
            "Shift investment timing to temporarily boost EBITDA for short-term needs (loan applications/valuation)."
          ]
        }
      ]
    }
  },
 {
    id: "ai",
    title: "AI & Automation Implementation",
    icon: Bot,
    image: "/services/ai.png", 
    shortDesc: "Reduce operating costs by 15-25% through predictive maintenance, dynamic pricing, and automated workflows.",
    pdfContent: {
      intro: "AI can improve a business's EBITDA by both increasing revenue and reducing operating costs through enhanced efficiency, automation, and data-driven decision-making.",
      sections: [
        {
          heading: "1. Revenue Uplift Capabilities",
          content: "AI algorithms dynamically adjust strategies to maximize revenue potential.",
          bullets: [
            "Pricing Optimization: Adjust prices based on demand elasticity, competitor pricing, and market saturation.",
            "Enhanced Marketing: Highly targeted campaigns using customer data analysis (Automated email, SMS, lead qualification).",
            "Personalized Customer Experience: AI-driven personalization to improve satisfaction and loyalty.",
            "New Market Penetration: Translation and region-specific coding tools."
          ]
        },
        {
          heading: "2. Cost Optimization & Efficiency",
          content: "Automating repetitive tasks to free employees for higher-value activities.",
          bullets: [
            "Operational Efficiency: Automating data entry, invoice processing, and scheduling (15–25% cost reduction).",
            "Supply Chain: Highly accurate demand forecasts to reduce carrying costs and minimize waste.",
            "Predictive Maintenance: Predicting equipment failures before they occur to prevent downtime.",
            "Optimized Labor Management: Precise shift scheduling and staffing alignment.",
            "Improved Procurement: Analyzing supplier data to negotiate better terms."
          ]
        },
        {
          heading: "3. Strategic Evaluation Criteria (Feasibility)",
          content: "To evaluate AI feasibility, we follow a structured approach tying initiatives to financial outcomes.",
          bullets: [
            "Define Clear Business Objectives: Solve real 'pain points' (e.g., reduce bottlenecks, manage risk).",
            "Quantify Financial Impact (ROI/EBITDA): Estimate benefits (savings/growth) vs. costs (tech/infrastructure). Calculate Payback Period.",
            "Assess Data Readiness: Evaluate if data is available, accessible, clean, and sufficient for training models.",
            "Determine Technical Feasibility: Check compatibility with existing systems and scalability.",
            "Evaluate Organizational Readiness: Assess internal talent, change management needs, and risk mitigation (data privacy)."
          ]
        },
        {
          heading: "4. Implementation & Monitoring Framework",
          content: "A step-by-step framework to ensure value creation.",
          bullets: [
            "Start with Pilot Projects: Launch a proof-of-concept in a high-impact area to validate assumptions.",
            "Establish Performance Baseline & KPIs: Document current metrics so AI impact can be accurately measured.",
            "Foster Cross-Functional Collaboration: Involve Finance, IT, and Ops to reduce resistance to change.",
            "Monitor Continuously: Track performance against KPIs and refine models based on real-world data.",
            "Focus on Outcomes over Outputs: Success is measured by actual business outcomes (dollar amount saved), not just technology deployment."
          ]
        }
      ]
    }
  },
  {
    id: "ma",
    title: "M&A / Acquisitions",
    icon: Handshake,
    image: "/services/mergers.png", 
    shortDesc: "Rapidly build EBITDA through acquisition of complimentary companies. We handle Target ID to Integration.",
    pdfContent: {
      intro: "Acquiring similar companies is a powerful strategy to boost EBITDA. The primary mechanism is the realization of synergies—combined benefits that exceed the sum of individual parts.",
      sections: [
        {
          heading: "Why Acquisitions Increase EBITDA",
          content: "Consolidating operations generates substantial value.",
          bullets: [
            "Economies of Scale: Negotiate better terms with suppliers, bulk purchasing, and streamlined distribution.",
            "Revenue Growth: Rapid access to new markets, customer bases, and distribution channels.",
            "Operational Efficiency: Integrating 'best practices', pooling talent, and sharing intellectual property."
          ]
        },
        {
          heading: "Silver Tsunami Advisors Approach",
          content: "We leverage the current demographic shift to identify ideal acquisition opportunities.",
          bullets: [
            "Target Identification: Identifying targets with strong normalized EBITDA using industry-specific multiples (e.g., 27x for IT vs 7x for Energy).",
            "Due Diligence & Synergy Assessment: Rigorous assessment of potential add-backs and cost savings.",
            "Deal Structuring: Securing favorable debt financing using the combined entity's stronger position.",
            "Post-Acquisition Integration: Orchestrating the process to ensure planned synergies are actually captured."
          ]
        }
      ]
    }
  },
  {
    id: "cro",
    title: "Chief Restructuring Officer (CRO)",
    icon: ShieldAlert,
    image: "/services/cro.png", 
    shortDesc: "Crisis management, debt restructuring, and operational turnarounds for businesses in distress.",
    pdfContent: {
      intro: "When a business is in distress, stakeholders need an independent, trusted expert to navigate the crisis. We serve as the CRO to guide companies through complex proceedings.",
      sections: [
        // --- NEW SECTION: WHY CHOOSE US (FROM BANKRUPTCY PDF) ---
        {
          heading: "Why Choose Us? (The Honest Broker)",
          content: "Our professional differentiation lies in our ability to act as an 'honest broker' with full authority to make difficult, unbiased decisions.",
          bullets: [
            "We prioritize transparency, consistent communication, and accountability.",
            "We provide independent leadership free from the company's historical biases.",
            "Client Testimonial: 'Their independent perspective and deep expertise were crucial in navigating our Chapter 11 case and securing a positive outcome.'"
          ]
        },
        {
          heading: "Our Expertise",
          content: "We act as an objective third party, working directly with the board, management, and creditors.",
          bullets: [
            "Operational & Financial Acumen: Deep expertise in cash flow management and liquidity preservation.",
            "Stakeholder Consensus: Managing communications with senior lenders, vendors, and landlords.",
            "Legal Navigation: Ensuring adherence to frameworks including U.S. Bankruptcy Code (Chapter 11)."
          ]
        },
        {
          heading: "Core Services",
          content: "A full suite of services tailored to troubled companies.",
          bullets: [
            "Crisis Management: Addressing immediate challenges and investor relations.",
            "Debt Restructuring: Negotiating with creditors to modify terms and securing DIP loans.",
            "Operational Turnaround: Implementing efficiency improvements and cost reductions to restore profitability.",
            "Insolvency Guidance: Managing asset liquidation and wind-downs if necessary."
          ]
        }
      ]
    }
  },
  {
    id: "wealth",
    title: "Post-Sale Wealth & Tenacity Group",
    icon: Landmark,
    image: "/services/wealth.png", 
    shortDesc: "Exclusive access to Tenacity Group land development (15-30% ROI) and legacy planning.",
    pdfContent: {
      intro: "The journey doesn't end at the closing table. We help transform sale proceeds into lasting wealth through our integrated platform of resources and curated investment opportunities.",
      sections: [
        {
          heading: "Tenacity Group Land Development",
          content: "Exclusive access to tangible real estate ventures through our in-house sister company.",
          bullets: [
            "Strategy: Acquisition of 50 to 5,000 acres of raw land.",
            "Process: Acquiring entitlements/permits, handling horizontal development (utilities, curb cuts), and selling bare lots to large-scale builders.",
            "Performance: Typically a four-year investment cycle with average ROI of 15-30% APR.",
            "Liquidity: Return of capital by year three, full profits by year four."
          ]
        },
        {
          heading: "Wealth Management Network",
          content: "We bridge the gap between business exit and long-term wealth.",
          bullets: [
            "Wealth Management: Strategic planning focusing on preservation and growth.",
            "Legacy Planning: Estate planning experts to address generational wealth and philanthropy.",
            "Strategic Collaborations: Working with business brokers for seamless transition planning."
          ]
        }
      ]
    }
  },
  {
    id: "outsourcing",
    title: "Strategic Outsourcing",
    icon: ClipboardList,
    image: "/services/outsourcing.png", 
    shortDesc: "Save up to 70% on labor costs with world-class Ethiopian talent.",
    pdfContent: {
      intro: "Strategic outsourcing allows you to focus on core activities while accessing specialized expertise without the overhead of an in-house team.",
      sections: [
        {
          heading: "Key Benefits",
          content: "",
          bullets: [
            "Cost Efficiency: Convert fixed costs (salaries, benefits, office space) into variable costs.",
            "Access to Talent: Immediate access to experts with industry-specific knowledge.",
            "Scalability: Quickly scale efforts up or down based on market changes or seasonal demands."
          ]
        },
        {
          heading: "Improving Business Processes",
          content: "We identify and eliminate inefficiencies.",
          bullets: [
            "Increased operational efficiency: Doing more with less.",
            "Cost reduction: Minimizing errors and optimizing resource use.",
            "Streamlining Marketing: Enhancing lead quality and data-driven decisions."
          ]
        }
      ]
    }
  }
];