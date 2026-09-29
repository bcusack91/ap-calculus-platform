import Link from 'next/link'
import { Info, Lightbulb, TriangleAlert } from 'lucide-react'
import type { HelpBlock } from '@/data/help/articles'
import { parseInline } from '@/data/help/inline'

const linkCls =
  'font-medium text-accent underline underline-offset-2 hover:text-accent-hover dark:text-accent-muted dark:hover:text-accent'

/** Renders `[label](/path)` and `**bold**` inside help copy. */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((t, i) => {
        if (t.kind === 'bold') {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {t.text}
            </strong>
          )
        }
        if (t.kind === 'link') {
          return t.href.startsWith('/') ? (
            <Link key={i} href={t.href} className={linkCls}>
              {t.text}
            </Link>
          ) : (
            <a key={i} href={t.href} className={linkCls} rel="noopener noreferrer" target="_blank">
              {t.text}
            </a>
          )
        }
        return <span key={i}>{t.text}</span>
      })}
    </>
  )
}

const NOTE_STYLE = {
  tip: {
    Icon: Lightbulb,
    cls: 'border-accent-light bg-accent-subtle dark:border-accent-light/40 dark:bg-accent-light/10',
    icon: 'text-accent dark:text-accent-muted',
  },
  warning: {
    Icon: TriangleAlert,
    cls: 'border-amber-300 bg-amber-50 dark:border-amber-700/60 dark:bg-amber-900/20',
    icon: 'text-amber-600 dark:text-amber-400',
  },
  info: {
    Icon: Info,
    cls: 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/60',
    icon: 'text-gray-500 dark:text-gray-400',
  },
} as const

function Block({ block }: { block: HelpBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 id={block.id} className="scroll-mt-24 pt-4 text-xl font-bold text-gray-900 dark:text-white">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <InlineText text={block.text} />
        </p>
      )
    case 'steps':
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground"
              >
                {i + 1}
              </span>
              <span className="leading-relaxed text-gray-700 dark:text-gray-300">
                <InlineText text={item} />
              </span>
            </li>
          ))}
        </ol>
      )
    case 'list':
      return (
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed text-gray-700 dark:text-gray-300">
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      )
    case 'note': {
      const style = NOTE_STYLE[block.tone ?? 'info']
      return (
        <div className={`flex gap-3 rounded-xl border p-4 ${style.cls}`}>
          <style.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.icon}`} aria-hidden />
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <InlineText text={block.text} />
          </p>
        </div>
      )
    }
    case 'faq':
      return (
        <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
          {block.items.map((item, i) => (
            <div key={i} className="p-4">
              <dt className="font-semibold text-gray-900 dark:text-white">
                <InlineText text={item.q} />
              </dt>
              <dd className="mt-1 leading-relaxed text-gray-700 dark:text-gray-300">
                <InlineText text={item.a} />
              </dd>
            </div>
          ))}
        </dl>
      )
    case 'terms':
      return (
        <dl className="space-y-4">
          {block.items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-xl border border-card-border bg-card p-4"
            >
              <dt className="font-bold text-gray-900 dark:text-white">{item.term}</dt>
              <dd className="mt-1 leading-relaxed text-gray-700 dark:text-gray-300">
                <InlineText text={item.definition} />
              </dd>
            </div>
          ))}
        </dl>
      )
  }
}

export function HelpArticleBody({ blocks }: { blocks: HelpBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}
