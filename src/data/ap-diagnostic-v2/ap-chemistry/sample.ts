/**
 * AP Chemistry diagnostic v2: sample items (8, including one stimulus set)
 * that exercise the engine end to end. Content authors add unit files beside
 * this one (see ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md) and register them in
 * ./index.ts. Disjoint from the exit-quiz pool (checked by
 * scripts/check-ap-diagnostic-v2.ts).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s001',
    title: 'Boiling points of four compounds with similar molar masses',
    kind: 'table',
    content:
      'A student compares the normal boiling points of four molecular compounds whose molar masses are within 2 g/mol of one another.\n\n' +
      '| Compound | Structure | Molar mass (g/mol) | Normal boiling point (°C) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| Butane | CH₃CH₂CH₂CH₃ | 58 | −0.5 |\n' +
      '| Methoxyethane | CH₃OCH₂CH₃ | 60 | 7.4 |\n' +
      '| Propanal | CH₃CH₂CHO | 58 | 48 |\n' +
      '| 1-Propanol | CH₃CH₂CH₂OH | 60 | 97 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'chem-s001-q1',
    stimulusId: 'chem-s001',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'easy',
    stem: 'Based on the data, which compound has the weakest intermolecular forces?',
    options: ['CH₃CH₂CH₂CH₃', 'CH₃OCH₂CH₃', 'CH₃CH₂CHO', 'CH₃CH₂CH₂OH'],
    correctIndex: 0,
    explanation:
      'The compound with the lowest boiling point needs the least energy to separate its molecules, so its intermolecular forces are weakest. Butane boils at −0.5 °C, the lowest in the table. It is nonpolar, so it has only London dispersion forces.',
  },
  {
    id: 'chem-s001-q2',
    stimulusId: 'chem-s001',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'medium',
    stem: '1-Propanol and methoxyethane have the same molar mass. Which statement best explains why 1-propanol has the much higher boiling point?',
    options: [
      '1-Propanol molecules form hydrogen bonds with one another through their O–H groups.',
      '1-Propanol molecules have more electrons, so their London dispersion forces are stronger.',
      'Methoxyethane molecules are nonpolar, so they have no dipole–dipole attractions at all.',
      'The covalent bonds within 1-propanol are stronger than those within methoxyethane.',
    ],
    correctIndex: 0,
    explanation:
      '1-Propanol has an H bonded directly to O, so its molecules hydrogen-bond to each other. Methoxyethane has no O–H bond, so it cannot. The two molecules have the same number of electrons, so their dispersion forces are similar. Methoxyethane is polar, because the bent C–O–C gives it a dipole. Boiling breaks attractions between molecules, not covalent bonds within them.',
  },
  {
    id: 'chem-s001-q3',
    stimulusId: 'chem-s001',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'hard',
    stem: 'Propanal boils about 48 °C higher than butane, although their molar masses are equal. Which interaction is mainly responsible for the difference?',
    options: [
      'Dipole–dipole attractions from the polar C=O group, which butane does not have',
      'Hydrogen bonds between the H atom of one CHO group and the O atom of another',
      'Stronger London dispersion forces, because the propanal electron cloud is larger',
      'Ion–dipole attractions, because the C=O bond is polar enough to be partly ionic',
    ],
    correctIndex: 0,
    explanation:
      'The polar C=O bond gives propanal a permanent dipole, so its molecules attract by dipole–dipole forces on top of dispersion forces. Butane is nonpolar and has only dispersion forces. Propanal cannot hydrogen-bond with itself, because its H atoms are bonded to C, not to N, O or F. The two have similar electron counts, so their dispersion forces are comparable. No ions are present.',
  },
  {
    id: 'chem-u1-001',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'medium',
    stem: 'Which of the following elements has the largest first ionization energy?',
    options: ['Na', 'Mg', 'Al', 'Si'],
    correctIndex: 3,
    explanation:
      'First ionization energy generally rises across period 3 as the effective nuclear charge increases. Al is lower than Mg, because its outermost electron is in a 3p subshell, which is higher in energy and better shielded. Si has the highest value of the four (about 786 kJ/mol, compared with 738 kJ/mol for Mg).',
  },
  {
    id: 'chem-u2-001',
    unit: 'unit-2',
    topicSlug: 'vsepr-molecular-geometry',
    difficulty: 'easy',
    stem: 'Which of the following molecules has a bent molecular geometry?',
    options: ['H₂O', 'CO₂', 'BeCl₂', 'CH₄'],
    correctIndex: 0,
    explanation:
      'O in H₂O has four electron domains: two bonding pairs and two lone pairs. The lone pairs give the molecule a bent shape. CO₂ and BeCl₂ have two electron domains and no lone pairs on the central atom, so they are linear. CH₄ is tetrahedral.',
  },
  {
    id: 'chem-u5-001',
    unit: 'unit-5',
    topicSlug: 'reaction-rates-and-rate-laws',
    difficulty: 'medium',
    stem: 'For the reaction A + B → C, doubling [A] while [B] is held constant makes the initial rate four times as large. Doubling [B] while [A] is held constant leaves the initial rate unchanged. Which rate law is consistent with these results?',
    options: ['rate = k[A]²', 'rate = k[A][B]', 'rate = k[A]²[B]', 'rate = k[A][B]²'],
    correctIndex: 0,
    explanation:
      'Doubling [A] multiplies the rate by 4 = 2², so the reaction is second order in A. Doubling [B] leaves the rate unchanged, so the reaction is zero order in B, and B does not appear in the rate law.',
  },
  {
    id: 'chem-u8-001',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'easy',
    stem: 'What is the pH of a 0.010 M solution of HCl at 25 °C?',
    options: ['2.00', '1.00', '12.00', '0.01'],
    correctIndex: 0,
    explanation:
      'HCl is a strong acid and ionizes completely, so [H₃O⁺] = 0.010 M. pH = −log(0.010) = 2.00. A pH of 12.00 would be the answer for 0.010 M of a strong base. 0.01 is the concentration itself, not its negative logarithm.',
  },
  {
    id: 'chem-u9-001',
    unit: 'unit-9',
    topicSlug: 'gibbs-free-energy',
    difficulty: 'medium',
    stem: 'A reaction has ΔH° < 0 and ΔS° < 0. Under which conditions is the reaction thermodynamically favorable?',
    options: [
      'Only at sufficiently low temperatures',
      'Only at sufficiently high temperatures',
      'At every temperature, high or low',
      'At no temperature, high or low',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = ΔH° − TΔS°. When ΔS° is negative, the −TΔS° term is positive and grows as T rises. A negative ΔH° makes ΔG° negative only while T is small enough that TΔS° stays smaller in magnitude than ΔH°.',
  },
]
