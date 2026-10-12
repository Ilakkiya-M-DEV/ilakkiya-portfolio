import { motion } from "framer-motion";
import {
  Activity,
  Atom,
  BarChart3,
  Blocks,
  Braces,
  BrainCircuit,
  Boxes,
  ChartNoAxesCombined,
  Check,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  Figma,
  Filter,
  GitBranch,
  Layers3,
  Link2,
  PanelsTopLeft,
  Rocket,
  Server,
  Settings,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const groups = [
  {
    number: "01",
    title: "Frontend & Architecture",
    subtitle: "Building responsive, scalable and maintainable user interfaces.",
    action: "UI Development",
    icon: PanelsTopLeft,
    tone: "orange",
    skills: [
      { name: "React.js", detail: "Advanced", icon: Atom, color: "text-cyan-500" },
      { name: "TypeScript", icon: Braces, color: "text-blue-600" },
      { name: "JavaScript", detail: "ES6+", icon: FileCode2, color: "text-amber-500" },
      { name: "HTML5", icon: Code2, color: "text-orange-600" },
      { name: "CSS3 / SCSS", icon: PanelsTopLeft, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: Blocks, color: "text-cyan-600" },
      { name: "Redux", icon: Workflow, color: "text-violet-600" },
      { name: "Context API", icon: Atom, color: "text-cyan-500" },
      { name: "Custom Hooks", icon: Braces, color: "text-blue-600" },
      { name: "Component Systems", icon: Boxes, color: "text-indigo-600" },
      { name: "Modular UI Systems", icon: Layers3, color: "text-violet-600" },
      { name: "Performance Optimization", icon: Zap, color: "text-amber-500" },
      { name: "Scalable Architecture", icon: Blocks, color: "text-blue-600" },
    ],
  },
  {
    number: "02",
    title: "Data Visualization & UI",
    subtitle: "Turning complex data into clear and interactive visual experiences.",
    action: "Visual Insights",
    icon: ChartNoAxesCombined,
    tone: "blue",
    skills: [
      { name: "ECharts", detail: "Advanced", icon: BarChart3, color: "text-rose-500" },
      { name: "Dashboard Design", icon: PanelsTopLeft, color: "text-blue-600" },
      { name: "Drilldowns & Filters", icon: Filter, color: "text-violet-600" },
      { name: "Real-time Insights", icon: Activity, color: "text-indigo-600" },
      { name: "Business Metrics → UI", icon: ChartNoAxesCombined, color: "text-orange-500" },
      { name: "Analytics & Governance", icon: Check, color: "text-emerald-600" },
      { name: "Data Pipelines", icon: Workflow, color: "text-cyan-600" },
      { name: "Real-time Data Systems", icon: Activity, color: "text-blue-600" },
    ],
  },
  {
    number: "03",
    title: "Backend, Tools & Platforms",
    subtitle: "Tools and foundations that support collaboration and delivery.",
    action: "Development Tools",
    icon: Settings,
    tone: "violet",
    skills: [
      { name: "Node.js", detail: "Basics", icon: Server, color: "text-emerald-600" },
      { name: "REST API Integration", icon: Link2, color: "text-blue-600" },
      { name: "SQL", icon: Database, color: "text-sky-600" },
      { name: "Git & GitLab", icon: GitBranch, color: "text-orange-600" },
      { name: "Docker", detail: "Basics", icon: Container, color: "text-blue-500" },
      { name: "CI/CD", icon: Settings, color: "text-indigo-600" },
      { name: "Figma", icon: Figma, color: "text-fuchsia-600" },
      { name: "Agile / Scrum", icon: Workflow, color: "text-violet-600" },
      { name: "Debugging Complex Systems", icon: Code2, color: "text-slate-600" },
      { name: "Team Management", icon: Check, color: "text-emerald-600" },
      { name: "Mentorship", icon: Check, color: "text-cyan-600" },
      { name: "Code Quality Standards", icon: Braces, color: "text-indigo-600" },
      { name: "Cross-team Collaboration", icon: Workflow, color: "text-violet-600" },
      { name: "Sprint Planning", icon: Check, color: "text-blue-600" },
    ],
  },
  {
    number: "04",
    title: "AI & Product Engineering",
    subtitle: "Exploring AI to build intelligent, context-aware applications.",
    action: "AI Integration",
    icon: Sparkles,
    tone: "pink",
    skills: [
      { name: "Generative AI", icon: Sparkles, color: "text-violet-600" },
      { name: "RAG", detail: "Retrieval-Augmented Generation", icon: Database, color: "text-blue-600" },
      { name: "AI-integrated Workflows", icon: BrainCircuit, color: "text-fuchsia-600" },
      { name: "MCP Integration", icon: Link2, color: "text-slate-700" },
      { name: "Prompt Engineering", icon: Sparkles, color: "text-violet-600" },
      { name: "Context-aware Applications", icon: Layers3, color: "text-indigo-600" },
      { name: "Predictive Dashboards", icon: ChartNoAxesCombined, color: "text-blue-600" },
      { name: "Automation Triggers", icon: Zap, color: "text-fuchsia-600" },
      { name: "Product & System Design", icon: Boxes, color: "text-violet-600" },
      { name: "Feature Ownership", icon: Rocket, color: "text-orange-600" },
      { name: "Enterprise Use Cases", icon: PanelsTopLeft, color: "text-blue-600" },
    ],
  },
];

const DashboardArtwork = () => (
  <div
    role="img"
    aria-label="Illustration of a product analytics dashboard with charts and engineering tools"
    className="relative mx-auto h-[260px] w-full max-w-[600px] sm:h-[300px] lg:h-[320px]"
  >
    <div className="absolute inset-x-[14%] bottom-[8%] h-10 rounded-full bg-orange-300/30 blur-2xl" />
    <div className="absolute left-[14%] top-[14%] h-[67%] w-[68%] -rotate-3 rounded-2xl border border-white bg-white/45 shadow-xl shadow-orange-900/10 backdrop-blur-sm" />
    <div className="absolute left-[12%] top-[11%] h-[67%] w-[68%] rotate-2 rounded-2xl border border-white bg-white/55 shadow-xl shadow-violet-900/10 backdrop-blur-sm" />

    <div className="absolute left-[10%] top-[12%] h-[66%] w-[76%] -rotate-2 rounded-xl border border-slate-500/40 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/25 sm:p-3.5">
      <div className="mb-2 flex h-3 items-center gap-1 border-b border-slate-700 pb-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="ml-2 h-1 w-1/3 rounded-full bg-slate-700" />
      </div>
      <div className="grid h-[calc(100%-1.1rem)] grid-cols-[0.8fr_1.35fr_1fr] gap-1.5 sm:gap-2">
        <div className="space-y-2 rounded-md bg-slate-800/80 p-1.5 sm:p-2">
          <span className="mb-2 block h-1 w-3/4 rounded bg-slate-600" />
          {[0, 1, 2, 3, 4].map((item) => (
            <span key={item} className="flex items-center gap-1">
              <span className={`h-1 w-1 rounded-full ${item === 1 ? "bg-violet-400" : "bg-slate-600"}`} />
              <span className="h-1 w-3/4 rounded-full bg-slate-700" />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="flex flex-1 flex-col justify-between rounded-md bg-slate-800 p-1.5 sm:p-2">
            <span className="h-1 w-2/5 rounded-full bg-slate-600" />
            <div className="space-y-1.5">
              <span className="block h-1 w-[82%] rounded-full bg-violet-400" />
              <span className="block h-1 w-[63%] rounded-full bg-orange-300" />
              <span className="block h-1 w-[74%] rounded-full bg-cyan-400/80" />
              <span className="block h-1 w-[49%] rounded-full bg-violet-300/70" />
            </div>
          </div>
          <div className="flex h-[36%] items-end justify-around rounded-md bg-slate-800 px-2 pt-2">
            {[38, 65, 50, 86, 58, 72].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`w-[9%] rounded-t-sm ${index === 3 ? "bg-orange-400" : "bg-violet-400"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="relative flex-1 overflow-hidden rounded-md bg-slate-800 p-1.5 sm:p-2">
            <span className="block h-1 w-1/2 rounded-full bg-slate-600" />
            <svg viewBox="0 0 100 45" className="absolute inset-x-1 bottom-1 h-[65%] w-[calc(100%-0.5rem)]">
              <path d="M0 38 C12 34 16 19 28 25 S43 39 56 21 S76 7 84 17 S93 13 100 4 V45 H0Z" fill="rgba(139,92,246,.2)" />
              <path d="M0 38 C12 34 16 19 28 25 S43 39 56 21 S76 7 84 17 S93 13 100 4" fill="none" stroke="#a78bfa" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex h-[36%] items-center justify-around rounded-md bg-slate-800 p-1.5 sm:p-2">
            <div className="h-8 w-8 rounded-full border-[6px] border-violet-400 border-r-orange-300 border-b-cyan-400 sm:h-10 sm:w-10" />
            <div className="space-y-1">
              <span className="block h-1 w-7 rounded-full bg-slate-600 sm:w-10" />
              <span className="block h-1 w-5 rounded-full bg-orange-300 sm:w-7" />
              <span className="block h-1 w-8 rounded-full bg-violet-400 sm:w-9" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[3%] top-[38%] flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white/95 text-cyan-500 shadow-lg shadow-slate-900/10 sm:left-[4%] sm:h-14 sm:w-14"
    >
      <Atom className="h-7 w-7" />
    </motion.div>
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[3%] top-[35%] flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white/95 text-violet-600 shadow-lg shadow-violet-900/10 sm:right-[2%] sm:h-14 sm:w-14"
    >
      <Sparkles className="h-7 w-7" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[9%] right-[12%] flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white/95 text-blue-600 shadow-lg shadow-blue-900/10 sm:h-14 sm:w-14"
    >
      <Database className="h-6 w-6" />
    </motion.div>
    <div className="absolute bottom-[5%] left-[14%] rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 px-2 py-1.5 font-mono text-xs font-bold text-white shadow-lg">
      TS
    </div>
    <div className="absolute right-[5%] top-[15%] flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white/95 text-violet-600 shadow-lg sm:h-12 sm:w-12">
      <BarChart3 className="h-6 w-6" />
    </div>
  </div>
);

const Skills = () => (
  <section
    id="skills"
    className="relative overflow-hidden bg-[#fff7eb] px-6 py-20 sm:py-24 lg:py-28"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_15%,rgba(255,207,140,0.4),transparent_38%),radial-gradient(ellipse_at_10%_90%,rgba(255,222,177,0.42),transparent_35%)]"
    />

    <div className="container relative z-10 mx-auto max-w-7xl">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <SectionReveal>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-blue-600">
            <span aria-hidden="true">// </span>Tech stack
          </p>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            Tools I{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              build with.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A combination of modern frontend technologies, data visualization
            libraries, and AI tools that help me build scalable, user-centric
            products and turn complex data into intuitive experiences.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <DashboardArtwork />
        </SectionReveal>
      </div>

      <div className="mt-10 grid gap-4 lg:mt-7 lg:grid-cols-2">
        {groups.map((group, groupIndex) => (
          <SectionReveal key={group.number} delay={groupIndex * 0.06}>
            <article
              className={`h-full rounded-2xl border bg-white/75 p-4 shadow-[0_12px_35px_rgba(125,70,20,0.06)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_42px_rgba(125,70,20,0.11)] sm:p-5 ${
                group.tone === "orange"
                  ? "border-orange-200"
                  : group.tone === "blue"
                    ? "border-blue-200"
                    : group.tone === "violet"
                      ? "border-violet-200"
                      : "border-fuchsia-200"
              }`}
            >
              <div className="mb-4 flex items-start gap-3">
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                    group.tone === "orange"
                      ? "bg-orange-50 text-orange-600"
                      : group.tone === "blue"
                        ? "bg-blue-50 text-blue-600"
                        : group.tone === "violet"
                          ? "bg-violet-50 text-violet-600"
                          : "bg-fuchsia-50 text-fuchsia-600"
                  }`}
                >
                  {group.number}
                </span>
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                    group.tone === "orange"
                      ? "bg-orange-100/80 text-orange-600"
                      : group.tone === "blue"
                        ? "bg-blue-100/80 text-blue-600"
                        : group.tone === "violet"
                          ? "bg-violet-100/80 text-violet-600"
                          : "bg-fuchsia-100/80 text-fuchsia-600"
                  }`}
                >
                  <group.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {group.title}
                    </h3>
                    <span className="hidden items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700 sm:inline-flex">
                      {group.action} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {group.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: Math.min(skillIndex * 0.025, 0.2),
                      duration: 0.3,
                    }}
                    whileHover={{ y: -2 }}
                    className="flex min-h-[58px] min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-white/80 px-2.5 py-2 shadow-[0_2px_9px_rgba(15,23,42,0.035)] transition-colors hover:border-violet-100 hover:bg-white sm:gap-2.5 sm:px-3"
                  >
                    <skill.icon
                      className={`h-4 w-4 flex-shrink-0 sm:h-[18px] sm:w-[18px] ${skill.color}`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 text-[11px] font-medium leading-snug text-slate-700 sm:text-xs">
                      {skill.name}
                      {skill.detail && (
                        <span className="block text-[9px] font-normal text-slate-500 sm:text-[10px]">
                          {skill.detail}
                        </span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
