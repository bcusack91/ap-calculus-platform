# Contributing to Study Mondo

Thank you for your interest in contributing! This guide will help you get started.

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-org/study-mondo.git
   cd study-mondo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   See [QUICKSTART.md](QUICKSTART.md) for details on required variables.

4. **Set up the database**
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. **Start the dev server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching

- `main` — production branch; all PRs merge here
- Feature branches: `feat/<description>`
- Bug fixes: `fix/<description>`
- Chores/refactors: `chore/<description>`

### Code Style

- TypeScript strict mode
- Tailwind CSS v4 for styling
- Functional components with hooks
- Named exports preferred
- `@/` path alias for `src/`

### Testing

```bash
# Unit tests (Vitest)
npm test

# Type checking
npm run typecheck

# Linting
npm run lint

# E2E tests (Playwright)
npm run test:e2e
```

All PRs must pass CI (lint, typecheck, unit tests, build).

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add flashcard spaced repetition
fix: correct score calculation in competitive mode
chore: update dependencies
docs: improve README setup instructions
test: add rate-limit unit tests
```

## Project Structure

```
src/
  app/           # Next.js App Router pages and API routes
  components/    # React components
  lib/           # Shared utilities, auth config, email, etc.
  hooks/         # Custom React hooks
  data/          # Interactive lesson data and exit quizzes
  types/         # TypeScript type definitions
tests/
  lib/           # Unit tests (Vitest)
  e2e/           # E2E tests (Playwright)
prisma/
  schema.prisma  # Database schema
  seed.ts        # Database seeding
```

## Pull Request Checklist

- [ ] Tests pass locally (`npm test`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No lint errors (`npm run lint`)
- [ ] Meaningful commit messages
- [ ] Updated documentation if needed

## Reporting Issues

Open a GitHub issue with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
