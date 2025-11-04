'use client'

import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import AnimationWrapper from './AnimationWrapper'

interface ContentWithAnimationsProps {
  content: string
  MarkdownComponents: any
}

export default function ContentWithAnimations({ content, MarkdownComponents }: ContentWithAnimationsProps) {
  const parts: JSX.Element[] = []
  let key = 0
  
  // Split by all component markers and process sequentially
  const segments = content.split(/(<(?:MultiplicationAnimation|TwoDigitMultiplicationAnimation)[^>]*\/>)/)
  
  segments.forEach((segment, index) => {
    // Check if this segment is a component marker
    const multiMatch = segment.match(/<MultiplicationAnimation multiplicand="(\d+)" multiplier="(\d+)" result="(\d+)" \/>/)
    const twoDigitMatch = segment.match(/<TwoDigitMultiplicationAnimation multiplicand="(\d+)" multiplier="(\d+)" result="(\d+)" \/>/)
    
    if (multiMatch) {
      // Render MultiplicationAnimation component
      parts.push(
        <AnimationWrapper 
          key={key++}
          type="single"
          multiplicand={multiMatch[1]} 
          multiplier={multiMatch[2]} 
          result={multiMatch[3]} 
        />
      )
    } else if (twoDigitMatch) {
      // Render TwoDigitMultiplicationAnimation component
      parts.push(
        <AnimationWrapper 
          key={key++}
          type="double"
          multiplicand={twoDigitMatch[1]} 
          multiplier={twoDigitMatch[2]} 
          result={twoDigitMatch[3]} 
        />
      )
    } else if (segment.trim()) {
      // Render markdown content
      parts.push(
        <ReactMarkdown
          key={key++}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={MarkdownComponents}
        >
          {segment}
        </ReactMarkdown>
      )
    }
  })
  
  return <>{parts}</>
}
