// AP Precalculus Free-Response Questions
// Built to the May 2027 exam: four FRQs, 6 points each, 70 minutes in two timed parts.
//   Part A (graphing calculator required, 35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context
//   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations
// Two questions per type (two complete exams). Q2 follows the 2026–27 structure: Part C asks for an
// equation at a stated threshold and a domain restriction justified from it.
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
}

const precalcFRQs: PrecalcFRQ[] = [
  // =========================================================================
  // Q1 Function Concepts — 1: quadratic table and a cubic
  // =========================================================================
  {
    id: 'precalc-frq-q1-1',
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
