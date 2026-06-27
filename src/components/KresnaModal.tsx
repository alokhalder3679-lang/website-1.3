import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "./Icons";

interface KresnaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DeviceType = "desktop" | "tablet" | "mobile";

export default function KresnaModal({ isOpen, onClose }: KresnaModalProps) {
  const [device, setDevice] = useState<DeviceType>("desktop");

  const getWidthClass = () => {
    switch (device) {
      case "mobile":
        return "max-w-[480px]";
      case "tablet":
        return "max-w-[800px]";
      default:
        return "max-w-full";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-4 bg-black/90 backdrop-blur-xl"
          id="kresna-modal-overlay"
        >
          {/* Top Control Bar */}
          <div
            className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 liquid-glass rounded-2xl z-20 mb-4"
            id="kresna-modal-header"
          >
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-body text-white/40 uppercase tracking-widest font-semibold">
                SaaS Deliverable Preview
              </span>
              <h3 className="font-heading italic text-2xl text-white leading-none mt-1">
                Kresna Sales-Automation Footer
              </h3>
            </div>

            {/* Responsive Viewport Controls */}
            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/5" id="device-controls">
              {(["desktop", "tablet", "mobile"] as DeviceType[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDevice(mode)}
                  className={`px-3 py-1 text-xs font-body font-medium rounded-full transition-all cursor-pointer capitalize ${
                    device === mode
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  id={`btn-mode-${mode}`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href="/kresna-footer.html"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full text-xs font-body font-medium bg-white/10 hover:bg-white/15 text-white flex items-center gap-1.5 transition-colors"
                id="btn-open-new-tab"
              >
                <span>Standalone HTML</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                id="close-kresna-modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Interactive Frame Container */}
          <div
            className="flex-1 w-full max-w-7xl mx-auto rounded-3xl overflow-hidden liquid-glass border border-white/5 bg-white flex justify-center items-center relative p-2"
            id="iframe-outer-container"
          >
            <div className="absolute top-2 left-6 z-10 bg-black/85 text-white/80 font-mono text-[10px] px-3 py-1 rounded-full pointer-events-none border border-white/5">
              Live Embed Preview &bull; White Page Mode
            </div>
            
            <motion.div
              layout
              className={`w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-300 ${getWidthClass()}`}
              id="iframe-sizing-wrapper"
            >
              <iframe
                src="/kresna-footer.html"
                className="w-full h-full border-none"
                title="Kresna Footer HTML Live Showcase"
                id="kresna-showcase-iframe"
              />
            </motion.div>
          </div>

          {/* Footer of the Modal */}
          <div className="w-full max-w-7xl mx-auto py-2 text-center text-white/40 font-body text-[11px] font-light">
            Fully interactive. Drag, resize, or inspect elements. Includes fluidly scaling SVG watermark and responsive breakpoints below 860px & 560px.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
