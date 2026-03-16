/**
 * Entrance Quiz — Properties & States of Matter
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'psm-ent-1a', question: 'In which state of matter do particles have the most kinetic energy?', options: ['Solid', 'Liquid', 'Gas', 'All states have equal kinetic energy'], correctIndex: 2, explanation: 'Gas particles have the most kinetic energy, moving freely and rapidly. Solids have the least (only vibrate in place), and liquids are intermediate.', partNumber: 1, partTitle: 'Solids, Liquids & Gases' },
  { id: 'psm-ent-1b', question: 'Which state of matter has a definite volume but no definite shape?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctIndex: 1, explanation: 'Liquids have a definite volume (particles close together) but take the shape of their container (particles can flow past each other).', partNumber: 1, partTitle: 'Solids, Liquids & Gases' },

  { id: 'psm-ent-2a', question: 'Vapor pressure increases with:', options: ['Decreasing temperature', 'Increasing temperature', 'Increasing intermolecular forces', 'Decreasing volume'], correctIndex: 1, explanation: 'Higher temperature gives more molecules enough kinetic energy to escape the liquid surface, increasing vapor pressure.', partNumber: 2, partTitle: 'Vapor Pressure & Boiling Point' },
  { id: 'psm-ent-2b', question: 'A liquid boils when its vapor pressure equals:', options: ['Zero', 'The external (atmospheric) pressure', 'Its critical pressure', 'Twice the atmospheric pressure'], correctIndex: 1, explanation: 'Boiling occurs when vapor pressure equals external pressure. At higher altitudes (lower atmospheric pressure), liquids boil at lower temperatures.', partNumber: 2, partTitle: 'Vapor Pressure & Boiling Point' },

  { id: 'psm-ent-3a', question: 'Surface tension is caused by:', options: ['Gravity pulling on the liquid surface', 'Unbalanced intermolecular forces at the surface', 'Atmospheric pressure on the liquid', 'Chemical bonds breaking at the surface'], correctIndex: 1, explanation: 'Surface molecules are pulled inward by other liquid molecules but not outward (no liquid above them), creating a net inward force that makes the surface act like a stretched membrane.', partNumber: 3, partTitle: 'Surface Tension & Viscosity' },
  { id: 'psm-ent-3b', question: 'Viscosity of a liquid generally decreases with:', options: ['Decreasing temperature', 'Increasing temperature', 'Increasing intermolecular forces', 'Increasing molecular size'], correctIndex: 1, explanation: 'Higher temperature increases molecular kinetic energy, allowing molecules to overcome intermolecular forces and flow more easily, decreasing viscosity.', partNumber: 3, partTitle: 'Surface Tension & Viscosity' },

  { id: 'psm-ent-4a', question: 'On a phase diagram, the triple point represents conditions where:', options: ['Only gas exists', 'Solid and liquid are in equilibrium', 'All three phases coexist in equilibrium', 'The substance becomes a supercritical fluid'], correctIndex: 2, explanation: 'The triple point is the unique temperature and pressure where solid, liquid, and gas phases all exist simultaneously in thermodynamic equilibrium.', partNumber: 4, partTitle: 'Phase Diagrams' },
  { id: 'psm-ent-4b', question: 'Above the critical point on a phase diagram, the substance exists as:', options: ['A solid', 'A liquid', 'A gas', 'A supercritical fluid'], correctIndex: 3, explanation: 'Above the critical temperature and pressure, there is no distinct boundary between liquid and gas — the substance is a supercritical fluid with properties of both.', partNumber: 4, partTitle: 'Phase Diagrams' },

  { id: 'psm-ent-5a', question: 'On a heating curve, the flat (plateau) regions represent:', options: ['Temperature increase', 'Phase changes where energy breaks intermolecular forces', 'Cooling of the substance', 'Chemical reactions'], correctIndex: 1, explanation: 'During phase changes (melting, boiling), added heat energy breaks intermolecular forces rather than increasing temperature, creating flat regions.', partNumber: 5, partTitle: 'Heating & Cooling Curves' },
  { id: 'psm-ent-5b', question: 'Which requires more energy: melting ice or boiling water (same mass)?', options: ['Melting ice', 'Boiling water', 'They require equal energy', 'Cannot be determined'], correctIndex: 1, explanation: 'Boiling requires more energy because ALL intermolecular forces must be overcome to go from liquid to gas. Melting only partially disrupts the solid structure. For water: $\\Delta H_{vap}$ (40.7 kJ/mol) >> $\\Delta H_{fus}$ (6.01 kJ/mol).', partNumber: 5, partTitle: 'Heating & Cooling Curves' },

  { id: 'psm-ent-6a', question: 'Which liquid would you expect to have the highest vapor pressure at room temperature?', options: ['Water ($H_2O$)', 'Ethanol ($C_2H_5OH$)', 'Diethyl ether ($C_4H_{10}O$)', 'Glycerol ($C_3H_8O_3$)'], correctIndex: 2, explanation: 'Diethyl ether has the weakest intermolecular forces among these options (no H-bonding from the ether oxygen), so its molecules escape most easily, giving the highest vapor pressure.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'psm-ent-6b', question: 'Water\'s solid (ice) is less dense than its liquid because:', options: ['Ice molecules move faster', 'Hydrogen bonding in ice creates an open crystalline structure', 'Ice has fewer molecules per unit volume due to thermal expansion', 'Water molecules shrink when frozen'], correctIndex: 1, explanation: 'In ice, hydrogen bonds lock water molecules into a hexagonal open lattice that is less dense than the more disordered liquid structure where molecules can pack closer.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'psm-ent-7a', question: 'Sublimation is the phase change from:', options: ['Solid to liquid', 'Liquid to gas', 'Solid directly to gas', 'Gas to liquid'], correctIndex: 2, explanation: 'Sublimation is the direct conversion of a solid to a gas without passing through the liquid phase. Examples include dry ice ($CO_2$) and freeze-drying.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'psm-ent-7b', question: 'Which statement correctly relates IMF strength to physical properties?', options: ['Stronger IMFs → lower boiling point', 'Stronger IMFs → higher vapor pressure', 'Stronger IMFs → higher viscosity', 'Stronger IMFs → lower surface tension'], correctIndex: 2, explanation: 'Stronger intermolecular forces mean molecules resist flowing past each other more, increasing viscosity. They also increase boiling point and surface tension while decreasing vapor pressure.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Solids, Liquids & Gases' },
    { partNumber: 2, partTitle: 'Vapor Pressure & Boiling Point' },
    { partNumber: 3, partTitle: 'Surface Tension & Viscosity' },
    { partNumber: 4, partTitle: 'Phase Diagrams' },
    { partNumber: 5, partTitle: 'Heating & Cooling Curves' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
