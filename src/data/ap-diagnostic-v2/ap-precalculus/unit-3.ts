/**
 * AP Precalculus diagnostic v2, Unit 3: Trigonometric and Polar Functions
 * (CED 3.1–3.15). Part A (no-calculator) style unless `calculator: true`
 * marks a Part B-style context item (still hand-doable). Stimulus sets: the
 * graph of a sinusoid (precalc-s301), a table of tide depths (precalc-s302)
 * and the polar graph r = 1 + 2 cos θ (precalc-s303). Off-exam by owner rule:
 * half-angle identities, Law of Sines/Cosines, Unit 4, calculus.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures-unit-3'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "precalc-s301",
    title: "Graph of a sinusoidal function f",
    kind: "figure",
    content:
      "The figure shows the graph of a sinusoidal function $f$ on the interval $-1 \\le x \\le 7$. " +
      "The graph has maximum points at $(2, 5)$ and $(6, 5)$ and minimum points at $(0, -1)$ and $(4, -1)$, " +
      "and it crosses the horizontal line $y = 2$ at $x = 1$, $x = 3$, $x = 5$ and $x = 7$.",
    svg: FIGURES["precalc-s301"],
  },
  {
    id: "precalc-s302",
    title: "Depth of water at a pier",
    kind: "table",
    content:
      "The depth of the water at the end of a pier varies with the tide. The table gives the depth $D(t)$, in meters, " +
      "at 2-hour intervals, where $t$ is the number of hours after midnight. The depth is modeled by a sinusoidal function of $t$.\n\n" +
      "| $t$ (hours) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n" +
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n" +
      "| $D(t)$ (meters) | 5.5 | 7 | 5.5 | 2.5 | 1 | 2.5 | 5.5 | 7 |",
  },
  {
    id: "precalc-s303",
    title: "The polar curve r = 1 + 2 cos θ",
    kind: "figure",
    content:
      "The figure shows the graph of the polar function $r = f(\\theta) = 1 + 2\\cos\\theta$ for $0 \\le \\theta \\le 2\\pi$, a limaçon with an inner loop. " +
      "The outer loop is farthest from the origin at the point $(3, 0)$, reached when $\\theta = 0$. The curve passes through the origin twice, " +
      "once entering and once leaving the inner loop, which is traced while $r$ is negative. The inner loop lies inside the outer loop and is " +
      "farthest from the origin at the point $(1, 0)$, reached when $\\theta = \\pi$.",
    svg: FIGURES["precalc-s303"],
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- precalc-s301: graph of a sinusoid ----
  // CED 3.5
  {
    id: "precalc-s301-q1",
    stimulusId: "precalc-s301",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "easy",
    stem: "Based on the graph, what are the amplitude and the midline of $f$?",
    options: ["Amplitude 3; midline $y = 2$", "Amplitude 6; midline $y = 2$", "Amplitude 3; midline $y = 0$", "Amplitude 5; midline $y = 2$"],
    correctIndex: 0,
    explanation:
      "The maximum value is 5 and the minimum is $-1$, so the midline is $y = \\frac{5 + (-1)}{2} = 2$ and the amplitude is $\\frac{5 - (-1)}{2} = 3$. Amplitude 6 is the full distance from minimum to maximum, not half of it. Midline $y = 0$ assumes the graph is centered on the $x$-axis. Amplitude 5 reads the maximum value as the amplitude.",
  },
  // CED 3.6
  {
    id: "precalc-s301-q2",
    stimulusId: "precalc-s301",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    stem: "Which of the following could be an expression for $f(x)$?",
    options: [
      "$3\\sin\\left(\\dfrac{\\pi}{4}(x - 1)\\right) + 2$",
      "$3\\sin\\left(\\dfrac{\\pi}{2}(x + 1)\\right) + 2$",
      "$3\\sin\\left(\\dfrac{\\pi}{2}(x - 1)\\right) + 2$",
      "$3\\sin(4(x - 1)) + 2$",
    ],
    correctIndex: 2,
    explanation:
      "Consecutive maxima are at $x = 2$ and $x = 6$, so the period is 4 and $b = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. The graph crosses the midline going up at $x = 1$, where a sine curve starts, so the shift is 1 unit right: $f(x) = 3\\sin\\left(\\frac{\\pi}{2}(x - 1)\\right) + 2$. Using $\\frac{\\pi}{4}$ doubles the period to 8. Using $(x + 1)$ shifts the curve left, giving $f(2) = -1$ instead of 5. Using $b = 4$ confuses the period with $b$.",
  },
  // CED 3.6
  {
    id: "precalc-s301-q3",
    stimulusId: "precalc-s301",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "hard",
    stem: "Which of the following expressions is equivalent to $f(x)$ for all $x$ in the domain shown?",
    options: [
      "$3\\cos\\left(\\dfrac{\\pi}{2}x\\right) + 2$",
      "$-3\\cos\\left(\\dfrac{\\pi}{2}x\\right) + 2$",
      "$-3\\cos\\left(\\dfrac{\\pi}{2}(x - 1)\\right) + 2$",
      "$3\\cos\\left(\\dfrac{\\pi}{2}(x - 1)\\right) + 2$",
    ],
    correctIndex: 1,
    explanation:
      "A cosine curve starts at a maximum, and a reflected cosine starts at a minimum. The graph has a minimum at $x = 0$, so with no horizontal shift $f(x) = -3\\cos\\left(\\frac{\\pi}{2}x\\right) + 2$; check $f(0) = -3 + 2 = -1$ and $f(2) = -3\\cos\\pi + 2 = 5$. $3\\cos\\left(\\frac{\\pi}{2}x\\right) + 2$ has a maximum at $x = 0$. The two expressions with $(x - 1)$ give $f(0) = 2$, a midline value, not the minimum $-1$.",
  },

  // ---- precalc-s302: tide table ----
  // CED 3.1
  {
    id: "precalc-s302-q1",
    stimulusId: "precalc-s302",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "easy",
    stem: "Based on the table, what is the period of $D$?",
    options: ["12 hours", "14 hours", "6 hours", "8 hours"],
    correctIndex: 0,
    explanation:
      "The depth is at its maximum of 7 meters at $t = 2$ and next at $t = 14$, so one full cycle takes $14 - 2 = 12$ hours. 6 hours is the time from the maximum to the next minimum, half a period. 14 hours is the time of the second maximum, not the gap between maxima. 8 hours is the time of the minimum.",
  },
  // CED 3.1
  {
    id: "precalc-s302-q2",
    stimulusId: "precalc-s302",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    calculator: true,
    stem: "What is the average rate of change of the depth over the interval $4 \\le t \\le 8$?",
    options: ["$-4.5$ meters per hour", "$-1.125$ meters per hour", "$-2.25$ meters per hour", "$1.125$ meters per hour"],
    correctIndex: 1,
    explanation:
      "The average rate of change is $\\frac{D(8) - D(4)}{8 - 4} = \\frac{1 - 5.5}{4} = -1.125$ meters per hour. $-4.5$ is the change in depth without dividing by the 4-hour interval. $-2.25$ divides by 2, the number of table steps, instead of by 4 hours. $1.125$ has the wrong sign: the depth is falling.",
  },
  // CED 3.7
  {
    id: "precalc-s302-q3",
    stimulusId: "precalc-s302",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    calculator: true,
    stem: "Which of the following functions best models the depth, in meters, $t$ hours after midnight?",
    options: [
      "$D(t) = 3\\cos\\left(\\dfrac{\\pi}{12}(t - 2)\\right) + 4$",
      "$D(t) = -3\\sin\\left(\\dfrac{\\pi}{6}(t - 2)\\right) + 4$",
      "$D(t) = 3\\cos\\left(\\dfrac{\\pi}{6}(t - 2)\\right) + 5.5$",
      "$D(t) = 3\\cos\\left(\\dfrac{\\pi}{6}(t - 2)\\right) + 4$",
    ],
    correctIndex: 3,
    explanation:
      "Maximum 7 and minimum 1 give midline $\\frac{7 + 1}{2} = 4$ and amplitude $\\frac{7 - 1}{2} = 3$. The period is 12 hours, so $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$, and a cosine shifted to start at the maximum at $t = 2$ gives $3\\cos\\left(\\frac{\\pi}{6}(t - 2)\\right) + 4$. $\\frac{\\pi}{12}$ gives a 24-hour period. The sine version equals the midline value 4 at $t = 2$, not the maximum. The version with $+ 5.5$ takes the depth at midnight as the midline instead of averaging the maximum and minimum.",
  },
  // CED 3.10
  {
    id: "precalc-s302-q4",
    stimulusId: "precalc-s302",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "hard",
    calculator: true,
    stem: "According to the sinusoidal model, at which times $t$, where $0 \\le t \\le 24$, is the depth exactly 2.5 meters?",
    options: ["$t = 6$ and $t = 18$ only", "$t = 6, 10, 14,$ and $18$", "$t = 2, 6, 14,$ and $18$", "$t = 6, 10, 18,$ and $22$"],
    correctIndex: 3,
    explanation:
      "The table shows $D = 2.5$ at $t = 6$ and $t = 10$, and the depth repeats every 12 hours, so it is also 2.5 at $t = 18$ and $t = 22$; in the model, $\\cos\\left(\\frac{\\pi}{6}(t - 2)\\right) = -\\frac{1}{2}$ there. Listing only 6 and 18 misses the second solution in each cycle. The choice with 14 includes a maximum time; the choice with 2 includes the time of the first maximum.",
  },

  // ---- precalc-s303: polar limaçon ----
  // CED 3.14
  {
    id: "precalc-s303-q1",
    stimulusId: "precalc-s303",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "easy",
    stem: "For which values of $\\theta$ in $[0, 2\\pi)$ does the graph pass through the origin?",
    options: [
      "$\\theta = \\dfrac{\\pi}{2}$ and $\\theta = \\dfrac{3\\pi}{2}$",
      "$\\theta = \\dfrac{2\\pi}{3}$ and $\\theta = \\dfrac{4\\pi}{3}$",
      "$\\theta = \\pi$ only",
      "$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{5\\pi}{3}$",
    ],
    correctIndex: 1,
    explanation:
      "The curve is at the origin exactly when $r = 0$: $1 + 2\\cos\\theta = 0$ gives $\\cos\\theta = -\\frac{1}{2}$, so $\\theta = \\frac{2\\pi}{3}$ or $\\theta = \\frac{4\\pi}{3}$. At $\\theta = \\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$, $r = 1$. At $\\theta = \\pi$, $r = -1$, which is the point $(1, 0)$, not the origin. $\\cos\\theta = +\\frac{1}{2}$ at $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$, where $r = 2$.",
  },
  // CED 3.15
  {
    id: "precalc-s303-q2",
    stimulusId: "precalc-s303",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "On which of the following intervals is $r = f(\\theta)$ increasing?",
    options: ["$0 < \\theta < \\pi$", "$\\dfrac{2\\pi}{3} < \\theta < \\dfrac{4\\pi}{3}$", "$\\pi < \\theta < 2\\pi$", "$0 < \\theta < \\dfrac{2\\pi}{3}$"],
    correctIndex: 2,
    explanation:
      "$r = 1 + 2\\cos\\theta$ increases exactly where $\\cos\\theta$ increases, which is on $\\pi < \\theta < 2\\pi$ (from $r = -1$ up to $r = 3$). On $0 < \\theta < \\pi$ cosine decreases, so $r$ decreases. On the inner-loop interval $\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}$, $r$ first decreases to $-1$ and then increases. On $0 < \\theta < \\frac{2\\pi}{3}$, $r$ decreases from 3 to 0.",
  },
  // CED 3.15
  {
    id: "precalc-s303-q3",
    stimulusId: "precalc-s303",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "hard",
    stem: "Which of the following statements is true for $\\dfrac{2\\pi}{3} < \\theta < \\pi$?",
    options: [
      "$r$ is negative and increasing, and the distance between the point and the origin is decreasing.",
      "$r$ is positive and decreasing, and the distance between the point and the origin is decreasing.",
      "$r$ is negative and decreasing, and the distance between the point and the origin is decreasing.",
      "$r$ is negative and decreasing, and the distance between the point and the origin is increasing.",
    ],
    correctIndex: 3,
    explanation:
      "On this interval $\\cos\\theta$ falls from $-\\frac{1}{2}$ to $-1$, so $r = 1 + 2\\cos\\theta$ falls from 0 to $-1$: $r$ is negative and decreasing. The distance from the origin is $|r|$, which grows from 0 to 1, so the distance is increasing. Saying $r$ is increasing reverses the direction of cosine; saying $r$ is positive ignores that the inner loop has $r < 0$; and saying the distance decreases confuses the sign of $r$ with its size.",
  },
  // ---- standalone: trigonometric functions (3.1–3.4, 3.8) ----
  // CED 3.3
  {
    id: "precalc-u3-001",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "easy",
    calculator: true,
    stem: "A lawn sprinkler arm of length 8 meters rotates through an angle of $\\dfrac{3\\pi}{4}$ radians. How far does the tip of the arm travel?",
    options: ["$\\dfrac{3\\pi}{32}$ meters", "$\\dfrac{3\\pi}{4}$ meters", "$6\\pi$ meters", "$12\\pi$ meters"],
    correctIndex: 2,
    explanation:
      "Arc length equals radius times the angle in radians: $8 \\cdot \\frac{3\\pi}{4} = 6\\pi$ meters. $\\frac{3\\pi}{32}$ divides the angle by the radius instead of multiplying. $\\frac{3\\pi}{4}$ meters is the angle itself, forgetting to multiply by the radius. $12\\pi$ uses the diameter in place of the radius.",
  },
  // CED 3.2
  {
    id: "precalc-u3-002",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    stem: "The terminal ray of an angle $\\theta$ in standard position passes through the point $(5, -12)$. What is the value of $\\sin\\theta$?",
    options: ["$-\\dfrac{12}{13}$", "$-\\dfrac{12}{5}$", "$\\dfrac{12}{13}$", "$\\dfrac{5}{13}$"],
    correctIndex: 0,
    explanation:
      "The point is $r = \\sqrt{5^2 + (-12)^2} = 13$ units from the origin, and $\\sin\\theta = \\frac{y}{r} = \\frac{-12}{13}$. $\\frac{5}{13}$ is $\\cos\\theta$, the $x$-coordinate over $r$. $-\\frac{12}{5}$ is $\\tan\\theta$, the ratio $\\frac{y}{x}$. $\\frac{12}{13}$ drops the sign even though the point is below the $x$-axis.",
  },
  // CED 3.3
  {
    id: "precalc-u3-003",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "easy",
    stem: "Which of the following angles is coterminal with an angle of $\\dfrac{17\\pi}{6}$ radians?",
    options: ["$\\dfrac{13\\pi}{6}$", "$\\dfrac{5\\pi}{6}$", "$-\\dfrac{5\\pi}{6}$", "$\\dfrac{11\\pi}{6}$"],
    correctIndex: 1,
    explanation:
      "Coterminal angles differ by a multiple of $2\\pi = \\frac{12\\pi}{6}$: $\\frac{17\\pi}{6} - \\frac{12\\pi}{6} = \\frac{5\\pi}{6}$. $\\frac{13\\pi}{6}$ differs from $\\frac{17\\pi}{6}$ by $\\frac{4\\pi}{6}$, which is not a full turn. $-\\frac{5\\pi}{6}$ is the reflection of the answer across the $x$-axis. $\\frac{11\\pi}{6}$ subtracts $\\pi$ instead of $2\\pi$.",
  },
  // CED 3.4
  {
    id: "precalc-u3-004",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    stem: "Let $\\theta$ be an angle with $0 < \\theta < \\dfrac{\\pi}{2}$ and $\\cos\\theta = k$. Which of the following is equal to $\\cos(\\pi - \\theta) + \\cos(2\\pi - \\theta)$?",
    options: ["$2k$", "$0$", "$-2k$", "$-k$"],
    correctIndex: 1,
    explanation:
      "By the symmetry of the unit circle, $\\cos(\\pi - \\theta) = -\\cos\\theta = -k$ (reflection across the $y$-axis) and $\\cos(2\\pi - \\theta) = \\cos\\theta = k$ (reflection across the $x$-axis), so the sum is $-k + k = 0$. $2k$ treats both as $\\cos\\theta$; $-2k$ treats both as $-\\cos\\theta$; $-k$ keeps only the first term.",
  },
  // CED 3.1
  {
    id: "precalc-u3-005",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "The height of a point on a rotating gear is a periodic function $h$ of time $t$, in seconds, with period 6 seconds. It is known that $h(1) = 4$ and $h(4) = -2$. Which of the following must be true?",
    options: ["$h(13) = 4$", "$h(10) = -4$", "$h(19) = -2$", "$h(-1) = -2$"],
    correctIndex: 0,
    explanation:
      "A function with period 6 satisfies $h(t + 6k) = h(t)$ for every integer $k$, so $h(13) = h(1 + 12) = h(1) = 4$. $h(19) = h(1 + 18) = 4$, not $-2$. $h(10) = h(4) = -2$, not $-4$; a period repeats values, it does not double them. $h(-1) = h(5)$, and nothing is known about $h(5)$.",
  },
  // CED 3.8
  {
    id: "precalc-u3-006",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    stem: "Let $g(x) = \\tan x$. Which of the following statements is true on the interval $\\dfrac{\\pi}{2} < x < \\pi$?",
    options: [
      "$g$ is increasing, and $g(x) < 0$ for every $x$ in the interval.",
      "$g$ is decreasing, and $g(x) < 0$ for every $x$ in the interval.",
      "$g$ is increasing, and $g(x) > 0$ for every $x$ in the interval.",
      "$g$ is decreasing, and $g(x) > 0$ for every $x$ in the interval.",
    ],
    correctIndex: 0,
    explanation:
      "On $\\frac{\\pi}{2} < x < \\pi$ the terminal ray is in Quadrant II, where $\\sin x > 0$ and $\\cos x < 0$, so $\\tan x = \\frac{\\sin x}{\\cos x} < 0$. The tangent function increases on every interval between consecutive vertical asymptotes, rising from $-\\infty$ just after $\\frac{\\pi}{2}$ to 0 at $\\pi$. Saying $g$ is decreasing misreads the graph's steep rise near the asymptote; saying $g(x) > 0$ ignores the negative cosine in Quadrant II.",
  },
  // CED 3.8
  {
    id: "precalc-u3-007",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    stem: "Let $h(x) = \\tan(2x)$. What is the period of $h$, and what is the least positive value of $x$ at which the graph of $h$ has a vertical asymptote?",
    options: [
      "Period $\\pi$; asymptote at $x = \\dfrac{\\pi}{2}$",
      "Period $\\dfrac{\\pi}{2}$; asymptote at $x = \\dfrac{\\pi}{4}$",
      "Period $\\dfrac{\\pi}{2}$; asymptote at $x = \\dfrac{\\pi}{2}$",
      "Period $4\\pi$; asymptote at $x = \\pi$",
    ],
    correctIndex: 1,
    explanation:
      "The tangent function has period $\\pi$, so $\\tan(2x)$ has period $\\frac{\\pi}{2}$. Vertical asymptotes occur where $\\cos(2x) = 0$, that is $2x = \\frac{\\pi}{2}$, so the first positive one is at $x = \\frac{\\pi}{4}$. Period $\\pi$ with the asymptote at $\\frac{\\pi}{2}$ ignores the factor of 2. Period $\\frac{\\pi}{2}$ with the asymptote at $\\frac{\\pi}{2}$ halves the period but not the asymptote location. Period $4\\pi$ treats the 2 as a horizontal stretch and uses $2\\pi$ as the base period.",
  },
  // CED 3.4
  {
    id: "precalc-u3-008",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "hard",
    stem: "The angle $\\theta$ satisfies $\\sin\\theta = -\\dfrac{\\sqrt{5}}{3}$ and $\\cos\\theta > 0$. What is the value of $\\cos(\\theta + \\pi)$?",
    options: ["$\\dfrac{2}{3}$", "$-\\dfrac{2}{3}$", "$\\dfrac{\\sqrt{5}}{3}$", "$-\\dfrac{\\sqrt{5}}{3}$"],
    correctIndex: 1,
    explanation:
      "From $\\sin^2\\theta + \\cos^2\\theta = 1$, $\\cos^2\\theta = 1 - \\frac{5}{9} = \\frac{4}{9}$, and $\\cos\\theta > 0$ gives $\\cos\\theta = \\frac{2}{3}$. Adding $\\pi$ moves the point on the unit circle to the diametrically opposite point, so $\\cos(\\theta + \\pi) = -\\cos\\theta = -\\frac{2}{3}$. $\\frac{2}{3}$ is $\\cos\\theta$ itself, forgetting the half-turn. $\\frac{\\sqrt{5}}{3}$ and $-\\frac{\\sqrt{5}}{3}$ are values of $\\pm\\sin\\theta$, not cosine.",
  },
  // CED 3.1
  {
    id: "precalc-u3-009",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A rider on a Ferris wheel is at the lowest point, 2 meters above the ground, at time $t = 0$ seconds. The wheel turns at a constant rate, the rider reaches the highest point, 32 meters above the ground, and the rider's height is a periodic function of $t$ with period 40 seconds. What is the rider's height at $t = 130$ seconds?",
    options: ["17 meters", "9.5 meters", "2 meters", "32 meters"],
    correctIndex: 0,
    explanation:
      "Since $130 = 3(40) + 10$, the height at $t = 130$ equals the height at $t = 10$, one quarter of a turn after the lowest point. A quarter turn from the bottom puts the rider level with the center of the wheel, at the midline height $\\frac{2 + 32}{2} = 17$ meters. 2 meters and 32 meters are the lowest and highest points, reached at multiples of 40 and at 20 seconds past them. 9.5 meters is halfway between 2 and 17, which assumes the height changes linearly with time.",
  },
  // CED 3.3
  {
    id: "precalc-u3-010",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "easy",
    stem: "An arc of a circle of radius 4 has length $3\\pi$. What is the radian measure of the central angle that intercepts the arc?",
    options: ["$\\dfrac{3}{4}$", "$12\\pi$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{4}{3}$"],
    correctIndex: 2,
    explanation:
      "Arc length $s = r\\theta$ gives $\\theta = \\frac{s}{r} = \\frac{3\\pi}{4}$ radians. $\\frac{3}{4}$ drops the $\\pi$ from the arc length. $12\\pi$ multiplies the arc length by the radius instead of dividing. $\\frac{4}{3}$ divides the radius by the arc length and drops the $\\pi$, the reciprocal of the correct ratio.",
  },
  // CED 3.2
  {
    id: "precalc-u3-011",
    unit: "unit-3",
    topicSlug: "trigonometric-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A point $P$ moves counterclockwise around a circle of radius 10 centimeters centered at the origin, starting at $(10, 0)$. After $P$ has turned through an angle of $\\dfrac{2\\pi}{3}$ radians, what are its coordinates?",
    options: ["$(5, 5\\sqrt{3})$", "$(-5\\sqrt{3}, 5)$", "$(-5, 5\\sqrt{3})$", "$(5\\sqrt{3}, -5)$"],
    correctIndex: 2,
    explanation:
      "On a circle of radius $r$ the point at angle $\\theta$ is $(r\\cos\\theta, r\\sin\\theta) = \\left(10\\cos\\frac{2\\pi}{3}, 10\\sin\\frac{2\\pi}{3}\\right) = \\left(10 \\cdot \\left(-\\frac{1}{2}\\right), 10 \\cdot \\frac{\\sqrt{3}}{2}\\right) = (-5, 5\\sqrt{3})$. $(5, 5\\sqrt{3})$ uses the reference angle $\\frac{\\pi}{3}$ and forgets that cosine is negative in Quadrant II. $(-5\\sqrt{3}, 5)$ swaps sine and cosine (the point for $\\frac{5\\pi}{6}$). $(5\\sqrt{3}, -5)$ is the point for $-\\frac{\\pi}{6}$.",
  },
  // ---- standalone: unit circle (3.2–3.3 recall in use) ----
  // CED 3.3
  {
    id: "precalc-u3-012",
    unit: "unit-3",
    topicSlug: "the-unit-circle",
    difficulty: "easy",
    stem: "Which angle $\\theta$ in the interval $[0, 2\\pi)$ satisfies $\\cos\\theta = -\\dfrac{\\sqrt{3}}{2}$ and $\\sin\\theta < 0$?",
    options: ["$\\dfrac{5\\pi}{6}$", "$\\dfrac{4\\pi}{3}$", "$\\dfrac{7\\pi}{6}$", "$\\dfrac{11\\pi}{6}$"],
    correctIndex: 2,
    explanation:
      "Cosine is $-\\frac{\\sqrt{3}}{2}$ at the Quadrant II and III angles with reference angle $\\frac{\\pi}{6}$: $\\frac{5\\pi}{6}$ and $\\frac{7\\pi}{6}$. Sine is negative only in Quadrant III, so $\\theta = \\frac{7\\pi}{6}$. $\\frac{5\\pi}{6}$ has the right cosine but positive sine. $\\frac{4\\pi}{3}$ has $\\cos\\theta = -\\frac{1}{2}$. $\\frac{11\\pi}{6}$ has negative sine but $\\cos\\theta = +\\frac{\\sqrt{3}}{2}$.",
  },
  // CED 3.3
  {
    id: "precalc-u3-013",
    unit: "unit-3",
    topicSlug: "the-unit-circle",
    difficulty: "easy",
    stem: "Which of the following has the greatest value?",
    options: ["$\\cos\\dfrac{2\\pi}{3}$", "$\\cos\\dfrac{\\pi}{4}$", "$\\sin\\dfrac{5\\pi}{4}$", "$\\sin\\dfrac{3\\pi}{2}$"],
    correctIndex: 1,
    explanation:
      "$\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} \\approx 0.71$ is positive, while the others are negative: $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ (Quadrant II), $\\sin\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ (Quadrant III) and $\\sin\\frac{3\\pi}{2} = -1$. Choosing a Quadrant II or III value forgets the sign of that coordinate; $\\sin\\frac{3\\pi}{2}$ is the least value, not the greatest.",
  },
  // CED 3.3
  {
    id: "precalc-u3-014",
    unit: "unit-3",
    topicSlug: "the-unit-circle",
    difficulty: "medium",
    stem: "What is the value of $\\sin\\dfrac{4\\pi}{3} \\cdot \\cos\\dfrac{5\\pi}{6}$?",
    options: ["$\\dfrac{3}{4}$", "$-\\dfrac{3}{4}$", "$-\\dfrac{1}{4}$", "$\\dfrac{\\sqrt{3}}{4}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{4\\pi}{3}$ is in Quadrant III with reference angle $\\frac{\\pi}{3}$, so $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$; $\\frac{5\\pi}{6}$ is in Quadrant II with reference angle $\\frac{\\pi}{6}$, so $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$. The product is $\\left(-\\frac{\\sqrt{3}}{2}\\right)\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{3}{4}$. $-\\frac{3}{4}$ misses that two negatives multiply to a positive. $\\frac{\\sqrt{3}}{4}$ uses $\\frac{1}{2}$ for one of the values. $-\\frac{1}{4}$ uses $\\frac{1}{2}$ for both and one wrong sign.",
  },
  // CED 3.3
  {
    id: "precalc-u3-015",
    unit: "unit-3",
    topicSlug: "the-unit-circle",
    difficulty: "medium",
    stem: "What are the coordinates of the point on the unit circle that corresponds to $\\theta = \\dfrac{11\\pi}{6}$?",
    options: [
      "$\\left(-\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$",
      "$\\left(\\dfrac{1}{2}, -\\dfrac{\\sqrt{3}}{2}\\right)$",
      "$\\left(-\\dfrac{1}{2}, -\\dfrac{\\sqrt{3}}{2}\\right)$",
      "$\\left(\\dfrac{\\sqrt{3}}{2}, -\\dfrac{1}{2}\\right)$",
    ],
    correctIndex: 3,
    explanation:
      "$\\frac{11\\pi}{6}$ is $\\frac{\\pi}{6}$ short of a full turn, so it lies in Quadrant IV with reference angle $\\frac{\\pi}{6}$: $(\\cos\\theta, \\sin\\theta) = \\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$. $\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$ is the Quadrant II point for $\\frac{5\\pi}{6}$. $\\left(\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$ swaps the coordinates (the point for $\\frac{5\\pi}{3}$). $\\left(-\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$ is the point for $\\frac{4\\pi}{3}$.",
  },

  // ---- standalone: sinusoidal functions and modeling (3.5–3.7) ----
  // CED 3.5
  {
    id: "precalc-u3-016",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "easy",
    stem: "What is the period of $g(x) = 4\\cos(3x - \\pi) + 1$?",
    options: ["$\\dfrac{2\\pi}{3}$", "$2\\pi$", "$\\dfrac{\\pi}{3}$", "$6\\pi$"],
    correctIndex: 0,
    explanation:
      "For $\\cos(bx - c)$ the period is $\\frac{2\\pi}{|b|} = \\frac{2\\pi}{3}$. $\\frac{\\pi}{3}$ is the phase shift $\\frac{c}{b}$, not the period. $2\\pi$ is the period of the parent cosine function, ignoring the 3. $6\\pi$ multiplies $2\\pi$ by 3 instead of dividing.",
  },
  // CED 3.6
  {
    id: "precalc-u3-017",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    stem: "The graph of $y = \\sin x$ is stretched vertically by a factor of 2, reflected across the $x$-axis, shifted $\\dfrac{\\pi}{4}$ units to the right, and shifted 3 units up. Which equation describes the resulting graph?",
    options: [
      "$y = 2\\sin\\left(x + \\dfrac{\\pi}{4}\\right) + 3$",
      "$y = -2\\sin\\left(x - \\dfrac{\\pi}{4}\\right) + 3$",
      "$y = 2\\sin\\left(x - \\dfrac{\\pi}{4}\\right) - 3$",
      "$y = -2\\sin(x) - \\dfrac{\\pi}{4} + 3$",
    ],
    correctIndex: 1,
    explanation:
      "A vertical stretch by 2 with a reflection across the $x$-axis makes the coefficient $-2$; a shift right by $\\frac{\\pi}{4}$ replaces $x$ with $x - \\frac{\\pi}{4}$; a shift up 3 adds 3: $y = -2\\sin\\left(x - \\frac{\\pi}{4}\\right) + 3$. $2\\sin\\left(x + \\frac{\\pi}{4}\\right) + 3$ drops the reflection and shifts left. $2\\sin\\left(x - \\frac{\\pi}{4}\\right) - 3$ drops the reflection and shifts down. $-2\\sin(x) - \\frac{\\pi}{4} + 3$ subtracts $\\frac{\\pi}{4}$ from the output instead of the input, a vertical shift.",
  },
  // CED 3.6
  {
    id: "precalc-u3-018",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "hard",
    stem: "A sinusoidal function has a maximum value of 9 at $x = \\dfrac{\\pi}{3}$ and its next minimum value of $-3$ at $x = \\pi$. Which of the following could be its equation?",
    options: [
      "$y = 6\\cos\\left(\\dfrac{3}{2}\\left(x - \\dfrac{\\pi}{3}\\right)\\right) + 3$",
      "$y = 6\\cos\\left(3\\left(x - \\dfrac{\\pi}{3}\\right)\\right) + 3$",
      "$y = 12\\cos\\left(\\dfrac{3}{2}\\left(x - \\dfrac{\\pi}{3}\\right)\\right) + 3$",
      "$y = 6\\cos\\left(\\dfrac{3}{2}\\left(x - \\dfrac{\\pi}{3}\\right)\\right) - 3$",
    ],
    correctIndex: 0,
    explanation:
      "The midline is $\\frac{9 + (-3)}{2} = 3$ and the amplitude is $\\frac{9 - (-3)}{2} = 6$. A maximum and the next minimum are half a period apart, so the period is $2\\left(\\pi - \\frac{\\pi}{3}\\right) = \\frac{4\\pi}{3}$ and $b = \\frac{2\\pi}{4\\pi/3} = \\frac{3}{2}$. A cosine curve shifted to peak at $x = \\frac{\\pi}{3}$ gives $y = 6\\cos\\left(\\frac{3}{2}\\left(x - \\frac{\\pi}{3}\\right)\\right) + 3$. Using $b = 3$ treats the half period $\\frac{2\\pi}{3}$ as the full period. Amplitude 12 uses the full range. The version with $-3$ puts the midline at $-3$, so the maximum would be 3.",
  },
  // CED 3.5
  {
    id: "precalc-u3-019",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    stem: "Let $f(x) = 5\\sin(2x)$. Which of the following describes $f$ on the interval $\\dfrac{\\pi}{4} < x < \\dfrac{\\pi}{2}$?",
    options: [
      "$f$ is increasing, and the graph of $f$ is concave down.",
      "$f$ is decreasing, and the graph of $f$ is concave down.",
      "$f$ is decreasing, and the graph of $f$ is concave up.",
      "$f$ is increasing, and the graph of $f$ is concave up.",
    ],
    correctIndex: 1,
    explanation:
      "As $x$ runs from $\\frac{\\pi}{4}$ to $\\frac{\\pi}{2}$, the input $2x$ runs from $\\frac{\\pi}{2}$ to $\\pi$, where the sine curve falls from its maximum 1 down to 0 while still bending downward (it is above its midline), so $f$ is decreasing and concave down. Increasing would describe $0 < x < \\frac{\\pi}{4}$. Concave up describes the part of the cycle below the midline, $\\frac{\\pi}{2} < x < \\pi$.",
  },
  // CED 3.7
  {
    id: "precalc-u3-020",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "hard",
    calculator: true,
    stem: "On a certain day the temperature, in degrees Fahrenheit, $t$ hours after midnight is modeled by $T(t) = -15\\cos\\left(\\dfrac{\\pi}{12}(t - 4)\\right) + 55$, so the low of $40^\\circ$F occurs at 4 a.m. and the high of $70^\\circ$F at 4 p.m. According to the model, what is the temperature at noon?",
    options: ["$47.5^\\circ$F", "$55^\\circ$F", "$62.5^\\circ$F", "$70^\\circ$F"],
    correctIndex: 2,
    explanation:
      "At noon $t = 12$, so $T(12) = -15\\cos\\left(\\frac{\\pi}{12} \\cdot 8\\right) + 55 = -15\\cos\\frac{2\\pi}{3} + 55 = -15\\left(-\\frac{1}{2}\\right) + 55 = 62.5$. $47.5$ uses $\\cos\\frac{2\\pi}{3} = +\\frac{1}{2}$, the wrong sign for a Quadrant II angle. 55 is the midline, which the model reaches at 10 a.m., not noon. 70 is the high, reached at 4 p.m.",
  },
  // CED 3.10
  {
    id: "precalc-u3-021",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "hard",
    calculator: true,
    stem: "The height, in meters, of a seat on a Ferris wheel $t$ seconds after the ride starts is $h(t) = 20 - 18\\cos\\left(\\dfrac{\\pi}{30}t\\right)$. What is the first time $t > 0$ at which the seat is 29 meters above the ground?",
    options: ["20 seconds", "10 seconds", "30 seconds", "40 seconds"],
    correctIndex: 0,
    explanation:
      "Setting $20 - 18\\cos\\left(\\frac{\\pi}{30}t\\right) = 29$ gives $\\cos\\left(\\frac{\\pi}{30}t\\right) = -\\frac{1}{2}$. The first positive solution of $\\cos u = -\\frac{1}{2}$ is $u = \\frac{2\\pi}{3}$, so $\\frac{\\pi}{30}t = \\frac{2\\pi}{3}$ and $t = 20$. 10 seconds solves $\\cos u = +\\frac{1}{2}$ (a sign slip), where the height is 11 meters. 30 seconds is the top of the wheel, 38 meters. 40 seconds is the second time the height is 29 meters.",
  },
  // CED 3.5
  {
    id: "precalc-u3-022",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "easy",
    stem: "What is the phase shift of the graph of $y = 3\\cos\\left(2x + \\dfrac{\\pi}{2}\\right)$ relative to the graph of $y = 3\\cos(2x)$?",
    options: ["$\\dfrac{\\pi}{4}$ to the left", "$\\dfrac{\\pi}{2}$ to the left", "$\\dfrac{\\pi}{4}$ to the right", "$\\dfrac{\\pi}{2}$ to the right"],
    correctIndex: 0,
    explanation:
      "Factor the argument: $2x + \\frac{\\pi}{2} = 2\\left(x + \\frac{\\pi}{4}\\right)$, so the graph of $3\\cos(2x)$ is shifted $\\frac{\\pi}{4}$ to the left. $\\frac{\\pi}{2}$ to the left reads the shift without dividing by the factor 2. The choices to the right have the direction backward: adding inside the argument moves the graph left.",
  },
  // CED 3.6
  {
    id: "precalc-u3-023",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    stem: "Which of the following functions has the same graph as $y = \\cos x$?",
    options: ["$y = \\sin(x + \\pi)$", "$y = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$", "$y = \\cos(x + \\pi)$", "$y = \\sin\\left(x - \\dfrac{\\pi}{2}\\right)$"],
    correctIndex: 1,
    explanation:
      "The cosine curve is the sine curve shifted $\\frac{\\pi}{2}$ to the left: $\\sin\\left(x + \\frac{\\pi}{2}\\right) = \\cos x$ (check $x = 0$: $\\sin\\frac{\\pi}{2} = 1 = \\cos 0$). $\\sin(x + \\pi) = -\\sin x$ and $\\cos(x + \\pi) = -\\cos x$ are reflections. $\\sin\\left(x - \\frac{\\pi}{2}\\right) = -\\cos x$ shifts the wrong way.",
  },
  // CED 3.7
  {
    id: "precalc-u3-024",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    calculator: true,
    stem: "The number of hours of daylight in a city on day $t$ of the year is modeled by $L(t) = 12 + 2.5\\sin\\left(\\dfrac{2\\pi}{365}(t - 80)\\right)$. Which of the following is the best interpretation of the number 2.5 in the model?",
    options: [
      "The amount of daylight increases by about 2.5 hours per day around day 80 of the year.",
      "The longest day of the year has 2.5 hours more daylight than the shortest day of the year.",
      "The amount of daylight varies by up to 2.5 hours above and below 12 hours during the year.",
      "On day 80 the city has 2.5 hours more daylight than it has on the first day of the year.",
    ],
    correctIndex: 2,
    explanation:
      "In $L(t) = 12 + 2.5\\sin(\\ldots)$, 12 is the midline and 2.5 is the amplitude: the daylight swings at most 2.5 hours above and below 12 hours. A rate of 2.5 hours per day confuses the amplitude with a rate of change. The longest and shortest days differ by twice the amplitude, 5 hours. Day 80 is when the model crosses its midline, not a 2.5-hour jump from January 1.",
  },
  // CED 3.7
  {
    id: "precalc-u3-057",
    unit: "unit-3",
    topicSlug: "graphing-trig-functions",
    difficulty: "medium",
    calculator: true,
    stem: "A patient's blood pressure, in millimeters of mercury, is modeled by $P(t) = 100 + 20\\sin(160\\pi t)$, where $t$ is measured in minutes. According to the model, what is the patient's heart rate?",
    options: ["0.0125 beats per minute", "160 beats per minute", "120 beats per minute", "80 beats per minute"],
    correctIndex: 3,
    explanation:
      "One heartbeat is one cycle of the sinusoid. The period is $\\frac{2\\pi}{160\\pi} = \\frac{1}{80}$ minute, so there are 80 cycles per minute. 160 reads the coefficient $160\\pi$ as if $b$ were the number of beats; $0.0125 = \\frac{1}{80}$ is the period in minutes, not the rate; 120 is the maximum pressure, not a rate.",
  },
  // ---- standalone: inverse trigonometric functions (3.9) ----
  // CED 3.9
  {
    id: "precalc-u3-025",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "easy",
    stem: "What is the exact value, in radians, of $\\arctan\\left(-\\sqrt{3}\\right)$?",
    options: ["$\\dfrac{2\\pi}{3}$", "$-\\dfrac{\\pi}{3}$", "$-\\dfrac{\\pi}{6}$", "$\\dfrac{5\\pi}{3}$"],
    correctIndex: 1,
    explanation:
      "The range of arctangent is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, and the angle in that interval whose tangent is $-\\sqrt{3}$ is $-\\frac{\\pi}{3}$. $\\frac{2\\pi}{3}$ and $\\frac{5\\pi}{3}$ also have tangent $-\\sqrt{3}$ but lie outside the range. $-\\frac{\\pi}{6}$ has tangent $-\\frac{\\sqrt{3}}{3}$, the reciprocal value.",
  },
  // CED 3.9
  {
    id: "precalc-u3-026",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "medium",
    stem: "What is the exact value of $\\sin\\left(\\arctan\\dfrac{3}{4}\\right)$?",
    options: ["$\\dfrac{3}{5}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{5}$", "$\\dfrac{5}{3}$"],
    correctIndex: 0,
    explanation:
      "Let $\\theta = \\arctan\\frac{3}{4}$, a Quadrant I angle with opposite side 3 and adjacent side 4, so the hypotenuse is $\\sqrt{3^2 + 4^2} = 5$ and $\\sin\\theta = \\frac{3}{5}$. $\\frac{3}{4}$ is $\\tan\\theta$ itself. $\\frac{4}{5}$ is $\\cos\\theta$. $\\frac{5}{3}$ is $\\csc\\theta$, the reciprocal.",
  },
  // CED 3.9
  {
    id: "precalc-u3-027",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "medium",
    stem: "What is the value of $\\arccos\\left(\\cos\\left(-\\dfrac{\\pi}{3}\\right)\\right)$?",
    options: ["$-\\dfrac{\\pi}{3}$", "$\\dfrac{5\\pi}{3}$", "$\\dfrac{\\pi}{3}$", "$\\dfrac{2\\pi}{3}$"],
    correctIndex: 2,
    explanation:
      "$\\cos\\left(-\\frac{\\pi}{3}\\right) = \\frac{1}{2}$, and arccosine returns the angle in $[0, \\pi]$ whose cosine is $\\frac{1}{2}$, namely $\\frac{\\pi}{3}$. The composition does not return $-\\frac{\\pi}{3}$ because that angle is outside the range of arccosine. $\\frac{5\\pi}{3}$ has cosine $\\frac{1}{2}$ but is also outside the range. $\\frac{2\\pi}{3}$ has cosine $-\\frac{1}{2}$.",
  },
  // CED 3.9
  {
    id: "precalc-u3-028",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "hard",
    stem: "Which of the following best explains why the domain of the sine function must be restricted before an inverse sine function can be defined?",
    options: [
      "Sine is not onto the real numbers: its outputs fill only $[-1, 1]$, so the domain must be reduced until the range of sine covers every possible input of the inverse.",
      "Sine is not one-to-one: each output in $[-1, 1]$ comes from infinitely many inputs, so without a restriction one input to the inverse would have many outputs.",
      "Sine is an odd function, so its graph is symmetric about the origin, and the reflection of that graph across the line $y = x$ would overlap the original graph.",
      "Sine is continuous on all real numbers, so without a restriction its inverse would also have to be continuous on all real numbers, which no bounded function allows.",
    ],
    correctIndex: 1,
    explanation:
      "A function has an inverse function only when it is one-to-one. Sine is periodic, so every value in $[-1, 1]$ is hit infinitely often; restricting the domain to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ makes it one-to-one. Not being onto the reals is irrelevant: the inverse simply has domain $[-1, 1]$, and restricting the domain of sine cannot enlarge its range. Odd symmetry does not prevent a function from having an inverse ($y = x^3$ is odd and invertible). Continuity of sine is also not the obstacle; the inverse of a continuous one-to-one function is continuous on its own domain.",
  },
  // CED 3.9
  {
    id: "precalc-u3-029",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A straight wheelchair ramp is 15 feet long and rises 4 feet from the ground to a doorway. Which expression gives the angle $\\theta$, in radians, that the ramp makes with the ground?",
    options: ["$\\arcsin\\dfrac{4}{15}$", "$\\arctan\\dfrac{4}{15}$", "$\\arcsin\\dfrac{15}{4}$", "$\\arccos\\dfrac{4}{15}$"],
    correctIndex: 0,
    explanation:
      "The 4-foot rise is the side opposite $\\theta$ and the 15-foot ramp is the hypotenuse, so $\\sin\\theta = \\frac{4}{15}$ and $\\theta = \\arcsin\\frac{4}{15}$. $\\arccos\\frac{4}{15}$ treats the rise as the adjacent side. $\\arctan\\frac{4}{15}$ treats the ramp length as the horizontal run. $\\arcsin\\frac{15}{4}$ is undefined because $\\frac{15}{4} > 1$.",
  },
  // CED 3.9
  {
    id: "precalc-u3-030",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "hard",
    stem: "Let $\\theta = \\arccos x$, where $-1 < x < 1$ and $x \\ne 0$. Which of the following expressions is equal to $\\tan\\theta$?",
    options: ["$\\dfrac{x}{\\sqrt{1 - x^2}}$", "$\\sqrt{1 - x^2}$", "$\\dfrac{\\sqrt{1 - x^2}}{x}$", "$\\dfrac{1}{\\sqrt{1 - x^2}}$"],
    correctIndex: 2,
    explanation:
      "Since $\\theta = \\arccos x$ lies in $(0, \\pi)$, $\\cos\\theta = x$ and $\\sin\\theta = +\\sqrt{1 - x^2}$ (sine is positive on that interval), so $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sqrt{1 - x^2}}{x}$; the sign of $x$ correctly makes the tangent negative when $\\theta$ is in Quadrant II. $\\frac{x}{\\sqrt{1 - x^2}}$ is $\\cot\\theta$. $\\sqrt{1 - x^2}$ is $\\sin\\theta$. $\\frac{1}{\\sqrt{1 - x^2}}$ is $\\csc\\theta$.",
  },
  // CED 3.9
  {
    id: "precalc-u3-031",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "easy",
    stem: "What is the range of the function $y = \\arccos x$?",
    options: ["$\\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$", "$-1 \\le y \\le 1$", "$0 < y < \\pi$", "$[0, \\pi]$"],
    correctIndex: 3,
    explanation:
      "Arccosine is the inverse of cosine restricted to $[0, \\pi]$, so its outputs are exactly the angles in $[0, \\pi]$, endpoints included ($\\arccos 1 = 0$ and $\\arccos(-1) = \\pi$). $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ is the range of arcsine. $-1 \\le y \\le 1$ is the domain of arccosine, not its range. $0 < y < \\pi$ wrongly excludes the endpoints.",
  },
  // CED 3.9
  {
    id: "precalc-u3-058",
    unit: "unit-3",
    topicSlug: "inverse-trig-functions-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A 20-meter guy wire runs from the top of a pole to a point on level ground 12 meters from the base of the pole. Given that $\\arccos 0.6 \\approx 0.927$ and $\\arcsin 0.6 \\approx 0.644$, what is the approximate measure, in radians, of the angle the wire makes with the ground?",
    options: ["$2.214$", "$0.644$", "$0.927$", "$53.1$"],
    correctIndex: 2,
    explanation:
      "The 12-meter ground distance is the side adjacent to the angle and the 20-meter wire is the hypotenuse, so $\\cos\\theta = \\frac{12}{20} = 0.6$ and $\\theta = \\arccos 0.6 \\approx 0.927$ radians. $0.644$ uses arcsine, treating 12 meters as the opposite side. $2.214 = \\pi - 0.927$ is the obtuse angle with the same cosine magnitude, impossible for a wire meeting the ground. $53.1$ is the angle in degrees, not radians.",
  },

  // ---- standalone: solving trigonometric equations and inequalities (3.10) ----
  // CED 3.10
  {
    id: "precalc-u3-032",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "hard",
    calculator: true,
    stem: "Given that $\\arctan 2 \\approx 1.107$, which of the following is a solution of $\\tan x = 2$ on the interval $\\pi < x < 2\\pi$?",
    options: ["$1.107$", "$2.034$", "$4.249$", "$5.176$"],
    correctIndex: 2,
    explanation:
      "Tangent has period $\\pi$, so every solution of $\\tan x = 2$ is $1.107 + \\pi k$. The one in $(\\pi, 2\\pi)$ is $1.107 + \\pi \\approx 4.249$, a Quadrant III angle where tangent is positive. $1.107$ is the Quadrant I solution, outside the interval. $2.034 = \\pi - 1.107$ is in Quadrant II, where $\\tan x = -2$. $5.176 = 2\\pi - 1.107$ is in Quadrant IV, where $\\tan x = -2$.",
  },
  // CED 3.10
  {
    id: "precalc-u3-033",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "easy",
    stem: "What are all solutions of $\\sqrt{2}\\cos x + 1 = 0$ on the interval $[0, 2\\pi)$?",
    options: [
      "$x = \\dfrac{3\\pi}{4}$ and $x = \\dfrac{5\\pi}{4}$",
      "$x = \\dfrac{3\\pi}{4}$ only",
      "$x = \\dfrac{\\pi}{4}$ and $x = \\dfrac{7\\pi}{4}$",
      "$x = \\dfrac{\\pi}{4}$ and $x = \\dfrac{3\\pi}{4}$",
    ],
    correctIndex: 0,
    explanation:
      "Solving gives $\\cos x = -\\frac{1}{\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$. Cosine is negative in Quadrants II and III, and the reference angle is $\\frac{\\pi}{4}$, so $x = \\frac{3\\pi}{4}$ and $x = \\frac{5\\pi}{4}$. $\\frac{\\pi}{4}$ and $\\frac{7\\pi}{4}$ solve $\\cos x = +\\frac{\\sqrt{2}}{2}$. Stopping at $\\frac{3\\pi}{4}$ misses the Quadrant III solution. $\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$ are where sine, not cosine, is $\\frac{\\sqrt{2}}{2}$.",
  },
  // CED 3.10
  {
    id: "precalc-u3-034",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "medium",
    stem: "How many solutions does the equation $\\sin(3x) = \\dfrac{1}{2}$ have on the interval $[0, 2\\pi)$?",
    options: ["$2$", "$3$", "$6$", "$12$"],
    correctIndex: 2,
    explanation:
      "As $x$ runs through $[0, 2\\pi)$, the input $3x$ runs through $[0, 6\\pi)$, three full periods of sine. Each period contains two solutions of $\\sin u = \\frac{1}{2}$ (at reference angle $\\frac{\\pi}{6}$ in Quadrants I and II), so there are $3 \\cdot 2 = 6$ solutions. 2 counts one period only. 3 counts the periods, not the solutions. 12 doubles the correct count.",
  },
  // CED 3.10
  {
    id: "precalc-u3-035",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "medium",
    stem: "What are all solutions of $\\cos(2x) = \\dfrac{1}{2}$ on the interval $[0, 2\\pi)$?",
    options: [
      "$x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{7\\pi}{6},$ and $\\dfrac{11\\pi}{6}$",
      "$x = \\dfrac{\\pi}{3}$ and $x = \\dfrac{5\\pi}{3}$",
      "$x = \\dfrac{\\pi}{6}$ and $x = \\dfrac{5\\pi}{6}$",
      "$x = \\dfrac{\\pi}{6}$ and $x = \\dfrac{11\\pi}{6}$",
    ],
    correctIndex: 0,
    explanation:
      "Let $u = 2x$, which runs through $[0, 4\\pi)$. $\\cos u = \\frac{1}{2}$ at $u = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}, \\frac{11\\pi}{3}$; halving gives $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$. $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$ forget to divide by 2. The two-solution choices stop after one period of $u$, missing the solutions with $u > 2\\pi$.",
  },
  // CED 3.10
  {
    id: "precalc-u3-036",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "hard",
    stem: "Which of the following gives all real solutions of $2\\sin^2 x + \\sin x - 1 = 0$, where $k$ is any integer?",
    options: [
      "$x = \\dfrac{\\pi}{6} + 2\\pi k$ or $x = \\dfrac{5\\pi}{6} + 2\\pi k$",
      "$x = \\dfrac{\\pi}{6} + \\pi k$ or $x = \\dfrac{3\\pi}{2} + \\pi k$",
      "$x = \\dfrac{\\pi}{6} + 2\\pi k$, $x = \\dfrac{5\\pi}{6} + 2\\pi k$, or $x = \\dfrac{3\\pi}{2} + 2\\pi k$",
      "$x = \\dfrac{\\pi}{6} + 2\\pi k$ or $x = \\dfrac{\\pi}{2} + 2\\pi k$",
    ],
    correctIndex: 2,
    explanation:
      "Factor: $(2\\sin x - 1)(\\sin x + 1) = 0$, so $\\sin x = \\frac{1}{2}$ or $\\sin x = -1$. $\\sin x = \\frac{1}{2}$ gives $x = \\frac{\\pi}{6} + 2\\pi k$ and $x = \\frac{5\\pi}{6} + 2\\pi k$; $\\sin x = -1$ gives $x = \\frac{3\\pi}{2} + 2\\pi k$. The first choice drops the $\\sin x = -1$ factor. The second uses period $\\pi$, which is the period of tangent, not sine, and so includes extra angles. The last uses $\\sin x = 1$ instead of $-1$ and misses $\\frac{5\\pi}{6}$.",
  },
  // CED 3.10
  {
    id: "precalc-u3-037",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "hard",
    stem: "For which values of $x$ in the interval $[0, 2\\pi]$ is $2\\cos x + 1 < 0$?",
    options: [
      "$0 \\le x < \\dfrac{2\\pi}{3}$ or $\\dfrac{4\\pi}{3} < x \\le 2\\pi$",
      "$\\dfrac{2\\pi}{3} < x < \\dfrac{4\\pi}{3}$",
      "$\\dfrac{\\pi}{3} \\le x \\le \\dfrac{5\\pi}{3}$",
      "$\\dfrac{2\\pi}{3} \\le x \\le \\dfrac{4\\pi}{3}$",
    ],
    correctIndex: 1,
    explanation:
      "The inequality is $\\cos x < -\\frac{1}{2}$. Cosine equals $-\\frac{1}{2}$ at $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$, and between them (around $x = \\pi$, where $\\cos x = -1$) it is less than $-\\frac{1}{2}$, so the solution is $\\frac{2\\pi}{3} < x < \\frac{4\\pi}{3}$. The first choice is where $\\cos x > -\\frac{1}{2}$, the reverse. $\\frac{\\pi}{3} \\le x \\le \\frac{5\\pi}{3}$ is where $\\cos x \\le +\\frac{1}{2}$, a sign slip. The closed interval includes the endpoints, where the expression equals 0, not less than 0.",
  },
  // CED 3.10
  {
    id: "precalc-u3-038",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "medium",
    stem: "For which values of $x$ in the interval $\\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$ is $\\tan x \\le \\sqrt{3}$?",
    options: [
      "$-\\dfrac{\\pi}{3} \\le x \\le \\dfrac{\\pi}{3}$",
      "$\\dfrac{\\pi}{3} \\le x < \\dfrac{\\pi}{2}$",
      "$-\\dfrac{\\pi}{2} < x \\le \\dfrac{\\pi}{6}$",
      "$-\\dfrac{\\pi}{2} < x \\le \\dfrac{\\pi}{3}$",
    ],
    correctIndex: 3,
    explanation:
      "On $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ the tangent function is increasing and takes every real value once, with $\\tan\\frac{\\pi}{3} = \\sqrt{3}$. So $\\tan x \\le \\sqrt{3}$ exactly when $x \\le \\frac{\\pi}{3}$, giving $-\\frac{\\pi}{2} < x \\le \\frac{\\pi}{3}$. The symmetric interval $\\left[-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right]$ wrongly cuts off the left side, where $\\tan x$ is negative and certainly less than $\\sqrt{3}$. $\\frac{\\pi}{3} \\le x < \\frac{\\pi}{2}$ is where $\\tan x \\ge \\sqrt{3}$. $\\frac{\\pi}{6}$ is where $\\tan x = \\frac{\\sqrt{3}}{3}$, not $\\sqrt{3}$.",
  },
  // CED 3.10
  {
    id: "precalc-u3-039",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "easy",
    stem: "Which of the following equations has no real solution?",
    options: ["$\\cos x = \\dfrac{3}{4}$", "$\\tan x = 30$", "$\\sin x = \\dfrac{3}{2}$", "$\\cos x = -1$"],
    correctIndex: 2,
    explanation:
      "The sine and cosine functions only take values in $[-1, 1]$, so $\\sin x = \\frac{3}{2}$ has no solution. $\\cos x = \\frac{3}{4}$ has a value inside $[-1, 1]$ and so has infinitely many solutions, and $\\cos x = -1$ is solved by every odd multiple of $\\pi$: the endpoints of $[-1, 1]$ are attained. The tangent function takes every real value, so $\\tan x = 30$ also has solutions, even though 30 is large.",
  },
  // CED 3.10
  {
    id: "precalc-u3-059",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "hard",
    calculator: true,
    stem: "The height of the tide at a dock, in meters, is modeled by $h(t) = 5 + 2\\cos\\left(\\dfrac{\\pi}{6}t\\right)$, where $t$ is hours after noon. For how many hours during the interval $0 \\le t \\le 12$ is the tide height less than 4 meters?",
    options: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctIndex: 1,
    explanation:
      "$h(t) < 4$ means $\\cos\\left(\\frac{\\pi}{6}t\\right) < -\\frac{1}{2}$. With $u = \\frac{\\pi}{6}t$ running through $[0, 2\\pi]$, $\\cos u < -\\frac{1}{2}$ exactly for $\\frac{2\\pi}{3} < u < \\frac{4\\pi}{3}$, that is $4 < t < 8$: 4 hours. 2 hours halves the interval. 6 hours is the time the tide is below the midline (5 meters), not below 4 meters. 8 hours is the end of the interval, not its length.",
  },
  // CED 3.10
  {
    id: "precalc-u3-061",
    unit: "unit-3",
    topicSlug: "solving-trig-equations",
    difficulty: "medium",
    calculator: true,
    stem: "The displacement of a mass on a spring from its rest position, in centimeters, is $d(t) = 6\\cos(4\\pi t)$, where $t$ is in seconds. What is the first time $t > 0$ at which the mass passes through its rest position?",
    options: ["$1.57$ second", "$0.125$ second", "$0.25$ second", "$0.5$ second"],
    correctIndex: 1,
    explanation:
      "The rest position is $d = 0$, so $\\cos(4\\pi t) = 0$. The first positive solution of $\\cos u = 0$ is $u = \\frac{\\pi}{2}$, so $4\\pi t = \\frac{\\pi}{2}$ and $t = \\frac{1}{8} = 0.125$ second. $0.25$ second is when $4\\pi t = \\pi$, the first time the mass is at $-6$ centimeters. $0.5$ second is the full period. $1.57 \\approx \\frac{\\pi}{2}$ solves $\\cos t = 0$, ignoring the factor $4\\pi$ in the argument.",
  },
  // ---- standalone: identities and equivalent forms (3.11–3.12) ----
  // CED 3.12
  {
    id: "precalc-u3-040",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "medium",
    stem: "What are all solutions of $\\sin(2x) = \\sin x$ on the interval $[0, 2\\pi)$?",
    options: [
      "$x = 0, \\dfrac{\\pi}{3}, \\pi,$ and $\\dfrac{5\\pi}{3}$",
      "$x = \\dfrac{\\pi}{3}$ and $x = \\dfrac{5\\pi}{3}$",
      "$x = 0$ and $x = \\pi$",
      "$x = 0, \\dfrac{\\pi}{3},$ and $\\pi$",
    ],
    correctIndex: 0,
    explanation:
      "Use the double-angle identity: $2\\sin x\\cos x - \\sin x = 0$, so $\\sin x\\,(2\\cos x - 1) = 0$. Then $\\sin x = 0$ gives $x = 0, \\pi$, and $\\cos x = \\frac{1}{2}$ gives $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$. Dividing both sides by $\\sin x$ loses the solutions $0$ and $\\pi$. Keeping only $\\sin x = 0$ ignores the other factor. Stopping at $\\frac{\\pi}{3}$ misses the Quadrant IV angle $\\frac{5\\pi}{3}$, where cosine is also $\\frac{1}{2}$.",
  },
  // CED 3.11
  {
    id: "precalc-u3-041",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "easy",
    stem: "For all $x$ with $\\cos x \\ne 1$, which of the following is equivalent to $\\dfrac{\\sin^2 x}{1 - \\cos x}$?",
    options: ["$1 + \\cos x$", "$\\sin x$", "$1 - \\cos x$", "$\\cos x + \\cos^2 x$"],
    correctIndex: 0,
    explanation:
      "By the Pythagorean identity $\\sin^2 x = 1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)$, so the fraction simplifies to $1 + \\cos x$. $1 - \\cos x$ keeps the wrong factor after canceling. $\\sin x$ cancels a single $\\sin x$ against $1 - \\cos x$, which is not a factor of it. $\\cos x + \\cos^2 x$ multiplies instead of dividing.",
  },
  // CED 3.11
  {
    id: "precalc-u3-042",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "medium",
    stem: "If $\\sin\\theta = \\dfrac{3}{5}$ and $\\dfrac{\\pi}{2} < \\theta < \\pi$, what is the value of $\\cos(2\\theta)$?",
    options: ["$-\\dfrac{24}{25}$", "$\\dfrac{7}{25}$", "$-\\dfrac{7}{25}$", "$\\dfrac{24}{25}$"],
    correctIndex: 1,
    explanation:
      "Use $\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - 2 \\cdot \\frac{9}{25} = \\frac{7}{25}$; the quadrant does not change the answer because only $\\sin^2\\theta$ appears. $-\\frac{7}{25}$ uses $2\\sin^2\\theta - 1$, the identity with the wrong sign. $-\\frac{24}{25}$ is $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ with $\\cos\\theta = -\\frac{4}{5}$. $\\frac{24}{25}$ is $\\sin(2\\theta)$ with the wrong sign for cosine.",
  },
  // CED 3.11
  {
    id: "precalc-u3-043",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "medium",
    stem: "Using $\\dfrac{\\pi}{12} = \\dfrac{\\pi}{3} - \\dfrac{\\pi}{4}$, what is the exact value of $\\cos\\dfrac{\\pi}{12}$?",
    options: ["$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\dfrac{\\sqrt{2} - 1}{2}$", "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{2}$"],
    correctIndex: 2,
    explanation:
      "$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$ gives $\\cos\\frac{\\pi}{3}\\cos\\frac{\\pi}{4} + \\sin\\frac{\\pi}{3}\\sin\\frac{\\pi}{4} = \\frac{1}{2} \\cdot \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2} + \\sqrt{6}}{4}$. $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$ uses a minus sign in the middle, which is the formula for $\\cos(A + B)$ (and equals $\\sin\\frac{\\pi}{12}$). $\\frac{\\sqrt{2} - 1}{2}$ subtracts the cosines, as if $\\cos(A - B) = \\cos A - \\cos B$. $\\frac{\\sqrt{6} + \\sqrt{2}}{2}$ drops a factor of $\\frac{1}{2}$ and is greater than 1.",
  },
  // CED 3.11
  {
    id: "precalc-u3-044",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "medium",
    stem: "Which of the following expressions is equivalent to $\\sin\\left(x + \\dfrac{\\pi}{3}\\right)$ for all $x$?",
    options: [
      "$\\dfrac{\\sqrt{3}}{2}\\sin x + \\dfrac{1}{2}\\cos x$",
      "$\\sin x + \\dfrac{\\sqrt{3}}{2}$",
      "$\\dfrac{1}{2}\\sin x - \\dfrac{\\sqrt{3}}{2}\\cos x$",
      "$\\dfrac{1}{2}\\sin x + \\dfrac{\\sqrt{3}}{2}\\cos x$",
    ],
    correctIndex: 3,
    explanation:
      "$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$ with $B = \\frac{\\pi}{3}$ gives $\\sin x \\cdot \\frac{1}{2} + \\cos x \\cdot \\frac{\\sqrt{3}}{2}$. $\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x$ swaps $\\cos\\frac{\\pi}{3}$ and $\\sin\\frac{\\pi}{3}$. $\\sin x + \\frac{\\sqrt{3}}{2}$ treats sine as if it distributed over addition. The version with a minus sign is $\\sin\\left(x - \\frac{\\pi}{3}\\right)$.",
  },
  // CED 3.11
  {
    id: "precalc-u3-045",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "hard",
    stem: "Three of the following equations are identities, true for every real number $x$. Which one is NOT an identity?",
    options: ["$\\cos(2x) = 1 - 2\\sin^2 x$", "$\\cos(2x) = \\cos^2 x - \\sin^2 x$", "$\\cos(2x) = 1 - 2\\cos^2 x$", "$\\cos(2x) = 2\\cos^2 x - 1$"],
    correctIndex: 2,
    explanation:
      "From $\\cos(2x) = \\cos^2 x - \\sin^2 x$ and $\\sin^2 x = 1 - \\cos^2 x$ comes $\\cos(2x) = 2\\cos^2 x - 1$, and from $\\cos^2 x = 1 - \\sin^2 x$ comes $\\cos(2x) = 1 - 2\\sin^2 x$. The equation $\\cos(2x) = 1 - 2\\cos^2 x$ has the signs reversed: at $x = 0$ it claims $1 = -1$. Choosing one of the three true forms mistakes a valid rewriting for the false one.",
  },
  // CED 3.11
  {
    id: "precalc-u3-046",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "medium",
    stem: "Which of the following is equivalent to $\\sin x\\cos\\dfrac{\\pi}{6} - \\cos x\\sin\\dfrac{\\pi}{6}$ for all $x$?",
    options: ["$\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$", "$\\cos\\left(x - \\dfrac{\\pi}{6}\\right)$", "$\\sin\\left(x + \\dfrac{\\pi}{6}\\right)$", "$\\dfrac{\\sqrt{3} - 1}{2}\\sin x$"],
    correctIndex: 0,
    explanation:
      "The expression matches the right side of $\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B$ with $A = x$ and $B = \\frac{\\pi}{6}$, so it equals $\\sin\\left(x - \\frac{\\pi}{6}\\right)$. $\\cos\\left(x - \\frac{\\pi}{6}\\right)$ expands to $\\cos x\\cos\\frac{\\pi}{6} + \\sin x\\sin\\frac{\\pi}{6}$. $\\sin\\left(x + \\frac{\\pi}{6}\\right)$ has a plus sign between the terms. $\\frac{\\sqrt{3} - 1}{2}\\sin x$ wrongly replaces $\\cos x$ with $\\sin x$ before combining.",
  },
  // CED 3.11
  {
    id: "precalc-u3-047",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "hard",
    stem: "If $\\tan\\theta = 2$ and $\\pi < \\theta < \\dfrac{3\\pi}{2}$, what is the value of $\\sin(2\\theta)$?",
    options: ["$-\\dfrac{4}{5}$", "$\\dfrac{4}{5}$", "$-\\dfrac{3}{5}$", "$\\dfrac{4}{\\sqrt{5}}$"],
    correctIndex: 1,
    explanation:
      "In Quadrant III both sine and cosine are negative. From $\\tan\\theta = 2$ and $1 + \\tan^2\\theta = \\sec^2\\theta$, $\\cos\\theta = -\\frac{1}{\\sqrt{5}}$ and $\\sin\\theta = -\\frac{2}{\\sqrt{5}}$, so $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2\\left(-\\frac{2}{\\sqrt{5}}\\right)\\left(-\\frac{1}{\\sqrt{5}}\\right) = \\frac{4}{5}$. $-\\frac{4}{5}$ uses one negative value and one positive. $-\\frac{3}{5}$ is $\\cos(2\\theta)$, not $\\sin(2\\theta)$. $\\frac{4}{\\sqrt{5}}$ is $2|\\sin\\theta|$, which forgets the factor $\\cos\\theta$ in the double-angle formula.",
  },
  // CED 3.11
  {
    id: "precalc-u3-048",
    unit: "unit-3",
    topicSlug: "trigonometric-identities-precalc",
    difficulty: "easy",
    stem: "For all $x$ where the expression is defined, which of the following is equivalent to $\\dfrac{1}{\\sec x \\cdot \\cot x}$?",
    options: ["$\\sin x$", "$\\csc x$", "$\\cos x$", "$\\tan x$"],
    correctIndex: 0,
    explanation:
      "$\\sec x \\cdot \\cot x = \\frac{1}{\\cos x} \\cdot \\frac{\\cos x}{\\sin x} = \\frac{1}{\\sin x}$, so its reciprocal is $\\sin x$. $\\cos x$ comes from inverting only $\\sec x$. $\\csc x$ is the product itself, before taking the reciprocal. $\\tan x$ is the reciprocal of $\\cot x$ alone.",
  },

  // ---- standalone: polar coordinates and polar functions (3.13–3.15) ----
  // CED 3.13
  {
    id: "precalc-u3-049",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "Which of the following polar coordinates represent the same point as $\\left(4, \\dfrac{\\pi}{3}\\right)$?",
    options: ["$\\left(-4, \\dfrac{\\pi}{3}\\right)$", "$\\left(-4, \\dfrac{4\\pi}{3}\\right)$", "$\\left(4, \\dfrac{4\\pi}{3}\\right)$", "$\\left(4, -\\dfrac{\\pi}{3}\\right)$"],
    correctIndex: 1,
    explanation:
      "A negative radius places the point in the opposite direction: $(-4, \\theta)$ is the same point as $(4, \\theta + \\pi)$. So $\\left(-4, \\frac{4\\pi}{3}\\right)$ is $\\left(4, \\frac{4\\pi}{3} - \\pi\\right) = \\left(4, \\frac{\\pi}{3}\\right)$. $\\left(-4, \\frac{\\pi}{3}\\right)$ is the diametrically opposite point. $\\left(4, \\frac{4\\pi}{3}\\right)$ is also that opposite point. $\\left(4, -\\frac{\\pi}{3}\\right)$ is the reflection across the $x$-axis.",
  },
  // CED 3.13
  {
    id: "precalc-u3-050",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "easy",
    stem: "Which of the following are polar coordinates, with $r > 0$ and $0 \\le \\theta < 2\\pi$, of the point with rectangular coordinates $(-2, 2\\sqrt{3})$?",
    options: ["$\\left(4, \\dfrac{2\\pi}{3}\\right)$", "$\\left(16, \\dfrac{2\\pi}{3}\\right)$", "$\\left(4, \\dfrac{5\\pi}{3}\\right)$", "$\\left(4, \\dfrac{\\pi}{3}\\right)$"],
    correctIndex: 0,
    explanation:
      "$r = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = 4$. The point is in Quadrant II with $\\tan\\theta = -\\sqrt{3}$, so $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. $\\frac{\\pi}{3}$ is the reference angle, which puts the point in Quadrant I. $r = 16$ forgets the square root. $\\frac{5\\pi}{3}$ is the Quadrant IV angle with the same tangent.",
  },
  // CED 3.14
  {
    id: "precalc-u3-051",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "In the $xy$-plane, the graph of the polar equation $r = 4\\sin\\theta$ is",
    options: [
      "A circle of radius 4 centered at the origin",
      "A circle of radius 2 centered at $(0, 2)$",
      "A circle of radius 2 centered at $(-2, 0)$",
      "A circle of radius 4 centered at $(0, -4)$",
    ],
    correctIndex: 1,
    explanation:
      "Multiply by $r$: $r^2 = 4r\\sin\\theta$, so $x^2 + y^2 = 4y$ and $x^2 + (y - 2)^2 = 4$, a circle of radius 2 centered at $(0, 2)$; it passes through the origin and reaches $r = 4$ at $\\theta = \\frac{\\pi}{2}$. A circle centered at the origin would be $r = 4$. The circle centered at $(-2, 0)$ is $r = -4\\cos\\theta$. Radius 4 centered at $(0, -4)$ reads the coefficient as the radius and flips the sign.",
  },
  // CED 3.14
  {
    id: "precalc-u3-052",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "Which of the following describes the graph of the polar function $r = 5\\cos(3\\theta)$?",
    options: [
      "A rose with 3 petals, each of length 5",
      "A rose with 6 petals, each of length 10",
      "A rose with 3 petals, each of length 15",
      "A circle of radius 5 traced three times",
    ],
    correctIndex: 0,
    explanation:
      "$r = a\\cos(n\\theta)$ with $n$ odd is a rose with $n$ petals, each reaching a maximum distance $|a|$ from the origin, so there are 3 petals of length 5. Six petals would require an even $n$ (where $2n$ petals appear), and length 10 doubles the coefficient. Length 15 multiplies the coefficient by $n$. The factor 3 multiplies the angle, not the radius, so the graph is not a circle.",
  },
  // CED 3.15
  {
    id: "precalc-u3-053",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "hard",
    stem: "The polar function $r = f(\\theta)$ is given by $f(\\theta) = 3 - 2\\sin\\theta$. Over the interval $\\dfrac{\\pi}{6} \\le \\theta \\le \\dfrac{\\pi}{2}$, what is the average rate of change of $r$ with respect to $\\theta$?",
    options: ["$\\dfrac{3}{\\pi}$", "$-\\dfrac{1}{3}$", "$-1$", "$-\\dfrac{3}{\\pi}$"],
    correctIndex: 3,
    explanation:
      "$f\\left(\\frac{\\pi}{6}\\right) = 3 - 2 \\cdot \\frac{1}{2} = 2$ and $f\\left(\\frac{\\pi}{2}\\right) = 3 - 2 = 1$, so the average rate of change is $\\frac{1 - 2}{\\frac{\\pi}{2} - \\frac{\\pi}{6}} = \\frac{-1}{\\pi/3} = -\\frac{3}{\\pi}$ units of $r$ per radian. $\\frac{3}{\\pi}$ has the wrong sign: $r$ decreases. $-\\frac{1}{3}$ divides by 3 instead of by $\\frac{\\pi}{3}$, dropping the $\\pi$ from the change in $\\theta$. $-1$ is the change in $r$ without dividing by the change in $\\theta$.",
  },
  // CED 3.15
  {
    id: "precalc-u3-054",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "hard",
    stem: "Consider the polar function $r = 2 - 4\\cos\\theta$. As $\\theta$ increases from 0, on which of the following intervals is the distance between the point $(r, \\theta)$ and the origin decreasing?",
    options: ["$0 < \\theta < \\pi$", "$\\dfrac{\\pi}{3} < \\theta < \\pi$", "$0 < \\theta < \\dfrac{\\pi}{3}$", "$\\pi < \\theta < 2\\pi$"],
    correctIndex: 2,
    explanation:
      "At $\\theta = 0$, $r = -2$; $r$ increases as $\\cos\\theta$ decreases, reaching 0 at $\\cos\\theta = \\frac{1}{2}$, that is $\\theta = \\frac{\\pi}{3}$, and then growing to 6 at $\\theta = \\pi$. The distance from the origin is $|r|$, which falls from 2 to 0 on $0 < \\theta < \\frac{\\pi}{3}$ and then rises. On $\\frac{\\pi}{3} < \\theta < \\pi$ the distance increases. $0 < \\theta < \\pi$ is where $r$ itself increases, which is not the same as the distance decreasing. On $\\pi < \\theta < 2\\pi$, $r$ decreases, but the distance decreases only until $\\theta = \\frac{5\\pi}{3}$ and then increases.",
  },
  // CED 3.13
  {
    id: "precalc-u3-055",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "A point has polar coordinates $\\left(-3, \\dfrac{\\pi}{6}\\right)$. In rectangular coordinates, the point is",
    options: [
      "$\\left(-\\dfrac{3\\sqrt{3}}{2}, -\\dfrac{3}{2}\\right)$",
      "$\\left(-\\dfrac{3}{2}, -\\dfrac{3\\sqrt{3}}{2}\\right)$",
      "$\\left(\\dfrac{3\\sqrt{3}}{2}, -\\dfrac{3}{2}\\right)$",
      "$\\left(\\dfrac{3\\sqrt{3}}{2}, \\dfrac{3}{2}\\right)$",
    ],
    correctIndex: 0,
    explanation:
      "$x = r\\cos\\theta = -3 \\cdot \\frac{\\sqrt{3}}{2} = -\\frac{3\\sqrt{3}}{2}$ and $y = r\\sin\\theta = -3 \\cdot \\frac{1}{2} = -\\frac{3}{2}$; the negative radius puts the point in Quadrant III, opposite the direction $\\frac{\\pi}{6}$. $\\left(\\frac{3\\sqrt{3}}{2}, \\frac{3}{2}\\right)$ ignores the sign of $r$. $\\left(-\\frac{3}{2}, -\\frac{3\\sqrt{3}}{2}\\right)$ swaps sine and cosine. $\\left(\\frac{3\\sqrt{3}}{2}, -\\frac{3}{2}\\right)$ applies the negative sign to $y$ only.",
  },
  // CED 3.14
  {
    id: "precalc-u3-056",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    stem: "The graph of the polar function $r = 4\\cos\\theta - 2$ passes through the origin for which values of $\\theta$ in $[0, 2\\pi)$?",
    options: [
      "$\\theta = \\dfrac{7\\pi}{6}$ and $\\theta = \\dfrac{11\\pi}{6}$",
      "$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{5\\pi}{3}$",
      "$\\theta = \\dfrac{2\\pi}{3}$ and $\\theta = \\dfrac{4\\pi}{3}$",
      "$\\theta = \\dfrac{\\pi}{6}$ and $\\theta = \\dfrac{11\\pi}{6}$",
    ],
    correctIndex: 1,
    explanation:
      "The curve is at the origin when $r = 0$: $4\\cos\\theta - 2 = 0$ gives $\\cos\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$ or $\\frac{5\\pi}{3}$. $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$ have $\\cos\\theta = -\\frac{1}{2}$, where $r = -4$. $\\frac{\\pi}{6}$ and $\\frac{11\\pi}{6}$ have $\\cos\\theta = \\frac{\\sqrt{3}}{2}$, where $r = 2\\sqrt{3} - 2$. $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$ mix the angles where sine, not cosine, is $-\\frac{1}{2}$.",
  },
  // CED 3.15
  {
    id: "precalc-u3-060",
    unit: "unit-3",
    topicSlug: "polar-coordinates-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A polar function $r = f(\\theta)$ gives the distance, in centimeters, from a pivot to the edge of a cam at angle $\\theta$ radians. It is known that $f(1) = 2.6$ and $f(2.5) = 1.4$. What is the average rate of change of $r$ with respect to $\\theta$ over the interval $1 \\le \\theta \\le 2.5$?",
    options: ["$-1.2$ centimeters per radian", "$-0.8$ centimeters per radian", "$0.8$ centimeters per radian", "$-1.8$ centimeters per radian"],
    correctIndex: 1,
    explanation:
      "The average rate of change is $\\frac{f(2.5) - f(1)}{2.5 - 1} = \\frac{1.4 - 2.6}{1.5} = \\frac{-1.2}{1.5} = -0.8$ centimeters per radian. $-1.2$ is the change in $r$ without dividing by the change in $\\theta$. $0.8$ has the wrong sign: $r$ is decreasing. $-1.8$ multiplies by 1.5 instead of dividing.",
  },
]
