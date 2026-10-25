/**
 * Entrance Quiz — Materials, Fasteners and Shop Processes (ASVAB Shop Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { SI_NAIL_ROOFING, SI_ACORN_NUT, SI_MITER } from '@/data/asvab-figures/si'

const P1 = 'Materials and Fasteners on the ASVAB'
const P2 = 'Nails and Screws'
const P3 = 'Bolts, Nuts, Washers, Rivets and Threads'
const P4 = 'Wood, Lumber and Building Materials'
const P5 = 'Metals, Welding, Soldering and Finishing'
const P6 = 'Materials and Fasteners Test Strategy and Traps'
const P7 = 'Materials, Fasteners and Shop Processes Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'si-materials-fasteners-ent-1a',
    question: 'Which fastener holds parts by clamping them between its head and a nut, and comes apart with a wrench?',
    options: ['A rivet', 'A bolt', 'A finishing nail', 'A wood screw'],
    correctIndex: 1,
    explanation: 'A bolt passes through the parts and a nut clamps them; remove the nut and it comes apart. A rivet is permanent, a nail holds by friction, and a wood screw cuts threads into the wood itself.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'si-materials-fasteners-ent-1b',
    question: 'Compared with screws, nails are generally better for:',
    options: ['Resisting being pulled straight out', 'Joining metal parts permanently', 'Fast work carrying sideways loads', 'Easy removal and reassembly later'],
    correctIndex: 2,
    explanation: 'Nails go in fast and hold well against sideways (shear) loads, which is why framing is nailed. Screws resist pulling out and come apart more easily; rivets join metal permanently.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'si-materials-fasteners-ent-2a',
    question: 'How long is an 8d (eight-penny) nail?',
    options: ['2 inches', '8 inches', '2 1/2 inches', '3 1/4 inches'],
    correctIndex: 2,
    explanation: 'A 2d nail is $1$ inch and each penny adds $\\frac{1}{4}$ inch, so 8d $= 1 + \\frac{6}{4} = 2\\frac{1}{2}$ inches. The "d" is a length code, not inches.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'si-materials-fasteners-ent-2b',
    question: 'Which nail is shown in the figure?',
    figure: SI_NAIL_ROOFING.svg,
    figureAlt: SI_NAIL_ROOFING.alt,
    options: ['Roofing nail', 'Casing nail', 'Duplex nail', 'Finishing brad'],
    correctIndex: 0,
    explanation: 'Roofing nails have wide heads that keep shingles and felt from tearing through, and they are usually galvanized. Casing nails and brads have small heads for trim, and duplex nails are for temporary work.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'si-materials-fasteners-ent-3a',
    question: 'A bolt is labeled $\\frac{5}{16}$-18. What does the 18 tell you?',
    options: ['Its length is 18 sixteenths of an inch', 'It has 18 threads per inch', 'It is made of grade 18 steel', 'Its head is 18 millimeters across'],
    correctIndex: 1,
    explanation: 'In a size like $\\frac{5}{16}$-18, the first number is the diameter in inches and the second is threads per inch.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'si-materials-fasteners-ent-3b',
    question: 'Which nut is shown in the figure?',
    figure: SI_ACORN_NUT.svg,
    figureAlt: SI_ACORN_NUT.alt,
    options: ['Jam nut', 'Castle nut', 'Wing nut', 'Acorn (cap) nut'],
    correctIndex: 3,
    explanation: 'An acorn or cap nut is closed on top, hiding the bolt\'s sharp threads. A castle nut is slotted for a cotter pin, a wing nut is turned by hand, and a jam nut is a thin locking nut.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'si-materials-fasteners-ent-4a',
    question: 'What are the actual dimensions of a nominal $2 \\times 4$?',
    options: ['2 × 4 inches', '1 3/4 × 3 3/4 inches', '1 1/2 × 3 1/2 inches', '1 1/4 × 3 1/4 inches'],
    correctIndex: 2,
    explanation: 'Drying and planing shrink a nominal $2 \\times 4$ to $1\\frac{1}{2} \\times 3\\frac{1}{2}$ inches.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'si-materials-fasteners-ent-4b',
    question: 'Concrete is made from cement, water and what else?',
    options: ['Lime and clay', 'Sand and gravel', 'Gypsum and glue', 'Sawdust and resin'],
    correctIndex: 1,
    explanation: 'Concrete is cement and water binding sand (fine aggregate) and gravel (coarse aggregate). Gypsum is the core of drywall.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'si-materials-fasteners-ent-5a',
    question: 'Which metal is used for most household electrical wiring because it conducts electricity so well?',
    options: ['Cast iron', 'Stainless steel', 'Lead', 'Copper'],
    correctIndex: 3,
    explanation: 'Copper is an excellent conductor and easy to bend, so it is the standard wiring metal. Iron, stainless steel and lead conduct far worse.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'si-materials-fasteners-ent-5b',
    question: 'Which metal-joining process uses the lowest heat?',
    options: ['Soldering', 'Brazing', 'Arc welding', 'Oxyacetylene welding'],
    correctIndex: 0,
    explanation: 'Soldering melts a low-melting tin-alloy filler and uses the least heat. Brazing is hotter, and welding is hottest because it melts the base metal.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'si-materials-fasteners-ent-6a',
    question: 'Which statement is true?',
    options: ['A higher gauge number means thicker sheet metal', 'A higher penny number means a shorter nail', 'A higher grit number means finer sandpaper', 'A higher TPI number means a coarser thread'],
    correctIndex: 2,
    explanation: 'Higher grit = finer sandpaper. The others are reversed: higher gauge is thinner, higher penny is longer, and higher TPI is finer.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'si-materials-fasteners-ent-6b',
    question: 'Which sheet of steel is thicker?',
    options: ['20-gauge', '14-gauge', '24-gauge', '28-gauge'],
    correctIndex: 1,
    explanation: 'For gauge, the smaller number is thicker, so 14-gauge is the thickest of these.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'si-materials-fasteners-ent-7a',
    question: 'Which wood joint is shown in the figure?',
    figure: SI_MITER.svg,
    figureAlt: SI_MITER.alt,
    options: ['Dado', 'Miter', 'Rabbet', 'Lap'],
    correctIndex: 1,
    explanation: 'A miter joint meets at a corner with both ends angled, as on a picture frame. A dado is a groove across a face, a rabbet is a notch along an edge, and a lap joint overlaps two half-thickness boards.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'si-materials-fasteners-ent-7b',
    question: 'Where is pressure-treated lumber mainly used?',
    options: ['Indoor furniture and cabinets', 'Fine trim that will be stained', 'Ground contact or weather', 'Inside walls as drywall backing'],
    correctIndex: 2,
    explanation: 'Pressure-treated lumber is soaked with chemicals that resist rot and insects, so it goes where wood touches the ground or the weather: decks, fence posts, sill plates.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
