'use client'

import { useState, useMemo } from 'react'
import FocusTrapDialog from './FocusTrapDialog'
import { getReferenceSheet, getCourseSlugFromTopic } from '@/data/ap-reference-sheets'
import { MathText } from './MathText'

/**
 * Renders a reference-sheet formula string as a list item. Items mix prose
 * annotations with inline ($...$) LaTeX, so we delegate to MathText, which
 * lazily loads KaTeX and re-renders once it's ready (leaving non-math text
 * untouched and falling back to the raw span if KaTeX can't parse it).
 */
function FormulaItem({ text, className }: { text: string; className?: string }) {
  return (
    <li className={className}>
      <MathText inline text={text} />
    </li>
  )
}

interface ReferenceSheetModalProps {
  open: boolean
  onClose: () => void
  courseSlug?: string
  topicSlug?: string
}

/**
 * Universal AP reference sheet modal.
 * Shows course-specific formulas and equations based on courseSlug or topicSlug.
 * For AP Chemistry, delegates to the existing APChemReferenceModal content.
 */
export default function ReferenceSheetModal({ open, onClose, courseSlug, topicSlug }: ReferenceSheetModalProps) {
  const resolvedSlug = courseSlug || (topicSlug ? getCourseSlugFromTopic(topicSlug) : undefined)
  const refSheet = useMemo(() => resolvedSlug ? getReferenceSheet(resolvedSlug) : undefined, [resolvedSlug])

  // For AP Chemistry, render the specialized chemistry modal
  if (resolvedSlug === 'ap-chemistry') {
    return <APChemContent open={open} onClose={onClose} />
  }

  if (!refSheet) {
    // No reference sheet available for this course
    if (!open) return null
    return (
      <FocusTrapDialog open={open} onClose={onClose} title="Reference Sheet" className="max-w-lg w-full mx-4">
        <div className="p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">No reference sheet is available for this course.</p>
        </div>
      </FocusTrapDialog>
    )
  }

  return (
    <FocusTrapDialog
      open={open}
      onClose={onClose}
      title={`${refSheet.courseName} Reference Sheet`}
      className="max-w-4xl w-full mx-4"
    >
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pr-8">
          {refSheet.emoji} {refSheet.courseName} Reference Sheet
        </h2>

        <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
          {refSheet.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-accent-hover dark:text-accent-muted mb-2 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-1.5">
                {section.items.map((item, i) => (
                  <FormulaItem
                    key={i}
                    text={item}
                    className="text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/40 rounded px-3 py-1.5"
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => window.print()}
            className="text-sm text-accent dark:text-accent-muted hover:text-accent-hover dark:hover:text-accent-muted font-medium print:hidden"
          >
            🖨️ Print Reference Sheet
          </button>
        </div>
      </div>
    </FocusTrapDialog>
  )
}

/* ═════════════════════════════════════════════════════════════
   AP Chemistry-specific content (periodic table + equations)
   Extracted from APChemReferenceModal to keep the same quality
   ═════════════════════════════════════════════════════════════ */

type Tab = 'periodic' | 'equations'

const PT: { z: number; sym: string; mass: string; row: number; col: number }[] = [
  // Period 1
  { z:1,sym:'H',mass:'1.008',row:1,col:1 },{ z:2,sym:'He',mass:'4.003',row:1,col:18 },
  // Period 2
  { z:3,sym:'Li',mass:'6.941',row:2,col:1 },{ z:4,sym:'Be',mass:'9.012',row:2,col:2 },
  { z:5,sym:'B',mass:'10.81',row:2,col:13 },{ z:6,sym:'C',mass:'12.01',row:2,col:14 },
  { z:7,sym:'N',mass:'14.01',row:2,col:15 },{ z:8,sym:'O',mass:'16.00',row:2,col:16 },
  { z:9,sym:'F',mass:'19.00',row:2,col:17 },{ z:10,sym:'Ne',mass:'20.18',row:2,col:18 },
  // Period 3
  { z:11,sym:'Na',mass:'22.99',row:3,col:1 },{ z:12,sym:'Mg',mass:'24.31',row:3,col:2 },
  { z:13,sym:'Al',mass:'26.98',row:3,col:13 },{ z:14,sym:'Si',mass:'28.09',row:3,col:14 },
  { z:15,sym:'P',mass:'30.97',row:3,col:15 },{ z:16,sym:'S',mass:'32.07',row:3,col:16 },
  { z:17,sym:'Cl',mass:'35.45',row:3,col:17 },{ z:18,sym:'Ar',mass:'39.95',row:3,col:18 },
  // Period 4
  { z:19,sym:'K',mass:'39.10',row:4,col:1 },{ z:20,sym:'Ca',mass:'40.08',row:4,col:2 },
  { z:21,sym:'Sc',mass:'44.96',row:4,col:3 },{ z:22,sym:'Ti',mass:'47.87',row:4,col:4 },
  { z:23,sym:'V',mass:'50.94',row:4,col:5 },{ z:24,sym:'Cr',mass:'52.00',row:4,col:6 },
  { z:25,sym:'Mn',mass:'54.94',row:4,col:7 },{ z:26,sym:'Fe',mass:'55.85',row:4,col:8 },
  { z:27,sym:'Co',mass:'58.93',row:4,col:9 },{ z:28,sym:'Ni',mass:'58.69',row:4,col:10 },
  { z:29,sym:'Cu',mass:'63.55',row:4,col:11 },{ z:30,sym:'Zn',mass:'65.38',row:4,col:12 },
  { z:31,sym:'Ga',mass:'69.72',row:4,col:13 },{ z:32,sym:'Ge',mass:'72.63',row:4,col:14 },
  { z:33,sym:'As',mass:'74.92',row:4,col:15 },{ z:34,sym:'Se',mass:'78.97',row:4,col:16 },
  { z:35,sym:'Br',mass:'79.90',row:4,col:17 },{ z:36,sym:'Kr',mass:'83.80',row:4,col:18 },
  // Period 5
  { z:37,sym:'Rb',mass:'85.47',row:5,col:1 },{ z:38,sym:'Sr',mass:'87.62',row:5,col:2 },
  { z:39,sym:'Y',mass:'88.91',row:5,col:3 },{ z:40,sym:'Zr',mass:'91.22',row:5,col:4 },
  { z:41,sym:'Nb',mass:'92.91',row:5,col:5 },{ z:42,sym:'Mo',mass:'95.95',row:5,col:6 },
  { z:43,sym:'Tc',mass:'(98)',row:5,col:7 },{ z:44,sym:'Ru',mass:'101.1',row:5,col:8 },
  { z:45,sym:'Rh',mass:'102.9',row:5,col:9 },{ z:46,sym:'Pd',mass:'106.4',row:5,col:10 },
  { z:47,sym:'Ag',mass:'107.9',row:5,col:11 },{ z:48,sym:'Cd',mass:'112.4',row:5,col:12 },
  { z:49,sym:'In',mass:'114.8',row:5,col:13 },{ z:50,sym:'Sn',mass:'118.7',row:5,col:14 },
  { z:51,sym:'Sb',mass:'121.8',row:5,col:15 },{ z:52,sym:'Te',mass:'127.6',row:5,col:16 },
  { z:53,sym:'I',mass:'126.9',row:5,col:17 },{ z:54,sym:'Xe',mass:'131.3',row:5,col:18 },
  // Period 6
  { z:55,sym:'Cs',mass:'132.9',row:6,col:1 },{ z:56,sym:'Ba',mass:'137.3',row:6,col:2 },
  { z:71,sym:'Lu',mass:'175.0',row:6,col:3 },{ z:72,sym:'Hf',mass:'178.5',row:6,col:4 },
  { z:73,sym:'Ta',mass:'180.9',row:6,col:5 },{ z:74,sym:'W',mass:'183.8',row:6,col:6 },
  { z:75,sym:'Re',mass:'186.2',row:6,col:7 },{ z:76,sym:'Os',mass:'190.2',row:6,col:8 },
  { z:77,sym:'Ir',mass:'192.2',row:6,col:9 },{ z:78,sym:'Pt',mass:'195.1',row:6,col:10 },
  { z:79,sym:'Au',mass:'197.0',row:6,col:11 },{ z:80,sym:'Hg',mass:'200.6',row:6,col:12 },
  { z:81,sym:'Tl',mass:'204.4',row:6,col:13 },{ z:82,sym:'Pb',mass:'207.2',row:6,col:14 },
  { z:83,sym:'Bi',mass:'209.0',row:6,col:15 },{ z:84,sym:'Po',mass:'(209)',row:6,col:16 },
  { z:85,sym:'At',mass:'(210)',row:6,col:17 },{ z:86,sym:'Rn',mass:'(222)',row:6,col:18 },
  // Period 7
  { z:87,sym:'Fr',mass:'(223)',row:7,col:1 },{ z:88,sym:'Ra',mass:'(226)',row:7,col:2 },
  { z:103,sym:'Lr',mass:'(262)',row:7,col:3 },{ z:104,sym:'Rf',mass:'(267)',row:7,col:4 },
  { z:105,sym:'Db',mass:'(268)',row:7,col:5 },{ z:106,sym:'Sg',mass:'(271)',row:7,col:6 },
  { z:107,sym:'Bh',mass:'(270)',row:7,col:7 },{ z:108,sym:'Hs',mass:'(277)',row:7,col:8 },
  { z:109,sym:'Mt',mass:'(276)',row:7,col:9 },{ z:110,sym:'Ds',mass:'(281)',row:7,col:10 },
  { z:111,sym:'Rg',mass:'(280)',row:7,col:11 },{ z:112,sym:'Cn',mass:'(285)',row:7,col:12 },
  { z:113,sym:'Nh',mass:'(284)',row:7,col:13 },{ z:114,sym:'Fl',mass:'(289)',row:7,col:14 },
  { z:115,sym:'Mc',mass:'(288)',row:7,col:15 },{ z:116,sym:'Lv',mass:'(293)',row:7,col:16 },
  { z:117,sym:'Ts',mass:'(294)',row:7,col:17 },{ z:118,sym:'Og',mass:'(294)',row:7,col:18 },
  // Lanthanides (row 9 visually)
  { z:57,sym:'La',mass:'138.9',row:9,col:3 },{ z:58,sym:'Ce',mass:'140.1',row:9,col:4 },
  { z:59,sym:'Pr',mass:'140.9',row:9,col:5 },{ z:60,sym:'Nd',mass:'144.2',row:9,col:6 },
  { z:61,sym:'Pm',mass:'(145)',row:9,col:7 },{ z:62,sym:'Sm',mass:'150.4',row:9,col:8 },
  { z:63,sym:'Eu',mass:'152.0',row:9,col:9 },{ z:64,sym:'Gd',mass:'157.3',row:9,col:10 },
  { z:65,sym:'Tb',mass:'158.9',row:9,col:11 },{ z:66,sym:'Dy',mass:'162.5',row:9,col:12 },
  { z:67,sym:'Ho',mass:'164.9',row:9,col:13 },{ z:68,sym:'Er',mass:'167.3',row:9,col:14 },
  { z:69,sym:'Tm',mass:'168.9',row:9,col:15 },{ z:70,sym:'Yb',mass:'173.0',row:9,col:16 },
  // Actinides (row 10 visually)
  { z:89,sym:'Ac',mass:'(227)',row:10,col:3 },{ z:90,sym:'Th',mass:'232.0',row:10,col:4 },
  { z:91,sym:'Pa',mass:'231.0',row:10,col:5 },{ z:92,sym:'U',mass:'238.0',row:10,col:6 },
  { z:93,sym:'Np',mass:'(237)',row:10,col:7 },{ z:94,sym:'Pu',mass:'(244)',row:10,col:8 },
  { z:95,sym:'Am',mass:'(243)',row:10,col:9 },{ z:96,sym:'Cm',mass:'(247)',row:10,col:10 },
  { z:97,sym:'Bk',mass:'(247)',row:10,col:11 },{ z:98,sym:'Cf',mass:'(251)',row:10,col:12 },
  { z:99,sym:'Es',mass:'(252)',row:10,col:13 },{ z:100,sym:'Fm',mass:'(257)',row:10,col:14 },
  { z:101,sym:'Md',mass:'(258)',row:10,col:15 },{ z:102,sym:'No',mass:'(259)',row:10,col:16 },
]

const CHEM_EQUATION_SECTIONS: { title: string; items: string[] }[] = [
  {
    title: 'Atomic Structure',
    items: [
      '$E = h\\nu$',
      '$c = \\lambda\\nu$',
      '$E = -2.178 \\times 10^{-18} / n^2$ J  (hydrogen atom)',
    ],
  },
  {
    title: 'Equilibrium',
    items: [
      '$K_c = [\\text{products}]^{coeff} / [\\text{reactants}]^{coeff}$',
      '$K_p = K_c(RT)^{\\Delta n}$',
      '$Q$  (reaction quotient, same form as K)',
      '$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$  (at 25 °C)',
      '$K_a \\times K_b = K_w$',
      '$K_{sp} = [\\text{cation}]^m [\\text{anion}]^n$',
    ],
  },
  {
    title: 'Acids & Bases',
    items: [
      'pH = $-\\log[\\text{H}^+]$',
      'pOH = $-\\log[\\text{OH}^-]$',
      'pH + pOH = 14  (at 25 °C)',
      '$pK_a = -\\log K_a$   ;   $pK_b = -\\log K_b$',
      'Henderson-Hasselbalch:  pH = $pK_a + \\log([\\text{A}^-]/[\\text{HA}])$',
    ],
  },
  {
    title: 'Thermodynamics',
    items: [
      '$\\Delta G^{\\circ} = \\Delta H^{\\circ} - T\\Delta S^{\\circ}$',
      '$\\Delta G^{\\circ} = -RT\\ln K$',
      '$\\Delta G^{\\circ} = -nFE^{\\circ}$',
      '$\\Delta G = \\Delta G^{\\circ} + RT\\ln Q$',
      '$q = mc\\Delta T$',
      '$q = nC\\Delta T$  (molar heat capacity)',
      '$\\Delta H^{\\circ}_{rxn} = \\Sigma\\, \\Delta H^{\\circ}_f(\\text{products}) - \\Sigma\\, \\Delta H^{\\circ}_f(\\text{reactants})$',
      '$\\Delta S^{\\circ}_{rxn} = \\Sigma\\, S^{\\circ}(\\text{products}) - \\Sigma\\, S^{\\circ}(\\text{reactants})$',
      '$\\Delta H^{\\circ}_{rxn} \\approx \\Sigma(\\text{bonds broken}) - \\Sigma(\\text{bonds formed})$',
      '$S = k_B\\ln W$  (Boltzmann)',
    ],
  },
  {
    title: 'Kinetics',
    items: [
      'rate = $k[\\text{A}]^m[\\text{B}]^n$',
      'Zero order:  $[\\text{A}] = [\\text{A}]_0 - kt$  ;  $t_{1/2} = [\\text{A}]_0 / 2k$',
      'First order:  $\\ln[\\text{A}] = \\ln[\\text{A}]_0 - kt$  ;  $t_{1/2} = 0.693 / k$',
      'Second order:  $1/[\\text{A}] = 1/[\\text{A}]_0 + kt$  ;  $t_{1/2} = 1 / (k[\\text{A}]_0)$',
      'Arrhenius:  $k = Ae^{-E_a/RT}$',
      '$\\ln(k_1/k_2) = (E_a/R)(1/T_2 - 1/T_1)$',
    ],
  },
  {
    title: 'Gas Laws',
    items: [
      '$PV = nRT$',
      '$P_{total} = P_1 + P_2 + P_3 + \\ldots$  (Dalton\'s Law)',
      '$P_1V_1 = P_2V_2$  (Boyle)',
      '$V_1/T_1 = V_2/T_2$  (Charles)',
      '$n_1/V_1 = n_2/V_2$  (Avogadro)',
      '$KE_{avg} = \\frac{3}{2}k_B T$  per molecule',
      '$u_{rms} = \\sqrt{3RT/M}$',
    ],
  },
  {
    title: 'Electrochemistry',
    items: [
      '$E^{\\circ}_{cell} = E^{\\circ}_{cathode} - E^{\\circ}_{anode}$',
      '$\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$',
      'Nernst:  $E = E^{\\circ} - (RT / nF)\\ln Q$',
      'At 25 °C:  $E = E^{\\circ} - (0.0592 / n)\\log Q$',
      '$q = It$  (charge = current × time)',
      'moles $e^-$ = $q / F$',
    ],
  },
  {
    title: 'Constants',
    items: [
      '$R = 8.314$ J mol⁻¹ K⁻¹ = 0.08206 L atm mol⁻¹ K⁻¹',
      'F = 96 485 C mol⁻¹',
      '$N_A = 6.022 \\times 10^{23}$ mol⁻¹',
      '$h = 6.626 \\times 10^{-34}$ J s',
      '$c = 2.998 \\times 10^8$ m s⁻¹',
      '$k_B = 1.381 \\times 10^{-23}$ J K⁻¹',
      '1 atm = 760 mmHg = 101.325 kPa',
      '0 °C = 273.15 K',
      '$K_w = 1.0 \\times 10^{-14}$  (at 25 °C)',
      '1 eV = $1.602 \\times 10^{-19}$ J',
    ],
  },
]

function APChemContent({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('periodic')

  return (
    <FocusTrapDialog
      open={open}
      onClose={onClose}
      title="AP Chemistry Reference"
      className="max-w-5xl w-full mx-4"
    >
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pr-8">
          🧪 AP Chemistry Reference Sheet
        </h2>

        <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          <button
            onClick={() => setTab('periodic')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === 'periodic'
                ? 'bg-accent-light dark:bg-accent-light/40 text-accent-hover dark:text-accent-muted'
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🧪 Periodic Table
          </button>
          <button
            onClick={() => setTab('equations')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === 'equations'
                ? 'bg-accent-light dark:bg-accent-light/40 text-accent-hover dark:text-accent-muted'
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            📐 Equations &amp; Constants
          </button>
        </div>

        {tab === 'periodic' ? <PeriodicTableView /> : <ChemEquationsView />}
      </div>
    </FocusTrapDialog>
  )
}

function PeriodicTableView() {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <div
        className="inline-grid gap-[2px] min-w-[720px]"
        style={{
          gridTemplateColumns: 'repeat(18, minmax(38px, 1fr))',
          gridTemplateRows: 'repeat(10, auto)',
        }}
      >
        {PT.map((el) => (
          <div
            key={el.z}
            className="border border-gray-300 dark:border-gray-600 rounded p-[2px] text-center leading-tight bg-white dark:bg-gray-800 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors"
            style={{ gridRow: el.row, gridColumn: el.col }}
          >
            <div className="text-[9px] text-gray-400 dark:text-gray-500">{el.z}</div>
            <div className="text-xs font-bold text-gray-900 dark:text-white">{el.sym}</div>
            <div className="text-[8px] text-gray-500 dark:text-gray-400">{el.mass}</div>
          </div>
        ))}
        <div
          className="text-[9px] text-gray-400 dark:text-gray-500 flex items-center justify-end pr-1"
          style={{ gridRow: 9, gridColumn: '1 / 3' }}
        >
          Ln
        </div>
        <div
          className="text-[9px] text-gray-400 dark:text-gray-500 flex items-center justify-end pr-1"
          style={{ gridRow: 10, gridColumn: '1 / 3' }}
        >
          An
        </div>
      </div>
      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 text-center">
        Atomic number &bull; Symbol &bull; Atomic mass
      </p>
    </div>
  )
}

function ChemEquationsView() {
  return (
    <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
      {CHEM_EQUATION_SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-bold text-accent-hover dark:text-accent-muted mb-2 uppercase tracking-wide">
            {section.title}
          </h3>
          <ul className="space-y-1.5">
            {section.items.map((item, i) => (
              <FormulaItem
                key={i}
                text={item}
                className="text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/40 rounded px-3 py-1.5"
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
