// AP Precalculus Free-Response Questions
// Built to the May 2027 exam: four FRQs, 6 points each, 70 minutes in two timed parts.
//   Part A (graphing calculator required, 35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context
//   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations
// Four questions per type (four complete exams; the 8 "-3"/"-4" items were added in Oct 2026, Wave 3 G3,
// blind-solved 8/8 and trigram-checked against the three practice forms). Q2 follows the 2026–27 structure:
// Part C asks for an equation at a stated threshold and a domain restriction justified from it.
// Units follow the CED's exam units: 1 Polynomial and Rational Functions, 2 Exponential and
// Logarithmic Functions, 3 Trigonometric and Polar Functions. Unit 4 (parameters, vectors, and
// matrices) is not assessed on the AP exam and is not used here.
// Every rubric line is worth one point.

import { shuffleArray } from '@/lib/shuffle-options'

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type PrecalcFRQType = 'function-concepts' | 'non-periodic-modeling' | 'periodic-modeling' | 'symbolic-manipulations'

/** Exam order, labels, points, suggested minutes, and calculator part for the four real FRQ types. */
export const PRECALC_FRQ_TYPES: {
  type: PrecalcFRQType
  label: string
  short: string
  points: number
  minutes: number
  part: 'A' | 'B'
  calculator: boolean
}[] = [
  { type: 'function-concepts', label: 'Function Concepts', short: 'Q1', points: 6, minutes: 17.5, part: 'A', calculator: true },
  { type: 'non-periodic-modeling', label: 'Modeling a Non-Periodic Context', short: 'Q2', points: 6, minutes: 17.5, part: 'A', calculator: true },
  { type: 'periodic-modeling', label: 'Modeling a Periodic Context', short: 'Q3', points: 6, minutes: 17.5, part: 'B', calculator: false },
  { type: 'symbolic-manipulations', label: 'Symbolic Manipulations', short: 'Q4', points: 6, minutes: 17.5, part: 'B', calculator: false },
]

/** Minutes for each timed part of Section II. */
export const PRECALC_FRQ_PART_MINUTES = { A: 35, B: 35 } as const

export interface PrecalcFRQ {
  id: string
  type: PrecalcFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
  /** Canonical lesson slugs (PRECALC_CATEGORIES in src/lib/course-includes.ts) that teach what the item assesses. */
  lesson?: string[]
  /** CED topic codes the item assesses (AP Precalculus CED, units 1–3). */
  ced?: string[]
}

const precalcFRQs: PrecalcFRQ[] = [
  // =========================================================================
  // Q1 Function Concepts — 1: quadratic table and a cubic
  // =========================================================================
  {
    id: 'precalc-frq-q1-1',
    lesson: ['function-composition-inverses-precalc', 'polynomial-functions-precalc', 'rates-of-change-precalc'],
    ced: ['2.7', '2.8', '1.5', '1.6', '1.3'],
    type: 'function-concepts',
    unit: 1,
    title: 'Function Concepts: A Table of Values and a Cubic',
    prompt:
      'Let $f$ be an increasing function defined for $x \\geq 0$. The table gives values of $f(x)$ at selected values of $x$.\n\nThe function $g$ is given by $g(x) = x^3 - 4x^2 + x + 2$.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>f(x)</th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) The function $h$ is defined by $h(x) = (g \\circ f)(x) = g(f(x))$. Find the value of $h(1)$, or indicate that it is not defined. Show the work that leads to your answer. (ii) Find the value of $f^{-1}(16)$, or indicate that it is not defined.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $h(1) = g(f(1)) = g(4) = 64 - 64 + 4 + 2 = 6$.',
            // Not a bare '= 6': it matched the "= 64" in the student's own arithmetic.
            keywords: ['h(1) = 6', 'h(1)=6', 'g(4) = 6', 'g(4)=6', '+ 2 = 6', '+2 = 6', '+2=6', 'h(1) is 6', 'g(4) is 6', 'equals 6'],
          },
          {
            points: 1,
            description: '(ii) $f$ is increasing, so $f^{-1}$ exists, and $f(3) = 16$ in the table, so $f^{-1}(16) = 3$.',
            keywords: ['= 3', '=3', 'is 3'],
          },
        ],
        sampleAnswer:
          '(i) $h(1) = g(f(1)) = g(4) = 4^3 - 4(4)^2 + 4 + 2 = 64 - 64 + 4 + 2 = 6$.\n\n(ii) Because $f$ is increasing, it is one-to-one and $f^{-1}$ exists. The table gives $f(3) = 16$, so $f^{-1}(16) = 3$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Find all real zeros of $g$. Express your answers as decimal approximations where needed. (ii) Determine the end behavior of $g$ as $x$ decreases without bound. Express your answer using the mathematical notation of a limit.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) The zeros of $g$ are $x \\approx -0.562$, $x = 1$, and $x \\approx 3.562$ (exactly $1$ and $\\frac{3 \\pm \\sqrt{17}}{2}$).',
            keywords: ['-0.562', '−0.562', '3.562', '-0.561', '3.561'],
          },
          {
            points: 1,
            description:
              '(ii) $g$ is a cubic with a positive leading coefficient, so $\\lim_{x \\to -\\infty} g(x) = -\\infty$.',
            keywords: ['-infinity', '−infinity', '-∞', '−∞', 'negative infinity', '-inf', '= -\\infty'],
          },
        ],
        sampleAnswer:
          '(i) Graphing $g$ on a calculator gives zeros at $x \\approx -0.562$, $x = 1$, and $x \\approx 3.562$. (Check: $g(1) = 1 - 4 + 1 + 2 = 0$, and dividing by $x - 1$ leaves $x^2 - 3x - 2$, whose zeros are $\\frac{3 \\pm \\sqrt{17}}{2}$.)\n\n(ii) The leading term is $x^3$, which has an odd degree and a positive coefficient, so $\\lim_{x \\to -\\infty} g(x) = -\\infty$.',
      },
      {
        label: 'C',
        prompt:
          '(i) Based on the table, determine which of the following function types best models $f$: linear, quadratic, exponential, or logarithmic. (ii) Give a reason for your answer in part (i) based on the relationship between the change in the output values of $f$ and the change in the input values of $f$. Refer to the values in the table in your reasoning.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $f$ is best modeled by a quadratic function.',
            keywords: ['quadratic'],
          },
          {
            points: 1,
            description:
              '(ii) Over consecutive input intervals of equal length (1), the output changes are 3, 5, 7, 9; these rates of change increase by a constant 2 (constant second differences), which is the signature of a quadratic function.',
            keywords: ['3, 5, 7, 9', '3,5,7,9', 'second difference', 'differences increase by 2', 'increase by 2', 'change by 2', 'constant 2', 'by a constant amount of 2'],
          },
        ],
        sampleAnswer:
          '(i) Quadratic.\n\n(ii) The inputs increase by equal steps of 1. The output values change by $4 - 1 = 3$, $9 - 4 = 5$, $16 - 9 = 7$, and $25 - 16 = 9$. These average rates of change over consecutive equal-length intervals are not constant (so $f$ is not linear), but they increase by a constant 2 each time. Rates of change that change at a constant rate are the signature of a quadratic function.',
      },
    ],
  },

  // =========================================================================
  // Q1 Function Concepts — 2: logarithmic table and a rational function
  // =========================================================================
  {
    id: 'precalc-frq-q1-2',
    lesson: ['function-composition-inverses-precalc', 'rational-functions-precalc', 'logarithmic-functions-precalc'],
    ced: ['2.7', '2.8', '1.9', '2.11'],
    type: 'function-concepts',
    unit: 2,
    title: 'Function Concepts: A Logarithmic Table and a Rational Function',
    prompt:
      'Let $f$ be an increasing function defined for $x > 0$. The table gives values of $f(x)$ at selected values of $x$.\n\nThe function $g$ is given by $g(x) = \\dfrac{3x + 6}{x - 2}$.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>x</th><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td></tr><tr><th>f(x)</th><td>3</td><td>5</td><td>7</td><td>9</td><td>11</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) The function $h$ is defined by $h(x) = (g \\circ f)(x) = g(f(x))$. Find the value of $h(4)$, or indicate that it is not defined. Show the work that leads to your answer. (ii) Find the value of $f^{-1}(9)$, or indicate that it is not defined.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $h(4) = g(f(4)) = g(7) = \\dfrac{21 + 6}{7 - 2} = \\dfrac{27}{5} = 5.4$.',
            keywords: ['5.4', '27/5'],
          },
          {
            points: 1,
            description: '(ii) $f$ is increasing, so $f^{-1}$ exists, and $f(8) = 9$ in the table, so $f^{-1}(9) = 8$.',
            keywords: ['= 8', '=8', 'is 8'],
          },
        ],
        sampleAnswer:
          '(i) $h(4) = g(f(4)) = g(7) = \\dfrac{3(7) + 6}{7 - 2} = \\dfrac{27}{5} = 5.4$.\n\n(ii) Because $f$ is increasing, $f^{-1}$ exists. The table gives $f(8) = 9$, so $f^{-1}(9) = 8$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Find all values of $x$ for which $g(x) = x$, or indicate that there are no such values. (ii) Determine the behavior of $g$ as $x$ approaches 2 from the right. Express your answer using the mathematical notation of a limit.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $3x + 6 = x(x - 2)$ gives $x^2 - 5x - 6 = 0$, so $(x - 6)(x + 1) = 0$: $x = 6$ and $x = -1$ (neither makes the denominator 0).',
            keywords: ['x = 6', 'x=6', '6 and -1', '-1 and 6', '−1 and 6', '6 and −1'],
          },
          {
            points: 1,
            description:
              '(ii) The numerator approaches 12 and the denominator approaches 0 through positive values, so $\\lim_{x \\to 2^+} g(x) = \\infty$.',
            keywords: ['= infinity', '=infinity', '= ∞', '=∞', 'positive infinity', '+infinity', '+∞', '= inf', '= \\infty'],
          },
        ],
        sampleAnswer:
          '(i) $\\dfrac{3x + 6}{x - 2} = x \\Rightarrow 3x + 6 = x^2 - 2x \\Rightarrow x^2 - 5x - 6 = 0 \\Rightarrow (x - 6)(x + 1) = 0$. So $x = 6$ or $x = -1$. Check: $g(6) = 24/4 = 6$ and $g(-1) = 3/(-3) = -1$.\n\n(ii) As $x \\to 2^+$, the numerator approaches $3(2) + 6 = 12$ and the denominator $x - 2$ approaches 0 through positive values, so $\\lim_{x \\to 2^+} g(x) = \\infty$. The line $x = 2$ is a vertical asymptote.',
      },
      {
        label: 'C',
        prompt:
          '(i) Based on the table, determine which of the following function types best models $f$: linear, quadratic, exponential, or logarithmic. (ii) Give a reason for your answer in part (i) based on the relationship between the change in the output values of $f$ and the change in the input values of $f$. Refer to the values in the table in your reasoning.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $f$ is best modeled by a logarithmic function.',
            keywords: ['logarithmic'],
          },
          {
            points: 1,
            description:
              '(ii) The input values change proportionally (each is 2 times the previous one: 1, 2, 4, 8, 16), while the output values change by a constant amount (2 each time). Proportional input changes paired with constant output changes are the signature of a logarithmic function.',
            keywords: ['multipl', 'proportional', 'factor of 2', 'times 2', 'doubl'],
          },
        ],
        sampleAnswer:
          '(i) Logarithmic.\n\n(ii) The input values are multiplied by 2 each time ($1 \\to 2 \\to 4 \\to 8 \\to 16$), so the inputs change proportionally, and the outputs increase by the same amount, 2, each time ($3 \\to 5 \\to 7 \\to 9 \\to 11$). When proportional changes in the input produce equal (additive) changes in the output, the function is logarithmic. (Here $f(x) = 3 + 2\\log_2 x$.)',
      },
    ],
  },

  // =========================================================================
  // Q2 Modeling a Non-Periodic Context — 1: exponential depreciation
  // =========================================================================
  {
    id: 'precalc-frq-q2-1',
    lesson: ['exponential-logarithmic-modeling-precalc', 'exponential-functions-precalc'],
    ced: ['2.5', '2.13', '1.2'],
    type: 'non-periodic-modeling',
    unit: 2,
    title: 'Non-Periodic Modeling: A Car Losing Value',
    prompt:
      'A car was worth 32,000 dollars when it was bought new ($t = 0$). It was worth 24,000 dollars when it was 2 years old ($t = 2$) and 18,000 dollars when it was 4 years old ($t = 4$), where $t$ is the age of the car in years.\n\nThe value of the car can be modeled by the function $V$ given by $V(t) = a \\cdot b^t$, where $V(t)$ is the value of the car, in dollars, when it is $t$ years old.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Use the given data for $t = 0$ and $t = 4$ to write two equations that can be used to find the values for constants $a$ and $b$ in the expression for $V(t)$. (ii) Find the values for $a$ and $b$ as decimal approximations.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $a \\cdot b^0 = 32000$ and $a \\cdot b^4 = 18000$.',
            keywords: ['b^4', 'b⁴', '18000', '18,000'],
          },
          {
            points: 1,
            description:
              '(ii) $a = 32000$, and $b^4 = \\dfrac{18000}{32000} = 0.5625$, so $b = 0.5625^{1/4} \\approx 0.866$.',
            keywords: ['0.866'],
          },
        ],
        sampleAnswer:
          '(i) $a \\cdot b^0 = 32000$ and $a \\cdot b^4 = 18000$.\n\n(ii) The first equation gives $a = 32000$. Then $b^4 = \\dfrac{18000}{32000} = 0.5625$, so $b = 0.5625^{1/4} \\approx 0.866$. The model is $V(t) \\approx 32000(0.866)^t$, which also gives $V(2) \\approx 24000$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Use the given data to find the average rate of change of the value of the car, in dollars per year, from $t = 0$ to $t = 4$. Show the computations that lead to your answer. (ii) Interpret the meaning of your answer from part (i) in the context of the problem.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $\\dfrac{V(4) - V(0)}{4 - 0} = \\dfrac{18000 - 32000}{4} = -3500$ dollars per year.',
            keywords: ['-3500', '−3500', '-3,500', '−3,500'],
          },
          {
            points: 1,
            description:
              '(ii) Over the first 4 years, the value of the car decreased, on average, by 3,500 dollars per year.',
            // Interpretation needs "on average" or a decrease stated as an average; a bare 'average' scored on part (i)'s "average rate of change".
            keywords: ['on average', 'decreased by an average', 'decreased at an average', 'decreases by an average', 'average decrease', 'average loss', 'loses an average', 'lost an average', 'average of 3500', 'average of 3,500', 'average of $3500', 'average of $3,500', 'decreased by about 3500', 'decreased by about 3,500', 'decreased by 3500', 'decreased by 3,500', 'drops by 3500', 'drops by 3,500'],
          },
        ],
        sampleAnswer:
          '(i) $\\dfrac{V(4) - V(0)}{4 - 0} = \\dfrac{18000 - 32000}{4} = -3500$ dollars per year.\n\n(ii) From when the car was new until it was 4 years old, its value decreased, on average, by 3,500 dollars per year.',
      },
      {
        label: 'C',
        prompt:
          'An insurance company uses model $V$ to set the value of the car, but only while the predicted value is at least 5,000 dollars. Use model $V$ to respond to the following. (i) Write and solve an equation whose solution gives the age $t$, in years, at which the predicted value is 5,000 dollars. Express your value for $t$ as a decimal approximation. (ii) Explain how the value of $t$ found in part (i) can be used to determine an appropriate domain restriction for the model $V$. Refer to the context of the problem in your explanation.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $32000(0.866)^t = 5000$, so $t = \\dfrac{\\ln(5000/32000)}{\\ln(0.866)} \\approx 12.905$ years (accept 12.90 to 12.91).',
            keywords: ['12.9'],
          },
          {
            points: 1,
            description:
              '(ii) The value decreases as the car ages and reaches 5,000 dollars at $t \\approx 12.905$, so the model is used only from when the car is new until then: $0 \\leq t \\leq 12.905$ years.',
            keywords: ['0 ≤ t ≤ 12.9', '0 <= t <= 12.9', '0≤t≤12.9', '0<=t<=12.9', '[0, 12.9', '[0,12.9', '0 < t < 12.9', '0 ≤ t < 12.9', '0 \\leq t \\leq 12.9'],
          },
        ],
        sampleAnswer:
          '(i) $32000(0.866)^t = 5000 \\Rightarrow (0.866)^t = 0.15625 \\Rightarrow t = \\dfrac{\\ln 0.15625}{\\ln 0.866} \\approx 12.905$ years.\n\n(ii) $V$ is decreasing, so the predicted value is at least 5,000 dollars only for ages up to $t \\approx 12.905$. The data start when the car was new ($t = 0$), so an appropriate domain for $V$ is $0 \\leq t \\leq 12.905$ years: from purchase until the car is about 12.9 years old.',
      },
    ],
  },

  // =========================================================================
  // Q2 Modeling a Non-Periodic Context — 2: logarithmic learning curve
  // =========================================================================
  {
    id: 'precalc-frq-q2-2',
    lesson: ['exponential-logarithmic-modeling-precalc', 'logarithmic-functions-precalc'],
    ced: ['2.14', '2.13', '1.2'],
    type: 'non-periodic-modeling',
    unit: 2,
    title: 'Non-Periodic Modeling: Typing Speed',
    prompt:
      'A student takes an online typing course. Her typing speed was 22 words per minute at the end of week 1 ($t = 1$), 38 words per minute at the end of week 4 ($t = 4$), and 46 words per minute at the end of week 8 ($t = 8$), where $t$ is the number of weeks since the course began.\n\nHer typing speed can be modeled by the function $W$ given by $W(t) = a + b\\ln t$, where $W(t)$ is the typing speed, in words per minute, at the end of week $t$, for $t \\geq 1$.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Use the given data for $t = 1$ and $t = 8$ to write two equations that can be used to find the values for constants $a$ and $b$ in the expression for $W(t)$. (ii) Find the values for $a$ and $b$ as decimal approximations.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $a + b\\ln 1 = 22$ and $a + b\\ln 8 = 46$.',
            keywords: ['ln 8', 'ln8', 'ln(8)'],
          },
          {
            points: 1,
            description:
              '(ii) $\\ln 1 = 0$, so $a = 22$; then $b = \\dfrac{24}{\\ln 8} \\approx 11.542$.',
            keywords: ['11.54'],
          },
        ],
        sampleAnswer:
          '(i) $a + b\\ln 1 = 22$ and $a + b\\ln 8 = 46$.\n\n(ii) Because $\\ln 1 = 0$, $a = 22$. Then $b\\ln 8 = 24$, so $b = \\dfrac{24}{\\ln 8} \\approx 11.542$. The model is $W(t) \\approx 22 + 11.542\\ln t$, which also gives $W(4) \\approx 38$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Use the given data to find the average rate of change of her typing speed, in words per minute per week, from $t = 1$ to $t = 8$. Show the computations that lead to your answer. (ii) Interpret the meaning of your answer from part (i) in the context of the problem.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $\\dfrac{W(8) - W(1)}{8 - 1} = \\dfrac{46 - 22}{7} = \\dfrac{24}{7} \\approx 3.429$ words per minute per week.',
            keywords: ['3.43', '3.429', '24/7'],
          },
          {
            points: 1,
            description:
              '(ii) From the end of week 1 to the end of week 8, her typing speed increased, on average, by about 3.429 words per minute each week.',
            // Interpretation needs "on average" or an increase stated as an average; a bare 'average' scored on part (i)'s "average rate of change".
            keywords: ['on average', 'increased by an average', 'increased at an average', 'increases by an average', 'average increase', 'average gain', 'gained an average', 'gains an average', 'improved by an average', 'average of 3.4', 'average of about 3.4', 'increased by about 3.4', 'increases by about 3.4', 'increased by 3.4', 'increases by 3.4'],
          },
        ],
        sampleAnswer:
          '(i) $\\dfrac{W(8) - W(1)}{8 - 1} = \\dfrac{46 - 22}{7} = \\dfrac{24}{7} \\approx 3.429$ words per minute per week.\n\n(ii) Between the end of week 1 and the end of week 8, her typing speed increased, on average, by about 3.429 words per minute per week.',
      },
      {
        label: 'C',
        prompt:
          'The course ends once a student’s typing speed reaches 60 words per minute, so the model is used only until the predicted speed reaches 60. Use model $W$ to respond to the following. (i) Write and solve an equation whose solution gives the time $t$, in weeks, when the predicted typing speed is 60 words per minute. Express your value for $t$ as a decimal approximation. (ii) Explain how the value of $t$ found in part (i) can be used to determine an appropriate domain restriction for the model $W$. Refer to the context of the problem in your explanation.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $22 + 11.542\\ln t = 60$, so $\\ln t = \\dfrac{38}{11.542}$ and $t = e^{38/11.542} \\approx 26.9$ weeks (accept 26.90 to 26.91).',
            keywords: ['26.9'],
          },
          {
            points: 1,
            description:
              '(ii) $W$ is increasing and reaches 60 at $t \\approx 26.9$, and the model starts at week 1, so an appropriate domain is $1 \\leq t \\leq 26.9$ weeks.',
            keywords: ['1 ≤ t ≤ 26.9', '1 <= t <= 26.9', '1≤t≤26.9', '1<=t<=26.9', '[1, 26.9', '[1,26.9', '1 ≤ t < 26.9', '1 < t < 26.9', '1 \\leq t \\leq 26.9'],
          },
        ],
        sampleAnswer:
          '(i) $22 + 11.542\\ln t = 60 \\Rightarrow \\ln t = \\dfrac{38}{11.542} \\approx 3.292 \\Rightarrow t = e^{3.292} \\approx 26.9$ weeks.\n\n(ii) $W$ is increasing, so the predicted speed is at most 60 words per minute only until $t \\approx 26.9$, when the course ends. The model starts at the end of week 1, so an appropriate domain is $1 \\leq t \\leq 26.9$ weeks.',
      },
    ],
  },

  // =========================================================================
  // Q3 Modeling a Periodic Context — 1: Ferris wheel
  // =========================================================================
  {
    id: 'precalc-frq-q3-1',
    lesson: ['graphing-trig-functions'],
    ced: ['3.5', '3.6', '3.7'],
    // Rendered above the prompt (dataTableHtml path, page.tsx); the real Q3 gives the graph and asks for the five points.
    dataTableHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 290" role="img" aria-label="H(t) (meters) versus t (minutes): one sinusoidal graph with its dashed midline and the labeled points F, G, J, K, P" style="width:100%;max-width:560px;height:auto;display:block;margin:0 auto;font-family:inherit"><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="56" y="272" font-size="11" text-anchor="middle" fill="currentColor">0</text><line x1="111" y1="24" x2="111" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="111" y="272" font-size="11" text-anchor="middle" fill="currentColor">2</text><line x1="166" y1="24" x2="166" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="166" y="272" font-size="11" text-anchor="middle" fill="currentColor">4</text><line x1="221" y1="24" x2="221" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="221" y="272" font-size="11" text-anchor="middle" fill="currentColor">6</text><line x1="276" y1="24" x2="276" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="276" y="272" font-size="11" text-anchor="middle" fill="currentColor">8</text><line x1="331" y1="24" x2="331" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="331" y="272" font-size="11" text-anchor="middle" fill="currentColor">10</text><line x1="386" y1="24" x2="386" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="386" y="272" font-size="11" text-anchor="middle" fill="currentColor">12</text><line x1="441" y1="24" x2="441" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="441" y="272" font-size="11" text-anchor="middle" fill="currentColor">14</text><line x1="496" y1="24" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="496" y="272" font-size="11" text-anchor="middle" fill="currentColor">16</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="260" font-size="11" text-anchor="end" fill="currentColor">0</text><line x1="56" y1="209.6" x2="496" y2="209.6" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="213.6" font-size="11" text-anchor="end" fill="currentColor">10</text><line x1="56" y1="163.2" x2="496" y2="163.2" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="167.2" font-size="11" text-anchor="end" fill="currentColor">20</text><line x1="56" y1="116.8" x2="496" y2="116.8" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="120.8" font-size="11" text-anchor="end" fill="currentColor">30</text><line x1="56" y1="70.4" x2="496" y2="70.4" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="74.4" font-size="11" text-anchor="end" fill="currentColor">40</text><line x1="56" y1="24" x2="496" y2="24" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="28" font-size="11" text-anchor="end" fill="currentColor">50</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><path d="M56 232.8 L58.8 232.5 L61.5 231.7 L64.3 230.2 L67 228.3 L69.8 225.7 L72.5 222.7 L75.3 219.1 L78 215.1 L80.8 210.6 L83.5 205.6 L86.3 200.3 L89 194.5 L91.8 188.5 L94.5 182.1 L97.3 175.5 L100 168.7 L102.8 161.7 L105.5 154.5 L108.3 147.3 L111 140 L113.8 132.7 L116.5 125.5 L119.3 118.3 L122 111.3 L124.8 104.5 L127.5 97.9 L130.3 91.5 L133 85.5 L135.8 79.7 L138.5 74.4 L141.3 69.4 L144 64.9 L146.8 60.9 L149.5 57.3 L152.3 54.3 L155 51.7 L157.8 49.8 L160.5 48.3 L163.3 47.5 L166 47.2 L168.8 47.5 L171.5 48.3 L174.3 49.8 L177 51.7 L179.8 54.3 L182.5 57.3 L185.2 60.9 L188 64.9 L190.7 69.4 L193.5 74.4 L196.2 79.7 L199 85.5 L201.7 91.5 L204.5 97.9 L207.2 104.5 L210 111.3 L212.7 118.3 L215.5 125.5 L218.2 132.7 L221 140 L223.7 147.3 L226.5 154.5 L229.2 161.7 L232 168.7 L234.7 175.5 L237.5 182.1 L240.2 188.5 L243 194.5 L245.7 200.3 L248.5 205.6 L251.2 210.6 L254 215.1 L256.7 219.1 L259.5 222.7 L262.2 225.7 L265 228.3 L267.7 230.2 L270.5 231.7 L273.2 232.5 L276 232.8 L278.7 232.5 L281.5 231.7 L284.2 230.2 L287 228.3 L289.7 225.7 L292.5 222.7 L295.2 219.1 L298 215.1 L300.7 210.6 L303.5 205.6 L306.2 200.3 L309 194.5 L311.7 188.5 L314.5 182.1 L317.2 175.5 L320 168.7 L322.7 161.7 L325.5 154.5 L328.2 147.3 L331 140 L333.7 132.7 L336.5 125.5 L339.2 118.3 L342 111.3 L344.7 104.5 L347.5 97.9 L350.2 91.5 L353 85.5 L355.7 79.7 L358.5 74.4 L361.2 69.4 L364 64.9 L366.7 60.9 L369.5 57.3 L372.2 54.3 L375 51.7 L377.7 49.8 L380.5 48.3 L383.2 47.5 L386 47.2 L388.7 47.5 L391.5 48.3 L394.2 49.8 L397 51.7 L399.7 54.3 L402.5 57.3 L405.2 60.9 L408 64.9 L410.7 69.4 L413.5 74.4 L416.2 79.7 L419 85.5 L421.7 91.5 L424.5 97.9 L427.2 104.5 L430 111.3 L432.7 118.3 L435.5 125.5 L438.2 132.7 L441 140 L443.7 147.3 L446.5 154.5 L449.2 161.7 L452 168.7 L454.7 175.5 L457.5 182.1 L460.2 188.5 L463 194.5 L465.7 200.3 L468.5 205.6 L471.2 210.6 L474 215.1 L476.7 219.1 L479.5 222.7 L482.2 225.7 L485 228.3 L487.7 230.2 L490.5 231.7 L493.2 232.5 L496 232.8" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="56" cy="232.8" r="4" fill="currentColor"/><text x="62" y="248.8" font-size="13" font-weight="700" font-style="italic" fill="currentColor">F</text><circle cx="111" cy="140" r="4" fill="currentColor"/><text x="97" y="132" font-size="13" font-weight="700" font-style="italic" fill="currentColor">G</text><circle cx="166" cy="47.2" r="4" fill="currentColor"/><text x="162" y="37.2" font-size="13" font-weight="700" font-style="italic" fill="currentColor">J</text><circle cx="221" cy="140" r="4" fill="currentColor"/><text x="229" y="156" font-size="13" font-weight="700" font-style="italic" fill="currentColor">K</text><circle cx="276" cy="232.8" r="4" fill="currentColor"/><text x="272" y="250.8" font-size="13" font-weight="700" font-style="italic" fill="currentColor">P</text><text x="276" y="284" font-size="12" text-anchor="middle" fill="currentColor">t (minutes)</text><text x="14" y="140" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 140)">H(t) (meters)</text></svg>',
    type: 'periodic-modeling',
    unit: 3,
    title: 'Periodic Modeling: A Ferris Wheel Ride',
    prompt:
      'A rider boards a Ferris wheel at its lowest point, 5 meters above the ground, at time $t = 0$ minutes. The rider reaches the highest point, 45 meters above the ground, at $t = 4$ minutes, and the wheel turns at a constant rate, completing one full rotation every 8 minutes.\n\nThe sinusoidal function $H$ models the rider’s height above the ground, in meters, as a function of $t$, the number of minutes after boarding.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The graph of $H$ and its dashed midline are shown in the figure above for two full cycles, $0 \\leq t \\leq 16$. Reading from the left: $F$ is the first point of the graph (at $t = 0$), $G$ is the first point where the graph crosses the midline, $J$ is the first maximum, $K$ is the next point where the graph crosses the midline, and $P$ is the next minimum. Determine the coordinates $(t, H(t))$ for the five points $F$, $G$, $J$, $K$, and $P$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$H(t)$-coordinates: $F$: 5, $G$: 25, $J$: 45, $K$: 25, $P$: 5 (the midline is $\\frac{5 + 45}{2} = 25$).',
            // Not a bare '25': it scored on any "25" in the response (e.g. "0.25", "t = 2.5").
            keywords: ['midline is 25', 'midline = 25', 'midline: 25', 'midline at 25', 'midline y = 25', 'midline h = 25', 'd = 25', 'd=25', 'h = 25', 'h(t) = 25', '(2, 25)', '(2,25)', '(6, 25)', '(6,25)', 'g: 25', 'g = 25', 'g is 25'],
          },
          {
            points: 1,
            description: '$t$-coordinates: $F = (0, 5)$, $G = (2, 25)$, $J = (4, 45)$, $K = (6, 25)$, $P = (8, 5)$.',
            keywords: ['(2, 25)', '(2,25)', '(6, 25)', '(6,25)'],
          },
        ],
        sampleAnswer:
          'The midline is $\\frac{5 + 45}{2} = 25$ m. Successive key points are a quarter period, $8/4 = 2$ minutes, apart.\n\n$F = (0, 5)$, $G = (2, 25)$, $J = (4, 45)$, $K = (6, 25)$, $P = (8, 5)$.',
      },
      {
        label: 'B',
        prompt: 'The function $H$ can be written in the form $H(t) = a\\sin(b(t + c)) + d$. Find values of constants $a$, $b$, $c$, and $d$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Vertical transformations: amplitude $a = \\frac{45 - 5}{2} = 20$ and midline $d = 25$.',
            keywords: ['a = 20', 'a=20'],
          },
          {
            points: 1,
            description:
              'Horizontal transformations: period 8 gives $b = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$. The graph crosses the midline going up at $t = 2$, so $c = -2$: $H(t) = 20\\sin\\left(\\frac{\\pi}{4}(t - 2)\\right) + 25$. Other correct forms (for example $c = 6$, or $a = -20$ with $c = 2$) earn the point.',
            keywords: ['π/4', 'pi/4', 'c = -2', 'c=-2', 'c = −2'],
          },
        ],
        sampleAnswer:
          '$a = 20$ (the amplitude, $\\frac{45 - 5}{2}$) and $d = 25$.\n\nThe period is 8 minutes, so $b = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$.\n\nA sine function with $a > 0$ starts at the midline going up; the graph does that at $G$, $t = 2$, so the graph is shifted right 2 and $c = -2$.\n\n$H(t) = 20\\sin\\left(\\frac{\\pi}{4}(t - 2)\\right) + 25$. Check: $H(0) = 20\\sin\\left(-\\frac{\\pi}{2}\\right) + 25 = 5$.',
      },
      {
        label: 'C',
        prompt:
          'Refer to the graph of $H$ in part A. The $t$-coordinate of $G$ is $t_1$, and the $t$-coordinate of $J$ is $t_2$. (i) On the interval $(t_1, t_2)$, which of the following is true about $H$? (a) $H$ is increasing and above its midline. (b) $H$ is decreasing and above its midline. (c) $H$ is increasing and below its midline. (d) $H$ is decreasing and below its midline. (ii) On the interval $(t_1, t_2)$, describe the concavity of the graph of $H$ and determine whether the rate of change of $H$ is increasing or decreasing.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Choice (a): from $G = (2, 25)$ to $J = (4, 45)$ the rider rises from the midline to the maximum, so $H$ is increasing and above its midline.',
            keywords: ['(a)', 'increasing and above'],
          },
          {
            points: 1,
            description:
              '(ii) The graph of $H$ is concave down on $(t_1, t_2)$, and the rate of change of $H$ is decreasing there (from its greatest value at $G$ down to 0 at the maximum $J$).',
            keywords: ['concave down'],
          },
        ],
        sampleAnswer:
          '(i) (a). Between $G = (2, 25)$ and $J = (4, 45)$, the rider rises from the midline height to the top of the wheel, so $H$ is increasing and above its midline.\n\n(ii) The graph is concave down on $(2, 4)$. The rider rises fastest when crossing the midline at $G$, and the rate of change decreases to 0 at the top, $J$. So the rate of change of $H$ is decreasing on this interval.',
      },
    ],
  },

  // =========================================================================
  // Q3 Modeling a Periodic Context — 2: tide depth
  // =========================================================================
  {
    id: 'precalc-frq-q3-2',
    lesson: ['graphing-trig-functions'],
    ced: ['3.5', '3.6', '3.7'],
    // Rendered above the prompt (dataTableHtml path, page.tsx); the real Q3 gives the graph and asks for the five points.
    dataTableHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 290" role="img" aria-label="D(h) (feet) versus h (hours after midnight): one sinusoidal graph with its dashed midline and the labeled points F, G, J, K, P" style="width:100%;max-width:560px;height:auto;display:block;margin:0 auto;font-family:inherit"><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="56" y="272" font-size="11" text-anchor="middle" fill="currentColor">0</text><line x1="111" y1="24" x2="111" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="111" y="272" font-size="11" text-anchor="middle" fill="currentColor">3</text><line x1="166" y1="24" x2="166" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="166" y="272" font-size="11" text-anchor="middle" fill="currentColor">6</text><line x1="221" y1="24" x2="221" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="221" y="272" font-size="11" text-anchor="middle" fill="currentColor">9</text><line x1="276" y1="24" x2="276" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="276" y="272" font-size="11" text-anchor="middle" fill="currentColor">12</text><line x1="331" y1="24" x2="331" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="331" y="272" font-size="11" text-anchor="middle" fill="currentColor">15</text><line x1="386" y1="24" x2="386" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="386" y="272" font-size="11" text-anchor="middle" fill="currentColor">18</text><line x1="441" y1="24" x2="441" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="441" y="272" font-size="11" text-anchor="middle" fill="currentColor">21</text><line x1="496" y1="24" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="496" y="272" font-size="11" text-anchor="middle" fill="currentColor">24</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="260" font-size="11" text-anchor="end" fill="currentColor">0</text><line x1="56" y1="232.8" x2="496" y2="232.8" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="236.8" font-size="11" text-anchor="end" fill="currentColor">1</text><line x1="56" y1="209.6" x2="496" y2="209.6" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="213.6" font-size="11" text-anchor="end" fill="currentColor">2</text><line x1="56" y1="186.4" x2="496" y2="186.4" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="190.4" font-size="11" text-anchor="end" fill="currentColor">3</text><line x1="56" y1="163.2" x2="496" y2="163.2" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="167.2" font-size="11" text-anchor="end" fill="currentColor">4</text><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="144" font-size="11" text-anchor="end" fill="currentColor">5</text><line x1="56" y1="116.8" x2="496" y2="116.8" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="120.8" font-size="11" text-anchor="end" fill="currentColor">6</text><line x1="56" y1="93.6" x2="496" y2="93.6" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="97.6" font-size="11" text-anchor="end" fill="currentColor">7</text><line x1="56" y1="70.4" x2="496" y2="70.4" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="74.4" font-size="11" text-anchor="end" fill="currentColor">8</text><line x1="56" y1="47.2" x2="496" y2="47.2" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="51.2" font-size="11" text-anchor="end" fill="currentColor">9</text><line x1="56" y1="24" x2="496" y2="24" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="28" font-size="11" text-anchor="end" fill="currentColor">10</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="116.8" x2="496" y2="116.8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><path d="M56 47.2 L58.8 47.4 L61.5 48.1 L64.3 49.1 L67 50.6 L69.8 52.5 L72.5 54.8 L75.3 57.5 L78 60.5 L80.8 63.9 L83.5 67.6 L86.3 71.6 L89 75.9 L91.7 80.4 L94.5 85.2 L97.3 90.2 L100 95.3 L102.7 100.6 L105.5 105.9 L108.2 111.3 L111 116.8 L113.7 122.3 L116.5 127.7 L119.2 133 L122 138.3 L124.7 143.4 L127.5 148.4 L130.3 153.2 L133 157.7 L135.8 162 L138.5 166 L141.3 169.7 L144 173.1 L146.8 176.1 L149.5 178.8 L152.3 181.1 L155 183 L157.8 184.5 L160.5 185.5 L163.3 186.2 L166 186.4 L168.8 186.2 L171.5 185.5 L174.3 184.5 L177 183 L179.8 181.1 L182.5 178.8 L185.3 176.1 L188 173.1 L190.8 169.7 L193.5 166 L196.3 162 L199 157.7 L201.8 153.2 L204.5 148.4 L207.3 143.4 L210 138.3 L212.8 133 L215.5 127.7 L218.3 122.3 L221 116.8 L223.8 111.3 L226.5 105.9 L229.3 100.6 L232 95.3 L234.8 90.2 L237.5 85.2 L240.3 80.4 L243 75.9 L245.8 71.6 L248.5 67.6 L251.3 63.9 L254 60.5 L256.8 57.5 L259.5 54.8 L262.3 52.5 L265 50.6 L267.8 49.1 L270.5 48.1 L273.3 47.4 L276 47.2 L278.8 47.4 L281.5 48.1 L284.3 49.1 L287 50.6 L289.8 52.5 L292.5 54.8 L295.3 57.5 L298 60.5 L300.8 63.9 L303.5 67.6 L306.3 71.6 L309 75.9 L311.8 80.4 L314.5 85.2 L317.3 90.2 L320 95.3 L322.8 100.6 L325.5 105.9 L328.3 111.3 L331 116.8 L333.8 122.3 L336.5 127.7 L339.3 133 L342 138.3 L344.8 143.4 L347.5 148.4 L350.3 153.2 L353 157.7 L355.8 162 L358.5 166 L361.3 169.7 L364 173.1 L366.8 176.1 L369.5 178.8 L372.3 181.1 L375 183 L377.8 184.5 L380.5 185.5 L383.3 186.2 L386 186.4 L388.8 186.2 L391.5 185.5 L394.3 184.5 L397 183 L399.8 181.1 L402.5 178.8 L405.2 176.1 L408 173.1 L410.7 169.7 L413.5 166 L416.2 162 L419 157.7 L421.7 153.2 L424.5 148.4 L427.2 143.4 L430 138.3 L432.7 133 L435.5 127.7 L438.2 122.3 L441 116.8 L443.7 111.3 L446.5 105.9 L449.2 100.6 L452 95.3 L454.7 90.2 L457.5 85.2 L460.2 80.4 L463 75.9 L465.7 71.6 L468.5 67.6 L471.2 63.9 L474 60.5 L476.7 57.5 L479.5 54.8 L482.2 52.5 L485 50.6 L487.7 49.1 L490.5 48.1 L493.2 47.4 L496 47.2" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="56" cy="47.2" r="4" fill="currentColor"/><text x="62" y="39.2" font-size="13" font-weight="700" font-style="italic" fill="currentColor">F</text><circle cx="111" cy="116.8" r="4" fill="currentColor"/><text x="97" y="132.8" font-size="13" font-weight="700" font-style="italic" fill="currentColor">G</text><circle cx="166" cy="186.4" r="4" fill="currentColor"/><text x="162" y="206.4" font-size="13" font-weight="700" font-style="italic" fill="currentColor">J</text><circle cx="221" cy="116.8" r="4" fill="currentColor"/><text x="229" y="108.8" font-size="13" font-weight="700" font-style="italic" fill="currentColor">K</text><circle cx="276" cy="47.2" r="4" fill="currentColor"/><text x="272" y="37.2" font-size="13" font-weight="700" font-style="italic" fill="currentColor">P</text><text x="276" y="284" font-size="12" text-anchor="middle" fill="currentColor">h (hours after midnight)</text><text x="14" y="140" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 140)">D(h) (feet)</text></svg>',
    type: 'periodic-modeling',
    unit: 3,
    title: 'Periodic Modeling: Water Depth at a Dock',
    prompt:
      'The depth of the water at the end of a dock rises and falls with the tides. The depth is at its maximum of 9 feet at midnight ($h = 0$) and at its minimum of 3 feet at 6 a.m. ($h = 6$), and the pattern repeats every 12 hours.\n\nThe sinusoidal function $D$ models the depth of the water, in feet, as a function of $h$, the number of hours after midnight.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The graph of $D$ and its dashed midline are shown in the figure above for two full cycles, $0 \\leq h \\leq 24$. Reading from the left: $F$ is the first point of the graph (at $h = 0$), $G$ is the first point where the graph crosses the midline, $J$ is the first minimum, $K$ is the next point where the graph crosses the midline, and $P$ is the next maximum. Determine the coordinates $(h, D(h))$ for the five points $F$, $G$, $J$, $K$, and $P$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$D(h)$-coordinates: $F$: 9, $G$: 6, $J$: 3, $K$: 6, $P$: 9 (the midline is $\\frac{9 + 3}{2} = 6$).',
            keywords: ['midline is 6', 'midline = 6', 'midline: 6', 'midline at 6', 'midline y = 6', 'd = 6'],
          },
          {
            points: 1,
            description: '$h$-coordinates: $F = (0, 9)$, $G = (3, 6)$, $J = (6, 3)$, $K = (9, 6)$, $P = (12, 9)$.',
            keywords: ['(3, 6)', '(3,6)', '(9, 6)', '(9,6)'],
          },
        ],
        sampleAnswer:
          'The midline is 6 ft, because $\\frac{9 + 3}{2} = 6$. Successive key points are a quarter period, $12/4 = 3$ hours, apart.\n\n$F = (0, 9)$, $G = (3, 6)$, $J = (6, 3)$, $K = (9, 6)$, $P = (12, 9)$.',
      },
      {
        label: 'B',
        prompt: 'The function $D$ can be written in the form $D(h) = a\\sin(b(h + c)) + d$. Find values of constants $a$, $b$, $c$, and $d$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Vertical transformations: amplitude $a = \\frac{9 - 3}{2} = 3$ and midline $d = 6$.',
            keywords: ['a = 3', 'a=3'],
          },
          {
            points: 1,
            description:
              'Horizontal transformations: period 12 gives $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$. The graph crosses the midline going up at $h = 9$ (equivalently $h = -3$), so $c = 3$: $D(h) = 3\\sin\\left(\\frac{\\pi}{6}(h + 3)\\right) + 6$. Other correct forms (for example $c = -9$, or $a = -3$ with $c = -3$) earn the point.',
            keywords: ['π/6', 'pi/6', '\\frac{\\pi}{6}'],
          },
        ],
        sampleAnswer:
          '$a = 3$ (the amplitude, $\\frac{9 - 3}{2}$) and $d = 6$.\n\nThe period is 12 hours, so $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$.\n\nA sine function with $a > 0$ crosses its midline going up at the start of a cycle. The graph does that at $K$, $h = 9$, and therefore also at $h = 9 - 12 = -3$. A shift left 3 gives $c = 3$.\n\n$D(h) = 3\\sin\\left(\\frac{\\pi}{6}(h + 3)\\right) + 6$. Check: $D(0) = 3\\sin\\left(\\frac{\\pi}{2}\\right) + 6 = 9$.',
      },
      {
        label: 'C',
        prompt:
          'Refer to the graph of $D$ in part A. The $h$-coordinate of $J$ is $h_1$, and the $h$-coordinate of $K$ is $h_2$. (i) On the interval $(h_1, h_2)$, which of the following is true about $D$? (a) $D$ is increasing and above its midline. (b) $D$ is decreasing and above its midline. (c) $D$ is increasing and below its midline. (d) $D$ is decreasing and below its midline. (ii) On the interval $(h_1, h_2)$, describe the concavity of the graph of $D$ and determine whether the rate of change of $D$ is increasing or decreasing.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Choice (c): from $J = (6, 3)$ to $K = (9, 6)$ the water rises from its minimum to the midline, so $D$ is increasing and below its midline.',
            keywords: ['(c)', 'increasing and below'],
          },
          {
            points: 1,
            description:
              '(ii) The graph of $D$ is concave up on $(h_1, h_2)$, and the rate of change of $D$ is increasing there (from 0 at the minimum $J$ to its greatest value at $K$).',
            keywords: ['concave up'],
          },
        ],
        sampleAnswer:
          '(i) (c). Between $J = (6, 3)$ and $K = (9, 6)$, the water rises from low tide to the midline depth, so $D$ is increasing and below its midline.\n\n(ii) The graph is concave up on $(6, 9)$. The depth starts rising slowly just after low tide and rises fastest at the midline, so the rate of change of $D$ is increasing on this interval.',
      },
    ],
  },

  // =========================================================================
  // Q4 Symbolic Manipulations — 1
  // =========================================================================
  {
    id: 'precalc-frq-q4-1',
    lesson: ['logarithmic-functions-precalc', 'trigonometric-identities-precalc', 'solving-trig-equations'],
    ced: ['2.12', '2.13', '3.12', '3.10'],
    type: 'symbolic-manipulations',
    unit: 3,
    title: 'Symbolic Manipulations: Logs, Double Angles, and a Cosine Equation',
    prompt:
      'Angle measures are in radians. Solutions to equations must be real numbers. Determine the exact value of any expression that can be obtained without a calculator, combine terms using the rules for exponents and logarithms, and show the work that leads to each answer.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The functions $g$ and $k$ are given by $g(x) = 3\\log_2 x - \\log_2(4x) + 1$ and $k(x) = \\dfrac{1 - \\cos(2x)}{\\sin(2x)}$. (i) Rewrite $g(x)$ as a single logarithm base 2 without negative exponents in any part of the expression. Your result should be of the form $\\log_2(\\text{expression})$. (ii) Rewrite $k(x)$ as an expression in which $\\tan x$ appears once and no other trigonometric functions are involved.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $g(x) = \\log_2(x^3) - \\log_2(4x) + \\log_2 2 = \\log_2\\left(\\dfrac{2x^3}{4x}\\right) = \\log_2\\left(\\dfrac{x^2}{2}\\right)$, for $x > 0$. Equivalent forms such as $\\log_2(0.5x^2)$ earn the point.',
            keywords: ['x^2/2', 'x²/2', '(x^2)/2', '(x²)/2', '0.5x^2', '0.5x²', '\\dfrac{x^2}{2}', '\\frac{x^2}{2}'],
          },
          {
            points: 1,
            description:
              '(ii) $1 - \\cos(2x) = 2\\sin^2 x$ and $\\sin(2x) = 2\\sin x\\cos x$, so $k(x) = \\dfrac{2\\sin^2 x}{2\\sin x\\cos x} = \\tan x$, where $\\sin(2x) \\neq 0$.',
            keywords: ['= tan x', '=tan x', '= tan(x)', '=tan(x)', 'is tan x', 'k(x) = tan', '= \\tan x'],
          },
        ],
        sampleAnswer:
          '(i) $g(x) = \\log_2(x^3) - \\log_2(4x) + \\log_2 2 = \\log_2\\left(\\dfrac{x^3 \\cdot 2}{4x}\\right) = \\log_2\\left(\\dfrac{x^2}{2}\\right)$, for $x > 0$.\n\n(ii) Using the double-angle identities $\\cos(2x) = 1 - 2\\sin^2 x$ and $\\sin(2x) = 2\\sin x\\cos x$:\n\n$k(x) = \\dfrac{1 - (1 - 2\\sin^2 x)}{2\\sin x\\cos x} = \\dfrac{2\\sin^2 x}{2\\sin x\\cos x} = \\dfrac{\\sin x}{\\cos x} = \\tan x$, wherever $\\sin(2x) \\neq 0$.',
      },
      {
        label: 'B',
        prompt:
          'The functions $j$ and $q$ are given by $j(\\theta) = 2\\cos^2\\theta - 3\\cos\\theta + 1$ and $q(x) = 9^x - 4 \\cdot 3^x + 3$. (i) Solve $j(\\theta) = 0$ for values of $\\theta$ in the interval $[0, 2\\pi)$. (ii) Solve $q(x) = 0$ for all real values of $x$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $(2\\cos\\theta - 1)(\\cos\\theta - 1) = 0$, so $\\cos\\theta = \\frac{1}{2}$ or $\\cos\\theta = 1$, giving $\\theta = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$.',
            keywords: ['5π/3', '5pi/3', '5 pi/3', '5π / 3', '\\frac{5\\pi}{3}'],
          },
          {
            points: 1,
            description:
              '(ii) With $u = 3^x$: $u^2 - 4u + 3 = 0$, so $(u - 1)(u - 3) = 0$, $3^x = 1$ or $3^x = 3$, giving $x = 0$ and $x = 1$.',
            keywords: ['x = 0 and x = 1', 'x = 0, x = 1', 'x=0 and x=1', 'x = 0 or x = 1', 'x=0, x=1', 'x = 0 and 1', 'x = 0, 1', 'x=0,1', 'x = 0$ and $x = 1'],
          },
        ],
        sampleAnswer:
          '(i) $2\\cos^2\\theta - 3\\cos\\theta + 1 = (2\\cos\\theta - 1)(\\cos\\theta - 1) = 0$. So $\\cos\\theta = \\frac{1}{2}$, giving $\\theta = \\frac{\\pi}{3}$ or $\\frac{5\\pi}{3}$, or $\\cos\\theta = 1$, giving $\\theta = 0$. Solutions: $\\theta = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$.\n\n(ii) $9^x = (3^x)^2$. Let $u = 3^x > 0$: $u^2 - 4u + 3 = (u - 1)(u - 3) = 0$. So $3^x = 1$, giving $x = 0$, or $3^x = 3$, giving $x = 1$. Solutions: $x = 0$ and $x = 1$.',
      },
      {
        label: 'C',
        prompt: 'The function $m$ is given by $m(x) = 4\\cos(2x) - 1$. Find all input values in the domain of $m$ that yield an output value of 1.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Solutions in one period: $4\\cos(2x) - 1 = 1$ gives $\\cos(2x) = \\frac{1}{2}$, so $2x = \\frac{\\pi}{3}$ or $2x = \\frac{5\\pi}{3}$, giving $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.',
            keywords: ['π/6', 'pi/6', '\\frac{\\pi}{6}'],
          },
          {
            points: 1,
            description:
              'All solutions: the period of $m$ is $\\pi$, so $x = \\frac{\\pi}{6} + k\\pi$ and $x = \\frac{5\\pi}{6} + k\\pi$ for any integer $k$.',
            keywords: ['kπ', 'πk', 'k pi', 'pi k', 'kpi', 'pik', 'nπ', 'πn', 'n pi', 'pi n', 'k\\pi'],
          },
        ],
        sampleAnswer:
          '$4\\cos(2x) - 1 = 1 \\Rightarrow \\cos(2x) = \\frac{1}{2}$.\n\nIn one cycle of $\\cos(2x)$, $2x = \\frac{\\pi}{3}$ or $2x = \\frac{5\\pi}{3}$, so $x = \\frac{\\pi}{6}$ or $x = \\frac{5\\pi}{6}$.\n\nThe period of $m$ is $\\frac{2\\pi}{2} = \\pi$, so all solutions are $x = \\frac{\\pi}{6} + k\\pi$ and $x = \\frac{5\\pi}{6} + k\\pi$, for any integer $k$.',
      },
    ],
  },

  // =========================================================================
  // Q4 Symbolic Manipulations — 2
  // =========================================================================
  {
    id: 'precalc-frq-q4-2',
    lesson: ['logarithmic-functions-precalc', 'trigonometric-identities-precalc', 'solving-trig-equations'],
    ced: ['2.12', '2.13', '3.12', '3.10'],
    type: 'symbolic-manipulations',
    unit: 3,
    title: 'Symbolic Manipulations: Sum Identities, Log Equations, and Tangent',
    prompt:
      'Angle measures are in radians. Solutions to equations must be real numbers. Determine the exact value of any expression that can be obtained without a calculator, combine terms using the rules for exponents and logarithms, and show the work that leads to each answer.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The functions $g$ and $k$ are given by $g(x) = \\log_3(9x) - 2\\log_3 x + \\log_3(x^3)$ and $k(x) = \\sin\\left(x + \\frac{\\pi}{6}\\right) + \\sin\\left(x - \\frac{\\pi}{6}\\right)$. (i) Rewrite $g(x)$ as a single logarithm base 3. Your result should be of the form $\\log_3(\\text{expression})$. (ii) Rewrite $k(x)$ as an expression in which $\\sin x$ appears once and no other trigonometric functions are involved.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $g(x) = \\log_3\\left(\\dfrac{9x \\cdot x^3}{x^2}\\right) = \\log_3(9x^2)$, for $x > 0$.',
            keywords: ['9x^2', '9x²'],
          },
          {
            points: 1,
            description:
              '(ii) By the sum and difference identities, $k(x) = 2\\sin x\\cos\\frac{\\pi}{6} = 2 \\cdot \\frac{\\sqrt{3}}{2}\\sin x = \\sqrt{3}\\sin x$.',
            keywords: ['√3 sin x', '√3sin x', '√3 sin(x)', 'sqrt(3) sin', 'sqrt3 sin', 'sqrt(3)sin', 'sqrt3sin', '√3sin(x)', '\\sqrt{3}\\sin x'],
          },
        ],
        sampleAnswer:
          '(i) $g(x) = \\log_3(9x) - \\log_3(x^2) + \\log_3(x^3) = \\log_3\\left(\\dfrac{9x \\cdot x^3}{x^2}\\right) = \\log_3(9x^2)$, for $x > 0$.\n\n(ii) $\\sin\\left(x + \\frac{\\pi}{6}\\right) = \\sin x\\cos\\frac{\\pi}{6} + \\cos x\\sin\\frac{\\pi}{6}$ and $\\sin\\left(x - \\frac{\\pi}{6}\\right) = \\sin x\\cos\\frac{\\pi}{6} - \\cos x\\sin\\frac{\\pi}{6}$. Adding, the cosine terms cancel:\n\n$k(x) = 2\\sin x\\cos\\frac{\\pi}{6} = 2 \\cdot \\frac{\\sqrt{3}}{2}\\sin x = \\sqrt{3}\\sin x$.',
      },
      {
        label: 'B',
        prompt:
          'The functions $j$ and $q$ are given by $j(\\theta) = 2\\cos^2\\theta + 3\\sin\\theta - 3$ and $q(x) = \\log_2 x + \\log_2(x - 6)$. (i) Solve $j(\\theta) = 0$ for values of $\\theta$ in the interval $[0, 2\\pi)$. (ii) Solve $q(x) = 4$ for values of $x$ in the domain of $q$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Using $\\cos^2\\theta = 1 - \\sin^2\\theta$: $2\\sin^2\\theta - 3\\sin\\theta + 1 = 0$, so $(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0$, giving $\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.',
            keywords: ['5π/6', '5pi/6', '5 pi/6', '5π / 6', '\\frac{5\\pi}{6}'],
          },
          {
            points: 1,
            description:
              '(ii) $\\log_2(x(x - 6)) = 4$, so $x^2 - 6x - 16 = 0$ and $(x - 8)(x + 2) = 0$. The domain of $q$ is $x > 6$, so $x = -2$ is rejected and the only solution is $x = 8$.',
            keywords: ['x = 8', 'x=8'],
          },
        ],
        sampleAnswer:
          '(i) $2(1 - \\sin^2\\theta) + 3\\sin\\theta - 3 = 0 \\Rightarrow -2\\sin^2\\theta + 3\\sin\\theta - 1 = 0 \\Rightarrow 2\\sin^2\\theta - 3\\sin\\theta + 1 = 0$.\n\n$(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0$, so $\\sin\\theta = \\frac{1}{2}$, giving $\\theta = \\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$, or $\\sin\\theta = 1$, giving $\\theta = \\frac{\\pi}{2}$.\n\n(ii) $\\log_2(x(x - 6)) = 4 \\Rightarrow x^2 - 6x = 16 \\Rightarrow (x - 8)(x + 2) = 0$. The domain of $q$ requires $x > 0$ and $x - 6 > 0$, so $x > 6$. Reject $x = -2$; the solution is $x = 8$. Check: $\\log_2 8 + \\log_2 2 = 3 + 1 = 4$.',
      },
      {
        label: 'C',
        prompt: 'The function $m$ is given by $m(x) = 2\\tan\\left(\\frac{x}{2}\\right) + 1$. Find all input values in the domain of $m$ that yield an output value of 3.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Solution in one period: $2\\tan\\left(\\frac{x}{2}\\right) + 1 = 3$ gives $\\tan\\left(\\frac{x}{2}\\right) = 1$, so $\\frac{x}{2} = \\frac{\\pi}{4}$ and $x = \\frac{\\pi}{2}$.',
            keywords: ['π/2', 'pi/2', '\\frac{\\pi}{2}'],
          },
          {
            points: 1,
            description:
              'All solutions: the period of $m$ is $2\\pi$, so $x = \\frac{\\pi}{2} + 2k\\pi$ for any integer $k$.',
            keywords: ['2kπ', '2πk', '2k pi', '2pi k', '2kpi', '2pik', '2nπ', '2πn', '2n pi', '2pi n', '2k\\pi'],
          },
        ],
        sampleAnswer:
          '$2\\tan\\left(\\frac{x}{2}\\right) + 1 = 3 \\Rightarrow \\tan\\left(\\frac{x}{2}\\right) = 1$.\n\nThe tangent function has period $\\pi$, so $\\frac{x}{2} = \\frac{\\pi}{4} + k\\pi$, which gives $x = \\frac{\\pi}{2} + 2k\\pi$ for any integer $k$. (The period of $m$ is $\\frac{\\pi}{1/2} = 2\\pi$, and $x = \\frac{\\pi}{2}$ is the only solution in one period.)',
      },
    ],
  },

  // =========================================================================
  // Q1 Function Concepts — 3: linear table and a rational function with a hole
  // =========================================================================
  {
    id: 'precalc-frq-q1-3',
    lesson: ['rational-functions-precalc', 'function-composition-inverses-precalc', 'rates-of-change-precalc'],
    ced: ['1.10', '1.8', '2.7', '2.8', '1.3'],
    type: 'function-concepts',
    unit: 1,
    title: 'Function Concepts: A Decreasing Table and a Rational Function with a Hole',
    prompt:
      'The function $f$ is decreasing for $x \\geq 0$. Selected values of $f(x)$ are given in the table.\n\nThe rational function $g$ is given by $g(x) = \\dfrac{x^2 - 2x - 24}{x^2 - 36}$.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>x</th><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>f(x)</th><td>60</td><td>48</td><td>36</td><td>24</td><td>12</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) The composite function $h$ is given by $h(x) = g(f(x))$. Determine $h(8)$, showing the computations, or explain why $h(8)$ has no value. (ii) Determine $f^{-1}(36)$, or explain why it has no value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $h(8) = g(f(8)) = g(12) = \\dfrac{144 - 24 - 24}{144 - 36} = \\dfrac{96}{108} = \\dfrac{8}{9} \\approx 0.889$. Evaluating $g(8)$ instead of $g(f(8))$ does not earn the point.',
            keywords: ['8/9', '96/108', '0.889', '0.888', '0.89', '\\frac{8}{9}', '\\dfrac{8}{9}'],
          },
          {
            points: 1,
            description: '(ii) $f$ is decreasing, so it is one-to-one and $f^{-1}$ exists. The table gives $f(4) = 36$, so $f^{-1}(36) = 4$.',
            keywords: ['(36) = 4', '(36)=4', '(36) is 4', 'f(4) = 36', 'f(4)=36', 'inverse of 36 is 4', 'f⁻¹(36) = 4', 'f^-1(36) = 4', 'f^{-1}(36) = 4'],
          },
        ],
        sampleAnswer:
          '(i) $h(8) = g(f(8)) = g(12) = \\dfrac{12^2 - 2(12) - 24}{12^2 - 36} = \\dfrac{144 - 24 - 24}{144 - 36} = \\dfrac{96}{108} = \\dfrac{8}{9} \\approx 0.889$.\n\n(ii) Because $f$ is decreasing, it is one-to-one, so $f^{-1}$ exists. The table gives $f(4) = 36$, so $f^{-1}(36) = 4$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Find all values of $x$ for which $g(x) = -1$, or indicate that there are none. Show the work that leads to your answer. (ii) Determine $\\lim_{x \\to 6} g(x)$, or explain why this limit does not exist.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $x^2 - 2x - 24 = -(x^2 - 36)$ gives $2x^2 - 2x - 60 = 0$, so $x^2 - x - 30 = (x - 6)(x + 5) = 0$. The value $x = 6$ is not in the domain of $g$ (the denominator is 0 there), so the only solution is $x = -5$. Equivalent work earns the point (for example reducing to $\\frac{x + 4}{x + 6} = -1$ with $x \\neq \\pm 6$ first); listing $x = 6$ as a solution does not.',
            keywords: ['only solution', 'only -5', 'only −5', '-5 only', '−5 only', 'reject', 'extraneous', 'not in the domain', 'x ≠ 6', 'x≠6', 'x ≠ ±6', 'x≠±6', 'x \\neq 6', 'x \\ne 6', 'x \\neq \\pm 6', 'x \\ne \\pm 6', 'excluded', 'undefined at x = 6', 'undefined at 6', 'hole at x = 6', 'hole at 6', 'x = 6 makes the denominator', 'denominator is 0', 'denominator is zero', 'denominator zero'],
          },
          {
            points: 1,
            description:
              '(ii) $g(x) = \\dfrac{(x - 6)(x + 4)}{(x - 6)(x + 6)} = \\dfrac{x + 4}{x + 6}$ for $x \\neq 6$, so the graph has a hole at $x = 6$ and $\\lim_{x \\to 6} g(x) = \\dfrac{10}{12} = \\dfrac{5}{6}$.',
            keywords: ['5/6', '10/12', '0.833', '0.83', '\\frac{5}{6}', '\\dfrac{5}{6}'],
          },
        ],
        sampleAnswer:
          '(i) $\\dfrac{x^2 - 2x - 24}{x^2 - 36} = -1 \\Rightarrow x^2 - 2x - 24 = -x^2 + 36 \\Rightarrow 2x^2 - 2x - 60 = 0 \\Rightarrow x^2 - x - 30 = 0 \\Rightarrow (x - 6)(x + 5) = 0$. At $x = 6$ the denominator $x^2 - 36$ is 0, so $x = 6$ is not in the domain of $g$. Check $x = -5$: $g(-5) = \\dfrac{25 + 10 - 24}{25 - 36} = \\dfrac{11}{-11} = -1$. The only solution is $x = -5$.\n\n(ii) Factoring, $g(x) = \\dfrac{(x - 6)(x + 4)}{(x - 6)(x + 6)} = \\dfrac{x + 4}{x + 6}$ for $x \\neq 6$. The graph of $g$ has a hole at $x = 6$, and the limit is the value of the reduced expression there: $\\lim_{x \\to 6} g(x) = \\dfrac{6 + 4}{6 + 6} = \\dfrac{5}{6}$.',
      },
      {
        label: 'C',
        prompt:
          '(i) Based on the table, which type of function best models $f$: linear, quadratic, exponential, or logarithmic? (ii) Use the values in the table to explain how the output values of $f$ change as the input values increase by a constant amount, and state why that pattern supports your choice in part (i).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $f$ is best modeled by a linear function.',
            keywords: ['(i) linear', 'i) linear', '(i) **linear', 'is linear', 'modeled by a linear', 'best modeled by a linear', 'fit by a linear', 'fits a linear', 'answer: linear', 'type: linear', 'linear best', 'best fit is linear', 'best fits is linear', 'linear, because', 'linear because', 'linear:'],
          },
          {
            points: 1,
            description:
              '(ii) Each time the input increases by 2, the output decreases by the same amount, 12 ($60 \\to 48 \\to 36 \\to 24 \\to 12$). A constant rate of change ($-6$ per unit of $x$) over equal-length input intervals is the defining property of a linear function.',
            keywords: ['-12', '−12', 'by 12', 'of 12', 'constant rate', 'constant amount', 'same amount', 'equal amount', 'constant difference', 'common difference', 'constant change', 'changes by the same', 'decreases by the same', 'decrease by the same', 'constant slope', '-6 per', '−6 per', 'of -6', 'of −6', 'slope of -6', 'slope of −6', 'slope is -6', 'slope is −6'],
          },
        ],
        sampleAnswer:
          '(i) Linear.\n\n(ii) The inputs increase by equal steps of 2, and the outputs decrease by the same amount each time: $48 - 60 = -12$, $36 - 48 = -12$, $24 - 36 = -12$, $12 - 24 = -12$. The average rate of change over every equal-length interval is the same, $\\dfrac{-12}{2} = -6$ per unit of $x$. A constant rate of change is the signature of a linear function.',
      },
    ],
  },

  // =========================================================================
  // Q1 Function Concepts — 4: concave-down quadratic table and a cubic
  // =========================================================================
  {
    id: 'precalc-frq-q1-4',
    lesson: ['polynomial-functions-precalc', 'function-composition-inverses-precalc', 'rates-of-change-precalc'],
    ced: ['1.5', '1.6', '2.7', '2.8', '1.3'],
    type: 'function-concepts',
    unit: 1,
    title: 'Function Concepts: A Concave-Down Table and a Cubic',
    prompt:
      'The function $f$ is increasing on the interval $0 \\leq x \\leq 4$; the table lists $f(x)$ at five inputs.\n\nThe polynomial function $g$ is given by $g(x) = x^3 - 3x^2 - 2x + 7$.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>f(x)</th><td>2</td><td>12</td><td>20</td><td>26</td><td>30</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Let $h(x) = g(f(x))$. Evaluate $h(0)$ or explain why no value exists; include the computation. (ii) Evaluate $f^{-1}(26)$ or explain why no value exists.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $h(0) = g(f(0)) = g(2) = 8 - 12 - 4 + 7 = -1$.',
            keywords: ['h(0) = -1', 'h(0)=-1', 'g(2) = -1', 'g(2)=-1', 'h(0) = −1', 'h(0)=−1', 'g(2) = −1', 'g(2)=−1', '+ 7 = -1', '+7 = -1', '+ 7 = −1', '+7=-1', '+7=−1', 'h(0) is -1', 'h(0) is −1', 'equals -1', 'equals −1', '8 - 12 - 4 + 7', '8 − 12 − 4 + 7', '8-12-4+7', '8−12−4+7'],
          },
          {
            points: 1,
            description: '(ii) $f$ is increasing, so $f^{-1}$ exists, and the table gives $f(3) = 26$, so $f^{-1}(26) = 3$.',
            keywords: ['(26) = 3', '(26)=3', '(26) is 3', 'f(3) = 26', 'f(3)=26', 'inverse of 26 is 3', 'f⁻¹(26) = 3', 'f^-1(26) = 3', 'f^{-1}(26) = 3'],
          },
        ],
        sampleAnswer:
          '(i) $h(0) = g(f(0)) = g(2) = 2^3 - 3(2)^2 - 2(2) + 7 = 8 - 12 - 4 + 7 = -1$.\n\n(ii) Because $f$ is increasing, it is one-to-one and $f^{-1}$ exists. The table gives $f(3) = 26$, so $f^{-1}(26) = 3$.',
      },
      {
        label: 'B',
        prompt:
          '(i) Determine every real value of $x$ for which $g(x) = 0$. Give decimal approximations to three places. (ii) Write a limit statement that describes the end behavior of $g$ as $x$ decreases without bound.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) Graphing $g$ gives three real zeros: $x \\approx -1.491$, $x \\approx 1.657$, and $x \\approx 2.834$. All three are required.',
            keywords: ['-1.491', '−1.491', '-1.490', '−1.490', '-1.49', '−1.49'],
          },
          {
            points: 1,
            description: '(ii) $g$ has odd degree and a positive leading coefficient, so $\\lim_{x \\to -\\infty} g(x) = -\\infty$. The limit must be written in limit notation with the correct sign.',
            keywords: ['= -∞', '= −∞', '=-∞', '=−∞', '= -\\infty', '=-\\infty', '= - \\infty', 'is -∞', 'is −∞', 'approaches -∞', 'approaches −∞', 'approaches negative infinity', 'to negative infinity', '= negative infinity', 'is negative infinity', 'g(x) → -∞', 'g(x) → −∞', 'g(x)→-∞', 'g(x)→−∞', 'g(x) -> -∞', 'g(x) -> -inf', '= -inf', '= −inf', '= -infinity', '= −infinity', 'g(x) → -infinity', 'g(x) → −infinity', 'g(x) \\to -\\infty'],
          },
        ],
        sampleAnswer:
          '(i) $x^3 - 3x^2 - 2x + 7 = 0$. Graphing $y = g(x)$ on a calculator and finding the zeros gives $x \\approx -1.491$, $x \\approx 1.657$, and $x \\approx 2.834$.\n\n(ii) The leading term $x^3$ has odd degree and a positive coefficient, so $\\lim_{x \\to -\\infty} g(x) = -\\infty$.',
      },
      {
        label: 'C',
        prompt:
          '(i) Which type of function, linear, quadratic, exponential, or logarithmic, best models $f$ on the basis of the table? (ii) Support your choice with the specific changes in the output values over consecutive equal-length input intervals in the table.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $f$ is best modeled by a quadratic function.',
            keywords: ['(i) quadratic', 'i) quadratic', '(i) **quadratic', 'is quadratic', 'modeled by a quadratic', 'best modeled by a quadratic', 'fit by a quadratic', 'fits a quadratic', 'answer: quadratic', 'type: quadratic', 'quadratic best', 'best fit is quadratic', 'quadratic, because', 'quadratic because', 'quadratic:', 'quadratic function best'],
          },
          {
            points: 1,
            description:
              '(ii) As $x$ increases by 1 each time, the outputs change by $10, 8, 6, 4$. These rates of change are not constant (so $f$ is not linear), but they decrease by the constant amount 2 each time (constant second differences), which is the signature of a quadratic function.',
            keywords: ['10, 8, 6, 4', '10,8,6,4', 'decrease by 2', 'decreases by 2', 'decreasing by 2', 'drop by 2', 'drops by 2', 'by a constant 2', 'constant 2', 'second difference', 'change by 2', 'changes by 2', 'differ by 2', 'constant second', 'changes at a constant rate', 'rate of change changes', 'rates of change decrease', 'rate of change decreases', 'rates of change are decreasing', 'differences decrease', 'differences are decreasing', 'differences decreasing', '2 less each', '2 smaller each', 'go down by 2', 'goes down by 2'],
          },
        ],
        sampleAnswer:
          '(i) Quadratic.\n\n(ii) The inputs increase by 1 each time. The outputs change by $12 - 2 = 10$, $20 - 12 = 8$, $26 - 20 = 6$, and $30 - 26 = 4$. These average rates of change over consecutive equal-length intervals are not constant, so $f$ is not linear, but each is 2 less than the previous one: the rate of change changes at a constant rate. Rates of change that change at a constant rate are the signature of a quadratic function (and because the differences are decreasing, the graph is concave down).',
      },
    ],
  },

  // =========================================================================
  // Q2 Modeling a Non-Periodic Context — 3: quadratic regression (fountain)
  // =========================================================================
  {
    id: 'precalc-frq-q2-3',
    lesson: ['function-modeling-precalc', 'rates-of-change-precalc'],
    ced: ['1.13', '1.14', '1.2'],
    type: 'non-periodic-modeling',
    unit: 1,
    title: 'Non-Periodic Modeling: A Fountain Arc (Quadratic Regression)',
    prompt:
      'Water leaves the nozzle of a decorative fountain and follows an arc before landing in a pool. The table gives the height of the stream of water, in meters, above the pool surface at selected horizontal distances $x$, in meters, from the nozzle.\n\nThe height of the water can be modeled by a quadratic function $Q$, where $Q(x)$ is the height, in meters, of the stream at horizontal distance $x$ meters from the nozzle.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>x (meters)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>height (meters)</th><td>1.0</td><td>2.2</td><td>2.9</td><td>2.9</td><td>2.0</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Use quadratic regression on all five data points to find the model $Q$. Write the model with its constants rounded to three decimal places. (ii) Use the model $Q$ to find the predicted height of the stream, in meters, at a horizontal distance of $2.5$ meters from the nozzle. Give your answer correct to three decimal places.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $Q(x) = -0.350x^2 + 1.670x + 0.960$ (all three constants are needed).',
            keywords: ['-0.35', '−0.35', '- 0.35', '− 0.35'],
          },
          {
            points: 1,
            description: '(ii) $Q(2.5) = -0.35(2.5)^2 + 1.67(2.5) + 0.96 = 2.9475 \\approx 2.948$ meters (accept 2.947 to 2.95).',
            keywords: ['2.947', '2.948', '2.95'],
          },
        ],
        sampleAnswer:
          '(i) Entering the five points and running a quadratic regression gives $Q(x) = -0.350x^2 + 1.670x + 0.960$.\n\n(ii) $Q(2.5) = -0.35(6.25) + 1.67(2.5) + 0.96 = -2.1875 + 4.175 + 0.96 = 2.9475$, so the predicted height is about $2.948$ meters.',
      },
      {
        label: 'B',
        prompt:
          '(i) Find the residual of the model $Q$ at $x = 3$, and state whether the model overestimates or underestimates the actual height at that distance. (ii) Using the data in the table, find the average rate of change of the height of the stream over the interval $0 \\leq x \\leq 2$, and interpret this value in the context of the problem. Include units.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Residual $=$ actual $-$ predicted $= 2.9 - Q(3) = 2.9 - 2.82 = 0.08$ meter. The residual is positive, so the model underestimates the actual height at $x = 3$. (Both the value and the correct direction are needed.)',
            keywords: ['underestimate', 'under-estimate', 'underpredict', 'under-predict', 'too low', 'less than the actual', 'below the actual', 'lower than the actual', 'actual height is greater', 'actual is greater', 'actual is higher', 'actual height is higher', 'actual value is greater', 'actual value is higher', 'actual is above', 'actual height is above', 'model is below', 'predicted is less', 'prediction is less', 'predicted height is less', 'predicted is lower', 'predicted height is lower'],
          },
          {
            points: 1,
            description:
              '(ii) $\\dfrac{2.9 - 1.0}{2 - 0} = 0.95$ meter of height per meter of horizontal distance: over the first 2 meters from the nozzle, the height of the stream increases, on average, by 0.95 meter for each meter of horizontal distance.',
            keywords: ['0.95 meter', '0.95 m ', '0.95 m/', '0.95 m per', '0.95 metre', 'by 0.95', 'of 0.95', '0.95 for each', '0.95 for every', '0.95 per', 'rises 0.95', 'increases 0.95', 'average, 0.95', 'average of 0.95', 'about 0.95', '0.95 units', '0.95 vertical'],
          },
        ],
        sampleAnswer:
          '(i) $Q(3) = -0.35(9) + 1.67(3) + 0.96 = -3.15 + 5.01 + 0.96 = 2.82$. Residual $= 2.9 - 2.82 = 0.08$ meter. Because the residual is positive (the actual height is greater than the predicted height), the model underestimates the height of the stream at $x = 3$.\n\n(ii) $\\dfrac{2.9 - 1.0}{2 - 0} = \\dfrac{1.9}{2} = 0.95$ meter per meter. Between the nozzle and the point 2 meters away horizontally, the height of the stream rises, on average, by 0.95 meter for each additional meter of horizontal distance.',
      },
      {
        label: 'C',
        prompt:
          'The water lands in the pool where its height is $0$ meters, and the fountain designer uses the model $Q$ only for the part of the stream between the nozzle and the pool. (i) Write and solve an equation that gives the horizontal distance $x$, in meters, at which the model predicts the water lands in the pool. Give your value for $x$ correct to three decimal places. (ii) Use your answer from part (i) to state an appropriate domain for the model $Q$ in this context, and justify the domain.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $-0.35x^2 + 1.67x + 0.96 = 0$. The quadratic formula (or the calculator) gives $x \\approx 5.290$ meters; the negative solution ($x \\approx -0.519$) is rejected because distances from the nozzle are not negative. Accept 5.28 to 5.30.',
            keywords: ['5.29', '5.28', '5.30'],
          },
          {
            points: 1,
            description:
              '(ii) The stream begins at the nozzle ($x = 0$) and ends where it lands in the pool ($x \\approx 5.290$), so an appropriate domain is $0 \\leq x \\leq 5.290$ meters; outside this interval there is no stream to model. (An upper endpoint that matches the student’s own value from part (i) earns the point.)',
            keywords: ['0 ≤ x ≤ 5.29', '0 <= x <= 5.29', '0≤x≤5.29', '0<=x<=5.29', '[0, 5.29', '[0,5.29', '0 ≤ x < 5.29', '0 < x < 5.29', '0 \\leq x \\leq 5.29', '0 \\le x \\le 5.29', '0 ≤ x ≤ 5.3', '0 <= x <= 5.3', '0≤x≤5.3', '[0, 5.3', '[0,5.3', '0 \\leq x \\leq 5.3', '0 \\le x \\le 5.3', 'from 0 to 5.29', '0 to 5.29', 'between 0 and 5.29', 'from 0 to 5.3', '0 to 5.3', 'between 0 and 5.3', '0 ≤ x ≤ 5.28', '[0, 5.28', '0 to 5.28'],
          },
        ],
        sampleAnswer:
          '(i) $-0.35x^2 + 1.67x + 0.96 = 0 \\Rightarrow x = \\dfrac{-1.67 \\pm \\sqrt{1.67^2 - 4(-0.35)(0.96)}}{2(-0.35)}$, which gives $x \\approx 5.290$ or $x \\approx -0.519$. A horizontal distance cannot be negative, so the water lands about $5.290$ meters from the nozzle.\n\n(ii) The model describes the stream only from the nozzle, at $x = 0$, to the point where the water enters the pool, at $x \\approx 5.290$. An appropriate domain is $0 \\leq x \\leq 5.290$ meters; for larger $x$ the model would give negative heights, below the pool surface, where there is no stream.',
      },
    ],
  },

  // =========================================================================
  // Q2 Modeling a Non-Periodic Context — 4: exponential regression + semi-log (air pressure)
  // =========================================================================
  {
    id: 'precalc-frq-q2-4',
    lesson: ['exponential-logarithmic-modeling-precalc', 'logarithmic-functions-precalc'],
    ced: ['2.5', '2.6', '2.15', '2.13'],
    type: 'non-periodic-modeling',
    unit: 2,
    title: 'Non-Periodic Modeling: Air Pressure and Altitude (Exponential Regression)',
    prompt:
      'A weather balloon is released at sea level ($h = 0$). As the balloon rises, the air pressure around it decreases. The table gives the air pressure, in kilopascals (kPa), at selected altitudes $h$, in kilometers, above sea level.\n\nThe air pressure can be modeled by the function $P$ given by $P(h) = a \\cdot b^h$, where $P(h)$ is the pressure, in kilopascals, at an altitude of $h$ kilometers.\n\nA graphing calculator is required for this question.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>h (kilometers)</th><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>pressure (kPa)</th><td>101.3</td><td>79.5</td><td>61.7</td><td>47.2</td><td>35.7</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Use exponential regression on all five data points to find the values of $a$ and $b$, each rounded to three decimal places. (ii) Use your model to predict the air pressure, in kilopascals, at an altitude of $5$ kilometers.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '(i) $a \\approx 102.574$ and $b \\approx 0.878$ (both values are needed).',
            keywords: ['0.878', '0.877'],
          },
          {
            points: 1,
            description: '(ii) $P(5) = 102.574(0.878)^5 \\approx 53.5$ kilopascals (accept 53.4 to 53.6).',
            keywords: ['53.5', '53.4', '53.6'],
          },
        ],
        sampleAnswer:
          '(i) Exponential regression on the five points gives $a \\approx 102.574$ and $b \\approx 0.878$, so $P(h) \\approx 102.574(0.878)^h$.\n\n(ii) $P(5) \\approx 102.574(0.878)^5 \\approx 53.5$ kilopascals.',
      },
      {
        label: 'B',
        prompt:
          '(i) Find the residual of the model at $h = 4$, and explain what the sign of the residual indicates about the model at that altitude. (ii) When the data are plotted on a semi-log plot, with $h$ on the horizontal axis and $\\ln(\\text{pressure})$ on the vertical axis, the points lie approximately on a line. Explain why this supports modeling the pressure with an exponential function.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Residual $=$ actual $-$ predicted $= 61.7 - P(4) = 61.7 - 60.96 \\approx 0.74$ kPa (accept 0.70 to 0.81, depending on rounding of $a$ and $b$). The residual is positive, so the model underestimates the actual pressure at 4 kilometers. (Both the value and the direction are needed.)',
            keywords: ['underestimate', 'under-estimate', 'underpredict', 'under-predict', 'too low', 'less than the actual', 'below the actual', 'lower than the actual', 'actual pressure is greater', 'actual is greater', 'actual is higher', 'actual pressure is higher', 'actual value is greater', 'actual value is higher', 'actual is above', 'actual pressure is above', 'model is below', 'predicted is less', 'prediction is less', 'predicted pressure is less', 'predicted is lower', 'predicted pressure is lower'],
          },
          {
            points: 1,
            description:
              '(ii) If $P = a \\cdot b^h$, then $\\ln P = \\ln a + (\\ln b)\\,h$, which is a linear function of $h$ with slope $\\ln b$ and vertical intercept $\\ln a$. So data that follow an exponential model lie on a line in a semi-log plot; the approximately linear semi-log plot therefore supports the exponential model. The explanation must connect the logarithm of an exponential expression to a linear expression in $h$ (or argue equivalently that equal steps in $h$ give equal changes in $\\ln P$, which means the pressure changes by a constant factor, the defining property of an exponential function).',
            keywords: ['ln a', 'ln(a)', 'ln b', 'ln(b)', 'log a', 'log b', 'log(a)', 'log(b)', 'linear in h', 'linear function of h', 'slope ln', 'slope of ln', 'slope is ln', 'slope log', 'h ln b', 'h ln(b)', '(ln b)h', '(ln b) h', 'ln(b) h', 'ln b · h', 'ln(b)·h', 'h·ln b', 'h log b', 'log of an exponential', 'logarithm of an exponential', 'ln of an exponential', 'ln of both sides', 'log of both sides', 'logarithm of both sides', 'ln(102', 'ln 102', 'ln(0.878', 'ln 0.878', 'constant factor', 'constant ratio', 'same factor', 'equal changes in ln', 'constant change in ln', 'ln p changes by', 'ln(p) changes by', 'log p changes by', 'multiplied by the same', 'ln p = ln a', 'ln(p) = ln(a)', 'ln p = ln(a)'],
          },
        ],
        sampleAnswer:
          '(i) $P(4) = 102.574(0.878)^4 \\approx 60.96$. Residual $= 61.7 - 60.96 \\approx 0.74$ kilopascal. The residual is positive, so the actual pressure is greater than the predicted pressure: the model underestimates the air pressure at an altitude of 4 kilometers.\n\n(ii) If the pressure follows an exponential model $P = a \\cdot b^h$, then taking the natural logarithm of both sides gives $\\ln P = \\ln a + h\\ln b$. This is a linear function of $h$ (slope $\\ln b$, intercept $\\ln a$), so the points $(h, \\ln P)$ of an exponential relationship lie on a line. Because the semi-log plot of the data is approximately linear, an exponential model is appropriate.',
      },
      {
        label: 'C',
        prompt:
          'A pilot uses the model only while the predicted pressure is at least $20$ kilopascals. (i) Write and solve an equation whose solution is the altitude $h$, in kilometers, at which the model predicts a pressure of $20$ kilopascals. Express your value for $h$ as a decimal approximation. (ii) Explain how your answer from part (i) determines an appropriate domain for the model in this context, and state that domain.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $102.574(0.878)^h = 20$, so $h = \\dfrac{\\ln(20/102.574)}{\\ln 0.878} \\approx 12.57$ kilometers (accept 12.5 to 12.6; the unrounded regression values give 12.54).',
            keywords: ['12.5', '12.6'],
          },
          {
            points: 1,
            description:
              '(ii) The pressure decreases as the altitude increases, so the predicted pressure is at least 20 kPa only from sea level up to $h \\approx 12.57$. An appropriate domain is $0 \\leq h \\leq 12.57$ kilometers (an upper endpoint matching the student’s own value from part (i) earns the point).',
            keywords: ['0 ≤ h ≤ 12.5', '0 <= h <= 12.5', '0≤h≤12.5', '0<=h<=12.5', '[0, 12.5', '[0,12.5', '0 ≤ h < 12.5', '0 < h < 12.5', '0 \\leq h \\leq 12.5', '0 \\le h \\le 12.5', '0 ≤ h ≤ 12.6', '0 <= h <= 12.6', '0≤h≤12.6', '0<=h<=12.6', '[0, 12.6', '[0,12.6', '0 ≤ h < 12.6', '0 \\leq h \\leq 12.6', '0 \\le h \\le 12.6', '0 to 12.5', '0 to 12.6', 'between 0 and 12.5', 'between 0 and 12.6', 'from sea level to 12.5', 'from sea level to 12.6', 'sea level up to 12.5', 'sea level up to 12.6'],
          },
        ],
        sampleAnswer:
          '(i) $102.574(0.878)^h = 20 \\Rightarrow (0.878)^h = \\dfrac{20}{102.574} \\Rightarrow h = \\dfrac{\\ln(20/102.574)}{\\ln 0.878} \\approx 12.57$ kilometers.\n\n(ii) Because $0 < b < 1$, the model is decreasing: the predicted pressure is at least 20 kilopascals only for altitudes up to $h \\approx 12.57$. The data begin at sea level, $h = 0$, so an appropriate domain for the model is $0 \\leq h \\leq 12.57$ kilometers.',
      },
    ],
  },

  // =========================================================================
  // Q3 Modeling a Periodic Context — 3: hours of daylight
  // =========================================================================
  {
    id: 'precalc-frq-q3-3',
    lesson: ['graphing-trig-functions'],
    ced: ['3.5', '3.6', '3.7'],
    // Rendered above the prompt (dataTableHtml path, page.tsx): the graph Part A reads from.
    dataTableHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 290" role="img" aria-label="L(t) (hours of daylight) versus t (months after December 21): one sinusoidal graph with its dashed midline and the labeled points F, G, J, K, P" style="width:100%;max-width:560px;height:auto;display:block;margin:0 auto;font-family:inherit"><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="56" y="272" font-size="11" text-anchor="middle" fill="currentColor">0</text><line x1="111" y1="24" x2="111" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="111" y="272" font-size="11" text-anchor="middle" fill="currentColor">3</text><line x1="166" y1="24" x2="166" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="166" y="272" font-size="11" text-anchor="middle" fill="currentColor">6</text><line x1="221" y1="24" x2="221" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="221" y="272" font-size="11" text-anchor="middle" fill="currentColor">9</text><line x1="276" y1="24" x2="276" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="276" y="272" font-size="11" text-anchor="middle" fill="currentColor">12</text><line x1="331" y1="24" x2="331" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="331" y="272" font-size="11" text-anchor="middle" fill="currentColor">15</text><line x1="386" y1="24" x2="386" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="386" y="272" font-size="11" text-anchor="middle" fill="currentColor">18</text><line x1="441" y1="24" x2="441" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="441" y="272" font-size="11" text-anchor="middle" fill="currentColor">21</text><line x1="496" y1="24" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="496" y="272" font-size="11" text-anchor="middle" fill="currentColor">24</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="260" font-size="11" text-anchor="end" fill="currentColor">6</text><line x1="56" y1="217.3" x2="496" y2="217.3" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="221.3" font-size="11" text-anchor="end" fill="currentColor">8</text><line x1="56" y1="178.7" x2="496" y2="178.7" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="182.7" font-size="11" text-anchor="end" fill="currentColor">10</text><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="144" font-size="11" text-anchor="end" fill="currentColor">12</text><line x1="56" y1="101.3" x2="496" y2="101.3" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="105.3" font-size="11" text-anchor="end" fill="currentColor">14</text><line x1="56" y1="62.7" x2="496" y2="62.7" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="66.7" font-size="11" text-anchor="end" fill="currentColor">16</text><line x1="56" y1="24" x2="496" y2="24" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="28" font-size="11" text-anchor="end" fill="currentColor">18</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><path d="M56 198 L58.8 197.8 L61.5 197.3 L64.2 196.4 L67 195.2 L69.8 193.6 L72.5 191.7 L75.2 189.5 L78 186.9 L80.8 184.1 L83.5 181 L86.2 177.7 L89 174.1 L91.8 170.3 L94.5 166.3 L97.2 162.2 L100 157.9 L102.8 153.5 L105.5 149.1 L108.2 144.6 L111 140 L113.8 135.4 L116.5 130.9 L119.2 126.5 L122 122.1 L124.8 117.8 L127.5 113.7 L130.2 109.7 L133 105.9 L135.8 102.3 L138.5 99 L141.2 95.9 L144 93.1 L146.8 90.5 L149.5 88.3 L152.2 86.4 L155 84.8 L157.8 83.6 L160.5 82.7 L163.2 82.2 L166 82 L168.8 82.2 L171.5 82.7 L174.2 83.6 L177 84.8 L179.8 86.4 L182.5 88.3 L185.2 90.5 L188 93.1 L190.8 95.9 L193.5 99 L196.2 102.3 L199 105.9 L201.8 109.7 L204.5 113.7 L207.2 117.8 L210 122.1 L212.8 126.5 L215.5 130.9 L218.2 135.4 L221 140 L223.8 144.6 L226.5 149.1 L229.2 153.5 L232 157.9 L234.8 162.2 L237.5 166.3 L240.2 170.3 L243 174.1 L245.8 177.7 L248.5 181 L251.2 184.1 L254 186.9 L256.8 189.5 L259.5 191.7 L262.2 193.6 L265 195.2 L267.8 196.4 L270.5 197.3 L273.2 197.8 L276 198 L278.8 197.8 L281.5 197.3 L284.2 196.4 L287 195.2 L289.8 193.6 L292.5 191.7 L295.2 189.5 L298 186.9 L300.8 184.1 L303.5 181 L306.2 177.7 L309 174.1 L311.8 170.3 L314.5 166.3 L317.2 162.2 L320 157.9 L322.8 153.5 L325.5 149.1 L328.2 144.6 L331 140 L333.8 135.4 L336.5 130.9 L339.2 126.5 L342 122.1 L344.8 117.8 L347.5 113.7 L350.2 109.7 L353 105.9 L355.8 102.3 L358.5 99 L361.2 95.9 L364 93.1 L366.8 90.5 L369.5 88.3 L372.2 86.4 L375 84.8 L377.8 83.6 L380.5 82.7 L383.3 82.2 L386 82 L388.7 82.2 L391.5 82.7 L394.2 83.6 L397 84.8 L399.8 86.4 L402.5 88.3 L405.2 90.5 L408 93.1 L410.8 95.9 L413.5 99 L416.2 102.3 L419 105.9 L421.8 109.7 L424.5 113.7 L427.2 117.8 L430 122.1 L432.8 126.5 L435.5 130.9 L438.2 135.4 L441 140 L443.8 144.6 L446.5 149.1 L449.2 153.5 L452 157.9 L454.8 162.2 L457.5 166.3 L460.2 170.3 L463 174.1 L465.8 177.7 L468.5 181 L471.2 184.1 L474 186.9 L476.8 189.5 L479.5 191.7 L482.2 193.6 L485 195.2 L487.8 196.4 L490.5 197.3 L493.2 197.8 L496 198" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="56" cy="198" r="4" fill="currentColor"/><text x="62" y="216" font-size="13" font-weight="700" font-style="italic" fill="currentColor">F</text><circle cx="111" cy="140" r="4" fill="currentColor"/><text x="97" y="132" font-size="13" font-weight="700" font-style="italic" fill="currentColor">G</text><circle cx="166" cy="82" r="4" fill="currentColor"/><text x="162" y="72" font-size="13" font-weight="700" font-style="italic" fill="currentColor">J</text><circle cx="221" cy="140" r="4" fill="currentColor"/><text x="229" y="156" font-size="13" font-weight="700" font-style="italic" fill="currentColor">K</text><circle cx="276" cy="198" r="4" fill="currentColor"/><text x="272" y="216" font-size="13" font-weight="700" font-style="italic" fill="currentColor">P</text><text x="276" y="284" font-size="12" text-anchor="middle" fill="currentColor">t (months after December 21)</text><text x="14" y="140" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 140)">L(t) (hours)</text></svg>',
    type: 'periodic-modeling',
    unit: 3,
    title: 'Periodic Modeling: Hours of Daylight',
    prompt:
      'In a certain city, the number of hours of daylight varies with the time of year. The daylight is shortest, 9 hours, on December 21 ($t = 0$) and longest, 15 hours, six months later on June 21 ($t = 6$), and the pattern repeats every 12 months.\n\nThe sinusoidal function $L$ models the number of hours of daylight as a function of $t$, the number of months after December 21.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The figure above shows the graph of $L$ and its dashed midline for two full years, $0 \\leq t \\leq 24$. Five points are labeled. In order from left to right, $F$ is the point at $t = 0$, $G$ is the first point at which the graph meets the midline, $J$ is the first maximum, $K$ is the second point at which the graph meets the midline, and $P$ is the first minimum after $t = 0$. Give the coordinates $(t, L(t))$ of each of the five points.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$L(t)$-coordinates: $F$: 9, $G$: 12, $J$: 15, $K$: 12, $P$: 9 (the midline is $\\frac{9 + 15}{2} = 12$).',
            keywords: [', 15)', ',15)', 'j: 15', 'j = 15', 'j is 15', 'j = (6, 15)', 'j(6', 'l(6) = 15', 'maximum is 15', 'maximum of 15', 'max is 15', 'max of 15'],
          },
          {
            points: 1,
            description: '$t$-coordinates: $F = (0, 9)$, $G = (3, 12)$, $J = (6, 15)$, $K = (9, 12)$, $P = (12, 9)$ (the points are a quarter period, 3 months, apart).',
            keywords: ['(12, 9)', '(12,9)', 'p = (12', 'p: (12', 'p(12', 'p = 12', 'p is 12'],
          },
        ],
        sampleAnswer:
          'The midline is $\\frac{9 + 15}{2} = 12$ hours, and successive key points are a quarter period, $12/4 = 3$ months, apart.\n\n$F = (0, 9)$, $G = (3, 12)$, $J = (6, 15)$, $K = (9, 12)$, $P = (12, 9)$.',
      },
      {
        label: 'B',
        prompt:
          'Write an equation for $L(t)$ of the form $L(t) = a\\sin(b(t + c)) + d$, where $a$, $b$, $c$, and $d$ are constants, and give the value of each constant.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Vertical transformations: amplitude $a = \\frac{15 - 9}{2} = 3$ and midline $d = 12$.',
            keywords: ['d = 12', 'd=12', ') + 12', ')+12', 'd is 12', 'midline d', '+ 12$', '+12$'],
          },
          {
            points: 1,
            description:
              'Horizontal transformations: period 12 gives $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$. The graph crosses the midline going up at $t = 3$, so $c = -3$: $L(t) = 3\\sin\\left(\\frac{\\pi}{6}(t - 3)\\right) + 12$. Other correct forms earn the point (for example $c = 9$ or any $c = -3 + 12n$, or $a = -3$ with $c = 3 + 12n$).',
            keywords: ['(t − 3)', '(t - 3)', '(t-3)', '(t−3)', 'c = −3', 'c = -3', 'c=-3', 'c=−3', 'c = 9', 'c=9', '(t + 9)', '(t+9)', '-3 sin', '−3 sin', '-3sin', '−3sin', 'a = -3', 'a = −3', 'a=-3', 'a=−3', '-3\\sin', '−3\\sin', '(t - 3 )'],
          },
        ],
        sampleAnswer:
          '$a = 3$ (the amplitude, $\\frac{15 - 9}{2}$) and $d = 12$ (the midline).\n\nThe period is 12 months, so $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$.\n\nA sine function with $a > 0$ starts a cycle at its midline going up. The graph does that at $G$, $t = 3$, so the graph is shifted right 3 and $c = -3$.\n\n$L(t) = 3\\sin\\left(\\frac{\\pi}{6}(t - 3)\\right) + 12$. Check: $L(0) = 3\\sin\\left(-\\frac{\\pi}{2}\\right) + 12 = 9$.',
      },
      {
        label: 'C',
        prompt:
          'Let $t_1 = 0$ and let $t_2$ be the $t$-coordinate of $G$. (i) Which of the following describes $L$ on the interval $(t_1, t_2)$? (a) $L$ is decreasing and below its midline. (b) $L$ is increasing and below its midline. (c) $L$ is decreasing and above its midline. (d) $L$ is increasing and above its midline. (ii) On the same interval, is the graph of $L$ concave up or concave down, and is the rate of change of $L$ increasing or decreasing? Explain your reasoning in terms of the daylight.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) Choice (b): from $F = (0, 9)$ to $G = (3, 12)$ the daylight grows from its minimum toward the midline value, so $L$ is increasing and below its midline.',
            keywords: ['increasing and below', 'increasing, below', 'increasing and is below', 'below its midline and increasing', 'below the midline and increasing', 'choice (b)', 'choice b', 'option (b)', 'option b', 'answer (b)', 'answer: (b)', 'answer is (b)', '(i) (b)', 'i) (b)', '(i): (b)', '(i) b', 'is (b)', 'increasing and lies below', 'increasing; below'],
          },
          {
            points: 1,
            description:
              '(ii) The graph of $L$ is concave up on $(t_1, t_2)$, and the rate of change of $L$ is increasing: right after the shortest day the daylight grows slowly, and it grows faster each month, fastest at $G$ (the midline crossing). Both the concavity and the behavior of the rate of change, with the explanation in context, are needed.',
            keywords: ['rate of change of l is increasing', 'rate of change is increasing', 'rate of change increases', 'rate of change of l increases', 'increasing rate of change', 'rate of change gets larger', 'rate of change is getting larger', 'rate of change gets bigger', 'faster and faster', 'faster each month', 'faster every month', 'gains get larger', 'increases faster', 'grows faster', 'rate is increasing', 'rate increases', 'rate of change goes up', 'rate of change grows', 'more quickly', 'more rapidly', 'speeds up', 'speeding up', 'accelerat', 'rate of change becomes larger', 'rate of change becomes greater', 'rate of change is greater'],
          },
        ],
        sampleAnswer:
          '(i) (b). Between $F = (0, 9)$ and $G = (3, 12)$ the number of hours of daylight increases from the yearly minimum toward the midline value, so $L$ is increasing and below its midline.\n\n(ii) The graph is concave up on $(0, 3)$. Just after the shortest day, the daylight increases only a little from month to month; the monthly gains get larger, and the daylight is increasing fastest at $G$. So the rate of change of $L$ is increasing on this interval.',
      },
    ],
  },

  // =========================================================================
  // Q3 Modeling a Periodic Context — 4: a weight bouncing on a spring (cosine form)
  // =========================================================================
  {
    id: 'precalc-frq-q3-4',
    lesson: ['graphing-trig-functions'],
    ced: ['3.5', '3.6', '3.7'],
    // Rendered above the prompt (dataTableHtml path, page.tsx): the graph Part A reads from.
    dataTableHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 290" role="img" aria-label="y(t) (centimeters) versus t (seconds): one sinusoidal graph with its dashed midline and the labeled points F, G, J, K, P" style="width:100%;max-width:560px;height:auto;display:block;margin:0 auto;font-family:inherit"><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="56" y="272" font-size="11" text-anchor="middle" fill="currentColor">0</text><line x1="111" y1="24" x2="111" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="111" y="272" font-size="11" text-anchor="middle" fill="currentColor">0.5</text><line x1="166" y1="24" x2="166" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="166" y="272" font-size="11" text-anchor="middle" fill="currentColor">1</text><line x1="221" y1="24" x2="221" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="221" y="272" font-size="11" text-anchor="middle" fill="currentColor">1.5</text><line x1="276" y1="24" x2="276" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="276" y="272" font-size="11" text-anchor="middle" fill="currentColor">2</text><line x1="331" y1="24" x2="331" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="331" y="272" font-size="11" text-anchor="middle" fill="currentColor">2.5</text><line x1="386" y1="24" x2="386" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="386" y="272" font-size="11" text-anchor="middle" fill="currentColor">3</text><line x1="441" y1="24" x2="441" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="441" y="272" font-size="11" text-anchor="middle" fill="currentColor">3.5</text><line x1="496" y1="24" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="496" y="272" font-size="11" text-anchor="middle" fill="currentColor">4</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="260" font-size="11" text-anchor="end" fill="currentColor">20</text><line x1="56" y1="198" x2="496" y2="198" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="202" font-size="11" text-anchor="end" fill="currentColor">30</text><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="144" font-size="11" text-anchor="end" fill="currentColor">40</text><line x1="56" y1="82" x2="496" y2="82" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="86" font-size="11" text-anchor="end" fill="currentColor">50</text><line x1="56" y1="24" x2="496" y2="24" stroke="currentColor" stroke-opacity="0.12"/><text x="50" y="28" font-size="11" text-anchor="end" fill="currentColor">60</text><line x1="56" y1="256" x2="496" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="24" x2="56" y2="256" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="496" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><path d="M56 140 L58.8 145.5 L61.5 150.9 L64.2 156.2 L67 161.5 L69.8 166.6 L72.5 171.6 L75.2 176.4 L78 180.9 L80.8 185.2 L83.5 189.2 L86.2 192.9 L89 196.3 L91.8 199.3 L94.5 202 L97.2 204.3 L100 206.2 L102.8 207.7 L105.5 208.7 L108.2 209.4 L111 209.6 L113.8 209.4 L116.5 208.7 L119.2 207.7 L122 206.2 L124.8 204.3 L127.5 202 L130.2 199.3 L133 196.3 L135.8 192.9 L138.5 189.2 L141.2 185.2 L144 180.9 L146.8 176.4 L149.5 171.6 L152.2 166.6 L155 161.5 L157.8 156.2 L160.5 150.9 L163.2 145.5 L166 140 L168.8 134.5 L171.5 129.1 L174.2 123.8 L177 118.5 L179.8 113.4 L182.5 108.4 L185.2 103.6 L188 99.1 L190.8 94.8 L193.5 90.8 L196.2 87.1 L199 83.7 L201.8 80.7 L204.5 78 L207.2 75.7 L210 73.8 L212.8 72.3 L215.5 71.3 L218.2 70.6 L221 70.4 L223.8 70.6 L226.5 71.3 L229.2 72.3 L232 73.8 L234.8 75.7 L237.5 78 L240.2 80.7 L243 83.7 L245.8 87.1 L248.5 90.8 L251.2 94.8 L254 99.1 L256.8 103.6 L259.5 108.4 L262.2 113.4 L265 118.5 L267.8 123.8 L270.5 129.1 L273.2 134.5 L276 140 L278.8 145.5 L281.5 150.9 L284.2 156.2 L287 161.5 L289.8 166.6 L292.5 171.6 L295.2 176.4 L298 180.9 L300.8 185.2 L303.5 189.2 L306.2 192.9 L309 196.3 L311.8 199.3 L314.5 202 L317.2 204.3 L320 206.2 L322.8 207.7 L325.5 208.7 L328.2 209.4 L331 209.6 L333.8 209.4 L336.5 208.7 L339.2 207.7 L342 206.2 L344.8 204.3 L347.5 202 L350.2 199.3 L353 196.3 L355.8 192.9 L358.5 189.2 L361.2 185.2 L364 180.9 L366.8 176.4 L369.5 171.6 L372.2 166.6 L375 161.5 L377.8 156.2 L380.5 150.9 L383.2 145.5 L386 140 L388.8 134.5 L391.5 129.1 L394.2 123.8 L397 118.5 L399.8 113.4 L402.5 108.4 L405.2 103.6 L408 99.1 L410.8 94.8 L413.5 90.8 L416.2 87.1 L419 83.7 L421.8 80.7 L424.5 78 L427.2 75.7 L430 73.8 L432.8 72.3 L435.5 71.3 L438.2 70.6 L441 70.4 L443.8 70.6 L446.5 71.3 L449.2 72.3 L452 73.8 L454.8 75.7 L457.5 78 L460.2 80.7 L463 83.7 L465.8 87.1 L468.5 90.8 L471.2 94.8 L474 99.1 L476.8 103.6 L479.5 108.4 L482.2 113.4 L485 118.5 L487.8 123.8 L490.5 129.1 L493.2 134.5 L496 140" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="56" cy="140" r="4" fill="currentColor"/><text x="62" y="132" font-size="13" font-weight="700" font-style="italic" fill="currentColor">F</text><circle cx="111" cy="209.6" r="4" fill="currentColor"/><text x="107" y="227.6" font-size="13" font-weight="700" font-style="italic" fill="currentColor">G</text><circle cx="166" cy="140" r="4" fill="currentColor"/><text x="152" y="156" font-size="13" font-weight="700" font-style="italic" fill="currentColor">J</text><circle cx="221" cy="70.4" r="4" fill="currentColor"/><text x="217" y="60.4" font-size="13" font-weight="700" font-style="italic" fill="currentColor">K</text><circle cx="276" cy="140" r="4" fill="currentColor"/><text x="284" y="132" font-size="13" font-weight="700" font-style="italic" fill="currentColor">P</text><text x="276" y="284" font-size="12" text-anchor="middle" fill="currentColor">t (seconds)</text><text x="14" y="140" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 140)">y(t) (centimeters)</text></svg>',
    type: 'periodic-modeling',
    unit: 3,
    title: 'Periodic Modeling: A Weight on a Spring',
    prompt:
      'A weight hangs from a spring above a table. The weight is pulled and released so that it bounces up and down. At time $t = 0$ seconds the weight is at its resting height, 40 centimeters above the table, and is moving downward. It reaches its lowest height, 28 centimeters above the table, at $t = 0.5$ second, and one complete up-and-down cycle takes 2 seconds.\n\nThe sinusoidal function $y$ models the height of the weight above the table, in centimeters, at time $t$ seconds.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The figure above shows the graph of $y$ and its dashed midline for two complete cycles, $0 \\leq t \\leq 4$. The labeled points, from left to right, are $F$ at $t = 0$, $G$ the first minimum, $J$ the next point on the midline, $K$ the first maximum, and $P$ the next point on the midline. Find the coordinates $(t, y(t))$ of $F$, $G$, $J$, $K$, and $P$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$y$-coordinates: $F$: 40, $G$: 28, $J$: 40, $K$: 52, $P$: 40 (the midline is the resting height 40, the amplitude is $40 - 28 = 12$, so the maximum is $40 + 12 = 52$).',
            keywords: ['= 52', '(1.5, 52)', '(1.5,52)', 'k: 52', 'k = 52', 'k is 52', 'maximum is 52', 'maximum of 52', 'max is 52', 'max of 52', '52 cm', '52 centimeters', ', 52)', 'highest height is 52', 'high point is 52', '40 + 12 = 52'],
          },
          {
            points: 1,
            description: '$t$-coordinates: $F = (0, 40)$, $G = (0.5, 28)$, $J = (1, 40)$, $K = (1.5, 52)$, $P = (2, 40)$ (the points are a quarter period, 0.5 second, apart).',
            keywords: ['(0.5, 28)', '(0.5,28)', '(1.5, 52)', '(1.5,52)', '(.5, 28)', '(.5,28)', '(1/2, 28)', '(3/2, 52)'],
          },
        ],
        sampleAnswer:
          'The midline is the resting height, 40 cm. The amplitude is $40 - 28 = 12$, so the maximum height is $40 + 12 = 52$ cm. Successive key points are a quarter period, $2/4 = 0.5$ second, apart.\n\n$F = (0, 40)$, $G = (0.5, 28)$, $J = (1, 40)$, $K = (1.5, 52)$, $P = (2, 40)$.',
      },
      {
        label: 'B',
        prompt:
          'Determine values of the constants $a$, $b$, $c$, and $d$ so that $y(t) = a\\cos(b(t + c)) + d$ for $0 \\leq t \\leq 4$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Vertical transformations: amplitude $|a| = 12$ (so $a = 12$, or $a = -12$ paired with a consistent $c$) and midline $d = 40$.',
            keywords: ['a = 12', 'a=12', 'a = -12', 'a=-12', 'a = −12', 'a=−12', '|a| = 12'],
          },
          {
            points: 1,
            description:
              'Horizontal transformations: period 2 gives $b = \\frac{2\\pi}{2} = \\pi$. A cosine function with $a > 0$ is at its maximum when $t + c = 0$; the maximum $K$ is at $t = 1.5$, so $c = -1.5$: $y(t) = 12\\cos(\\pi(t - 1.5)) + 40$. Equivalent forms earn the point (for example $c = 0.5$ or any $c = -1.5 + 2n$ with $a = 12$; or $a = -12$ with $c = -0.5 + 2n$, which puts the minimum at $t = 0.5$).',
            keywords: ['(t − 1.5)', '(t - 1.5)', '(t-1.5)', '(t−1.5)', 'c = −1.5', 'c = -1.5', 'c=-1.5', 'c=−1.5', 'c = 0.5', 'c=0.5', '(t + 0.5)', '(t+0.5)', '(t + .5)', '(t − 3/2)', '(t - 3/2)', 'c = −3/2', 'c = -3/2', 'c = 1/2', '(t + 1/2)', '-12 cos', '−12 cos', '-12cos', '−12cos', 'a = -12', 'a = −12', 'a=-12', 'a=−12', '-12\\cos', '−12\\cos'],
          },
        ],
        sampleAnswer:
          '$|a| = 12$ (the amplitude, $\\frac{52 - 28}{2}$) and $d = 40$ (the midline).\n\nThe period is 2 seconds, so $b = \\frac{2\\pi}{2} = \\pi$.\n\nA cosine function with $a > 0$ is at its maximum at the start of a cycle, when $t + c = 0$. The maximum $K$ occurs at $t = 1.5$, so $c = -1.5$ (a shift right 1.5).\n\n$y(t) = 12\\cos(\\pi(t - 1.5)) + 40$. Check: $y(0) = 12\\cos(-1.5\\pi) + 40 = 40$ and $y(0.5) = 12\\cos(-\\pi) + 40 = 28$. (Equivalently, $y(t) = -12\\cos(\\pi(t - 0.5)) + 40$.)',
      },
      {
        label: 'C',
        prompt:
          'Consider the interval from the $t$-coordinate of $J$ to the $t$-coordinate of $K$. (i) State whether $y$ is increasing or decreasing on this interval and whether the graph lies above or below the midline there. (ii) Is the graph of $y$ concave up or concave down on this interval? Use your answer to describe how the rate of change of $y$ behaves as the weight moves from $J$ to $K$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) From $J = (1, 40)$ to $K = (1.5, 52)$ the weight rises from its resting height to its highest point, so $y$ is increasing and the graph is above its midline.',
            keywords: ['increasing and above', 'increasing, above', 'increasing; above', 'increasing and lies above', 'increasing and is above', 'increasing and the graph is above', 'increasing and it is above', 'increasing, and the graph is above', 'increasing, and the graph lies above', 'increasing. the graph lies above', 'increasing. the graph is above', 'increasing, rising', 'increasing (rising', 'rising from 40 to 52', 'rises from 40 to 52', 'from 40 to 52', 'from 40 up to 52', 'from the midline to the maximum', 'from the midline up to the maximum', 'from resting height to', 'from its resting height to', 'resting height to its highest', 'resting height up to', 'above its midline and increasing', 'above the midline and increasing', 'increasing and remains above', 'increasing and stays above'],
          },
          {
            points: 1,
            description:
              '(ii) The graph of $y$ is concave down on $(1, 1.5)$, so the rate of change of $y$ is decreasing: the weight is moving upward fastest as it passes its resting height at $J$ and slows to a momentary stop at the top, $K$. Both the concavity and the behavior of the rate of change, with the explanation in terms of the motion, are needed.',
            keywords: ['rate of change of y is decreasing', 'rate of change is decreasing', 'rate of change decreases', 'rate of change of y decreases', 'decreasing rate of change', 'rate of change gets smaller', 'rate of change is getting smaller', 'slowing down', 'slows down', 'slows as', 'slows to', 'slowing', 'rate is decreasing', 'rate decreases', 'rate of change goes down', 'rate of change drops', 'rate of change falls', 'more slowly', 'decelerat', 'rises more slowly', 'rate of change becomes smaller', 'rate of change shrinks', 'rate of change is smaller'],
          },
        ],
        sampleAnswer:
          '(i) Between $J = (1, 40)$ and $K = (1.5, 52)$ the weight moves up from its resting height to its highest point, so $y$ is increasing and the graph is above the midline.\n\n(ii) The graph is concave down on $(1, 1.5)$. The weight passes its resting height at $J$ moving upward at its greatest speed, then slows as it approaches the top and stops momentarily at $K$. So the rate of change of $y$ decreases from its largest value to 0 on this interval.',
      },
    ],
  },

  // =========================================================================
  // Q4 Symbolic Manipulations — 3
  // =========================================================================
  {
    id: 'precalc-frq-q4-3',
    lesson: ['exponential-functions-precalc', 'trigonometric-identities-precalc', 'solving-trig-equations', 'logarithmic-functions-precalc'],
    ced: ['2.4', '3.12', '3.10', '2.13'],
    type: 'symbolic-manipulations',
    unit: 3,
    title: 'Symbolic Manipulations: Exponent Rules, a Double Angle, and a Tangent Equation',
    prompt:
      'All angle measures are in radians, and solutions to equations must be real numbers. Where an exact value can be found without a calculator, give the exact value. Use the properties of exponents and logarithms to combine terms, and show the work leading to each answer.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The functions $g$ and $k$ are given by $g(x) = \\dfrac{4^{x + 1} \\cdot 2^{-x}}{8}$ and $k(x) = \\dfrac{1 + \\cos(2x)}{\\cos x}$. (i) Rewrite $g(x)$ in the form $g(x) = p \\cdot q^x$, where $p$ and $q$ are constants. (ii) Simplify $k(x)$ to an expression containing a single trigonometric term, $\\cos x$, and no other trigonometric functions.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $g(x) = \\dfrac{2^{2x + 2} \\cdot 2^{-x}}{2^3} = 2^{x - 1} = \\dfrac{1}{2} \\cdot 2^x$, so $p = \\frac{1}{2}$ and $q = 2$. The point requires the form $p \\cdot q^x$; $2^{x - 1}$ alone does not earn it.',
            keywords: ['(1/2)2^x', '(1/2)·2^x', '(1/2) 2^x', '(1/2)(2)^x', '(1/2)(2^x)', '(1/2) · 2^x', '(1/2) * 2^x', '0.5(2)^x', '0.5·2^x', '0.5 · 2^x', '0.5 * 2^x', '0.5(2^x)', '0.5*2^x', '0.5 (2)^x', '2^x/2', '(2^x)/2', 'p = 1/2', 'p=1/2', 'p = 0.5', 'p=0.5', '\\frac{1}{2}\\cdot 2^x', '\\frac{1}{2} \\cdot 2^x', '\\frac{1}{2}(2)^x', '\\frac{1}{2}2^x', '\\frac{1}{2}(2^x)', '\\tfrac{1}{2}', '\\frac{2^x}{2}', '\\dfrac{2^x}{2}', '\\dfrac{1}{2}\\cdot 2^x', '\\dfrac{1}{2} \\cdot 2^x', '\\dfrac{1}{2}(2)^x', '\\dfrac{1}{2}2^x', '(1/2)(2)ˣ', '½(2)^x', '½ · 2^x', '½·2^x'],
          },
          {
            points: 1,
            description:
              '(ii) $1 + \\cos(2x) = 2\\cos^2 x$, so $k(x) = \\dfrac{2\\cos^2 x}{\\cos x} = 2\\cos x$, where $\\cos x \\neq 0$.',
            keywords: ['2cos x', '2 cos x', '2cos(x)', '2 cos(x)', '2cosx', '2\\cos x', '2\\cos(x)', '2 \\cos x', '2 \\cos(x)', 'k(x) = 2cos', 'k(x)=2cos', '2·cos x', '2 · cos x', '2 cos x'],
          },
        ],
        sampleAnswer:
          '(i) $4^{x + 1} = 2^{2x + 2}$ and $8 = 2^3$, so $g(x) = \\dfrac{2^{2x + 2} \\cdot 2^{-x}}{2^3} = 2^{2x + 2 - x - 3} = 2^{x - 1} = 2^{-1} \\cdot 2^x = \\dfrac{1}{2} \\cdot 2^x$. So $p = \\dfrac{1}{2}$ and $q = 2$.\n\n(ii) By the double-angle identity $\\cos(2x) = 2\\cos^2 x - 1$, the numerator is $1 + 2\\cos^2 x - 1 = 2\\cos^2 x$. Then $k(x) = \\dfrac{2\\cos^2 x}{\\cos x} = 2\\cos x$, wherever $\\cos x \\neq 0$.',
      },
      {
        label: 'B',
        prompt:
          'The functions $j$ and $q$ are given by $j(\\theta) = \\cos(2\\theta) + \\sin\\theta$ and $q(x) = \\log_2(x + 2) - \\log_2(x - 1)$. (i) Find all values of $\\theta$ in the interval $[0, 2\\pi)$ for which $j(\\theta) = 0$. (ii) Find all values of $x$ in the domain of $q$ for which $q(x) = 2$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$, so $1 - 2\\sin^2\\theta + \\sin\\theta = 0$, that is $2\\sin^2\\theta - \\sin\\theta - 1 = (2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$. $\\sin\\theta = -\\frac{1}{2}$ gives $\\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$ and $\\sin\\theta = 1$ gives $\\theta = \\frac{\\pi}{2}$. All three solutions are required.',
            keywords: ['π/2', 'pi/2', '\\frac{\\pi}{2}', '\\dfrac{\\pi}{2}', '\\pi/2', 'π⁄2', 'θ = π/2', 'theta = pi/2'],
          },
          {
            points: 1,
            description:
              '(ii) $\\log_2\\left(\\dfrac{x + 2}{x - 1}\\right) = 2$, so $\\dfrac{x + 2}{x - 1} = 4$, $x + 2 = 4x - 4$, and $x = 2$. The domain of $q$ is $x > 1$, so $x = 2$ is the solution.',
            keywords: ['so x = 2', 'x = 2.', 'x = 2,', 'x = 2;', 'x = 2$', 'x = 2 ', 'x = 2)', 'x = 2 (', 'x=2$', 'x=2 ', 'x=2.', 'x=2,', 'x=2;', 'x=2)', 'solution is x = 2', 'solution is 2', 'x = 2 is', 'only solution x = 2'],
          },
        ],
        sampleAnswer:
          '(i) Using $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$: $1 - 2\\sin^2\\theta + \\sin\\theta = 0 \\Rightarrow 2\\sin^2\\theta - \\sin\\theta - 1 = 0 \\Rightarrow (2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$. So $\\sin\\theta = -\\frac{1}{2}$, giving $\\theta = \\frac{7\\pi}{6}$ or $\\frac{11\\pi}{6}$, or $\\sin\\theta = 1$, giving $\\theta = \\frac{\\pi}{2}$. Solutions: $\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.\n\n(ii) The domain of $q$ requires $x + 2 > 0$ and $x - 1 > 0$, so $x > 1$. $\\log_2(x + 2) - \\log_2(x - 1) = \\log_2\\left(\\dfrac{x + 2}{x - 1}\\right) = 2 \\Rightarrow \\dfrac{x + 2}{x - 1} = 4 \\Rightarrow x + 2 = 4x - 4 \\Rightarrow x = 2$. Since $2 > 1$, the solution is $x = 2$. Check: $\\log_2 4 - \\log_2 1 = 2 - 0 = 2$.',
      },
      {
        label: 'C',
        prompt: 'The function $m$ is given by $m(x) = \\tan(2x) + 1$. Find all values of $x$ in the domain of $m$ for which $m(x) = 0$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Solution in one period: $\\tan(2x) = -1$ gives $2x = \\frac{3\\pi}{4}$ (or $-\\frac{\\pi}{4}$) in one period of the tangent, so $x = \\frac{3\\pi}{8}$ (or $-\\frac{\\pi}{8}$).',
            keywords: ['3π/8', '3pi/8', '3 pi/8', '3π / 8', '\\frac{3\\pi}{8}', '3\\pi/8', '\\dfrac{3\\pi}{8}', '-π/8', '−π/8', '-pi/8', '−pi/8', '-\\frac{\\pi}{8}', '-\\pi/8'],
          },
          {
            points: 1,
            description:
              'All solutions: $\\tan(2x)$ has period $\\frac{\\pi}{2}$, so $x = \\frac{3\\pi}{8} + \\frac{\\pi}{2}k$ for any integer $k$ (equivalently $x = -\\frac{\\pi}{8} + \\frac{\\pi}{2}k$). A correct general solution written directly earns both points; using a period of $\\pi$ for $m$ does not earn this point.',
            keywords: ['kπ/2', 'πk/2', 'k pi/2', 'pi k/2', 'kpi/2', 'pik/2', '(π/2)k', '(pi/2)k', 'π/2 k', 'pi/2 k', 'nπ/2', 'πn/2', 'n pi/2', 'pi n/2', 'k\\pi/2', '\\frac{k\\pi}{2}', '\\frac{\\pi}{2}k', '\\frac{\\pi k}{2}', '\\frac{n\\pi}{2}', '\\frac{\\pi}{2}n', '\\frac{\\pi n}{2}', '\\dfrac{k\\pi}{2}', '\\dfrac{\\pi}{2}k', 'π/2 · k', 'π/2·k', 'πk / 2', 'kπ / 2', '(π/2)n', 'k(π/2)', 'n(π/2)', 'k·π/2', 'k · π/2', 'k * pi/2', 'k*pi/2', 'k(pi/2)', 'n(pi/2)', '\\frac{\\pi}{2} k', '\\frac{\\pi}{2} n', 'πk/2', 'π k/2', 'π k / 2'],
          },
        ],
        sampleAnswer:
          '$\\tan(2x) + 1 = 0 \\Rightarrow \\tan(2x) = -1$.\n\nThe tangent function equals $-1$ at $\\frac{3\\pi}{4}$ and has period $\\pi$, so $2x = \\frac{3\\pi}{4} + k\\pi$ for any integer $k$. Dividing by 2, $x = \\frac{3\\pi}{8} + \\frac{\\pi}{2}k$ for any integer $k$. (The period of $m$ is $\\frac{\\pi}{2}$, and $x = \\frac{3\\pi}{8}$ is the only solution in one period.)',
      },
    ],
  },

  // =========================================================================
  // Q4 Symbolic Manipulations — 4
  // =========================================================================
  {
    id: 'precalc-frq-q4-4',
    lesson: ['logarithmic-functions-precalc', 'trigonometric-identities-precalc', 'solving-trig-equations'],
    ced: ['2.12', '2.13', '3.12', '3.10'],
    type: 'symbolic-manipulations',
    unit: 3,
    title: 'Symbolic Manipulations: Logarithm Rules, a Difference Identity, and a Cosine Equation',
    prompt:
      'Angle measures are in radians, and solutions to equations must be real numbers. Give the exact value of any expression that can be found without a calculator. Combine terms using the properties of exponents and logarithms, and show the work that leads to each answer.',
    totalPoints: 6,
    timeRecommendation: '~17.5 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'The functions $g$ and $k$ are given by $g(x) = 3\\log_2 x + \\log_2(x + 1) - \\log_2(x^2)$ for $x > 0$ and $k(x) = \\sqrt{2}\\cos\\left(x - \\dfrac{\\pi}{4}\\right) - \\sin x$. (i) Express $g(x)$ as one logarithm with base 2, $\\log_2(\\text{expression})$, where the expression is a polynomial. (ii) Use a sum or difference identity to express $k(x)$ as a constant multiple of $\\cos x$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $g(x) = \\log_2(x^3) + \\log_2(x + 1) - \\log_2(x^2) = \\log_2\\left(\\dfrac{x^3(x + 1)}{x^2}\\right) = \\log_2\\big(x(x + 1)\\big) = \\log_2(x^2 + x)$, for $x > 0$.',
            keywords: ['(x(x + 1)', '(x(x+1)', '(x² + x)', '(x^2 + x)', '(x^2+x)', '(x²+x)', '(x^{2} + x)', '(x^{2}+x)', '( x(x + 1)', '_2(x(x+1))', '_2(x(x + 1))', '\\log_2(x^2 + x)', '\\log_2(x^2+x)', '\\log_2(x(x+1))', '\\log_2(x(x + 1))', '\\log_2\\left(x(x', '\\log_2\\left(x^2', '\\log_2\\left(x^{2}', 'log₂(x(x', 'log₂(x²', 'log₂(x^2', 'log2(x(x', 'log2(x^2', 'log2(x²', 'log_2(x(x', 'log_2(x^2', 'log_2(x²', '((x+1)x)', '((x + 1)x)', '(x(1 + x)', '(x(1+x)', '\\log_2 (x(x', '\\log_2 (x^2'],
          },
          {
            points: 1,
            description:
              '(ii) $\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\cos x\\cos\\frac{\\pi}{4} + \\sin x\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}(\\cos x + \\sin x)$, so $\\sqrt{2}\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\cos x + \\sin x$ and $k(x) = \\cos x + \\sin x - \\sin x = \\cos x$ (the constant multiple is 1).',
            keywords: ['cos x + sin x - sin x', 'cos x + sin x − sin x', 'cosx + sinx - sinx', 'cosx + sinx − sinx', 'cos(x) + sin(x) - sin(x)', 'cos(x) + sin(x) − sin(x)', '\\cos x + \\sin x - \\sin x', '\\cos x + \\sin x − \\sin x', '1 · cos x', '1·cos x', '1 cos x', '1cos x', '1 \\cdot \\cos x', '1\\cdot\\cos x', '1 \\cdot \\cos(x)', 'constant multiple is 1', 'constant multiple of 1', 'constant is 1', 'multiple is 1', 'c = 1', 'k(x) = cos x.', 'k(x) = cos x$', 'k(x) = cos x,', 'k(x) = cos x;', 'k(x) = cos x (', 'k(x) = cos x for', 'k(x) = cos x where', 'k(x) = cos x which', 'k(x) = cos(x).', 'k(x) = cos(x)$', 'k(x) = cos(x),', 'k(x) = cos(x);', 'k(x) = \\cos x.', 'k(x) = \\cos x$', 'k(x) = \\cos x,', 'k(x) = \\cos x;', 'k(x) = \\cos(x)$', 'k(x) = \\cos(x).', '= cos x.', '= cos x$', '= cos x,', '= cos x;', '= cos(x).', '= cos(x)$', '= cos(x),', '= \\cos x$', '= \\cos x.', '= \\cos x,', '= \\cos(x)$', '= \\cos(x).', 'simplifies to cos x', 'reduces to cos x', 'equals cos x', 'just cos x', 'simply cos x', 'cancel'],
          },
        ],
        sampleAnswer:
          '(i) $3\\log_2 x = \\log_2(x^3)$, so $g(x) = \\log_2(x^3) + \\log_2(x + 1) - \\log_2(x^2) = \\log_2\\left(\\dfrac{x^3(x + 1)}{x^2}\\right) = \\log_2\\big(x(x + 1)\\big) = \\log_2(x^2 + x)$, for $x > 0$.\n\n(ii) By the cosine difference identity, $\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\cos x\\cos\\frac{\\pi}{4} + \\sin x\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}\\cos x + \\frac{\\sqrt{2}}{2}\\sin x$. Multiplying by $\\sqrt{2}$ gives $\\cos x + \\sin x$, so $k(x) = \\cos x + \\sin x - \\sin x = \\cos x$, that is, $1 \\cdot \\cos x$.',
      },
      {
        label: 'B',
        prompt:
          'The functions $j$ and $q$ are given by $j(\\theta) = 2\\cos^2\\theta + \\cos\\theta$ and $q(x) = 3^{x + 1} - 7^x$. (i) Find all values of $\\theta$ in $[0, 2\\pi)$ for which $j(\\theta) = 0$. (ii) Solve $q(x) = 0$ for $x$. Give an exact answer, written in terms of logarithms.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '(i) $\\cos\\theta\\,(2\\cos\\theta + 1) = 0$, so $\\cos\\theta = 0$ gives $\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ and $\\cos\\theta = -\\frac{1}{2}$ gives $\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$. All four solutions are required; dividing by $\\cos\\theta$ and losing $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ does not earn the point.',
            keywords: ['3π/2', '3pi/2', '3 pi/2', '\\frac{3\\pi}{2}', '\\dfrac{3\\pi}{2}', '3\\pi/2', '3π / 2', '3π⁄2'],
          },
          {
            points: 1,
            description:
              '(ii) $3^{x + 1} = 7^x$, so $(x + 1)\\ln 3 = x\\ln 7$, $x(\\ln 7 - \\ln 3) = \\ln 3$, and $x = \\dfrac{\\ln 3}{\\ln 7 - \\ln 3} = \\dfrac{\\ln 3}{\\ln(7/3)}$ (equivalently $\\log_{7/3} 3$; for reference $\\approx 1.297$). Any base of logarithm earns the point; a decimal alone does not, because the question asks for an exact answer.',
            keywords: ['ln 3/(ln 7 - ln 3)', 'ln3/(ln7-ln3)', 'ln 3 / (ln 7 - ln 3)', 'ln(3)/(ln(7)-ln(3))', 'ln(3)/(ln(7) - ln(3))', 'ln(3) / (ln(7) - ln(3))', 'ln 3/ln(7/3)', 'ln3/ln(7/3)', 'ln 3 / ln(7/3)', 'ln(3)/ln(7/3)', 'ln(3) / ln(7/3)', 'log 3/(log 7 - log 3)', 'log3/(log7-log3)', 'log(3)/(log(7)-log(3))', 'log(3)/(log(7) - log(3))', 'log 3 / (log 7 - log 3)', 'log 3/log(7/3)', 'log3/log(7/3)', 'log(3)/log(7/3)', 'log 3 / log(7/3)', 'log_(7/3) 3', 'log_{7/3} 3', 'log_{7/3}(3)', 'log_(7/3)(3)', 'log base 7/3 of 3', '\\frac{\\ln 3}{\\ln 7 - \\ln 3}', '\\frac{\\ln 3}{\\ln(7/3)}', '\\frac{\\ln3}{\\ln7-\\ln3}', '\\frac{\\ln(3)}{\\ln(7) - \\ln(3)}', '\\frac{\\ln(3)}{\\ln(7)-\\ln(3)}', '\\dfrac{\\ln 3}{\\ln 7 - \\ln 3}', '\\dfrac{\\ln 3}{\\ln(7/3)}', 'ln 3/(ln 7 − ln 3)', 'ln3/(ln7−ln3)', 'ln 3 / (ln 7 − ln 3)', 'ln(3)/(ln(7) − ln(3))', 'log 3/(log 7 − log 3)', '\\frac{\\ln 3}{\\ln\\frac{7}{3}}', '\\frac{\\ln 3}{\\ln \\frac{7}{3}}', '\\log_{7/3} 3', '\\log_{7/3}(3)', '\\log_{7/3}3', '\\frac{\\ln 3}{\\ln 7-\\ln 3}', '\\frac{\\log 3}{\\log 7 - \\log 3}', '\\frac{\\log 3}{\\log(7/3)}', '\\frac{\\ln{3}}{\\ln{7}-\\ln{3}}', '\\frac{\\ln{3}}{\\ln{7} - \\ln{3}}', 'ln 3/(ln 7-ln 3)', 'ln 3/(ln(7/3))', 'ln(3)/(ln(7/3))', 'ln 3 ÷ (ln 7 - ln 3)', 'ln 3 over ln 7 - ln 3', 'ln(3)/(ln 7 - ln 3)', 'ln 3/(ln(7) - ln(3))'],
          },
        ],
        sampleAnswer:
          '(i) $2\\cos^2\\theta + \\cos\\theta = \\cos\\theta\\,(2\\cos\\theta + 1) = 0$. So $\\cos\\theta = 0$, giving $\\theta = \\frac{\\pi}{2}$ or $\\frac{3\\pi}{2}$, or $\\cos\\theta = -\\frac{1}{2}$, giving $\\theta = \\frac{2\\pi}{3}$ or $\\frac{4\\pi}{3}$. Solutions: $\\theta = \\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{3\\pi}{2}$.\n\n(ii) $3^{x + 1} - 7^x = 0 \\Rightarrow 3^{x + 1} = 7^x$. Taking the natural logarithm of both sides: $(x + 1)\\ln 3 = x\\ln 7 \\Rightarrow x\\ln 3 + \\ln 3 = x\\ln 7 \\Rightarrow \\ln 3 = x(\\ln 7 - \\ln 3) \\Rightarrow x = \\dfrac{\\ln 3}{\\ln 7 - \\ln 3} = \\dfrac{\\ln 3}{\\ln(7/3)}$.',
      },
      {
        label: 'C',
        prompt: 'The function $m$ is given by $m(x) = 4\\cos(\\pi x) + 2$. Find all values of $x$ for which $m(x) = 4$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Solutions in one period: $4\\cos(\\pi x) + 2 = 4$ gives $\\cos(\\pi x) = \\frac{1}{2}$, so $\\pi x = \\frac{\\pi}{3}$ or $\\pi x = \\frac{5\\pi}{3}$ in one cycle, that is $x = \\frac{1}{3}$ and $x = \\frac{5}{3}$ (equivalently $x = \\pm\\frac{1}{3}$).',
            keywords: ['5/3', '1.667', '1.666', '±1/3', '± 1/3', '-1/3', '−1/3', '\\frac{5}{3}', '\\dfrac{5}{3}', '\\pm\\frac{1}{3}', '\\pm \\frac{1}{3}', '\\pm\\dfrac{1}{3}', '\\pm \\dfrac{1}{3}', '± ⅓', '±⅓', '-⅓', '−⅓'],
          },
          {
            points: 1,
            description:
              'All solutions: $\\cos(\\pi x)$ has period $\\frac{2\\pi}{\\pi} = 2$, so $x = \\frac{1}{3} + 2k$ and $x = \\frac{5}{3} + 2k$ for any integer $k$ (equivalently $x = \\pm\\frac{1}{3} + 2k$). A correct general solution written directly earns both points; a period of $2\\pi$ does not earn this point.',
            keywords: ['+ 2k,', '+ 2k ', '+ 2k.', '+ 2k)', '+ 2k$', '+ 2k;', '+2k,', '+2k ', '+2k.', '+2k)', '+2k$', '+2k;', '+ 2n,', '+ 2n ', '+ 2n.', '+ 2n)', '+ 2n$', '+2n,', '+2n ', '+2n.', '+2n)', '+2n$', '2k, where', '2k where', '2k for', '2n for', '2n where', 'period 2 ', 'period is 2 ', 'period of 2 ', 'period 2,', 'period 2.', 'period is 2,', 'period is 2.', 'period of 2,', 'period of 2.', '+ 2k and', '+2k and', '+ 2k or', '+2k or', '+ 2n and', '+ 2n or', '2k ,', '2k$', '2n$', 'period = 2 ', 'period = 2,', 'period = 2.', 'period equals 2'],
          },
        ],
        sampleAnswer:
          '$4\\cos(\\pi x) + 2 = 4 \\Rightarrow \\cos(\\pi x) = \\dfrac{1}{2}$.\n\nIn one cycle of the cosine, $\\pi x = \\frac{\\pi}{3}$ or $\\pi x = \\frac{5\\pi}{3}$, so $x = \\frac{1}{3}$ or $x = \\frac{5}{3}$.\n\nThe period of $m$ is $\\frac{2\\pi}{\\pi} = 2$, so all solutions are $x = \\frac{1}{3} + 2k$ and $x = \\frac{5}{3} + 2k$ for any integer $k$.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export function getPrecalcFRQs(): PrecalcFRQ[] {
  return precalcFRQs
}

export function getPrecalcFRQsByType(type: PrecalcFRQType): PrecalcFRQ[] {
  return precalcFRQs.filter((q) => q.type === type)
}

/**
 * One FRQ of each real type, in exam order: Part A (Q1, Q2, graphing calculator, 35 min),
 * then Part B (Q3, Q4, no calculator, 35 min). 24 points in 70 minutes.
 */
export function generateFullExamFRQs(): {
  questions: PrecalcFRQ[]
  totalPoints: number
  totalMinutes: number
  partAMinutes: number
  partBMinutes: number
  partACount: number
} {
  const questions = PRECALC_FRQ_TYPES.map(({ type }) => shuffleArray(getPrecalcFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: PRECALC_FRQ_PART_MINUTES.A + PRECALC_FRQ_PART_MINUTES.B,
    partAMinutes: PRECALC_FRQ_PART_MINUTES.A,
    partBMinutes: PRECALC_FRQ_PART_MINUTES.B,
    partACount: PRECALC_FRQ_TYPES.filter((t) => t.part === 'A').length,
  }
}

export { precalcFRQs as apPrecalcFRQs }
