import { motion } from "motion/react";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from "./Icons";

interface HeroSectionProps {
  onStartProject?: () => void;
  onWatchShowreel?: () => void;
  onKresnaOpen?: () => void;
}

export default function HeroSection({ onStartProject, onWatchShowreel, onKresnaOpen }: HeroSectionProps) {
  // Shared motion transition configuration
  const motionProps = (delay: number) => ({
    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
  });

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between"
      id="hero-section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
          style={{ width: "120%", height: "120%" }}
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      {/* Navbar - Absolute at top to sit elegantly on top of content */}
      <header
        className="absolute top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16"
        id="hero-navbar"
      >
        {/* Left: Glass Circle Logo */}
        <div
          className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center select-none"
          id="navbar-logo"
        >
          <span className="font-heading italic text-2xl text-white">a</span>
        </div>

        {/* Center: Glass Pill Navigation Menu (Hidden on mobile) */}
        <nav
          className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1"
          id="navbar-menu"
        >
          {["Work", "Studio", "Services", "Journal", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
              id={`nav-link-${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
          <button
            onClick={onStartProject}
            className="ml-2 bg-white hover:bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 font-body transition-colors cursor-pointer"
            id="nav-cta-btn"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>

        {/* Right: Kresna SaaS Footer action toggle */}
        <button
          onClick={onKresnaOpen}
          className="liquid-glass hover:bg-white/5 text-white/95 px-4 h-12 rounded-full text-xs font-semibold flex items-center gap-2 font-body transition-all cursor-pointer select-none border border-white/5"
          id="navbar-kresna-btn"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span className="uppercase tracking-wider">Kresna Footer</span>
        </button>
      </header>

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center pt-28 px-4 text-center max-w-5xl mx-auto"
        id="hero-content"
      >
        {/* Badge */}
        <motion.div
          {...motionProps(0.4)}
          className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs md:text-sm text-white/90 font-body max-w-max select-none"
          id="hero-badge"
        >
          <span className="bg-white text-black text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full">
            New
          </span>
          <span className="font-light">Booking Q3 2026 engagements — limited capacity</span>
        </motion.div>

        {/* Headline */}
        <div className="mt-6 max-w-4xl" id="hero-headline-container">
          <BlurText
            text="Crafted Digital Experiences Built to Outlast Trends"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] tracking-[-3px] md:tracking-[-4px]"
          />
        </div>

        {/* Subtext */}
        <motion.p
          {...motionProps(0.8)}
          className="mt-6 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed px-4"
          id="hero-subtext"
        >
          We are a small studio of designers and engineers shaping brand-defining websites for ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...motionProps(1.1)}
          className="mt-8 flex flex-row items-center justify-center gap-6"
          id="hero-ctas"
        >
          <button
            onClick={onStartProject}
            className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-sm md:text-base font-body text-white hover:bg-white/5 transition-all cursor-pointer select-none"
            id="hero-start-project-btn"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 md:h-5 w-5" />
          </button>
          <button
            onClick={onWatchShowreel}
            className="flex items-center gap-2 text-sm md:text-base font-body text-white/90 hover:text-white transition-all cursor-pointer select-none bg-transparent border-none py-2 px-3"
            id="hero-watch-showreel-btn"
          >
            <Play className="h-4 w-4 md:h-5 w-5 text-white/80" />
            <span className="font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white">
              Watch Showreel
            </span>
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          {...motionProps(1.3)}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          id="hero-stats"
        >
          {/* Card 1 */}
          <div
            className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col"
            id="stats-card-1"
          >
            <div className="text-white/80" id="stats-icon-1">
              <ClockIcon className="h-6 w-6" />
            </div>
            <div
              className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white"
              id="stats-number-1"
            >
              6 Weeks
            </div>
            <div
              className="text-xs text-white/60 font-body mt-2 leading-tight"
              id="stats-label-1"
            >
              Average End-to-End Launch Time
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col"
            id="stats-card-2"
          >
            <div className="text-white/80" id="stats-icon-2">
              <GlobeIcon className="h-6 w-6" />
            </div>
            <div
              className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white"
              id="stats-number-2"
            >
              140+
            </div>
            <div
              className="text-xs text-white/60 font-body mt-2 leading-tight"
              id="stats-label-2"
            >
              Brands Shipped Across Four Continents
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Bar */}
      <motion.div
        {...motionProps(1.4)}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 mt-12 px-4"
        id="hero-trust-bar"
      >
        <div
          className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/70 font-body text-center select-none"
          id="trust-bar-pill"
        >
          Trusted by founders, operators, and creative directors worldwide
        </div>
        <div
          className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-16 mt-2"
          id="trust-bar-logos"
        >
          {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((logo) => (
            <span
              key={logo}
              className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/40 hover:text-white transition-colors cursor-default select-none"
              id={`trust-logo-${logo.toLowerCase()}`}
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
