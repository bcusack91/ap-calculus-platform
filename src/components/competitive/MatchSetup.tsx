'use client'

import { useState } from 'react'
import { Bot, Check, ChevronUp, Swords } from 'lucide-react'
import type { GameModeCard } from '@/lib/competitive-modes'
import { BOT_STRENGTH_COPY, type BotStrength } from '@/lib/bot-pacing'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'
import QueueSearchPanel, { QUEUE_POLL_TIMEOUT_SEC } from '@/components/competitive/QueueSearchPanel'

// Practice-bot strengths, described in terms of the problems (bot-pacing.ts);
// the seconds per question depend on the topic now, so they are not promised.
const BOT_STRENGTHS: BotStrength[] = ['easy', 'medium', 'hard']
const BOT_DOT: Record<BotStrength, string> = {
  easy: 'bg-green-500',
  medium: 'bg-amber-500',
  hard: 'bg-red-500',
}

const ASYNC_HELP = "Play 10 questions now, then share a link — friends beat your score on their own time. Great when no one's online to match."
const ASYNC_BUTTON_CLASS =
  'w-full rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-card-border disabled:hover:text-foreground'

export interface MatchSetupProps {
  modeCards: GameModeCard[]
  selectedMode: string
  onSelectMode: (key: string) => void
  selectedTopic: string | null
  selectedTopicTitle: string | null
  inQueue: boolean
  queuePosition?: number
  queueEstimatedWait?: number
  queueTimedOut: boolean
  showBotOptions: boolean
  onToggleBotOptions: () => void
  onFindMatch: () => void
  onCancelQueue: () => void
  onStartBot: (strength: BotStrength) => void
  onBotInsteadOfQueue: () => void
}

function FindMatchButton({ disabled, onClick, className = '' }: { disabled: boolean; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary font-bold text-white shadow-md transition-all hover:from-accent-hover hover:to-accent-secondary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none ${className}`}
    >
      <Swords className="h-5 w-5" aria-hidden /> Find Match
    </button>
  )
}

function BotStrengthList({ onStart }: { onStart: (s: BotStrength) => void }) {
  return (
    <div className="space-y-2">
      {BOT_STRENGTHS.map((s) => (
        <button
          key={s}
          onClick={() => onStart(s)}
          className="flex w-full items-start gap-3 rounded-xl border border-card-border bg-card p-3 text-left transition-colors hover:border-accent hover:bg-accent-subtle"
        >
          <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${BOT_DOT[s]}`} aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-foreground">{BOT_STRENGTH_COPY[s].label} bot</span>
            <span className="block text-xs text-muted-foreground">{BOT_STRENGTH_COPY[s].desc}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

function TimedOutNotice() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-900/20 dark:text-amber-300">
      No opponent found — you left the queue after {Math.round(QUEUE_POLL_TIMEOUT_SEC / 60)} minutes.
      Try Practice vs Bot or send an async challenge.
    </div>
  )
}

function Queue(props: MatchSetupProps) {
  return (
    <QueueSearchPanel
      position={props.queuePosition}
      estimatedWait={props.queueEstimatedWait}
      onCancel={props.onCancelQueue}
      fallback={
        <div className="mt-3">
          <button
            onClick={props.onBotInsteadOfQueue}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-subtle"
          >
            <Bot className="h-4 w-4" aria-hidden /> Practice vs AI instead
          </button>
        </div>
      }
    />
  )
}

/** Desktop: the sticky side panel — mode, topic, and every way to start. */
export function MatchSetupPanel(props: MatchSetupProps) {
  const { modeCards, selectedMode, onSelectMode, selectedTopic, selectedTopicTitle } = props
  return (
    <aside aria-label="Match setup" className="rounded-3xl border border-card-border bg-card p-5 shadow-sm">
      <h2 className="text-lg font-bold text-foreground">Match setup</h2>

      <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Game mode</p>
      <div className="space-y-2">
        {modeCards.map((mode) => (
          <ModeCard key={mode.key} mode={mode} selected={selectedMode === mode.key} onSelect={onSelectMode} compact />
        ))}
      </div>

      <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Topic</p>
      {selectedTopic ? (
        <div data-qa="setup-summary" className="flex items-center gap-2 rounded-xl bg-accent-subtle px-3 py-2.5 text-sm font-semibold text-foreground ring-1 ring-accent-light">
          <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          <span className="min-w-0 truncate">{selectedTopicTitle}</span>
          <span className="sr-only"> · {modeCards.find((m) => m.key === selectedMode)?.title}</span>
        </div>
      ) : (
        <p data-qa="setup-summary" className="rounded-xl border border-dashed border-gray-300 px-3 py-2.5 text-sm text-muted-foreground dark:border-gray-700">
          Pick a topic from the list
        </p>
      )}

      <div className="mt-5">
        {props.inQueue ? (
          <Queue {...props} />
        ) : (
          <div className="space-y-3">
            {props.queueTimedOut && <TimedOutNotice />}
            <FindMatchButton disabled={!selectedTopic} onClick={props.onFindMatch} className="w-full py-3.5 text-lg" />
            <div className="flex items-center gap-3 pt-1 text-xs font-medium text-muted-foreground">
              <span className="h-px flex-1 bg-card-border" /> or play solo <span className="h-px flex-1 bg-card-border" />
            </div>
            <button
              onClick={props.onToggleBotOptions}
              disabled={!selectedTopic}
              aria-expanded={props.showBotOptions && !!selectedTopic}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-card-border disabled:hover:text-foreground"
            >
              <Bot className="h-4 w-4" aria-hidden /> Practice vs Bot
            </button>
            {props.showBotOptions && selectedTopic && <BotStrengthList onStart={props.onStartBot} />}
            <div className="border-t border-card-border pt-4 text-center">
              <AsyncChallengeButton topicSlug={selectedTopic} className={ASYNC_BUTTON_CLASS} helperText={ASYNC_HELP} />
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}

/** Mobile: a sticky bottom bar; bot strengths and the async entry open above it. */
export function MatchSetupBar(props: MatchSetupProps) {
  const { selectedTopic, selectedTopicTitle, modeCards, selectedMode } = props
  const [asyncOpen, setAsyncOpen] = useState(false)
  const mode = modeCards.find((m) => m.key === selectedMode)
  const sheet = !selectedTopic ? null : props.showBotOptions ? 'bot' : asyncOpen ? 'async' : null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-card-border bg-card/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur">
      {props.inQueue ? (
        <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
          <Queue {...props} />
        </div>
      ) : (
        <>
          {sheet && (
            <div className="max-h-[50vh] overflow-y-auto border-b border-card-border px-4 py-3">
              {sheet === 'bot' ? (
                <>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Choose a bot</p>
                  <BotStrengthList onStart={props.onStartBot} />
                </>
              ) : (
                <div className="text-center">
                  <AsyncChallengeButton topicSlug={selectedTopic} className={ASYNC_BUTTON_CLASS} helperText={ASYNC_HELP} />
                </div>
              )}
            </div>
          )}
          <div className="px-4 pt-3 pb-3">
            {props.queueTimedOut && <div className="mb-2"><TimedOutNotice /></div>}
            <div className="flex items-center gap-3">
              <div data-qa="setup-summary" className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-muted-foreground">
                  <span aria-hidden>{mode?.icon}</span> {mode?.title}
                </p>
                <p className={`truncate text-sm font-semibold ${selectedTopic ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {selectedTopic ? selectedTopicTitle : 'Pick a topic'}
                </p>
              </div>
              <FindMatchButton disabled={!selectedTopic} onClick={props.onFindMatch} className="shrink-0 px-5 py-3 text-base" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setAsyncOpen(false); props.onToggleBotOptions() }}
                disabled={!selectedTopic}
                aria-expanded={sheet === 'bot'}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${sheet === 'bot' ? 'border-accent bg-accent-subtle text-accent' : 'border-card-border text-foreground'}`}
              >
                <Bot className="h-4 w-4" aria-hidden /> Practice vs Bot
                {sheet === 'bot' && <ChevronUp className="h-3.5 w-3.5" aria-hidden />}
              </button>
              <button
                onClick={() => { if (props.showBotOptions) props.onToggleBotOptions(); setAsyncOpen((o) => !o) }}
                disabled={!selectedTopic}
                aria-expanded={sheet === 'async'}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${sheet === 'async' ? 'border-accent bg-accent-subtle text-accent' : 'border-card-border text-foreground'}`}
              >
                <span aria-hidden>📬</span> Async link
                {sheet === 'async' && <ChevronUp className="h-3.5 w-3.5" aria-hidden />}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/** A game-mode card: emoji chip, title, one-line description, selected state. */
export function ModeCard({ mode, selected, onSelect, compact = false }: { mode: GameModeCard; selected: boolean; onSelect: (key: string) => void; compact?: boolean }) {
  return (
    <button
      onClick={() => onSelect(mode.key)}
      aria-pressed={selected}
      className={`relative flex w-full items-center gap-3 rounded-xl border text-left transition-all ${compact ? 'p-2.5' : 'p-3'} ${
        selected
          ? 'border-accent bg-accent-subtle ring-1 ring-accent'
          : 'border-card-border bg-card hover:border-accent-muted'
      }`}
    >
      <span className={`flex shrink-0 items-center justify-center rounded-lg text-xl ${compact ? 'h-9 w-9' : 'h-10 w-10'} ${selected ? 'bg-card' : 'bg-gray-100 dark:bg-gray-800'}`} aria-hidden>
        {mode.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-foreground">{mode.title}</span>
        <span data-qa="mode-desc" className="block text-xs text-muted-foreground">{mode.desc}</span>
      </span>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${selected ? 'bg-accent text-white' : 'ring-1 ring-gray-300 dark:ring-gray-600'}`}
        aria-hidden
      >
        {selected && <Check className="h-3 w-3" />}
      </span>
    </button>
  )
}
