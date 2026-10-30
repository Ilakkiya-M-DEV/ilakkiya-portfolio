import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  GitBranch,
  Monitor,
  Shield,
  Workflow,
  Github,
  Sparkles,
  Eye,
  Palette,
  Link2,
  ShieldCheck,
} from "lucide-react";
import hubImage from "@/assets/herosection/6f7e2a16-b574-40ad-9a6d-7d9305bb1163.png";

/* ─── Project data (badges & tags removed as requested) ───────────── */
const projects = [
  {
    id: "p1",
    icon: BarChart3,
    title: "Data Analytics Dashboard System",
    summary:
      "Built interactive dashboards for operational and financial data with dynamic filtering, time-based analysis, and reusable visualization components.",
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
  },
  {
    id: "p2",
    icon: Workflow,
    title: "AI-Assisted Workflow System",
    summary:
      "Integrated AI workflows to automate analysis, provide predictive insights, and improve operational efficiency.",
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
  },
  {
    id: "p3",
    icon: Monitor,
    title: "Monitoring & Governance Platform",
    summary:
      "Developed a centralized platform to monitor workflows, compliance, and system-level insights with real-time updates.",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    id: "p4",
    icon: Shield,
    title: "Security & Compliance Insights",
    summary:
      "Built dashboards to track vulnerabilities, code quality, and compliance metrics across systems.",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: "p5",
    icon: GitBranch,
    title: "Hierarchical Data Visualization",
    summary:
      "Designed hierarchical and drilldown visualizations for better data exploration and faster decision-making.",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
  },
  {
    id: "p6",
    icon: Github,
    title: "Developer Intelligence Platform",
    summary:
      "Built a developer intelligence dashboard using GitHub APIs to explore profiles, repositories, and contributions.",
    iconBg: "bg-gradient-to-br from-slate-600 to-slate-800",
  },
];

/* ─── Center connection particles (white capsules with colored icons) ── */
const connectionParticles = [
  {
    label: "AI",
    x: "43%",
    y: "35%",
    icon: Sparkles,
    circleBg: "bg-gradient-to-tr from-fuchsia-600 to-purple-500",
    shadow: "shadow-fuchsia-500/20",
  },
  {
    label: "Analytics",
    x: "54%",
    y: "35%",
    icon: BarChart3,
    circleBg: "bg-gradient-to-tr from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    label: "Observability",
    x: "64%",
    y: "39%",
    icon: Eye,
    circleBg: "bg-gradient-to-tr from-amber-500 to-orange-500",
    shadow: "shadow-orange-500/20",
  },
  {
    label: "Security",
    x: "63%",
    y: "59%",
    icon: ShieldCheck,
    circleBg: "bg-gradient-to-tr from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    label: "UI/UX",
    x: "41%",
    y: "61%",
    icon: Palette,
    circleBg: "bg-gradient-to-tr from-orange-500 to-amber-500",
    shadow: "shadow-amber-500/20",
  },
  {
    label: "Integration",
    x: "53%",
    y: "77%",
    icon: Link2,
    circleBg: "bg-gradient-to-tr from-blue-500 to-cyan-600",
    shadow: "shadow-blue-500/20",
  },
];

/* ─── Card positions touching the 3D model tentacle ends ──────────── */
const cardPositions = [
  "top-[2%]    left-[41%]  w-[21%]",  // p1: Analytics (above top blue pad)
  "top-[39%]   left-[11%]  w-[20%]",  // p2: AI (touches magenta brain pad)
  "top-[6%]    left-[70%]  w-[21%]",  // p3: Monitoring (touches orange pad)
  "top-[41%]   left-[73%]  w-[21%]",  // p4: Security (touches green pad)
  "top-[71%]   left-[11%]  w-[20%]",  // p5: Hierarchical (touches blue pad)
  "top-[72%]   left-[67%]  w-[21%]",  // p6: Dev Intelligence (touches purple pad)
];

/* ─── Handwritten doodle annotations around popups ─────────────────── */
const annotations = [
  {
    text: "Turning data\ninto decisions",
    cls: "top-[7%] left-[32%]",
    rotate: "-rotate-[6deg]",
    arrow: "M 4 8 C 18 16, 36 20, 54 14",
    dotX: 54,
    dotY: 14,
  },
  {
    text: "Smarter workflows\nwith AI",
    cls: "top-[43%] left-[8%]",
    rotate: "rotate-[4deg]",
    arrow: "M 4 4 C 18 14, 36 24, 56 34",
    dotX: 56,
    dotY: 34,
  },
  {
    text: "Real-time visibility\nat scale",
    cls: "top-[13%] right-[5%]",
    rotate: "rotate-[5deg]",
    arrow: "M 56 6 C 40 16, 24 22, 6 28",
    dotX: 6,
    dotY: 28,
  },
  {
    text: "Secure & compliant\nby design",
    cls: "top-[48%] right-[2%]",
    rotate: "-rotate-[4deg]",
    arrow: "M 56 8 C 40 18, 24 26, 8 34",
    dotX: 8,
    dotY: 34,
  },
  {
    text: "Complex data\nin simple views",
    cls: "top-[73%] left-[6%]",
    rotate: "-rotate-[5deg]",
    arrow: "M 4 8 C 22 18, 38 28, 56 38",
    dotX: 56,
    dotY: 38,
  },
  {
    text: "Connecting developers,\nideas and impact",
    cls: "top-[76%] right-[6%]",
    rotate: "rotate-[4deg]",
    arrow: "M 56 8 C 40 18, 24 26, 6 34",
    dotX: 6,
    dotY: 34,
  },
];

const floatAnim = (delay = 0) => ({
  animate: { y: [0, -4, 0] },
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

/* ─── Projects Component ───────────────────────────────────────────── */
const Projects = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#fff8f0] px-3 py-12 sm:px-6 lg:py-16"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 52%, rgba(196,181,253,0.18) 0%, transparent 65%)," +
            "radial-gradient(ellipse 45% 40% at 8% 88%,  rgba(255,200,120,0.25) 0%, transparent 60%)," +
            "radial-gradient(ellipse 40% 35% at 94% 12%, rgba(255,214,165,0.30) 0%, transparent 55%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-[1560px]">
        {/* Mind-map canvas */}
        <div className="relative w-full overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
          <div
            className="relative select-none"
            style={{ aspectRatio: "16 / 9.2", minWidth: "1180px", width: "100%" }}
          >
            {/* ── Top-Left Header ────────────────────────────────────── */}
            <div className="absolute left-[2.5%] top-[2.5%] z-30 max-w-[320px]">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-blue-600">
                <span aria-hidden="true">// </span>PROJECTS
              </p>
              <h2 className="text-[clamp(1.9rem,3vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-slate-900">
                Products I&apos;ve{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                  engineered.
                </span>
              </h2>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-600">
                A collection of real-world products and modules I&apos;ve built — turning
                complex data into intuitive experiences.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-[12px] font-semibold text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/25"
              >
                <span className="text-sm leading-none">✦</span>
                View all projects
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* ── Center 3D Hub Model with Tentacles ─────────────────── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-10"
              style={{
                left: "52%",
                top: "54%",
                width: "clamp(560px, 68%, 940px)",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div {...(reducedMotion ? {} : floatAnim(0))}>
                <img
                  src={hubImage}
                  alt=""
                  className="h-auto w-full object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 16px 48px rgba(139,92,246,0.30)) drop-shadow(0 4px 20px rgba(217,70,239,0.20))",
                  }}
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>

            {/* ── Center Connection Particles (AI, Analytics, etc.) ─── */}
            {connectionParticles.map((particle) => (
              <div
                key={particle.label}
                aria-hidden="true"
                className="pointer-events-none absolute z-25 -translate-x-1/2 -translate-y-1/2"
                style={{ left: particle.x, top: particle.y }}
              >
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-md ${particle.shadow} border border-slate-100/90 transition-all duration-200`}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white shadow-xs ${particle.circleBg}`}
                  >
                    <particle.icon className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-[11px] font-bold tracking-tight text-slate-800">
                    {particle.label}
                  </span>
                </div>
              </div>
            ))}

            {/* ── Project Popup Cards (touching tentacle ends) ──────── */}
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                {...(reducedMotion ? {} : floatAnim(0.3 + index * 0.18))}
                className={`absolute z-20 ${cardPositions[index]}`}
              >
                <article className="group rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
                  <div className="mb-1.5 flex items-center gap-2.5">
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${project.iconBg}`}
                    >
                      <project.icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-[12px] font-bold leading-tight text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[10.5px] leading-relaxed text-slate-500">
                    {project.summary}
                  </p>
                </article>
              </motion.div>
            ))}

            {/* ── Handwritten Doodle Annotations around Popups ──────── */}
            {annotations.map((ann, i) => (
              <div
                key={i}
                aria-hidden="true"
                className={`pointer-events-none absolute z-30 select-none ${ann.cls}`}
              >
                <div className={ann.rotate}>
                  <p className="font-handwriting text-[12px] font-bold leading-tight text-slate-700 whitespace-pre-line">
                    {ann.text}
                  </p>
                  <svg
                    width="62"
                    height="42"
                    viewBox="0 0 62 42"
                    fill="none"
                    className="mt-0.5 text-slate-600"
                  >
                    <path
                      d={ann.arrow}
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <circle cx={ann.dotX} cy={ann.dotY} r="2.2" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
