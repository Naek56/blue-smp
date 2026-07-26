# BLUE SMP

Site web du serveur **Minecraft SMP « BLUE SMP »**. Base épurée : fond blanc avec
grille légère + dégradé violet, navbar minimaliste, logo du serveur, et une police
au style industriel façon **Neville Brody** (approximée avec *Chakra Petch*, les
polices originales de Neville Brody étant commerciales).

## Stack

`Vite` · `React` · `TypeScript` · `Tailwind CSS` · structure **shadcn** (`@/` alias,
`components/ui`, `lib/utils`) · `lucide-react`.

## Structure des composants

Le chemin par défaut des composants est **`src/components/ui`** (convention shadcn).
Ce dossier est important : la CLI shadcn (`npx shadcn@latest add ...`) y installe les
primitives, et l'alias `@/components/ui` garde les imports cohérents.

- `src/components/ui/gradient-blur-bg.tsx` — fond blanc + grille + dégradé violet
- `src/components/ui/navbar.tsx` — navbar pilule (Home / About / Contact / Login)
- `src/lib/utils.ts` — helper `cn()` (clsx + tailwind-merge)
- `src/BlueSmp.tsx` — page d'accueil (assemble le fond, la navbar et le logo)

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
