'use client'

import { useEffect, useState, useCallback } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
  duration: number
  size: number
  borderRadius: string
  rotation: number
  translateDir: string
}

interface ConfettiCelebrationProps {
  trigger: boolean
  onComplete?: () => void
}

const COLORS = ['#8b5cf6', '#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#ec4899', '#f97316']

export default function ConfettiCelebration({ trigger, onComplete }: ConfettiCelebrationProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  const launch = useCallback(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.5,
      duration: 1.5 + Math.random() * 2,
      size: 6 + Math.random() * 8,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      rotation: Math.random() * 360,
      translateDir: Math.random() > 0.5 ? '' : '-',
    }))
    setPieces(newPieces)
    setTimeout(() => {
      setPieces([])
      onComplete?.()
    }, 3500)
  }, [onComplete])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (trigger) launch()
  }, [trigger, launch])

  if (pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.borderRadius,
            animation: `confetti-fall-${p.id} ${p.duration}s ease-in ${p.delay}s forwards`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
      <style>{pieces.map(p => `
        @keyframes confetti-fall-${p.id} {
          0% { top: -10px; opacity: 1; transform: rotate(0deg) translateX(0); }
          100% { top: 110vh; opacity: 0; transform: rotate(720deg) translateX(${p.translateDir}80px); }
        }
      `).join('')}</style>
    </div>
  )
}
