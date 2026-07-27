"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   Donate — version minimaliste. Branche le vrai lien dans handleDonate.
   ──────────────────────────────────────────────────────────────── */

const AMOUNTS = [5, 10, 20, 50] as const;

export function Donate({ className }: { className?: string }) {
  const [amount, setAmount] = useState<number>(10);

  function handleDonate() {
    // TODO: rediriger vers le vrai lien de paiement (Tipeee, PayPal, Stripe…)
    // window.location.href = `https://ton-lien-de-don?amount=${amount}`;
    alert(`Merci pour ton don de ${amount}€ ! (branche ton lien de paiement)`);
  }

  return (
    <section
      id="donate"
      className={cn(
        "mx-auto w-full max-w-md scroll-mt-24 px-6 pb-32 text-center",
        className,
      )}
    >
      <h2 className="text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
        Soutenir
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-base font-medium text-neutral-500">
        BLUE SMP est gratuit. Ton don finance l'hébergement et les events.
      </p>

      <div className="mt-10 grid grid-cols-4 gap-2">
        {AMOUNTS.map((a) => (
          <button
            key={a}
            onClick={() => setAmount(a)}
            className={cn(
              "rounded-xl border py-3 text-lg font-bold transition",
              amount === a
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 text-neutral-800 hover:border-neutral-400",
            )}
          >
            {a}€
          </button>
        ))}
      </div>

      <button
        onClick={handleDonate}
        className="mt-4 w-full rounded-xl bg-[#1f7aec] py-4 text-base font-bold tracking-tight text-white transition hover:bg-[#1668d0]"
      >
        Faire un don de {amount}€
      </button>
    </section>
  );
}

export default Donate;
