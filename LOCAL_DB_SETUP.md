# Local Development Database Setup

This project uses a local PostgreSQL database for development to avoid using Neon compute hours.

## Prerequisites

- Docker Desktop installed (https://www.docker.com/products/docker-desktop/)

## Setup Steps

### 1. Start the local database

```bash
docker-compose up -d
```

This starts a PostgreSQL database in Docker accessible at `localhost:5432`.

### 2. Push the schema to your local database

```bash
npx prisma db push
```

This creates all the tables in your local database without running migrations.

### 3. (Optional) Seed with data

```bash
npm run seed
# Or seed specific content
npm run seed:courses
```

### 4. Start the dev server

```bash
npm run dev
```

Your app will now use the local database instead of Neon!

## Commands

- **Start database:** `docker-compose up -d`
- **Stop database:** `docker-compose down`
- **View database:** `npx prisma studio`
- **Reset database:** `docker-compose down -v` (deletes all data)
- **Check database logs:** `docker logs studymondo-dev-db`

## How it works

- `.env` contains your production Neon credentials (for Vercel deployments)
- `.env.local` overrides with local PostgreSQL (for local development)
- Next.js automatically prefers `.env.local` when running `npm run dev`
- Docker Compose runs a PostgreSQL database in a container

## Switching back to Neon

Just delete or rename `.env.local` and the app will use `.env` (Neon).

## Benefits

✅ No Neon compute hours used during development  
✅ Faster queries (local database)  
✅ Can test database changes without affecting production  
✅ Works offline  
