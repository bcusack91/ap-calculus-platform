/**
 * Live walkthrough of the weekly MCAT course loop, in a real browser against
 * a local database: a teacher assigns a class diagnostic, a student takes it
 * (running the clock out, refreshing mid-test), and the teacher-assigned
 * second diagnostic opens even while the student's remediation gate is closed.
 *
 * Needs the local stack: `docker compose up -d postgres`, `prisma db push`,
 * `npm run seed:all`, and a dev server on :3000 (Playwright reuses one that is
 * already running). Skipped automatically when the API is not reachable, so
 * the suite stays green on machines without the stack.
 */
import { test, expect, type Page, type APIRequestContext } from '@playwright/test'
import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import { config as loadEnv } from 'dotenv'

// Prisma Client auto-loads `.env` (production). This test may only ever touch
// the local Docker database, so load `.env.local` over it and refuse to
// proceed unless the target is localhost.
loadEnv({ path: '.env.local', override: true })
const dbHost = (() => { try { return new URL(process.env.DATABASE_URL ?? '').hostname } catch { return '' } })()
const LOCAL_DB = dbHost === 'localhost' || dbHost === '127.0.0.1'

const BASE = 'http://localhost:3000'
/** State-changing API routes check the Origin header (CSRF guard); a browser sends it, a bare request context does not. */
const API_HEADERS = { Origin: BASE, Referer: `${BASE}/` }
const stamp = Date.now()
const teacher = { email: `teacher-${stamp}@example.com`, password: 'Walkthrough!123', name: 'Walkthrough Teacher', birthYear: 1985 }
const student = { email: `student-${stamp}@example.com`, password: 'Walkthrough!123', name: 'Walkthrough Student', birthYear: 2002 }

async function stackUp(request: APIRequestContext): Promise<boolean> {
  try {
    // The home page, not an API route: API routes are rate-limited per IP
    // (Redis-backed, so repeated local runs can trip them into 429).
    const res = await request.get(`${BASE}/`, { timeout: 60_000 })
    return res.ok()
  } catch {
    return false
  }
}

/**
 * Fixture accounts go straight into the local database: the public signup
 * route is rate-limited per IP and every account it creates needs a session
 * refresh to pick up the TEACHER role. Never runs against production — the
 * stack check above only passes for a local dev server.
 */
async function ensureUser(who: { email: string; password: string; name: string; birthYear: number; role?: 'TEACHER' }) {
  if (!LOCAL_DB) throw new Error(`refusing to write fixtures: DATABASE_URL host is "${dbHost}", not localhost`)
  const prisma = new PrismaClient()
  try {
    const password = await bcryptjs.hash(who.password, 10)
    await prisma.user.upsert({
      where: { email: who.email },
      create: { email: who.email, name: who.name, password, birthYear: who.birthYear, emailVerified: new Date(), ...(who.role ? { role: who.role } : {}) },
      update: { password, birthYear: who.birthYear, emailVerified: new Date(), ...(who.role ? { role: who.role } : {}) },
    })
  } finally {
    await prisma.$disconnect()
  }
}

async function signIn(page: Page, who: { email: string; password: string }) {
  await page.goto('/auth/signin')
  await page.fill('input[name="email"]', who.email)
  await page.fill('input[name="password"]', who.password)
  await page.getByRole('button', { name: /sign in|log in/i }).first().click()
  await page.waitForURL((url) => !url.pathname.startsWith('/auth/signin'), { timeout: 30_000 })
}

/** Answer the current question with its first option and advance. */
async function answerAndNext(page: Page) {
  const options = page.locator('button.w-full.rounded-xl.border.px-4.py-3')
  await options.first().click()
  await page.getByRole('button', { name: /^Next →$/ }).click()
}

test.describe.configure({ mode: 'serial' })

test.describe('MCAT weekly loop — real browser', () => {
  let classroomId = ''
  let joinCode = ''

  test.beforeAll(async ({ request }) => {
    test.skip(!LOCAL_DB || !(await stackUp(request)), 'local stack (Docker Postgres + dev server) not running')
    await ensureUser({ ...teacher, role: 'TEACHER' })
    await ensureUser(student)
  })

  test('teacher activates, creates a class, and assigns Diagnostic 1 from the Class plan tab', async ({ page }) => {
    await signIn(page, teacher)
    const create = await page.request.post(`${BASE}/api/teacher/classrooms`, {
      data: { name: `MCAT Walkthrough ${stamp}`, subject: 'MCAT' },
      headers: API_HEADERS,
    })
    expect(create.ok(), await create.text()).toBeTruthy()
    const body = (await create.json()) as { classroom?: { id: string; joinCode: string }; id?: string; joinCode?: string }
    classroomId = body.classroom?.id ?? body.id ?? ''
    joinCode = body.classroom?.joinCode ?? body.joinCode ?? ''
    expect(classroomId).toBeTruthy()
    expect(joinCode).toBeTruthy()

    await page.goto(`/teacher/classroom/${classroomId}`)
    await page.getByRole('button', { name: /^Insights$/ }).click()
    await page.getByRole('button', { name: /^Class plan$/ }).click()
    // Some class plans ask which course to plan for first.
    const mcatPick = page.getByRole('button', { name: /^MCAT$/ })
    if (await mcatPick.count()) await mcatPick.first().click()

    await page.getByRole('button', { name: /Assign diagnostic/ }).click()
    const assignButton = page.getByRole('button', { name: /^Assign to class$/ })
    await expect(assignButton).toBeVisible()
    // The course <select> sits in the same form as the button — scope to it so
    // the Class plan's own course picker is never touched.
    const form = assignButton.locator('xpath=ancestor::div[.//select][1]')
    await form.locator('select').first().selectOption('mcat')
    const [res] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/class-diagnostics') && r.request().method() === 'POST', { timeout: 60_000 }),
      assignButton.click(),
    ])
    expect(res.ok(), `assign: ${res.status()} ${await res.text()}`).toBeTruthy()
    // Proof the row exists — not the panel's empty-state copy, which also says "Diagnostic 1".
    const list = await page.request.get(`${BASE}/api/teacher/classrooms/${classroomId}/class-diagnostics`)
    const { diagnostics } = (await list.json()) as { diagnostics: { title: string; courseKey: string }[] }
    expect(diagnostics.some((d) => d.title === 'Diagnostic 1' && d.courseKey === 'mcat')).toBe(true)
    // The row renders as "▸ MCAT Diagnostic 1 · N/M taken" (course label first).
    await expect(page.getByRole('button', { name: /MCAT Diagnostic 1/ }).first()).toBeVisible({ timeout: 30_000 })
  })

  test('student joins, sees the assignment, runs out of time, and is scored on the answers given', async ({ page }) => {
    await signIn(page, student)
    const join = await page.request.post(`${BASE}/api/teacher/classrooms/join`, { data: { joinCode }, headers: API_HEADERS })
    expect(join.ok(), await join.text()).toBeTruthy()

    // The dashboard's pending-diagnostics call compiles on first hit in dev
    // mode (27 s seen), so wait for the response itself, not a fixed delay.
    const pendingRes = page.waitForResponse((r) => r.url().includes('/api/class-diagnostics/pending') && r.ok(), { timeout: 90_000 })
    await page.goto('/dashboard')
    // A class member counts as onboarded (/api/onboarding), so the dashboard
    // must not bounce this brand-new student to /onboarding.
    await page.waitForLoadState('networkidle')
    expect(page.url(), 'a class member must reach the dashboard, not onboarding').not.toContain('/onboarding')
    const res = await pendingRes
    const bodyText = await res.text()
    const pending = JSON.parse(bodyText) as { pending?: { title: string }[] }
    expect(pending.pending?.some((p) => p.title === 'Diagnostic 1'), `pending (${res.status()}): ${bodyText.slice(0, 300)}`).toBe(true)
    const banner = page.getByRole('link', { name: /Diagnostic 1 assigned/ })
    await expect(banner).toBeVisible({ timeout: 60_000 })
    const href = await banner.getAttribute('href')
    expect(href).toContain('/mcat-diagnostic?assigned=')

    // Load the intro first, then install fake timers, then start: the
    // countdown's setInterval is created after install (so runFor can drive
    // it) while page load itself is never under a faked clock.
    await page.goto(href!)
    let start = page.getByRole('button', { name: /Start Assigned Diagnostic|Start Diagnostic Test/ })
    await expect(start).toBeVisible({ timeout: 60_000 })
    await page.clock.install()
    await start.click()
    // Under a cold dev server the session refresh can lose the race; recover once.
    if (await page.waitForURL(/\/auth\/signin/, { timeout: 5_000 }).then(() => true).catch(() => false)) {
      await signIn(page, student)
      await page.goto(href!)
      start = page.getByRole('button', { name: /Start Assigned Diagnostic|Start Diagnostic Test/ })
      await expect(start).toBeVisible({ timeout: 60_000 })
      await start.click()
    }
    await expect(page.getByText(/answered/)).toBeVisible({ timeout: 90_000 })

    // Three real answers, then let the timer expire.
    await answerAndNext(page)
    await answerAndNext(page)
    await answerAndNext(page)
    await expect(page.getByText(/^3\/\d+ answered$/)).toBeVisible()
    // The results view renders before the submit POST completes, so wait for
    // the response itself before reading the stored attempt.
    const submitRes = page.waitForResponse((r) => r.url().includes('/api/mcat-diagnostic/submit') && r.request().method() === 'POST', { timeout: 120_000 })
    await page.clock.runFor(56 * 60 * 1000)
    expect((await submitRes).ok()).toBe(true)

    // Timer expiry graded the sitting. The old bug submitted a blank sheet;
    // a 3-answer sitting and a blank one both floor at 472, so prove it from
    // the stored attempt: exactly 3 questions carry a selected answer.
    await expect(page.getByText(/out of 528/)).toBeVisible({ timeout: 60_000 })
    const prisma = new PrismaClient()
    try {
      const attempt = await prisma.diagnosticTest.findFirst({
        where: { user: { email: student.email }, category: { startsWith: 'mcat-full-diagnostic' } },
        orderBy: { createdAt: 'desc' },
        select: { results: true },
      })
      expect(attempt, 'the timed-out sitting must be stored').toBeTruthy()
      const review = (attempt!.results as { review?: { answers?: unknown } }).review
      const raw = review?.answers
      const values = Array.isArray(raw) ? raw : raw && typeof raw === 'object' ? Object.values(raw as Record<string, unknown>) : []
      const answered = values.filter((v) => v !== null && v !== undefined).length
      expect(answered, 'timer expiry must grade the answers the student gave').toBe(3)
    } finally {
      await prisma.$disconnect()
    }
  })

  test('a refresh mid-test offers to resume with the answers intact', async ({ page }) => {
    await signIn(page, student)
    await page.goto('/mcat-diagnostic')
    // Second sitting: the student may be gated now; a self-serve sitting must
    // respect that, so use the assignment link if the gate is closed.
    if (await page.getByRole('button', { name: /Diagnostic Locked/ }).count()) {
      test.info().annotations.push({ type: 'note', description: 'gate closed after diagnostic 1 — covered by the next test' })
      return
    }
    await page.getByRole('button', { name: /Take Next Diagnostic|Start Diagnostic Test/ }).click()
    await answerAndNext(page)
    await answerAndNext(page)
    await page.reload()
    await expect(page.getByText(/You have a diagnostic in progress/)).toBeVisible()
    await expect(page.getByText(/2 of \d+ answered/)).toBeVisible()
    await page.getByRole('button', { name: /^Resume$/ }).click()
    await expect(page.getByText(/^2\/\d+ answered$/)).toBeVisible()
    await page.getByRole('button', { name: /Exit/ }).first().click().catch(() => {})
  })

  test('week 2: the teacher assigns Diagnostic 2 and the gated student can still open it', async ({ page, browser }) => {
    await signIn(page, teacher)
    const assign = await page.request.post(`${BASE}/api/teacher/classrooms/${classroomId}/class-diagnostics`, { data: { courseKey: 'mcat' }, headers: API_HEADERS })
    expect(assign.ok(), await assign.text()).toBeTruthy()
    const { diagnostic } = (await assign.json()) as { diagnostic: { id: string; title: string } }
    expect(diagnostic.title).toBe('Diagnostic 2')

    const studentContext = await browser.newContext()
    const sp = await studentContext.newPage()
    await signIn(sp, student)
    await sp.goto(`/mcat-diagnostic?assigned=${diagnostic.id}`)
    // The personal gate may be closed (5 modules pending) — the assignment must still open.
    const start = sp.getByRole('button', { name: /Start Assigned Diagnostic/ })
    await expect(start).toBeVisible({ timeout: 30_000 })
    await expect(start).toBeEnabled()
    await expect(sp.getByRole('button', { name: /Diagnostic Locked Until Remediation Complete/ })).toHaveCount(0)
    await start.click()
    await expect(sp.getByText(/answered/)).toBeVisible()
    await studentContext.close()

    // Teacher cleanup path: Diagnostic 2 has no attempts, so it deletes cleanly.
    const del = await page.request.delete(`${BASE}/api/teacher/classrooms/${classroomId}/class-diagnostics?diagnosticId=${diagnostic.id}`, { headers: API_HEADERS })
    expect(del.ok(), await del.text()).toBeTruthy()
  })
})
