import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   BackgroundLights — fond clair premium : aurores bleutées floutées
   + rayons de lumière verticaux. 100% CSS, léger et fluide (pas de WebGL).
   ──────────────────────────────────────────────────────────────── */

interface Blob {
  className: string;
  color: string;
  size: number;
  anim: string;
}

const BLOBS: Blob[] = [
  { className: "left-[-8%] top-[-10%]", color: "#7ec8ff", size: 620, anim: "auroraA 18s ease-in-out infinite" },
  { className: "right-[-10%] top-[-6%]", color: "#a9d4ff", size: 560, anim: "auroraB 22s ease-in-out infinite" },
  { className: "left-[30%] top-[18%]", color: "#b9b0ff", size: 520, anim: "auroraA 26s ease-in-out infinite 2s" },
  { className: "right-[18%] bottom-[-12%]", color: "#8fd0ff", size: 600, anim: "auroraB 20s ease-in-out infinite 1s" },
];

const STREAKS = [
  { left: "14%", width: 170, rotate: 14, color: "#bcd8ff", opacity: 0.5, duration: 16, delay: 0 },
  { left: "44%", width: 210, rotate: -9, color: "#cfe0ff", opacity: 0.45, duration: 19, delay: 1.5 },
  { left: "70%", width: 180, rotate: 12, color: "#a9c8ff", opacity: 0.5, duration: 17, delay: 0.8 },
];

export function BackgroundLights({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f3f8ff 55%, #eaf3ff 100%)",
      }}
    >
      {/* aurores floutées qui dérivent doucement */}
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className={cn("absolute rounded-full", b.className)}
          style={{
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at center, ${b.color}, transparent 70%)`,
            filter: "blur(90px)",
            opacity: 0.55,
            animation: b.anim,
          }}
        />
      ))}

      {/* rayons de lumière verticaux flous */}
      {STREAKS.map((s, i) => (
        <div
          key={`s-${i}`}
          className="absolute -top-[20%] h-[140%]"
          style={{ left: s.left, width: s.width, transform: `rotate(${s.rotate}deg)` }}
        >
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
              filter: "blur(60px)",
              opacity: s.opacity,
              animation: `lightdrift ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        </div>
      ))}

      {/* lueur douce en haut */}
      <div
        className="absolute -top-1/4 left-1/2 h-[60%] w-[110%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.7), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* voile léger pour garder le texte lisible */}
      <div className="absolute inset-0 bg-white/25" />
    </div>
  );
}

export default BackgroundLights;
