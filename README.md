# BLUE SMP

Site web du serveur **Minecraft SMP « BLUE SMP »**. Une landing page (page unique)
en **bleu & noir** avec un fond bleu dégradé glacé, pour présenter le serveur,
afficher l'IP de connexion et inviter les joueurs à rejoindre la communauté.

## Aperçu

- **Thème bleu & noir** uniquement, fond bleu dégradé (façon glace / logo)
- Polices **« Press Start 2P »** (pixel, façon Minecraft « Mojangles ») pour les
  titres et **« Fredoka »** (ronde, façon « Oddbods ») pour le texte
- Boutons et panneaux façon **blocs Minecraft** (ombres dures, reliefs pixel)
- Particules de neige bleues animées dans le hero
- Responsive (menu mobile inclus)

## Sections

1. **Hero** — logo BLUE SMP, IP à copier (Java + Bedrock), stats du serveur
2. **Le serveur** — pourquoi nous rejoindre (survie, économie, communauté, events…)
3. **Rejoindre** — 3 étapes pour se connecter
4. **FAQ** — questions fréquentes
5. **Footer** — IP, version, Discord

## ⚙️ À personnaliser

Ouvre `src/BlueSmp.tsx` et modifie les constantes en haut du fichier :

```ts
const SERVER_IP    = "play.bluesmp.net";           // ← ton IP réelle
const BEDROCK_PORT = "19132";                      // ← ton port Bedrock
const DISCORD_URL  = "https://discord.gg/bluesmp"; // ← ton lien Discord
const MC_VERSION   = "1.21+";                       // ← ta version Minecraft
```

**Logo :** dépose ton image dans `public/blue-smp-logo.png`. Si le fichier est
absent, un titre « BLUE SMP » en CSS s'affiche automatiquement à la place.

## Développement

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Stack

Vite · React · TypeScript · Tailwind CSS · lucide-react

---

Non affilié à Mojang / Microsoft.
