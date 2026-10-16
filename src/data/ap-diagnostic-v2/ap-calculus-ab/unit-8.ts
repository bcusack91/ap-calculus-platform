/**
 * AP Calculus AB diagnostic v2, Unit 8: Applications of Integration.
 * No calculator; disc/washer and cross sections only (no shells, no arc
 * length). Stimulus sets: a region between two curves (calcab-s801), particle
 * motion from a velocity function (calcab-s802) and a tank's inflow table
 * (calcab-s803).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s801",
    title: "Region between a curve and a line",
    kind: "figure",
    content:
      "The figure shows the shaded region $R$ in the first quadrant bounded by the curve $y = \\sqrt{x}$ and the line $y = \\frac{x}{2}$. " +
      "The two graphs intersect at $(0, 0)$ and $(4, 2)$, and on $0 < x < 4$ the curve $y = \\sqrt{x}$ lies above the line.",
    svg: FIGURES["calcab-s801"],
  },
  {
    id: "calcab-s802",
    title: "A particle moving along a line",
    kind: "passage",
    content:
      "A particle moves along the $x$-axis for $0 \\le t \\le 4$ seconds. Its velocity, in meters per second, is $v(t) = t^2 - 4t + 3$, and its position at time $t = 0$ is $x(0) = 2$ meters. " +
      "Note that $v(t) = (t - 1)(t - 3)$, so the velocity is positive for $0 \\le t < 1$, negative for $1 < t < 3$ and positive for $3 < t \\le 4$.",
  },
  {
    id: "calcab-s803",
    title: "Water flowing into and out of a tank",
    kind: "table",
    content:
      "At time $t = 0$ minutes a tank holds 30 gallons of water. Water flows in at a rate of $R(t)$ gallons per minute, where $R$ is continuous, and drains out at a constant rate of 4 gallons per minute. Selected values of $R(t)$ are shown in the table.\n\n" +
      "| $t$ (minutes) | 0 | 4 | 6 | 10 |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| $R(t)$ (gallons per minute) | 6 | 10 | 9 | 5 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s801: region between y = sqrt(x) and y = x/2 ----
  {
    id: "calcab-s801-q1",
    stimulusId: "calcab-s801",
    unit: "unit-8",
    topicSlug: "area-between-curves-calcab",
    difficulty: "easy",
    stem: "What is the area of the region $R$?",
    options: ["$\\dfrac{4}{3}$", "$\\dfrac{16}{3}$", "$4$", "$\\dfrac{28}{3}$"],
    correctIndex: 0,
    explanation:
      "Area $= \\int_0^4 \\left(\\sqrt{x} - \\frac{x}{2}\\right)dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^2}{4}\\right]_0^4 = \\frac{16}{3} - 4 = \\frac{4}{3}$. $\\frac{16}{3}$ is the area under $y = \\sqrt{x}$ alone. 4 is the area under the line alone. $\\frac{28}{3}$ adds the two areas instead of subtracting.",
  },
  {
    id: "calcab-s801-q2",
    stimulusId: "calcab-s801",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "medium",
    stem: "Which of the following gives the volume of the solid generated when $R$ is revolved about the $x$-axis?",
    options: [
      "$\\pi\\displaystyle\\int_0^4 \\left(x - \\frac{x^2}{4}\\right)dx$",
      "$\\pi\\displaystyle\\int_0^4 \\left(\\sqrt{x} - \\frac{x}{2}\\right)^2 dx$",
      "$\\pi\\displaystyle\\int_0^4 \\left(\\frac{x^2}{4} - x\\right)dx$",
      "$\\pi\\displaystyle\\int_0^2 \\left(x - \\frac{x^2}{4}\\right)dx$",
    ],
    correctIndex: 0,
    explanation:
      "Washers: outer radius $\\sqrt{x}$, inner radius $\\frac{x}{2}$, so $V = \\pi\\int_0^4 \\left[(\\sqrt{x})^2 - \\left(\\frac{x}{2}\\right)^2\\right]dx = \\pi\\int_0^4 \\left(x - \\frac{x^2}{4}\\right)dx$. Squaring the difference of the radii is not the same as subtracting their squares. Reversing outer and inner gives a negative value. The upper limit must be the $x$-value 4, not the $y$-value 2 of the intersection point.",
  },
  {
    id: "calcab-s801-q3",
    stimulusId: "calcab-s801",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "hard",
    stem: "The region $R$ is the base of a solid. Each cross section of the solid perpendicular to the $x$-axis is a square. What is the volume of the solid?",
    options: ["$\\dfrac{8}{15}$", "$\\dfrac{8}{3}$", "$\\dfrac{16}{9}$", "$\\dfrac{8\\pi}{15}$"],
    correctIndex: 0,
    explanation:
      "The side of each square is $\\sqrt{x} - \\frac{x}{2}$, so $V = \\int_0^4 \\left(\\sqrt{x} - \\frac{x}{2}\\right)^2 dx = \\int_0^4 \\left(x - x^{3/2} + \\frac{x^2}{4}\\right)dx = 8 - \\frac{64}{5} + \\frac{16}{3} = \\frac{8}{15}$. $\\frac{8}{3}$ uses $x - \\frac{x^2}{4}$, the washer integrand without $\\pi$. $\\frac{16}{9}$ squares the area $\\frac{4}{3}$ instead of integrating the squared side. Cross-section volumes have no factor $\\pi$ unless the sections are circular.",
  },
  // ---- calcab-s802: particle with v(t) = t^2 - 4t + 3 ----
  {
    id: "calcab-s802-q1",
    stimulusId: "calcab-s802",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "easy",
    stem: "What is the displacement of the particle from $t = 0$ to $t = 4$?",
    options: ["$\\dfrac{4}{3}$ meters", "$4$ meters", "$\\dfrac{10}{3}$ meters", "$0$ meters"],
    correctIndex: 0,
    explanation:
      "Displacement $= \\int_0^4 v(t)\\,dt = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_0^4 = \\frac{64}{3} - 32 + 12 = \\frac{4}{3}$ m. 4 m is the total distance traveled, which counts the leftward motion as positive. $\\frac{10}{3}$ adds the initial position 2. 0 assumes the backward motion exactly cancels the forward motion.",
  },
  {
    id: "calcab-s802-q2",
    stimulusId: "calcab-s802",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "medium",
    stem: "What is the position of the particle at $t = 3$?",
    options: ["$x(3) = 2$", "$x(3) = 0$", "$x(3) = \\dfrac{10}{3}$", "$x(3) = \\dfrac{2}{3}$"],
    correctIndex: 0,
    explanation:
      "$x(3) = x(0) + \\int_0^3 v(t)\\,dt = 2 + (9 - 18 + 9) = 2$. 0 is the displacement $\\int_0^3 v\\,dt$ alone, without the initial position. $\\frac{10}{3}$ is the position at $t = 1$, where the particle turns around. $\\frac{2}{3}$ adds only the motion from $t = 1$ to $t = 3$, $-\\frac{4}{3}$, to the starting position and skips $0 \\le t \\le 1$.",
  },
  {
    id: "calcab-s802-q3",
    stimulusId: "calcab-s802",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "hard",
    stem: "What is the total distance traveled by the particle from $t = 0$ to $t = 3$?",
    options: ["$\\dfrac{8}{3}$ meters", "$0$ meters", "$\\dfrac{4}{3}$ meters", "$4$ meters"],
    correctIndex: 0,
    explanation:
      "Total distance $= \\int_0^3 |v(t)|\\,dt$. The velocity changes sign at $t = 1$: $\\int_0^1 v\\,dt = \\frac{1}{3} - 2 + 3 = \\frac{4}{3}$ and $\\int_1^3 v\\,dt = 0 - \\frac{4}{3} = -\\frac{4}{3}$, so the distance is $\\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$ m. 0 is the displacement $\\int_0^3 v\\,dt$: the particle returns to its starting point. $\\frac{4}{3}$ counts only one of the two legs. 4 m is the distance over $[0, 4]$, not $[0, 3]$.",
  },
  // ---- calcab-s803: tank inflow table ----
  {
    id: "calcab-s803-q1",
    stimulusId: "calcab-s803",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "easy",
    stem: "Which of the following is the best interpretation of $\\dfrac{1}{10}\\displaystyle\\int_0^{10} R(t)\\,dt$?",
    options: [
      "The average rate, in gallons per minute, at which water flows in over the 10 minutes",
      "The total number of gallons of water in the tank at time $t = 10$ minutes",
      "The rate, in gallons per minute, at which water flows into the tank at $t = 10$",
      "The average rate of change of the inflow rate over the 10 minutes",
    ],
    correctIndex: 0,
    explanation:
      "$\\int_0^{10} R(t)\\,dt$ is the total inflow in gallons, and dividing by the 10 minutes gives the average value of $R$: the average inflow rate in gallons per minute. The amount in the tank at $t = 10$ also needs the initial 30 gallons and the drainage. The rate at $t = 10$ is $R(10)$. The average change in the rate is $\\frac{R(10) - R(0)}{10}$.",
  },
  {
    id: "calcab-s803-q2",
    stimulusId: "calcab-s803",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "medium",
    stem: "Using a trapezoidal sum with the three subintervals indicated by the table to approximate $\\displaystyle\\int_0^{10} R(t)\\,dt$, what is the approximate amount of water in the tank at $t = 10$ minutes?",
    options: ["$69$ gallons", "$109$ gallons", "$39$ gallons", "$79$ gallons"],
    correctIndex: 0,
    explanation:
      "Trapezoidal sum: $4 \\cdot \\frac{6 + 10}{2} + 2 \\cdot \\frac{10 + 9}{2} + 4 \\cdot \\frac{9 + 5}{2} = 32 + 19 + 28 = 79$ gallons in. The amount is $30 + 79 - 4(10) = 69$ gallons. 109 forgets the 40 gallons drained. 39 forgets the initial 30 gallons. 79 is the inflow alone.",
  },
  // ---- standalone ----
  {
    id: "calcab-u8-002",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "easy",
    stem: "What is the average value of $g(x) = 4x^3$ over the interval $0 \\le x \\le 2$?",
    options: ["$8$", "$16$", "$\\sqrt[3]{2}$", "$32$"],
    correctIndex: 0,
    explanation:
      "Average value $= \\frac{1}{2 - 0}\\int_0^2 4x^3\\,dx = \\frac{1}{2}\\left[x^4\\right]_0^2 = \\frac{16}{2} = 8$. 16 is the integral, not divided by the length of the interval (it is also the average of the endpoint values $g(0) = 0$ and $g(2) = 32$). $\\sqrt[3]{2}$ is the $x$-value where $g$ equals its average value, since $4c^3 = 8$. 32 is $g(2)$, the value at the right endpoint.",
  },
  {
    id: "calcab-u8-003",
    unit: "unit-8",
    topicSlug: "area-between-curves-calcab",
    difficulty: "easy",
    stem: "What is the area of the region bounded by the graph of $y = 4 - x^2$ and the $x$-axis?",
    options: ["$\\dfrac{32}{3}$", "$\\dfrac{16}{3}$", "$16$", "$8$"],
    correctIndex: 0,
    explanation:
      "The graph meets the $x$-axis at $x = \\pm 2$ and is above it in between: $\\int_{-2}^{2} (4 - x^2)\\,dx = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right) = \\frac{32}{3}$. $\\frac{16}{3}$ integrates only from 0 to 2. 16 is the area of the rectangle $[-2, 2] \\times [0, 4]$. 8 is the area of the inscribed triangle.",
  },
  {
    id: "calcab-u8-004",
    unit: "unit-8",
    topicSlug: "area-between-curves-calcab",
    difficulty: "medium",
    stem: "What is the area of the region enclosed by the curves $x = 2y - y^2$ and $x = -y$?",
    options: ["$\\dfrac{9}{2}$", "$\\dfrac{10}{3}$", "$\\dfrac{27}{2}$", "$\\dfrac{4}{3}$"],
    correctIndex: 0,
    explanation:
      "The curves meet where $2y - y^2 = -y$, so $y(3 - y) = 0$: $y = 0$ and $y = 3$. Between them the parabola is to the right of the line, so the area is $\\int_0^3 \\left[(2y - y^2) - (-y)\\right]dy = \\int_0^3 (3y - y^2)\\,dy = \\frac{27}{2} - 9 = \\frac{9}{2}$. $\\frac{10}{3}$ uses the limits $y = 0$ to 2, where the parabola meets the $y$-axis. $\\frac{27}{2}$ integrates $3y$ and drops the $y^2$ term. $\\frac{4}{3}$ is the area between the parabola and the $y$-axis, using $x = 0$ instead of the line.",
  },
  {
    id: "calcab-u8-005",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "medium",
    stem: "The region bounded by $y = \\sqrt{x}$, the $x$-axis and the line $x = 9$ is revolved about the $x$-axis. What is the volume of the resulting solid?",
    options: ["$\\dfrac{81\\pi}{2}$", "$\\dfrac{81\\pi}{8}$", "$81\\pi$", "$243\\pi$"],
    correctIndex: 0,
    explanation:
      "Discs of radius $\\sqrt{x}$: $V = \\pi\\int_0^9 (\\sqrt{x})^2\\,dx = \\pi\\int_0^9 x\\,dx = \\frac{81\\pi}{2}$. $\\frac{81\\pi}{8}$ treats $\\sqrt{x}$ as a diameter, using radius $\\frac{\\sqrt{x}}{2}$. $81\\pi$ drops the $\\frac{1}{2}$ from $\\int x\\,dx$. $243\\pi$ integrates $x^2$, squaring twice.",
  },
  {
    id: "calcab-u8-006",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "medium",
    stem: "The base of a solid is the region bounded by $y = \\sqrt{x}$, the $x$-axis and the line $x = 9$. Cross sections perpendicular to the $x$-axis are semicircles whose diameters lie in the base. What is the volume of the solid?",
    options: ["$\\dfrac{81\\pi}{16}$", "$\\dfrac{81\\pi}{8}$", "$\\dfrac{81\\pi}{4}$", "$\\dfrac{81\\pi}{2}$"],
    correctIndex: 0,
    explanation:
      "Each diameter is $\\sqrt{x}$, so the radius is $\\frac{\\sqrt{x}}{2}$ and the area is $\\frac{1}{2}\\pi\\left(\\frac{\\sqrt{x}}{2}\\right)^2 = \\frac{\\pi x}{8}$. $V = \\frac{\\pi}{8}\\int_0^9 x\\,dx = \\frac{\\pi}{8} \\cdot \\frac{81}{2} = \\frac{81\\pi}{16}$. $\\frac{81\\pi}{8}$ uses full circles. $\\frac{81\\pi}{4}$ uses the diameter $\\sqrt{x}$ as the radius of a semicircle. $\\frac{81\\pi}{2}$ is the volume of revolution about the $x$-axis.",
  },
  {
    id: "calcab-u8-007",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "medium",
    stem: "A tank holds 100 gallons of water at $t = 0$. For $0 \\le t \\le 10$ minutes, water enters at $r(t) = 5 + 2t$ gallons per minute and leaves at a constant 9 gallons per minute. How many gallons are in the tank at $t = 10$?",
    options: ["$160$", "$250$", "$60$", "$150$"],
    correctIndex: 0,
    explanation:
      "Amount $= 100 + \\int_0^{10} (5 + 2t - 9)\\,dt = 100 + \\left[t^2 - 4t\\right]_0^{10} = 100 + 60 = 160$ gallons. 250 ignores the outflow ($100 + 150$). 60 is only the net change, without the initial 100 gallons. 150 is only the inflow, $\\int_0^{10} (5 + 2t)\\,dt$.",
  },
  {
    id: "calcab-u8-008",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "medium",
    stem: "What is the average value of $f(x) = \\sec^2 x$ on the interval $\\left[0, \\dfrac{\\pi}{4}\\right]$?",
    options: ["$\\dfrac{4}{\\pi}$", "$1$", "$\\dfrac{\\pi}{4}$", "$\\dfrac{3}{2}$"],
    correctIndex: 0,
    explanation:
      "Average value $= \\frac{1}{\\pi/4}\\int_0^{\\pi/4} \\sec^2 x\\,dx = \\frac{4}{\\pi}\\left[\\tan x\\right]_0^{\\pi/4} = \\frac{4}{\\pi}(1 - 0) = \\frac{4}{\\pi}$. 1 is the integral, not divided by the length $\\frac{\\pi}{4}$. $\\frac{\\pi}{4}$ multiplies by the length instead of dividing. $\\frac{3}{2}$ averages the endpoint values $\\sec^2 0 = 1$ and $\\sec^2\\frac{\\pi}{4} = 2$.",
  },
  {
    id: "calcab-u8-009",
    unit: "unit-8",
    topicSlug: "area-between-curves-calcab",
    difficulty: "medium",
    stem: "What is the total area of the regions enclosed by the graphs of $y = x^3$ and $y = x$?",
    options: ["$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$", "$\\dfrac{1}{4}$", "$1$"],
    correctIndex: 0,
    explanation:
      "The graphs meet at $x = -1, 0, 1$. On $(-1, 0)$, $x^3 > x$; on $(0, 1)$, $x > x^3$. Area $= \\int_{-1}^0 (x^3 - x)\\,dx + \\int_0^1 (x - x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$. $\\frac{3}{4}$ adds the functions, $\\int_0^1 (x + x^3)\\,dx$, instead of subtracting. $\\frac{1}{4}$ counts only one of the two regions. 1 doubles the correct total.",
  },
  {
    id: "calcab-u8-010",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "medium",
    stem: "A particle moves along a line with velocity $v(t) = 3t^2 - 4t$ for $t \\ge 0$, and its position at $t = 0$ is 5. What is its position at $t = 2$?",
    options: ["$5$", "$0$", "$4$", "$9$"],
    correctIndex: 0,
    explanation:
      "$x(2) = 5 + \\int_0^2 (3t^2 - 4t)\\,dt = 5 + [t^3 - 2t^2]_0^2 = 5 + (8 - 8) = 5$. 0 is the displacement alone. 4 is the velocity $v(2) = 12 - 8$. 9 adds $v(2)$ to the starting position instead of the integral of $v$.",
  },
  {
    id: "calcab-u8-011",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "medium",
    stem: "The region bounded by $y = x^3$, the line $y = 8$ and the $y$-axis is revolved about the $y$-axis. What is the volume of the resulting solid?",
    options: ["$\\dfrac{96\\pi}{5}$", "$12\\pi$", "$\\dfrac{768\\pi}{7}$", "$\\dfrac{48\\pi}{5}$"],
    correctIndex: 0,
    explanation:
      "Integrate in $y$: the radius at height $y$ is $x = y^{1/3}$, so $V = \\pi\\int_0^8 y^{2/3}\\,dy = \\pi \\cdot \\frac{3}{5} \\cdot 8^{5/3} = \\frac{3}{5} \\cdot 32\\pi = \\frac{96\\pi}{5}$. $12\\pi$ forgets to square the radius: $\\pi\\int_0^8 y^{1/3}\\,dy$. $\\frac{768\\pi}{7}$ revolves the region about the $x$-axis instead, $\\pi\\int_0^2 (64 - x^6)\\,dx$. $\\frac{48\\pi}{5}$ halves the correct volume.",
  },
  {
    id: "calcab-u8-012",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "hard",
    stem: "The region bounded by $y = x$ and $y = x^2$ for $0 \\le x \\le 1$ is revolved about the line $y = -1$. Which integral gives the volume of the solid?",
    options: [
      "$\\pi\\displaystyle\\int_0^1 \\left[(x + 1)^2 - \\left(x^2 + 1\\right)^2\\right]dx$",
      "$\\pi\\displaystyle\\int_0^1 \\left[(x - 1)^2 - \\left(x^2 - 1\\right)^2\\right]dx$",
      "$\\pi\\displaystyle\\int_0^1 \\left[(x + 1) - \\left(x^2 + 1\\right)\\right]^2 dx$",
      "$\\pi\\displaystyle\\int_0^1 \\left[\\left(x^2 + 1\\right)^2 - (x + 1)^2\\right]dx$",
    ],
    correctIndex: 0,
    explanation:
      "Distances from the axis $y = -1$ are the curve's height plus 1. On $0 < x < 1$ the line $y = x$ is above $y = x^2$, so the outer radius is $x + 1$ and the inner radius is $x^2 + 1$. $V = \\pi\\int_0^1 [(x + 1)^2 - (x^2 + 1)^2]\\,dx$. Subtracting 1 measures distances to $y = 1$. Squaring the difference of radii is not the washer formula. Swapping outer and inner gives a negative result.",
  },
  {
    id: "calcab-u8-013",
    unit: "unit-8",
    topicSlug: "volumes-of-revolution-calcab",
    difficulty: "hard",
    stem: "The region bounded by $y = e^x$, the line $y = 1$ and the line $x = 2$ is revolved about the line $y = 1$. Which integral gives the volume of the solid?",
    options: [
      "$\\pi\\displaystyle\\int_0^2 \\left(e^x - 1\\right)^2 dx$",
      "$\\pi\\displaystyle\\int_0^2 \\left(e^{2x} - 1\\right)dx$",
      "$\\pi\\displaystyle\\int_0^2 \\left(e^x + 1\\right)^2 dx$",
      "$\\pi\\displaystyle\\int_1^{e^2} \\left(e^x - 1\\right)^2 dx$",
    ],
    correctIndex: 0,
    explanation:
      "The region runs from $x = 0$ (where $e^x = 1$) to $x = 2$ and touches the axis of rotation, so the slices are discs of radius $e^x - 1$: $V = \\pi\\int_0^2 (e^x - 1)^2\\,dx$. $\\pi\\int_0^2 (e^{2x} - 1)\\,dx$ is the washer for rotation about the $x$-axis. $(e^x + 1)$ measures the distance to $y = -1$. The limits $1$ to $e^2$ are $y$-values, but the integral is in $x$.",
  },
  {
    id: "calcab-u8-014",
    unit: "unit-8",
    topicSlug: "integration-applications-calcab",
    difficulty: "hard",
    stem: "A continuous function $f$ has average value 6 on the interval $[1, 5]$, and $\\displaystyle\\int_1^3 f(x)\\,dx = 10$. What is the average value of $f$ on the interval $[3, 5]$?",
    options: ["$7$", "$14$", "$\\dfrac{7}{2}$", "$12$"],
    correctIndex: 0,
    explanation:
      "$\\int_1^5 f = 6 \\cdot 4 = 24$, so $\\int_3^5 f = 24 - 10 = 14$, and the average value on $[3, 5]$ is $\\frac{14}{2} = 7$. 14 is the integral, not divided by the length 2. $\\frac{7}{2}$ divides 14 by the length of the whole interval, 4, instead of 2. 12 divides the whole integral, 24, by 2 without removing the part over $[1, 3]$.",
  },
]
