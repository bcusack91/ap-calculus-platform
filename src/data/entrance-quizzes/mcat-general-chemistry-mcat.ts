/**
 * Entrance Quiz — General Chemistry Overview (MCAT)
 * 17 questions · 7 parts (3 / 2 / 3 / 3 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Atomic Structure & Periodic Trends'
const P2 = 'Bonding & Molecular Geometry'
const P3 = 'Stoichiometry, Solutions & Concentration'
const P4 = 'Acids, Bases, pH & Buffers (ULTRA HIGH YIELD)'
const P5 = 'Thermodynamics & Equilibrium'
const P6 = 'Chemical Kinetics'
const P7 = 'Electrochemistry & Redox'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Atomic Structure & Periodic Trends
  { id: 'mgc-ent-1a', question: 'Moving left to right across a period, atomic radius generally:', options: ['Increases, as more shells are added', 'Decreases, as $Z_{eff}$ pulls electrons in', 'Stays constant, as shielding also rises', 'Rises, then falls at the noble gases'], correctIndex: 1, explanation: 'Across a period the proton count rises while core shielding stays nearly constant, so the effective nuclear charge increases and the valence electrons are pulled closer. New shells are added only going down a group, which is why radius grows down a group, not across a period.', partNumber: 1, partTitle: P1 },
  { id: 'mgc-ent-1b', question: 'Which element has the highest electronegativity?', options: ['Oxygen', 'Chlorine', 'Nitrogen', 'Fluorine'], correctIndex: 3, explanation: 'Electronegativity rises across a period and falls down a group, both following $Z_{eff}$, so fluorine at the top right of the table (noble gases aside) is the most electronegative element. Oxygen and nitrogen sit to its left in the same period, and chlorine sits below it in the same group.', partNumber: 1, partTitle: P1 },
  { id: 'mgc-ent-1c', question: "By Hund's rule, how many unpaired electrons does a ground-state nitrogen atom ($1s^2\\,2s^2\\,2p^3$) have?", options: ['1', '2', '3', '5'], correctIndex: 2, explanation: "Hund's rule fills equal-energy orbitals singly before pairing, so the three $2p$ electrons occupy the three $2p$ orbitals one each: 3 unpaired electrons. The $1s$ and $2s$ electrons are already paired, so 5 counts every valence electron, and 1 would pair two of the $2p$ electrons too early.", partNumber: 1, partTitle: P1 },

  // Part 2 — Bonding & Molecular Geometry
  { id: 'mgc-ent-2a', question: 'Water has 2 bonding pairs and 2 lone pairs on its central oxygen. Its molecular geometry is:', options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent (V-shaped)'], correctIndex: 3, explanation: 'Four electron domains give a tetrahedral electron-domain geometry, but the molecular geometry describes only where the atoms are: with two of the four domains as lone pairs, the shape is bent (about $104.5°$). Tetrahedral is the electron-domain geometry, not the molecular shape, and linear would need only two domains.', partNumber: 2, partTitle: P2 },
  { id: 'mgc-ent-2b', question: 'Which intermolecular force is present in every molecule, polar or nonpolar?', options: ['London dispersion', 'Hydrogen bonding', 'Dipole-dipole', 'Ion-dipole attraction'], correctIndex: 0, explanation: 'London dispersion forces come from temporary, fluctuating dipoles, which every molecule has, so they act even between nonpolar molecules such as $\\text{CH}_4$. Dipole-dipole forces need a permanent dipole, hydrogen bonding needs H bonded directly to N, O or F, and ion-dipole forces need an ion.', partNumber: 2, partTitle: P2 },

  // Part 3 — Stoichiometry, Solutions & Concentration
  { id: 'mgc-ent-3a', question: 'In the reaction $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$, how many moles of $\\text{NH}_3$ form from 6 mol of $\\text{H}_2$ with excess $\\text{N}_2$?', options: ['2 mol', '3 mol', '4 mol', '6 mol'], correctIndex: 2, explanation: 'The balanced equation gives a mole ratio of 2 mol $\\text{NH}_3$ per 3 mol $\\text{H}_2$, so $6 \\times \\tfrac{2}{3} = 4$ mol $\\text{NH}_3$. Answering 6 mol ignores the ratio, and 2 mol is the amount of $\\text{N}_2$ consumed, not the product formed.', partNumber: 3, partTitle: P3 },
  { id: 'mgc-ent-3b', question: 'The limiting reagent in a reaction is the reactant that:', options: ['Runs out first and so sets the maximum yield', 'Has the largest molar mass of the reactants', 'Is present in the greatest mass at the start', 'Has the largest coefficient in the equation'], correctIndex: 0, explanation: 'The limiting reagent is used up first, and once it is gone no more product can form, so it fixes the theoretical yield. Molar mass, starting mass and coefficient alone do not decide it: compare the moles available with the moles required (moles divided by coefficient; the smallest ratio is limiting).', partNumber: 3, partTitle: P3 },
  { id: 'mgc-ent-3c', question: 'Which concentration unit does NOT change when a solution is heated?', options: ['Molarity (mol per L of solution)', 'Molality (mol per kg of solvent)', 'Grams per liter of solution', 'Millimoles per mL of solution'], correctIndex: 1, explanation: 'Heating makes a solution expand, so any unit with solution volume in the denominator (molarity, g/L, mmol/mL) falls slightly. Molality divides by the mass of solvent, and mass does not change with temperature, so molality is temperature-independent.', partNumber: 3, partTitle: P3 },

  // Part 4 — Acids, Bases, pH & Buffers
  { id: 'mgc-ent-4a', question: 'What is the pH of a 0.0010 M $\\text{HNO}_3$ solution at 25°C?', options: ['1.0', '3.0', '7.0', '11.0'], correctIndex: 1, explanation: '$\\text{HNO}_3$ is one of the strong acids, so it dissociates completely: $[\\text{H}^+] = 1.0 \\times 10^{-3}$ M and pH $= -\\log(10^{-3}) = 3.0$. The value 11.0 is the pOH, and 7.0 would describe a neutral solution.', partNumber: 4, partTitle: P4 },
  { id: 'mgc-ent-4b', question: 'During the titration of a weak acid with NaOH, at the half-equivalence point:', options: ['The pH is exactly 7.00', 'The pH is above 7 for any acid', "The pH equals the acid's p$K_a$", 'The pH equals twice the p$K_a$'], correctIndex: 2, explanation: 'Halfway to equivalence, half the HA has been converted to $\\text{A}^-$, so $[\\text{A}^-] = [\\text{HA}]$ and Henderson-Hasselbalch gives pH $= \\text{p}K_a + \\log 1 = \\text{p}K_a$. A pH above 7 describes the equivalence point itself, where only the conjugate base remains.', partNumber: 4, partTitle: P4 },
  { id: 'mgc-ent-4c', question: 'Which of these solutions has the highest $[\\text{H}^+]$?', options: ['pH = 9.8', 'pH = 6.5', 'pH = 7.0', 'pH = 4.2'], correctIndex: 3, explanation: 'pH $= -\\log[\\text{H}^+]$, so the lowest pH has the highest hydrogen-ion concentration. pH 4.2 is the most acidic choice, with $[\\text{H}^+]$ about 200 times that at pH 6.5. pH 7.0 is neutral and pH 9.8 is basic.', partNumber: 4, partTitle: P4 },

  // Part 5 — Thermodynamics & Equilibrium
  { id: 'mgc-ent-5a', question: 'An exothermic reaction has a $\\Delta H$ that is:', options: ['Negative, since heat is released', 'Positive, since heat is absorbed', 'Zero, since energy is conserved', 'Equal to $T\\Delta S$ at all times'], correctIndex: 0, explanation: 'An exothermic reaction releases heat to the surroundings, so the system loses enthalpy and $\\Delta H < 0$. A positive $\\Delta H$ describes an endothermic reaction; energy conservation applies to system plus surroundings, not to $\\Delta H$ alone; and $\\Delta H = T\\Delta S$ holds only where $\\Delta G = 0$.', partNumber: 5, partTitle: P5 },
  { id: 'mgc-ent-5b', question: "According to Le Chatelier's principle, adding more reactant to a system at equilibrium will:", options: ['Shift the equilibrium toward the reactants', 'Raise the value of the equilibrium constant', 'Leave both the position and $K$ unchanged', 'Shift the equilibrium toward the products'], correctIndex: 3, explanation: 'The system partially counteracts the added reactant by consuming some of it, so the reaction runs forward toward products until $Q$ again equals $K$. $K$ itself changes only with temperature, so adding reactant moves the position of equilibrium without changing $K$.', partNumber: 5, partTitle: P5 },

  // Part 6 — Chemical Kinetics
  { id: 'mgc-ent-6a', question: 'A reaction is zero order in reactant A. If $[\\text{A}]$ is doubled, the rate:', options: ['Stays the same', 'Doubles', 'Quadruples', 'Is cut in half'], correctIndex: 0, explanation: 'For a zero-order dependence, rate $= k[\\text{A}]^0 = k$, so changing $[\\text{A}]$ has no effect on the rate. A doubled rate would mean first order in A, and a quadrupled rate second order.', partNumber: 6, partTitle: P6 },
  { id: 'mgc-ent-6b', question: 'The exponents in a rate law, rate $= k[\\text{A}]^m[\\text{B}]^n$, are determined by:', options: ['The coefficients in the balanced equation', 'Experimental rate data for the reaction', 'The value of the equilibrium constant $K$', 'The sign and size of $\\Delta H$ for the reaction'], correctIndex: 1, explanation: "Reaction orders must be measured, for example by the method of initial rates: change one concentration and see how the rate responds. The balanced equation's coefficients match the orders only for an elementary step, and $K$ and $\\Delta H$ are thermodynamic quantities that say nothing about rate.", partNumber: 6, partTitle: P6 },

  // Part 7 — Electrochemistry & Redox
  { id: 'mgc-ent-7a', question: 'In any electrochemical cell, galvanic or electrolytic, oxidation occurs at the:', options: ['Cathode', 'Salt bridge', 'Anode', 'External wire'], correctIndex: 2, explanation: 'Oxidation is always at the anode and reduction always at the cathode ("an ox, red cat"), in galvanic and electrolytic cells alike. What differs between the two cell types is the sign of each electrode, not which reaction happens there. The salt bridge and wire carry ions and electrons; no half-reaction occurs in them.', partNumber: 7, partTitle: P7 },
  { id: 'mgc-ent-7b', question: 'What is the oxidation state of sulfur in $\\text{H}_2\\text{SO}_4$?', options: ['$+2$', '$+4$', '$-2$', '$+6$'], correctIndex: 3, explanation: 'Each H is $+1$ and each O is $-2$, and a neutral molecule sums to zero: $2(+1) + S + 4(-2) = 0$, so $S = +6$. Sulfur is $+4$ in $\\text{SO}_2$ and $-2$ in $\\text{H}_2\\text{S}$.', partNumber: 7, partTitle: P7 },
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
