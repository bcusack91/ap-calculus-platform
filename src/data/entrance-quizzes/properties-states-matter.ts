/**
 * Entrance Quiz — Properties of the States of Matter
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Solids, Liquids & Gases
 *  2 — Types of Solids
 *  3 — Surface Tension & Viscosity
 *  4 — Phase Changes & Heating Curves
 *  5 — Particle-Level Models of Matter
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Solids, Liquids & Gases
  {
    id: 'psm-ent-1a',
    question: 'A sample of gas is heated from 100 °C to 200 °C. By what factor does the average kinetic energy of its particles change?',
    options: ['2 times as large', '4 times as large', '1.27 times as large', '1.13 times as large'],
    correctIndex: 2,
    explanation: 'Average kinetic energy is proportional to Kelvin temperature: $473\\text{ K} / 373\\text{ K} = 1.27$. Doubling comes from using Celsius values, and 1.13 is the square root of 1.27, the factor for the average speed rather than the kinetic energy.',
    partNumber: 1,
    partTitle: 'Solids, Liquids & Gases',
  },
  {
    id: 'psm-ent-1b',
    question: 'At 300 K, how do the Maxwell–Boltzmann speed distributions of $H_2$ and $CO_2$ compare?',
    options: [
      'The $H_2$ curve is broader and peaks at a higher speed',
      'The $CO_2$ curve peaks at a higher speed, since its molecules carry more energy',
      'The two curves are identical, since the temperature is the same',
      'The $H_2$ curve is narrower and peaks at a lower speed than $CO_2$',
    ],
    correctIndex: 0,
    explanation: 'At the same temperature both gases have the same average kinetic energy, so the lighter $H_2$ molecules must move faster, giving a broader curve shifted to higher speeds. Equal temperature means equal average energy, not equal speeds.',
    partNumber: 1,
    partTitle: 'Solids, Liquids & Gases',
  },

  // Part 2: Types of Solids
  {
    id: 'psm-ent-2a',
    question: 'Which ranks iodine ($I_2$), potassium bromide (KBr) and diamond (C) from lowest to highest melting point?',
    options: [
      'KBr < $I_2$ < diamond',
      '$I_2$ < KBr < diamond',
      '$I_2$ < diamond < KBr',
      'diamond < KBr < $I_2$',
    ],
    correctIndex: 1,
    explanation: 'Melting molecular $I_2$ overcomes only dispersion forces between molecules, melting KBr overcomes ionic attractions, and melting diamond requires breaking covalent bonds throughout its network. Putting diamond below KBr treats network solids as weaker than ionic ones.',
    partNumber: 2,
    partTitle: 'Types of Solids',
  },
  {
    id: 'psm-ent-2b',
    question: 'Sucrose, $C_{12}H_{22}O_{11}$, melts at 186 °C, far below NaCl (801 °C), even though each sucrose molecule contains many strong covalent bonds. Why?',
    options: [
      'The covalent bonds in each sucrose molecule are unusually weak',
      'Sucrose is an amorphous solid with no definite structure at all',
      'Sucrose is a network solid, and its network breaks down easily',
      'Melting sucrose overcomes only the forces between molecules',
    ],
    correctIndex: 3,
    explanation: 'Sucrose is a molecular solid: melting separates whole molecules, overcoming hydrogen bonds and other intermolecular forces, while every covalent bond stays intact. Those forces are weaker than the ionic attractions that must be overcome to melt NaCl.',
    partNumber: 2,
    partTitle: 'Types of Solids',
  },

  // Part 3: Surface Tension & Viscosity
  {
    id: 'psm-ent-3a',
    question: 'In a narrow glass tube, a liquid forms a convex (domed) meniscus and its level drops below the level of the surrounding liquid. What does this show?',
    options: [
      'Its cohesion is stronger than its adhesion to glass',
      'Its adhesion to glass exceeds its cohesion',
      'It has almost no intermolecular forces of its own',
      'It is less dense than the glass of the narrow tube',
    ],
    correctIndex: 0,
    explanation: 'When the liquid\'s attraction to itself (cohesion) beats its attraction to the glass (adhesion), it pulls away from the walls, forming a domed surface and sinking in the tube, as mercury does. Stronger adhesion would give a concave meniscus and a rise up the tube.',
    partNumber: 3,
    partTitle: 'Surface Tension & Viscosity',
  },
  {
    id: 'psm-ent-3b',
    question: 'Which liquid is more viscous at 25 °C, hexane ($C_6H_{14}$) or hexadecane ($C_{16}H_{34}$), and why?',
    options: [
      'Hexane, since its smaller molecules pack together more closely',
      'Neither, since both are nonpolar and have only dispersion forces',
      'Hexadecane, since its chains tangle and have stronger LDF',
      'Hexane, since its molecules move more slowly than hexadecane\'s',
    ],
    correctIndex: 2,
    explanation: 'Both are nonpolar, but hexadecane\'s much longer chains have more electrons and more surface contact (stronger dispersion forces) and tangle with one another, so they resist sliding past each other. Having the same type of force does not mean having the same strength.',
    partNumber: 3,
    partTitle: 'Surface Tension & Viscosity',
  },

  // Part 4: Phase Changes & Heating Curves
  {
    id: 'psm-ent-4a',
    question: 'A substance has $\\Delta H_{fus} = 9.0$ kJ/mol and $\\Delta H_{vap} = 35.0$ kJ/mol. How much heat is needed to sublime 0.50 mol of the solid?',
    options: ['13.0 kJ', '22.0 kJ', '44.0 kJ', '17.5 kJ'],
    correctIndex: 1,
    explanation: 'Solid to gas costs the same as melting plus vaporizing: $\\Delta H_{sub} = 9.0 + 35.0 = 44.0$ kJ/mol, and $0.50 \\times 44.0 = 22.0$ kJ. 44.0 kJ forgets the 0.50 mol, 17.5 kJ uses only vaporization, and 13.0 kJ subtracts the two enthalpies.',
    partNumber: 4,
    partTitle: 'Phase Changes & Heating Curves',
  },
  {
    id: 'psm-ent-4b',
    question: 'On the heating curve of substance Z, heated at a constant rate, the sloped segment for the liquid is steeper than the sloped segment for the solid. What does this indicate?',
    options: [
      'The liquid has a larger specific heat capacity than the solid',
      'The liquid\'s intermolecular forces are being broken faster',
      'The heat added to the liquid goes into a phase change',
      'The liquid has a smaller specific heat capacity than the solid',
    ],
    correctIndex: 3,
    explanation: 'On a sloped segment, $q = mc\\Delta T$, so for the same heat input a smaller specific heat $c$ produces a larger temperature rise and a steeper line. Phase changes appear as flat segments, not sloped ones.',
    partNumber: 4,
    partTitle: 'Phase Changes & Heating Curves',
  },

  // Part 5: Particle-Level Models of Matter
  {
    id: 'psm-ent-5a',
    question: 'A gas sample is squeezed to half its volume at constant temperature. Which describes the gas particles afterward?',
    options: [
      'Same average speed, smaller spacing, more frequent collisions',
      'Higher average speed, smaller spacing, more frequent collisions',
      'Higher average speed, same spacing, more frequent collisions',
      'Lower average speed, smaller spacing, fewer collisions',
    ],
    correctIndex: 0,
    explanation: 'Only temperature sets the average speed, so it is unchanged; the same particles in half the space are closer together and collide with each other and the walls more often. Compressing does not make the particles faster; that would take heating.',
    partNumber: 5,
    partTitle: 'Particle-Level Models of Matter',
  },
  {
    id: 'psm-ent-5b',
    question: 'Liquid benzene has a molar volume of about 89 mL. Which estimates for solid benzene and for benzene vapor at its boiling point (80 °C, 1 atm) are most reasonable?',
    options: [
      'Solid about 8 mL; vapor about 900 mL',
      'Solid about 800 mL; vapor about 90 mL',
      'Solid about 80 mL; vapor about 29,000 mL',
      'Solid about 80 mL; vapor about 180 mL',
    ],
    correctIndex: 2,
    explanation: 'In the solid the molecules still touch, so its molar volume is close to the liquid\'s (slightly smaller for most substances), while a gas is mostly empty space: a mole of gas at 353 K and 1 atm fills about 29 L. The vapor values of 90 to 900 mL are far too small for a gas.',
    partNumber: 5,
    partTitle: 'Particle-Level Models of Matter',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'psm-ent-6a',
    question: 'Which of these substances is a liquid at 25 °C and 1 atm?',
    options: ['NaCl', '$CH_3OH$', 'HCl', '$CH_4$'],
    correctIndex: 1,
    explanation: 'Methanol\'s hydrogen bonding is strong enough to keep it liquid at room temperature (bp 65 °C). Methane (dispersion only) and HCl (dipole-dipole) have weaker forces and are gases, while ionic NaCl is a solid.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'psm-ent-6b',
    question: 'Diethyl ether and 1-butanol have the same formula, $C_4H_{10}O$, but only 1-butanol has an O–H group. Compared with diethyl ether, 1-butanol has a',
    options: [
      'higher boiling point, higher viscosity and higher vapor pressure',
      'lower boiling point, lower viscosity and higher vapor pressure',
      'higher boiling point, lower viscosity and lower vapor pressure',
      'higher boiling point, higher viscosity and lower vapor pressure',
    ],
    correctIndex: 3,
    explanation: '1-Butanol hydrogen-bonds while diethyl ether cannot (it has no H on O), so 1-butanol has the stronger intermolecular forces: a higher boiling point and viscosity, and a lower vapor pressure. Vapor pressure always moves opposite to boiling point.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'psm-ent-7a',
    question: 'Liquid A has $\\Delta H_{vap} = 23$ kJ/mol and liquid B has $\\Delta H_{vap} = 38$ kJ/mol. Which statement is most likely true?',
    options: [
      'B has the higher boiling point and the lower vapor pressure at 25 °C',
      'B has the higher boiling point and the higher vapor pressure at 25 °C',
      'A has the stronger intermolecular forces and the higher boiling point',
      'A has the higher viscosity and the lower vapor pressure at 25 °C',
    ],
    correctIndex: 0,
    explanation: 'A larger enthalpy of vaporization means more energy is needed to separate the molecules, so B has stronger intermolecular forces: a higher boiling point and fewer molecules escaping, a lower vapor pressure. Boiling point and vapor pressure move in opposite directions.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'psm-ent-7b',
    question: 'Ice and liquid water coexist in a glass at 0 °C. How does the average kinetic energy of the molecules in the ice compare with that in the liquid?',
    options: [
      'Higher in the liquid, since its molecules move about freely',
      'Higher in the ice, since its hydrogen bonds store extra energy',
      'The same in both, since the two phases share one temperature',
      'Lower in the liquid, since liquid water is the denser phase',
    ],
    correctIndex: 2,
    explanation: 'Average kinetic energy depends only on temperature, and both phases are at 0 °C. The liquid has more potential energy (fewer intact hydrogen bonds), which is why melting absorbs heat without a temperature change.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Solids, Liquids & Gases' },
    { partNumber: 2, partTitle: 'Types of Solids' },
    { partNumber: 3, partTitle: 'Surface Tension & Viscosity' },
    { partNumber: 4, partTitle: 'Phase Changes & Heating Curves' },
    { partNumber: 5, partTitle: 'Particle-Level Models of Matter' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
