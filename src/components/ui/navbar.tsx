import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Donation", href: "#donate" },
];

/** Navbar pilule flottante (animée). Scroll fluide via ancres. */
export const Navbar = ({ className }: { className?: string }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mx-auto flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md",
        className,
      )}
    >
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="rounded-full px-5 py-2 text-sm font-bold tracking-tight text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {l.label}
        </a>
      ))}
      <motion.a
        href="#donate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-bold tracking-tight text-white shadow-sm transition-colors hover:bg-neutral-700"
      >
        Faire un don
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
