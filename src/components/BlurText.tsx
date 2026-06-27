import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
}

export default function BlurText({ text, className }: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // once: true keeps the animation in its final state after triggering
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const words = text.split(" ");

  const wordVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1, // 100ms stagger delay per word index
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0.1em",
      }}
      id="blur-text-container"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
          }}
          id={`blur-word-${index}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
