/**
 * AP Precalculus diagnostic v2, Unit 2: Exponential and Logarithmic Functions
 * (CED 2.1–2.15; Unit 4 is not on the exam). Part A style (no calculator:
 * exact values, equivalent forms, limits) for most items; `calculator: true`
 * marks Part B style context / data items whose arithmetic is still hand-doable
 * (regression output or approximations are given in the stem).
 * Stimulus sets: a constant-ratio population table (precalc-s201), a semi-log
 * table of log y (precalc-s202), a table of f and g for composition and
 * inverses (precalc-s203), and a residual table comparing two models
 * (precalc-s204).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "precalc-s201",
    title: "Population of a yeast culture",
    kind: "table",
    content:
      "A yeast culture is started in a dish, and its population $P$ is counted every 3 hours. The table gives the population $t$ hours after the start.\n\n" +
      "| $t$ (hours) | 0 | 3 | 6 | 9 | 12 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $P$ (cells, thousands) | 80 | 120 | 180 | 270 | 405 |",
  },
  {
    id: "precalc-s202",
    title: "Semi-log values of a data set",
    kind: "table",
    content:
      "A quantity $y$ was measured at equally spaced values of $x$. Instead of $y$, the table lists the common logarithm $\\log y$ (base 10) of each measurement, the value that would be plotted on the vertical axis of a semi-log plot.\n\n" +
      "| $x$ | 0 | 1 | 2 | 3 | 4 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $\\log y$ | 1.3 | 1.6 | 1.9 | 2.2 | 2.5 |",
  },
  {
    id: "precalc-s203",
    title: "Values of the functions f and g",
    kind: "table",
    content:
      "The functions $f$ and $g$ are defined only for the integers $-2 \\le x \\le 3$, and both are one-to-one. Selected values are given in the table.\n\n" +
      "| $x$ | $-2$ | $-1$ | 0 | 1 | 2 | 3 |\n" +
      "| --- | --- | --- | --- | --- | --- | --- |\n" +
      "| $f(x)$ | 3 | 1 | 0 | 2 | $-1$ | 4 |\n" +
      "| $g(x)$ | 1 | 3 | 2 | $-2$ | 0 | $-1$ |",
  },
  {
    id: "precalc-s204",
    title: "Residuals of two models for a growing crystal",
    kind: "table",
    content:
      "A student measured the mass of a crystal, in grams, once a day for 6 days and used a calculator to fit two models to the data: a linear model $L$ and an exponential model $E$. " +
      "The table gives the observed mass and, for each model, the residual (observed mass minus the mass the model predicts) on each day $d$.\n\n" +
      "| $d$ (days) | 1 | 2 | 3 | 4 | 5 | 6 |\n" +
      "| --- | --- | --- | --- | --- | --- | --- |\n" +
      "| Observed mass (g) | 6.1 | 7.9 | 9.7 | 12.3 | 15.2 | 19.2 |\n" +
      "| Residual, model $L$ | 0.8 | 0.0 | $-0.7$ | $-0.7$ | $-0.4$ | 1.1 |\n" +
      "| Residual, model $E$ | $-0.2$ | 0.1 | $-0.1$ | 0.1 | $-0.1$ | 0.1 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- precalc-s201: yeast population table ----
  // CED 2.3
  {
    id: "precalc-s201-q1",
    stimulusId: "precalc-s201",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "easy",
    stem: "Which of the following best justifies modeling $P$ as an exponential function of $t$?",
    options: [
      "Over each 3-hour interval the population is multiplied by the same factor, 1.5.",
      "Over each 3-hour interval the population increases by the same amount, 40 thousand cells.",
      "The population is increasing and the graph of the data is concave up.",
      "Every population value in the table is a multiple of 5.",
    ],
    correctIndex: 0,
    explanation:
      "An exponential function changes by a constant factor over equal input intervals: $120/80 = 180/120 = 270/180 = 405/270 = 1.5$. The increases 40, 60, 90, 135 are not constant, so the data are not linear (a constant difference is the linear signature). Increasing and concave up also describes many non-exponential functions, such as quadratics, so it does not justify the choice. Being multiples of 5 says nothing about how the values change.",
  },
  // CED 2.5
  {
    id: "precalc-s201-q2",
    stimulusId: "precalc-s201",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "Which of the following functions models the population, in thousands of cells, $t$ hours after the start?",
    options: [
      "$P(t) = 80 + 40\\left(\\dfrac{t}{3}\\right)$",
      "$P(t) = 80(1.5)^{t/3}$",
      "$P(t) = 80(1.5)^{3t}$",
      "$P(t) = 80(1.5)^{t}$",
    ],
    correctIndex: 1,
    explanation:
      "The initial value is $P(0) = 80$, and the population is multiplied by 1.5 once every 3 hours, so after $t$ hours it has been multiplied by 1.5 a total of $t/3$ times: $P(t) = 80(1.5)^{t/3}$. Check: $P(6) = 80(1.5)^2 = 180$. The exponent $3t$ applies the factor three times per hour, and $(1.5)^t$ applies it once per hour. $80 + 40(t/3)$ adds 40 every 3 hours, a linear model that the growing differences rule out.",
  },
  // CED 2.4
  {
    id: "precalc-s201-q3",
    stimulusId: "precalc-s201",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "By approximately what percent does the population grow each hour? (Note: $1.5^{1/3} \\approx 1.145$.)",
    options: ["About 50%", "About 1.145%", "About 14.5%", "About 16.7%"],
    correctIndex: 2,
    explanation:
      "Rewrite the model with a per-hour factor: $80(1.5)^{t/3} = 80\\left(1.5^{1/3}\\right)^{t} \\approx 80(1.145)^t$, so the population is multiplied by about 1.145 each hour, a growth of about 14.5% per hour. 16.7% divides the 50% growth per 3 hours by 3, which treats the growth as additive. 50% is the growth per 3-hour interval, not per hour. 1.145% reads the factor itself as the percent.",
  },

  // ---- precalc-s202: semi-log table ----
  // CED 2.15
  {
    id: "precalc-s202-q1",
    stimulusId: "precalc-s202",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "easy",
    stem: "Which type of function best models $y$ as a function of $x$, and why?",
    options: [
      "Exponential, because $\\log y$ changes by a constant amount over equal changes in $x$.",
      "Linear, because the values of $\\log y$ lie on a line when plotted against $x$.",
      "Logarithmic, because the table reports the logarithm of each value of $y$.",
      "Quadratic, because the values of $\\log y$ are increasing and never repeat.",
    ],
    correctIndex: 0,
    explanation:
      "The values of $\\log y$ go up by 0.3 for each unit increase in $x$, so $\\log y$ is a linear function of $x$, and a linear semi-log plot is the signature of an exponential function: $\\log y = 1.3 + 0.3x$ gives $y = 10^{1.3 + 0.3x}$. The line describes $\\log y$, not $y$; $y$ itself grows by a constant factor, so it is not linear. Tabulating logarithms does not make $y$ logarithmic in $x$. Increasing values that do not repeat are no evidence of a quadratic.",
  },
  // CED 2.15
  {
    id: "precalc-s202-q2",
    stimulusId: "precalc-s202",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "Which of the following equations models $y$ as a function of $x$?",
    options: [
      "$y = 10^{0.3}\\left(1.3\\right)^{x}$",
      "$y = 1.3\\left(0.3\\right)^{x}$",
      "$y = 10^{1.3}\\left(10^{0.3}\\right)^{x}$",
      "$y = 1.3 + 0.3x$",
    ],
    correctIndex: 2,
    explanation:
      "From the table, $\\log y = 1.3 + 0.3x$. Writing this in exponential form, $y = 10^{1.3 + 0.3x} = 10^{1.3} \\cdot 10^{0.3x} = 10^{1.3}\\left(10^{0.3}\\right)^x$: the intercept 1.3 sets the initial value and the slope 0.3 sets the growth factor. $1.3 + 0.3x$ is $\\log y$, not $y$. $10^{0.3}(1.3)^x$ swaps the roles of the intercept and the slope and uses the intercept itself as the growth factor. $1.3(0.3)^x$ uses the slope and intercept directly as base and coefficient.",
  },
  // CED 2.15
  {
    id: "precalc-s202-q3",
    stimulusId: "precalc-s202",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "Using $10^{0.3} \\approx 2$ and $10^{1.3} \\approx 20$, which of the following is closest to the value of $y$ when $x = 6$?",
    options: ["3.1", "320", "640", "1,280"],
    correctIndex: 3,
    explanation:
      "The model is $y \\approx 20 \\cdot 2^{x}$, so at $x = 6$, $y \\approx 20 \\cdot 64 = 1{,}280$. 3.1 is $\\log y = 1.3 + 0.3(6)$, the vertical coordinate on the semi-log plot, not $y$. 320 is $20 \\cdot 2^4$, which stops two doublings short, and 640 is $20 \\cdot 2^5$, one doubling short.",
  },

  // ---- precalc-s203: table of f and g ----
  // CED 2.7
  {
    id: "precalc-s203-q1",
    stimulusId: "precalc-s203",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "easy",
    stem: "What is the value of $f(g(1))$?",
    options: ["$3$", "$0$", "$-4$", "$-2$"],
    correctIndex: 0,
    explanation:
      "Work from the inside out: $g(1) = -2$, and then $f(-2) = 3$. The value 0 is $g(f(1)) = g(2)$, the composition in the wrong order. $-4$ is the product $f(1) \\cdot g(1) = 2(-2)$, and $-2$ stops at $g(1)$ without applying $f$.",
  },
  // CED 2.7
  {
    id: "precalc-s203-q2",
    stimulusId: "precalc-s203",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "medium",
    stem: "For which value of $x$ is $(f \\circ g)(x) = 2$?",
    options: ["$x = 0$", "$x = 3$", "$x = -2$", "$x = 1$"],
    correctIndex: 2,
    explanation:
      "$(f \\circ g)(x) = f(g(x))$ equals 2 when the inner output $g(x)$ is an input at which $f$ gives 2. From the table $f(1) = 2$ only, so $g(x) = 1$, which happens only at $x = -2$. $x = 1$ solves $f(x) = 2$, skipping $g$. $x = 0$ solves $g(x) = 2$, which is the wrong target value. At $x = 3$, $g(3) = -1$ and $f(-1) = 1$, not 2.",
  },
  // CED 2.8
  {
    id: "precalc-s203-q3",
    stimulusId: "precalc-s203",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "hard",
    stem: "What is the value of $f^{-1}(g(-1))$?",
    options: ["$4$", "$3$", "$1$", "$-2$"],
    correctIndex: 3,
    explanation:
      "First $g(-1) = 3$. Then $f^{-1}(3)$ is the input $x$ with $f(x) = 3$; reading the $f$ row, $f(-2) = 3$, so $f^{-1}(3) = -2$. The value 4 is $f(3)$, applying $f$ instead of its inverse. 3 stops at $g(-1)$. 1 is $f(-1)$, which reads $f^{-1}$ as $f$ at the original input.",
  },

  // ---- precalc-s204: residuals of two models ----
  // CED 2.6
  {
    id: "precalc-s204-q1",
    stimulusId: "precalc-s204",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "Based on the residuals, which model is more appropriate for the data, and why?",
    options: [
      "Model $E$, because its residuals add up to a value closer to zero than those of model $L$.",
      "Model $L$, because the largest residual belongs to model $L$, so it accounts for more of the data.",
      "Model $E$, because its residuals are small and show no pattern as $d$ increases.",
      "Model $L$, because its residuals are positive at both ends of the data and negative in the middle.",
    ],
    correctIndex: 2,
    explanation:
      "An appropriate model leaves residuals that are small and scattered without a pattern; model $E$'s residuals alternate in sign and stay within 0.2 g. Model $L$'s residuals run positive, then negative, then positive, a curved pattern showing the data bend away from the line, which is evidence AGAINST the linear model. Residuals of a least-squares fit sum to about zero for either model, so the sum does not distinguish them. A large residual is a large error, not a sign of a better fit.",
  },
  // CED 2.6
  {
    id: "precalc-s204-q2",
    stimulusId: "precalc-s204",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "What mass does the linear model $L$ predict on day 6?",
    options: ["20.3 grams", "19.1 grams", "1.1 grams", "18.1 grams"],
    correctIndex: 3,
    explanation:
      "A residual is observed minus predicted, so predicted = observed − residual: $19.2 - 1.1 = 18.1$ grams. The positive residual means the data point lies above the line. 20.3 adds the residual instead of subtracting it. 19.1 is the exponential model's prediction, $19.2 - 0.1$. 1.1 is the residual itself.",
  },

  // ============ Standalone: exponential functions (2.3–2.5) ============
  // CED 2.3
  {
    id: "precalc-u2-001",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "easy",
    stem: "The function $f$ is given by $f(x) = 5(0.8)^{x}$. Which of the following statements is true?",
    options: [
      "$f$ is decreasing, and each unit increase in $x$ multiplies the output by 0.8.",
      "$f$ is decreasing, and 0.8 is subtracted from the output for each unit increase in $x$.",
      "$f$ is increasing, and the output is multiplied by 0.8 for each unit increase in $x$.",
      "$f$ is increasing, because the base 0.8 and the coefficient 5 are both positive.",
    ],
    correctIndex: 0,
    explanation:
      "An exponential function $ab^x$ with $a > 0$ and $0 < b < 1$ is decreasing: each unit step in $x$ multiplies the output by $b = 0.8$, so the values shrink toward 0. Subtracting a constant each step describes a linear function. Multiplying by a factor less than 1 cannot make the function increasing, and a positive base below 1 gives decay regardless of the coefficient.",
  },
  // CED 2.3
  {
    id: "precalc-u2-002",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "easy",
    stem: "A quantity has an initial value of 240 and decreases by 15% each year. Which function gives the quantity after $t$ years?",
    options: ["$Q(t) = 240(0.15)^{t}$", "$Q(t) = 240(1.15)^{t}$", "$Q(t) = 240(0.85)^{t}$", "$Q(t) = 240 - 0.15t$"],
    correctIndex: 2,
    explanation:
      "Losing 15% each year leaves 85%, so the yearly factor is $1 - 0.15 = 0.85$ and $Q(t) = 240(0.85)^t$. A base of 0.15 keeps only 15% each year (an 85% loss), 1.15 is 15% growth, and $240 - 0.15t$ subtracts a constant 0.15 each year instead of a percent of the current amount.",
  },
  // CED 2.4
  {
    id: "precalc-u2-003",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    stem: "Which of the following expressions is equivalent to $3^{x + 2}$?",
    options: ["$3^{x} + 9$", "$9 \\cdot 3^{x}$", "$6 \\cdot 3^{x}$", "$3^{2x}$"],
    correctIndex: 1,
    explanation:
      "By the product property of exponents, $3^{x+2} = 3^{x} \\cdot 3^{2} = 9 \\cdot 3^{x}$: adding 2 to the exponent multiplies the output by $3^2$. $3^x + 9$ adds $3^2$ instead of multiplying. $6 \\cdot 3^x$ uses $3 \\cdot 2$ in place of $3^2$. $3^{2x} = (3^x)^2$ doubles the exponent, which is a different function.",
  },
  // CED 2.5
  {
    id: "precalc-u2-004",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    stem: "The exponential function $f$ is given by $f(x) = a \\cdot b^{x}$ with $f(1) = 6$ and $f(3) = 54$. What is the value of $f(4)$?",
    options: ["$108$", "$486$", "$81$", "$162$"],
    correctIndex: 3,
    explanation:
      "From $x = 1$ to $x = 3$ the output is multiplied by $54/6 = 9$ over 2 units, so $b^2 = 9$ and $b = 3$. One more unit step multiplies by 3 again: $f(4) = 54 \\cdot 3 = 162$. 108 multiplies by 2 (the step length) instead of by the factor 3. 486 multiplies by 9, the factor for a 2-unit step. 81 is $3^4$, which forgets the coefficient $a = 2$.",
  },
  // CED 2.5
  {
    id: "precalc-u2-005",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    stem: "Let $g(x) = 4 - 3 \\cdot 2^{-x}$. Which of the following describes the end behavior of $g$?",
    options: [
      "$\\displaystyle\\lim_{x \\to \\infty} g(x) = 1$ and $\\displaystyle\\lim_{x \\to -\\infty} g(x) = -\\infty$",
      "$\\displaystyle\\lim_{x \\to \\infty} g(x) = 4$ and $\\displaystyle\\lim_{x \\to -\\infty} g(x) = -\\infty$",
      "$\\displaystyle\\lim_{x \\to \\infty} g(x) = \\infty$ and $\\displaystyle\\lim_{x \\to -\\infty} g(x) = 4$",
      "$\\displaystyle\\lim_{x \\to \\infty} g(x) = 4$ and $\\displaystyle\\lim_{x \\to -\\infty} g(x) = \\infty$",
    ],
    correctIndex: 1,
    explanation:
      "As $x \\to \\infty$, $2^{-x} = (1/2)^x \\to 0$, so $g(x) \\to 4 - 0 = 4$: the line $y = 4$ is a horizontal asymptote on the right. As $x \\to -\\infty$, $2^{-x}$ grows without bound and $-3 \\cdot 2^{-x} \\to -\\infty$, so $g(x) \\to -\\infty$. Reading $2^{-x}$ as growing on the right swaps the two limits. The negative coefficient $-3$ sends the left end down, not up. The limit 1 is $g(0) = 4 - 3$, a value, not a limit.",
  },
  // CED 2.4
  {
    id: "precalc-u2-006",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "The amount of a medication in a patient's bloodstream is modeled by $Q(t) = 500(0.64)^{t/2}$ milligrams, where $t$ is the number of hours since the dose. By what percent does the amount decrease each hour?",
    options: ["18%", "40%", "20%", "36%"],
    correctIndex: 2,
    explanation:
      "Rewrite with a per-hour factor: $(0.64)^{t/2} = \\left(0.64^{1/2}\\right)^{t} = (0.8)^t$, so each hour the amount is multiplied by 0.8, a decrease of 20%. 36% is the decrease per 2-hour period ($1 - 0.64$), not per hour. 18% halves that 36%, treating percent decrease as additive. 40% is twice the correct rate.",
  },
  // CED 2.5
  {
    id: "precalc-u2-007",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "hard",
    stem: "The graph of $g$ is obtained from the graph of $f(x) = 2^{x}$ by a reflection over the $y$-axis followed by a vertical translation of 3 units up. Which of the following is $g(x)$?",
    options: [
      "$g(x) = -2^{x} + 3$",
      "$g(x) = \\left(\\dfrac{1}{2}\\right)^{x} + 3$",
      "$g(x) = 2^{x - 3}$",
      "$g(x) = 2^{x + 3}$",
    ],
    correctIndex: 1,
    explanation:
      "Reflecting over the $y$-axis replaces $x$ with $-x$: $2^{-x} = (1/2)^x$. Adding 3 then shifts the graph up: $g(x) = (1/2)^x + 3$, with horizontal asymptote $y = 3$. $-2^x + 3$ reflects over the $x$-axis instead. $2^{x-3}$ is a horizontal shift right (which equals a vertical stretch by $1/8$), and $2^{x+3}$ shifts left; neither reflects.",
  },
  // CED 2.3
  {
    id: "precalc-u2-008",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A quantity decays exponentially. It measures 48 units at time $t = 2$ and 12 units at time $t = 4$. What did it measure at time $t = 0$?",
    options: ["$84$", "$96$", "$60$", "$192$"],
    correctIndex: 3,
    explanation:
      "Over the 2-unit step from $t = 2$ to $t = 4$ the quantity is multiplied by $12/48 = 1/4$, so each unit of time multiplies it by $1/2$. Going back 2 units from $t = 2$ undoes a factor of $1/4$: $48 \\cdot 4 = 192$. 84 assumes a constant decrease of 36 per 2 units (linear). 96 goes back only one time unit (one doubling). 60 adds the one-unit drop of 12 as if the decrease were constant.",
  },
  // CED 2.3
  {
    id: "precalc-u2-009",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "easy",
    stem: "A 400-milligram sample of a substance has a half-life of 6 hours. Which expression gives the amount remaining, in milligrams, after $t$ hours?",
    options: [
      "$400\\left(\\dfrac{1}{2}\\right)^{6t}$",
      "$400 - \\dfrac{200t}{6}$",
      "$400\\left(\\dfrac{1}{2}\\right)^{t/6}$",
      "$400(6)^{-t}$",
    ],
    correctIndex: 2,
    explanation:
      "Every 6 hours the amount is halved, so after $t$ hours it has been halved $t/6$ times: $400(1/2)^{t/6}$. The exponent $6t$ halves the amount six times per hour. Subtracting $200t/6$ removes a fixed 200 mg per 6 hours, which is linear and would reach zero. $400(6)^{-t}$ divides by 6 every hour.",
  },
  // CED 2.5
  {
    id: "precalc-u2-010",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "hard",
    stem: "The graph of the exponential function $f(x) = a \\cdot b^{x}$ passes through the points $(0, 5)$ and $(2, 20)$, with $b > 0$. What is the value of $f(-1)$?",
    options: ["$\\dfrac{5}{4}$", "$\\dfrac{5}{2}$", "$10$", "$-5$"],
    correctIndex: 1,
    explanation:
      "The point $(0, 5)$ gives $a = 5$, and then $20 = 5b^2$ gives $b^2 = 4$, so $b = 2$. Stepping back one unit from $x = 0$ divides by the factor: $f(-1) = 5/2$. $5/4$ divides by $b^2 = 4$, two steps back. 10 multiplies by 2 instead of dividing. $-5$ treats a negative input as negating the output, but exponential outputs with $a > 0$ are always positive.",
  },
  // CED 2.3
  {
    id: "precalc-u2-011",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A car bought for $\\$24{,}000$ loses 12% of its value each year. Using $(0.88)^{3} \\approx 0.681$, which of the following is closest to its value after 3 years?",
    options: ["$\\$16{,}350$", "$\\$15{,}360$", "$\\$21{,}120$", "$\\$8{,}640$"],
    correctIndex: 0,
    explanation:
      "Each year the value is multiplied by $1 - 0.12 = 0.88$, so after 3 years it is $24{,}000(0.88)^3 \\approx 24{,}000(0.681) \\approx \\$16{,}350$. $\\$15{,}360$ subtracts $3 \\times 12\\% = 36\\%$ of the original price, treating the loss as linear. $\\$21{,}120$ is the value after one year. $\\$8{,}640$ is $24{,}000(0.36)$, the amount lost under the linear reading, not what remains.",
  },
  // CED 2.5
  {
    id: "precalc-u2-012",
    unit: "unit-2",
    topicSlug: "exponential-functions-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "For the exponential function $f(x) = a \\cdot b^{x}$ with $b > 0$, $f(0) = 4$ and the average rate of change of $f$ over the interval $[0, 2]$ is 12. What is the value of $f(4)$?",
    options: ["$112$", "$28$", "$196$", "$52$"],
    correctIndex: 2,
    explanation:
      "The average rate of change over $[0, 2]$ is $\\dfrac{f(2) - f(0)}{2} = 12$, so $f(2) = 4 + 24 = 28$. Then $b^2 = 28/4 = 7$, and $f(4) = f(2) \\cdot b^2 = 28 \\cdot 7 = 196$. 52 continues the average rate of 12 per unit for two more units, which is linear reasoning. 112 multiplies 28 by 4 (the coefficient) instead of by $b^2 = 7$. 28 is $f(2)$.",
  },

  // ============ Standalone: logarithmic functions (2.9–2.13) ============
  // CED 2.9
  {
    id: "precalc-u2-013",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "easy",
    stem: "What is the value of $\\log_{27} 9$?",
    options: ["$3$", "$\\dfrac{2}{3}$", "$\\dfrac{3}{2}$", "$\\dfrac{1}{3}$"],
    correctIndex: 1,
    explanation:
      "$\\log_{27} 9$ is the exponent $p$ with $27^{p} = 9$. Writing both in base 3, $(3^3)^p = 3^2$ gives $3p = 2$, so $p = 2/3$. 3 is $27/9$, a quotient rather than an exponent. $3/2$ is $\\log_9 27$, the logarithm with base and argument swapped. $1/3$ is $\\log_{27} 3$.",
  },
  // CED 2.11
  {
    id: "precalc-u2-014",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "easy",
    stem: "What is the domain of the function $f(x) = \\ln(5 - 2x)$?",
    options: ["$x > -\\dfrac{5}{2}$", "$x \\le \\dfrac{5}{2}$", "$x \\ne \\dfrac{5}{2}$", "$x < \\dfrac{5}{2}$"],
    correctIndex: 3,
    explanation:
      "A logarithm is defined only for a positive argument: $5 - 2x > 0$ gives $-2x > -5$, and dividing by the negative number $-2$ reverses the inequality, so $x < 5/2$. $x > -5/2$ changes the sign of 5 instead of reversing the inequality when dividing by $-2$. $x \\le 5/2$ includes $x = 5/2$, where the argument is 0 and the logarithm is undefined. $x \\ne 5/2$ treats the restriction like a rational function's, allowing negative arguments.",
  },
  // CED 2.12
  {
    id: "precalc-u2-015",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "easy",
    stem: "For positive $x$ and $y$, which of the following is equivalent to $\\log_b\\left(\\dfrac{x^{2}}{\\sqrt{y}}\\right)$?",
    options: [
      "$2\\log_b x - 2\\log_b y$",
      "$2\\log_b x + \\dfrac{1}{2}\\log_b y$",
      "$2\\log_b x - \\dfrac{1}{2}\\log_b y$",
      "$\\dfrac{2\\log_b x}{\\frac{1}{2}\\log_b y}$",
    ],
    correctIndex: 2,
    explanation:
      "The quotient property splits the logarithm into $\\log_b x^2 - \\log_b \\sqrt{y}$, and the power property brings the exponents down: $2\\log_b x - \\frac{1}{2}\\log_b y$, since $\\sqrt{y} = y^{1/2}$. Writing $2\\log_b y$ treats the square root as a square. A plus sign would come from a product, not a quotient. Dividing the logarithms is not a property; the logarithm of a quotient is a difference.",
  },
  // CED 2.10
  {
    id: "precalc-u2-016",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = 2 \\cdot 5^{x - 1}$. Which of the following is $f^{-1}(x)$?",
    options: [
      "$f^{-1}(x) = \\log_5(2x) - 1$",
      "$f^{-1}(x) = 1 + \\dfrac{\\log_5 x}{2}$",
      "$f^{-1}(x) = \\log_5(x - 1) + 2$",
      "$f^{-1}(x) = 1 + \\log_5\\left(\\dfrac{x}{2}\\right)$",
    ],
    correctIndex: 3,
    explanation:
      "Solve $y = 2 \\cdot 5^{x-1}$ for $x$ by undoing the operations in reverse order: divide by 2 to get $5^{x-1} = y/2$, take $\\log_5$ to get $x - 1 = \\log_5(y/2)$, then add 1. Swapping the variables, $f^{-1}(x) = 1 + \\log_5(x/2)$. $\\log_5(2x) - 1$ multiplies by 2 instead of dividing and undoes the $-1$ in the wrong direction. $(\\log_5 x)/2$ divides the logarithm by 2 instead of dividing the argument. $\\log_5(x - 1) + 2$ applies the inverse operations in the original order rather than reversed.",
  },
  // CED 2.11
  {
    id: "precalc-u2-017",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "Let $g(x) = \\log_2(x + 3) - 1$. Which of the following statements about the graph of $g$ is true?",
    options: [
      "It has a vertical asymptote at $x = 3$ and an $x$-intercept at $(-1, 0)$.",
      "It has a vertical asymptote at $x = -3$ and an $x$-intercept at $(-2, 0)$.",
      "It has a horizontal asymptote at $y = -1$ and an $x$-intercept at $(-1, 0)$.",
      "It has a vertical asymptote at $x = -3$ and an $x$-intercept at $(-1, 0)$.",
    ],
    correctIndex: 3,
    explanation:
      "The graph of $\\log_2 x$ has a vertical asymptote at $x = 0$; replacing $x$ with $x + 3$ shifts it 3 units left, to $x = -3$. For the intercept, $\\log_2(x + 3) - 1 = 0$ means $\\log_2(x + 3) = 1$, so $x + 3 = 2$ and $x = -1$. An asymptote at $x = 3$ shifts the wrong way. The intercept $(-2, 0)$ solves $\\log_2(x + 3) = 0$, ignoring the $-1$. A logarithmic function has no horizontal asymptote; the $-1$ is a vertical shift, not an asymptote.",
  },
  // CED 2.13
  {
    id: "precalc-u2-018",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "What is the solution set of the equation $\\log_2 x + \\log_2(x - 6) = 4$?",
    options: ["$\\{8\\}$", "$\\{-2, 8\\}$", "$\\{-2\\}$", "$\\{10\\}$"],
    correctIndex: 0,
    explanation:
      "Combine with the product property: $\\log_2\\left(x(x - 6)\\right) = 4$, so $x^2 - 6x = 16$ and $(x - 8)(x + 2) = 0$. The candidate $x = -2$ makes both original logarithms undefined (negative arguments), so it is extraneous and only $x = 8$ remains: $\\log_2 8 + \\log_2 2 = 3 + 1 = 4$. Keeping $-2$ skips the domain check, and $-2$ alone keeps the wrong root. $x = 10$ comes from adding the arguments, $\\log_2(2x - 6) = 4$, instead of multiplying them.",
  },
  // CED 2.13
  {
    id: "precalc-u2-019",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "Which of the following is the solution set of the inequality $3 \\cdot 2^{x} \\ge 48$?",
    options: ["$x \\ge 16$", "$x \\le 4$", "$x \\ge 4$", "$x \\ge 5$"],
    correctIndex: 2,
    explanation:
      "Divide by 3 to isolate the exponential: $2^x \\ge 16 = 2^4$. Because $2^x$ is increasing, the inequality holds exactly when $x \\ge 4$. $x \\ge 16$ stops at the value of $2^x$ instead of solving for the exponent. $x \\le 4$ reverses the direction, which would be right only for a decreasing base. $x \\ge 5$ reads 16 as $2^5$.",
  },
  // CED 2.13
  {
    id: "precalc-u2-020",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "hard",
    stem: "What is the solution set of the equation $2\\log_3 x - \\log_3(x + 6) = 0$?",
    options: ["$\\{-2, 3\\}$", "$\\{3\\}$", "$\\{3, 6\\}$", "There is no solution."],
    correctIndex: 1,
    explanation:
      "Use the power and quotient properties: $\\log_3\\left(\\dfrac{x^2}{x + 6}\\right) = 0$, so $\\dfrac{x^2}{x + 6} = 1$ and $x^2 - x - 6 = (x - 3)(x + 2) = 0$. The candidate $-2$ is extraneous because $\\log_3(-2)$ is undefined, leaving $x = 3$: $2\\log_3 3 - \\log_3 9 = 2 - 2 = 0$. Including $-2$ skips the domain check. $\\{3, 6\\}$ adds a false root from misreading $x^2 = x + 6$ as $2x = x + 6$. A solution does exist, so the equation is not inconsistent.",
  },
  // CED 2.12
  {
    id: "precalc-u2-021",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "hard",
    stem: "If $\\log_b 2 = p$ and $\\log_b 3 = q$, which of the following expressions is equal to $\\log_b 12$?",
    options: ["$p + 2q$", "$2pq$", "$2p + q$", "$p^{2} + q$"],
    correctIndex: 2,
    explanation:
      "Factor the argument: $12 = 2^2 \\cdot 3$, so $\\log_b 12 = \\log_b 2^2 + \\log_b 3 = 2\\log_b 2 + \\log_b 3 = 2p + q$. $p + 2q$ corresponds to $2 \\cdot 3^2 = 18$. $2pq$ multiplies logarithms, which is not a logarithm property. $p^2 + q$ squares the logarithm of 2 instead of doubling it (the power property brings the exponent down as a factor).",
  },
  // CED 2.11
  {
    id: "precalc-u2-022",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "hard",
    stem: "Let $f(x) = -\\log_5 x$. Which of the following statements about $f$ is true?",
    options: [
      "$\\displaystyle\\lim_{x \\to 0^{+}} f(x) = 0$ and $f$ is decreasing on its domain",
      "$\\displaystyle\\lim_{x \\to 0^{+}} f(x) = \\infty$ and $f$ is decreasing on its domain",
      "$\\displaystyle\\lim_{x \\to 0^{+}} f(x) = -\\infty$ and $f$ is decreasing on its domain",
      "$\\displaystyle\\lim_{x \\to 0^{+}} f(x) = \\infty$ and $f$ is increasing on its domain",
    ],
    correctIndex: 1,
    explanation:
      "As $x \\to 0^+$, $\\log_5 x \\to -\\infty$, so $-\\log_5 x \\to \\infty$: the $y$-axis is a vertical asymptote and the graph rises without bound on the left. Since $\\log_5 x$ is increasing, its negative is decreasing everywhere on $(0, \\infty)$. A limit of $-\\infty$ describes $\\log_5 x$ itself, before the reflection. The reflection over the $x$-axis makes $f$ decreasing, not increasing. The limit is not 0; $f(1) = 0$ is a value at $x = 1$, not the behavior near 0.",
  },
  // CED 2.12
  {
    id: "precalc-u2-023",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "Which of the following equations is true for all $x > 0$?",
    options: [
      "$\\log_2(x + 8) = 3 + \\log_2 x$",
      "$\\log_2(8x) = 3 + \\log_2 x$",
      "$\\log_2(8x) = 8\\log_2 x$",
      "$\\log_2\\left(x^{8}\\right) = 3 + \\log_2 x$",
    ],
    correctIndex: 1,
    explanation:
      "By the product property, $\\log_2(8x) = \\log_2 8 + \\log_2 x = 3 + \\log_2 x$. The logarithm of a sum, $\\log_2(x + 8)$, does not split; for instance at $x = 8$ it equals 4 while $3 + \\log_2 8 = 6$. $\\log_2(8x)$ is not $8\\log_2 x$; that would be $\\log_2(x^8)$ by the power property. And $\\log_2(x^8) = 8\\log_2 x$, which equals $3 + \\log_2 x$ only at one value of $x$, not for all $x$.",
  },
  // CED 2.13
  {
    id: "precalc-u2-024",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "medium",
    stem: "What is the solution of the equation $4^{x + 1} = \\dfrac{1}{8}$?",
    options: ["$x = -4$", "$x = -\\dfrac{3}{2}$", "$x = -\\dfrac{5}{2}$", "$x = -\\dfrac{1}{2}$"],
    correctIndex: 2,
    explanation:
      "Write both sides with base 2: $4^{x+1} = 2^{2x + 2}$ and $1/8 = 2^{-3}$. Equal bases give equal exponents, $2x + 2 = -3$, so $x = -5/2$. Check: $4^{-3/2} = 1/8$. $x = -4$ sets $x + 1 = -3$ as if the base were 2 instead of 4. $-3/2$ solves $2x + 2 = -1$, using $1/2$ instead of $1/8$. $-1/2$ solves $2x + 2 = 1$.",
  },
  // CED 2.9
  {
    id: "precalc-u2-025",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "easy",
    stem: "What is the value of $\\log_6 9 + \\log_6 4$?",
    options: ["$13$", "$2$", "$36$", "$-2$"],
    correctIndex: 1,
    explanation:
      "The product property combines the terms: $\\log_6 9 + \\log_6 4 = \\log_6 36 = 2$, because $6^2 = 36$. 13 adds the arguments, $9 + 4$, which is not a logarithm property. 36 is the product of the arguments, not its base-6 logarithm. $-2$ is $\\log_6\\left(\\tfrac{1}{36}\\right)$, the sign a subtraction of exponents would produce.",
  },
  // CED 2.13
  {
    id: "precalc-u2-026",
    unit: "unit-2",
    topicSlug: "logarithmic-functions-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "A town's population is modeled by $P(t) = 2000(1.05)^{t}$, where $t$ is the number of years after 2020. Using $\\log 2 \\approx 0.301$ and $\\log 1.05 \\approx 0.0212$, what is the first whole-number value of $t$ for which the model predicts a population greater than 4000?",
    options: ["$t = 14$", "$t = 15$", "$t = 20$", "$t = 40$"],
    correctIndex: 1,
    explanation:
      "Solve $2000(1.05)^t > 4000$, that is $(1.05)^t > 2$. Taking logarithms, $t \\log 1.05 > \\log 2$, so $t > \\dfrac{0.301}{0.0212} \\approx 14.2$. The first whole number greater than 14.2 is $t = 15$. $t = 14$ rounds 14.2 down, when the population is still below 4000. $t = 20$ treats 5% growth as adding 100 per year to reach 4000 in 20 years (linear). $t = 40$ divides 2 by 0.05.",
  },

  // ============ Standalone: composition and inverses (2.7–2.8) ============
  // CED 2.7
  {
    id: "precalc-u2-027",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "easy",
    stem: "Let $f(x) = x^{2} + 1$ and $g(x) = 3x - 2$. What is the value of $(f \\circ g)(2)$?",
    options: ["$13$", "$17$", "$9$", "$25$"],
    correctIndex: 1,
    explanation:
      "$(f \\circ g)(2) = f(g(2))$. First $g(2) = 3(2) - 2 = 4$, then $f(4) = 16 + 1 = 17$. 13 is $g(f(2)) = g(5)$, the composition in the opposite order. 9 is $f(2) + g(2) = 5 + 4$, adding the two outputs instead of composing. 25 is $(g(2) + 1)^2$, adding 1 before squaring.",
  },
  // CED 2.7
  {
    id: "precalc-u2-028",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = 2x - 1$ and $g(x) = \\dfrac{x}{x + 3}$. Which of the following is an expression for $g(f(x))$?",
    options: [
      "$\\dfrac{2x - 1}{x + 3}$",
      "$\\dfrac{2x}{x + 3} - 1$",
      "$\\dfrac{2x - 1}{2x + 2}$",
      "$\\dfrac{x}{2x + 2}$",
    ],
    correctIndex: 2,
    explanation:
      "Substitute $f(x)$ for every $x$ in $g$: $g(f(x)) = \\dfrac{2x - 1}{(2x - 1) + 3} = \\dfrac{2x - 1}{2x + 2}$. Replacing only the numerator's $x$ leaves the denominator $x + 3$ unchanged. $\\dfrac{2x}{x + 3} - 1$ is $f(g(x))$, the composition in the opposite order. $\\dfrac{x}{2x + 2}$ replaces $x$ only in the denominator.",
  },
  // CED 2.7
  {
    id: "precalc-u2-029",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "medium",
    stem: "Let $h(x) = \\sqrt{3x + 5}$. For which pair of functions $f$ and $g$ is $h(x) = f(g(x))$?",
    options: [
      "$f(x) = \\sqrt{3x}$ and $g(x) = x + 5$",
      "$f(x) = \\sqrt{x + 5}$ and $g(x) = 3$",
      "$f(x) = \\sqrt{x}$ and $g(x) = 3x + 5$",
      "$f(x) = 3x + 5$ and $g(x) = \\sqrt{x}$",
    ],
    correctIndex: 2,
    explanation:
      "In $f(g(x))$ the inner function $g$ acts first. Taking $g(x) = 3x + 5$ and then $f(x) = \\sqrt{x}$ gives $f(g(x)) = \\sqrt{3x + 5}$. Swapping them gives $3\\sqrt{x} + 5$. With $f(x) = \\sqrt{3x}$ and $g(x) = x + 5$ the composition is $\\sqrt{3x + 15}$. With $g(x) = 3$ the composition is the constant $\\sqrt{8}$.",
  },
  // CED 2.7
  {
    id: "precalc-u2-030",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = \\sqrt{x}$ and $g(x) = 4 - x^{2}$. What is the domain of $f \\circ g$?",
    options: ["$x \\ge 0$", "$-2 \\le x \\le 2$", "$x \\le 2$", "$x \\le -2$ or $x \\ge 2$"],
    correctIndex: 1,
    explanation:
      "$(f \\circ g)(x) = \\sqrt{4 - x^2}$ is defined when the radicand is nonnegative: $4 - x^2 \\ge 0$, so $x^2 \\le 4$ and $-2 \\le x \\le 2$. $x \\ge 0$ is the domain of $f$ alone, not of the composition. $x \\le 2$ keeps only one of the two bounds. $x \\le -2$ or $x \\ge 2$ reverses the inequality, choosing where $4 - x^2$ is negative.",
  },
  // CED 2.8
  {
    id: "precalc-u2-031",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "easy",
    stem: "Let $f(x) = 4 - 2x$. Which of the following is $f^{-1}(x)$?",
    options: [
      "$f^{-1}(x) = \\dfrac{x - 4}{2}$",
      "$f^{-1}(x) = 4 - \\dfrac{x}{2}$",
      "$f^{-1}(x) = \\dfrac{1}{4 - 2x}$",
      "$f^{-1}(x) = \\dfrac{4 - x}{2}$",
    ],
    correctIndex: 3,
    explanation:
      "Solve $y = 4 - 2x$ for $x$: $2x = 4 - y$, so $x = \\dfrac{4 - y}{2}$, and swapping variables gives $f^{-1}(x) = \\dfrac{4 - x}{2}$. Check: $f(1) = 2$ and $f^{-1}(2) = 1$. $\\dfrac{x - 4}{2}$ has the wrong sign (it inverts $2x - 4$). $4 - \\dfrac{x}{2}$ undoes the operations in the wrong order. The reciprocal $\\dfrac{1}{4 - 2x}$ is not an inverse function.",
  },
  // CED 2.8
  {
    id: "precalc-u2-032",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "hard",
    stem: "The function $f$ is defined by $f(x) = x^{2} - 6x$ for $x \\ge 3$, where it is one-to-one. What is the value of $f^{-1}(7)$?",
    options: ["$7$", "$-1$", "$-1$ and $7$", "$\\sqrt{7}$"],
    correctIndex: 0,
    explanation:
      "$f^{-1}(7)$ is the input $x$ in the domain of $f$ with $f(x) = 7$: $x^2 - 6x - 7 = (x - 7)(x + 1) = 0$ gives $x = 7$ or $x = -1$, and only $x = 7$ satisfies $x \\ge 3$. The value $-1$ is outside the restricted domain, which is exactly why the restriction makes $f$ one-to-one. An inverse function returns one value, so a pair is not possible. $\\sqrt{7}$ inverts $x^2$ alone, ignoring the $-6x$ term.",
  },
  // CED 2.8
  {
    id: "precalc-u2-033",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "hard",
    stem: "The function $f$ is one-to-one with domain $[0, 4]$ and range $[-3, 5]$. Which of the following statements must be true?",
    options: [
      "The graph of $f^{-1}$ is the reflection of the graph of $f$ over the line $y = x$.",
      "$f^{-1}(x) = \\dfrac{1}{f(x)}$ for every $x$ in the domain of $f$.",
      "The domain of $f^{-1}$ is $[0, 4]$.",
      "If $f$ is increasing, then $f^{-1}$ is decreasing.",
    ],
    correctIndex: 0,
    explanation:
      "An inverse function swaps inputs and outputs: every point $(a, b)$ on the graph of $f$ becomes $(b, a)$ on the graph of $f^{-1}$, which is the reflection over $y = x$. The reciprocal $1/f(x)$ is a different function entirely; the notation $f^{-1}$ does not mean an exponent. The domain of $f^{-1}$ is the range of $f$, $[-3, 5]$, not $[0, 4]$. Reflecting an increasing graph over $y = x$ gives an increasing graph, so $f^{-1}$ is also increasing.",
  },
  // CED 2.7
  {
    id: "precalc-u2-034",
    unit: "unit-2",
    topicSlug: "function-composition-inverses-precalc",
    difficulty: "medium",
    stem: "The radius, in meters, of a circular oil spill $t$ minutes after it begins is $r(t) = 2t + 3$, and the area of a circle of radius $r$ is $A(r) = \\pi r^{2}$. Which expression gives the area of the spill, in square meters, as a function of $t$?",
    options: ["$2\\pi t^{2} + 3$", "$\\pi t^{2}(2t + 3)$", "$2\\pi t + 3$", "$\\pi(2t + 3)^{2}$"],
    correctIndex: 3,
    explanation:
      "The area as a function of time is the composition $A(r(t))$: substitute $r = 2t + 3$ into $\\pi r^2$ to get $\\pi(2t + 3)^2$. $2\\pi t^2 + 3$ squares only $t$ and leaves the 3 outside. $\\pi t^2(2t + 3)$ multiplies $A(t)$ by $r(t)$ instead of composing. $2\\pi t + 3$ never squares the radius; it multiplies $r(t)$'s slope by $\\pi$ as if area were proportional to radius.",
  },

  // ============ Standalone: modeling (2.6, 2.14, 2.15) ============
  // CED 2.14
  {
    id: "precalc-u2-035",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A calculator's logarithmic regression gives $T(d) = 12.5 + 8.2\\ln d$ for the temperature $T$, in degrees Celsius, of water at depth $d$ meters in a pond. Which of the following is closest to the temperature the model predicts at a depth of $e^{2} \\approx 7.39$ meters?",
    options: ["$45.3^{\\circ}\\text{C}$", "$73.1^{\\circ}\\text{C}$", "$28.9^{\\circ}\\text{C}$", "$20.7^{\\circ}\\text{C}$"],
    correctIndex: 2,
    explanation:
      "At $d = e^2$, $\\ln d = 2$, so $T = 12.5 + 8.2(2) = 12.5 + 16.4 = 28.9$. $20.7$ uses $\\ln d = 1$. $45.3$ uses $\\ln d = 4$, squaring the exponent instead of reading it. $73.1$ substitutes $d \\approx 7.39$ in place of $\\ln d$.",
  },
  // CED 2.15
  {
    id: "precalc-u2-036",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "easy",
    calculator: true,
    stem: "A data set is plotted twice. On standard axes the points curve upward more and more steeply; on a semi-log plot (logarithmic vertical axis) the same points lie close to a line with positive slope. Which of the following conclusions is justified?",
    options: [
      "An exponential model is appropriate, because $\\log y$ is approximately a linear function of $x$.",
      "A linear model is appropriate, because the points on the semi-log plot lie on a line.",
      "A logarithmic model is appropriate, because the plot uses a logarithmic axis.",
      "A quadratic model is appropriate, because the standard plot curves upward.",
    ],
    correctIndex: 0,
    explanation:
      "A line on a semi-log plot means $\\log y = mx + c$, so $y = 10^{c}(10^{m})^{x}$: exponential growth when the slope is positive. The line describes $\\log y$, not $y$, so the data are not linear. The axis being logarithmic says nothing about the model; a logarithmic model would appear linear when $x$, not $y$, is on a log scale. Curving upward is consistent with several models, so it does not single out a quadratic.",
  },
  // CED 2.15
  {
    id: "precalc-u2-037",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "On a semi-log plot with a logarithmic vertical axis, a set of data lies on a line that passes through the points $(0, 50)$ and $(4, 800)$, where the second coordinate is the value of $y$. Which function models $y$?",
    options: [
      "$y = 50(2)^{x}$",
      "$y = 50(16)^{x}$",
      "$y = 50 + 187.5x$",
      "$y = 50(4)^{x}$",
    ],
    correctIndex: 0,
    explanation:
      "A line on a semi-log plot is an exponential model $y = ab^x$. The initial value is $a = 50$, and over 4 units of $x$ the output is multiplied by $800/50 = 16$, so $b^4 = 16$ and $b = 2$. $50(16)^x$ uses the 4-step factor as the per-unit factor. $50 + 187.5x$ connects the points with a straight line on standard axes, which would not be straight on a semi-log plot. $50(4)^x$ takes the square root of 16 instead of the fourth root.",
  },
  // CED 2.6
  {
    id: "precalc-u2-038",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A linear model is fit to a set of data. In the residual plot, the residuals are positive for the smallest and largest values of $x$ and negative for the values in between. Which of the following conclusions is best supported?",
    options: [
      "The linear model is appropriate, because the residuals are both positive and negative.",
      "The linear model is appropriate, because the residuals are centered near zero.",
      "The data contain an outlier at the largest value of $x$.",
      "The linear model is not appropriate, because the residuals show a pattern.",
    ],
    correctIndex: 3,
    explanation:
      "Residuals that are positive at both ends and negative in the middle form a curved pattern: the data bend upward away from the line, so a linear model misses the shape and another model (exponential or quadratic) should be tried. Having residuals of both signs or an average near zero happens for any least-squares line and does not show the model fits. A single outlier would produce one unusually large residual, not a systematic pattern.",
  },
  // CED 2.14
  {
    id: "precalc-u2-039",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "The magnitude $M$ of an earthquake is modeled by $M = \\log\\left(\\dfrac{I}{I_0}\\right)$, where $I$ is the intensity of the quake and $I_0$ is a reference intensity. A quake of magnitude 4.2 is recorded. A second quake has 1000 times the intensity of the first. What is the magnitude of the second quake?",
    options: ["$7.2$", "$1004.2$", "$12.6$", "$4200$"],
    correctIndex: 0,
    explanation:
      "Multiplying the intensity by 1000 adds $\\log 1000 = 3$ to the magnitude, because $\\log(1000 I/I_0) = \\log 1000 + \\log(I/I_0)$. So the magnitude is $4.2 + 3 = 7.2$. 1004.2 adds the intensity factor 1000 to the magnitude instead of its logarithm. 12.6 multiplies the magnitude by 3, treating the logarithm as a linear scale. 4200 multiplies the magnitude by 1000, as if $M$ were proportional to $I$.",
  },
  // CED 2.14
  {
    id: "precalc-u2-040",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "A logarithmic model $y = a + b\\log_2 x$ fits a data set, and the model passes through the points $(1, 4)$ and $(8, 13)$. What value does the model give when $x = 32$?",
    options: ["$22$", "$52$", "$100$", "$19$"],
    correctIndex: 3,
    explanation:
      "At $x = 1$, $\\log_2 1 = 0$, so $a = 4$. At $x = 8$, $\\log_2 8 = 3$, so $13 = 4 + 3b$ and $b = 3$. The model is $y = 4 + 3\\log_2 x$, and at $x = 32$, $\\log_2 32 = 5$ gives $y = 4 + 15 = 19$. 22 uses $\\log_2 32 = 6$. 52 is $4 + 3(16)$, reading $\\log_2 32$ as 16. 100 substitutes $x = 32$ directly for $\\log_2 x$.",
  },
  // CED 2.15
  {
    id: "precalc-u2-041",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A student believes that a data set $(x, y)$ is modeled well by an exponential function. Which plot would show the points lying approximately on a line if the student is right?",
    options: [
      "$\\log y$ plotted against $x$",
      "$y$ plotted against $\\log_{10} x$",
      "$\\log_{10} y$ plotted against $\\log_{10} x$",
      "$\\sqrt{y}$ plotted against $x$",
    ],
    correctIndex: 0,
    explanation:
      "If $y = ab^x$, then $\\log y = \\log a + (\\log b)x$, which is linear in $x$, so a plot of $\\log y$ against $x$ (a semi-log plot) is a line. Plotting $y$ against $\\log x$ linearizes a logarithmic model $y = a + b\\log x$. Plotting $\\log y$ against $\\log x$ linearizes a power model $y = ax^k$. Plotting $\\sqrt{y}$ against $x$ linearizes a quadratic model of the form $y = (mx + c)^2$.",
  },
  // CED 2.14
  {
    id: "precalc-u2-042",
    unit: "unit-2",
    topicSlug: "exponential-logarithmic-modeling-precalc",
    difficulty: "easy",
    calculator: true,
    stem: "The loudness of a sound, in decibels, is modeled by $L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$, where $I$ is the sound's intensity and $I_0$ is a reference intensity. If the intensity of a sound is multiplied by 100, by how many decibels does its loudness increase?",
    options: ["$20$", "$100$", "$200$", "$1000$"],
    correctIndex: 0,
    explanation:
      "$10\\log(100 I/I_0) = 10\\left(\\log 100 + \\log(I/I_0)\\right) = 10(2) + L$, so the loudness rises by 20 decibels. 100 treats decibels as proportional to intensity. 200 multiplies the factor 100 by $\\log 100 = 2$ instead of multiplying $\\log 100$ by 10. 1000 multiplies 10 by 100.",
  },

  // ============ Standalone: sequences (2.1–2.2) ============
  // CED 2.1
  {
    id: "precalc-u2-043",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "easy",
    stem: "The arithmetic sequence $a_n$ has $a_0 = -4$ and common difference $d = 5$. Which function $f$ satisfies $f(n) = a_n$ for every whole number $n \\ge 0$?",
    options: ["$f(n) = -4 - 5n$", "$f(n) = 5 - 4n$", "$f(n) = -4(5)^{n}$", "$f(n) = -4 + 5n$"],
    correctIndex: 3,
    explanation:
      "An arithmetic sequence is a linear function of $n$ whose slope is the common difference and whose value at $n = 0$ is $a_0$: $a_n = a_0 + dn = -4 + 5n$. $-4 - 5n$ has the wrong sign on $d$. $5 - 4n$ swaps the roles of $a_0$ and $d$. $-4(5)^n$ is a geometric sequence, which multiplies by 5 instead of adding it.",
  },
  // CED 2.2
  {
    id: "precalc-u2-044",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "easy",
    stem: "The first four terms of a geometric sequence are $2, 6, 18, 54$, with $g_1 = 2$. Which expression gives the $n$th term $g_n$?",
    options: ["$g_n = 2 \\cdot 3^{n}$", "$g_n = 2 \\cdot 3^{n - 1}$", "$g_n = 3 \\cdot 2^{n}$", "$g_n = 2 + 3(n - 1)$"],
    correctIndex: 1,
    explanation:
      "Each term is 3 times the previous one, so the common ratio is 3, and starting from $g_1 = 2$ the $n$th term has been multiplied by 3 a total of $n - 1$ times: $g_n = 2 \\cdot 3^{n-1}$. Check: $g_3 = 2 \\cdot 9 = 18$. $2 \\cdot 3^n$ gives $g_1 = 6$, one factor too many. $3 \\cdot 2^{n}$ swaps the ratio and the first term. $2 + 3(n - 1)$ adds 3 each step, an arithmetic sequence.",
  },
  // CED 2.1
  {
    id: "precalc-u2-045",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "medium",
    stem: "In an arithmetic sequence, $a_3 = 10$ and $a_8 = 30$. What is the value of $a_{20}$?",
    options: ["$82$", "$74$", "$90$", "$78$"],
    correctIndex: 3,
    explanation:
      "From term 3 to term 8 is 5 steps, so $d = (30 - 10)/5 = 4$. Then $a_{20} = a_8 + 12d = 30 + 48 = 78$ (equivalently $a_n = a_3 + 4(n - 3)$ gives $10 + 68 = 78$). 82 counts 13 steps from $a_8$ instead of 12. 74 counts 11 steps. 90 uses $d = 5$, dividing the change of 20 by 4 steps instead of 5.",
  },
  // CED 2.2
  {
    id: "precalc-u2-046",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "medium",
    stem: "A geometric sequence has $g_2 = 12$ and $g_5 = 96$, with a positive common ratio. Which expression gives $g_n$ for every whole number $n$?",
    options: ["$g_n = 3 \\cdot 2^{n}$", "$g_n = 48 \\cdot 2^{n - 3}$", "$g_n = 12 \\cdot 2^{n}$", "$g_n = 3 \\cdot 8^{n - 2}$"],
    correctIndex: 0,
    explanation:
      "From $g_2$ to $g_5$ is 3 steps, so $r^3 = 96/12 = 8$ and $r = 2$. Stepping back two terms from $g_2 = 12$ gives $g_0 = 12/4 = 3$, so $g_n = g_0 r^n = 3 \\cdot 2^n$. Check: $g_5 = 3 \\cdot 32 = 96$. $48 \\cdot 2^{n-3}$ anchors the value 48, which is $g_4$, at $n = 3$. $12 \\cdot 2^n$ uses $g_2$ as $g_0$. $3 \\cdot 8^{n-2}$ uses $r^3$ as the ratio.",
  },
  // CED 2.2
  {
    id: "precalc-u2-047",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "hard",
    stem: "A geometric sequence has $g_3 = 24$ and $g_6 = 3$. Which expression gives $g_n$?",
    options: [
      "$g_n = 24\\left(\\dfrac{1}{2}\\right)^{n}$",
      "$g_n = 3\\left(2\\right)^{n - 6}$",
      "$g_n = 24\\left(\\dfrac{1}{8}\\right)^{n}$",
      "$g_n = 24\\left(\\dfrac{1}{2}\\right)^{n - 3}$",
    ],
    correctIndex: 3,
    explanation:
      "Three steps take $g_3 = 24$ to $g_6 = 3$, so $r^3 = 3/24 = 1/8$ and $r = 1/2$. Using the known term as the anchor, $g_n = g_3 \\cdot r^{n - 3} = 24(1/2)^{n-3}$; check: $g_6 = 24(1/8) = 3$. $24(1/2)^n$ treats $g_3$ as $g_0$ (it gives $g_3 = 3$). $3(2)^{n-6}$ has the right anchor but a ratio of 2, so the sequence would grow. $24(1/8)^{n}$ uses $r^3$ as the ratio and $g_3$ as $g_0$.",
  },
  // CED 2.2
  {
    id: "precalc-u2-048",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "medium",
    stem: "A sequence begins $a_0 = 100$, $a_1 = 90$, $a_2 = 81$, $a_3 = 72.9$. Which of the following best describes the sequence?",
    options: [
      "Geometric with common ratio 0.9, so $a_n$ is an exponential function of $n$.",
      "Arithmetic with common difference $-10$, so $a_n$ is a linear function of $n$.",
      "Geometric with common ratio $-10$, so $a_n$ is an exponential function of $n$.",
      "Arithmetic with common difference $-9$, so $a_n$ is a linear function of $n$.",
    ],
    correctIndex: 0,
    explanation:
      "Successive quotients are constant: $90/100 = 81/90 = 72.9/81 = 0.9$, so the sequence is geometric with ratio 0.9 and $a_n = 100(0.9)^n$, an exponential function. The differences $-10, -9, -8.1$ are not constant, so the sequence is not arithmetic with either $-10$ or $-9$. A common ratio is a quotient, and $-10$ is the first difference, not a ratio.",
  },
  // CED 2.1
  {
    id: "precalc-u2-049",
    unit: "unit-2",
    topicSlug: "sequences-series-precalc",
    difficulty: "medium",
    stem: "An arithmetic sequence has $a_4 = 15$ and $a_9 = 40$. Which linear function $f$ satisfies $f(n) = a_n$ for every whole number $n$?",
    options: ["$f(n) = 5n + 15$", "$f(n) = 5n - 5$", "$f(n) = 5n - 20$", "$f(n) = 25n - 85$"],
    correctIndex: 1,
    explanation:
      "Five steps change the value by 25, so $d = 5$. Anchoring at the known term, $a_n = a_4 + 5(n - 4) = 15 + 5n - 20 = 5n - 5$; check: $f(9) = 40$. $5n + 15$ uses $a_4$ as the value at $n = 0$. $5n - 20$ drops the 15. $25n - 85$ uses the total change over the five steps as the slope.",
  },
]
