# Berhe

Personal full-stack developer portfolio for Berhe Arbsie — built with React, TypeScript, Vite, Feature-Sliced Design, NestJS, and Docker.

## Structure

```
Berhe/
├── src/                 # Frontend (FSD)
│   ├── app/             # App shell, styles, providers
│   ├── pages/           # Route-level pages
│   ├── widgets/         # Composed sections
│   ├── features/        # Command palette, section observer
│   ├── content/         # Editable content (projects, experience, skills…)
│   └── shared/          # UI, hooks, config, types
├── server/              # NestJS contact API
├── docker-compose.yml
└── public/
```

## Frontend

```bash
npm install
npm run dev
```

## Backend (optional contact API)

```bash
npm run server:install
npm run server:dev
```

## Build

```bash
npm run build
```
