import { Heart, Send } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const current = navItems
        .map((item) => ({
          id: item.href.slice(1),
          offset: document.getElementById(item.href.slice(1))?.offsetTop ?? 0,
        }))
        .filter((section) => scrollPosition >= section.offset)
        .pop();

      if (current) setActive(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#ffc77f]/80 px-5 py-3 backdrop-blur-md sm:px-8 lg:border-transparent lg:bg-transparent lg:px-10 lg:py-4 lg:backdrop-blur-none"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#hero"
          aria-label="Ilakkiya Murugesan, home"
          className="inline-flex shrink-0 items-center gap-1 text-3xl font-serif font-bold italic tracking-tight text-slate-950"
        >
          IM
          <Heart className="h-3.5 w-3.5 fill-violet-600 text-violet-600" />
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href.slice(1) ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  active === item.href.slice(1)
                    ? "text-blue-700"
                    : "text-slate-900 hover:text-blue-700"
                }`}
              >
                {item.label}
                {active === item.href.slice(1) && (
                  <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-4 rounded-full bg-blue-600" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition-transform hover:-translate-y-0.5 sm:px-6"
        >
          <span>Let&apos;s Connect</span>
          <Send className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default FloatingNav;
