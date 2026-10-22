/**
 * AP Calculus BC diagnostic v2, Unit 9: Parametric Equations, Polar
 * Coordinates, and Vector-Valued Functions (9.1–9.9). No calculator. Polar
 * items cover slopes, motion toward or away from the origin, and area,
 * including the area between two polar curves (9.9); polar arc length is not
 * in the CED. Stimulus sets: a table of a particle's velocity components
 * (calcbc-s901) and the graph of r = 2 + sin 2θ (calcbc-s902).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcbc-s901",
    title: "Velocity components of a particle",
    kind: "table",
    content:
      "A particle moves in the $xy$-plane. Its position at time $t$ is $(x(t), y(t))$, where $x$ and $y$ are differentiable functions, and at time $t = 0$ the particle is at the point $(2, -3)$. " +
      "Selected values of $x'(t)$ and $y'(t)$ are given in the table, with $t$ in seconds and distances in meters.\n\n" +
      "| $t$ (seconds) | 0 | 1 | 2 | 3 | 4 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $x'(t)$ (meters per second) | 3 | 2 | 0 | $-1$ | $-2$ |\n" +
      "| $y'(t)$ (meters per second) | 4 | 5 | 3 | 1 | $-2$ |",
  },
  {
    id: "calcbc-s902",
    title: "The polar curve r = 2 + sin 2θ",
    kind: "figure",
    content:
      "The figure shows the polar curve $r = 2 + \\sin(2\\theta)$ for $0 \\le \\theta \\le 2\\pi$, drawn on a grid from $-3$ to $3$ in $x$ and $y$. The curve is a closed loop around the origin. " +
      "Its distance from the origin is greatest, 3, at $\\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{5\\pi}{4}$ (in the first and third quadrants) and least, 1, at $\\theta = \\frac{3\\pi}{4}$ and $\\theta = \\frac{7\\pi}{4}$. " +
      "The point where $\\theta = 0$ is $(2, 0)$, marked with a dot.",
    svg: FIGURES["calcbc-s902"],
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcbc-s901: particle velocity table ----
  {
    id: "calcbc-s901-q1",
    stimulusId: "calcbc-s901",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "easy",
    stem: "What is the speed of the particle at time $t = 1$?",
    options: ["$\\sqrt{29}$ meters per second", "$7$ meters per second", "$29$ meters per second", "$\\sqrt{21}$ meters per second"],
    correctIndex: 0,
    explanation:
      "Speed is the length of the velocity vector: $\\sqrt{\\left(x'(1)\\right)^2 + \\left(y'(1)\\right)^2} = \\sqrt{4 + 25} = \\sqrt{29}$ meters per second. 7 adds the components. 29 forgets the square root. $\\sqrt{21}$ subtracts the squares instead of adding them.",
  },
  {
    id: "calcbc-s901-q2",
    stimulusId: "calcbc-s901",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "medium",
    stem: "Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximate $x$-coordinate of the particle at time $t = 4$?",
    options: ["$3.5$", "$1.5$", "$6$", "$7.5$"],
    correctIndex: 0,
    explanation:
      "$x(4) = x(0) + \\int_0^4 x'(t)\\,dt$. The trapezoidal sum is $\\frac{3 + 2}{2} + \\frac{2 + 0}{2} + \\frac{0 + (-1)}{2} + \\frac{(-1) + (-2)}{2} = 2.5 + 1 - 0.5 - 1.5 = 1.5$, so $x(4) \\approx 2 + 1.5 = 3.5$. 1.5 is the horizontal displacement alone, without the starting value $x(0) = 2$. 6 uses a left Riemann sum, $3 + 2 + 0 - 1 = 4$. 7.5 adds the absolute values of the trapezoids, which estimates horizontal distance traveled, not position.",
  },
  {
    id: "calcbc-s901-q3",
    stimulusId: "calcbc-s901",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "hard",
    stem: "Which of the following statements about the particle's path must be true?",
    options: [
      "The path has a vertical tangent line where $t = 2$.",
      "The particle is at rest at time $t = 2$, since $x'(2) = 0$.",
      "At time $t = 1$, the particle is moving to the left and upward.",
      "The slope of the line tangent to the path at time $t = 3$ is $1$.",
    ],
    correctIndex: 0,
    explanation:
      "At $t = 2$, $x'(2) = 0$ and $y'(2) = 3 \\ne 0$: the particle moves straight up, so $\\frac{dy}{dx} = \\frac{y'}{x'}$ is undefined and the tangent line is vertical. It is not at rest, since $y'(2) \\ne 0$; rest needs both components to be 0. At $t = 1$, $x'(1) = 2 > 0$, so it is moving to the right (and upward, since $y'(1) = 5 > 0$). The slope at $t = 3$ is $\\frac{y'(3)}{x'(3)} = \\frac{1}{-1} = -1$, not 1.",
  },
  // ---- calcbc-s902: polar curve r = 2 + sin 2θ ----
  {
    id: "calcbc-s902-q1",
    stimulusId: "calcbc-s902",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "medium",
    stem: "What is the area of the region enclosed by the curve?",
    options: ["$\\dfrac{9\\pi}{2}$", "$4\\pi$", "$9\\pi$", "$\\dfrac{17\\pi}{4}$"],
    correctIndex: 0,
    explanation:
      "$A = \\frac{1}{2}\\int_0^{2\\pi}(2 + \\sin 2\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi}\\left(4 + 4\\sin 2\\theta + \\sin^2 2\\theta\\right)d\\theta$. Over $[0, 2\\pi]$: $\\int 4\\,d\\theta = 8\\pi$, $\\int 4\\sin 2\\theta\\,d\\theta = 0$, and $\\int \\sin^2 2\\theta\\,d\\theta = \\int\\frac{1 - \\cos 4\\theta}{2}\\,d\\theta = \\pi$. So $A = \\frac{1}{2}(9\\pi) = \\frac{9\\pi}{2}$. $4\\pi$ keeps only the constant term, $\\frac{1}{2}(8\\pi)$. $9\\pi$ forgets the $\\frac{1}{2}$ in the area formula. $\\frac{17\\pi}{4}$ takes $\\int_0^{2\\pi}\\sin^2 2\\theta\\,d\\theta$ as $\\frac{\\pi}{2}$ instead of $\\pi$.",
  },
  {
    id: "calcbc-s902-q2",
    stimulusId: "calcbc-s902",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "medium",
    stem: "For $\\dfrac{\\pi}{4} < \\theta < \\dfrac{3\\pi}{4}$, is the point on the curve moving toward the origin or away from it as $\\theta$ increases, and why?",
    options: [
      "Toward the origin, because $r > 0$ and $\\dfrac{dr}{d\\theta} < 0$",
      "Away from the origin, because $r > 0$ and $\\dfrac{dr}{d\\theta} > 0$",
      "Toward the origin, because $r$ is negative and $\\dfrac{dr}{d\\theta} > 0$",
      "Away from the origin, because $r > 0$ and $\\dfrac{dr}{d\\theta} < 0$",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{dr}{d\\theta} = 2\\cos 2\\theta$, and for $\\frac{\\pi}{4} < \\theta < \\frac{3\\pi}{4}$ the angle $2\\theta$ is between $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$, so $\\cos 2\\theta < 0$. Since $r = 2 + \\sin 2\\theta \\ge 1 > 0$, $r$ is a positive distance that is shrinking: the point moves toward the origin, from distance 3 down to 1, as the figure shows. The claim $\\frac{dr}{d\\theta} > 0$ misreads the sign of $\\cos 2\\theta$. $r$ is never negative on this curve. 'Away' with $r > 0$ and $\\frac{dr}{d\\theta} < 0$ reverses what a decreasing distance means.",
  },
  {
    id: "calcbc-s902-q3",
    stimulusId: "calcbc-s902",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "hard",
    stem: "What is the slope of the line tangent to the curve at the point where $\\theta = 0$?",
    options: ["$1$", "$0$", "$2$", "The tangent line is vertical."],
    correctIndex: 0,
    explanation:
      "With $x = r\\cos\\theta$ and $y = r\\sin\\theta$: $\\frac{dy}{d\\theta} = r'\\sin\\theta + r\\cos\\theta$ and $\\frac{dx}{d\\theta} = r'\\cos\\theta - r\\sin\\theta$. At $\\theta = 0$, $r = 2$ and $r' = 2\\cos 0 = 2$, so $\\frac{dy}{d\\theta} = 0 + 2 = 2$ and $\\frac{dx}{d\\theta} = 2 - 0 = 2$, giving $\\frac{dy}{dx} = 1$. 0 keeps only the $r'\\sin\\theta$ term of $\\frac{dy}{d\\theta}$. 2 is $\\frac{dr}{d\\theta}$, the rate of change of the distance, not the slope. A vertical tangent would need $\\frac{dx}{d\\theta} = 0$.",
  },
  // ---- standalone: parametric curves (9.1–9.3) ----
  {
    id: "calcbc-u9-001",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "easy",
    stem: "A curve is defined by the parametric equations $x = t^2 + 3t$ and $y = t^3 - 4t$. What is the value of $\\dfrac{dy}{dx}$ at $t = 1$?",
    options: ["$-\\dfrac{1}{5}$", "$-5$", "$-\\dfrac{1}{2}$", "$\\dfrac{1}{5}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2 - 4}{2t + 3}$, which is $\\frac{-1}{5}$ at $t = 1$. $-5$ divides in the wrong order, $\\frac{dx/dt}{dy/dt}$. $-\\frac{1}{2}$ differentiates $t^2 + 3t$ as $2t$, dropping the 3. $\\frac{1}{5}$ drops the sign of $3 - 4$.",
  },
  {
    id: "calcbc-u9-002",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "medium",
    stem: "A curve is defined by the parametric equations $x = e^t$ and $y = t^2 - 6t$. At which point does the curve have a horizontal tangent line?",
    options: ["$(e^3, -9)$", "$(3, -9)$", "$(1, 0)$", "$(e^3, 0)$"],
    correctIndex: 0,
    explanation:
      "A horizontal tangent needs $\\frac{dy}{dt} = 2t - 6 = 0$ while $\\frac{dx}{dt} = e^t \\ne 0$, so $t = 3$, at the point $(e^3, 9 - 18) = (e^3, -9)$. $(3, -9)$ uses the parameter value 3 as the $x$-coordinate. $(1, 0)$ is the point where $t = 0$. $(e^3, 0)$ reports the value of $\\frac{dy}{dt}$ as the $y$-coordinate.",
  },
  {
    id: "calcbc-u9-003",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "medium",
    stem: "A curve is defined by the parametric equations $x = 2t + 1$ and $y = t^3 - t^2$. What is the value of $\\dfrac{d^2y}{dx^2}$ at $t = 1$?",
    options: ["$1$", "$2$", "$4$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dy}{dx} = \\frac{3t^2 - 2t}{2}$. Then $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{dx/dt} = \\frac{(6t - 2)/2}{2} = \\frac{3t - 1}{2}$, which is 1 at $t = 1$. 2 is $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)$ without dividing by $\\frac{dx}{dt}$. 4 is $\\frac{d^2y}{dt^2} = 6t - 2$. $\\frac{1}{2}$ is $\\frac{dy}{dx}$ at $t = 1$, the first derivative.",
  },
  {
    id: "calcbc-u9-004",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "hard",
    stem: "A curve is defined by the parametric equations $x = t^3 + 1$ and $y = t^2 + t$. What is the value of $\\dfrac{d^2y}{dx^2}$ at $t = 1$?",
    options: ["$-\\dfrac{4}{9}$", "$-\\dfrac{4}{3}$", "$\\dfrac{4}{9}$", "$1$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dy}{dx} = \\frac{2t + 1}{3t^2}$. By the quotient rule, $\\frac{d}{dt}\\left(\\frac{2t + 1}{3t^2}\\right) = \\frac{2(3t^2) - (2t + 1)(6t)}{9t^4} = \\frac{-6t^2 - 6t}{9t^4}$, which is $-\\frac{12}{9} = -\\frac{4}{3}$ at $t = 1$. Dividing by $\\frac{dx}{dt} = 3t^2 = 3$ gives $\\frac{d^2y}{dx^2} = -\\frac{4}{9}$. $-\\frac{4}{3}$ skips the division by $\\frac{dx}{dt}$. $\\frac{4}{9}$ reverses the order of the quotient-rule numerator. 1 is $\\frac{dy}{dx}$ at $t = 1$.",
  },
  {
    id: "calcbc-u9-005",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "medium",
    stem: "A curve is defined by the parametric equations $x = \\sqrt{t}$ and $y = t^2$ for $t > 0$. Which of the following is an equation of the line tangent to the curve at the point where $t = 4$?",
    options: ["$y - 16 = 32(x - 2)$", "$y - 16 = 8(x - 2)$", "$y - 16 = 32(x - 4)$", "$y - 2 = 32(x - 16)$"],
    correctIndex: 0,
    explanation:
      "At $t = 4$ the point is $(\\sqrt{4}, 16) = (2, 16)$. The slope is $\\frac{dy}{dx} = \\frac{2t}{1/(2\\sqrt{t})} = 4t^{3/2} = 32$. 8 is $\\frac{dy}{dt}$, not the slope. $x - 4$ uses the parameter value as the $x$-coordinate. $y - 2 = 32(x - 16)$ swaps the coordinates of the point.",
  },
  {
    id: "calcbc-u9-006",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "hard",
    stem: "A curve is defined by the parametric equations $x = t^3 - 27t$ and $y = 2t^2 - 12t$. At which point or points does the curve have a vertical tangent line?",
    options: ["$(54, 54)$ only", "$(-54, -18)$ only", "$(54, 54)$ and $(-54, -18)$", "The curve has no vertical tangent line."],
    correctIndex: 0,
    explanation:
      "A vertical tangent needs $\\frac{dx}{dt} = 3t^2 - 27 = 0$ with $\\frac{dy}{dt} = 4t - 12 \\ne 0$. $\\frac{dx}{dt} = 0$ at $t = \\pm 3$. At $t = -3$, $\\frac{dy}{dt} = -24 \\ne 0$: a vertical tangent at $(-27 + 81, 18 + 36) = (54, 54)$. At $t = 3$, $\\frac{dy}{dt} = 0$ as well, so $\\frac{dy}{dx}$ is $\\frac{0}{0}$ there; the limit $\\lim_{t\\to 3}\\frac{4t - 12}{3t^2 - 27} = \\lim_{t\\to 3}\\frac{4}{3(t + 3)} = \\frac{2}{9}$ is a finite slope, not a vertical one. Listing $(-54, -18)$ ignores that $\\frac{dy}{dt}$ is also 0 at $t = 3$. 'No vertical tangent' rejects both points because of $t = 3$ and misses $t = -3$, where only $\\frac{dx}{dt}$ is 0.",
  },
  {
    id: "calcbc-u9-007",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "hard",
    stem: "A curve is defined by the parametric equations $x = \\dfrac{t^2}{2}$ and $y = \\dfrac{1}{3}(2t + 1)^{3/2}$. What is the length of the curve for $0 \\le t \\le 2$?",
    options: ["$4$", "$\\dfrac{26}{3}$", "$\\dfrac{5\\sqrt{5} - 1}{3}$", "$\\dfrac{9}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dx}{dt} = t$ and $\\frac{dy}{dt} = (2t + 1)^{1/2}$, so $\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2 = t^2 + 2t + 1 = (t + 1)^2$. The length is $\\int_0^2 (t + 1)\\,dt = 2 + 2 = 4$. $\\frac{26}{3}$ forgets the square root: $\\int_0^2 (t + 1)^2\\,dt$. $\\frac{5\\sqrt{5} - 1}{3}$ uses only $\\frac{dy}{dt}$: $\\int_0^2 (2t + 1)^{1/2}\\,dt$. $\\frac{9}{2}$ evaluates the antiderivative $\\frac{(t + 1)^2}{2}$ only at $t = 2$.",
  },
  {
    id: "calcbc-u9-008",
    unit: "unit-9",
    topicSlug: "parametric-curves-calculus-calcbc",
    difficulty: "easy",
    stem: "Which of the following gives the length of the path described by the parametric equations $x = 2t$ and $y = t^2$ for $0 \\le t \\le 3$?",
    options: [
      "$\\displaystyle\\int_0^3 \\sqrt{4 + 4t^2}\\,dt$",
      "$\\displaystyle\\int_0^3 \\sqrt{2 + 2t}\\,dt$",
      "$\\displaystyle\\int_0^3 \\sqrt{4 + t^4}\\,dt$",
      "$\\displaystyle\\int_0^3 \\left(4 + 4t^2\\right)dt$",
    ],
    correctIndex: 0,
    explanation:
      "The length is $\\int_0^3\\sqrt{\\left(x'(t)\\right)^2 + \\left(y'(t)\\right)^2}\\,dt$ with $x' = 2$ and $y' = 2t$: $\\sqrt{4 + 4t^2}$. $\\sqrt{2 + 2t}$ adds the derivatives without squaring them. $\\sqrt{4 + t^4}$ squares $y$ instead of $y'$. $\\left(4 + 4t^2\\right)$ leaves out the square root.",
  },
  // ---- standalone: vector-valued functions and motion (9.4–9.6) ----
  {
    id: "calcbc-u9-009",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "easy",
    stem: "A particle moves in the plane with position vector $\\left\\langle t^3 - 2t,\\ e^{2t}\\right\\rangle$. What is the velocity vector of the particle at $t = 0$?",
    options: ["$\\langle -2, 2\\rangle$", "$\\langle 0, 1\\rangle$", "$\\langle -2, 1\\rangle$", "$\\langle -2, 0\\rangle$"],
    correctIndex: 0,
    explanation:
      "Velocity is the derivative of each component: $\\left\\langle 3t^2 - 2,\\ 2e^{2t}\\right\\rangle$, which is $\\langle -2, 2\\rangle$ at $t = 0$. $\\langle 0, 1\\rangle$ is the position at $t = 0$. $\\langle -2, 1\\rangle$ forgets the chain-rule factor 2 in $\\frac{d}{dt}e^{2t}$. $\\langle -2, 0\\rangle$ differentiates $e^{2t}$ as $2te^{2t}$.",
  },
  {
    id: "calcbc-u9-010",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "medium",
    stem: "A particle moves in the plane with position vector $\\left\\langle \\ln(t + 1),\\ t^3\\right\\rangle$ for $t \\ge 0$. What is the acceleration vector of the particle at $t = 1$?",
    options: [
      "$\\left\\langle -\\dfrac{1}{4},\\ 6\\right\\rangle$",
      "$\\left\\langle \\dfrac{1}{2},\\ 3\\right\\rangle$",
      "$\\left\\langle \\dfrac{1}{4},\\ 6\\right\\rangle$",
      "$\\left\\langle -\\dfrac{1}{4},\\ 3\\right\\rangle$",
    ],
    correctIndex: 0,
    explanation:
      "Velocity is $\\left\\langle \\frac{1}{t + 1},\\ 3t^2\\right\\rangle$ and acceleration is $\\left\\langle -\\frac{1}{(t + 1)^2},\\ 6t\\right\\rangle$, which is $\\left\\langle -\\frac{1}{4}, 6\\right\\rangle$ at $t = 1$. $\\left\\langle \\frac{1}{2}, 3\\right\\rangle$ is the velocity. $\\frac{1}{4}$ loses the sign from differentiating $(t + 1)^{-1}$. $\\left\\langle -\\frac{1}{4}, 3\\right\\rangle$ takes the second derivative of $x$ but only the first derivative of $y$.",
  },
  {
    id: "calcbc-u9-011",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "medium",
    stem: "A particle moves in the plane with velocity vector $\\left\\langle 2t - 1,\\ 3t^2\\right\\rangle$, and its position at time $t = 1$ is $\\langle 4, -2\\rangle$. What is its position at time $t = 2$?",
    options: ["$\\langle 6, 5\\rangle$", "$\\langle 2, 7\\rangle$", "$\\langle 3, 12\\rangle$", "$\\langle 6, 6\\rangle$"],
    correctIndex: 0,
    explanation:
      "Position equals the starting position plus the integral of velocity: $x(2) = 4 + \\int_1^2 (2t - 1)\\,dt = 4 + \\big[t^2 - t\\big]_1^2 = 4 + 2 = 6$ and $y(2) = -2 + \\int_1^2 3t^2\\,dt = -2 + (8 - 1) = 5$. $\\langle 2, 7\\rangle$ is the displacement alone. $\\langle 3, 12\\rangle$ is the velocity at $t = 2$. $\\langle 6, 6\\rangle$ forgets to subtract the value of $t^3$ at the lower limit $t = 1$.",
  },
  {
    id: "calcbc-u9-012",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "hard",
    stem: "A particle moves in the plane with velocity vector $\\left\\langle t^2,\\ 2 - t\\right\\rangle$. What is the speed of the particle at $t = 1$, and is the speed increasing or decreasing at that time?",
    options: ["$\\sqrt{2}$; increasing", "$\\sqrt{2}$; decreasing", "$2$; increasing", "$2$; decreasing"],
    correctIndex: 0,
    explanation:
      "The speed is $s(t) = \\sqrt{t^4 + (2 - t)^2}$, so $s(1) = \\sqrt{1 + 1} = \\sqrt{2}$. Then $s'(t) = \\frac{4t^3 - 2(2 - t)}{2\\sqrt{t^4 + (2 - t)^2}}$, and at $t = 1$ the numerator is $4 - 2 = 2 > 0$, so the speed is increasing. 'Decreasing' looks only at the shrinking component $2 - t$ and ignores the faster growth of $t^2$. 2 adds the components, $1 + 1$, instead of taking the length of the vector.",
  },
  {
    id: "calcbc-u9-013",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "medium",
    stem: "A particle moves in the plane with velocity vector $\\left\\langle 2t,\\ t^2 - 1\\right\\rangle$. What is the total distance the particle travels from $t = 0$ to $t = 3$?",
    options: ["$12$", "$\\sqrt{117}$", "$9$", "$15$"],
    correctIndex: 0,
    explanation:
      "The speed is $\\sqrt{4t^2 + (t^2 - 1)^2} = \\sqrt{t^4 + 2t^2 + 1} = t^2 + 1$, so the distance is $\\int_0^3 (t^2 + 1)\\,dt = 9 + 3 = 12$. $\\sqrt{117}$ is the straight-line distance between the starting and ending points, the length of the displacement $\\langle 9, 6\\rangle$. 9 is the horizontal displacement $\\int_0^3 2t\\,dt$ alone. 15 integrates the sum of the components, $\\int_0^3 (2t + t^2 - 1)\\,dt$, instead of the speed.",
  },
  {
    id: "calcbc-u9-014",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "easy",
    stem: "A particle moves in the plane with position vector $\\left\\langle t^2 + 1,\\ 4t - t^2\\right\\rangle$. What is the speed of the particle at $t = 3$?",
    options: ["$2\\sqrt{10}$", "$8$", "$4$", "$40$"],
    correctIndex: 0,
    explanation:
      "Velocity is $\\langle 2t,\\ 4 - 2t\\rangle = \\langle 6, -2\\rangle$ at $t = 3$, so the speed is $\\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$. 8 adds the absolute values of the components. 4 adds the components with their signs. 40 forgets the square root.",
  },
  {
    id: "calcbc-u9-015",
    unit: "unit-9",
    topicSlug: "vector-valued-functions-calcbc",
    difficulty: "hard",
    stem: "A particle moves in the plane with velocity vector $\\left\\langle t^2 - 5t + 4,\\ 2t\\right\\rangle$ for $0 \\le t \\le 4$. At what time is the particle farthest to the right?",
    options: ["$t = 1$", "$t = 4$", "$t = 2.5$", "$t = 0$"],
    correctIndex: 0,
    explanation:
      "Farthest right means $x(t)$ is greatest. $x'(t) = t^2 - 5t + 4 = (t - 1)(t - 4)$ is positive on $0 < t < 1$ and negative on $1 < t < 4$, so $x$ increases until $t = 1$ and then decreases. Check the endpoints: $x(1) - x(0) = \\int_0^1 (t^2 - 5t + 4)\\,dt = \\frac{1}{3} - \\frac{5}{2} + 4 = \\frac{11}{6} > 0$, and $x(4) - x(0) = \\frac{64}{3} - 40 + 16 = -\\frac{8}{3} < 0$, so the maximum is at $t = 1$. At $t = 4$, $x'$ is 0 again, but $x$ has been decreasing since $t = 1$. $t = 2.5$ is where $x'$ is least, the fastest leftward motion. $t = 0$ ignores the rightward motion on $0 < t < 1$.",
  },
  // ---- standalone: polar curves (9.7–9.9) ----
  {
    id: "calcbc-u9-016",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "easy",
    stem: "Which of the following gives the area of the region bounded by the $x$-axis and the polar curve $r = \\theta + 1$ for $0 \\le \\theta \\le \\pi$?",
    options: [
      "$\\dfrac{1}{2}\\displaystyle\\int_0^{\\pi} (\\theta + 1)^2\\,d\\theta$",
      "$\\displaystyle\\int_0^{\\pi} (\\theta + 1)^2\\,d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_0^{\\pi} (\\theta + 1)\\,d\\theta$",
      "$\\pi\\displaystyle\\int_0^{\\pi} (\\theta + 1)^2\\,d\\theta$",
    ],
    correctIndex: 0,
    explanation:
      "Polar area is $\\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$: each thin sector has area $\\frac{1}{2}r^2\\,d\\theta$. Dropping the $\\frac{1}{2}$ treats the sectors as rectangles. $\\frac{1}{2}\\int r\\,d\\theta$ forgets to square $r$. $\\pi\\int r^2\\,d\\theta$ is the disc-method volume formula, not an area.",
  },
  {
    id: "calcbc-u9-017",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "medium",
    stem: "What is the area of one petal of the polar curve $r = 2\\sin(3\\theta)$?",
    options: ["$\\dfrac{\\pi}{3}$", "$\\dfrac{2\\pi}{3}$", "$\\pi$", "$\\dfrac{\\pi}{6}$"],
    correctIndex: 0,
    explanation:
      "One petal is traced for $0 \\le \\theta \\le \\frac{\\pi}{3}$, where $\\sin 3\\theta \\ge 0$. $A = \\frac{1}{2}\\int_0^{\\pi/3} 4\\sin^2 3\\theta\\,d\\theta = \\int_0^{\\pi/3}(1 - \\cos 6\\theta)\\,d\\theta = \\frac{\\pi}{3}$. $\\frac{2\\pi}{3}$ forgets the $\\frac{1}{2}$. $\\pi$ is the area of all three petals. $\\frac{\\pi}{6}$ integrates over half a petal, $0 \\le \\theta \\le \\frac{\\pi}{6}$.",
  },
  {
    id: "calcbc-u9-018",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "medium",
    stem: "For the polar curve $r = \\theta$, what is the value of $\\dfrac{dy}{dx}$ at $\\theta = \\dfrac{\\pi}{2}$?",
    options: ["$-\\dfrac{2}{\\pi}$", "$-\\dfrac{\\pi}{2}$", "$\\dfrac{2}{\\pi}$", "$1$"],
    correctIndex: 0,
    explanation:
      "$x = \\theta\\cos\\theta$ and $y = \\theta\\sin\\theta$. At $\\theta = \\frac{\\pi}{2}$: $\\frac{dy}{d\\theta} = \\sin\\theta + \\theta\\cos\\theta = 1$ and $\\frac{dx}{d\\theta} = \\cos\\theta - \\theta\\sin\\theta = -\\frac{\\pi}{2}$, so $\\frac{dy}{dx} = \\frac{1}{-\\pi/2} = -\\frac{2}{\\pi}$. $-\\frac{\\pi}{2}$ inverts the quotient. $\\frac{2}{\\pi}$ drops the minus sign in $\\frac{dx}{d\\theta}$. 1 is $\\frac{dy}{d\\theta}$ alone, which here also equals $\\frac{dr}{d\\theta}$.",
  },
  {
    id: "calcbc-u9-019",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "hard",
    stem: "Which of the following gives the area of the region enclosed by the inner loop of the polar curve $r = 1 + 2\\sin\\theta$?",
    options: [
      "$\\dfrac{1}{2}\\displaystyle\\int_{7\\pi/6}^{11\\pi/6} (1 + 2\\sin\\theta)^2\\,d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_{\\pi/6}^{5\\pi/6} (1 + 2\\sin\\theta)^2\\,d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_{0}^{2\\pi} (1 + 2\\sin\\theta)^2\\,d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_{-\\pi/6}^{7\\pi/6} (1 + 2\\sin\\theta)^2\\,d\\theta$",
    ],
    correctIndex: 0,
    explanation:
      "The inner loop is traced between consecutive zeros of $r$ where $r \\le 0$: $1 + 2\\sin\\theta = 0$ at $\\theta = \\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$, and $r < 0$ in between. Squaring $r$ makes its sign irrelevant, so the area is $\\frac{1}{2}\\int_{7\\pi/6}^{11\\pi/6} r^2\\,d\\theta$. From $\\frac{\\pi}{6}$ to $\\frac{5\\pi}{6}$, $r$ runs from 2 up to 3 and back: that is part of the outer loop, not a zero-to-zero interval. $0$ to $2\\pi$ adds the inner loop's area to the area inside the outer loop. $-\\frac{\\pi}{6}$ to $\\frac{7\\pi}{6}$ traces the outer loop, where $r \\ge 0$.",
  },
  {
    id: "calcbc-u9-020",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "easy",
    stem: "What are the rectangular coordinates of the point on the polar curve $r = 4\\sin\\theta$ where $\\theta = \\dfrac{\\pi}{6}$?",
    options: ["$(\\sqrt{3}, 1)$", "$(1, \\sqrt{3})$", "$\\left(2, \\dfrac{\\pi}{6}\\right)$", "$(2\\sqrt{3}, 2)$"],
    correctIndex: 0,
    explanation:
      "$r = 4\\sin\\frac{\\pi}{6} = 2$, so $x = r\\cos\\theta = 2\\cdot\\frac{\\sqrt{3}}{2} = \\sqrt{3}$ and $y = r\\sin\\theta = 2\\cdot\\frac{1}{2} = 1$. $(1, \\sqrt{3})$ swaps sine and cosine. $\\left(2, \\frac{\\pi}{6}\\right)$ is the polar pair $(r, \\theta)$, not rectangular coordinates. $(2\\sqrt{3}, 2)$ uses $r = 4$ instead of $r = 4\\sin\\frac{\\pi}{6}$.",
  },
  {
    id: "calcbc-u9-021",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "medium",
    stem: "A polar curve $r = f(\\theta)$ has $f\\left(\\dfrac{\\pi}{2}\\right) = 4$ and $f'\\left(\\dfrac{\\pi}{2}\\right) = 2$. What is the slope of the line tangent to the curve at the point where $\\theta = \\dfrac{\\pi}{2}$?",
    options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-2$", "$2$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dy}{d\\theta} = f'\\sin\\theta + f\\cos\\theta = 2(1) + 4(0) = 2$ and $\\frac{dx}{d\\theta} = f'\\cos\\theta - f\\sin\\theta = 0 - 4 = -4$, so $\\frac{dy}{dx} = \\frac{2}{-4} = -\\frac{1}{2}$. $\\frac{1}{2}$ uses $f'\\cos\\theta + f\\sin\\theta$ for $\\frac{dx}{d\\theta}$, losing the minus sign. $-2$ inverts the quotient. 2 is $f'\\left(\\frac{\\pi}{2}\\right)$, the rate of change of $r$, not the slope.",
  },
  {
    id: "calcbc-u9-022",
    unit: "unit-9",
    topicSlug: "polar-calculus-calcbc",
    difficulty: "hard",
    stem: "Which of the following gives the area of the region that is inside the circle $r = 2\\sin\\theta$ and outside the circle $r = 1$?",
    options: [
      "$\\dfrac{1}{2}\\displaystyle\\int_{\\pi/6}^{5\\pi/6} \\left(4\\sin^2\\theta - 1\\right)d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_{\\pi/6}^{5\\pi/6} \\left(2\\sin\\theta - 1\\right)^2 d\\theta$",
      "$\\dfrac{1}{2}\\displaystyle\\int_{0}^{\\pi} \\left(4\\sin^2\\theta - 1\\right)d\\theta$",
      "$\\displaystyle\\int_{\\pi/6}^{5\\pi/6} \\left(4\\sin^2\\theta - 1\\right)d\\theta$",
    ],
    correctIndex: 0,
    explanation:
      "The circles meet where $2\\sin\\theta = 1$: $\\theta = \\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$. Between those angles $2\\sin\\theta \\ge 1$, and the area is $\\frac{1}{2}\\int\\left(r_{\\text{outer}}^2 - r_{\\text{inner}}^2\\right)d\\theta = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\left(4\\sin^2\\theta - 1\\right)d\\theta$. Squaring the difference, $(2\\sin\\theta - 1)^2$, is not the difference of the squares. $0$ to $\\pi$ includes angles where $2\\sin\\theta < 1$, which subtracts area that is not in the region. Dropping the $\\frac{1}{2}$ treats the sectors as rectangles.",
  },
]
