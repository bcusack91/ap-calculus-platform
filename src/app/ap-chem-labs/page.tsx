'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

type LabId = 'titration' | 'calorimetry'
type View = 'menu' | 'lab'

/* ================================================================== */
/*  Titration Curve Simulator                                          */
/* ================================================================== */

interface TitrationConfig {
  acid: string
  base: string
  acidConcentration: number  // M
  acidVolume: number         // mL
  baseConcentration: number  // M
  acidKa?: number
}

const TITRATION_PRESETS: { label: string; config: TitrationConfig }[] = [
  { label: 'Strong Acid–Strong Base (HCl + NaOH)', config: { acid: 'HCl', base: 'NaOH', acidConcentration: 0.1, acidVolume: 50, baseConcentration: 0.1 } },
  { label: 'Weak Acid–Strong Base (CH₃COOH + NaOH)', config: { acid: 'CH₃COOH', base: 'NaOH', acidConcentration: 0.1, acidVolume: 50, baseConcentration: 0.1, acidKa: 1.8e-5 } },
  { label: 'Strong Acid–Strong Base (H₂SO₄ + NaOH)', config: { acid: 'H₂SO₄', base: 'NaOH', acidConcentration: 0.05, acidVolume: 50, baseConcentration: 0.1 } },
  { label: 'Weak Acid–Strong Base (HF + NaOH)', config: { acid: 'HF', base: 'NaOH', acidConcentration: 0.1, acidVolume: 50, baseConcentration: 0.1, acidKa: 6.8e-4 } },
]

function calculateTitrationpH(config: TitrationConfig, vBase: number): number {
  const { acidConcentration: Ca, acidVolume: Va, baseConcentration: Cb, acidKa } = config
  const molesAcid = Ca * Va / 1000
  const molesBase = Cb * vBase / 1000
  const totalV = (Va + vBase) / 1000

  if (acidKa) {
    // Weak acid titration
    if (vBase === 0) {
      // Initial: only weak acid
      const x = Math.sqrt(acidKa * Ca)
      return -Math.log10(Math.max(x, 1e-14))
    }
    if (Math.abs(molesBase - molesAcid) < 1e-10) {
      // Equivalence point: conjugate base in solution
      const Kb = 1e-14 / acidKa
      const Csalt = molesAcid / totalV
      const x = Math.sqrt(Kb * Csalt)
      return 14 + Math.log10(Math.max(x, 1e-14))
    }
    if (molesBase < molesAcid) {
      // Buffer region
      const mAcidRemaining = molesAcid - molesBase
      const mConjugate = molesBase
      return -Math.log10(acidKa) + Math.log10(mConjugate / mAcidRemaining)
    }
    // Past equivalence: excess OH-
    const excessOH = (molesBase - molesAcid) / totalV
    return 14 + Math.log10(Math.max(excessOH, 1e-14))
  } else {
    // Strong acid titration
    if (molesBase < molesAcid) {
      const excessH = (molesAcid - molesBase) / totalV
      return -Math.log10(Math.max(excessH, 1e-14))
    }
    if (Math.abs(molesBase - molesAcid) < 1e-10) {
      return 7
    }
    const excessOH = (molesBase - molesAcid) / totalV
    return 14 + Math.log10(Math.max(excessOH, 1e-14))
  }
}

function TitrationLab() {
  const [presetIdx, setPresetIdx] = useState(0)
  const [volumeAdded, setVolumeAdded] = useState(0)
  const [dataPoints, setDataPoints] = useState<{ v: number; pH: number }[]>([])
  const [showHint, setShowHint] = useState(false)

  const config = TITRATION_PRESETS[presetIdx].config
  const equivalenceVolume = (config.acidConcentration * config.acidVolume) / config.baseConcentration
  const maxVolume = Math.round(equivalenceVolume * 2.5)

  const currentpH = useMemo(() => calculateTitrationpH(config, volumeAdded), [config, volumeAdded])

  // Full curve for background display
  const fullCurve = useMemo(() => {
    const pts: { v: number; pH: number }[] = []
    for (let v = 0; v <= maxVolume; v += 0.5) {
      pts.push({ v, pH: calculateTitrationpH(config, v) })
    }
    return pts
  }, [config, maxVolume])

  const addDataPoint = useCallback(() => {
    setDataPoints((prev) => {
      if (prev.some(p => Math.abs(p.v - volumeAdded) < 0.01)) return prev
      return [...prev, { v: volumeAdded, pH: currentpH }].sort((a, b) => a.v - b.v)
    })
  }, [volumeAdded, currentpH])

  const clearData = useCallback(() => setDataPoints([]), [])

  const autoFill = useCallback(() => {
    const pts: { v: number; pH: number }[] = []
    for (let v = 0; v <= maxVolume; v += 2) {
      pts.push({ v, pH: calculateTitrationpH(config, v) })
    }
    // Add points near equivalence for resolution
    for (let v = Math.max(0, equivalenceVolume - 3); v <= equivalenceVolume + 3; v += 0.5) {
      pts.push({ v, pH: calculateTitrationpH(config, v) })
    }
    setDataPoints(pts.sort((a, b) => a.v - b.v))
  }, [config, maxVolume, equivalenceVolume])

  const getIndicatorColor = (pH: number): string => {
    if (pH < 3) return '#FF4136'
    if (pH < 5) return '#FF851B'
    if (pH < 7) return '#FFDC00'
    if (pH < 8) return '#2ECC40'
    if (pH < 10) return '#0074D9'
    return '#B10DC9'
  }

  const reset = () => { setVolumeAdded(0); clearData() }

  // SVG chart dimensions
  const W = 600, H = 350, PAD = { l: 55, r: 20, t: 20, b: 45 }
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const xScale = (v: number) => PAD.l + (v / maxVolume) * plotW
  const yScale = (pH: number) => PAD.t + ((14 - pH) / 14) * plotH

  return (
    <div className="space-y-6">
      {/* Preset selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Reaction:</label>
        <select
          value={presetIdx}
          onChange={(e) => { setPresetIdx(Number(e.target.value)); reset() }}
          className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
        >
          {TITRATION_PRESETS.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
        </select>
      </div>

      {/* Current state */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center border border-blue-200 dark:border-blue-700">
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Volume Added</div>
          <div className="text-xl font-bold text-blue-800 dark:text-blue-200">{volumeAdded.toFixed(1)} mL</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 text-center border border-purple-200 dark:border-purple-700">
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Current pH</div>
          <div className="text-xl font-bold text-purple-800 dark:text-purple-200">{currentpH.toFixed(2)}</div>
        </div>
        <div className="rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700" style={{ backgroundColor: getIndicatorColor(currentpH) + '20' }}>
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Indicator</div>
          <div className="w-8 h-8 mx-auto mt-1 rounded-full border-2 border-white shadow" style={{ backgroundColor: getIndicatorColor(currentpH) }} />
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 text-center border border-amber-200 dark:border-amber-700">
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">Equiv. Point</div>
          <div className="text-xl font-bold text-amber-800 dark:text-amber-200">{equivalenceVolume.toFixed(1)} mL</div>
        </div>
      </div>

      {/* Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Add {config.base} ({config.baseConcentration} M):
        </label>
        <input
          type="range"
          min={0}
          max={maxVolume}
          step={0.5}
          value={volumeAdded}
          onChange={(e) => setVolumeAdded(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>0 mL</span>
          <span>{maxVolume} mL</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <button onClick={addDataPoint} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">Record Point</button>
        <button onClick={autoFill} className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">Auto-Fill Curve</button>
        <button onClick={clearData} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Clear Data</button>
        <button onClick={() => setShowHint(!showHint)} className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-medium rounded-lg hover:bg-amber-200 transition">
          {showHint ? 'Hide' : 'Show'} Theory
        </button>
      </div>

      {/* Titration Curve SVG */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[600px] mx-auto">
          {/* Grid */}
          {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(pH => (
            <g key={`yg-${pH}`}>
              <line x1={PAD.l} y1={yScale(pH)} x2={W - PAD.r} y2={yScale(pH)} stroke="#e5e7eb" strokeWidth={pH === 7 ? 1.5 : 0.5} strokeDasharray={pH === 7 ? '4 2' : undefined} />
              <text x={PAD.l - 8} y={yScale(pH) + 4} textAnchor="end" fontSize={11} fill="#9ca3af">{pH}</text>
            </g>
          ))}
          {Array.from({ length: Math.floor(maxVolume / 10) + 1 }, (_, i) => i * 10).map(v => (
            <g key={`xg-${v}`}>
              <line x1={xScale(v)} y1={PAD.t} x2={xScale(v)} y2={H - PAD.b} stroke="#e5e7eb" strokeWidth={0.5} />
              <text x={xScale(v)} y={H - PAD.b + 16} textAnchor="middle" fontSize={11} fill="#9ca3af">{v}</text>
            </g>
          ))}
          {/* Axes labels */}
          <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={12} fill="#6b7280">Volume of {config.base} (mL)</text>
          <text x={14} y={H / 2} textAnchor="middle" fontSize={12} fill="#6b7280" transform={`rotate(-90 14 ${H / 2})`}>pH</text>

          {/* Reference curve (faded) */}
          <polyline
            points={fullCurve.map(p => `${xScale(p.v)},${yScale(Math.max(0, Math.min(14, p.pH)))}`).join(' ')}
            fill="none"
            stroke="#93c5fd"
            strokeWidth={1.5}
            opacity={0.3}
          />

          {/* Equivalence point line */}
          <line x1={xScale(equivalenceVolume)} y1={PAD.t} x2={xScale(equivalenceVolume)} y2={H - PAD.b} stroke="#f59e0b" strokeWidth={1} strokeDasharray="6 3" opacity={0.6} />

          {/* Data points and connections */}
          {dataPoints.length > 1 && (
            <polyline
              points={dataPoints.map(p => `${xScale(p.v)},${yScale(Math.max(0, Math.min(14, p.pH)))}`).join(' ')}
              fill="none"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}
          {dataPoints.map((p, i) => (
            <circle key={i} cx={xScale(p.v)} cy={yScale(Math.max(0, Math.min(14, p.pH)))} r={4} fill="#3b82f6" stroke="white" strokeWidth={1.5} />
          ))}

          {/* Current position marker */}
          <circle cx={xScale(volumeAdded)} cy={yScale(Math.max(0, Math.min(14, currentpH)))} r={6} fill="#ef4444" stroke="white" strokeWidth={2} />
        </svg>
      </div>

      {/* Theory hints */}
      {showHint && (
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 p-5 text-sm text-amber-800 dark:text-amber-300 space-y-2">
          <p className="font-bold">Key Concepts:</p>
          {config.acidKa ? (
            <>
              <p>• This is a <strong>weak acid–strong base</strong> titration (Ka = {config.acidKa.toExponential(1)})</p>
              <p>• <strong>Half-equivalence point</strong>: pH = pKa = {(-Math.log10(config.acidKa)).toFixed(2)} (when {(equivalenceVolume / 2).toFixed(1)} mL added)</p>
              <p>• <strong>Buffer region</strong>: the flat region before equivalence where pH changes slowly</p>
              <p>• <strong>Equivalence point pH &gt; 7</strong> because the conjugate base is left in solution</p>
            </>
          ) : (
            <>
              <p>• This is a <strong>strong acid–strong base</strong> titration</p>
              <p>• <strong>Equivalence point pH = 7</strong> (neutral, no hydrolysis)</p>
              <p>• The steepest part of the curve is near the equivalence point</p>
              <p>• Before equivalence: excess H⁺ dominates; After: excess OH⁻ dominates</p>
            </>
          )}
          <p>• <strong>Equivalence volume</strong> = (C_acid × V_acid) / C_base = ({config.acidConcentration} × {config.acidVolume}) / {config.baseConcentration} = {equivalenceVolume.toFixed(1)} mL</p>
        </div>
      )}

      {/* Data table */}
      {dataPoints.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Recorded Data ({dataPoints.length} points)</h4>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-px p-3 text-xs">
            {dataPoints.map((p, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded p-1.5 text-center">
                <div className="text-gray-500">{p.v.toFixed(1)}</div>
                <div className="font-bold text-gray-800 dark:text-gray-200">{p.pH.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ================================================================== */
/*  Calorimetry Simulator                                              */
/* ================================================================== */

interface CalorimetryReaction {
  name: string
  equation: string
  deltaH: number // kJ/mol (negative = exothermic)
  molarMass: number // g/mol of limiting reagent
  sampleMassDefault: number // g
}

const CALORIMETRY_REACTIONS: CalorimetryReaction[] = [
  { name: 'Dissolving NaOH in water', equation: 'NaOH(s) → Na⁺(aq) + OH⁻(aq)', deltaH: -44.5, molarMass: 40.0, sampleMassDefault: 2.0 },
  { name: 'Dissolving NH₄NO₃ (cold pack)', equation: 'NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq)', deltaH: 25.7, molarMass: 80.04, sampleMassDefault: 5.0 },
  { name: 'Neutralization HCl + NaOH', equation: 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)', deltaH: -57.3, molarMass: 36.46, sampleMassDefault: 1.82 },
  { name: 'Dissolving CaCl₂ (hot pack)', equation: 'CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq)', deltaH: -81.3, molarMass: 110.98, sampleMassDefault: 3.0 },
]

function CalorimetryLab() {
  const [reactionIdx, setReactionIdx] = useState(0)
  const [waterVolume, setWaterVolume] = useState(100) // mL
  const [sampleMass, setSampleMass] = useState(CALORIMETRY_REACTIONS[0].sampleMassDefault)
  const [initialTemp, setInitialTemp] = useState(25)
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [tempData, setTempData] = useState<{ t: number; T: number }[]>([])
  const [showWork, setShowWork] = useState(false)

  const rxn = CALORIMETRY_REACTIONS[reactionIdx]
  const specificHeatWater = 4.184 // J/(g·°C)
  const waterMass = waterVolume * 1.0 // assume density 1 g/mL

  // Calculate expected ΔT
  const moles = sampleMass / rxn.molarMass
  const qReaction = moles * rxn.deltaH * 1000 // J
  const expectedDeltaT = -qReaction / (waterMass * specificHeatWater)
  const finalTemp = initialTemp + expectedDeltaT

  // Simulate
  const startSimulation = useCallback(() => {
    setRunning(true)
    setElapsed(0)
    setTempData([])

    let step = 0
    const totalSteps = 40
    const interval = setInterval(() => {
      step++
      // Exponential approach to final temp with some noise
      const progress = 1 - Math.exp(-step / 8)
      const noise = (Math.random() - 0.5) * 0.2
      const currentTemp = initialTemp + expectedDeltaT * progress + noise
      setTempData(prev => [...prev, { t: step * 5, T: Number(currentTemp.toFixed(2)) }])
      setElapsed(step * 5)

      if (step >= totalSteps) {
        clearInterval(interval)
        setRunning(false)
      }
    }, 200)
  }, [initialTemp, expectedDeltaT])

  const resetLab = () => {
    setRunning(false)
    setElapsed(0)
    setTempData([])
    setShowWork(false)
  }

  const currentTemp = tempData.length > 0 ? tempData[tempData.length - 1].T : initialTemp

  // SVG chart
  const W = 600, H = 300, PAD = { l: 55, r: 20, t: 20, b: 45 }
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const tMax = 200
  const TMin = Math.min(initialTemp, finalTemp) - 3
  const TMax = Math.max(initialTemp, finalTemp) + 3
  const xScale = (t: number) => PAD.l + (t / tMax) * plotW
  const yScale = (T: number) => PAD.t + ((TMax - T) / (TMax - TMin)) * plotH

  const isExothermic = rxn.deltaH < 0

  return (
    <div className="space-y-6">
      {/* Reaction selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Reaction:</label>
        <select
          value={reactionIdx}
          onChange={(e) => {
            const idx = Number(e.target.value)
            setReactionIdx(idx)
            setSampleMass(CALORIMETRY_REACTIONS[idx].sampleMassDefault)
            resetLab()
          }}
          className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
        >
          {CALORIMETRY_REACTIONS.map((r, i) => <option key={i} value={i}>{r.name}</option>)}
        </select>
        <p className="text-xs text-gray-500 mt-1">{rxn.equation}</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Water Volume (mL)</label>
          <input
            type="number"
            min={10}
            max={500}
            value={waterVolume}
            onChange={(e) => { setWaterVolume(Number(e.target.value)); resetLab() }}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            disabled={running}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Sample Mass (g)</label>
          <input
            type="number"
            min={0.1}
            max={50}
            step={0.1}
            value={sampleMass}
            onChange={(e) => { setSampleMass(Number(e.target.value)); resetLab() }}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            disabled={running}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Initial Temp (°C)</label>
          <input
            type="number"
            min={10}
            max={40}
            value={initialTemp}
            onChange={(e) => { setInitialTemp(Number(e.target.value)); resetLab() }}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            disabled={running}
          />
        </div>
      </div>

      {/* Status display */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className={`rounded-xl p-3 text-center border ${isExothermic ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700' : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'}`}>
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Type</div>
          <div className={`text-sm font-bold ${isExothermic ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>{isExothermic ? 'Exothermic' : 'Endothermic'}</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-600">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Current Temp</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{currentTemp.toFixed(1)}°C</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-600">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Time</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{elapsed}s</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-600">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Moles</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{moles.toFixed(4)}</div>
        </div>
      </div>

      {/* Thermometer visual */}
      <div className="flex items-center gap-4">
        <div className="relative h-48 w-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
          <div
            className={`absolute bottom-0 w-full rounded-full transition-all duration-300 ${isExothermic ? 'bg-gradient-to-t from-red-500 to-orange-400' : 'bg-gradient-to-t from-blue-500 to-cyan-400'}`}
            style={{ height: `${Math.min(100, Math.max(5, ((currentTemp - TMin) / (TMax - TMin)) * 100))}%` }}
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-2">
            <button
              onClick={startSimulation}
              disabled={running}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {running ? 'Running...' : tempData.length > 0 ? 'Run Again' : 'Start Experiment'}
            </button>
            <button onClick={resetLab} disabled={running} className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50">
              Reset
            </button>
          </div>
          <button onClick={() => setShowWork(!showWork)} className="mt-2 w-full px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-medium rounded-lg hover:bg-amber-200 transition">
            {showWork ? 'Hide' : 'Show'} Calculations
          </button>
        </div>
      </div>

      {/* SVG Chart */}
      {tempData.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 overflow-x-auto">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[600px] mx-auto">
            {/* Grid */}
            {Array.from({ length: 5 }, (_, i) => TMin + (i / 4) * (TMax - TMin)).map((T, i) => (
              <g key={`yg-${i}`}>
                <line x1={PAD.l} y1={yScale(T)} x2={W - PAD.r} y2={yScale(T)} stroke="#e5e7eb" strokeWidth={0.5} />
                <text x={PAD.l - 8} y={yScale(T) + 4} textAnchor="end" fontSize={11} fill="#9ca3af">{T.toFixed(1)}</text>
              </g>
            ))}
            {Array.from({ length: 5 }, (_, i) => i * (tMax / 4)).map(t => (
              <g key={`xg-${t}`}>
                <line x1={xScale(t)} y1={PAD.t} x2={xScale(t)} y2={H - PAD.b} stroke="#e5e7eb" strokeWidth={0.5} />
                <text x={xScale(t)} y={H - PAD.b + 16} textAnchor="middle" fontSize={11} fill="#9ca3af">{t}s</text>
              </g>
            ))}
            <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={12} fill="#6b7280">Time (s)</text>
            <text x={14} y={H / 2} textAnchor="middle" fontSize={12} fill="#6b7280" transform={`rotate(-90 14 ${H / 2})`}>Temp (°C)</text>

            {/* Data line */}
            {tempData.length > 1 && (
              <polyline
                points={tempData.map(p => `${xScale(p.t)},${yScale(p.T)}`).join(' ')}
                fill="none"
                stroke={isExothermic ? '#ef4444' : '#3b82f6'}
                strokeWidth={2}
              />
            )}
            {tempData.map((p, i) => (
              <circle key={i} cx={xScale(p.t)} cy={yScale(p.T)} r={3} fill={isExothermic ? '#ef4444' : '#3b82f6'} stroke="white" strokeWidth={1} />
            ))}
          </svg>
        </div>
      )}

      {/* Calculations */}
      {showWork && (
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 p-5 text-sm space-y-2">
          <p className="font-bold text-amber-800 dark:text-amber-300">Step-by-Step Calculation:</p>
          <p className="text-amber-700 dark:text-amber-400">
            1. <strong>Moles of solute</strong>: n = mass / M = {sampleMass} g / {rxn.molarMass} g/mol = <strong>{moles.toFixed(4)} mol</strong>
          </p>
          <p className="text-amber-700 dark:text-amber-400">
            2. <strong>Heat of reaction</strong>: q_rxn = n × ΔH = {moles.toFixed(4)} × ({rxn.deltaH} kJ/mol) × 1000 = <strong>{qReaction.toFixed(1)} J</strong>
          </p>
          <p className="text-amber-700 dark:text-amber-400">
            3. <strong>q_water = -q_rxn</strong> = {(-qReaction).toFixed(1)} J (conservation of energy)
          </p>
          <p className="text-amber-700 dark:text-amber-400">
            4. <strong>ΔT</strong> = q_water / (m × c) = {(-qReaction).toFixed(1)} / ({waterMass} × {specificHeatWater}) = <strong>{expectedDeltaT.toFixed(2)} °C</strong>
          </p>
          <p className="text-amber-700 dark:text-amber-400">
            5. <strong>Final temp</strong> = {initialTemp} + ({expectedDeltaT.toFixed(2)}) = <strong>{finalTemp.toFixed(2)} °C</strong>
          </p>
          <div className="mt-3 p-3 bg-amber-100 dark:bg-amber-800/30 rounded-lg">
            <p className="font-bold text-amber-900 dark:text-amber-200">Key Formula: q = mcΔT</p>
            <p className="text-xs text-amber-700 dark:text-amber-400">where m = mass of water (g), c = specific heat of water (4.184 J/g·°C), ΔT = change in temperature</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ================================================================== */
/*  Main Page                                                          */
/* ================================================================== */

export default function APChemLabsPage() {
  const [view, setView] = useState<View>('menu')
  const [currentLab, setCurrentLab] = useState<LabId>('titration')

  const labs = [
    {
      id: 'titration' as LabId,
      title: 'Acid-Base Titration',
      description: 'Simulate titration curves for strong and weak acid-base pairs. Visualize pH changes, identify equivalence points, and understand buffer regions.',
      icon: '🧪',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      topics: ['pH calculations', 'Equivalence point', 'Buffer region', 'Henderson-Hasselbalch', 'Indicator selection'],
      units: ['Unit 8: Acids & Bases'],
    },
    {
      id: 'calorimetry' as LabId,
      title: 'Calorimetry',
      description: 'Measure enthalpy changes for dissolution and neutralization reactions. Calculate q = mcΔT and determine ΔH from experimental data.',
      icon: '🌡️',
      color: 'from-red-600 to-orange-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-700',
      topics: ['q = mcΔT', 'Enthalpy of solution', 'Exothermic vs endothermic', 'Specific heat', 'Conservation of energy'],
      units: ['Unit 6: Thermodynamics'],
    },
  ]

  if (view === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/ap-chemistry" className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6">
            ← Back to AP Chemistry
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              🔬 Virtual Labs
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              AP Chemistry{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Virtual Labs
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Interactive lab simulations that let you explore chemistry concepts hands-on.
              Adjust variables, collect data, and see real-time results.
            </p>
          </div>

          <div className="space-y-4">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => { setCurrentLab(lab.id); setView('lab') }}
                className={`w-full text-left p-6 rounded-2xl border ${lab.borderColor} ${lab.bgColor} hover:shadow-lg transition group`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{lab.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:underline">{lab.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{lab.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {lab.topics.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600">{t}</span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{lab.units.join(' · ')}</div>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 transition text-2xl">→</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Lab view
  const lab = labs.find(l => l.id === currentLab)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setView('menu')} className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6">
          ← Back to Labs
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{lab.icon}</span>
          <div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">{lab.title}</h1>
            <p className="text-sm text-gray-500">{lab.units.join(' · ')}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          {currentLab === 'titration' && <TitrationLab />}
          {currentLab === 'calorimetry' && <CalorimetryLab />}
        </div>
      </div>
    </div>
  )
}
