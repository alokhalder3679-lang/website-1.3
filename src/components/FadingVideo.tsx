import { useEffect, useRef, useState, CSSProperties } from "react";

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const sources = Array.isArray(src) ? src : [src];
  const activeSrc = sources[currentSrcIndex];

  const fadeAnimationRef = useRef<number | null>(null);

  const startFade = (targetOpacity: number, duration: number) => {
    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }

    const element = videoRef.current;
    if (!element) return;

    const currentOpacity = parseFloat(element.style.opacity || "0");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
      element.style.opacity = newOpacity.toString();
      setOpacity(newOpacity);

      if (progress < 1) {
        fadeAnimationRef.current = requestAnimationFrame(animate);
      } else {
        fadeAnimationRef.current = null;
      }
    };

    fadeAnimationRef.current = requestAnimationFrame(animate);
  };

  // On source index or active source changes, reset and play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setOpacity(0);
    video.style.opacity = "0";
    video.load();
    video.play().catch((err) => {
      // Silent error handler for browsers that block autoplay
      console.log("Autoplay or source swap play prevented:", err);
    });
  }, [activeSrc]);

  const handleLoadedData = () => {
    startFade(1, 500);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const remainingTime = video.duration - video.currentTime;
    const currentOpacity = parseFloat(video.style.opacity || "0");

    // Fade out over 550ms when remaining time <= 0.55s
    if (
      video.duration > 0 &&
      remainingTime <= 0.55 &&
      currentOpacity > 0.05 &&
      (!fadeAnimationRef.current || currentOpacity === 1)
    ) {
      startFade(0, 550);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    if (sources.length === 1) {
      video.currentTime = 0;
      video.play().catch((err) => console.log("Replay failed:", err));
      startFade(1, 500);
    } else {
      setCurrentSrcIndex((prevIndex) => (prevIndex + 1) % sources.length);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeAnimationRef.current) {
        cancelAnimationFrame(fadeAnimationRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={activeSrc}
      className={className}
      style={{
        ...style,
        opacity: opacity,
        transition: "none",
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      id="fading-video-element"
    />
  );
}
