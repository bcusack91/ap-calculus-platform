/**
 * Entrance Quiz — Mixtures & Separations
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ms-ent-1a', question: 'A pure substance is composed of:', options: ['Only one type of atom or molecule', 'A homogeneous mixture', 'Any single phase', 'Only elements'], correctIndex: 0, explanation: 'A pure substance has a fixed composition — either a single element (like gold) or a single compound (like water). Mixtures contain multiple substances.', partNumber: 1, partTitle: 'Pure Substances vs Mixtures' },
  { id: 'ms-ent-1b', question: 'Which of the following is a mixture?', options: ['Distilled water ($H_2O$)', 'Table salt ($NaCl$)', 'Salt water', 'Carbon dioxide ($CO_2$)'], correctIndex: 2, explanation: 'Salt water is a mixture of NaCl and water. The others are pure substances with fixed compositions.', partNumber: 1, partTitle: 'Pure Substances vs Mixtures' },

  { id: 'ms-ent-2a', question: 'A homogeneous mixture is also called a:', options: ['Suspension', 'Colloid', 'Solution', 'Heterogeneous mixture'], correctIndex: 2, explanation: 'A homogeneous mixture has uniform composition throughout and is called a solution. You cannot distinguish the components visually.', partNumber: 2, partTitle: 'Homogeneous & Heterogeneous' },
  { id: 'ms-ent-2b', question: 'Which is a heterogeneous mixture?', options: ['Air', 'Vinegar', 'Granite', 'Rubbing alcohol'], correctIndex: 2, explanation: 'Granite has visibly different mineral components (quartz, feldspar, mica), making it heterogeneous. Air and vinegar are solutions (homogeneous).', partNumber: 2, partTitle: 'Homogeneous & Heterogeneous' },

  { id: 'ms-ent-3a', question: 'Filtration separates mixtures based on:', options: ['Boiling point differences', 'Particle size (solid from liquid)', 'Density differences', 'Solubility in a mobile phase'], correctIndex: 1, explanation: 'Filtration uses a porous barrier to separate solid particles from a liquid. The solid (residue) stays on the filter while the liquid (filtrate) passes through.', partNumber: 3, partTitle: 'Filtration & Distillation' },
  { id: 'ms-ent-3b', question: 'Distillation separates components of a liquid mixture based on differences in:', options: ['Particle size', 'Color', 'Boiling point', 'Magnetism'], correctIndex: 2, explanation: 'Distillation heats the mixture. The component with the lower boiling point evaporates first, is then condensed and collected separately.', partNumber: 3, partTitle: 'Filtration & Distillation' },

  { id: 'ms-ent-4a', question: 'In paper chromatography, substances separate based on:', options: ['Mass differences', 'Electrical charge', 'Relative attraction to the stationary and mobile phases', 'Temperature'], correctIndex: 2, explanation: 'Chromatography separates substances based on their different affinities for the stationary phase (paper) and mobile phase (solvent). More soluble components travel farther.', partNumber: 4, partTitle: 'Chromatography' },
  { id: 'ms-ent-4b', question: 'In chromatography, a substance with a higher $R_f$ value:', options: ['Traveled a shorter distance', 'Traveled a greater distance relative to the solvent front', 'Is more attracted to the stationary phase', 'Did not dissolve in the mobile phase'], correctIndex: 1, explanation: '$R_f$ = distance traveled by substance / distance traveled by solvent front. A higher $R_f$ means the substance traveled farther, indicating greater affinity for the mobile phase.', partNumber: 4, partTitle: 'Chromatography' },

  { id: 'ms-ent-5a', question: 'To separate sand from salt water, you would use:', options: ['Only filtration', 'Only distillation', 'Filtration followed by evaporation', 'Chromatography'], correctIndex: 2, explanation: 'First, filter to separate the sand (insoluble solid). Then evaporate the water to recover the dissolved salt.', partNumber: 5, partTitle: 'Choosing Separation Methods' },
  { id: 'ms-ent-5b', question: 'Which technique is best for separating dissolved dyes in ink?', options: ['Filtration', 'Decanting', 'Chromatography', 'Distillation'], correctIndex: 2, explanation: 'Chromatography is ideal for separating dissolved components with similar properties (like dyes in ink) based on their differential migration through a stationary phase.', partNumber: 5, partTitle: 'Choosing Separation Methods' },

  { id: 'ms-ent-6a', question: 'A student wants to obtain pure water from salt water. Which method is most appropriate?', options: ['Filtration', 'Chromatography', 'Distillation', 'Decanting'], correctIndex: 2, explanation: 'Distillation separates water from dissolved salt by boiling the water (bp 100°C) and condensing the vapor, leaving salt behind.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ms-ent-6b', question: 'Centrifugation separates components based on:', options: ['Boiling point', 'Solubility', 'Density under centrifugal force', 'Particle charge'], correctIndex: 2, explanation: 'Centrifugation spins the mixture rapidly. Denser components settle to the bottom (pellet) while less dense material stays on top (supernatant).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'ms-ent-7a', question: 'A mixture of iron filings and sulfur powder can be separated by:', options: ['Filtration', 'A magnet', 'Evaporation', 'Chromatography'], correctIndex: 1, explanation: 'Iron is magnetic while sulfur is not. Using a magnet physically separates the iron filings from the sulfur. This works because no chemical reaction has occurred.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'ms-ent-7b', question: 'Which is NOT a physical method of separation?', options: ['Filtration', 'Distillation', 'Electrolysis', 'Chromatography'], correctIndex: 2, explanation: 'Electrolysis uses electrical energy to drive a chemical reaction (decomposition), making it a chemical method. The others are physical separation techniques.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Pure Substances vs Mixtures' },
    { partNumber: 2, partTitle: 'Homogeneous & Heterogeneous' },
    { partNumber: 3, partTitle: 'Filtration & Distillation' },
    { partNumber: 4, partTitle: 'Chromatography' },
    { partNumber: 5, partTitle: 'Choosing Separation Methods' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
