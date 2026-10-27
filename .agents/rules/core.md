---
trigger: always_on
---

# MYTEC PBX - Arquitectura Core (Manifiesto)

## 1. Topología del Monorepo

Gestor estricto: `pnpm`. Cero dependencias fantasma.

📁 Raíz
├── pnpm-workspace.yaml
├── package.json (Scripts orquestadores)
├── 📁 apps
│ ├── 📁 api (Hono.js - Endpoint SIP/XML)
│ └── 📁 web (Astro + Svelte - Panel Administrativo)
└── 📁 packages
└── 📁 db (Drizzle ORM + PostgreSQL)

## 2. Definición del Workspace (`pnpm-workspace.yaml`)

```yaml
packages:
  - "apps/*"
  - "packages/*"
```
