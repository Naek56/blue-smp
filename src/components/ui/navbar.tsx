import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

/**
 * Navbar minimaliste : pilule blanche flottante, liens + bouton Login.
 * Style volontairement simple (cf. maquette).
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
          className="font-brody rounded-full px-4 py-2 text-sm font-medium tracking-wide text-neutral-600 transition-colors hover:text-neutral-900"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#"
        className="font-brody ml-1 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-neutral-900 shadow-sm transition hover:border-black/20 hover:shadow-md"
      >
        Login
      </a>
    </nav>
  );
};

export default Navbar;
