import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  GraduationCap,
  MapPin,
  Rocket,
  Sprout,
  TrendingUp,
  Users2,
} from "lucide-react";
import journeyStartArtwork from "@/assets/herosection/58182111-17a4-42da-8f76-e3fd2f77b88b.png";
import journeySummitArtwork from "@/assets/herosection/4514a669-04cf-4956-9681-902517f15226.png";
import SectionReveal from "./SectionReveal";

interface JourneyItem {
  number: string;
  badgeColor: string;
  badgeTextColor: string;
  periodBg: string;
  periodText: string;
  role: string;
  period: string;
  points: string[];
  tags: string[];
  bulletColor: string;
  tagStyle: string;
  cardPosition: string;
  pinPosition: string;
  pinColor: string;
}

const journeyItems: JourneyItem[] = [
  {
    number: "01",
    badgeColor: "bg-[#f97316]",
    badgeTextColor: "text-white",
    periodBg: "bg-[#fff7ed]",
    periodText: "text-[#ea580c]",
    role: "Associate, Product Development",
    period: "Aug 2022 – Dec 2024",
    points: [
      "Built interactive ECharts dashboards",
      "Implemented reusable components",
      "Worked on DevOps dashboards (D360, G360, Observability)",
    ],
    tags: ["React", "JavaScript", "ECharts"],
    bulletColor: "#f97316",
    tagStyle: "bg-slate-50 text-slate-700 border-slate-200/80",
    cardPosition: "left-[17%] top-[43.5%] w-[16.5%]",
    pinPosition: "left-[23.5%] top-[85.5%]",
    pinColor: "#f97316",
  },
  {
    number: "02",
    badgeColor: "bg-[#3b82f6]",
    badgeTextColor: "text-white",
    periodBg: "bg-[#eff6ff]",
    periodText: "text-[#2563eb]",
    role: "Associate Engineer, Product Development",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Improved workflow efficiency and sprint predictability",
      "Optimized React components for performance",
      "Mentored junior developers",
      "Integrated AI concepts into internal tools",
    ],
    tags: ["TypeScript", "UI/UX", "Data Viz"],
    bulletColor: "#3b82f6",
    tagStyle: "bg-slate-50 text-slate-700 border-slate-200/80",
    cardPosition: "left-[36%] top-[34.5%] w-[16.5%]",
    pinPosition: "left-[44.2%] top-[80%]",
    pinColor: "#3b82f6",
  },
  {
    number: "03",
    badgeColor: "bg-[#8b5cf6]",
    badgeTextColor: "text-white",
    periodBg: "bg-[#f5f3ff]",
    periodText: "text-[#7c3aed]",
    role: "Frontend Technical Lead",
    period: "Mar 2025 – Present",
    points: [
      "Leading frontend architecture for scalable product features",
      "Enforcing clean-code standards",
      "Guiding and mentoring team members",
      "Driving UI/UX improvements",
      "Exploring AI-integrated workflows and data-driven solutions",
    ],
    tags: ["React", "TypeScript", "AI Integration"],
    bulletColor: "#8b5cf6",
    tagStyle: "bg-[#faf5ff] text-[#7c3aed] border-purple-200/70",
    cardPosition: "left-[54.8%] top-[17%] w-[17.5%]",
    pinPosition: "left-[65.5%] top-[64.5%]",
    pinColor: "#8b5cf6",
  },
];

const nextMilestones = [
  { text: "Build more AI-powered products", completed: true },
  { text: "Deepen expertise in scalable systems", completed: true },
  { text: "Contribute to open source", completed: false },
  { text: "Keep learning and growing", completed: false },
];

const floatingMotion = (reducedMotion: boolean | null, duration = 3.5, delay = 0) =>
  reducedMotion
    ? {}
    : {
        animate: { y: [0, -6, 0] },
        transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
      };

const Experience = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#fff5e6] px-4 py-16 sm:px-6 lg:py-20"
    >
      {/* Warm ambient background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_86%_20%,rgba(196,181,253,0.24),transparent_42%),radial-gradient(ellipse_at_10%_85%,rgba(253,186,116,0.22),transparent_42%)]"
      />

      <div className="container relative z-10 mx-auto max-w-[1600px]">
        {/* Horizontal scroll wrapper for tablet/mobile, full scenic canvas on desktop */}
        <div className="relative w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="relative aspect-[2.13/1] min-w-[1050px] w-full select-none">
            {/* Top-Left Header */}
            <div className="absolute left-[4.5%] top-[6%] z-30 w-[31%] max-w-[480px]">
              <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                <span aria-hidden="true" className="text-slate-400">// </span>
                <span>EXPERIENCE</span>
              </p>
              <h2 className="text-[clamp(1.8rem,2.8vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  journey.
                </span>
              </h2>
              <p className="mt-3 text-[clamp(10.5px,0.95vw,13px)] leading-relaxed text-slate-600">
                From writing my first lines of code to leading frontend systems — a journey of learning, building, and creating impact through technology.
              </p>

              {/* Pill tags matching Image 2 */}
              <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3d6c0] bg-[#faeede] px-2.5 py-1 text-[10.5px] font-semibold text-[#c2410c] shadow-xs">
                  <Sprout className="h-3.5 w-3.5" />
                  Grow
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#bae6fd] bg-[#e0f2fe] px-2.5 py-1 text-[10.5px] font-semibold text-[#0284c7] shadow-xs">
                  <Code2 className="h-3.5 w-3.5" />
                  Build
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e9d5ff] bg-[#f3e8ff] px-2.5 py-1 text-[10.5px] font-semibold text-[#7e22ce] shadow-xs">
                  <Users2 className="h-3.5 w-3.5" />
                  Collaborate
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-2.5 py-1 text-[10.5px] font-semibold text-[#15803d] shadow-xs">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Create Impact
                </span>
              </div>
            </div>

            {/* Floating Paper Airplane in sky */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[47%] top-[13%] z-10"
            >
              <svg width="46" height="34" viewBox="0 0 52 38" fill="none" className="drop-shadow-sm">
                <path
                  d="M4 32 C12 36, 18 28, 24 24"
                  stroke="#c084fc"
                  strokeWidth="1.6"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />
                <g transform="translate(18, 2) rotate(-15)">
                  <polygon points="26,0 0,16 10,18" fill="#fed7aa" />
                  <polygon points="26,0 10,18 18,22" fill="#fb923c" />
                  <polygon points="26,0 18,22 15,14" fill="#ea580c" />
                </g>
              </svg>
            </div>

            {/* Left Artwork: Started My Journey signpost, laptop, books */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-[-1%] z-10 w-[21%]"
            >
              <div className="relative">
                <img
                  src={journeyStartArtwork}
                  alt=""
                  className="block h-auto w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
                {/* Angled Text on the wooden board */}
                <span className="absolute left-[31%] top-[25%] w-[43%] -rotate-[5deg] text-center text-[10px] font-bold leading-tight text-[#fff7ed] drop-shadow-[0_1.5px_2px_rgba(70,35,10,0.75)] sm:text-[11px]">
                  Started
                  <br />
                  My Journey
                </span>
              </div>
            </div>

            {/* Annotation 1: Curious learner turned builder 💜 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[2%] left-[4.8%] z-20 select-none"
            >
              <div className="font-handwriting text-[14px] font-bold leading-tight text-slate-800 -rotate-[5deg]">
                Curious learner
                <br />
                turned builder 💜
              </div>
              <svg className="-mt-1 ml-6 h-5 w-7 -rotate-12 text-slate-700" viewBox="0 0 28 20" fill="none">
                <path
                  d="M2 15 C10 19, 18 16, 22 6 M17 4 L22 6 L23 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Artwork: Mountain Summit with road, flag, purple pin */}
            <div
              className="pointer-events-none absolute right-0 top-[1%] z-0 w-[49%]"
            >
              <div className="relative">
                <img
                  src={journeySummitArtwork}
                  alt="A purple mountain summit marking the present chapter"
                  className="block h-auto w-full object-contain"
                  loading="eager"
                  decoding="async"
                />

                {/* Present Badge on mountain slope */}
                <motion.div
                  {...floatingMotion(reducedMotion, 3.2)}
                  className="absolute left-[54%] top-[39%] -translate-x-1/2 rounded-full bg-[#7c3aed] px-3 py-0.5 text-center shadow-lg shadow-purple-900/25"
                >
                  <span className="text-[10.5px] font-bold tracking-wide text-white">Present</span>
                </motion.div>

                {/* More to Explore... annotation above the peak */}
                <div className="absolute right-[21%] top-[8%] select-none font-handwriting text-slate-800">
                  <div className="text-[14px] font-bold leading-tight -rotate-[8deg]">
                    More to
                    <br />
                    Explore...
                  </div>
                  <svg className="ml-2 mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M14 2 C10 8, 7 11, 2 14 M6 14 L2 14 L3 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* Sparkle stars */}
                  <span className="absolute -right-2 -top-1 text-xs text-[#f59e0b]">✦</span>
                  <span className="absolute -left-2 top-2 text-[10px] text-[#f59e0b]">✧</span>
                </div>
              </div>
            </div>

            {/* SVG Connecting Road & Scenery Layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-5"
            >
              <svg
                viewBox="0 0 1024 481"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient id="roadCurb" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ebb37e" />
                    <stop offset="100%" stopColor="#c57f3f" />
                  </linearGradient>
                  <linearGradient id="roadSurface" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#fff9ed" />
                  </linearGradient>
                </defs>

                {/* 3D Road Base / Depth Shadow */}
                <path
                  d="M 115 423 C 170 423, 205 426, 240 426 C 315 426, 360 412, 452 403 C 535 394, 595 352, 672 323 C 715 306, 745 288, 775 277 C 800 268, 828 258, 858 248 C 882 240, 908 232, 935 228"
                  fill="none"
                  stroke="#af6a2e"
                  strokeWidth="42"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                {/* Raised Road Curb */}
                <path
                  d="M 115 417 C 170 417, 205 420, 240 420 C 315 420, 360 406, 452 397 C 535 388, 595 346, 672 317 C 715 300, 745 282, 775 271 C 800 262, 828 252, 858 242 C 882 234, 908 226, 935 222"
                  fill="none"
                  stroke="url(#roadCurb)"
                  strokeWidth="38"
                  strokeLinecap="round"
                />

                {/* Paved Roadway Surface */}
                <path
                  d="M 115 417 C 170 417, 205 420, 240 420 C 315 420, 360 406, 452 397 C 535 388, 595 346, 672 317 C 715 300, 745 282, 775 271 C 800 262, 828 252, 858 242 C 882 234, 908 226, 935 222"
                  fill="none"
                  stroke="url(#roadSurface)"
                  strokeWidth="26"
                  strokeLinecap="round"
                />

                {/* Dashed Purple Centerline */}
                <path
                  d="M 115 417 C 170 417, 205 420, 240 420 C 315 420, 360 406, 452 397 C 535 388, 595 346, 672 317 C 715 300, 745 282, 775 271 C 800 262, 828 252, 858 242 C 882 234, 908 226, 935 222"
                  fill="none"
                  stroke="#b466eb"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                />

                {/* Scenery details along the road */}
                {/* Little tree near Milestone 1 */}
                <g transform="translate(315, 386)">
                  <rect x="11" y="24" width="4" height="14" rx="1.5" fill="#78350f" />
                  <circle cx="13" cy="18" r="14" fill="#22c55e" />
                  <circle cx="6" cy="22" r="10" fill="#16a34a" />
                  <circle cx="20" cy="22" r="10" fill="#15803d" />
                  <circle cx="12" cy="14" r="7" fill="#4ade80" opacity="0.8" />
                </g>

                {/* Wooden marker post on road curb */}
                <g transform="translate(352, 386)">
                  <rect x="3" y="6" width="3.5" height="18" rx="1" fill="#92400e" />
                  <path d="M-3 8 L10 8 L14 12 L10 16 L-3 16 Z" fill="#b45309" stroke="#78350f" strokeWidth="0.8" />
                </g>

                {/* Rocks & pebbles along the curb */}
                <ellipse cx="388" cy="425" rx="7" ry="4" fill="#94a3b8" />
                <ellipse cx="398" cy="423" rx="5" ry="3.5" fill="#64748b" />
                <ellipse cx="546" cy="372" rx="8" ry="4.5" fill="#94a3b8" />
                <ellipse cx="555" cy="370" rx="5" ry="3" fill="#64748b" />
              </svg>
            </div>

            {/* Annotation 2: Stronger foundations */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[4%] left-[49%] z-20 select-none"
            >
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 rotate-[15deg] text-slate-700" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M4 14 C12 6, 20 8, 22 18 M16 18 L22 18 L23 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-handwriting text-[14px] font-bold leading-tight text-slate-800">
                  Stronger
                  <br />
                  foundations
                </div>
              </div>
            </div>

            {/* Annotation 3: Leading and Creating Impact */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[21%] left-[69.5%] z-20 select-none"
            >
              <div className="flex items-center gap-2">
                <svg className="h-7 w-7 -rotate-[15deg] text-slate-700" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 24 C14 22, 20 18, 24 8 M18 7 L25 8 L25 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-handwriting text-[13.5px] font-bold leading-tight text-slate-800 -rotate-[6deg]">
                  Leading
                  <br />
                  and Creating Impact
                </div>
              </div>
            </div>

            {/* Journey Cards & Map Pins */}
            {journeyItems.map((item, index) => (
              <div key={item.number} className="contents">
                {/* Experience Card */}
                <motion.div
                  {...floatingMotion(reducedMotion, 3.2 + index * 0.35, index * 0.25)}
                  className={`absolute z-20 ${item.cardPosition}`}
                >
                  <article
                    className={`rounded-2xl border border-white/95 bg-white/95 p-3 sm:p-3.5 shadow-[0_12px_30px_rgba(95,65,35,0.11)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(95,65,35,0.16)] ${
                      index === 2 ? "border-purple-200/80 shadow-[0_14px_34px_rgba(124,58,237,0.12)]" : ""
                    }`}
                  >
                    {/* Header badge & period */}
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${item.badgeColor} ${item.badgeTextColor} shadow-xs`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9.5px] font-semibold ${item.periodBg} ${item.periodText}`}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-[12px] font-bold leading-snug text-slate-900 sm:text-[12.5px]">
                      {item.role}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="mt-2 space-y-1 text-[10px] leading-snug text-slate-600 sm:text-[10.5px]">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-1.5">
                          <span
                            className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: item.bulletColor }}
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${item.tagStyle}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.div>

                {/* Milestone Pin on the Road */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-15 -translate-x-1/2 -translate-y-1/2 ${item.pinPosition}`}
                >
                  {/* Ground base/glow */}
                  {index === 0 && (
                    <div className="absolute left-1/2 top-6 h-3 w-7 -translate-x-1/2 rounded-full bg-orange-500/25 blur-[3px]" />
                  )}
                  {index === 1 && (
                    <div className="absolute left-1/2 top-5 h-4 w-10 -translate-x-1/2 rounded-full border border-white bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.95)]" />
                  )}
                  {index === 2 && (
                    <div className="absolute left-1/2 top-4 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 ring-4 ring-purple-400/40" />
                  )}

                  {/* Teardrop Pin */}
                  <motion.div
                    {...floatingMotion(reducedMotion, 2.8 + index * 0.3, 0.4 + index * 0.2)}
                    className="relative flex flex-col items-center"
                  >
                    <MapPin
                      className="h-7 w-7 drop-shadow-md sm:h-8 sm:w-8"
                      fill={item.pinColor}
                      stroke="white"
                      strokeWidth={1.7}
                    />
                    {/* Inner white dot */}
                    <span className="absolute top-[7px] h-2 w-2 rounded-full bg-white shadow-xs sm:top-[8px] sm:h-2.5 sm:w-2.5" />
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Card 04: What's Next? (Right side under mountain road) */}
            <motion.div
              {...floatingMotion(reducedMotion, 3.6, 0.6)}
              className="absolute left-[79%] top-[41%] z-20 w-[19%]"
            >
              <article className="rounded-2xl border border-white/95 bg-white/95 p-3.5 shadow-[0_12px_30px_rgba(124,58,237,0.1)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(124,58,237,0.15)] sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#f3e8ff] text-[#7e22ce] shadow-xs">
                      <Rocket className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="text-[12.5px] font-bold text-slate-900 sm:text-sm">What's Next?</h3>
                  </div>
                  <a
                    href="#contact"
                    aria-label="Contact me about what's next"
                    className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-700"
                  >
                    <ArrowRight className="h-2.5 w-2.5" />
                  </a>
                </div>

                <div className="mt-3 space-y-1.5 sm:space-y-2">
                  {nextMilestones.map((item) => (
                    <div key={item.text} className="flex items-center gap-1.5 sm:gap-2">
                      {item.completed ? (
                        <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-[#7c3aed] text-white">
                          <Check className="h-2 w-2 stroke-[3]" />
                        </span>
                      ) : (
                        <span className="h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-slate-300" />
                      )}
                      <span
                        className={`text-[10px] font-medium sm:text-[10.5px] ${
                          item.completed ? "text-slate-700" : "text-slate-500"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </motion.div>
          </div>
        </div>

        {/* Education Bar */}
        <SectionReveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/90 bg-white/85 p-5 shadow-[0_10px_30px_rgba(95,65,35,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
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
              Let’s Connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Experience;
