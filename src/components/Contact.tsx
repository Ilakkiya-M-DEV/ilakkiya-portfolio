import contactAvatar from "@/assets/herosection/01a71aad-6bfc-4217-9b2e-a5c7cd7b2111.png";
import SectionReveal from "./SectionReveal";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";

const email = "ilakkiyamurugesan.m@gmail.com";
const phone = "+91 8268981563";

const Contact = () => {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = async (type: "email" | "phone", value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch (error) {
      console.error(`Unable to copy ${type} to clipboard.`, error);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      detail: email,
      href: `mailto:${email}`,
      copy: () => copyToClipboard("email", email),
      type: "email" as const,
      tone: "orange",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: phone,
      href: `tel:${phone.replaceAll(" ", "")}`,
      copy: () => copyToClipboard("phone", phone),
      type: "phone" as const,
      tone: "green",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      detail: "Connect with me",
      href: "https://www.linkedin.com/in/ilakkiya-m",
      tone: "blue",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Coimbatore, India",
      tone: "violet",
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#fff4e3] px-6 py-16 sm:py-20 lg:min-h-[680px] lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_20%,rgba(255,218,164,0.52),transparent_42%),radial-gradient(ellipse_at_8%_92%,rgba(255,186,112,0.3),transparent_36%)]"
      />

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <SectionReveal className="relative order-2 mx-auto flex w-full max-w-[680px] items-end self-end lg:order-1 lg:min-h-[530px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] bottom-[8%] h-[55%] rounded-full bg-orange-300/35 blur-3xl"
          />
          <img
            src={contactAvatar}
            alt="Ilakkiya at her laptop, ready to connect over a new idea"
            className="relative z-[1] block h-auto max-h-[560px] w-full object-contain object-bottom drop-shadow-[0_18px_22px_rgba(70,37,24,0.18)]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-[13%] right-[2%] z-[2] hidden rounded-2xl border border-white/90 bg-white/90 px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur sm:block lg:right-[-1%]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to a great conversation
            </span>
          </div>
        </SectionReveal>

        <div className="order-1 min-w-0 lg:order-2">
          <SectionReveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-blue-600">
              <span aria-hidden="true">// </span>Contact
            </p>
            <h2 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                impactful.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              I&apos;m always open to discussing new products, engineering
              challenges, collaboration opportunities, or just a good tech
              conversation.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-7 flex flex-col items-start gap-4 rounded-2xl border border-white/90 bg-white/65 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="pl-1 text-sm font-medium text-slate-600">
                I&apos;d love to hear from you!
              </span>
            </div>
          </SectionReveal>

          <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            {contactCards.map((card, index) => (
              <SectionReveal key={card.title} delay={0.14 + index * 0.05}>
                <article className="group relative flex h-full min-h-[132px] flex-col rounded-2xl border border-white/90 bg-white/80 p-4 shadow-[0_8px_26px_rgba(106,67,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_34px_rgba(106,67,32,0.12)]">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        card.tone === "orange"
                          ? "bg-orange-100 text-orange-600"
                          : card.tone === "green"
                            ? "bg-emerald-100 text-emerald-600"
                            : card.tone === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-violet-100 text-violet-600"
                      }`}
                    >
                      <card.icon className="h-4 w-4" />
                    </span>
                    {card.copy ? (
                      <button
                        type="button"
                        onClick={card.copy}
                        aria-label={
                          copied === card.type
                            ? `${card.title} copied`
                            : `Copy ${card.title.toLowerCase()}`
                        }
                        className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                      >
                        {copied === card.type ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    ) : card.href ? (
                      <ArrowUpRight className="h-4 w-4 text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : null}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {card.title}
                  </h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.title === "LinkedIn" ? "_blank" : undefined}
                      rel={
                        card.title === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 break-words text-xs leading-relaxed text-slate-600 transition-colors hover:text-blue-700"
                    >
                      {card.detail}
                    </a>
                  ) : (
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {card.detail}
                    </p>
                  )}
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.35}>
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 py-3 shadow-sm">
              <span className="mr-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to opportunities
              </span>
              <span className="hidden h-5 w-px bg-slate-300 sm:block" />
              {["Full-time", "Collaborations", "Freelance", "Interesting projects"].map(
                (opportunity, index) => (
                  <span
                    key={opportunity}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                      index === 0
                        ? "bg-orange-50 text-orange-700"
                        : index === 1
                          ? "bg-blue-50 text-blue-700"
                          : index === 2
                            ? "bg-violet-50 text-violet-700"
                            : "bg-fuchsia-50 text-fuchsia-700"
                    }`}
                  >
                    {opportunity}
                  </span>
                ),
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
