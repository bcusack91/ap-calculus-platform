'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface TextToSpeechProps {
  text: string
}

export default function TextToSpeech({ text }: TextToSpeechProps) {
  const [speaking, setSpeaking] = useState(false)
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const [rate, setRate] = useState(1)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const stop = useCallback(() => {
    speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  useEffect(() => {
    return () => { stop() }
  }, [stop])

  const speak = () => {
    if (speaking) {
      stop()
      return
    }

    const plainText = text
      .replace(/[#*_~`>/\\[\](){}|]/g, '')
      .replace(/\$[^$]+\$/g, 'math expression')
      .replace(/\n{2,}/g, '. ')
      .replace(/\n/g, ' ')
      .trim()

    const utterance = new SpeechSynthesisUtterance(plainText)
    utterance.rate = rate
    utterance.pitch = 1
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    utteranceRef.current = utterance
    speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  if (!supported) return null

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={speak}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
          speaking
            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label={speaking ? 'Stop reading' : 'Read aloud'}
      >
        {speaking ? '⏹️ Stop' : '🔊 Listen'}
      </button>
      {speaking && (
        <select
          value={rate}
          onChange={(e) => {
            setRate(parseFloat(e.target.value))
            // Restart with new rate
            stop()
          }}
          className="text-xs border rounded px-1 py-0.5 bg-white dark:bg-gray-800 dark:border-gray-700"
          aria-label="Speech rate"
        >
          <option value="0.75">0.75x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
        </select>
      )}
    </div>
  )
}
