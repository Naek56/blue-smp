import { motion } from "framer-motion";
import BackgroundLights from "@/components/ui/background-lights";
import Navbar from "@/components/ui/navbar";
import Donate from "@/components/ui/donate";

/* ────────────────────────────────────────────────────────────────
   BLUE SMP — page d'accueil.
   Fond : lumières douces floutées (CSS) · Police : façon Neville Brody.
   ──────────────────────────────────────────────────────────────── */

export default function BlueSmp() {
  return (
    <div className="relative min-h-screen">
      {/* Fond fixe : lumières douces (léger, sans WebGL) */}
      <div className="fixed inset-0 -z-10">
        <BackgroundLights />
      </div>

      {/* Navbar simple en haut */}
      <header className="relative z-10 flex justify-center px-4 pt-6">
        <Navbar />
      </header>

      {/* Hero : logo animé (flottement + halo pulsant) */}
      <section className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          {/* halo pulsant derrière le logo */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3f8cff]/30 blur-[110px]"
            style={{ animation: "logoglow 4s ease-in-out infinite" }}
          />
          {/* entrée (framer) sur le conteneur, flottement (CSS) sur un enfant
              distinct : les deux transforms ne se battent plus -> pas de bug */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="/blue-smp-logo.png"
              alt="BLUE SMP"
              className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(63,140,255,0.35)]"
              style={{ animation: "floaty 6s ease-in-out infinite" }}
            />
          </motion.div>
        </div>

        {/* indication de scroll animée */}
        <motion.a
          href="#donate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-brody absolute bottom-8 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-500"
        >
          Soutenir
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.a>
      </section>

      {/* Section Donate animée */}
      <div className="relative z-10">
        <Donate />
      </div>
    </div>
  );
}
