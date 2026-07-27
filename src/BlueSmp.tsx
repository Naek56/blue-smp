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

      {/* Header : navbar pilule centrée */}
      <header className="relative z-10 flex justify-center px-4 pt-6">
        <Navbar />
      </header>

      {/* Hero : logo seul, centré */}
      <section
        id="accueil"
        className="relative z-10 flex min-h-[calc(100vh-6rem)] scroll-mt-24 flex-col items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl"
        >
          <img
            src="/blue-smp-logo.png"
            alt="BLUE SMP"
            className="w-full"
            style={{ animation: "floaty 6s ease-in-out infinite" }}
          />
        </motion.div>

        {/* indicateur de scroll animé */}
        <motion.a
          href="#donate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-400"
        >
          Soutenir
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-base"
          >
            ↓
          </motion.span>
        </motion.a>
      </section>

      {/* Donation minimaliste */}
      <div className="relative z-10">
        <Donate />
      </div>
    </div>
  );
}
