import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * POST /api/teacher/classrooms/[id]/import-roster
 *
 * Bulk-roster students from pasted/uploaded CSV text. For each row we link an
 * existing account by email or pre-create a minimal account (no password, email
 * marked verified so the student can claim it via their school Google/Microsoft
 * login), then add them to the classroom.
 *
 * Body: { text: string }  — CSV/lines. Accepted shapes per line:
 *   email
 *   name,email   |   email,name   |   First,Last,email
 * The email is detected as the token containing "@"; the rest becomes the name.
 *
 * Never alters an existing account's role, name, or password — only adds
 * membership (and a class-scoped nickname).
 */

const MAX_ROWS = 300
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeName(raw: string): string {
  // Drop control characters (codepoint < 32) via a filter so no control bytes
  // appear in source; strip angle brackets/quotes, collapse whitespace, and cap
  // length. Roster labels are teacher-entered and surface in the gradebook.
  const noControl = Array.from(raw)
    .filter((ch) => ch.charCodeAt(0) >= 32)
    .join('')
  return noControl
    .replace(/[<>"']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60)
}

type ParsedRow = { email: string; name: string }

function parseRoster(text: string): { rows: ParsedRow[]; invalid: string[] } {
  const seen = new Set<string>()
  const rows: ParsedRow[] = []
  const invalid: string[] = []

  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  for (const line of lines) {
    const tokens = line.split(/[,\t;]/).map((t) => t.trim()).filter(Boolean)
    if (tokens.length === 0) continue

    // Skip an obvious header row ("name,email" with no "@").
    const looksLikeHeader =
      !line.includes('@') && /(^|[,\t;\s])e-?mail($|[,\t;\s])/i.test(line)
    if (looksLikeHeader) continue

    const emailToken = tokens.find((t) => t.includes('@'))
    if (!emailToken) {
      invalid.push(line)
      continue
    }
    const email = emailToken.toLowerCase()
    if (!EMAIL_RE.test(email)) {
      invalid.push(line)
      continue
    }
    if (seen.has(email)) continue
    seen.add(email)

    const nameRaw = tokens.filter((t) => t !== emailToken).join(' ')
    rows.push({ email, name: sanitizeName(nameRaw) })
  }

  return { rows, invalid }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const result = await requireClassroomAccess(classroomId)
    if ('error' in result && result.error) return result.error

    const body = await req.json().catch(() => null)
    const text: unknown = body?.text
    if (typeof text !== 'string' || !text.trim()) {
      return NextResponse.json({ error: 'No roster text provided' }, { status: 400 })
    }

    const { rows, invalid } = parseRoster(text)
    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'No valid email addresses found', invalid },
        { status: 400 }
      )
    }
    if (rows.length > MAX_ROWS) {
      return NextResponse.json(
        { error: `Too many rows (${rows.length}). Import at most ${MAX_ROWS} at a time.` },
        { status: 400 }
      )
    }

    const emails = rows.map((r) => r.email)
    const nameByEmail = new Map(rows.map((r) => [r.email, r.name]))

    // Existing accounts for these emails.
    const existing = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { id: true, email: true },
    })
    const existingEmails = new Set(existing.map((u) => u.email!.toLowerCase()))
    const newEmails = emails.filter((e) => !existingEmails.has(e))

    // Pre-create minimal accounts for new emails. emailVerified is set so the
    // student can sign in via their school Google/Microsoft account (the OAuth
    // link check requires a verified email). No password is set, so credentials
    // sign-in stays disabled until they set one.
    let createdCount = 0
    if (newEmails.length > 0) {
      const now = new Date()
      const created = await prisma.user.createMany({
        data: newEmails.map((email) => ({
          email,
          name: nameByEmail.get(email) || 'Student',
          role: 'FREE' as const,
          emailVerified: now,
        })),
        skipDuplicates: true,
      })
      createdCount = created.count

      // Mirror signup: give each new account a LearningPath.
      const newUsers = await prisma.user.findMany({
        where: { email: { in: newEmails } },
        select: { id: true },
      })
      if (newUsers.length > 0) {
        await prisma.learningPath.createMany({
          data: newUsers.map((u) => ({ userId: u.id })),
          skipDuplicates: true,
        })
      }
    }

    // Resolve every email to a user id (existing + newly created).
    const allUsers = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { id: true, email: true },
    })

    // Current memberships in THIS classroom for these users.
    const userIds = allUsers.map((u) => u.id)
    const currentMembers = await prisma.classroomMember.findMany({
      where: { classroomId, userId: { in: userIds } },
      select: { userId: true, isActive: true },
    })
    const memberByUser = new Map(currentMembers.map((m) => [m.userId, m]))

    let added = 0
    let reactivated = 0
    let alreadyMembers = 0

    const toCreate: { classroomId: string; userId: string; nickname: string | null }[] = []
    const toReactivate: string[] = []

    for (const u of allUsers) {
      const nickname = nameByEmail.get(u.email!.toLowerCase()) || null
      const m = memberByUser.get(u.id)
      if (!m) {
        toCreate.push({ classroomId, userId: u.id, nickname })
        added++
      } else if (!m.isActive) {
        toReactivate.push(u.id)
        reactivated++
      } else {
        alreadyMembers++
      }
    }

    if (toCreate.length > 0) {
      await prisma.classroomMember.createMany({ data: toCreate, skipDuplicates: true })
    }
    if (toReactivate.length > 0) {
      await prisma.classroomMember.updateMany({
        where: { classroomId, userId: { in: toReactivate } },
        data: { isActive: true },
      })
    }

    return NextResponse.json({
      success: true,
      summary: {
        totalRows: rows.length,
        added,
        reactivated,
        alreadyMembers,
        newAccounts: createdCount,
        invalid,
      },
    })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/import-roster]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
