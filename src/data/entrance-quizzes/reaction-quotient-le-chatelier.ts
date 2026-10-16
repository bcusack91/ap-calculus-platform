/**
 * Entrance Quiz — Reaction Quotient & Le Chatelier's Principle — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-reaction-quotient-le-chatelier-part1..7):
 *   1 The Reaction Quotient Q                          — computing Q (solids excluded), Q at special times
 *   2 Comparing Q and K                                — direction of shift and how Q moves toward K
 *   3 Le Chatelier's Principle — Concentration Changes — adding/removing species, partial offset
 *   4 Le Chatelier — Pressure/Volume and Temperature   — moles of gas, heat as a species, K vs T
 *   5 Catalysts and Inert Gas Addition                 — inert gas at constant P, catalysts and the approach
 *   6 Problem-Solving Workshop                         — choosing conditions, Q then shift
 *   7 Synthesis & AP Review                            — Δn = 0 compression, what changes P in a heterogeneous system
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Reaction Quotient Q
  {
    id: 'rqlc-ent-1a',
    question: 'For $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$, a flask currently has $P_{\\text{H}_2\\text{O}} = 0.40$ atm, $P_{\\text{CO}} = 0.20$ atm and $P_{\\text{H}_2} = 0.60$ atm, with some carbon present. What is $Q_p$?',
    options: ['0.30', '3.3', '2.0', '0.048'],
    correctIndex: 0,
    explanation: 'Solid carbon is left out, so $Q_p = (0.20)(0.60)/0.40 = 0.30$. Inverting gives 3.3, and adding the product pressures gives 2.0.',
    partNumber: 1,
    partTitle: 'The Reaction Quotient Q',
  },
  {
    id: 'rqlc-ent-1b',
    question: 'For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, a flask is filled with pure $\\text{NO}_2$ and no $\\text{N}_2\\text{O}_4$. What is true of Q at that moment?',
    options: [
      'Q = 0, so the reaction will shift right',
      'Q is infinitely large, so the reaction shifts left',
      'Q = K, so no net reaction takes place',
      'Q = 1, so the shift depends on the size of K',
    ],
    correctIndex: 1,
    explanation: 'With no $\\text{N}_2\\text{O}_4$, the denominator of Q is zero, so Q is effectively infinite and exceeds any K. The system must shift left, forming some $\\text{N}_2\\text{O}_4$.',
    partNumber: 1,
    partTitle: 'The Reaction Quotient Q',
  },

  // Part 2: Comparing Q and K
  {
    id: 'rqlc-ent-2a',
    question: 'For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, $K_c = 85$. A mixture has $[\\text{SO}_2] = 0.40$ M, $[\\text{O}_2] = 0.20$ M and $[\\text{SO}_3] = 0.80$ M. Which statement is correct?',
    options: [
      'Q = 20, and $[\\text{SO}_3]$ will decrease',
      'Q = 0.050, and $[\\text{SO}_3]$ will decrease',
      'Q = 20, and $[\\text{SO}_3]$ will increase',
      'Q = 10, and $[\\text{SO}_3]$ will increase',
    ],
    correctIndex: 2,
    explanation: '$Q = (0.80)^2/[(0.40)^2(0.20)] = 0.64/0.032 = 20$, which is less than 85, so the reaction shifts right and $[\\text{SO}_3]$ rises. Ignoring the exponents gives 10, and inverting gives 0.050.',
    partNumber: 2,
    partTitle: 'Comparing Q and K',
  },
  {
    id: 'rqlc-ent-2b',
    question: 'A mixture has $Q = 3.0 \\times 10^{-4}$, while $K = 1.5 \\times 10^{-5}$. What happens as the mixture approaches equilibrium?',
    options: [
      'Q rises as more products form',
      'K rises until it reaches the value of Q',
      'Nothing, since both values are very small',
      'Q falls as products convert back to reactants',
    ],
    correctIndex: 3,
    explanation: 'Q is larger than K, so the reverse reaction runs, product terms shrink, and Q decreases until it equals K. K stays fixed at constant temperature, and two small numbers are not automatically equal.',
    partNumber: 2,
    partTitle: 'Comparing Q and K',
  },

  // Part 3: Le Chatelier's Principle — Concentration Changes
  {
    id: 'rqlc-ent-3a',
    question: 'The equilibrium $\\text{Fe}^{3+}(aq) + \\text{SCN}^-(aq) \\rightleftharpoons \\text{FeSCN}^{2+}(aq)$ is red because of $\\text{FeSCN}^{2+}$. A few drops of concentrated $\\text{Fe(NO}_3)_3$ solution are added. What is observed as the system re-equilibrates?',
    options: [
      'The red deepens and $[\\text{SCN}^-]$ decreases',
      'The red fades and $[\\text{SCN}^-]$ increases',
      'The red deepens and $[\\text{SCN}^-]$ increases',
      'No change, since K stays the same',
    ],
    correctIndex: 0,
    explanation: 'Adding $\\text{Fe}^{3+}$ lowers Q below K, so the system shifts right: more red $\\text{FeSCN}^{2+}$ forms and some $\\text{SCN}^-$ is consumed. K is unchanged, but the position shifts.',
    partNumber: 3,
    partTitle: "Le Chatelier's Principle — Concentration Changes",
  },
  {
    id: 'rqlc-ent-3b',
    question: 'For A(aq) ⇌ B(aq), K = 2.0, and an equilibrium solution has [A] = 0.40 M and [B] = 0.80 M. Extra B is added, raising [B] to 1.40 M at that instant. What are the concentrations once equilibrium is restored?',
    options: [
      '[A] = 0.40 M, [B] = 1.40 M',
      '[A] = 0.60 M, [B] = 1.20 M',
      '[A] = 0.40 M, [B] = 0.80 M',
      '[A] = 0.70 M, [B] = 1.40 M',
    ],
    correctIndex: 1,
    explanation: 'Q = 1.40/0.40 = 3.5 exceeds K, so x M of B converts to A: (1.40 − x)/(0.40 + x) = 2.0 gives x = 0.20. The shift only partly offsets the added B, so [B] ends above 0.80 M but below 1.40 M.',
    partNumber: 3,
    partTitle: "Le Chatelier's Principle — Concentration Changes",
  },

  // Part 4: Le Chatelier — Pressure/Volume and Temperature
  {
    id: 'rqlc-ent-4a',
    question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $\\Delta H = +88$ kJ/mol. Which change shifts the equilibrium to the right?',
    options: [
      'Lowering the temperature of the mixture',
      'Adding more $\\text{Cl}_2$ gas to the flask',
      'Increasing the volume of the container',
      'Compressing the mixture into a smaller flask',
    ],
    correctIndex: 2,
    explanation: 'A larger volume favors the side with more moles of gas, which is the right side (2 versus 1). Cooling favors the exothermic reverse direction, adding $\\text{Cl}_2$ pushes the system left, and compression favors fewer moles of gas.',
    partNumber: 4,
    partTitle: 'Le Chatelier — Pressure/Volume and Temperature',
  },
  {
    id: 'rqlc-ent-4b',
    question: 'In a sealed tube, $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$; $\\text{NO}_2$ is brown and $\\text{N}_2\\text{O}_4$ is colorless. Warming the tube makes the brown color darker. What can be concluded?',
    options: [
      'Forward reaction is endothermic; K rises as T rises',
      'Forward reaction is exothermic; K is unchanged by heating',
      'Heating only raises the pressure, so K is unchanged',
      'Forward reaction is exothermic; K falls as T rises',
    ],
    correctIndex: 3,
    explanation: 'Darker brown means heating shifted the system left, so heat must be a product of the forward reaction: it is exothermic. Temperature is the one stress that changes K, and here K decreases.',
    partNumber: 4,
    partTitle: 'Le Chatelier — Pressure/Volume and Temperature',
  },

  // Part 5: Catalysts and Inert Gas Addition
  {
    id: 'rqlc-ent-5a',
    question: 'Argon is added to an equilibrium mixture of $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$ in a piston that keeps the total pressure constant. What happens?',
    options: [
      'Shifts right, toward more gas moles',
      'No shift, since argon does not react',
      'Shifts left, toward fewer moles of gas',
      'No shift, but the value of K increases',
    ],
    correctIndex: 0,
    explanation: 'At constant pressure the piston must move out, so the volume grows and every reacting partial pressure falls; this acts like a volume increase and favors the side with more moles of gas. In a rigid container the same argon would cause no shift.',
    partNumber: 5,
    partTitle: 'Catalysts and Inert Gas Addition',
  },
  {
    id: 'rqlc-ent-5b',
    question: 'A catalyst is added to a reaction mixture in which Q is less than K. Compared with an identical mixture without the catalyst, what does the catalyzed mixture do?',
    options: [
      'It forms more product at equilibrium',
      'It reaches the same equilibrium composition sooner',
      'It stays at its present value of Q indefinitely',
      'It raises K so that more product is favored',
    ],
    correctIndex: 1,
    explanation: 'A catalyst lowers the barrier for both directions, so equilibrium is reached faster, but K and the final composition are unchanged.',
    partNumber: 5,
    partTitle: 'Catalysts and Inert Gas Addition',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'rqlc-ent-6a',
    question: 'For $\\text{CO}(g) + 3\\text{H}_2(g) \\rightleftharpoons \\text{CH}_4(g) + \\text{H}_2\\text{O}(g)$, $\\Delta H = -206$ kJ/mol. Which set of changes maximizes the equilibrium yield of $\\text{CH}_4$?',
    options: [
      'Higher T, smaller volume, remove $\\text{H}_2\\text{O}$',
      'Lower T, larger volume, add $\\text{H}_2\\text{O}$',
      'Lower T, smaller volume, remove $\\text{H}_2\\text{O}$',
      'Higher T, larger volume, add a catalyst',
    ],
    correctIndex: 2,
    explanation: 'The forward reaction is exothermic (cooling favors it), has fewer moles of gas on the right (4 to 2, so compression favors it), and removing a product pulls it forward. A catalyst does not change the yield.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rqlc-ent-6b',
    question: 'For $\\text{A}(g) \\rightleftharpoons 2\\text{B}(g)$, $K_c = 0.50$. A mixture has [A] = 0.20 M and [B] = 0.40 M. Which statement is correct?',
    options: [
      'Q = 2.0, so the reaction shifts left',
      'Q = 0.80, so the reaction shifts right',
      'Q = 1.25, so the reaction shifts right',
      'Q = 0.80, so the reaction shifts left',
    ],
    correctIndex: 3,
    explanation: '$Q = [\\text{B}]^2/[\\text{A}] = (0.40)^2/0.20 = 0.80$, which exceeds K = 0.50, so the system shifts left. Forgetting the square gives 2.0, and inverting gives 1.25.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rqlc-ent-7a',
    question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at equilibrium, the container volume is suddenly halved at constant temperature. How does [HI] at the new equilibrium compare with [HI] before the change?',
    options: [
      'It doubles, then drops as the system shifts left',
      'It doubles and stays doubled, with no shift',
      'It doubles, then grows as the system shifts right',
      'It stays unchanged, because there is no shift',
    ],
    correctIndex: 1,
    explanation: 'Halving the volume doubles every concentration. With 2 moles of gas on each side, Q is still equal to K, so there is no shift and [HI] stays at double its old value. No shift does not mean no change in concentration.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rqlc-ent-7b',
    question: 'For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $\\Delta H > 0$, at equilibrium with both solids present. Which change increases the equilibrium partial pressure of $\\text{CO}_2$?',
    options: [
      'Raising the temperature',
      'Doubling the flask volume',
      'Adding more solid $\\text{CaCO}_3$',
      'Removing some of the solid CaO',
    ],
    correctIndex: 0,
    explanation: 'Here $K_p = P_{\\text{CO}_2}$, so only a change in K can change the equilibrium pressure, and heating an endothermic reaction raises K. A larger volume lets more $\\text{CaCO}_3$ decompose, but the pressure returns to the same value, and the amounts of solid do not matter.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Reaction Quotient Q' },
    { partNumber: 2, partTitle: 'Comparing Q and K' },
    { partNumber: 3, partTitle: "Le Chatelier's Principle — Concentration Changes" },
    { partNumber: 4, partTitle: 'Le Chatelier — Pressure/Volume and Temperature' },
    { partNumber: 5, partTitle: 'Catalysts and Inert Gas Addition' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
