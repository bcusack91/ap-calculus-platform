'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ELEMENTS, CATEGORY_COLORS, CATEGORY_LABELS, getGridPosition, type Element } from '@/data/periodic-table'

type TrendKey = 'default' | 'electronegativity' | 'ionizationEnergy' | 'atomicRadius'

function getTrendColor(value: number | undefined, min: number, max: number): string {
  if (value === undefined) return '#9ca3af'
  const ratio = (value - min) / (max - min)
  // Blue (low) → Green (mid) → Red (high)
  const r = Math.round(ratio < 0.5 ? 0 : (ratio - 0.5) * 2 * 255)
  const g = Math.round(ratio < 0.5 ? ratio * 2 * 200 : (1 - ratio) * 2 * 200)
  const b = Math.round(ratio < 0.5 ? (1 - ratio * 2) * 255 : 0)
  return `rgb(${r}, ${g}, ${b})`
}

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function PeriodicTablePage() {
  const [selected, setSelected] = useState<Element | null>(null)
  const [trend, setTrend] = useState<TrendKey>('default')
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  // Trend ranges
  const trendRanges = useMemo(() => {
    const en = ELEMENTS.filter(e => e.electronegativity !== undefined).map(e => e.electronegativity!)
    const ie = ELEMENTS.filter(e => e.ionizationEnergy !== undefined).map(e => e.ionizationEnergy!)
    const ar = ELEMENTS.filter(e => e.atomicRadius !== undefined).map(e => e.atomicRadius!)
    return {
      electronegativity: { min: Math.min(...en), max: Math.max(...en) },
      ionizationEnergy: { min: Math.min(...ie), max: Math.max(...ie) },
      atomicRadius: { min: Math.min(...ar), max: Math.max(...ar) },
    }
  }, [])

  const filteredElements = useMemo(() => {
    let els = ELEMENTS
    if (filter) els = els.filter(e => e.category === filter)
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      els = els.filter(e =>
        e.symbol.toLowerCase().includes(q) ||
        e.name.toLowerCase().includes(q) ||
        String(e.z).includes(q)
      )
    }
    return new Set(els.map(e => e.z))
  }, [filter, search])

  const getCellStyle = (el: Element): React.CSSProperties => {
    if (trend === 'default') return {}
    const val = el[trend]
    const range = trendRanges[trend]
    return { backgroundColor: getTrendColor(val, range.min, range.max), color: 'white' }
  }

  // Build the grid: 10 rows x 18 cols (7 main + 1 gap + 2 Ln/An)
  const grid: (Element | null)[][] = Array.from({ length: 10 }, () => Array(18).fill(null))
  for (const el of ELEMENTS) {
    const pos = getGridPosition(el)
    if (pos && pos.row <= 10) {
      grid[pos.row - 1][pos.col - 1] = el
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/ap-chemistry" className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6">
          ← Back to AP Chemistry
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Interactive{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Periodic Table
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Click any element to view details. Use trend visualization to explore periodic patterns.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search element..."
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-40"
            />

            {/* Trend selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500 font-medium">Trend:</span>
              {([
                { key: 'default' as TrendKey, label: 'Category' },
                { key: 'electronegativity' as TrendKey, label: 'Electronegativity' },
                { key: 'ionizationEnergy' as TrendKey, label: 'Ionization Energy' },
                { key: 'atomicRadius' as TrendKey, label: 'Atomic Radius' },
              ]).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTrend(t.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${trend === t.key ? 'bg-violet-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <select
              value={filter || ''}
              onChange={(e) => setFilter(e.target.value || null)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="">All Categories</option>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Trend Legend */}
        {trend !== 'default' && (
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="text-xs text-gray-500">Low</span>
            <div className="h-3 w-48 rounded-full" style={{ background: 'linear-gradient(to right, #3b82f6, #22c55e, #ef4444)' }} />
            <span className="text-xs text-gray-500">High</span>
          </div>
        )}

        {/* Periodic Table Grid */}
        <div className="overflow-x-auto mb-6">
          <div className="min-w-[900px]">
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
              {grid.flatMap((row, ri) =>
                row.map((el, ci) => {
                  if (!el) {
                    // Lanthanide placeholder in main grid (period 6, group 3)
                    if (ri === 5 && ci === 2) {
                      return <div key={`${ri}-${ci}`} className="aspect-square rounded-md border border-dashed border-pink-300 dark:border-pink-700 flex items-center justify-center bg-pink-50 dark:bg-pink-900/20 cursor-default"><span className="text-[6px] text-pink-500 dark:text-pink-400 font-medium">57-71</span></div>
                    }
                    // Actinide placeholder in main grid (period 7, group 3)
                    if (ri === 6 && ci === 2) {
                      return <div key={`${ri}-${ci}`} className="aspect-square rounded-md border border-dashed border-amber-300 dark:border-amber-700 flex items-center justify-center bg-amber-50 dark:bg-amber-900/20 cursor-default"><span className="text-[6px] text-amber-500 dark:text-amber-400 font-medium">89-103</span></div>
                    }
                    return <div key={`${ri}-${ci}`} className="aspect-square" />
                  }
                  const colors = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['nonmetal']
                  const isFiltered = filteredElements.has(el.z)
                  const isSelected = selected?.z === el.z

                  return (
                    <button
                      key={el.z}
                      onClick={() => setSelected(isSelected ? null : el)}
                      className={`aspect-square rounded-md border flex flex-col items-center justify-center transition-all text-center leading-tight relative
                        ${isSelected ? 'ring-2 ring-violet-500 ring-offset-1 z-10 scale-110' : ''}
                        ${!isFiltered ? 'opacity-20' : 'hover:scale-105 hover:z-10 hover:shadow-lg'}
                        ${trend === 'default' ? `${colors.bg} ${colors.border} ${colors.text}` : `border-gray-300 dark:border-gray-600`}
                      `}
                      style={trend !== 'default' && isFiltered ? getCellStyle(el) : undefined}
                      title={`${el.name} (${el.symbol})`}
                    >
                      <span className="text-[8px] opacity-70 leading-none">{el.z}</span>
                      <span className="text-sm font-bold leading-tight">{el.symbol}</span>
                      <span className="text-[7px] opacity-60 leading-none truncate w-full px-0.5">{el.mass.toFixed(el.mass < 10 ? 3 : el.mass < 100 ? 2 : 1)}</span>
                    </button>
                  )
                })
              )}
            </div>
          </div>
        </div>

        {/* Category Legend (default view) */}
        {trend === 'default' && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const c = CATEGORY_COLORS[key]
              return (
                <button
                  key={key}
                  onClick={() => setFilter(filter === key ? null : key)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition ${filter === key ? 'ring-2 ring-violet-500' : ''} ${c.bg} ${c.text} ${c.border}`}
                >
                  <span className={`w-2 h-2 rounded-full ${c.bg} ${c.border} border`} />
                  {label}
                </button>
              )
            })}
          </div>
        )}

        {/* Element Detail Panel */}
        {selected && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-start gap-6 flex-wrap">
              {/* Symbol card */}
              <div className={`flex-shrink-0 w-28 h-28 rounded-xl border-2 flex flex-col items-center justify-center ${CATEGORY_COLORS[selected.category]?.bg || ''} ${CATEGORY_COLORS[selected.category]?.border || ''}`}>
                <span className="text-xs text-gray-500">{selected.z}</span>
                <span className="text-4xl font-black">{selected.symbol}</span>
                <span className="text-xs text-gray-500">{selected.mass.toFixed(3)}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-[200px]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selected.name}</h2>
                <p className="text-sm text-gray-500 mb-3">{CATEGORY_LABELS[selected.category] || selected.category}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Atomic Number</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.z}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Atomic Mass</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.mass.toFixed(3)} u</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Phase (STP)</div>
                    <div className="font-bold text-gray-900 dark:text-white capitalize">{selected.phase}</div>
                  </div>
                  {selected.electronegativity !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">Electronegativity</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.electronegativity}</div>
                    </div>
                  )}
                  {selected.ionizationEnergy !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">1st Ionization Energy</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.ionizationEnergy} kJ/mol</div>
                    </div>
                  )}
                  {selected.atomicRadius !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">Atomic Radius</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.atomicRadius} pm</div>
                    </div>
                  )}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 col-span-2 sm:col-span-3">
                    <div className="text-xs text-gray-500">Electron Configuration</div>
                    <div className="font-bold text-gray-900 dark:text-white font-mono text-sm">{selected.electronConfig}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 col-span-2 sm:col-span-3">
                    <div className="text-xs text-gray-500">Common Oxidation States</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.oxidationStates}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AP Chem relevance */}
            <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-200 dark:border-violet-700">
              <p className="text-sm font-bold text-violet-800 dark:text-violet-300 mb-1">AP Chemistry Relevance</p>
              <p className="text-xs text-violet-700 dark:text-violet-400">
                {selected.category === 'alkali' && 'Alkali metals have the lowest ionization energies and electronegativities. They form +1 ions readily and react vigorously with water. Key examples: Na⁺ in solution chemistry, Li in batteries.'}
                {selected.category === 'alkaline-earth' && 'Alkaline earth metals form +2 ions. Important in precipitation reactions (Ca²⁺, Ba²⁺) and Ksp calculations. Mg is key in biological molecules like chlorophyll.'}
                {selected.category === 'transition' && 'Transition metals have multiple oxidation states, form colored compounds and complex ions. Important in redox reactions, coordination chemistry, and catalysis. Variable electron configurations due to d-orbital splitting.'}
                {selected.category === 'post-transition' && 'Post-transition metals show both metallic and covalent bonding. Al is an important amphoteric element. Key in Lewis acid-base chemistry.'}
                {selected.category === 'metalloid' && 'Metalloids have intermediate properties between metals and nonmetals. Si is important in network covalent solids. B is a classic Lewis acid.'}
                {selected.category === 'nonmetal' && 'Nonmetals form covalent bonds and molecular compounds. High electronegativities (except H). Key in organic chemistry, acids, and molecular geometry (VSEPR). C, N, O, P, S are essential in biological molecules.'}
                {selected.category === 'halogen' && 'Halogens are highly electronegative and form -1 ions. Important in acid-base chemistry (HCl, HF), precipitation (AgCl), and organic reactions. Electronegativity decreases down the group.'}
                {selected.category === 'noble-gas' && 'Noble gases have complete electron shells (stable octet). Very high ionization energies. Generally unreactive, but Xe can form compounds. Used as reference points for electron configuration.'}
                {selected.category === 'lanthanide' && 'Lanthanides (rare earth elements) have similar chemical properties due to filling of 4f orbitals. They predominantly show the +3 oxidation state. Important for understanding electron configuration exceptions and f-orbital chemistry.'}
                {selected.category === 'actinide' && 'Actinides include radioactive elements filling 5f orbitals. Uranium and thorium are naturally occurring. Important for nuclear chemistry, radioactive decay series, and understanding f-block electron configurations.'}
              </p>
            </div>
          </div>
        )}

        {/* Periodic Trends Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">📈 Key Periodic Trends (AP Chemistry)</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
              <p className="font-bold text-blue-800 dark:text-blue-300">Electronegativity</p>
              <p className="text-blue-700 dark:text-blue-400 text-xs mt-1">Increases → across a period (more protons pull e⁻ closer)</p>
              <p className="text-blue-700 dark:text-blue-400 text-xs">Decreases ↓ down a group (e⁻ farther from nucleus)</p>
              <p className="text-blue-600 dark:text-blue-500 text-xs mt-1">Highest: F (3.98) · Lowest: Cs (0.79)</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-700">
              <p className="font-bold text-red-800 dark:text-red-300">Ionization Energy</p>
              <p className="text-red-700 dark:text-red-400 text-xs mt-1">Increases → across a period (higher Z_eff)</p>
              <p className="text-red-700 dark:text-red-400 text-xs">Decreases ↓ down a group (e⁻ easier to remove)</p>
              <p className="text-red-600 dark:text-red-500 text-xs mt-1">Highest: He (2372 kJ/mol) · Lowest: Cs (376 kJ/mol)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-700">
              <p className="font-bold text-green-800 dark:text-green-300">Atomic Radius</p>
              <p className="text-green-700 dark:text-green-400 text-xs mt-1">Decreases → across a period (more protons, same shell)</p>
              <p className="text-green-700 dark:text-green-400 text-xs">Increases ↓ down a group (more electron shells)</p>
              <p className="text-green-600 dark:text-green-500 text-xs mt-1">Largest: Cs (298 pm) · Smallest: He (31 pm)</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
              <p className="font-bold text-purple-800 dark:text-purple-300">Electron Affinity</p>
              <p className="text-purple-700 dark:text-purple-400 text-xs mt-1">Generally increases → across a period</p>
              <p className="text-purple-700 dark:text-purple-400 text-xs">Generally decreases ↓ down a group</p>
              <p className="text-purple-600 dark:text-purple-500 text-xs mt-1">Most negative: Cl (-349 kJ/mol) · Noble gases ≈ 0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
