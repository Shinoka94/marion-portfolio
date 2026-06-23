# Marion Ziebel — Portfolio UI/UX Design

Portfolio personnel de Marion Ziebel, graphiste spécialisée en UI design, diplômée du Master UX-UI de l'EFREI Paris (Promo 2026). Site conçu pour présenter ses travaux et sa démarche à des recruteurs en vue d'un premier CDI.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | React 19 + TypeScript |
| Routing | Wouter |
| Styles | Tailwind CSS 4 + CSS variables |
| Animations | Framer Motion |
| Composants UI | shadcn/ui (Radix UI) |
| Build | Vite 7 |
| Gestion des paquets | pnpm |

---

## Lancer le projet en local

### Prérequis

- Node.js ≥ 18
- pnpm (`npm install -g pnpm`)

### Installation

```bash
git clone https://github.com/Shinoka94/marion-portfolio.git
cd marion-portfolio
pnpm install
```

### Développement

```bash
pnpm dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
pnpm build
```

Les fichiers compilés sont générés dans `dist/`.

### Vérification TypeScript

```bash
pnpm check
```

---

## Structure du projet

```
client/
  public/           ← Fichiers statiques (favicon, robots.txt)
  src/
    components/     ← Composants réutilisables (Header, Footer, Monogram, motion…)
    sections/       ← Sections de la page d'accueil (Hero, Stats, Works, About, Process, Contact)
    pages/          ← Pages (Home, NotFound)
    lib/
      data.ts       ← Toutes les données du portfolio (projets, compétences, expériences…)
    index.css       ← Tokens de design (palette, typographies, variables CSS)
  index.html        ← Point d'entrée HTML (polices Google Fonts incluses ici)
server/             ← Serveur Express minimal (placeholder)
shared/             ← Types partagés
```

---

## Personnalisation rapide

### Modifier les données (textes, projets, expériences)

Tout le contenu est centralisé dans **`client/src/lib/data.ts`**. Modifiez ce fichier pour :

- Changer vos coordonnées (`CONTACT`)
- Ajouter / modifier des projets (`PROJECTS`)
- Mettre à jour votre parcours (`TIMELINE`, `EXPERIENCE`)
- Adapter vos compétences (`SKILLS`)

### Changer la palette de couleurs

Les couleurs sont définies comme variables CSS dans **`client/src/index.css`** :

```css
--plum:       #3E222D;   /* Bordeaux/prune — couleur principale */
--teal:       #3E87A9;   /* Bleu sarcelle — accent secondaire */
--orange:     #FF673B;   /* Orange vif — highlights */
--paper:      #F5F3EE;   /* Fond crème papier */
--ink:        #1F1B1A;   /* Texte principal */
```

### Activer les liens LinkedIn / Behance / CV

Dans `client/src/lib/data.ts`, renseignez les champs suivants :

```ts
export const CONTACT = {
  email: "votre@email.com",
  phone: "06 XX XX XX XX",
  linkedin: "https://linkedin.com/in/votre-profil",
  behance: "https://behance.net/votre-profil",
  cvUrl: "/cv-marion-ziebel.pdf",  // Placez le PDF dans client/public/
  // ...
};
```

### Remplacer le portrait illustré

Remplacez l'URL dans `ASSETS.portrait` (dans `data.ts`) par l'URL de votre vraie photo (uploadée via `manus-upload-file --webdev` ou hébergée ailleurs).


```bash
pnpm build
# Déployez le dossier dist/public/
```

---

## Identité graphique

Le site reprend fidèlement les codes graphiques du CV et de l'étude de cas ASCUA :

- **Typographies** : Fraunces (display serif, titres) + Archivo (grotesque, corps)
- **Palette** : Bordeaux/prune, bleu sarcelle, orange vif, fond crème papier
- **Motifs** : Arabesques pointillées, stickers soft-skills, monogramme MZ
- **Ton** : Éditorial, premium, orienté recruteurs UI/UX

---

## Licence

Projet personnel — tous droits réservés © Marion Ziebel 2026.
