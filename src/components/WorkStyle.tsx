import {
  BarChart3,
  BrainCircuit,
  Code2,
  Layers3,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import journeyArtwork from "@/assets/herosection/b35c7260-d995-449c-a261-4804e23e5bea.png";
import SectionReveal from "./SectionReveal";

const featureCards = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "I start with the bigger picture — understanding users, business goals, and the real problem.",
    tags: ["Problem Solving", "User-Centric"],
    position: "xl:left-[42%] xl:top-[5%]",
    colors: "bg-[#ff7838] text-[#ff7838] border-orange-200 bg-orange-50 text-orange-700",
  },
  {
    icon: Users,
    title: "Tech Leadership",
    description: "I lead and mentor teams, drive technical decisions, and ensure high-quality delivery.",
    tags: ["Team Management", "Mentoring"],
    position: "xl:left-[70%] xl:top-[13%]",
    colors: "bg-[#743cf3] text-[#743cf3] border-purple-200 bg-purple-50 text-purple-700",
  },
  {
    icon: Code2,
    title: "Frontend & UI Development",
    description: "I build scalable, responsive, and intuitive user interfaces with modern frontend technologies.",
    tags: ["React", "TypeScript", "UI/UX"],
    position: "xl:left-[10%] xl:top-[34%]",
    colors: "bg-[#2875f5] text-[#2875f5] border-blue-200 bg-blue-50 text-blue-700",
  },
  {
    icon: Layers3,
    title: "System Design & Architecture",
    description: "I design scalable systems, modular architectures, and robust APIs.",
    tags: ["Scalability", "Modular Design", "APIs"],
    position: "xl:left-[52%] xl:top-[34%]",
    colors: "bg-[#19a875] text-[#19a875] border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration & Innovation",
    description: "I explore and integrate AI to build smarter workflows and data-driven features.",
    tags: ["LLMs", "Automation", "Intelligent Apps"],
    position: "xl:left-[5%] xl:top-[58%]",
    colors: "bg-[#872cf3] text-[#872cf3] border-purple-200 bg-purple-50 text-purple-700",
  },
  {
    icon: Target,
    title: "Module Ownership & Delivery",
    description: "I take end-to-end ownership — from ideation to deployment — ensuring timely and impactful delivery.",
    tags: ["Ownership", "Execution", "Quality"],
    position: "xl:left-[61%] xl:top-[55%]",
    colors: "bg-[#ff6838] text-[#ff6838] border-orange-200 bg-orange-50 text-orange-700",
  },
  {
    icon: BarChart3,
    title: "Data & Impact Driven",
    description: "I track progress with clear metrics, analyze results, and continuously improve for better outcomes.",
    tags: ["Dashboards", "Analytics", "Real Impact"],
    position: "xl:left-[68%] xl:top-[75%]",
    colors: "bg-[#2875f5] text-[#2875f5] border-blue-200 bg-blue-50 text-blue-700",
  },
];

const WorkStyle = () => (
  <section
    id="work-style"
    aria-label="How I work"
    className="relative overflow-hidden bg-[#fff0d7] px-4 py-10 sm:px-6 sm:py-14 xl:px-0 xl:py-0"
  >
    <div className="container relative z-10 mx-auto max-w-[1600px] xl:max-w-none">
      <SectionReveal>
        <div className="relative mx-auto xl:aspect-[2/1]">
          <div className="relative z-20 max-w-[620px] xl:absolute xl:left-[5%] xl:top-[7%] xl:w-[37%]">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-blue-600">
              <span aria-hidden="true">//</span>
              <span>How I work</span>
            </p>
            <h2 className="font-sans text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#1f2440] sm:text-5xl xl:text-[clamp(1.9rem,2.4vw,2.6rem)]">
              From ideas to impact,
              <span className="mt-1 block bg-gradient-to-r from-[#2563eb] via-[#5149e8] to-[#8338ec] bg-clip-text text-transparent">
                I bring all the pieces together.
              </span>
            </h2>
            <p className="mt-4 max-w-[510px] text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              I wear multiple hats — Product Engineer, Tech Lead, Module Owner, and Collaborator — to turn complex problems into scalable, user-centric solutions.
            </p>
          </div>

          <img
            src={journeyArtwork}
            alt="A warm kitchen scene with a cook bringing together ingredients, ideas, and outcomes."
            className="mt-5 block h-auto w-full xl:absolute xl:inset-0 xl:mt-0 xl:h-full xl:object-cover"
            loading="lazy"
            decoding="async"
          />

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:absolute xl:inset-0 xl:mt-0 xl:block">
            {featureCards.map(({ title, description, tags, position, colors, icon: Icon }) => {
              const [iconColor, , tagBorder, tagBackground, tagText] = colors.split(" ");

              return (
                <article
                  key={title}
                  className={`rounded-[18px] border border-white/75 bg-white/90 p-3.5 shadow-[0_8px_24px_rgba(73,56,112,0.13)] backdrop-blur-md xl:absolute xl:w-[clamp(220px,17vw,290px)] ${position}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${iconColor} text-white shadow-md`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13px] font-bold leading-[1.35] text-slate-800 sm:text-sm">{title}</h3>
                      <p className="mt-1.5 text-[11px] leading-[1.45] text-slate-600">{description}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-full border px-2 py-1 text-[9px] font-semibold ${tagBorder} ${tagBackground} ${tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute left-[56%] top-[5%] hidden h-[16%] w-[12%] overflow-visible xl:block"
          >
            <path d="M8 84 C25 67 37 74 44 54 C51 34 40 25 58 17 M51 18 L59 16 L56 24" fill="none" stroke="#24324c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <text x="53" y="11" fill="#24324c" fontSize="10" fontFamily="cursive" fontWeight="600" transform="rotate(-8 53 11)">Understand</text>
            <text x="59" y="28" fill="#24324c" fontSize="10" fontFamily="cursive" fontWeight="600" transform="rotate(-8 59 28)">→ Plan → Build</text>
            <text x="62" y="42" fill="#24324c" fontSize="10" fontFamily="cursive" fontWeight="600" transform="rotate(-8 62 42)">→ Deliver</text>
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 140 95"
            className="pointer-events-none absolute left-[1%] top-[33%] hidden h-[14%] w-[9%] overflow-visible xl:block"
          >
            <text x="0" y="24" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-8 0 24)">Different</text>
            <text x="0" y="42" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-8 0 42)">roles, one</text>
            <text x="0" y="60" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-8 0 60)">goal</text>
            <path d="M62 40 C92 9 104 12 121 42 L132 56 M120 49 L132 56 L121 61" fill="none" stroke="#24324c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 150 100"
            className="pointer-events-none absolute right-[1%] top-[34%] hidden h-[15%] w-[10%] overflow-visible xl:block"
          >
            <path d="M10 44 C43 13 74 22 59 43 C48 58 29 55 22 57 C48 74 88 72 111 61 M103 54 L112 61 L101 67" fill="none" stroke="#24324c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="76" y="25" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-7 76 25)">Mixing</text>
            <text x="84" y="43" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-7 84 43)">skills, people</text>
            <text x="88" y="61" fill="#24324c" fontSize="13" fontFamily="cursive" fontWeight="600" transform="rotate(-7 88 61)">and ideas</text>
          </svg>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default WorkStyle;
