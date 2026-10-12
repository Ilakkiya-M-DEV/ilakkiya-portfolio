import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Flag,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import journeyStartArtwork from "@/assets/herosection/58182111-17a4-42da-8f76-e3fd2f77b88b.png";
import journeySummitArtwork from "@/assets/herosection/4514a669-04cf-4956-9681-902517f15226.png";
import SectionReveal from "./SectionReveal";

const journey = [
  {
    number: "01",
    color: "orange",
    role: "Trainee, Product Development",
    period: "Aug 2023 – Aug 2024",
    summary: "Built reusable React features and data workflows with API integrations.",
    tags: ["React", "JavaScript", "APIs"],
  },
  {
    number: "02",
    color: "blue",
    role: "Associate, Product Development",
    period: "Aug 2024 – Dec 2024",
    summary: "Created interactive dashboards, reusable utilities, and data exploration tools.",
    tags: ["React", "ECharts", "Data Viz"],
  },
  {
    number: "03",
    color: "violet",
    role: "Associate Engineer, Product Development",
    period: "Jan 2025 – Present",
    summary: "Improved product performance with reusable UI and AI-enabled workflows.",
    tags: ["TypeScript", "UI/UX", "AI"],
  },
];

const colorStyles = {
  orange: {
    pin: "bg-orange-500 shadow-orange-500/25",
    marker: "text-orange-500",
    dot: "bg-orange-500",
    badge: "bg-orange-50 text-orange-700",
    tag: "bg-orange-50 text-orange-700",
    halo: "ring-orange-200",
  },
  blue: {
    pin: "bg-blue-500 shadow-blue-500/25",
    marker: "text-blue-500",
    dot: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700",
    tag: "bg-blue-50 text-blue-700",
    halo: "ring-blue-200",
  },
  violet: {
    pin: "bg-violet-500 shadow-violet-500/25",
    marker: "text-violet-500",
    dot: "bg-violet-500",
    badge: "bg-violet-50 text-violet-700",
    tag: "bg-violet-50 text-violet-700",
    halo: "ring-violet-200",
  },
  purple: {
    pin: "bg-purple-600 shadow-purple-600/25",
    marker: "text-purple-600",
    dot: "bg-purple-600",
    badge: "bg-purple-50 text-purple-700",
    tag: "bg-purple-50 text-purple-700",
    halo: "ring-purple-200",
  },
} as const;

const floatingMotion = (reducedMotion: boolean | null) =>
  reducedMotion
    ? {}
    : {
        animate: { y: [0, -7, 0] },
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
      };

const Summit = ({ reducedMotion }: { reducedMotion: boolean | null }) => (
  <div
    className="absolute top-0 hidden xl:block"
    style={{ right: "0%", height: 300, width: 215 }}
  >
    <img
      src={journeySummitArtwork}
      alt="A mountain summit marking the present chapter"
      className="absolute inset-0 h-full w-full object-contain"
      loading="lazy"
      decoding="async"
    />

    <motion.div
      {...floatingMotion(reducedMotion)}
      className="absolute right-[2%] top-[49%] rounded-xl border border-white bg-white/95 px-4 py-2.5 text-center shadow-lg shadow-violet-900/10"
    >
      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-500">
        Current chapter
      </span>
      <span className="mt-0.5 block text-xs font-bold text-slate-800">Associate Engineer</span>
      <span className="block text-[10px] font-medium text-slate-500">Present</span>
    </motion.div>
  </div>
);

const Experience = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#fff5e6] px-6 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_22%,rgba(196,181,253,0.24),transparent_35%),radial-gradient(ellipse_at_8%_84%,rgba(253,186,116,0.25),transparent_36%)]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="relative">
        <SectionReveal className="xl:absolute xl:left-0 xl:top-0 xl:z-30 xl:w-[42%]">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-slate-500">
            <span aria-hidden="true">// </span>Experience
          </p>
          <h2 className="text-4xl font-extrabold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From writing my first lines of code to leading frontend systems —
            a journey of learning, building, and creating impact through
            technology.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { icon: Sparkles, label: "Grow", color: "text-orange-600" },
              { icon: BriefcaseBusiness, label: "Build", color: "text-blue-600" },
              { icon: Check, label: "Collaborate", color: "text-violet-600" },
              { icon: Flag, label: "Create impact", color: "text-emerald-600" },
            ].map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <Icon className={`h-3.5 w-3.5 ${color}`} />
                {label}
              </span>
            ))}
          </div>
        </SectionReveal>

        <div className="relative mt-10 flex flex-col gap-5 xl:mt-0 xl:block xl:min-h-[800px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-full xl:block"
          >
            <svg
              viewBox="0 0 1200 780"
              preserveAspectRatio="none"
              className="h-full w-full overflow-visible"
            >
              <path
                d="M24 700 C170 700 175 690 250 680 C325 670 300 625 385 614 C470 603 515 654 580 620 C648 584 610 540 688 515 C770 488 830 540 875 493 C918 448 850 417 918 374 C985 332 1070 386 1110 330 C1150 275 1055 244 1128 197"
                fill="none"
                stroke="#edb477"
                strokeWidth="46"
                strokeLinecap="round"
                opacity=".58"
              />
              <path
                d="M24 692 C170 692 175 682 250 672 C325 662 300 617 385 606 C470 595 515 646 580 612 C648 576 610 532 688 507 C770 480 830 532 875 485 C918 440 850 409 918 366 C985 324 1070 378 1110 322 C1150 267 1055 236 1128 189"
                fill="none"
                stroke="#fffaf1"
                strokeWidth="34"
                strokeLinecap="round"
              />
              <path
                d="M24 692 C170 692 175 682 250 672 C325 662 300 617 385 606 C470 595 515 646 580 612 C648 576 610 532 688 507 C770 480 830 532 875 485 C918 440 850 409 918 366 C985 324 1070 378 1110 322 C1150 267 1055 236 1128 189"
                fill="none"
                stroke="#c084fc"
                strokeWidth="2"
                strokeDasharray="7 10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <Summit reducedMotion={reducedMotion} />
          </div>

          {journey.map((item, index) => {
            const colors = colorStyles[item.color as keyof typeof colorStyles];
            const cardPositions = [
              "xl:left-[14%] xl:top-[56%]",
              "xl:left-[27%] xl:top-[35%]",
              "xl:left-[45%] xl:top-[15%]",
            ];
            const pinPositions = [
              "xl:left-[17%] xl:top-[82%]",
              "xl:left-[37%] xl:top-[65%]",
              "xl:left-[59%] xl:top-[48%]",
            ];

            return (
              <div key={item.number} className="contents">
                <motion.div
                  {...floatingMotion(reducedMotion)}
                  transition={{
                    duration: 3.2 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.28,
                  }}
                  className={`relative z-10 w-full xl:absolute xl:w-[clamp(205px,14vw,230px)] ${cardPositions[index]}`}
                >
                  <article className="min-h-[145px] rounded-2xl border border-white/90 bg-white/90 p-3.5 shadow-[0_12px_30px_rgba(95,65,35,0.11)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(95,65,35,0.16)]">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-lg ${colors.pin}`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${colors.badge}`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold leading-snug text-slate-900">
                      {item.role}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-snug text-slate-600">
                      {item.summary}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  {...floatingMotion(reducedMotion)}
                  transition={{
                    duration: 2.8 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5 + index * 0.2,
                  }}
                  className={`absolute z-20 hidden xl:block ${pinPositions[index]}`}
                  aria-label={`Milestone ${item.number}: ${item.period}`}
                >
                  <MapPin
                    className={`h-9 w-9 ${colors.marker} drop-shadow-md`}
                    fill="currentColor"
                    stroke="white"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="absolute left-1/2 top-full h-3 w-px -translate-x-1/2 bg-slate-400/70" />
                </motion.div>
              </div>
            );
          })}

          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <div className="absolute bottom-[-1%] left-[-2%] w-[230px]">
              <img
                src={journeyStartArtwork}
                alt=""
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute left-[31%] top-[25%] w-[43%] -rotate-[5deg] text-center text-[10px] font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(70,35,10,0.65)]">
                Started
                <br />
                My Journey
              </span>
            </div>
            <motion.div
              {...floatingMotion(reducedMotion)}
              className="absolute bottom-[3%] left-[21%] rounded-xl border border-white bg-white/90 px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-lg shadow-orange-900/10"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-orange-500" />
                Started with curiosity
              </span>
            </motion.div>
            <div className="absolute bottom-[5%] right-[26%] max-w-[190px] rotate-[-5deg] text-center font-mono text-xs font-medium text-slate-600">
              Stronger foundations
              <span className="mt-1 block text-lg text-violet-500">↗</span>
            </div>
          </div>
        </div>
        </div>

        <SectionReveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/90 bg-white/85 p-5 shadow-[0_12px_35px_rgba(95,65,35,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Education
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                  B.Sc. Computer Technology
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Dr. SNS Rajalakshmi College of Arts & Science · 2020–2023
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100 sm:self-auto"
            >
              What’s next? <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Experience;
