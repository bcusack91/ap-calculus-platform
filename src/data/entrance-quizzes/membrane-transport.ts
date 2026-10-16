/**
 * Entrance Quiz — Membrane Transport (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Membrane Structure (integral vs peripheral proteins, selective permeability)
 *  2 — Passive Transport (electrochemical gradient, dynamic equilibrium)
 *  3 — Osmosis (solute potential calculation, water potential between cells)
 *  4 — Active Transport (secondary active transport, pumps maintain gradients)
 *  5 — Bulk Transport (pinocytosis, receptor-mediated endocytosis)
 *  6 — Problem-Solving Workshop (dialysis tubing, isotonic point)
 *  7 — AP Review (two-step epithelial transport, water potential in soil)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Membrane Structure
  {
    id: 'bmt-ent-1a',
    question:
      'Membrane protein P comes off the membrane when cells are rinsed with a mild salt solution that leaves the bilayer intact. Membrane protein Q comes off only when a detergent dissolves the bilayer. Which conclusion is best supported?',
    options: [
      'P spans the bilayer, while Q sits loosely on the membrane surface',
      'P is a glycolipid, while Q is a phospholipid of the inner leaflet',
      'Both proteins span the bilayer, but P has more charged R groups',
      'P sits on the surface, while Q spans the hydrophobic core',
    ],
    correctIndex: 3,
    explanation:
      'Peripheral proteins are held at the surface by weak interactions that a salt wash can break, while integral proteins have hydrophobic regions buried in the bilayer and come out only when the lipids are dissolved. Proteins are not glycolipids or phospholipids.',
    partNumber: 1,
    partTitle: 'Membrane Structure',
  },
  {
    id: 'bmt-ent-1b',
    question:
      'A steroid hormone crosses the plasma membrane without any transport protein, but glucose, a smaller molecule, cannot. Which explanation is best supported?',
    options: [
      'The steroid is nonpolar and dissolves through the bilayer',
      'The steroid is smaller, so it slips between the phospholipids',
      'Glucose has a net charge, which the phospholipid heads repel',
      'The steroid is pumped in by carriers that use ATP to move it',
    ],
    correctIndex: 0,
    explanation:
      'Lipid-soluble (nonpolar) molecules dissolve into the hydrophobic interior of the bilayer and pass through, while polar molecules like glucose need a transport protein. Glucose is polar but uncharged, and the steroid is actually larger than glucose.',
    partNumber: 1,
    partTitle: 'Membrane Structure',
  },

  // Part 2: Passive Transport
  {
    id: 'bmt-ent-2a',
    question:
      'The inside of a cell is negative relative to the outside, and the concentration of chloride ions ($Cl^-$) is higher outside the cell than inside. Which statement describes the forces on $Cl^-$ when chloride channels open?',
    options: [
      'Concentration and charge both drive $Cl^-$ inward',
      'Concentration drives $Cl^-$ inward, while charge drives it outward',
      'Concentration and charge both drive $Cl^-$ outward',
      'Concentration drives $Cl^-$ outward, while charge drives it inward',
    ],
    correctIndex: 1,
    explanation:
      'For an ion, the chemical and electrical gradients act together as the electrochemical gradient. The higher outside concentration drives $Cl^-$ inward, but the negatively charged interior repels the anion, so the two forces oppose each other.',
    partNumber: 2,
    partTitle: 'Passive Transport',
  },
  {
    id: 'bmt-ent-2b',
    question:
      'Oxygen diffuses across a membrane until its concentration is the same on both sides. What is happening to the oxygen molecules at this point?',
    options: [
      'The oxygen molecules have stopped moving',
      'They move into the cell now, but more slowly',
      'They now cross mainly through protein channels',
      'They keep crossing in both directions at equal rates',
    ],
    correctIndex: 3,
    explanation:
      'At equilibrium, molecules keep moving randomly and crossing in both directions; the rates are equal, so net movement is zero. Movement never stops, and small nonpolar oxygen does not need channels.',
    partNumber: 2,
    partTitle: 'Passive Transport',
  },

  // Part 3: Osmosis
  {
    id: 'bmt-ent-3a',
    question:
      'Calcium chloride ($CaCl_2$) dissolves completely into three ions. What is the solute potential of a 0.1 M $CaCl_2$ solution at 300 K? Use $\\Psi_s = -iCRT$ with $R = 0.0831$ L·bar/(mol·K).',
    options: ['−2.5 bars', '−5.0 bars', '−7.5 bars', '−0.67 bars'],
    correctIndex: 2,
    explanation:
      '$\\Psi_s = -(3)(0.1)(0.0831)(300) \\approx -7.5$ bars. Using $i = 1$ gives −2.5, using $i = 2$ gives −5.0, and using 27 instead of the Kelvin temperature gives −0.67.',
    partNumber: 3,
    partTitle: 'Osmosis',
  },
  {
    id: 'bmt-ent-3b',
    question:
      'Two neighboring plant cells are connected. Cell X has $\\Psi_s = -0.7$ MPa and $\\Psi_p = +0.3$ MPa. Cell Y has $\\Psi_s = -0.5$ MPa and $\\Psi_p = +0.2$ MPa. In which direction will water move?',
    options: [
      'From Y to X, since Y has the higher water potential',
      'From X to Y, since X has the greater pressure potential',
      'From X to Y, since X has the higher water potential',
      'Neither way, since both cells have positive pressure',
    ],
    correctIndex: 0,
    explanation:
      '$\\Psi_X = -0.7 + 0.3 = -0.4$ MPa and $\\Psi_Y = -0.5 + 0.2 = -0.3$ MPa. Water moves from higher to lower water potential, so it flows from Y (−0.3) to X (−0.4). Pressure potential alone does not set the direction.',
    partNumber: 3,
    partTitle: 'Osmosis',
  },

  // Part 4: Active Transport
  {
    id: 'bmt-ent-4a',
    question:
      'Root cells take up nitrate ions until nitrate inside is far more concentrated than in the soil. When the solution outside the roots is made less acidic (fewer $H^+$ ions), nitrate uptake falls sharply even though the cells\' ATP levels stay normal. Which mechanism best explains nitrate uptake?',
    options: [
      'A channel that lets nitrate diffuse down its gradient',
      'A pump that splits ATP to move nitrate directly',
      'A symporter driven by $H^+$ flowing into the cell',
      'Endocytosis of nitrate in small fluid-filled vesicles',
    ],
    correctIndex: 2,
    explanation:
      'Nitrate moves against its gradient, yet uptake depends on the $H^+$ gradient rather than on ATP directly, which marks secondary active transport: $H^+$ flows in down the gradient made by proton pumps and carries nitrate with it. A channel cannot build up nitrate against its gradient.',
    partNumber: 4,
    partTitle: 'Active Transport',
  },
  {
    id: 'bmt-ent-4b',
    question:
      'A drug stops all of a cell\'s $Na^+/K^+$ pumps, but its ion channels keep working normally. What will happen over time?',
    options: [
      '$Na^+$ will pile up outside the cell faster than it did before',
      'The gradients will stay steady, since channels use no ATP',
      '$K^+$ will move into the cell against its gradient on its own',
      'The $Na^+$ and $K^+$ gradients will gradually run down',
    ],
    correctIndex: 3,
    explanation:
      'The pump uses ATP to keep $Na^+$ high outside and $K^+$ high inside. Ions keep leaking down their gradients through channels, so without the pump the gradients (and the membrane potential they support) slowly disappear.',
    partNumber: 4,
    partTitle: 'Active Transport',
  },

  // Part 5: Bulk Transport
  {
    id: 'bmt-ent-5a',
    question:
      'Cells are bathed in a fluid containing a fluorescent dye that binds to no receptor. Within minutes, many tiny dye-filled vesicles appear inside the cells. Which process best explains this?',
    options: [
      'Phagocytosis, in which the cell engulfs large particles',
      'Pinocytosis, which takes in droplets of fluid',
      'Receptor-mediated endocytosis of the dye molecules',
      'Exocytosis, in which vesicles carry fluid to the surface',
    ],
    correctIndex: 1,
    explanation:
      'Pinocytosis takes in small droplets of extracellular fluid nonspecifically, along with whatever is dissolved in it. The dye binds no receptor, so receptor-mediated uptake does not apply, and phagocytosis engulfs large particles such as bacteria.',
    partNumber: 5,
    partTitle: 'Bulk Transport',
  },
  {
    id: 'bmt-ent-5b',
    question:
      'Cells take up radioactive molecule X much faster than molecule Y, though both are present at the same low concentration and are similar in size. Adding excess nonradioactive X slows the uptake of radioactive X, but adding excess Y does not. Which explanation is best supported?',
    options: [
      'X enters by simple diffusion, which is faster for scarce molecules',
      'X enters by pinocytosis, which favors molecules that are scarce outside',
      'X binds specific receptors before endocytosis, and they are limited',
      'X enters by exocytosis, which carries it in from the cell surface',
    ],
    correctIndex: 2,
    explanation:
      'Receptor-mediated endocytosis concentrates a specific ligand even when it is scarce, and because receptors are limited, excess unlabeled X competes for them while Y, which does not bind, has no effect. Pinocytosis is nonspecific, and exocytosis moves material out.',
    partNumber: 5,
    partTitle: 'Bulk Transport',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bmt-ent-6a',
    question:
      'A dialysis bag that lets small molecules through but not starch is filled with starch solution and placed in a beaker of iodine solution. Iodine turns blue-black where it meets starch. Which result is expected?',
    options: [
      'The bag contents turn blue-black, since iodine enters but starch stays in',
      'The beaker turns blue-black, since starch leaves but iodine stays out',
      'Both turn blue-black, since both molecules cross the membrane freely',
      'Neither changes color, since no molecule can cross the membrane',
    ],
    correctIndex: 0,
    explanation:
      'Iodine is small enough to diffuse into the bag, but starch is too large to leave, so the color change appears only inside the bag.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bmt-ent-6b',
    question:
      'Potato cores neither gain nor lose mass in 0.3 M sucrose at 300 K. Using $\\Psi_s = -iCRT$ ($R = 0.0831$ L·bar/(mol·K)), what is the water potential of the potato cells?',
    options: ['+7.5 bars', '0 bars', '−7.5 bars', '−15.0 bars'],
    correctIndex: 2,
    explanation:
      'No mass change means the cells and the solution have equal water potential. The open solution has $\\Psi_p = 0$, so $\\Psi = \\Psi_s = -(1)(0.3)(0.0831)(300) \\approx -7.5$ bars. Sucrose does not ionize, so $i = 1$, not 2.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bmt-ent-7a',
    question:
      'Kidney tubule cells move $Na^+$ from the filtrate into the blood. $Na^+$ enters each cell from the filtrate side through channels and leaves on the blood side through $Na^+/K^+$ pumps. Which statement correctly describes the energy use?',
    options: [
      'Entry uses ATP to move $Na^+$, while exit is passive diffusion',
      'Entry is passive down a gradient, while exit uses ATP against one',
      'Both steps are passive, since $Na^+$ always moves down gradients',
      'Both steps use ATP directly, since every ion crossing needs ATP',
    ],
    correctIndex: 1,
    explanation:
      'Pumps keep $Na^+$ low inside the cell, so $Na^+$ flows in from the filtrate through channels by facilitated diffusion, and the pump then uses ATP to push it out into the blood against its gradient.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bmt-ent-7b',
    question:
      'After heavy fertilizer use, the water potential of the soil water drops to −1.2 MPa, while the root cells of a crop have a water potential of −0.8 MPa. What will most likely happen?',
    options: [
      'Water leaves the roots, which may then plasmolyze while the plant wilts',
      'Water moves into the roots faster, since the soil has more solute',
      'No water moves, since root cell walls block movement in both ways',
      'Fertilizer ions enter the roots and pull water in after them at once',
    ],
    correctIndex: 0,
    explanation:
      'Water moves from higher to lower water potential, here from the root cells (−0.8 MPa) to the soil (−1.2 MPa). The cells lose water, their membranes can pull away from the walls, and the plant wilts.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the membrane-transport topic.
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
    { partNumber: 1, partTitle: 'Membrane Structure' },
    { partNumber: 2, partTitle: 'Passive Transport' },
    { partNumber: 3, partTitle: 'Osmosis' },
    { partNumber: 4, partTitle: 'Active Transport' },
    { partNumber: 5, partTitle: 'Bulk Transport' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
