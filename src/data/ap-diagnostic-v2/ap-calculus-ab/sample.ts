/**
 * AP Calculus AB diagnostic v2: sample items (8, including one table-based
 * stimulus set) that exercise the engine end to end. No calculator. Authors
 * add unit files beside this one and register them in ./index.ts.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'calcab-s001',
    title: 'Rate of water flowing into a tank',
    kind: 'table',
    content:
      'Water flows into a tank at a rate of $R(t)$ gallons per minute, where $R$ is a differentiable function of time $t$ in minutes. Selected values of $R(t)$ are shown in the table.\n\n' +
      '| $t$ (minutes) | 0 | 2 | 4 | 6 | 8 |\n' +
      '| --- | --- | --- | --- | --- | --- |\n' +
      '| $R(t)$ (gallons per minute) | 10 | 14 | 15 | 12 | 7 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'calcab-s001-q1',
    stimulusId: 'calcab-s001',
    unit: 'unit-6',
    topicSlug: 'definite-integrals-calcab',
    difficulty: 'easy',
    stem: 'Which of the following is the best interpretation of $\\int_0^8 R(t)\\,dt$?',
    options: [
      'The total number of gallons that flow into the tank from $t = 0$ to $t = 8$',
      'The average rate, in gallons per minute, at which water flows in from $t = 0$ to $t = 8$',
      'The rate, in gallons per minute, at which water flows into the tank at time $t = 8$',
      'The change in the flow rate, in gallons per minute, between $t = 0$ and $t = 8$',
    ],
    correctIndex: 0,
    explanation:
      'Integrating a rate over an interval gives the net amount accumulated over that interval: here, the gallons that flow in during the first 8 minutes. The average rate would be this integral divided by 8. The change in the rate would be $R(8) - R(0)$.',
  },
  {
    id: 'calcab-s001-q2',
    stimulusId: 'calcab-s001',
    unit: 'unit-6',
    topicSlug: 'definite-integrals-calcab',
    difficulty: 'medium',
    stem: 'Using a left Riemann sum with the four subintervals indicated by the table, what is the approximation of $\\int_0^8 R(t)\\,dt$?',
    options: ['102 gallons', '96 gallons', '99 gallons', '51 gallons'],
    correctIndex: 0,
    explanation:
      'Each subinterval is 2 minutes wide. The left sum uses $R(0), R(2), R(4), R(6)$: $2(10 + 14 + 15 + 12) = 102$. 96 is the right sum, 99 is the trapezoidal sum, and 51 leaves out the width of 2.',
  },
  {
    id: 'calcab-s001-q3',
    stimulusId: 'calcab-s001',
    unit: 'unit-6',
    topicSlug: 'accumulation-functions-calcab',
    difficulty: 'hard',
    stem: 'Let $A(x) = \\int_0^x R(t)\\,dt$. Of the times in the table, at which is $A$ increasing most rapidly?',
    options: ['$x = 4$', '$x = 2$', '$x = 6$', '$x = 8$'],
    correctIndex: 0,
    explanation:
      'By the Fundamental Theorem of Calculus, $A\'(x) = R(x)$. $A$ increases most rapidly where $R$ is largest, and of the tabulated values $R(4) = 15$ is the greatest. $A$ is still increasing at $x = 8$, because $R(8) = 7 > 0$, but more slowly.',
  },
  {
    id: 'calcab-u1-001',
    unit: 'unit-1',
    topicSlug: 'factoring-method-limits',
    difficulty: 'easy',
    stem: 'What is $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$?',
    options: ['$6$', '$0$', '$3$', '$9$'],
    correctIndex: 0,
    explanation:
      'Direct substitution gives $0/0$, so factor first: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\ne 3$. The limit is $3 + 3 = 6$.',
  },
  {
    id: 'calcab-u2-001',
    unit: 'unit-2',
    topicSlug: 'basic-differentiation-rules-calcab',
    difficulty: 'easy',
    stem: 'If $f(x) = x^3 + 5x$, what is $f\'(x)$?',
    options: ['$3x^2 + 5$', '$3x^2 + 5x$', '$x^2 + 5$', '$3x + 5$'],
    correctIndex: 0,
    explanation:
      'By the power rule, $\\frac{d}{dx}x^3 = 3x^2$ and $\\frac{d}{dx}5x = 5$, so $f\'(x) = 3x^2 + 5$.',
  },
  {
    id: 'calcab-u3-001',
    unit: 'unit-3',
    topicSlug: 'chain-rule-calcab',
    difficulty: 'medium',
    stem: 'What is $\\dfrac{d}{dx}\\left[\\sin\\left(x^2\\right)\\right]$?',
    options: ['$2x\\cos\\left(x^2\\right)$', '$\\cos\\left(x^2\\right)$', '$2x\\sin\\left(x^2\\right)$', '$\\cos(2x)$'],
    correctIndex: 0,
    explanation:
      'By the chain rule, the derivative of the outer function at the inner one is $\\cos(x^2)$, and it is multiplied by the derivative of the inner function, $2x$: $2x\\cos(x^2)$. Leaving out the factor $2x$ is the most common error.',
  },
  {
    id: 'calcab-u5-001',
    unit: 'unit-5',
    topicSlug: 'applications-of-derivatives-calcab',
    difficulty: 'hard',
    stem: 'The derivative of a function $f$ is $f\'(x) = (x - 2)(x + 1)^2$. At which values of $x$ does $f$ have a relative extremum?',
    options: [
      'A relative minimum at $x = 2$ only',
      'A relative maximum at $x = -1$ only',
      'Relative minima at $x = -1$ and $x = 2$',
      'A relative maximum at $x = 2$ only',
    ],
    correctIndex: 0,
    explanation:
      '$(x+1)^2 \\ge 0$, so the sign of $f\'$ is the sign of $x - 2$. $f\'$ is negative on both sides of $x = -1$, so there is no extremum there. At $x = 2$, $f\'$ changes from negative to positive, so $f$ has a relative minimum at $x = 2$.',
  },
  {
    id: 'calcab-u7-001',
    unit: 'unit-7',
    topicSlug: 'exponential-models-calcab',
    difficulty: 'medium',
    stem: 'Which function is the solution to the differential equation $\\dfrac{dy}{dx} = 3y$ with initial condition $y(0) = 2$?',
    options: ['$y = 2e^{3x}$', '$y = 3e^{2x}$', '$y = e^{3x} + 1$', '$y = 2e^{x/3}$'],
    correctIndex: 0,
    explanation:
      'Separating variables gives $\\ln|y| = 3x + C$, so $y = Ce^{3x}$, and $y(0) = 2$ gives $C = 2$. $y = e^{3x} + 1$ satisfies the initial condition, but its derivative is $3e^{3x}$, which does not equal $3y$.',
  },
]
