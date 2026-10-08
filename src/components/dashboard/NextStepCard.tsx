'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, ClipboardCheck, ClipboardList, Layers, NotebookPen, RotateCcw, Compass, Trophy } from 'lucide-react'
import { describeNextStep, type NextStep } from '@/lib/dashboard-next-step'
import { dueDeadline, formatDueDate } from '@/components/ClassDiagnosticBanner'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'

const ICONS: Record<Exclude<NextStep['kind'], 'loading'>, typeof ArrowRight> = {
  assignments: ClipboardList,
  'class-diagnostic': NotebookPen,
  flashcards: Layers,
  'plan-topic': BookOpen,
  'unit-test': ClipboardCheck,
  'full-length': Trophy,
  'retake-diagnostic': RotateCcw,
  'take-diagnostic': NotebookPen,
  'open-course': BookOpen,
  'first-topic': BookOpen,
  'choose-course': Compass,
}

/** Which help article explains each step's concept (null = none needed). */
const HELP: Partial<Record<NextStep['kind'], { article: (typeof HELP_ARTICLES)[keyof typeof HELP_ARTICLES]; label: string }>> = {
  'class-diagnostic': { article: HELP_ARTICLES.classDiagnostics, label: 'About class diagnostics' },
  flashcards: { article: HELP_ARTICLES.reviewingFlashcards, label: 'How flashcard review works' },
  'plan-topic': { article: HELP_ARTICLES.whatClearedMeans, label: 'What does cleared mean?' },
  'unit-test': { article: HELP_ARTICLES.diagnosticsAndStudyPlans, label: 'Diagnostics and study plans' },
  'full-length': { article: HELP_ARTICLES.fullLengthReadiness, label: 'How readiness levels work' },
  'retake-diagnostic': { article: HELP_ARTICLES.diagnosticsAndStudyPlans, label: 'Diagnostics and study plans' },
  'take-diagnostic': { article: HELP_ARTICLES.diagnosticsAndStudyPlans, label: 'Diagnostics and study plans' },
}

/**
 * The dashboard's single "Your next step" card: one sentence of why, one
 * primary button. The only brand-gradient card on the page, so it reads first.
 */
export default function NextStepCard({ step }: { step: NextStep }) {
  // Snapshot once — lint forbids impure calls (Date.now) during render.
  const [now] = useState(() => Date.now())

  if (step.kind === 'loading') {
    return (
      <div
        data-tour="next-step"
        aria-busy="true"
        className="mb-6 rounded-2xl bg-gradient-to-r from-accent to-accent-secondary p-6 sm:p-7 shadow-lg"
      >
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-28 rounded bg-white/40" />
          <div className="h-6 w-2/3 rounded bg-white/50" />
          <div className="h-4 w-1/2 rounded bg-white/30" />
          <div className="h-10 w-44 rounded-lg bg-white/60" />
        </div>
      </div>
    )
  }

  const copy = describeNextStep(step)
  const Icon = ICONS[step.kind]
  const help = HELP[step.kind]

  let dueLine: { text: string; overdue: boolean } | null = null
  if (step.kind === 'class-diagnostic' && step.diagnostic.dueDate) {
    const overdue = dueDeadline(step.diagnostic.dueDate).getTime() < now
    dueLine = {
      text: overdue
        ? `Overdue — was due ${formatDueDate(step.diagnostic.dueDate)}`
        : `Due end of day ${formatDueDate(step.diagnostic.dueDate)}`,
      overdue,
    }
  }

  return (
    <section
      data-tour="next-step"
      aria-labelledby="next-step-title"
      className="mb-6 rounded-2xl bg-gradient-to-r from-accent to-accent-secondary p-6 sm:p-7 text-white shadow-lg"
    >
      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/85">
        <Icon className="h-4 w-4" aria-hidden /> Your next step
      </p>
      <h2 id="next-step-title" className="text-2xl font-bold mb-1">
        {copy.title}
      </h2>
      <p className="text-sm text-white/90 mb-4 max-w-2xl">
        {copy.reason}
        {help && (
          <HelpLink
            article={help.article}
            label={help.label}
            className="ml-1 text-white/80! hover:text-white!"
          />
        )}
      </p>
      {dueLine && (
        <p className={`-mt-2 mb-4 text-sm font-semibold ${dueLine.overdue ? 'text-amber-200' : 'text-white/90'}`}>
          {dueLine.text}
        </p>
      )}
      <Link
        href={copy.href}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-accent-hover shadow hover:bg-white/90 transition-colors"
      >
        {copy.cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </section>
  )
}
