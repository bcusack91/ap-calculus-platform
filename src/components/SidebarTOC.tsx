'use client'

import { useState, useEffect } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function SidebarTOC() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const els = document.querySelectorAll('h2, h3')
    const items: TocItem[] = []
    els.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') ?? ''
      }
      items.push({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      })
    })
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(items)
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="hidden xl:block sticky top-24 w-56 flex-shrink-0 print:hidden" aria-label="Table of contents">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
        On This Page
      </h4>
      <ul className="space-y-1 text-sm border-l-2 border-gray-200 dark:border-gray-700">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`block py-1 transition-colors ${
                level === 3 ? 'pl-6' : 'pl-3'
              } ${
                activeId === id
                  ? 'text-purple-600 dark:text-purple-400 border-l-2 -ml-[2px] border-purple-600 dark:border-purple-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
