import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   BackgroundLights — fond blanc avec de douces "lumières" floutées
   (rayons verticaux en bleu). 100% CSS, léger et fluide (pas de WebGL).
   ──────────────────────────────────────────────────────────────── */

interface Streak {
  left: string;
  width: number;
  rotate: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
}

const STREAKS: Streak[] = [
  { left: "6%", width: 190, rotate: 14, color: "#bcd8ff", opacity: 0.55, duration: 15, delay: 0 },
  { left: "22%", width: 150, rotate: -10, color: "#9fc6ff", opacity: 0.45, duration: 19, delay: 2 },
  { left: "40%", width: 240, rotate: 8, color: "#d3e6ff", opacity: 0.5, duration: 17, delay: 1 },
  { left: "58%", width: 170, rotate: -13, color: "#b9b0ff", opacity: 0.4, duration: 21, delay: 3 },
  { left: "74%", width: 210, rotate: 11, color: "#8fd0ff", opacity: 0.5, duration: 16, delay: 1.5 },
  { left: "88%", width: 160, rotate: -8, color: "#c8d9ff", opacity: 0.45, duration: 20, delay: 2.5 },
];

export function BackgroundLights({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-white",
        className,
      )}
    >
      {/* lueur douce en haut */}
      <div
        className="absolute -top-1/4 left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(190,216,255,0.55), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* rayons de lumière verticaux et flous */}
      {STREAKS.map((s, i) => (
        <div
          key={i}
          className="absolute -top-[20%] h-[140%]"
          style={{ left: s.left, width: s.width, transform: `rotate(${s.rotate}deg)` }}
        >
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
              filter: "blur(70px)",
              opacity: s.opacity,
              animation: `lightdrift ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        </div>
      ))}

      {/* léger voile pour uniformiser et garder le texte lisible */}
      <div className="absolute inset-0 bg-white/30" />
    </div>
  );
}

export default BackgroundLights;
