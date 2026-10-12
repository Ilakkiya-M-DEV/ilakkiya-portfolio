import { motion } from "framer-motion";
import { ArrowRight, MousePointer2, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/herosection/0508ba52-2144-4c26-b821-0502d35c6051.png";

const suggestions = [
  "What are her strengths?",
  "Explain her project experience",
  "What makes her different?",
  "Tell me about her AI integration work",
  "What's her leadership style?",
];

const Hero = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    navigate(`/ask?q=${encodeURIComponent(value.trim())}`);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#ffc77f] pt-24 lg:block"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_35%_32%,rgba(255,231,189,0.46),transparent_52%),linear-gradient(90deg,rgba(255,199,127,0.99)_0%,rgba(255,199,127,0.97)_34%,rgba(255,199,127,0.7)_49%,rgba(255,199,127,0.04)_68%)]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 z-[1] h-40 w-full bg-gradient-to-t from-[#f5a95e]/45 to-transparent" />

      <div className="relative order-2 h-[min(62vw,390px)] w-full shrink-0 lg:absolute lg:bottom-0 lg:right-0 lg:order-none lg:h-[84%] lg:w-[68%]">
        <div className="pointer-events-none absolute inset-x-[22%] top-[14%] h-[62%] rounded-full bg-amber-100/25 blur-3xl" />
        <img
          src={heroImage}
          alt="Ilakkiya at her laptop"
          className="character-frame absolute inset-0 h-full w-full object-contain object-bottom"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="container relative z-10 order-1 mx-auto flex w-full flex-1 items-center px-6 pb-6 pt-6 lg:order-none lg:min-h-[calc(100svh-6rem)] lg:flex-none lg:pb-10 lg:pt-0">
        <div className="relative z-20 w-full text-center lg:max-w-[49%] lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-foreground/80 sm:text-sm">
              Product Engineer · AI-Integrated Systems · Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-5 text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.4rem]"
          >
            <span className="text-foreground">Ilakkiya</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Murugesan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg lg:mx-0"
          >
            Product Engineer building scalable systems, AI-integrated workflows,
            and data-driven platforms.
            <span className="mt-2 block text-sm font-medium text-foreground sm:text-base">
              React · TypeScript · AI Integration · Data Visualization
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="relative mx-auto max-w-lg lg:mx-0"
          >
            <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-foreground">
                Ask anything about me
              </span>
            </div>

            <div className="rounded-2xl border border-white/85 bg-white/95 p-1 shadow-lg shadow-amber-900/10 backdrop-blur-xl">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSearch(query);
                }}
                className="relative flex items-center"
              >
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                    window.setTimeout(() => setShowSuggestions(false), 200)
                  }
                  placeholder="Ask about my skills, projects, experience..."
                  className="w-full rounded-2xl bg-transparent py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Ask AI about Ilakkiya"
                />
                <span className="mr-3 hidden rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground sm:flex">
                  Ctrl+K
                </span>
              </form>
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Ask about my skills, experience, projects, or strengths
            </p>

            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full z-30 mt-2 w-full rounded-xl border border-white/80 bg-white/95 p-2 text-left shadow-xl backdrop-blur-xl"
              >
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                    className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>

          <button
            type="button"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            <span>Explore the portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-foreground/60 lg:justify-start">
            <MousePointer2 className="h-4 w-4 animate-bounce text-blue-700" />
            <span>Move cursor to call me!</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
