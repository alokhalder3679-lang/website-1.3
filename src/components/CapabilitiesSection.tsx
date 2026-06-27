import { motion } from "motion/react";
import FadingVideo from "./FadingVideo";
import { ImageIcon, MovieIcon, LightbulbIcon } from "./Icons";

export default function CapabilitiesSection() {
  const cards = [
    {
      title: "Design",
      icon: ImageIcon,
      tags: ["Brand Systems", "Art Direction", "Visual Identity", "Motion"],
      body: "We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul.",
    },
    {
      title: "Engineering",
      icon: MovieIcon,
      tags: ["React", "Next.js", "Headless CMS", "Edge-Ready"],
      body: "Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch.",
    },
    {
      title: "Growth",
      icon: LightbulbIcon,
      tags: ["SEO", "Analytics", "A/B Testing", "Retention"],
      body: "Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.2 + index * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center"
      id="capabilities-section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65 z-0" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-28 pb-16 flex flex-col min-h-screen justify-between"
        id="capabilities-content"
      >
        {/* Header (Top) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="mb-auto"
          id="capabilities-header"
        >
          <div
            className="text-sm font-body font-light text-white/60 mb-4 tracking-wider uppercase"
            id="capabilities-label"
          >
            // Capabilities
          </div>
          <h2
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white"
            id="capabilities-heading"
          >
            Studio craft,<br />end to end
          </h2>
        </motion.div>

        {/* Cards Grid (Bottom) */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          id="capabilities-grid"
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col hover:shadow-2xl hover:shadow-white/5 transition-shadow duration-300"
                id={`capability-card-${card.title.toLowerCase()}`}
              >
                {/* Top Row: Icon + Tags */}
                <div className="flex items-start justify-between gap-4" id={`card-top-${index}`}>
                  {/* Icon */}
                  <div
                    className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0 text-white"
                    id={`card-icon-container-${index}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  {/* Tags */}
                  <div
                    className="flex flex-wrap gap-1.5 justify-end"
                    id={`card-tags-container-${index}`}
                  >
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/95 font-body font-light whitespace-nowrap select-none"
                        id={`tag-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer to push text to bottom */}
                <div className="flex-1" id={`card-spacer-${index}`} />

                {/* Bottom Row: Title + Body */}
                <div className="mt-8 text-left" id={`card-bottom-${index}`}>
                  <h3
                    className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mb-3"
                    id={`card-title-${index}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm text-white/90 font-body font-light leading-relaxed max-w-[32ch]"
                    id={`card-body-${index}`}
                  >
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
