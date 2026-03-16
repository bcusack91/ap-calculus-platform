/**
 * Entrance Quiz — Reaction Types
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'rt-ent-1a', question: 'A synthesis (combination) reaction has the general form:', options: ['$AB \\to A + B$', '$A + B \\to AB$', '$AB + CD \\to AD + CB$', '$A + BC \\to AC + B$'], correctIndex: 1, explanation: 'Synthesis reactions combine two or more reactants into one product: $A + B \\to AB$.', partNumber: 1, partTitle: 'Synthesis & Decomposition' },
  { id: 'rt-ent-1b', question: 'Which reaction is a decomposition?', options: ['$2Na + Cl_2 \\to 2NaCl$', '$2H_2O \\to 2H_2 + O_2$', '$Zn + CuSO_4 \\to ZnSO_4 + Cu$', '$HCl + NaOH \\to NaCl + H_2O$'], correctIndex: 1, explanation: 'Decomposition breaks one compound into simpler substances. $2H_2O \\to 2H_2 + O_2$ has one reactant breaking into two products.', partNumber: 1, partTitle: 'Synthesis & Decomposition' },

  { id: 'rt-ent-2a', question: 'In a single replacement reaction:', options: ['Two compounds exchange partners', 'One element replaces another in a compound', 'A compound breaks down', 'Two elements combine'], correctIndex: 1, explanation: 'Single replacement: $A + BC \\to AC + B$. A more reactive element displaces a less reactive one from a compound.', partNumber: 2, partTitle: 'Single & Double Replacement' },
  { id: 'rt-ent-2b', question: 'Which is a double replacement reaction?', options: ['$2Mg + O_2 \\to 2MgO$', '$Fe + CuSO_4 \\to FeSO_4 + Cu$', '$AgNO_3 + NaCl \\to AgCl + NaNO_3$', '$2KClO_3 \\to 2KCl + 3O_2$'], correctIndex: 2, explanation: 'Double replacement: $AB + CD \\to AD + CB$. The cations of two ionic compounds switch partners: $Ag^+$ pairs with $Cl^-$ and $Na^+$ pairs with $NO_3^-$.', partNumber: 2, partTitle: 'Single & Double Replacement' },

  { id: 'rt-ent-3a', question: 'In a combustion reaction, a hydrocarbon reacts with $O_2$ to produce:', options: ['$H_2O$ only', '$CO_2$ only', '$CO_2$ and $H_2O$', '$CO$ and $H_2$'], correctIndex: 2, explanation: 'Complete combustion of hydrocarbons always produces carbon dioxide and water: $C_xH_y + O_2 \\to CO_2 + H_2O$.', partNumber: 3, partTitle: 'Combustion Reactions' },
  { id: 'rt-ent-3b', question: 'The balanced equation for the combustion of methane is:', options: ['$CH_4 + O_2 \\to CO_2 + H_2O$', '$CH_4 + 2O_2 \\to CO_2 + 2H_2O$', '$CH_4 + 3O_2 \\to CO_2 + 2H_2O$', '$2CH_4 + O_2 \\to 2CO_2 + 2H_2O$'], correctIndex: 1, explanation: '$CH_4 + 2O_2 \\to CO_2 + 2H_2O$. Count: C: 1=1 ✓, H: 4=4 ✓, O: 4=4 ✓.', partNumber: 3, partTitle: 'Combustion Reactions' },

  { id: 'rt-ent-4a', question: 'A precipitation reaction produces:', options: ['A gas', 'An insoluble solid from mixing two solutions', 'Heat and light', 'Only soluble products'], correctIndex: 1, explanation: 'Precipitation reactions occur when mixing two aqueous solutions produces an insoluble ionic compound (precipitate) that falls out of solution.', partNumber: 4, partTitle: 'Precipitation Reactions' },
  { id: 'rt-ent-4b', question: 'When $Pb(NO_3)_2(aq)$ and $KI(aq)$ are mixed, the precipitate formed is:', options: ['$KNO_3$', '$PbI_2$', '$PbK$', '$NO_3I$'], correctIndex: 1, explanation: 'Swapping partners: $Pb^{2+}$ pairs with $I^-$ to form $PbI_2$ (insoluble, yellow precipitate). $KNO_3$ remains in solution.', partNumber: 4, partTitle: 'Precipitation Reactions' },

  { id: 'rt-ent-5a', question: 'What coefficient should be placed before $O_2$ to balance: $C_3H_8 + \\_O_2 \\to 3CO_2 + 4H_2O$?', options: ['3', '4', '5', '7'], correctIndex: 2, explanation: 'Right side has $3(2) + 4(1) = 10$ oxygen atoms, so we need 10/2 = 5 $O_2$ molecules.', partNumber: 5, partTitle: 'Balancing Chemical Equations' },
  { id: 'rt-ent-5b', question: 'When balancing equations, you can change:', options: ['Subscripts in formulas', 'Coefficients in front of formulas', 'Both subscripts and coefficients', 'The products of the reaction'], correctIndex: 1, explanation: 'Only coefficients can be changed. Changing subscripts would change the identity of the substance itself.', partNumber: 5, partTitle: 'Balancing Chemical Equations' },

  { id: 'rt-ent-6a', question: 'Identify the reaction type: $2Al + 3CuCl_2 \\to 2AlCl_3 + 3Cu$', options: ['Synthesis', 'Decomposition', 'Single replacement', 'Double replacement'], correctIndex: 2, explanation: 'Aluminum replaces copper in $CuCl_2$: a more reactive metal ($Al$) displaces a less reactive one ($Cu$). This is single replacement.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'rt-ent-6b', question: 'The activity series predicts whether a single replacement reaction will occur based on:', options: ['Molar mass', 'Relative reactivity of elements', 'Solubility rules', 'Bond energies'], correctIndex: 1, explanation: 'The activity series ranks metals by reactivity. A more reactive metal can displace a less reactive metal from a compound. If a metal is below the one it tries to replace, no reaction occurs.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'rt-ent-7a', question: 'When an acid reacts with a base to produce salt and water, this is called:', options: ['Combustion', 'Decomposition', 'Neutralization', 'Oxidation'], correctIndex: 2, explanation: 'Neutralization is a specific type of double replacement: acid + base → salt + water. Example: $HCl + NaOH \\to NaCl + H_2O$.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'rt-ent-7b', question: 'Which clue suggests a chemical reaction has occurred?', options: ['The solution becomes colder', 'A precipitate forms, gas evolves, or color changes', 'The container feels warm (might be dissolving)', 'All of the above can indicate a reaction'], correctIndex: 3, explanation: 'Color change, precipitate formation, gas production, and temperature change are all evidence that a chemical reaction may have occurred.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Synthesis & Decomposition' },
    { partNumber: 2, partTitle: 'Single & Double Replacement' },
    { partNumber: 3, partTitle: 'Combustion Reactions' },
    { partNumber: 4, partTitle: 'Precipitation Reactions' },
    { partNumber: 5, partTitle: 'Balancing Chemical Equations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
