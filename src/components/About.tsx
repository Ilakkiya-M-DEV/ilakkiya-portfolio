import {
  ArrowRight,
  BarChart3,
  Braces,
  CalendarDays,
  Code2,
  Database,
  FileSearch,
  GraduationCap,
  Lightbulb,
  Network,
  Sparkles,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Product Thinker",
    description:
      "I turn business needs into clear product experiences, owning features from the first question through delivery.",
    tone: "amber",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Data Translator",
    description:
      "I shape complex data into interactive dashboards and useful insights that help teams make better decisions.",
    tone: "violet",
  },
  {
    icon: Code2,
    number: "03",
    title: "UI Engineer",
    description:
      "I build scalable, reusable interfaces with React and TypeScript, balancing thoughtful design with performance.",
    tone: "blue",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "GenAI + RAG Builder",
    description:
      "I bring generative AI into products with context-aware experiences, retrieval-augmented generation, and grounded answers.",
    tone: "pink",
  },
];

const facts = [
  { icon: CalendarDays, label: "3+ years", detail: "Product engineering" },
  { icon: Code2, label: "React + TS", detail: "Everyday toolkit" },
  { icon: Network, label: "GenAI + RAG", detail: "Applied AI workflows" },
  { icon: GraduationCap, label: "B.Sc.", detail: "Computer Technology" },
];

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden bg-[#fff7eb] px-6 py-20 sm:py-24 lg:py-28"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(255,207,140,0.42),transparent_42%),radial-gradient(ellipse_at_12%_90%,rgba(255,222,177,0.5),transparent_38%)]"
    />

    <div className="container relative z-10 mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <SectionReveal className="text-left">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-blue-600">
            <span aria-hidden="true">// </span>About me
          </p>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-900 sm:text-5xl xl:text-[3.6rem]">
            I build systems that make{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              complex data feel simple.
            </span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I’m a Product Engineer working across React, TypeScript, data
            visualization, and scalable UI architecture. I enjoy turning complex
            problems into intuitive products, including AI experiences powered
            by generative AI and retrieval-augmented generation (RAG).
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              { icon: Braces, label: "React + TypeScript" },
              { icon: BarChart3, label: "Data Visualization" },
              { icon: Sparkles, label: "GenAI + RAG" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm sm:text-sm"
              >
                <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12} className="min-w-0">
          <div
            aria-label="Illustration of a data dashboard connected to generative AI and RAG workflows"
            role="img"
            className="relative mx-auto h-[330px] w-full max-w-[620px] sm:h-[390px]"
          >
            <div className="absolute inset-x-[12%] top-[15%] h-[68%] rounded-full bg-orange-300/30 blur-3xl" />

            <div className="absolute left-[8%] top-[21%] h-[56%] w-[49%] -rotate-3 rounded-[1.4rem] border border-slate-700/70 bg-slate-900 p-3 shadow-2xl shadow-slate-900/25 sm:p-4">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-300/80" />
                <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                <span className="ml-2 h-1.5 w-1/3 rounded-full bg-slate-700" />
              </div>
              <div className="space-y-2.5 pt-2">
                <div className="h-1.5 w-[82%] rounded-full bg-violet-400/80" />
                <div className="h-1.5 w-[61%] rounded-full bg-orange-300/80" />
                <div className="h-1.5 w-[73%] rounded-full bg-slate-500" />
                <div className="h-1.5 w-[46%] rounded-full bg-violet-300/70" />
                <div className="mt-4 h-1.5 w-[67%] rounded-full bg-slate-600" />
                <div className="h-1.5 w-[87%] rounded-full bg-orange-200/70" />
                <div className="h-1.5 w-[54%] rounded-full bg-violet-400/60" />
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-medium text-slate-300 sm:bottom-4 sm:left-4 sm:text-xs">
                <Code2 className="h-3.5 w-3.5 text-cyan-300" />
                React · TypeScript
              </div>
            </div>

            <div className="absolute right-[8%] top-[20%] z-[1] h-[59%] w-[60%] rotate-2 rounded-[1.25rem] border border-white/90 bg-white/90 p-3 shadow-2xl shadow-orange-900/15 backdrop-blur sm:p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="space-y-1.5">
                  <div className="h-2 w-20 rounded-full bg-slate-200 sm:w-28" />
                  <div className="h-1.5 w-14 rounded-full bg-slate-100 sm:w-20" />
                </div>
                <span className="rounded-lg bg-violet-100 p-2 text-violet-600">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <div className="relative h-[41%] overflow-hidden rounded-lg bg-gradient-to-br from-violet-50 to-orange-50 p-2">
                <div className="absolute inset-x-2 bottom-2 top-3 border-b border-l border-slate-200/90" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 240 72"
                  preserveAspectRatio="none"
                  className="absolute inset-x-2 bottom-2 h-[75%] w-[calc(100%-1rem)]"
                >
                  <defs>
                    <linearGradient id="about-chart-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity=".34" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 58 C25 54 26 29 52 36 S83 62 107 42 S140 12 160 26 S187 45 204 20 S226 15 240 4 V72 H0Z"
                    fill="url(#about-chart-fill)"
                  />
                  <path
                    d="M0 58 C25 54 26 29 52 36 S83 62 107 42 S140 12 160 26 S187 45 204 20 S226 15 240 4"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="mt-2.5 grid h-[31%] grid-cols-2 gap-2">
                <div className="flex items-end justify-center gap-1 rounded-lg bg-slate-50 pb-1.5">
                  {[42, 68, 52, 86, 61].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className={`w-[9%] rounded-t-sm ${
                        index === 3 ? "bg-orange-400" : "bg-violet-400"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center rounded-lg bg-slate-50">
                  <div className="h-9 w-9 rounded-full border-[7px] border-violet-400 border-r-orange-300 border-b-blue-300 sm:h-11 sm:w-11" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[14%] left-[20%] z-[2] flex w-[58%] items-center gap-2 rounded-2xl border border-white/90 bg-white/95 px-3 py-2.5 shadow-xl shadow-orange-900/10 sm:bottom-[10%] sm:left-[22%] sm:w-[53%] sm:gap-3 sm:px-4 sm:py-3">
              <span className="rounded-xl bg-orange-100 p-2 text-orange-500">
                <FileSearch className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="text-[10px] font-semibold leading-snug text-slate-800 sm:text-xs">
                Retrieve <span className="text-violet-500">→</span> Ground{" "}
                <span className="text-violet-500">→</span> Generate
                <span className="mt-0.5 block font-normal text-slate-500">
                  Answers grounded in context
                </span>
              </span>
            </div>

            <div className="absolute right-[1%] top-[5%] z-[3] flex animate-float items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-lg shadow-orange-900/10 motion-reduce:animate-none sm:right-[3%] sm:top-[3%] sm:px-3.5 sm:text-xs">
              <Lightbulb className="h-4 w-4 text-orange-500" />
              Ideas <span className="text-violet-500">→</span> Interfaces
            </div>
            <div className="absolute right-[0%] top-[35%] z-[3] flex animate-float items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 text-[10px] font-semibold text-violet-700 shadow-lg shadow-violet-900/10 motion-reduce:animate-none sm:right-[-1%] sm:px-3.5 sm:text-xs [animation-delay:1s]">
              <Database className="h-4 w-4" />
              GenAI + RAG
            </div>
            <div className="absolute right-[1%] top-[55%] z-[3] flex animate-float items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 text-[10px] font-semibold text-blue-700 shadow-lg shadow-blue-900/10 motion-reduce:animate-none sm:right-[2%] sm:px-3.5 sm:text-xs [animation-delay:2s]">
              <BarChart3 className="h-4 w-4" />
              Visualize
            </div>
            <div className="absolute left-[0%] top-[40%] z-[3] flex animate-float items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-lg shadow-orange-900/10 motion-reduce:animate-none sm:left-[-1%] sm:px-3.5 sm:text-xs [animation-delay:1.5s]">
              <Network className="h-4 w-4 text-cyan-600" />
              Context-aware AI
            </div>
            <div className="absolute bottom-[6%] right-[2%] z-[3] hidden animate-float items-center gap-2 rounded-xl border border-white bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-lg shadow-orange-900/10 motion-reduce:animate-none sm:flex [animation-delay:2.5s]">
              <ArrowRight className="h-4 w-4 text-orange-500" />
              From data to decisions
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
        {pillars.map((pillar, index) => (
          <SectionReveal key={pillar.title} delay={index * 0.07}>
            <article className="group flex h-full min-h-[230px] flex-col rounded-[1.35rem] border border-white/90 bg-white/75 p-5 text-left shadow-[0_8px_30px_rgba(125,70,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_36px_rgba(125,70,20,0.1)] sm:p-6">
              <div className="mb-5 flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    pillar.tone === "amber"
                      ? "bg-amber-100 text-amber-600"
                      : pillar.tone === "violet"
                        ? "bg-violet-100 text-violet-600"
                        : pillar.tone === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-fuchsia-100 text-fuchsia-600"
                  }`}
                >
                  <pillar.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-sm font-semibold text-slate-300">
                  {pillar.number}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900 sm:text-lg">
                {pillar.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
              <span className="mt-4 flex h-8 w-8 items-center justify-center self-end rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          </SectionReveal>
        ))}

        <SectionReveal delay={0.28}>
          <aside className="h-full rounded-[1.35rem] border border-white/90 bg-white/80 p-5 text-left shadow-[0_8px_30px_rgba(125,70,20,0.05)] sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Sparkles className="h-4 w-4 text-orange-500" />
                Quick facts
              </h3>
              <a
                href="#experience"
                className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1.5 text-[10px] font-semibold text-violet-700 transition-colors hover:bg-violet-100 sm:text-xs"
              >
                More about me <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {facts.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="min-w-0 rounded-xl border border-orange-100/90 bg-white/70 p-2.5"
                >
                  <Icon className="mb-2 h-4 w-4 text-blue-600" />
                  <p className="truncate text-xs font-bold text-slate-900">
                    {label}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-slate-500">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default About;
