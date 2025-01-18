# Bienvenue sur site de la Fédération des étudiants de la Faculté Polytechnique de Mons 👋

![Version](https://img.shields.io/badge/version-186-blue.svg?cacheSeconds=2592000)

> Ce site a comme objectif la présentation des initiatives étudiantes en Polytech.

## 🏠 [Homepage](https://fede.fpms.ac.be)

![homepage](https://fede.fpms.ac.be/_astro/statue-fpms.3jdrzNsi_Zz6EXn.webp)

## ⚒️ Framework

#### 🌟 Astro

Ce site a été développer grâce à Astro, un framework permettant la génération de site statique. Pour plus d'information concernant Astro, veuillez consulter [leur documentation](https://docs.astro.build).

#### 🧞 Commandes utiles

Toutes les commandes sont a exécuter depuis la racine du dossier du projet depuis le terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npx @astrojs/upgrade`    | Update Astro and its dependencies                |

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── autres/
│   │   └── images/
│   │       ├── autres-initiatives-polytech/
│   │       ├── cercles/
│   │       ├── comités/
│   │       ├── commissions/
│   │       ├── grand-evenements/
│   │       ├── locaux/
│   │       ├── régionales/
│   │       ├── cercle-polytech.jpg
│   │       └── statue-fpms.jpg
│   ├── components/
│   │   ├── Comite.astro
│   │   ├── Footer.astro
│   │   ├── Grid.astro
│   │   ├── Links.astro
│   │   ├── Nav.astro
│   │   └── Video.astro
│   ├── icons/
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── LayoutCercle.astro
│   └── pages/
│       ├── a-propos/
│       │   └── index.astro
│       ├── autres-initiatives-polytech/
│       │   └── index.astro
│       ├── cercles&commissions/
│       │   ├── bar.astro
│       │   ├── cap.astro
│       │   ├── commission-historique.astro
│       │   ├── commission-web.astro
│       │   ├── cpv.astro
│       │   ├── ecomission.astro
│       │   ├── fpmaths.astro
│       │   ├── index.astro
│       │   ├── magellan.astro
│       │   ├── mons-mines.astro
│       │   ├── mutu.astro
│       │   ├── peyresq.astro
│       │   ├── q.astro
│       │   ├── radio-extra.astro
│       │   ├── scientifique.astro
│       │   ├── sdm.astro
│       │   └── sports.astro
│       ├── cite-houzeau/
│       │   └── index.astro
│       ├── devenir-membre/
│       │   └── index.astro
│       ├── folklore/
│       │   ├── boraine.astro
│       │   ├── carolo.astro
│       │   ├── centrale.astro
│       │   ├── frontaliere.astro
│       │   └── sports.astro
│       ├── grands-evenements/
│       │   └── index.astro
│       ├── 404.astro
│       └── index.astro
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Author

👤 **Commission web 186**

- Github: [@Hugo-Lorenzoni](https://github.com/Hugo-Lorenzoni)
