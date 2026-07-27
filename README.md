# BLUE SMP

Site web du serveur **Minecraft SMP « BLUE SMP »**. Fond animé (vague dégradée
WebGL bleu/blanc), navbar minimaliste, logo animé, et un système de dons stylé.
Police au style industriel façon **Neville Brody** (approximée avec *Chakra Petch*,
les polices originales de Neville Brody étant commerciales).

## Stack

`Vite` · `React` · `TypeScript` · `Tailwind CSS` · `framer-motion` · structure
**shadcn** (`@/` alias, `components/ui`, `lib/utils`) · `lucide-react`.

## Structure des composants

Le chemin par défaut des composants est **`src/components/ui`** (convention shadcn).
Ce dossier est important : la CLI shadcn (`npx shadcn@latest add ...`) y installe les
primitives, et l'alias `@/components/ui` garde les imports cohérents.

- `src/components/ui/gradient-wave.tsx` — fond animé WebGL (vague dégradée)
- `src/components/ui/navbar.tsx` — navbar pilule (Home / About / Contact / Login)
- `src/components/ui/donate.tsx` — système de dons animé (objectif, montants, paliers)
- `src/components/ui/image-card-fan.tsx` — éventail de cartes (réutilisable)
- `src/components/ui/gradient-blur-bg.tsx` — fond grille + dégradé (réutilisable)
- `src/lib/utils.ts` — helper `cn()` (clsx + tailwind-merge)
- `src/BlueSmp.tsx` — page d'accueil (fond animé + navbar + logo animé + dons)

## Logo

`public/blue-smp-logo.png` — logo du serveur, fond rendu transparent (trous blancs
des lettres inclus) pour s'intégrer sur n'importe quel fond.

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

---

Non affilié à Mojang / Microsoft.
