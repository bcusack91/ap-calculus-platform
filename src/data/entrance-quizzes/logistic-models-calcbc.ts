/**
 * Entrance Quiz — Logistic Models (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Logistic Growth Model
  { id: 'lm-ent-1a', question: 'The logistic differential equation is:', options: ['$\\frac{dP}{dt} = kP$', '$\\frac{dP}{dt} = kP(1 - \\frac{P}{L})$', '$\\frac{dP}{dt} = kP^2$', '$\\frac{dP}{dt} = k(L - P)$'], correctIndex: 1, explanation: 'Logistic growth: $\\frac{dP}{dt} = kP(1 - P/L)$, where $L$ is carrying capacity.', partNumber: 1, partTitle: 'The Logistic Growth Model' },
  { id: 'lm-ent-1b', question: 'Logistic growth differs from exponential growth because:', options: ['It grows forever', 'Growth slows as population approaches a limit', 'It always decreases', 'It oscillates'], correctIndex: 1, explanation: 'The term $(1 - P/L)$ causes growth to slow as $P \\to L$.', partNumber: 1, partTitle: 'The Logistic Growth Model' },

  // Part 2: Solving the Logistic Equation
  { id: 'lm-ent-2a', question: 'The solution to the logistic equation is:', options: ['$P = Le^{kt}$', '$P = \\frac{L}{1 + Ae^{-kt}}$', '$P = L - Ae^{kt}$', '$P = \\frac{1}{1+t}$'], correctIndex: 1, explanation: '$P(t) = \\frac{L}{1 + Ae^{-kt}}$ where $A = \\frac{L - P_0}{P_0}$.', partNumber: 2, partTitle: 'Solving the Logistic Equation' },
  { id: 'lm-ent-2b', question: 'As $t \\to \\infty$, $P(t) \\to$', options: ['$0$', '$\\infty$', '$L$', '$k$'], correctIndex: 2, explanation: 'The population approaches the carrying capacity $L$.', partNumber: 2, partTitle: 'Solving the Logistic Equation' },

  // Part 3: Carrying Capacity
  { id: 'lm-ent-3a', question: 'The carrying capacity $L$ represents:', options: ['The initial population', 'The maximum sustainable population', 'The growth rate', 'The minimum population'], correctIndex: 1, explanation: '$L$ is the maximum population the environment can sustain.', partNumber: 3, partTitle: 'Carrying Capacity' },
  { id: 'lm-ent-3b', question: 'In $\\frac{dP}{dt} = 0.1P(1 - P/500)$, the carrying capacity is:', options: ['$0.1$', '$500$', '$50$', '$5000$'], correctIndex: 1, explanation: '$L = 500$.', partNumber: 3, partTitle: 'Carrying Capacity' },

  // Part 4: Inflection Point & Maximum Growth Rate
  { id: 'lm-ent-4a', question: 'The logistic curve has an inflection point at $P =$', options: ['$L$', '$L/2$', '$0$', '$2L$'], correctIndex: 1, explanation: 'Maximum growth rate occurs at $P = L/2$.', partNumber: 4, partTitle: 'Inflection Point & Maximum Growth Rate' },
  { id: 'lm-ent-4b', question: 'At the inflection point, $\\frac{dP}{dt}$ is:', options: ['Zero', 'At its maximum', 'At its minimum', 'Undefined'], correctIndex: 1, explanation: 'Growth rate is maximum when $P = L/2$.', partNumber: 4, partTitle: 'Inflection Point & Maximum Growth Rate' },

  // Part 5: Phase Lines & Slope Fields
  { id: 'lm-ent-5a', question: 'On the slope field for $\\frac{dP}{dt} = kP(1-P/L)$, slopes are zero at:', options: ['$P = 0$ only', '$P = L$ only', '$P = 0$ and $P = L$', 'Everywhere'], correctIndex: 2, explanation: '$\\frac{dP}{dt} = 0$ when $P = 0$ or $P = L$.', partNumber: 5, partTitle: 'Phase Lines & Slope Fields' },
  { id: 'lm-ent-5b', question: 'For $0 < P < L$, the slopes on the slope field are:', options: ['Negative', 'Positive', 'Zero', 'Undefined'], correctIndex: 1, explanation: 'Both $P$ and $(1-P/L)$ are positive → $dP/dt > 0$.', partNumber: 5, partTitle: 'Phase Lines & Slope Fields' },

  // Part 6: Problem-Solving Workshop
  { id: 'lm-ent-6a', question: 'If $P_0 = 100$ and $L = 1000$, then $A =$', options: ['$10$', '$9$', '$100$', '$0.1$'], correctIndex: 1, explanation: '$A = \\frac{L - P_0}{P_0} = \\frac{900}{100} = 9$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'lm-ent-6b', question: 'With $k = 0.5$, $L = 200$, $P_0 = 20$: $P(t) = \\frac{200}{1 + 9e^{-0.5t}}$. At $t = 0$: $P =$', options: ['$20$', '$200$', '$100$', '$0$'], correctIndex: 0, explanation: '$P(0) = \\frac{200}{1+9} = \\frac{200}{10} = 20$. ✓', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'lm-ent-7a', question: 'On the AP BC exam, logistic growth problems ask you to:', options: ['Only sketch the curve', 'Solve the DE and/or interpret the carrying capacity and inflection point', 'Only find $k$', 'Only state the formula'], correctIndex: 1, explanation: 'Common: solve logistic DE with initial condition, find when growth is fastest, identify $L$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'lm-ent-7b', question: 'If $P > L$, then $\\frac{dP}{dt}$ is:', options: ['Positive', 'Negative', 'Zero', 'Undefined'], correctIndex: 1, explanation: '$(1 - P/L) < 0$ when $P > L$, so population decreases toward $L$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Logistic Growth Model' },
    { partNumber: 2, partTitle: 'Solving the Logistic Equation' },
    { partNumber: 3, partTitle: 'Carrying Capacity' },
    { partNumber: 4, partTitle: 'Inflection Point & Maximum Growth Rate' },
    { partNumber: 5, partTitle: 'Phase Lines & Slope Fields' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
