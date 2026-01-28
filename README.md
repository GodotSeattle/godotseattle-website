# Godot Seattle Website

This is the source code for the Godot Seattle website at https://godotseattle.club

It uses [Astro](https://astro.build/) and runs on a Cloudflare Worker.

Merges to the `main` branch are deployed automatically.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Installs dependencies                               |
| `npm run dev`             | Starts local dev server at `localhost:4321`         |
| `npm run build`           | Build your production site to `./dist/`             |
| `npm run preview`         | Preview your build locally, before deploying        |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`    |
| `npm run astro -- --help` | Get help using the Astro CLI                        |
| `npm run format`          | Format files using [Prettier](https://prettier.io/) |
