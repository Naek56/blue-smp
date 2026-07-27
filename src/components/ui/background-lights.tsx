import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   BackgroundLights — fond minimaliste : blanc + une lueur bleue très
   douce en haut. Sobre et léger.
   ──────────────────────────────────────────────────────────────── */
export function BackgroundLights({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 bg-white", className)}
    >
      <div
        className="absolute inset-x-0 top-0 h-[55vh]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(191,224,255,0.5), transparent 70%)",
        }}
      />
    </div>
  );
}

export default BackgroundLights;
