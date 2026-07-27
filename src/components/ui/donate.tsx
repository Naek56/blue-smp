"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   Donate — minimaliste et animé. Branche le vrai lien dans handleDonate.
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
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl"
      >
        Soutenir
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-4 max-w-sm text-base font-medium text-neutral-500"
      >
        BLUE SMP est gratuit. Ton don finance l'hébergement et les events.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
        }}
        className="mt-10 grid grid-cols-4 gap-2"
      >
        {AMOUNTS.map((a) => (
          <motion.button
            key={a}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAmount(a)}
            className={cn(
              "rounded-xl border py-3 text-lg font-bold transition-colors",
              amount === a
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 text-neutral-800 hover:border-neutral-400",
            )}
          >
            {a}€
          </motion.button>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.35 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDonate}
        className="mt-4 w-full rounded-xl bg-[#1f7aec] py-4 text-base font-bold tracking-tight text-white shadow-[0_12px_30px_rgba(31,122,236,0.35)] transition-colors hover:bg-[#1668d0]"
      >
        Faire un don de {amount}€
      </motion.button>
    </section>
  );
}

export default Donate;
