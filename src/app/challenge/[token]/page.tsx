import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { getDiagnosticLabel, getDiagnosticRoute } from '@/lib/diagnostic-challenge-utils'

export default async function ChallengePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  const [challenge, session] = await Promise.all([
    prisma.diagnosticChallenge.findUnique({
      where: { token },
      include: {
        entries: true,
      },
    }),
    auth(),
  ])

  if (!challenge) {
    notFound()
  }

  // Privacy gate: participants_only requires sign-in + a submitted entry (or being the creator)
  if (challenge.visibility === 'participants_only') {
    const userId = session?.user?.id
    if (!userId) {
      // Redirect to sign-in, bounce back here after
      redirect(`/api/auth/signin?callbackUrl=/challenge/${token}`)
    }
    const isCreator = userId === challenge.creatorId
    const hasEntry = challenge.entries.some((e) => e.userId === userId)
    if (!isCreator && !hasEntry) {
      // Show a locked page instead of the full board
      const diagnosticRoute = getDiagnosticRoute(challenge.diagnosticCategory)
      const diagnosticLabel = getDiagnosticLabel(challenge.diagnosticCategory)
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-10 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Diagnostic Challenge</h1>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
                {challenge.creatorName} challenged friends on {diagnosticLabel} (Form {challenge.diagnosticForm}).
              </p>
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
                <p className="mb-1 text-base font-semibold text-indigo-900 dark:text-indigo-200">🔒 Leaderboard locked</p>
                <p className="mb-4 text-sm text-indigo-700 dark:text-indigo-300">
                  The creator made this leaderboard visible to participants only. Take the diagnostic to unlock it.
                </p>
                {challenge.expiresAt >= new Date() ? (
                  <Link
                    href={`${diagnosticRoute}?challenge=${challenge.token}&challengeForm=${challenge.diagnosticForm}`}
                    className="inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Take This Diagnostic Challenge
                  </Link>
                ) : (
                  <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200">
                    This challenge has expired.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const expired = challenge.expiresAt < new Date()
  const diagnosticRoute = getDiagnosticRoute(challenge.diagnosticCategory)
  const diagnosticLabel = getDiagnosticLabel(challenge.diagnosticCategory)
  const currentUserId = session?.user?.id ?? null

  const leaderboard = [
    {
      name: challenge.creatorName,
      score: challenge.creatorScore,
      correct: challenge.creatorCorrect,
      total: challenge.creatorTotal,
      apScore: challenge.creatorAPScore,
      createdAt: challenge.createdAt,
      isCreator: true,
      userId: challenge.creatorId,
    },
    ...challenge.entries.map((entry) => ({
      name: entry.displayName,
      score: entry.score,
      correct: entry.correct,
      total: entry.total,
      apScore: entry.apScore,
      createdAt: entry.completedAt,
      isCreator: false,
      userId: entry.userId,
    })),
  ].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (b.correct !== a.correct) return b.correct - a.correct
    return b.apScore - a.apScore
  })

  const participantCount = leaderboard.length
  const avgScore =
    participantCount > 0
      ? Math.round(leaderboard.reduce((sum, e) => sum + e.score, 0) / participantCount)
      : 0

  const currentUserEntry = currentUserId ? leaderboard.find((e) => e.userId === currentUserId) : null
  const currentUserRank = currentUserEntry ? leaderboard.indexOf(currentUserEntry) + 1 : null
  const creatorScore = challenge.creatorScore
  const viewerBeatsCreator =
    currentUserEntry && !currentUserEntry.isCreator && currentUserEntry.score > creatorScore

  const MEDALS = ['🥇', '🥈', '🥉']

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-10 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-1 flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Diagnostic Challenge</h1>
            <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              {participantCount} {participantCount === 1 ? 'participant' : 'participants'}
            </span>
          </div>
          <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
            {challenge.creatorName} challenged friends on {diagnosticLabel} (Form {challenge.diagnosticForm}).
          </p>
          <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">
            Avg score: <strong>{avgScore}%</strong> · Expires {challenge.expiresAt.toLocaleString()}
          </p>

          {viewerBeatsCreator && (
            <div className="mb-4 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">
              🏆 You beat the creator! You&apos;re ranked #{currentUserRank}.
            </div>
          )}

          {!expired ? (
            <Link
              href={`${diagnosticRoute}?challenge=${challenge.token}&challengeForm=${challenge.diagnosticForm}`}
              className="mb-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              {currentUserEntry && !currentUserEntry.isCreator ? 'Retake This Challenge' : 'Take This Diagnostic Challenge'}
            </Link>
          ) : (
            <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200">
              This challenge has expired.
            </div>
          )}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Leaderboard</h2>
            {leaderboard.length === 1 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No challengers yet — be the first to compete!</p>
            ) : null}
            <div className="space-y-2">
              {leaderboard.map((entry, index) => {
                const isCurrentUser = currentUserId && entry.userId === currentUserId
                const medal = MEDALS[index] ?? null
                return (
                  <div
                    key={`${entry.name}-${entry.createdAt.toISOString()}-${index}`}
                    className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                      isCurrentUser
                        ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20'
                        : entry.isCreator
                        ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-900/30'
                        : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {medal ?? `#${index + 1}`}
                      </span>
                      <div>
                        <p className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
                          {entry.name}
                          {entry.isCreator ? (
                            <span className="rounded-full bg-indigo-100 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                              creator
                            </span>
                          ) : null}
                          {isCurrentUser ? (
                            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                              you
                            </span>
                          ) : null}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{entry.correct}/{entry.total} correct · AP {entry.apScore}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-indigo-600 dark:text-indigo-300">{entry.score}%</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
