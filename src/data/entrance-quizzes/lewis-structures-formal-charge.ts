/**
 * Entrance Quiz — Lewis Structures & Formal Charge
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ls-ent-1a', question: 'The first step in drawing a Lewis structure is to:', options: ['Draw all bonds', 'Count total valence electrons', 'Place lone pairs', 'Determine formal charges'], correctIndex: 1, explanation: 'Always start by counting the total number of valence electrons from all atoms (adjusting for charge if an ion).', partNumber: 1, partTitle: 'Drawing Lewis Structures' },
  { id: 'ls-ent-1b', question: 'How many valence electrons does $CO_2$ have?', options: ['8', '12', '16', '20'], correctIndex: 2, explanation: 'C has 4 valence electrons, each O has 6: 4 + 2(6) = 16 total valence electrons.', partNumber: 1, partTitle: 'Drawing Lewis Structures' },

  { id: 'ls-ent-2a', question: 'Which molecule is an exception to the octet rule?', options: ['$H_2O$', '$BF_3$', '$CO_2$', '$NH_3$'], correctIndex: 1, explanation: '$BF_3$ has only 6 electrons around boron (incomplete octet). B is a common exception because it has only 3 valence electrons.', partNumber: 2, partTitle: 'Octet Rule & Exceptions' },
  { id: 'ls-ent-2b', question: 'Which element commonly forms an expanded octet?', options: ['Carbon', 'Nitrogen', 'Oxygen', 'Sulfur'], correctIndex: 3, explanation: 'Sulfur (period 3) has accessible d orbitals and can hold more than 8 electrons, as seen in $SF_6$ (12 electrons around S).', partNumber: 2, partTitle: 'Octet Rule & Exceptions' },

  { id: 'ls-ent-3a', question: 'Formal charge is calculated as:', options: ['Valence $e^{-}$ − (lone pair $e^{-}$ + bonding $e^{-}$)', 'Valence $e^{-}$ − lone pair $e^{-}$ − $\\tfrac{1}{2} (bonding e^{-})$', 'Total $e^{-}$ − bonding $e^{-}$', 'Atomic number − total $e^{-}$'], correctIndex: 1, explanation: 'FC = valence electrons − lone pair electrons − ½(bonding electrons). This determines how electron-rich or electron-poor each atom is.', partNumber: 3, partTitle: 'Formal Charge' },
  { id: 'ls-ent-3b', question: 'The best Lewis structure generally has:', options: ['Maximum formal charges on all atoms', 'Formal charges of zero on as many atoms as possible', 'Negative formal charge on less electronegative atoms', 'Positive formal charge on all atoms'], correctIndex: 1, explanation: 'The most stable Lewis structure minimizes formal charges. Ideally, all atoms should have a formal charge of zero.', partNumber: 3, partTitle: 'Formal Charge' },

  { id: 'ls-ent-4a', question: 'Resonance structures are:', options: ['Different molecules with the same formula', 'Equivalent Lewis structures with different electron arrangements', 'Excited states of a molecule', 'Isomers that interconvert'], correctIndex: 1, explanation: 'Resonance structures are multiple valid Lewis structures for the same molecule that differ only in the placement of electrons (not atoms).', partNumber: 4, partTitle: 'Resonance Structures' },
  { id: 'ls-ent-4b', question: 'How many resonance structures does the $NO_3^-$ ion have?', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: '$NO_3^-$ has 3 equivalent resonance structures. The double bond can be placed between N and any of the three oxygen atoms.', partNumber: 4, partTitle: 'Resonance Structures' },

  { id: 'ls-ent-5a', question: 'In $PCl_5$, phosphorus has ___ electrons in its valence shell:', options: ['8', '10', '12', '6'], correctIndex: 1, explanation: 'Phosphorus forms 5 bonds to chlorine in $PCl_5$, giving it 10 electrons — an expanded octet using d orbitals.', partNumber: 5, partTitle: 'Expanded & Incomplete Octets' },
  { id: 'ls-ent-5b', question: 'Which molecule has an incomplete octet on the central atom?', options: ['$CCl_4$', '$AlCl_3$', '$SiF_4$', '$NF_3$'], correctIndex: 1, explanation: 'Aluminum in $AlCl_3$ has only 6 electrons around it (3 bonds × 2 electrons each), which is an incomplete octet.', partNumber: 5, partTitle: 'Expanded & Incomplete Octets' },

  { id: 'ls-ent-6a', question: 'What is the formal charge on the nitrogen atom in $NH_4^+$?', options: ['-1', '0', '+1', '+2'], correctIndex: 2, explanation: 'N has 5 valence $e^{-}$. In $NH_4^+$: 0 lone pairs, 4 bonds $(8 bonding e^{-})$. FC = 5 − 0 − ½(8) = 5 − 4 = +1.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ls-ent-6b', question: 'In the Lewis structure of $CO$, the bond order is:', options: ['1 (single)', '2 (double)', '3 (triple)', '4 (quadruple)'], correctIndex: 2, explanation: 'CO has a triple bond (10 valence electrons total: one lone pair on each atom and 3 shared pairs). Bond order = 3.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'ls-ent-7a', question: 'Which of the following correctly describes the resonance hybrid of benzene ($C_6H_6$)?', options: ['Alternating single and double bonds', 'All C–C bonds of equal length, intermediate between single and double', 'All single bonds between carbon atoms', 'Three isolated double bonds'], correctIndex: 1, explanation: 'The resonance hybrid shows all C–C bonds as equivalent with a bond order of 1.5, intermediate between single (1.54 Å) and double (1.34 Å) bonds.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'ls-ent-7b', question: 'For the $OCN^-$ ion, which Lewis structure is most favorable?', options: ['O=C=N with charges 0, 0, −1', 'O−C≡N with charges −1, 0, 0', ':O≡C−N: with charges +1, 0, −2', 'All are equally favorable'], correctIndex: 0, explanation: 'O=C=$N^{-}$ places the negative formal charge on the more electronegative atom (N is −1, O is 0 or you can argue either arrangement). The key is minimizing formal charges and placing negative charge on the most electronegative atom.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Drawing Lewis Structures' },
    { partNumber: 2, partTitle: 'Octet Rule & Exceptions' },
    { partNumber: 3, partTitle: 'Formal Charge' },
    { partNumber: 4, partTitle: 'Resonance Structures' },
    { partNumber: 5, partTitle: 'Expanded & Incomplete Octets' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
