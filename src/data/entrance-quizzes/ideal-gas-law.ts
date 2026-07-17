/**
 * Entrance Quiz — Ideal Gas Law
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'igl-ent-1a', question: 'Standard temperature and pressure (STP) for gases is:', options: ['0°C and 1 atm', '25°C and 1 atm', '0°C and 0 atm', '100°C and 1 atm'], correctIndex: 0, explanation: 'STP is defined as 0°C (273.15 K) and 1 atm (101.325 kPa). At STP, one mole of an ideal gas occupies 22.4 L.', partNumber: 1, partTitle: 'Gas Properties & Pressure' },
  { id: 'igl-ent-1b', question: 'Pressure is defined as:', options: ['Force per unit volume', 'Force per unit area', 'Mass per unit volume', 'Energy per unit volume'], correctIndex: 1, explanation: 'Pressure = force / area. Gas pressure results from gas molecules colliding with the walls of a container.', partNumber: 1, partTitle: 'Gas Properties & Pressure' },

  { id: 'igl-ent-2a', question: 'Boyle\'s law states that at constant temperature, the volume of a gas is:', options: ['Directly proportional to pressure', 'Inversely proportional to pressure', 'Independent of pressure', 'Equal to pressure'], correctIndex: 1, explanation: 'Boyle\'s law: $PV = k$ (constant T, n). As pressure increases, volume decreases proportionally: $P_1V_1 = P_2V_2$.', partNumber: 2, partTitle: "Boyle's, Charles's & Avogadro's Laws" },
  { id: 'igl-ent-2b', question: 'If the temperature of a gas doubles (in Kelvin) at constant pressure, the volume:', options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'], correctIndex: 1, explanation: 'Charles\'s law: $V/T = k$ (constant P, n). If temperature doubles, volume doubles: $V_1/T_1 = V_2/T_2$.', partNumber: 2, partTitle: "Boyle's, Charles's & Avogadro's Laws" },

  { id: 'igl-ent-3a', question: 'In the ideal gas law $PV = nRT$, what is the value of $R$ when pressure is in atm?', options: ['8.314 J/(mol·K)', '0.0821 L·atm/(mol·K)', '62.36 L·torr/(mol·K)', '1.987 cal/(mol·K)'], correctIndex: 1, explanation: 'When P is in atm and V in liters, use $R = 0.0821$ L·atm/(mol·K). The value 8.314 is used with SI units (Pa, $m^{3}$).', partNumber: 3, partTitle: 'The Ideal Gas Law (PV=nRT)' },
  { id: 'igl-ent-3b', question: 'What volume does 2.0 mol of an ideal gas occupy at STP?', options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'], correctIndex: 2, explanation: 'At STP, 1 mol occupies 22.4 L. So 2.0 mol occupies $2.0 \\times 22.4 = 44.8$ L.', partNumber: 3, partTitle: 'The Ideal Gas Law (PV=nRT)' },

  { id: 'igl-ent-4a', question: 'In gas stoichiometry at STP, what volume of $O_2$ is needed to completely combust 2.0 mol of $CH_4$? ($CH_4 + 2O_2 \\to CO_2 + 2H_2O$)', options: ['22.4 L', '44.8 L', '89.6 L', '11.2 L'], correctIndex: 2, explanation: '2.0 mol $CH_4$ requires $2.0 \\times 2 = 4.0$ mol $O_2$ (2:1 ratio). At STP: $4.0 \\times 22.4 = 89.6$ L.', partNumber: 4, partTitle: 'Gas Stoichiometry' },
  { id: 'igl-ent-4b', question: 'The molar volume of a gas at STP is approximately:', options: ['1.00 L/mol', '11.2 L/mol', '22.4 L/mol', '44.8 L/mol'], correctIndex: 2, explanation: 'At STP (0°C, 1 atm), one mole of any ideal gas occupies 22.4 L. This is the molar volume at STP.', partNumber: 4, partTitle: 'Gas Stoichiometry' },

  { id: 'igl-ent-5a', question: 'Dalton\'s law of partial pressures states that the total pressure of a gas mixture equals:', options: ['The pressure of the most abundant gas', 'The sum of the partial pressures of each gas', 'The average of all partial pressures', 'The product of all partial pressures'], correctIndex: 1, explanation: 'Dalton\'s law: $P_{total} = P_1 + P_2 + P_3 + ...$. Each gas contributes independently to the total pressure.', partNumber: 5, partTitle: "Dalton's Law of Partial Pressures" },
  { id: 'igl-ent-5b', question: 'A mixture contains 0.60 mol $N_2$ and 0.40 mol $O_2$ at 2.0 atm total pressure. The partial pressure of $N_2$ is:', options: ['0.60 atm', '0.80 atm', '1.2 atm', '2.0 atm'], correctIndex: 2, explanation: 'Mole fraction of $N_2$ = $0.60/1.00 = 0.60$. $P_{N_2} = X_{N_2} \\times P_{total} = 0.60 \\times 2.0 = 1.2$ atm.', partNumber: 5, partTitle: "Dalton's Law of Partial Pressures" },

  { id: 'igl-ent-6a', question: 'A 5.0 L container holds a gas at 300 K and 2.0 atm. How many moles of gas are present? ($R = 0.0821$)', options: ['0.20 mol', '0.41 mol', '0.82 mol', '1.2 mol'], correctIndex: 1, explanation: '$n = PV/RT = (2.0)(5.0)/((0.0821)(300)) = 10.0/24.63 = 0.41$ mol.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'igl-ent-6b', question: 'What is the density of $CO_2$ (M = 44.01 g/mol) at STP?', options: ['0.72 g/L', '1.25 g/L', '1.96 g/L', '2.86 g/L'], correctIndex: 2, explanation: 'Density = M/V_m = 44.01 g/mol ÷ 22.4 L/mol = 1.96 g/L at STP.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'igl-ent-7a', question: 'Real gases deviate most from ideal behavior at:', options: ['High temperature and low pressure', 'Low temperature and high pressure', 'High temperature and high pressure', 'Low temperature and low pressure'], correctIndex: 1, explanation: 'At low T and high P, gas molecules are close together and moving slowly, so intermolecular forces and molecular volume become significant, causing deviations from ideal behavior.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'igl-ent-7b', question: 'A gas collected over water at 25°C has a total pressure of 760 torr. If the vapor pressure of water at 25°C is 23.8 torr, the pressure of the dry gas is:', options: ['783.8 torr', '760.0 torr', '736.2 torr', '23.8 torr'], correctIndex: 2, explanation: 'By Dalton\'s law: $P_{gas} = P_{total} - P_{water} = 760 - 23.8 = 736.2$ torr.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Gas Properties & Pressure' },
    { partNumber: 2, partTitle: "Boyle's, Charles's & Avogadro's Laws" },
    { partNumber: 3, partTitle: 'The Ideal Gas Law (PV=nRT)' },
    { partNumber: 4, partTitle: 'Gas Stoichiometry' },
    { partNumber: 5, partTitle: "Dalton's Law of Partial Pressures" },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
