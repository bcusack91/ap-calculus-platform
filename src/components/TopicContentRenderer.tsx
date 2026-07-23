'use client'

import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import type { ReactNode } from 'react'

// Dynamically import animation components with no SSR
const MultiplicationAnimation = dynamic(() => import('./MultiplicationAnimation'), { ssr: false })
const TwoDigitMultiplicationAnimation = dynamic(() => import('./TwoDigitMultiplicationAnimation'), { ssr: false })
const UnitCircleTable = dynamic(() => import('./UnitCircleTable'), { ssr: false })

type MarkdownChildrenProps = {
  children?: ReactNode
}

type MarkdownCodeProps = {
  inline?: boolean
  children?: ReactNode
}

// Define markdown components
const MarkdownComponents = {
  h1: ({ children }: MarkdownChildrenProps) => (
    <h1 className="text-3xl font-bold mb-6 mt-8 text-blue-900 border-b-2 border-blue-200 pb-2">{children}</h1>
  ),
  h2: ({ children }: MarkdownChildrenProps) => (
    <h2 className="text-2xl font-bold mb-4 mt-6 text-blue-800">{children}</h2>
  ),
  h3: ({ children }: MarkdownChildrenProps) => (
    <h3 className="text-xl font-bold mb-3 mt-4 text-blue-700">{children}</h3>
  ),
  p: ({ children }: MarkdownChildrenProps) => (
    <p className="mb-4 leading-relaxed text-gray-800">{children}</p>
  ),
  ul: ({ children }: MarkdownChildrenProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
  ),
  ol: ({ children }: MarkdownChildrenProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
  ),
  li: ({ children }: MarkdownChildrenProps) => (
    <li className="text-gray-700">{children}</li>
  ),
  blockquote: ({ children }: MarkdownChildrenProps) => (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-3 mb-4 italic rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }: MarkdownCodeProps) => 
    inline ? (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-accent-hover">{children}</code>
    ) : (
      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">{children}</code>
    ),
  strong: ({ children }: MarkdownChildrenProps) => (
    <strong className="font-bold text-accent-hover">{children}</strong>
  ),
}

interface TopicContentRendererProps {
  content: string
}

export default function TopicContentRenderer({ content }: TopicContentRendererProps) {
  const parts: JSX.Element[] = []
  let key = 0
  
  // Split content by component markers to extract them
  const segments = content.split(/(<(?:MultiplicationAnimation|TwoDigitMultiplicationAnimation|UnitCircleTable)[^>]*\/?>)/)
  
  segments.forEach((segment) => {
    const multiMatch = segment.match(/<MultiplicationAnimation multiplicand="(\d+)" multiplier="(\d+)" result="(\d+)" \/>/)
    const twoDigitMatch = segment.match(/<TwoDigitMultiplicationAnimation multiplicand="(\d+)" multiplier="(\d+)" result="(\d+)" \/>/)
    const unitCircleMatch = segment.match(/<UnitCircleTable *\/?>/)
    
    if (multiMatch) {
      parts.push(
        <MultiplicationAnimation 
          key={key++}
          multiplicand={multiMatch[1]} 
          multiplier={multiMatch[2]} 
          result={multiMatch[3]} 
        />
      )
    } else if (twoDigitMatch) {
      parts.push(
        <TwoDigitMultiplicationAnimation 
          key={key++}
          multiplicand={twoDigitMatch[1]} 
          multiplier={twoDigitMatch[2]} 
          result={twoDigitMatch[3]} 
        />
      )
    } else if (unitCircleMatch) {
      parts.push(
        <UnitCircleTable key={key++} />
      )
    } else if (segment.trim()) {
      parts.push(
        <ReactMarkdown
          key={key++}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={MarkdownComponents}
        >
          {escapeCurrencyMath(segment)}
        </ReactMarkdown>
      )
    }
  })
  
  return <>{parts}</>
}
