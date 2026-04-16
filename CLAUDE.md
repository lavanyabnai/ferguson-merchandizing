# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # ESLint + TypeScript check

pnpm test:run     # Run all unit tests (Vitest, no watch)
pnpm test:watch   # Run unit tests in watch mode
pnpm test:coverage # Run unit tests with coverage report
pnpm test:e2e     # Run Playwright E2E tests

pnpm db:generate  # Generate Drizzle migration files
pnpm db:migrate   # Apply pending migrations
pnpm db:studio    # Open Drizzle Studio (DB GUI)
```

To run a single test file:
```bash
pnpm vitest run tests/path/to/file.test.ts
```

Environment: requires `POSTGRES_URL` in `.env.local` (PostgreSQL/Neon connection string).

## Architecture

This is a **Next.js 16 / React 19 merchandizing optimization platform** with a supply chain focus. The primary working area is the `(inventory)` route group.

### Request Flow

```
Browser → Next.js App Router → /app/api/[[...route]]/route.ts (Hono gateway)
                                    ↓
                              /app/api/[[...route]]/<entity>.ts (Hono sub-routers)
                                    ↓
                              Drizzle ORM → PostgreSQL (Neon)
```

The single Hono app in [app/api/[[...route]]/route.ts](app/api/%5B%5B...route%5D%5D/route.ts) registers 60+ entity routers and exports `GET`, `POST`, `PATCH`, `DELETE` handlers for Next.js. Each entity file (e.g. `customers.ts`) defines CRUD routes validated with Zod via `@hono/zod-validator`.

### Key Directories

| Path | Purpose |
|------|---------|
| `app/(inventory)/` | Main authenticated route group — all merchandizing pages live here |
| `app/(inventory)/merchandizing-optimizer/` | Core optimizer: scenarios, simulation, optimization, planogram, CDT analysis, SKU optimizer, space allocation |
| `app/api/[[...route]]/` | Hono API gateway + all entity route files |
| `components/` | Shared React components: `datatable/`, `flow/`, `map/`, `snop/`, `risk/`, `ui/` (shadcn) |
| `db/schema.ts` | Single Drizzle schema file defining all 60+ database tables |
| `lib/drizzle/` | Generated migration files (output of `db:generate`) |
| `features/` | Feature-specific code (assortment, snop, etc.) — each may have `api/`, `components/`, `hooks/`, `store/`, `types/` sub-folders |
| `hooks/` | Shared custom React hooks |
| `providers/` | Context providers (QueryProvider, SheetProvider, etc.) |
| `app/data/` | Static seed/mock data files (CSV, JS, JSX) used across components |

### Data Grid Pattern

Heavy use of **Ag-Grid Enterprise** (`ag-grid-enterprise`, `ag-grid-react`) and **Kendo React Grid** (`@progress/kendo-react-grid`) for complex tabular data. Most data tables in `components/datatable/` wrap these. The file [app/kendo.css](app/kendo.css) applies Kendo theme overrides globally.

### State Management

- **Server state**: TanStack React Query v5 (fetching/caching API data)
- **Client/UI state**: Jotai (atoms) and Zustand (stores)
- **Forms**: React Hook Form + Zod resolvers

### Assortment Optimizer Microservice

The assortment optimizer (`app/(inventory)/merchandizing-optimizer/`) is designed as a **separate microservice** (see `ASSORTMENT_OPTIMIZER_MICROSERVICE_PLAN.md`). The Next.js app proxies requests to it via `/api/assortment/*`. The React frontend communicates through this gateway — never directly to the microservice.

### Testing

- **Unit tests**: Vitest + React Testing Library, files in `tests/` — 70% coverage thresholds enforced on `features/`, `components/`, `lib/`
- **E2E tests**: Playwright in `e2e/`, runs against Chrome/Firefox/Safari
- **Accessibility**: `@axe-core/react` + `vitest-axe` used in accessibility test files
- Mock Service Worker (`msw`) is available for API mocking in tests

### Path Aliases

`@/` maps to the repo root. Import as `import { foo } from '@/lib/utils'`.
