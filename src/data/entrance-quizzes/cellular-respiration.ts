/**
 * Entrance Quiz — Cellular Respiration (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Overview of Cell Respiration (redox, why cells need constant energy)
 *  2 — Glycolysis (carbon and energy accounting)
 *  3 — Pyruvate Oxidation (fermentation types and ATP yield)
 *  4 — Citric Acid Cycle (regenerating the acceptor, fats as fuel)
 *  5 — Oxidative Phosphorylation (chemiosmosis, ATP from carriers)
 *  6 — Problem-Solving Workshop (respirometer controls, metabolic poisons)
 *  7 — AP Review (energy flow sequence, cells without mitochondria)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Overview of Cell Respiration
  {
    id: 'bcr-ent-1a',
    question:
      'In one step of a metabolic pathway, an enzyme removes two hydrogen atoms, along with their electrons, from molecule X and transfers them to $NAD^+$. Which statement describes this step?',
    options: [
      'X is reduced, and $NAD^+$ is oxidized',
      'X is oxidized, and $NAD^+$ is reduced',
      'X and $NAD^+$ are both oxidized',
      'X and $NAD^+$ are both reduced',
    ],
    correctIndex: 1,
    explanation:
      'Losing electrons (often as hydrogen atoms) is oxidation, and gaining them is reduction, so X is oxidized while $NAD^+$ is reduced to NADH. In a redox reaction one partner is always oxidized as the other is reduced.',
    partNumber: 1,
    partTitle: 'Overview of Cell Respiration',
  },
  {
    id: 'bcr-ent-1b',
    question:
      'A mature cell that is no longer growing or dividing still carries out cellular respiration all the time. Which explanation is best supported?',
    options: [
      'ATP is a structural molecule the cell stockpiles as it ages',
      'ATP made earlier is broken down by oxygen within a few seconds',
      'Keeping its ordered structure requires a constant input of energy',
      'Cells that are not growing use ATP only to make new glucose',
    ],
    correctIndex: 2,
    explanation:
      'Living systems are highly ordered, and maintaining that order (pumping ions, repairing molecules, moving materials) takes a continuous energy input; ATP is constantly used and remade. ATP is not a structural material, and oxygen does not destroy it.',
    partNumber: 1,
    partTitle: 'Overview of Cell Respiration',
  },

  // Part 2: Glycolysis
  {
    id: 'bcr-ent-2a',
    question:
      'During glycolysis of one glucose molecule, how many molecules of $CO_2$ are released?',
    options: [
      'None, as all 6 carbons stay in pyruvate',
      'Two, one from each 3-carbon half of the glucose',
      'Four, since glucose is partly oxidized in this stage',
      'Six, since glucose is fully oxidized in this stage',
    ],
    correctIndex: 0,
    explanation:
      'Glycolysis splits the 6-carbon glucose into two 3-carbon pyruvates, so all six carbons remain in pyruvate. The first $CO_2$ is released later, during pyruvate oxidation.',
    partNumber: 2,
    partTitle: 'Glycolysis',
  },
  {
    id: 'bcr-ent-2b',
    question:
      'When glycolysis is complete, where is most of the chemical energy that was in the original glucose molecule?',
    options: [
      'In the two pyruvates and the two NADH',
      'In the 2 net ATP that glycolysis has made',
      'Released as heat during the investment phase',
      'In the $CO_2$ given off when glucose is split',
    ],
    correctIndex: 0,
    explanation:
      'Glycolysis captures only a small fraction of glucose\'s energy as 2 net ATP. Most of it is still held in the two pyruvates and in the electrons carried by NADH, which the later stages harvest. Glycolysis releases no $CO_2$.',
    partNumber: 2,
    partTitle: 'Glycolysis',
  },

  // Part 3: Pyruvate Oxidation
  {
    id: 'bcr-ent-3a',
    question:
      'In sealed flasks without oxygen, yeast cells given sugar produce gas bubbles, but muscle tissue given sugar does not. Which explanation is best supported?',
    options: [
      'Yeast fermentation releases $CO_2$, but lactic acid fermentation does not',
      'Yeast carries out aerobic respiration, while muscle cells cannot use sugar at all',
      'Muscle cells release $CO_2$ too, but they absorb it again faster than yeast does',
      'Yeast makes oxygen gas by fermentation, while muscle makes no gas of any kind',
    ],
    correctIndex: 0,
    explanation:
      'Both regenerate $NAD^+$ by fermentation, but alcoholic fermentation in yeast releases $CO_2$, while lactic acid fermentation in muscle produces lactate and no $CO_2$. There is no oxygen for aerobic respiration in either flask.',
    partNumber: 3,
    partTitle: 'Pyruvate Oxidation',
  },
  {
    id: 'bcr-ent-3b',
    question:
      'Yeast cells are switched from aerobic conditions to fermentation. To make ATP at the same rate as before, about how much faster must they break down glucose?',
    options: [
      'About 2 times faster',
      'At the same rate',
      'About 15 times faster',
      'About 30 times faster',
    ],
    correctIndex: 2,
    explanation:
      'Aerobic respiration yields about 30-32 ATP per glucose, while fermentation yields only the 2 ATP from glycolysis, so the cell needs about $30 \\div 2 = 15$ times as much glucose for the same ATP.',
    partNumber: 3,
    partTitle: 'Pyruvate Oxidation',
  },

  // Part 4: Citric Acid Cycle
  {
    id: 'bcr-ent-4a',
    question:
      'Suppose a mutation prevented the citric acid cycle from regenerating its 4-carbon acceptor molecule at the end of each turn. What would happen?',
    options: [
      'Each turn of the cycle would release extra $CO_2$ instead',
      'The cycle would stop as soon as the small existing supply ran out',
      'Acetyl groups would be sent back into glycolysis instead',
      'Nothing would change, since acetyl-CoA can enter by itself',
    ],
    correctIndex: 1,
    explanation:
      'Each acetyl group enters by joining the 4-carbon acceptor, and the acceptor is remade at the end of the turn. If it were not regenerated, the small existing supply would be used up and the cycle would stop.',
    partNumber: 4,
    partTitle: 'Citric Acid Cycle',
  },
  {
    id: 'bcr-ent-4b',
    question:
      'A 16-carbon fatty acid is broken down completely into 2-carbon acetyl units that enter the citric acid cycle. How many turns of the cycle result, and how many $CO_2$ do those turns release?',
    options: [
      '16 turns, releasing 32 $CO_2$',
      '8 turns, releasing 8 $CO_2$',
      '4 turns, releasing 8 $CO_2$',
      '8 turns, releasing 16 $CO_2$',
    ],
    correctIndex: 3,
    explanation:
      '16 carbons ÷ 2 = 8 acetyl-CoA, and each acetyl-CoA drives one turn that releases 2 $CO_2$, so 8 turns release 16 $CO_2$, accounting for all 16 carbons.',
    partNumber: 4,
    partTitle: 'Citric Acid Cycle',
  },

  // Part 5: Oxidative Phosphorylation
  {
    id: 'bcr-ent-5a',
    question:
      'Isolated mitochondria with no fuel and no oxygen are soaked so that their matrix is at pH 8, then quickly moved into a pH 4 buffer containing ADP and phosphate. ATP is made for a short time. Which explanation is best supported?',
    options: [
      'Electron transport restarted, since low pH supplies electrons',
      'ATP synthase used $H^+$ flowing into the matrix to make ATP',
      'The acid broke down stored glucose by glycolysis in the matrix',
      'The buffer\'s phosphate attached to ADP without any enzyme',
    ],
    correctIndex: 1,
    explanation:
      'pH 4 has far more $H^+$ than pH 8, so an artificial proton gradient formed. Protons flowing down it through ATP synthase powered ATP synthesis even with no electron transport, showing that the gradient itself drives chemiosmosis.',
    partNumber: 5,
    partTitle: 'Oxidative Phosphorylation',
  },
  {
    id: 'bcr-ent-5b',
    question:
      'Using about 2.5 ATP per NADH and 1.5 ATP per $FADH_2$, how many ATP can oxidative phosphorylation make from 4 NADH and 2 $FADH_2$?',
    options: ['9', '12', '13', '15'],
    correctIndex: 2,
    explanation:
      '$4 \\times 2.5 + 2 \\times 1.5 = 10 + 3 = 13$ ATP. Treating all six carriers as NADH gives 15, as 2 ATP each gives 12, and as $FADH_2$ gives 9.',
    partNumber: 5,
    partTitle: 'Oxidative Phosphorylation',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bcr-ent-6a',
    question:
      'In a respirometer experiment, students set up one vial of germinating peas and a second vial of glass beads with the same total volume. Why is the glass-bead vial included?',
    options: [
      'Beads respire slowly, giving a low rate to compare with the seeds',
      'Beads absorb the $CO_2$, so it is not counted as oxygen uptake',
      'Beads show gas changes from temperature or pressure, not respiration',
      'Beads supply extra oxygen so the seeds do not run short during the test',
    ],
    correctIndex: 2,
    explanation:
      'Glass beads do not respire, so any volume change in their vial reflects shifts in temperature or air pressure. Subtracting that change isolates the oxygen uptake caused by the seeds. KOH, not the beads, absorbs $CO_2$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bcr-ent-6b',
    question:
      'A poison blocks the first carrier that accepts electrons from NADH, while $FADH_2$ can still hand electrons to a later point in the chain. Which result is expected?',
    options: [
      'ATP output stops completely, since no electrons can reach oxygen',
      'ATP output rises, since electrons now skip a step and lose less energy',
      'ATP output is unchanged, since glycolysis makes most of the cell\'s ATP',
      'ATP output drops sharply but not to zero, as some electrons keep flowing',
    ],
    correctIndex: 3,
    explanation:
      'Electrons from NADH, the main carrier, can no longer enter, so far fewer protons are pumped and ATP output falls sharply. $FADH_2$ electrons still enter downstream and reach oxygen, so some chemiosmosis continues.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bcr-ent-7a',
    question:
      'Which sequence correctly traces the flow of energy in aerobic respiration?',
    options: [
      'Glucose → ATP → NADH → proton gradient',
      'Glucose → proton gradient → NADH → ATP',
      'Glucose → $O_2$ → NADH → proton gradient → ATP',
      'Glucose → NADH → proton gradient → ATP',
    ],
    correctIndex: 3,
    explanation:
      'Electrons removed from glucose are carried by NADH (and $FADH_2$) to the electron transport chain, which uses their energy to build a proton gradient; ATP synthase then uses the gradient to make ATP. Oxygen only accepts electrons at the end.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bcr-ent-7b',
    question:
      'A mutant yeast strain has no functional mitochondria. It is grown on glucose with plenty of oxygen. What will the yeast most likely do?',
    options: [
      'Ferment the sugar for 2 ATP each, releasing ethanol and $CO_2$',
      'Respire aerobically in its cytoplasm, making about 30 ATP',
      'Stop all ATP production, since glycolysis needs mitochondria',
      'Use oxygen as the electron acceptor for glycolysis in the cytosol',
    ],
    correctIndex: 0,
    explanation:
      'Pyruvate oxidation, the citric acid cycle and the electron transport chain all need mitochondria, so oxygen is useless to this strain. Glycolysis runs in the cytoplasm, and fermentation regenerates $NAD^+$, yielding 2 ATP per glucose.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the cellular-respiration topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Overview of Cell Respiration' },
    { partNumber: 2, partTitle: 'Glycolysis' },
    { partNumber: 3, partTitle: 'Pyruvate Oxidation' },
    { partNumber: 4, partTitle: 'Citric Acid Cycle' },
    { partNumber: 5, partTitle: 'Oxidative Phosphorylation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
