import { motion } from "framer-motion";
import BackgroundLights from "@/components/ui/background-lights";
import Navbar from "@/components/ui/navbar";
import Donate from "@/components/ui/donate";

/* ────────────────────────────────────────────────────────────────
   BLUE SMP — page d'accueil minimaliste.
   ──────────────────────────────────────────────────────────────── */
export default function BlueSmp() {
  return (
    <div className="relative min-h-screen">
      {/* Fond fixe minimaliste */}
      <div className="fixed inset-0 -z-10">
        <BackgroundLights />
      </div>

      {/* Header : marque + navigation */}
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#accueil" className="text-lg font-black tracking-tight text-neutral-900">
          BLUE&nbsp;SMP
        </a>
        <Navbar />
      </header>

      {/* Hero : logo seul, centré */}
      <section
        id="accueil"
        className="relative z-10 flex min-h-[calc(100vh-6rem)] scroll-mt-24 items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <img
            src="/blue-smp-logo.png"
            alt="BLUE SMP"
            className="w-full"
            style={{ animation: "floaty 6s ease-in-out infinite" }}
          />
        </motion.div>
      </section>

      {/* Donation minimaliste */}
      <div className="relative z-10">
        <Donate />
      </div>
    </div>
  );
}
