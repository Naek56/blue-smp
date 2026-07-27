import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Donation", href: "#donate" },
];

/**
 * Navbar minimaliste et fonctionnelle : pilule blanche flottante.
 * Les liens défilent en douceur vers les sections (ancres + scroll-behavior).
 */
export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "mx-auto flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md",
        className,
      )}
    >
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="font-brody rounded-full px-5 py-2 text-sm font-medium tracking-wide text-neutral-600 transition-colors hover:text-neutral-900"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#donate"
        className="font-brody ml-1 rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-neutral-700"
      >
        Faire un don
      </a>
    </nav>
  );
};

export default Navbar;
