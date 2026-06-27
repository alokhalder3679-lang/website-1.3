import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Play } from "./Icons";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Website Design",
    budget: "$15k - $30k",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", type: "Website Design", budget: "$15k - $30k", message: "" });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          id="project-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, filter: "blur(10px)" }}
            animate={{ scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ scale: 0.95, y: 20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="liquid-glass-strong w-full max-w-lg rounded-[2rem] p-8 md:p-10 text-white relative flex flex-col"
            id="project-modal-container"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-xl transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              id="close-project-modal"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="font-heading italic text-4xl tracking-[-1px] text-white mb-2" id="modal-heading">
                  Initiate Project
                </h3>
                <p className="text-sm font-body font-light text-white/60 mb-8" id="modal-subtext">
                  Tell us about your company and what you're hoping to build.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" id="project-form">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-body text-white/40 uppercase tracking-widest font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alok Halder"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors w-full"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-body text-white/40 uppercase tracking-widest font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. you@domain.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors w-full"
                    />
                  </div>

                  {/* Row: Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-body text-white/40 uppercase tracking-widest font-medium">
                        Project Scope
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm font-light text-white focus:outline-none focus:border-white/30 transition-colors w-full appearance-none cursor-pointer"
                      >
                        <option value="Website Design" className="bg-neutral-900">Website Design</option>
                        <option value="Brand Identity" className="bg-neutral-900">Brand Identity</option>
                        <option value="Full-Stack Dev" className="bg-neutral-900">Full-Stack Dev</option>
                        <option value="Ongoing Partner" className="bg-neutral-900">Ongoing Partner</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-body text-white/40 uppercase tracking-widest font-medium">
                        Target Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm font-light text-white focus:outline-none focus:border-white/30 transition-colors w-full appearance-none cursor-pointer"
                      >
                        <option value="$10k - $15k" className="bg-neutral-900">$10k - $15k</option>
                        <option value="$15k - $30k" className="bg-neutral-900">$15k - $30k</option>
                        <option value="$30k - $60k" className="bg-neutral-900">$30k - $60k</option>
                        <option value="$60k+" className="bg-neutral-900">$60k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-body text-white/40 uppercase tracking-widest font-medium">
                      Brief Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, timelines, or anything else..."
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-white/90 text-black py-3.5 rounded-xl font-body font-medium text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer mt-2"
                  >
                    <span>Send Inquiry</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
                id="modal-success-state"
              >
                <div className="liquid-glass h-16 w-16 rounded-full flex items-center justify-center mb-6 text-white/90">
                  <ArrowUpRight className="h-8 w-8" />
                </div>
                <h3 className="font-heading italic text-4xl text-white mb-2">
                  Inquiry Sent
                </h3>
                <p className="text-sm font-body font-light text-white/60 max-w-xs">
                  Thank you, {formData.name}. We'll review your project details and reach out within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          id="showreel-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="liquid-glass-strong w-full max-w-4xl rounded-[1.5rem] overflow-hidden aspect-video text-white relative"
            id="showreel-modal-container"
          >
            {/* Header / Top overlay bar */}
            <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
              <div>
                <span className="text-[10px] font-body text-white/40 uppercase tracking-widest block font-medium">
                  Showcase
                </span>
                <span className="font-heading italic text-2xl text-white">
                  Studio Showreel 2026
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/80 pointer-events-auto"
                id="close-showreel-modal"
              >
                ✕
              </button>
            </div>

            {/* Video frame - atmospheric slow visual loops */}
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
              className="w-full h-full object-cover"
              autoPlay
              controls
              muted={false}
              playsInline
              id="showreel-player"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
