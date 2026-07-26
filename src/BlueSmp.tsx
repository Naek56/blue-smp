import GradientBlurBg from "@/components/ui/gradient-blur-bg";
import Navbar from "@/components/ui/navbar";

/* ────────────────────────────────────────────────────────────────
   BLUE SMP — page d'accueil (version épurée, à étoffer ensuite).
   Fond : grille blanche + dégradé violet · Police : façon Neville Brody.
   ──────────────────────────────────────────────────────────────── */
export default function BlueSmp() {
  return (
    <GradientBlurBg>
      {/* Navbar simple en haut */}
      <header className="flex justify-center px-4 pt-6">
        <Navbar />
      </header>

      {/* Hero : logo centré */}
      <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">
        <img
          src="/blue-smp-logo.png"
          alt="BLUE SMP"
          className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(120,90,200,0.25)]"
        />

        <p className="font-brody mt-4 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
          Serveur Minecraft · Survie
        </p>

        <a
          href="#"
          className="font-brody mt-8 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-neutral-700"
        >
          Rejoindre
        </a>
      </main>
    </GradientBlurBg>
  );
}
