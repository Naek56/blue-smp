"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Check, Star, Crown, Gem, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   Donate — système de dons animé et stylé pour BLUE SMP.
   ⚠️ Branche le vrai lien de paiement dans `handleDonate`.
   ──────────────────────────────────────────────────────────────── */

const AMOUNTS = [5, 10, 20, 50] as const;
const GOAL = 250; // objectif mensuel (€)
const RAISED = 180; // déjà récolté (€)

const TIERS = [
  {
    id: "supporter",
    name: "Supporter",
    price: 5,
    icon: Star,
    perks: ["Rôle Discord Supporter", "Couleur de pseudo", "Merci en jeu"],
    popular: false,
  },
  {
    id: "vip",
    name: "VIP",
    price: 15,
    icon: Crown,
    perks: [
      "Tous les avantages Supporter",
      "Kit VIP exclusif",
      "Accès /hat & /nick",
      "File d'attente prioritaire",
    ],
    popular: true,
  },
  {
    id: "legende",
    name: "Légende",
    price: 30,
    icon: Gem,
    perks: [
      "Tous les avantages VIP",
      "Particules exclusives",
      "Pet cosmétique unique",
      "Badge Légende à vie",
    ],
    popular: false,
  },
];

export function Donate({ className }: { className?: string }) {
  const [amount, setAmount] = useState<number>(10);
  const [custom, setCustom] = useState("");

  const value = custom ? Number(custom) || 0 : amount;
  const progress = Math.min(100, Math.round((RAISED / GOAL) * 100));

  function handleDonate() {
    // TODO: rediriger vers le vrai lien de paiement (Tipeee, PayPal, Stripe…)
    // window.location.href = `https://ton-lien-de-don?amount=${value}`;
    alert(`Merci pour ton soutien de ${value}€ ! (branche ton lien de paiement)`);
  }

  return (
    <section
      id="donate"
      className={cn("relative mx-auto w-full max-w-6xl px-6 pb-28", className)}
    >
      {/* halo lumineux pulsant derrière le panneau */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3f8cff]/25 blur-[120px]"
        style={{ animation: "glowpulse 5s ease-in-out infinite" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_rgba(30,80,160,0.18)] backdrop-blur-xl sm:p-12"
      >
        {/* liseré dégradé animé en haut */}
        <div className="animate-shimmer absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#3f8cff] to-transparent" />

        <div className="mb-10 text-center">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7ec8ff] to-[#1e6fd6] text-white shadow-lg"
          >
            <Heart className="h-8 w-8" fill="currentColor" />
          </motion.span>
          <h2 className="font-brody text-3xl font-bold uppercase tracking-wide text-neutral-900 sm:text-4xl">
            Soutenir le serveur
          </h2>
          <p className="font-brody mx-auto mt-3 max-w-lg text-neutral-600">
            BLUE SMP est gratuit et le restera. Ton don finance l'hébergement,
            les events et de nouveaux contenus. Merci&nbsp;! 💙
          </p>
        </div>

        {/* barre d'objectif animée */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="font-brody mb-2 flex items-center justify-between text-sm font-semibold text-neutral-700">
            <span>Objectif du mois</span>
            <span className="text-[#2f7ae0]">
              {RAISED}€ / {GOAL}€
            </span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full border border-black/5 bg-white/70">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="animate-shimmer h-full rounded-full bg-gradient-to-r from-[#7ec8ff] via-[#3f8cff] to-[#1e6fd6]"
            />
          </div>
        </div>

        {/* sélecteur de montant + bouton */}
        <div className="mx-auto mb-14 max-w-2xl">
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {AMOUNTS.map((a) => {
              const active = !custom && amount === a;
              return (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={cn(
                    "font-brody relative rounded-xl border px-4 py-3 text-lg font-bold transition",
                    active
                      ? "border-[#3f8cff] bg-[#3f8cff] text-white shadow-[0_8px_24px_rgba(63,140,255,0.4)]"
                      : "border-black/10 bg-white/70 text-neutral-800 hover:border-[#3f8cff]/50 hover:bg-white",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="amount-glow"
                      className="absolute inset-0 -z-10 rounded-xl bg-[#3f8cff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {a}€
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span className="font-brody pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                €
              </span>
              <input
                inputMode="numeric"
                placeholder="Autre montant"
                value={custom}
                onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
                className="font-brody w-full rounded-xl border border-black/10 bg-white/70 py-3 pl-8 pr-4 text-lg font-semibold text-neutral-800 outline-none transition focus:border-[#3f8cff] focus:ring-2 focus:ring-[#3f8cff]/30"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDonate}
              className="group relative overflow-hidden rounded-xl px-8 py-3 shadow-[0_12px_30px_rgba(63,140,255,0.45)]"
            >
              <span className="animate-shimmer absolute inset-0 bg-gradient-to-r from-[#1e6fd6] via-[#7ec8ff] to-[#1e6fd6]" />
              <span className="font-brody relative flex items-center justify-center gap-2 text-base font-bold uppercase tracking-widest text-white">
                <Heart className="h-4 w-4" fill="currentColor" />
                Faire un don de {value}€
              </span>
            </motion.button>
          </div>
        </div>

        {/* paliers */}
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 transition-shadow",
                  tier.popular
                    ? "border-[#3f8cff] bg-white/85 shadow-[0_20px_50px_rgba(63,140,255,0.28)]"
                    : "border-black/10 bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_44px_rgba(63,140,255,0.18)]",
                )}
              >
                {tier.popular && (
                  <span className="font-brody absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#3f8cff] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
                    <Sparkles className="h-3 w-3" /> Populaire
                  </span>
                )}

                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    tier.popular
                      ? "bg-gradient-to-br from-[#7ec8ff] to-[#1e6fd6] text-white"
                      : "bg-[#eaf4ff] text-[#3f8cff]",
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-brody text-xl font-bold text-neutral-900">
                  {tier.name}
                </h3>
                <p className="font-brody mb-4 mt-1">
                  <span className="text-3xl font-bold text-[#2f7ae0]">
                    {tier.price}€
                  </span>
                  <span className="text-sm text-neutral-400"> / unique</span>
                </p>

                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="font-brody flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3f8cff]" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setAmount(tier.price);
                    setCustom("");
                    handleDonate();
                  }}
                  className={cn(
                    "font-brody rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition",
                    tier.popular
                      ? "bg-[#3f8cff] text-white hover:bg-[#2f7ae0]"
                      : "border border-[#3f8cff]/40 text-[#2f7ae0] hover:bg-[#eaf4ff]",
                  )}
                >
                  Choisir
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Donate;
