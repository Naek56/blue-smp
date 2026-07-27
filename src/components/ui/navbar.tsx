import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Donation", href: "#donate" },
];

/** Navbar minimaliste : liens en gras + bouton de don. Scroll fluide via ancres. */
export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-sm font-bold tracking-tight text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#donate"
        className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-bold tracking-tight text-white transition hover:bg-neutral-700"
      >
        Faire un don
      </a>
    </nav>
  );
};

export default Navbar;
