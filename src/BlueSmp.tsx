import { Sparkles, Shirt, Crown, Wand2 } from "lucide-react";
import GradientBlurBg from "@/components/ui/gradient-blur-bg";
import Navbar from "@/components/ui/navbar";

/* ────────────────────────────────────────────────────────────────
   BLUE SMP — page d'accueil (version épurée, à étoffer ensuite).
   Fond : grille blanche + dégradé bleu clair · Police : façon Neville Brody.
   ──────────────────────────────────────────────────────────────── */

/* Produits / cosmétiques — placeholders sans photo pour l'instant */
const PRODUCTS = [
  { icon: Shirt, name: "Capes", desc: "Cosmétiques à porter en jeu" },
  { icon: Sparkles, name: "Particules", desc: "Effets visuels autour de toi" },
  { icon: Crown, name: "Grades", desc: "Rangs et avantages exclusifs" },
  { icon: Wand2, name: "Cosmétiques", desc: "Objets et customisations" },
];

function ProductCard({
  icon: Icon,
  name,
  desc,
}: {
  icon: typeof Shirt;
  name: string;
  desc: string;
}) {
  return (
    <div className="group flex flex-col rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(63,140,255,0.15)]">
      {/* Zone visuelle (placeholder, sans photo) */}
      <div className="mb-4 grid aspect-square place-items-center rounded-xl border border-black/5 bg-gradient-to-br from-[#eaf4ff] to-[#dcecff]">
        <Icon className="h-10 w-10 text-[#3f8cff]" strokeWidth={1.6} />
      </div>
      <h3 className="font-brody text-lg font-semibold tracking-wide text-neutral-900">
        {name}
      </h3>
      <p className="font-brody mt-1 text-sm text-neutral-500">{desc}</p>
      <span className="font-brody mt-4 inline-flex w-fit items-center rounded-full bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2f7ae0]">
        Bientôt
      </span>
    </div>
  );
}

export default function BlueSmp() {
  return (
    <GradientBlurBg>
      {/* Navbar simple en haut */}
      <header className="flex justify-center px-4 pt-6">
        <Navbar />
      </header>

      {/* Hero : logo centré */}
      <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">
        <img
          src="/blue-smp-logo.png"
          alt="BLUE SMP"
          className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(63,140,255,0.25)]"
        />
      </section>

      {/* Section produits / boutique */}
      <section id="boutique" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="font-brody text-3xl font-bold uppercase tracking-wide text-neutral-900 sm:text-4xl">
            Boutique
          </h2>
          <p className="font-brody mx-auto mt-3 max-w-md text-neutral-500">
            Capes, particules, grades et cosmétiques pour personnaliser ton
            expérience sur le serveur.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </GradientBlurBg>
  );
}
