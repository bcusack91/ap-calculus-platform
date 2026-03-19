/**
 * Entrance Quiz — Integration Applications (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Net Change Theorem
  { id: 'ia-ent-1a', question: 'The Net Change Theorem states $\\int_a^b f\'(x)\\,dx =$', options: ['$f\'(b) - f\'(a)$', '$f(b) - f(a)$', '$f(a) + f(b)$', '$\\frac{f(b)-f(a)}{b-a}$'], correctIndex: 1, explanation: 'The integral of a rate of change gives the net change in the original quantity.', partNumber: 1, partTitle: 'Net Change Theorem' },
  { id: 'ia-ent-1b', question: 'If water flows into a tank at rate $R(t)$ liters/min, total water added from $t=0$ to $t=10$ is:', options: ['$R(10) - R(0)$', '$\\int_0^{10} R(t)\\,dt$', '$R(10)$', '$10R(5)$'], correctIndex: 1, explanation: 'Integrate the rate to find total accumulated quantity.', partNumber: 1, partTitle: 'Net Change Theorem' },

  // Part 2: Average Value of a Function
  { id: 'ia-ent-2a', question: 'The average value of $f$ on $[a,b]$ is:', options: ['$\\frac{f(a)+f(b)}{2}$', '$\\frac{1}{b-a}\\int_a^b f(x)\\,dx$', '$\\int_a^b f(x)\\,dx$', '$\\frac{f\'(a)+f\'(b)}{2}$'], correctIndex: 1, explanation: 'Average value = $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$.', partNumber: 2, partTitle: 'Average Value of a Function' },
  { id: 'ia-ent-2b', question: 'The Mean Value Theorem for Integrals guarantees a $c$ in $[a,b]$ where:', options: ['$f\'(c) = 0$', '$f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$', '$f(c) = f\'(c)$', '$\\int f(c) = 0$'], correctIndex: 1, explanation: 'There exists $c$ where $f(c)$ equals the average value.', partNumber: 2, partTitle: 'Average Value of a Function' },

  // Part 3: Connecting Position Velocity & Acceleration via Integrals
  { id: 'ia-ent-3a', question: 'If $v(t) = s\'(t)$, then $\\int_a^b v(t)\\,dt =$', options: ['$v(b) - v(a)$', '$s(b) - s(a)$', '$a(b) - a(a)$', '$s\'(b) - s\'(a)$'], correctIndex: 1, explanation: 'The integral of velocity gives displacement: $s(b) - s(a)$.', partNumber: 3, partTitle: 'Connecting Position Velocity & Acceleration via Integrals' },
  { id: 'ia-ent-3b', question: 'If $a(t) = v\'(t)$ and $v(0) = 5$, then $v(t) =$', options: ['$5 + \\int_0^t a(s)\\,ds$', '$a(t) + 5$', '$\\int a(t)\\,dt$', '$5a(t)$'], correctIndex: 0, explanation: '$v(t) = v(0) + \\int_0^t a(s)\\,ds = 5 + \\int_0^t a(s)\\,ds$.', partNumber: 3, partTitle: 'Connecting Position Velocity & Acceleration via Integrals' },

  // Part 4: Work & Physical Applications
  { id: 'ia-ent-4a', question: 'Work done by a variable force $F(x)$ over $[a,b]$ is:', options: ['$F(b) - F(a)$', '$\\int_a^b F(x)\\,dx$', '$F \\cdot d$', '$\\frac{F(a)+F(b)}{2} \\cdot (b-a)$'], correctIndex: 1, explanation: 'Work = $\\int_a^b F(x)\\,dx$ for variable force.', partNumber: 4, partTitle: 'Work & Physical Applications' },
  { id: 'ia-ent-4b', question: 'The work to stretch a spring from natural length by $x$ is $W = \\int_0^x kx\\,dx$. This equals:', options: ['$kx$', '$\\frac{1}{2}kx^2$', '$k$', '$kx^2$'], correctIndex: 1, explanation: 'Hooke\'s law: $W = \\frac{1}{2}kx^2$.', partNumber: 4, partTitle: 'Work & Physical Applications' },

  // Part 5: Density & Mass Applications
  { id: 'ia-ent-5a', question: 'If density varies along a rod as $\\rho(x)$ kg/m, total mass is:', options: ['$\\rho(b) - \\rho(a)$', '$\\int_a^b \\rho(x)\\,dx$', '$\\rho(a) \\cdot (b-a)$', '$\\frac{\\rho(a)+\\rho(b)}{2}$'], correctIndex: 1, explanation: 'Mass = $\\int$ density $dx$ for variable density.', partNumber: 5, partTitle: 'Density & Mass Applications' },
  { id: 'ia-ent-5b', question: 'Population growth rate is 100 people/year. Total population change over 5 years is:', options: ['$500$', '$100$', '$20$', '$105$'], correctIndex: 0, explanation: '$\\int_0^5 100\\,dt = 500$ people.', partNumber: 5, partTitle: 'Density & Mass Applications' },

  // Part 6: Problem-Solving Workshop
  { id: 'ia-ent-6a', question: 'If $R(t) = 50 - 2t$ gallons/min is the rate water drains, total drained in 10 min:', options: ['$300$', '$400$', '$500$', '$200$'], correctIndex: 1, explanation: '$\\int_0^{10}(50-2t)\\,dt = [50t - t^2]_0^{10} = 500 - 100 = 400$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ia-ent-6b', question: 'Average temperature if $T(t) = 70 + 10\\sin(\\frac{\\pi t}{12})$ on $[0,12]$ is approximately:', options: ['$70 + \\frac{20}{\\pi}$', '$70$', '$80$', '$70 + \\frac{10}{\\pi}$'], correctIndex: 0, explanation: 'Average = $\\frac{1}{12}\\int_0^{12}[70+10\\sin(\\frac{\\pi t}{12})]\\,dt = 70 + \\frac{10}{12} \\cdot \\frac{24}{\\pi} = 70 + \\frac{20}{\\pi}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'ia-ent-7a', question: 'The total change interpretation of $\\int_a^b f\'(x)\\,dx = f(b) - f(a)$ is the basis of:', options: ['The power rule', 'The Net Change Theorem', 'L\'Hôpital\'s Rule', 'The chain rule'], correctIndex: 1, explanation: 'The Net Change Theorem = FTC Part 2 applied to rates of change.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'ia-ent-7b', question: 'When an AP FRQ asks for total amount, you use:', options: ['Differentiation', 'Integration of the rate function', 'The average value', 'The derivative'], correctIndex: 1, explanation: 'Total = integral of rate. This is a very common AP exam pattern.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Net Change Theorem' },
    { partNumber: 2, partTitle: 'Average Value of a Function' },
    { partNumber: 3, partTitle: 'Connecting Position Velocity & Acceleration via Integrals' },
    { partNumber: 4, partTitle: 'Work & Physical Applications' },
    { partNumber: 5, partTitle: 'Density & Mass Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
