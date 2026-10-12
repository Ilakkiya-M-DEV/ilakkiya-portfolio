import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Brain,
  Boxes,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  Monitor,
  Network,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    icon: BarChart3,
    category: "Analytics",
    title: "Data Analytics Dashboard System",
    summary:
      "Interactive dashboards for operational and financial data, with dynamic filters, time-based analysis, and reusable visualizations.",
    impact: "Turning data into decisions",
    tags: ["React", "TypeScript", "ECharts"],
    tone: "violet",
  },
  {
    icon: Workflow,
    category: "AI workflows",
    title: "AI-Assisted Workflow System",
    summary:
      "AI-assisted workflows that bring intelligent automation into analysis and day-to-day product experiences.",
    impact: "Smarter workflows with AI",
    tags: ["React", "AI Integration", "APIs"],
    tone: "pink",
  },
  {
    icon: GitBranch,
    category: "Data visualization",
    title: "Hierarchical Data Visualization",
    summary:
      "Expandable, interactive tree visualizations that make complex structures easier to explore and understand.",
    impact: "Complex data in simple views",
    tags: ["ECharts", "Data Viz", "Performance"],
    tone: "blue",
  },
  {
    icon: Monitor,
    category: "Monitoring",
    title: "Monitoring & Governance Platform",
    summary:
      "A centralized platform for monitoring workflows, compliance, and system-level insights with real-time updates.",
    impact: "Real-time visibility at scale",
    tags: ["React", "TypeScript", "System Design"],
    tone: "orange",
  },
  {
    icon: Layers,
    category: "Design systems",
    title: "Reusable Component System",
    summary:
      "Shared UI components and logic designed to improve consistency, maintainability, and delivery across products.",
    impact: "Reusable foundations for teams",
    tags: ["React", "TypeScript", "Architecture"],
    tone: "cyan",
  },
  {
    icon: TrendingUp,
    category: "Engineering insights",
    title: "Engineering Metrics & Insights",
    summary:
      "Dashboards that bring workflow efficiency, quality indicators, and delivery trends into view.",
    impact: "Better planning through insights",
    tags: ["React", "ECharts", "Analytics"],
    tone: "blue",
  },
  {
    icon: Cpu,
    category: "Product interfaces",
    title: "Service-Based Product Interfaces",
    summary:
      "Modular, API-driven frontend architecture that adapts to multiple services, use cases, and configurations.",
    impact: "Flexible interfaces that scale",
    tags: ["React", "TypeScript", "API Integration"],
    tone: "violet",
  },
  {
    icon: Brain,
    category: "AI integration",
    title: "AI-Driven Module Integrations",
    summary:
      "AI-assisted modules integrated into frontend workflows to support smarter data processing and decisions.",
    impact: "Intelligence in everyday tools",
    tags: ["React", "AI / MCP", "Context-aware UI"],
    tone: "green",
  },
];

const toneStyles = {
  violet: {
    border: "border-violet-200/80 hover:border-violet-300",
    icon: "bg-violet-100 text-violet-700",
    badge: "bg-violet-50 text-violet-700",
    tag: "bg-violet-50 text-violet-700",
    line: "#8b5cf6",
  },
  pink: {
    border: "border-fuchsia-200/80 hover:border-fuchsia-300",
    icon: "bg-fuchsia-100 text-fuchsia-700",
    badge: "bg-fuchsia-50 text-fuchsia-700",
    tag: "bg-fuchsia-50 text-fuchsia-700",
    line: "#d946ef",
  },
  blue: {
    border: "border-blue-200/80 hover:border-blue-300",
    icon: "bg-blue-100 text-blue-700",
    badge: "bg-blue-50 text-blue-700",
    tag: "bg-blue-50 text-blue-700",
    line: "#3b82f6",
  },
  orange: {
    border: "border-orange-200/80 hover:border-orange-300",
    icon: "bg-orange-100 text-orange-700",
    badge: "bg-orange-50 text-orange-700",
    tag: "bg-orange-50 text-orange-700",
    line: "#f97316",
  },
  cyan: {
    border: "border-cyan-200/80 hover:border-cyan-300",
    icon: "bg-cyan-100 text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    tag: "bg-cyan-50 text-cyan-700",
    line: "#06b6d4",
  },
  green: {
    border: "border-emerald-200/80 hover:border-emerald-300",
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
    tag: "bg-emerald-50 text-emerald-700",
    line: "#10b981",
  },
} as const;

const connectorPaths = [
  "M600 450 C520 380 410 280 200 150",
  "M600 450 C600 350 600 260 600 150",
  "M600 450 C680 380 790 280 1000 150",
  "M600 450 C470 450 350 450 200 450",
  "M600 450 C730 450 850 450 1000 450",
  "M600 450 C470 520 350 650 200 750",
  "M600 450 C600 560 600 650 600 750",
  "M600 450 C730 520 850 650 1000 750",
];

const projectGridPositions = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-2 lg:row-start-3",
  "lg:col-start-3 lg:row-start-3",
];

const ProjectHub = () => (
  <div className="relative hidden min-h-[260px] flex-col items-center justify-center lg:col-start-2 lg:row-start-2 lg:flex">
    <div className="absolute h-48 w-48 rounded-full border border-violet-300/50" />
    <div className="absolute h-36 w-36 rounded-full border border-dashed border-blue-300/70" />
    <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-violet-300/35 to-blue-300/35 blur-2xl" />
    <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-white/90 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-800 shadow-[0_16px_36px_rgba(91,33,182,0.3)]">
      <div className="absolute inset-1 rounded-[1.4rem] border border-white/15" />
      <span className="relative text-2xl font-black tracking-tight text-white">
        IM<span className="text-fuchsia-300">♥</span>
      </span>
      <span className="absolute -bottom-1.5 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-violet-500/50 blur-md" />
    </div>
    <span className="relative mt-5 inline-flex items-center gap-1.5 rounded-full border border-white bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
      <Network className="h-3.5 w-3.5 text-violet-600" />
      Product engineering
    </span>
    <span className="absolute left-[2%] top-[20%] rounded-full border border-white bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-violet-700 shadow-sm">
      <Sparkles className="mr-1 inline h-3 w-3" />
      AI
    </span>
    <span className="absolute right-[0%] top-[22%] rounded-full border border-white bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-blue-700 shadow-sm">
      <BarChart3 className="mr-1 inline h-3 w-3" />
      Analytics
    </span>
    <span className="absolute bottom-[12%] left-[3%] rounded-full border border-white bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-orange-700 shadow-sm">
      <Code2 className="mr-1 inline h-3 w-3" />
      UI / UX
    </span>
    <span className="absolute bottom-[12%] right-[-3%] rounded-full border border-white bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm">
      <Boxes className="mr-1 inline h-3 w-3" />
      Systems
    </span>
  </div>
);

const Projects = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#fff6e8] px-6 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_52%_46%,rgba(196,181,253,0.25),transparent_38%),radial-gradient(ellipse_at_4%_92%,rgba(255,197,116,0.32),transparent_35%),radial-gradient(ellipse_at_96%_12%,rgba(255,211,153,0.36),transparent_32%)]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-blue-600">
              <span aria-hidden="true">// </span>Projects
            </p>
            <h2 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
              Products I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                engineered.
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1} className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A collection of real-world products and modules — turning complex
              data into intuitive experiences, connected workflows, and
              actionable insights.
            </p>
            <a
              href="#contact"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              Discuss a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </SectionReveal>
        </div>

        <div className="relative mt-10 lg:mt-12">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 900"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
          >
            <defs>
              <linearGradient id="project-connector" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity=".22" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity=".68" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity=".25" />
              </linearGradient>
            </defs>
            {connectorPaths.map((path) => (
              <path
                key={path}
                d={path}
                fill="none"
                stroke="url(#project-connector)"
                strokeWidth="3"
                strokeDasharray="3 10"
                strokeLinecap="round"
              />
            ))}
            <circle cx="600" cy="450" r="6" fill="#8b5cf6" />
            <circle cx="200" cy="150" r="4" fill="#60a5fa" />
            <circle cx="1000" cy="150" r="4" fill="#f472b6" />
            <circle cx="200" cy="750" r="4" fill="#60a5fa" />
            <circle cx="1000" cy="750" r="4" fill="#f472b6" />
          </svg>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(260px,auto))] lg:gap-5">
            {projects.map((project, index) => {
              const colors = toneStyles[project.tone as keyof typeof toneStyles];

              return (
                <motion.article
                  key={project.title}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: reducedMotion ? 0 : (index % 3) * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={reducedMotion ? undefined : { y: -5 }}
                  className={`group relative z-10 flex h-full min-h-[225px] flex-col rounded-2xl border bg-white/90 p-5 shadow-[0_14px_36px_rgba(92,61,32,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(92,61,32,0.14)] sm:p-6 lg:min-h-[260px] ${colors.border} ${projectGridPositions[index]}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}>
                        <project.icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
                        {project.title}
                      </h3>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${colors.badge}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                    <ArrowDownRight className={`h-4 w-4 ${colors.badge.split(" ")[1]}`} />
                    {project.impact}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}

            <ProjectHub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
