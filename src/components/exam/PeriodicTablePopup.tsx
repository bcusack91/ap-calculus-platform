'use client'

/**
 * The exam-day periodic table (AAMC supplies one in the science sections):
 * atomic number, symbol and mass in a plain 18-column grid inside an
 * accessible dialog. Esc closes and focus returns to the trigger
 * (FocusTrapDialog). Element data is shared with /periodic-table.
 */

import { useMemo } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { ELEMENTS, getGridPosition, type Element } from '@/data/periodic-table'

function fmtMass(m: number): string {
  // Synthetic elements carry whole-number mass numbers: show them bracketed.
  return Number.isInteger(m) ? `(${m})` : String(m)
}

export function PeriodicTableGrid() {
  const grid = useMemo(() => {
    const g: (Element | null)[][] = Array.from({ length: 10 }, () => Array<Element | null>(18).fill(null))
    for (const el of ELEMENTS) {
      const pos = getGridPosition(el)
      if (pos && pos.row <= 10) g[pos.row - 1][pos.col - 1] = el
    }
    return g
  }, [])

  return (
    <div className="overflow-x-auto pb-1">
      <div className="grid min-w-[720px] grid-cols-[repeat(18,minmax(0,1fr))] gap-0.5" role="list" aria-label="Elements">
        {grid.map((row, r) =>
          row.map((el, c) => {
            const key = `${r}-${c}`
            if (r === 7) return <div key={key} className="h-2" aria-hidden="true" />
            if (!el) {
              // Lanthanide / actinide placeholders in group 3.
              const marker = c === 2 && r === 5 ? '*' : c === 2 && r === 6 ? '**' : r >= 8 && c === 1 ? (r === 8 ? '*' : '**') : null
              return (
                <div key={key} aria-hidden="true" className="flex items-center justify-center text-xs font-semibold text-gray-400 dark:text-gray-500">
                  {marker}
                </div>
              )
            }
            return (
              <div
                key={key}
                role="listitem"
                title={`${el.name} (${el.z}), ${fmtMass(el.mass)}`}
                className="flex flex-col items-center rounded border border-gray-300 bg-white px-0.5 py-1 leading-none text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
              >
                <span className="text-[9px] text-gray-500 dark:text-gray-400">{el.z}</span>
                <span className="my-0.5 text-sm font-bold">
                  {el.symbol}
                  <span className="sr-only"> {el.name}, atomic number {el.z}, mass</span>
                </span>
                <span className="text-[8px] text-gray-600 dark:text-gray-300">{fmtMass(el.mass)}</span>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
}

export default function PeriodicTablePopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <FocusTrapDialog open={open} onClose={onClose} title="Periodic table of the elements" className="mx-4 w-full max-w-5xl">
      <div className="p-4 sm:p-6">
        <h2 className="mb-1 pr-8 text-lg font-bold text-gray-900 dark:text-white">Periodic Table of the Elements</h2>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          Atomic number above, atomic mass below. Scroll sideways on small screens. Press Esc to close.
        </p>
        <PeriodicTableGrid />
      </div>
    </FocusTrapDialog>
  )
}
