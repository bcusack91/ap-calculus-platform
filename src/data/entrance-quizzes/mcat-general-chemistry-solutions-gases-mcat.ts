/**
 * Entrance Quiz — Solutions, Gases & Electrolysis (MCAT)
 * 8 questions · 3 parts (3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Created when this topic was split off mcat-general-chemistry-stoichiometry-mcat
 * (Nov 2026); the molarity and Boyle's-law items came over from that topic's
 * old Parts 3 and 4.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Solutions: Molarity, Dilution & Solution Stoichiometry'
const P2 = 'Gas Laws & Electrochemistry Stoichiometry'
const P3 = 'Mixed MCAT Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Solutions: Molarity, Dilution & Solution Stoichiometry
  { id: 'mgsg-ent-1a', question: 'What is the molarity of a solution containing 0.50 mol of NaCl in 250 mL of solution?', options: ['0.50 M', '1.0 M', '2.0 M', '4.0 M'], correctIndex: 2, explanation: 'Convert the volume to litres first: $M = 0.50\\text{ mol}/0.250\\text{ L} = 2.0$ M. The 0.50 M answer ignores the volume, and 1.0 M and 4.0 M come from halving or doubling the right value.', partNumber: 1, partTitle: P1 },
  { id: 'mgsg-ent-1b', question: 'At the same temperature, which aqueous solution has the highest osmotic pressure?', options: ['0.15 M glucose', '0.10 M NaCl', '0.060 M $\\text{CaCl}_2$', '0.050 M $\\text{Al}_2(\\text{SO}_4)_3$'], correctIndex: 3, explanation: '$\\Pi = iMRT$, so compare $i \\times M$: glucose $1 \\times 0.15 = 0.15$, NaCl $2 \\times 0.10 = 0.20$, $\\text{CaCl}_2$ $3 \\times 0.060 = 0.18$ and $\\text{Al}_2(\\text{SO}_4)_3$ $5 \\times 0.050 = 0.25$ M of particles. The salt with the lowest molarity wins because each formula unit releases five ions.', partNumber: 1, partTitle: P1 },
  { id: 'mgsg-ent-1c', question: 'Which compound is soluble in water?', options: ['$\\text{NH}_4\\text{Cl}$', '$\\text{BaSO}_4$', '$\\text{AgCl}$', '$\\text{CaCO}_3$'], correctIndex: 0, explanation: 'Ammonium salts are always soluble, so $\\text{NH}_4\\text{Cl}$ dissolves. Silver halides other than AgF, barium sulfate and most carbonates outside Group IA and ammonium are insoluble.', partNumber: 1, partTitle: P1 },

  // Part 2 — Gas Laws & Electrochemistry Stoichiometry
  { id: 'mgsg-ent-2a', question: 'At constant temperature, doubling the pressure on a fixed amount of ideal gas:', options: ['Doubles the volume', 'Reduces the volume by half', 'Leaves the volume unchanged', 'Quadruples the volume'], correctIndex: 1, explanation: "Boyle's law, $P_1V_1 = P_2V_2$ at fixed $T$ and $n$, makes pressure and volume inversely proportional: doubling $P$ halves $V$. The volume would grow only if the pressure fell or the temperature rose.", partNumber: 2, partTitle: P2 },
  { id: 'mgsg-ent-2b', question: 'Copper is plated from a $\\text{Cu}^{2+}$ bath. Which change doubles the mass of copper deposited?', options: ['Doubling the $\\text{Cu}^{2+}$ concentration of the bath', 'Running the same current for twice as long', 'Halving the current that passes through the cell', 'Doubling the surface area of the cathode'], correctIndex: 1, explanation: 'Moles of electrons $= It/F$, and each $\\text{Cu}^{2+}$ takes two of them, so the copper plated depends only on the charge passed. Twice the time at the same current doubles the charge and the copper. Concentration and electrode area do not change the charge, and halving the current halves the deposit.', partNumber: 2, partTitle: P2 },
  { id: 'mgsg-ent-2c', question: 'At the same temperature and pressure, which gas effuses fastest?', options: ['$\\text{NH}_3$', '$\\text{Ne}$', '$\\text{Ar}$', '$\\text{CO}_2$'], correctIndex: 0, explanation: "Graham's law makes the effusion rate proportional to $1/\\sqrt{M}$, so the lightest gas is fastest: $\\text{NH}_3$ (17 g/mol) beats Ne (20), Ar (40) and $\\text{CO}_2$ (44).", partNumber: 2, partTitle: P2 },

  // Part 3 — Mixed MCAT Review
  { id: 'mgsg-ent-3a', question: 'Zinc reacts by $\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$. If 50.0 mL of 2.0 M HCl reacts completely with excess zinc, how many moles of $\\text{H}_2$ form?', options: ['0.025 mol', '0.050 mol', '0.10 mol', '0.20 mol'], correctIndex: 1, explanation: 'Moles of HCl $= MV = 2.0 \\times 0.0500 = 0.10$ mol. The equation makes one $\\text{H}_2$ per two HCl, so $0.10/2 = 0.050$ mol of $\\text{H}_2$. Taking 0.10 mol skips the 2 : 1 ratio, and 0.20 mol applies it backwards.', partNumber: 3, partTitle: P3 },
  { id: 'mgsg-ent-3b', question: 'A solution is made by dissolving 0.20 mol of $\\text{CaCl}_2$ ($i = 3$) in 0.50 kg of water. What is its freezing point? ($K_f = 1.86$ °C/m)', options: ['$-0.74$ °C', '$-1.1$ °C', '$-1.5$ °C', '$-2.2$ °C'], correctIndex: 3, explanation: 'Molality is $0.20/0.50 = 0.40$ m, so $\\Delta T_f = K_f m i = 1.86 \\times 0.40 \\times 3 \\approx 2.2$ °C and the solution freezes at $-2.2$ °C. Leaving out $i$ gives $-0.74$ °C, using $i = 2$ gives $-1.5$ °C, and using moles in place of molality gives $-1.1$ °C.', partNumber: 3, partTitle: P3 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
  ]
}
