

import { useCountdown } from "./hooks/useCountdown";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { translations, type Language } from "./translations";
import portraitUrl from "./images/portrait.webp";
import churchUrl from "./images/church.jpg";
import candlesUrl from "./images/candles.jpg";
import raysUrl from "./images/rays.jpg";
import sleevaUrl from "./images/sleeva.svg";

const PORTRAIT_URL = portraitUrl;
const CHURCH_URL = churchUrl;
const CANDLES_URL = candlesUrl;
const RAYS_URL = raysUrl;
const NEW_EMBLEM_URL = sleevaUrl;
const ORDINATION_DATE = "2026-12-30T15:00:00+05:30";
const CALENDAR_URL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Priestly%20Ordination%20of%20Dn.%20Noyal%20B%20Varghese&dates=20261230T093000Z%2F20261230T123000Z&ctz=Asia%2FKolkata&location=St.%20Joseph%27s%20Church%2C%20Punnakunnathussery%2C%20Kerala%2C%20India&details=Priestly%20ordination%20celebration";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=St.+Joseph%27s+Church%2C+Punnakunnathussery%2C+Kerala%2C+India";

function DoveOrnament() {
  return (
    <div className="relative flex justify-center items-center py-4 animate-float">
      <img src={NEW_EMBLEM_URL} alt="Syro-Malabar Sleeva Cross" className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_3px_8px_rgba(168,136,32,0.2)]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-sans uppercase tracking-[0.35em] text-gold-600 mb-3">
      {children}
    </p>
  );
}

function App() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  const { days, hours, minutes, seconds } = useCountdown(ORDINATION_DATE);

  useEffect(() => {
    document.documentElement.lang = lang === "ml" ? "ml" : "en";
  }, [lang]);

  return (
    <div lang={lang === "ml" ? "ml" : "en"} className={`min-h-screen bg-cream-100 font-sans text-ink-800 overflow-x-hidden ${lang === "ml" ? "lang-ml" : ""}`}>
      {/* Language Switcher Bar */}
      <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 flex gap-1 bg-ivory-50/95 backdrop-blur-md p-1.5 rounded-full border border-gold-400/30 shadow-md" role="group" aria-label={lang === "ml" ? "ഭാഷ തിരഞ്ഞെടുക്കുക" : "Choose language"}>
        <button
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            lang === "en"
              ? "bg-gold-500 text-ink-900 shadow-sm"
              : "text-ink-700 hover:text-ink-900"
          }`}
        >
          {t.toggle.en}
        </button>
        <button
          onClick={() => setLang("ml")}
          aria-pressed={lang === "ml"}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            lang === "ml"
              ? "bg-gold-500 text-ink-900 shadow-sm"
              : "text-ink-700 hover:text-ink-900"
          }`}
        >
          {t.toggle.ml}
        </button>
      </div>

      {/* ───────────── HERO ───────────── */}
      <header className="relative flex min-h-[min(900px,100svh)] items-center justify-center overflow-hidden px-4 py-24 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RAYS_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/75 via-cream-100/85 to-cream-100/95" />

        <div className="pointer-events-none absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl animate-glow-pulse" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="relative flex justify-center items-center py-4 animate-float">
              <img src={NEW_EMBLEM_URL} alt="Syro-Malabar Sleeva Cross" className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_3px_8px_rgba(168,136,32,0.2)]" />
            </div>
          </div>
          <p className="text-sm font-sans uppercase tracking-[0.4em] text-gold-700 mb-6">{t.hero.eyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-ink-900 leading-tight">
            {t.hero.titleTop} {t.hero.titleBottom}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg font-sans text-ink-700 leading-relaxed">{t.hero.subtitle}</p>
          <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-gold-600/20 bg-cream-50/65 px-5 py-4 shadow-sm backdrop-blur-sm">
            <p className="font-serif text-lg sm:text-xl font-semibold text-ink-900">{t.card.name}</p>
            <p className="mt-1 text-sm sm:text-base font-sans text-ink-700">{t.card.dateValue}, {t.card.dateSub} · {t.card.timeValue}</p>
          </div>
          <div className="mt-10 animate-float" aria-hidden="true">
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="mx-auto text-gold-500">
              <path d="M10 0v24M4 18l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="mt-2 text-xs text-gold-600">{t.hero.scrollHint}</p>
          </div>
        </div>
      </header>

      {/* ───────────── INVITATION CARD ───────────── */}
      <section id="event-details" className="relative scroll-mt-8 bg-ivory-100 px-4 py-14 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl sm:rounded-3xl bg-ivory-50 shadow-2xl shadow-amber-900/10 overflow-hidden animate-fade-in-up">
            <div className="h-1.5 bg-gradient-to-r from-gold-600/45 via-amber-300/60 to-gold-600/45" />

            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative px-5 pt-7 sm:px-9 sm:pt-9 lg:p-10 flex items-center">
                <div className="w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-400 shadow-lg">
                  <img src={PORTRAIT_URL} alt={lang === "ml" ? "പൗരോഹിത്യ സ്വീകരണം നടത്തുന്ന ഡീക്കൻ നോയൽ ബി വർഗീസ്" : "Dn. Noyal B Varghese, the ordinand"} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-amber-200/40 blur-2xl" />
              </div>

            <div className="px-6 pb-8 pt-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <div className="text-center">
                <SectionLabel>{t.card.label}</SectionLabel>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink-900">
                  {t.card.name}
                </h2>
                <DoveOrnament />
                <blockquote className="font-serif italic text-lg text-ink-700 leading-relaxed">
                  {t.card.scripture}
                </blockquote>
                <cite className="block mt-2 text-sm font-sans text-gold-600 not-italic">
                  {t.card.scriptureRef}
                </cite>

                <p className="mx-auto max-w-2xl font-sans text-base text-ink-700 leading-relaxed">
                  {t.card.message}
                </p>
              </div>

              {/* Date & Time tiles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
                    {t.card.dateLabel}
                  </p>
                  <p className="font-serif text-lg font-semibold text-ink-900">
                    {t.card.dateValue}
                  </p>
                  <p className="text-xs font-sans text-ink-700">
                    {t.card.dateSub}
                  </p>
                </div>
                <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
                    {t.card.timeLabel}
                  </p>
                  <p className="font-serif text-lg font-semibold text-ink-900">
                    {t.card.timeValue}
                  </p>
                  <p className="text-xs font-sans text-ink-700">
                    {t.card.timeSub}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 font-sans text-sm font-medium text-cream-50 transition hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
                  <CalendarDays aria-hidden="true" size={18} />
                  {t.card.calendarBtn}
                </a>
              </div>

              {/* Church name & address */}
              <div className="mt-5 rounded-xl bg-gradient-to-br from-amber-50 to-cream-100 border border-gold-400/20 px-5 py-5 text-center">
                <p className="font-serif text-lg font-semibold text-ink-900">
                  {t.card.churchName}
                </p>
                <p className="mt-1 text-xs font-sans text-ink-700 leading-relaxed">
                  {t.card.churchAddr1}
                  <br />
                  {t.card.churchAddr2}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ───────────── ORDER OF THE DAY ───────────── */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 bg-cream-100">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel>{t.order.label}</SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
            {t.order.title}
          </h3>
          <DoveOrnament />
          <div className="relative mt-8 grid gap-4 text-left lg:grid-cols-4 lg:gap-5 lg:pt-8 before:absolute before:hidden lg:before:block lg:before:left-8 lg:before:right-8 lg:before:top-4 lg:before:h-px lg:before:bg-gold-400/50">
            {t.order.items.map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex gap-4 items-start rounded-xl bg-ivory-50 border border-gold-400/20 px-5 py-5 shadow-sm lg:min-h-48 lg:flex-col lg:after:absolute lg:after:-top-6 lg:after:left-6 lg:after:h-4 lg:after:w-4 lg:after:rounded-full lg:after:border-4 lg:after:border-ivory-100 lg:after:bg-gold-500"
              >
                <div className="flex-shrink-0 text-center min-w-[76px] lg:min-w-0 lg:text-left">
                  <p className="font-serif text-base font-semibold text-gold-700">
                    {item.time}
                  </p>
                </div>
                <div className="border-l border-gold-400/30 pl-4 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-4">
                  <p className="font-serif text-base font-semibold text-ink-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-sans text-ink-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── THE CHURCH ───────────── */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 bg-ivory-100">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>{t.church.label}</SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
            {t.church.title}
          </h3>
          <DoveOrnament />

          <div className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-3xl border border-gold-400/30 bg-ivory-50 text-left shadow-xl shadow-amber-900/10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="aspect-[4/5] overflow-hidden bg-cream-200/70 lg:aspect-auto lg:min-h-[380px]">
              <img
                src={CHURCH_URL}
                alt={t.church.photoLabel}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-10 lg:items-start lg:px-12 lg:text-left">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-cream-100 px-3.5 py-1.5 text-xs font-sans font-medium text-gold-800">
                <MapPin aria-hidden="true" size={14} />
                {t.church.label}
              </span>
              <h4 className="font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
                {t.church.title}
              </h4>
              <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-ink-700">
                {t.church.addressLine}
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 px-7 py-3.5 font-sans text-sm font-medium text-ink-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/35 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
                <MapPin aria-hidden="true" size={18} />
                {t.church.mapsBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── COUNTDOWN ───────────── */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CANDLES_URL})` }}
        />
        <div className="absolute inset-0 bg-ink-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/70 to-ink-900/90" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionLabel>
            <span className="text-gold-400">{t.countdown.label}</span>
          </SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-cream-100 mb-2">
            {t.countdown.title}
          </h3>
          <p className="font-sans text-sm text-cream-300/80 mb-8">
            {t.countdown.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: t.countdown.days, value: days },
              { label: t.countdown.hours, value: hours },
              { label: t.countdown.minutes, value: minutes },
              { label: t.countdown.seconds, value: seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="rounded-xl bg-cream-50/10 backdrop-blur-sm border border-gold-400/30 px-2 py-5 sm:py-7"
              >
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-gold-400 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[10px] font-sans uppercase tracking-[0.15em] text-cream-300/70">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif italic text-lg text-cream-200">
            {t.countdown.dateText}
          </p>
        </div>
      </section>

      {/* ───────────── CLOSING MESSAGE ───────────── */}
      <footer className="relative px-4 py-16 sm:px-6 sm:py-24 bg-gradient-to-b from-cream-100 to-ivory-200">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-sm text-ink-700 leading-relaxed">
            {t.blessing.closing}
          </p>
          <p className="mt-3 font-serif text-xl font-semibold text-ink-900">
            {t.blessing.family}
          </p>
          <p className="mt-1 font-sans text-sm text-ink-700">
            {t.blessing.parish}
          </p>

          <div className="mt-12">
            <div className="mx-auto h-px w-24 bg-gold-400/40" />
            <p className="mt-6 text-[11px] font-sans uppercase tracking-[0.3em] text-ink-700/60">
              {t.blessing.soliDeo}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
