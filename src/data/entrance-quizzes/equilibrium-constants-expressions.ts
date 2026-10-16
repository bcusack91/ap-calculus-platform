/**
 * Entrance Quiz — Equilibrium Constants & Expressions — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-equilibrium-constants-part1..7):
 *   1 What Is Equilibrium?   — dynamic equilibrium, recognizing it on a concentration–time graph
 *   2 Writing K Expressions  — exponents, excluding pure solids and liquids
 *   3 Writing Kp Expressions — Kp form, Kp from mole fractions and total pressure
 *   4 Magnitude of K         — ratio meaning of K, K says nothing about rate
 *   5 Manipulating K         — adding, reversing and scaling reactions
 *   6 Reaction Quotient Q    — computing Q and predicting the shift, heterogeneous Q
 *   7 AP Review              — multi-step K manipulation, K and temperature
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Is Equilibrium?
  {
    id: 'ece-ent-1a',
    question: '$\\text{H}_2$ and $\\text{I}_2$ are sealed in a flask at 425 °C. [HI] rises for 10 minutes and then holds steady at 0.30 M, while $[\\text{H}_2]$ holds steady at 0.050 M. Which statement describes the system after 10 minutes?',
    options: [
      'Both reactions go on at equal rates',
      'The reactions have stopped completely',
      'Only the forward reaction is still running',
      'All of the concentrations have become equal',
    ],
    correctIndex: 0,
    explanation: 'Constant concentrations mean the system is at dynamic equilibrium: HI forms and decomposes at the same rate. The reactions have not stopped, and equilibrium concentrations are constant, not equal.',
    partNumber: 1,
    partTitle: 'What Is Equilibrium?',
  },
  {
    id: 'ece-ent-1b',
    question: 'A concentration–time graph is drawn for A ⇌ B starting with pure A. At what point has the system reached equilibrium?',
    options: [
      'Where the curves for [A] and [B] cross',
      'Where both curves level off and then stay flat',
      'Where the [A] curve finally reaches zero',
      'Where the [B] curve is rising most steeply',
    ],
    correctIndex: 1,
    explanation: 'Equilibrium is reached when the concentrations stop changing, which is where both curves become flat. The crossing point only marks equal concentrations, which is not required at equilibrium.',
    partNumber: 1,
    partTitle: 'What Is Equilibrium?',
  },

  // Part 2: Writing K Expressions
  {
    id: 'ece-ent-2a',
    question: 'What is the $K_c$ expression for $\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}^+(aq) + \\text{HCO}_3^-(aq)$?',
    options: [
      '$K_c = \\dfrac{[\\text{H}^+][\\text{HCO}_3^-]}{[\\text{CO}_2][\\text{H}_2\\text{O}]}$',
      '$K_c = \\dfrac{[\\text{CO}_2]}{[\\text{H}^+][\\text{HCO}_3^-]}$',
      '$K_c = \\dfrac{[\\text{H}^+][\\text{HCO}_3^-]}{[\\text{CO}_2]}$',
      '$K_c = [\\text{H}^+][\\text{HCO}_3^-]$',
    ],
    correctIndex: 2,
    explanation: 'Liquid water is a pure liquid and is left out, but the gas and both aqueous ions stay in, products over reactants. Inverting the fraction gives the expression for the reverse reaction.',
    partNumber: 2,
    partTitle: 'Writing K Expressions',
  },
  {
    id: 'ece-ent-2b',
    question: 'What is the $K_c$ expression for $2\\text{NaHCO}_3(s) \\rightleftharpoons \\text{Na}_2\\text{CO}_3(s) + \\text{CO}_2(g) + \\text{H}_2\\text{O}(g)$?',
    options: [
      '$K_c = \\dfrac{1}{[\\text{CO}_2][\\text{H}_2\\text{O}]}$',
      '$K_c = \\dfrac{[\\text{CO}_2][\\text{H}_2\\text{O}]}{[\\text{NaHCO}_3]^2}$',
      '$K_c = \\dfrac{[\\text{Na}_2\\text{CO}_3][\\text{CO}_2][\\text{H}_2\\text{O}]}{[\\text{NaHCO}_3]^2}$',
      '$K_c = [\\text{CO}_2][\\text{H}_2\\text{O}]$',
    ],
    correctIndex: 3,
    explanation: 'Both sodium salts are pure solids and are excluded. Water is a gas here, so it stays in the expression along with $\\text{CO}_2$, and both are products, so they go in the numerator.',
    partNumber: 2,
    partTitle: 'Writing K Expressions',
  },

  // Part 3: Writing Kp Expressions
  {
    id: 'ece-ent-3a',
    question: 'What is the $K_p$ expression for $\\text{Ni}(s) + 4\\text{CO}(g) \\rightleftharpoons \\text{Ni(CO)}_4(g)$?',
    options: [
      '$K_p = \\dfrac{P_{\\text{Ni(CO)}_4}}{4P_{\\text{CO}}}$',
      '$K_p = \\dfrac{P_{\\text{Ni(CO)}_4}}{(P_{\\text{CO}})^4}$',
      '$K_p = \\dfrac{P_{\\text{Ni(CO)}_4}}{(P_{\\text{Ni}})(P_{\\text{CO}})^4}$',
      '$K_p = \\dfrac{(P_{\\text{CO}})^4}{P_{\\text{Ni(CO)}_4}}$',
    ],
    correctIndex: 1,
    explanation: 'Solid nickel has no partial pressure and is left out, and the coefficient 4 becomes an exponent on $P_{\\text{CO}}$, not a multiplier.',
    partNumber: 3,
    partTitle: 'Writing Kp Expressions',
  },
  {
    id: 'ece-ent-3b',
    question: 'An equilibrium mixture for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ has a total pressure of 3.0 atm, with mole fractions $\\chi_{\\text{SO}_2} = 0.20$, $\\chi_{\\text{O}_2} = 0.30$ and $\\chi_{\\text{SO}_3} = 0.50$. What is $K_p$?',
    options: ['6.9', '21', '2.8', '0.14'],
    correctIndex: 0,
    explanation: 'The partial pressures are 0.60, 0.90 and 1.50 atm, so $K_p = (1.50)^2/[(0.60)^2(0.90)] = 2.25/0.324 = 6.9$. Plugging in mole fractions instead of pressures gives 21, and dropping the squares gives 2.8.',
    partNumber: 3,
    partTitle: 'Writing Kp Expressions',
  },

  // Part 4: Magnitude of K
  {
    id: 'ece-ent-4a',
    question: 'For A(aq) ⇌ B(aq), $K_c = 250$ at 25 °C. If [A] = 0.0020 M at equilibrium, what is [B]?',
    options: ['$8.0 \\times 10^{-6}$ M', '0.0020 M', '1.25 M', '0.50 M'],
    correctIndex: 3,
    explanation: '$K_c = [\\text{B}]/[\\text{A}]$, so $[\\text{B}] = 250 \\times 0.0020 = 0.50$ M. Dividing by K instead gives $8.0 \\times 10^{-6}$ M, and equal concentrations would mean K = 1.',
    partNumber: 4,
    partTitle: 'Magnitude of K',
  },
  {
    id: 'ece-ent-4b',
    question: 'A reaction has $K = 4 \\times 10^{12}$ at room temperature, yet a sealed mixture of the reactants shows no detectable product after a week. What is the best explanation?',
    options: [
      'The value of K must have been measured incorrectly',
      'A large K means reactants are favored at equilibrium',
      'The reaction is slow, and K says nothing about its rate',
      'Products are favored only when the pressure is low',
    ],
    correctIndex: 2,
    explanation: 'K describes the equilibrium position, not how fast equilibrium is reached, so a reaction with a huge K can still be extremely slow. A large K means products are favored once equilibrium is reached.',
    partNumber: 4,
    partTitle: 'Magnitude of K',
  },

  // Part 5: Manipulating K
  {
    id: 'ece-ent-5a',
    question: 'Given $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$, $K_1 = 4.0 \\times 10^{-31}$, and $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$, $K_2 = 2.5 \\times 10^{12}$. What is K for $\\text{N}_2(g) + 2\\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$?',
    options: ['$1.0 \\times 10^{-18}$', '$6.3 \\times 10^{42}$', '$1.6 \\times 10^{-43}$', '$2.5 \\times 10^{12}$'],
    correctIndex: 0,
    explanation: 'The target equation is the sum of the two reactions, so $K = K_1 K_2 = (4.0 \\times 10^{-31})(2.5 \\times 10^{12}) = 1.0 \\times 10^{-18}$. Dividing the constants gives $6.3 \\times 10^{42}$ or $1.6 \\times 10^{-43}$, and adding them leaves essentially $K_2$.',
    partNumber: 5,
    partTitle: 'Manipulating K',
  },
  {
    id: 'ece-ent-5b',
    question: 'For $\\text{A} + 2\\text{B} \\rightleftharpoons \\text{C}$, $K = 16$. What is K for $\\tfrac{1}{2}\\text{C} \\rightleftharpoons \\tfrac{1}{2}\\text{A} + \\text{B}$?',
    options: ['4.0', '0.25', '0.063', '0.031'],
    correctIndex: 1,
    explanation: 'Reversing gives $1/16$, and halving every coefficient takes the square root: $(1/16)^{1/2} = 0.25$. Skipping the reversal gives 4.0, skipping the square root gives 0.063, and dividing by 2 instead gives 0.031.',
    partNumber: 5,
    partTitle: 'Manipulating K',
  },

  // Part 6: Reaction Quotient Q
  {
    id: 'ece-ent-6a',
    question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $K_c = 0.042$. A mixture has $[\\text{PCl}_5] = 0.50$ M, $[\\text{PCl}_3] = 0.10$ M and $[\\text{Cl}_2] = 0.30$ M. Which statement is correct?',
    options: [
      'Q = 0.060, so the reaction shifts right',
      'Q = 0.80, so the reaction shifts right',
      'Q = 0.060, so the reaction shifts left',
      'Q = 17, so the reaction shifts left',
    ],
    correctIndex: 2,
    explanation: '$Q = (0.10)(0.30)/0.50 = 0.060$, which is greater than K = 0.042, so the system shifts left to make more $\\text{PCl}_5$. Adding the product concentrations gives 0.80, and inverting the expression gives 17.',
    partNumber: 6,
    partTitle: 'Reaction Quotient Q',
  },
  {
    id: 'ece-ent-6b',
    question: 'For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $K_p = 0.236$ at a certain temperature. A sealed flask at that temperature contains both solids and $\\text{CO}_2$ at 0.10 atm. What happens?',
    options: [
      'Nothing, since the solids are omitted from Q',
      'CaO reacts with $\\text{CO}_2$, because Q is greater than K',
      'CaO and $\\text{CO}_2$ react until $P_{\\text{CO}_2}$ falls to 0 atm',
      'More $\\text{CaCO}_3$ decomposes until $P_{\\text{CO}_2}$ reaches 0.236 atm',
    ],
    correctIndex: 3,
    explanation: 'Here $Q = P_{\\text{CO}_2} = 0.10$, which is less than $K_p$, so the forward reaction runs until the $\\text{CO}_2$ pressure rises to 0.236 atm. Leaving solids out of Q does not stop the reaction.',
    partNumber: 6,
    partTitle: 'Reaction Quotient Q',
  },

  // Part 7: AP Review
  {
    id: 'ece-ent-7a',
    question: 'At equilibrium for $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$, $[\\text{SO}_3] = 0.40$ M, $[\\text{SO}_2] = 0.10$ M and $[\\text{O}_2] = 0.20$ M. What is $K_c$ for $\\text{SO}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$?',
    options: ['80', '8.9', '0.11', '40'],
    correctIndex: 1,
    explanation: 'For the given reaction, $K_c = (0.10)^2(0.20)/(0.40)^2 = 0.0125$. Reversing gives 80, and halving the coefficients takes the square root: $\\sqrt{80} = 8.9$.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'ece-ent-7b',
    question: 'For a gas-phase reaction, $K_c$ increases from 0.15 at 300 K to 2.4 at 400 K. What can be concluded?',
    options: [
      'The forward reaction is endothermic',
      'The reverse reaction must be endothermic',
      'K grows because the reaction is faster when hot',
      'The system reaches equilibrium only at 400 K',
    ],
    correctIndex: 0,
    explanation: 'Raising the temperature favors the endothermic direction, and here K grows, so the forward reaction must be endothermic. Reaction speed affects how fast equilibrium is reached, not the value of K.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is Equilibrium?' },
    { partNumber: 2, partTitle: 'Writing K Expressions' },
    { partNumber: 3, partTitle: 'Writing Kp Expressions' },
    { partNumber: 4, partTitle: 'Magnitude of K' },
    { partNumber: 5, partTitle: 'Manipulating K' },
    { partNumber: 6, partTitle: 'Reaction Quotient Q' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
