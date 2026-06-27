import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import { ProjectModal, ShowreelModal } from "./components/Modals";
import KresnaModal from "./components/KresnaModal";

export default function App() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isKresnaOpen, setIsKresnaOpen] = useState(false);

  return (
    <main className="bg-black text-white w-full min-h-screen selection:bg-white/30 selection:text-white" id="main-app">
      {/* Section 1: Hero Section */}
      <HeroSection
        onStartProject={() => setIsProjectOpen(true)}
        onWatchShowreel={() => setIsShowreelOpen(true)}
        onKresnaOpen={() => setIsKresnaOpen(true)}
      />

      {/* Section 2: Capabilities Section */}
      <CapabilitiesSection />

      {/* Interactive Project Inquiry & Showreel Video Modals */}
      <ProjectModal
        isOpen={isProjectOpen}
        onClose={() => setIsProjectOpen(false)}
      />
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
      <KresnaModal
        isOpen={isKresnaOpen}
        onClose={() => setIsKresnaOpen(false)}
      />
    </main>
  );
}
