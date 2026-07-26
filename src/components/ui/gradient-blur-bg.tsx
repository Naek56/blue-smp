import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GradientBlurBgProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Fond blanc avec grille légère + dégradé radial bleu clair (haut-droite).
 * Le contenu passé en `children` est rendu au-dessus du fond.
 */
export const GradientBlurBg = ({ children, className }: GradientBlurBgProps) => {
  return (
    <div className={cn("relative min-h-screen w-full bg-white", className)}>
      {/* Purple Gradient Grid Right Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle 800px at 100% 200px, #bfe0ff, transparent)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />
      {/* Contenu au-dessus du fond */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBlurBg;
