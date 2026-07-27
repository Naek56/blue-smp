import GradientBlurBg from "@/components/ui/gradient-blur-bg";
import Navbar from "@/components/ui/navbar";
import { ImageCardFan, type FanCardItem } from "@/components/ui/image-card-fan";

/* ────────────────────────────────────────────────────────────────
   BLUE SMP — page d'accueil (version épurée, à étoffer ensuite).
   Fond : grille blanche + dégradé bleu clair · Police : façon Neville Brody.
   ──────────────────────────────────────────────────────────────── */

/* Produits / cosmétiques — placeholders sans photo pour l'instant.
   Remplace `src` par les vraies images quand elles seront prêtes. */
const PRODUCTS: FanCardItem[] = [
  {
    id: "cape",
    src: "/products/cape.svg",
    title: "Cape Givrée",
    description:
      "Une cape aux reflets de glace qui flotte dans ton dos. Cosmétique visible par tous les joueurs.",
  },
  {
    id: "grade",
    src: "/products/grade.svg",
    title: "Grade VIP",
    description:
      "Un rang exclusif avec tag coloré, accès prioritaire et avantages en jeu.",
  },
  {
    id: "particules",
    src: "/products/particules.svg",
    title: "Particules Neige",
    description:
      "Un halo de flocons qui te suit partout où tu vas sur le serveur.",
  },
  {
    id: "aura",
    src: "/products/aura.svg",
    title: "Aura Glacée",
    description:
      "Une aura lumineuse bleutée autour de ton personnage. L'effet le plus premium.",
  },
  {
    id: "pack",
    src: "/products/pack.svg",
    title: "Pack Hiver",
    description:
      "Un lot regroupant cape, particules et aura à prix réduit. Édition limitée.",
  },
];

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

      {/* Section produits / boutique — éventail de cartes */}
      <section id="boutique" className="mx-auto w-full max-w-6xl px-6 pb-28">
        <div className="mb-12 text-center">
          <h2 className="font-brody text-3xl font-bold uppercase tracking-wide text-neutral-900 sm:text-4xl">
            Boutique
          </h2>
          <p className="font-brody mx-auto mt-3 max-w-md text-neutral-500">
            Capes, particules, grades et cosmétiques pour personnaliser ton
            expérience. Survole ou clique une carte pour la révéler.
          </p>
        </div>

        <ImageCardFan cards={PRODUCTS} className="mx-auto max-w-5xl" />
      </section>
    </GradientBlurBg>
  );
}
